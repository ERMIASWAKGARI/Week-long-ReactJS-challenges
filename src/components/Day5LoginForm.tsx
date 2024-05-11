import React, { Component } from "react";

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
      <div>
        <h2>Login Form</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={this.handleInputChange}
              required
            />
            {emailError && <span style={{ color: "red" }}>{emailError}</span>}
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
              required
            />
            {passwordError && (
              <span style={{ color: "red" }}>{passwordError}</span>
            )}
          </div>
          <button type="submit">Login</button>
        </form>
        {/* Display the welcome message if valid credentials */}
        {showWelcomeMessage && <p>Welcome, {email}!</p>}
      </div>
    );
  }
}

export default Day5LoginForm;
