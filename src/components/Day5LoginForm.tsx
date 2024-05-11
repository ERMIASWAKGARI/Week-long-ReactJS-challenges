// Day5LoginForm.tsx
import React, { useState } from "react";

const Day5LoginForm: React.FC = () => {
  // State to manage the email and password input fields
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // State to manage the visibility of validation errors and welcome message
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [showWelcomeMessage, setShowWelcomeMessage] = useState<boolean>(false);

  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Validate the user's credentials
    if (validateCredentials()) {
      setShowWelcomeMessage(true);
    }
  };

  // Function to validate the user's credentials
  const validateCredentials = (): boolean => {
    let isValid = true;

    // Validate email
    if (!email.trim()) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Invalid email format");
      isValid = false;
    } else {
      setEmailError("");
    }

    // Validate password
    if (!password.trim()) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {emailError && <span style={{ color: "red" }}>{emailError}</span>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
};

export default Day5LoginForm;
