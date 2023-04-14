import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import logo from '../assets/logo.png'

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
  };

  return (
    <Container className="mt-5" style={{justifyContent: 'center'}}>
        <img
            src={logo}
            alt="Logo"
            style={{ width: "300px", display: "block", margin: "auto" }}
          />
          <body style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <div style={{ border: '1px solid black', backgroundColor: '#004C68', borderRadius: '10px', marginTop: '20px', width: '520px', height: '300px'}}>
      <h2 className="text-center">Login</h2>
      <Form onSubmit={handleSubmit} >
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmailChange} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" style={{paddingBottom: '20px', paddingTop: '20px'}}>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
        </Form.Group>

        <Button variant="primary" type="submit" >
          Submit
        </Button>
      </Form>
      </div>
      </body>
    </Container>
  );
};

export default LoginPage;
