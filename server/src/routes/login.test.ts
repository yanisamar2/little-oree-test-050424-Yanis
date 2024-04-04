import request from 'supertest';
import app from '../server.js'; // import your Express app 

describe('POST /user/login', () => {
  it('should respond with a token for valid credentials', async () => {
    const response = await request(app)
      .post('/user/login')
      .send({ email: 'john.doe@tucoenergie.fr', password: 'Azerty01!' });
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('token');
  });

  it('should respond with an error for invalid credentials', async () => {
    const response = await request(app)
      .post('/user/login')
      .send({ email: 'john.doe@tucoenergie.fr', password: 'wrongpassword' });

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
  });
  
  it('should respond with an error if email is missing', async () => {
    const response = await request(app)
      .post('/user/login')
      .send({ password: 'Azerty01!' });

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
  });

  it('should respond with an error if password is missing', async () => {
    const response = await request(app)
      .post('/user/login')
      .send({ email: 'john.doe@tucoenergie.fr' });

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
  });

  it('should respond with an error if email and password are missing', async () => {
    const response = await request(app)
      .post('/user/login')
      .send({});

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
  });
});