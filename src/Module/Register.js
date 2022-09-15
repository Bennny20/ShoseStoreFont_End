import React, { Component } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
const axios = require("axios").default;
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      valid_email: "",
      password: "",
      valid_password: "",
      repassword: "",
      valid_re_password: "",
      ho_ten: "",
      valid_ho_ten: "",
      gioi_tinh: "Nữ",
      is_active: "signin",
    };
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }
  handleSubmitForm = (event) => {
    console.log(this.props.email);

    // event.preventDefault();

    axios
      .post("http://localhost:8081/converse/signup", {
        email: this.props.state.email,
        password: this.props.password,
        repassword: this.props.repassword,
        name: this.props.ho_ten,
      })
      .then((response) => {
        // handle success
        console.log(response);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };
  change_signup = () => {
    this.setState((prev) => {
      prev.is_active = "signup";
      return prev;
    });
    document.getElementById("signup").style.color = "black";
    document.getElementById("signin").style.color = "gray";
    document.getElementById("signup").style.textDecoration = "underline";
    document.getElementById("signin").style.textDecoration = "none";
  };

  change_signin = () => {
    this.setState((prev) => {
      prev.is_active = "signin";
      return prev;
    });
    document.getElementById("signin").style.color = "black";
    document.getElementById("signup").style.color = "gray";
    document.getElementById("signin").style.textDecoration = "underline";
    document.getElementById("signup").style.textDecoration = "none";
  };

  handleChange = (e) => {
    if (e.target.name === "email" && e.target.value) {
      let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (re.test(e.target.value)) {
        if (e.target.value) {
          this.setState((pre) => {
            pre["valid_" + e.target.name] = true;
            return pre;
          });
        }
      } else {
        if (e.target.value) {
          this.setState((pre) => {
            pre["valid_" + e.target.name] = false;
            return pre;
          });
        } else {
          this.setState((pre) => {
            pre["valid_" + e.target.name] = true;
            return pre;
          });
        }
      }
    }
    this.setState((pre) => {
      pre[e.target.name] = e.target.value;
      return pre;
    });
  };

  // handleSubmitForm = (event) => {
  //   console.log("hahahahha");
  //   event.preventDefault();
  //   const params = JSON.stringify({
  //     email: this.state.email,
  //     password: this.state.password,
  //   });
  //   console.log(params);

  //   axios
  //     .post("http://localhost:8081/converse/signup", params, {
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //     })
  //     .then(function (response) {
  //       console.log(response);
  //     })

  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };
  // const user = {
  //   email: this.state.email,
  //   password: this.state.password,
  //   repassword: this.state.repassword,
  //   name: this.state.ho_ten,
  // };

  // axios
  //   .post(`http://localhost:8081/converse/signup`, { user })
  //   .then((res) => {
  //     console.log(res);
  //     console.log(res.data);
  //   });

  render() {
    return (
      <div className="all_register">
        <div
          className="overlay_register"
          style={{ display: +this.props.isShow ? "block" : "none" }}
          onClick={this.props.handleIsShow}
        ></div>
        <form
          className={
            "formhorizontal " + (this.props.isShow ? "active" : "inactive")
          }
          role="form"
        >
          <div className="form-group title_register">
            <div id="signin" onClick={this.change_signin}>
              SIGN IN
            </div>
            <div id="signup" onClick={this.change_signup}>
              SIGN UP
            </div>
          </div>
          {this.state.is_active == "signin" ? (
            <div>
              <SignIn change_signup={this.change_signup}></SignIn>
            </div>
          ) : (
            <div>
              <SignUp
                handleSubmitForm={this.handleSubmitForm}
                change_signin={this.change_signin}
                email={this.state.email}
                password={this.state.password}
                repassword={this.state.repassword}
                ho_ten={this.state.ho_ten}
                handleChange={this.handleChange}
                valid_email={this.state.valid_email}
              ></SignUp>
            </div>
          )}
        </form>
      </div>
    );
  }
}

export default Register;
