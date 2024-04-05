// Libraries import
import { Router, Response, Request } from "express";
import { pool } from '../services/poolClient.js'; // Assuming you have a db.ts file for database connection
import { IUser, IIdentification } from '../interfaces/interfaces.js'; // Importing interfaces
import jwt from 'jsonwebtoken';
import { createHash } from 'crypto';

const router = Router();

// Function to hash password
const hashPassword = (password: string, salt: string) => {
  return createHash('sha256').update(password + salt).digest('base64');
}

// Route login : chek user's password and return a jwt token if successful
router.post("/user/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    const { rows } = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

    if (rows.length === 0) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    const user: IUser = rows[0];
    const identificationResult = await pool.query('SELECT * FROM identifications WHERE user_id = $1', [user.id]);

    if (identificationResult.rows.length === 0) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    const identification: IIdentification = identificationResult.rows[0];

    if (hashPassword(password,identification.salt) !== identification.hash) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    return res.json({ token: token, userId: user.id, email: user.email });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

export default router;