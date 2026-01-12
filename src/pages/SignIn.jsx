import { useState } from "react";
import "../Styles/SignIn.css";

export default function SignIn() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // basic validation
    if (!input) {
      setError("Please enter email or phone number");
      return;
    }

    const isEmail = /\S+@\S+\.\S+/.test(input);
    const isPhone = /^[6-9]\d{9}$/.test(input);

    if (!isEmail && !isPhone) {
      setError("Enter a valid email or 10-digit phone number");
      return;
    }

    setError("");
    console.log("User entered:", input);

    // 👉 NEXT STEP: send to backend
    // navigate("/verify");
  };

  return (
    <div className="signin-page">
      <form className="signin-box" onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <p>Enter your email or mobile number</p>

        <input
          type="text"
          placeholder="Email or Phone Number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        {error && <p className="error">{error}</p>}

        <button type="submit">Continue</button>

        <p className="terms">
          By continuing, you agree to our Terms & Privacy Policy
        </p>
      </form>
    </div>
  );
}
