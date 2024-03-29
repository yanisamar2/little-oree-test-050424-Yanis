// Libraries import
import { Router, Response, Request } from "express";
const router = Router();

// Route login : chek user's password and return a jwt token if successfull
export default router.post(
  "/user/login",
  async (req: Request, res: Response) => {
    // Login to be done here
  }
);
