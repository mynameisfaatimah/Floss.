import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import logo from '../assets/logo.png'

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your registration logic here
  };

  return (
    <Container style={{justifyContent: 'center'}}>
      <img
            src={logo}
            alt="Logo"
            style={{ width: "300px", display: "block", margin: "auto" }}
          />
          
        <body style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div style={{ border: '1px solid black', backgroundColor: '#004C68', borderRadius: '10px', marginTop: '20px', width: '520px', height: '300px'}}>
      <h2 className="text-center">Register</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
      </div>
      </body>
    </Container>
  );
};

export default Register;
