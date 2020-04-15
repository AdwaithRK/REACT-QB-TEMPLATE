import './styles.scss';
import { connect } from 'react-redux';
import React, { useState } from 'react';
import { Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import { login } from '../../store/actions/user';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateForm = () => email.length > 0 && password.length > 0;

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login({ email, password });
  };

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email">
          <FormLabel>Email</FormLabel>
          <FormControl autoFocus type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormGroup>
        <FormGroup controlId="password">
          <FormLabel>Password</FormLabel>
          <FormControl value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};

const mapDispatchToProps = () => ({
  login,
});

export default connect(null, mapDispatchToProps)(Login);
