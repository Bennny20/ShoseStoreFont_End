import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
class SignIn extends Component {
  render() {
    return (
      <div>
        <div className="form-group">
          <div className="form-group_signup">
            <TextField
              className="label_signup"
              type="email"
              name="email"
              id="standard-basic"
              label="Email"
              variant="standard"
              value={this.props.email}
              onChange={this.props.handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <div className="form-group_signup">
            <TextField
              className="label_signup"
              type="password"
              name="password"
              id="standard-basic"
              label="Password"
              variant="standard"
              value={this.props.password}
              onChange={this.props.handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <div className="button_submit_signin">
            <button type="submit">Sign In</button>
          </div>
          <div>
            <p>
              Already a member?{" "}
              <p
                className="arelymember"
                style={{ display: "inline" }}
                onClick={this.props.change_signin}
              >
                SIGN IN
              </p>
            </p>
          </div>
        </div>

        <div>
          <p style={{ color: "#757575", fontSize: "12px" }}>
            By signing in, you agree to the Converse Terms of Use and Privacy
            Policy.
          </p>
        </div>
      </div>
    );
  }
}

export default SignIn;
