import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, signUpUser, users } from "../profile/profileSlice";
import toast, { Toaster } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { profile, status, error } = useSelector((state) => state.profile);

  const createAccountHandler = () => {
    const newUser = {
      firstName,
      lastName,
      email,
      password: pass,
    };

    dispatch(signUpUser(newUser));
  };

  const loginHandler = () => {
    dispatch(loginUser({ email, pass }));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  useEffect(() => {
    if (profile?.email) {
      navigate("/profile");
    }
  }, [profile?.email]);

  const guestLoginHandler = () => {
    dispatch(loginUser({ email: "vtr0x@gmail.com", pass: "1234" }));
  };

  return (
    <>
      <Header />
      <main
        className="my-4 d-flex justify-content-center align-content-center"
        style={{ height: "auto" }}>
        <div
          className="border card  px-3 py-2"
          style={{ width: "50vh", height: "auto" }}>
          <p className="fs-5 fw-semibold text-center mt-3 mb-0">
            {isLoginForm ? "Login" : "Sign Up"}
          </p>
          <form>
            {!isLoginForm && (
              <>
                <input
                  type="text"
                  placeholder="Fist Name"
                  className="form-control mt-2"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="form-control mt-2"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </>
            )}
            <input
              type="email"
              placeholder="Email"
              className="form-control mt-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="form-control mt-2"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </form>
          {isLoginForm ? (
            <div className="my-4 d-flex justify-content-between text-center">
              <button className="btn btn-light " onClick={loginHandler}>
                Login
              </button>
              <button className="btn btn-light " onClick={guestLoginHandler}>
                Login as Guest
              </button>
            </div>
          ) : (
            <button
              className="btn btn-light my-4"
              onClick={createAccountHandler}>
              Create new Account
            </button>
          )}
          <p className="fs-6 fw-semibold">
            {isLoginForm ? " Don't have account? " : " Already have account? "}
            <span
              onClick={() => setIsLoginForm((prev) => !prev)}
              style={{ textDecoration: "underline", cursor: "pointer" }}>
              {isLoginForm ? "Sign Up" : "Login"}
            </span>
          </p>
        </div>
        <Toaster />
      </main>
    </>
  );
};

export default Login;
