import React, { Component } from "react";
import styled from "styled-components";

// Styled components
const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ErrorMsg = styled.span`
  color: red;
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

class Day5LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
      showWelcomeMessage: false,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.validateCredentials()) {
      this.setState({ showWelcomeMessage: true });
    }
  };

  validateCredentials = () => {
    const { email, password } = this.state;
    let isValid = true;

    // Validate email
    if (!email.trim()) {
      this.setState({ emailError: "Email is required" });
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      this.setState({ emailError: "Invalid email format" });
      isValid = false;
    } else {
      this.setState({ emailError: "" });
    }

    // Validate password
    if (!password.trim()) {
      this.setState({ passwordError: "Password is required" });
      isValid = false;
    } else if (password.length < 6) {
      this.setState({
        passwordError: "Password must be at least 6 characters long",
      });
      isValid = false;
    } else {
      this.setState({ passwordError: "" });
    }

    return isValid;
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password, emailError, passwordError, showWelcomeMessage } =
      this.state;
    return (
      <Container>
        <Title>Login Form</Title>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label htmlFor="email">Email:</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={this.handleInputChange}
              required
            />
            {emailError && <ErrorMsg>{emailError}</ErrorMsg>}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password:</Label>
            <Input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
              required
            />
            {passwordError && <ErrorMsg>{passwordError}</ErrorMsg>}
          </FormGroup>
          <SubmitButton type="submit">Login</SubmitButton>
        </Form>
        {/* Display the welcome message if valid credentials */}
        {showWelcomeMessage && <p>Welcome, {email}!</p>}
      </Container>
    );
  }
}

export default Day5LoginForm;
