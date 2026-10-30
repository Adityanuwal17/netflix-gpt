import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          alt="bg-logo"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/29195c81-5ebb-453e-82e9-d3a50737dfb3/web/IN-en-20261026-TRIFECTA-perspective_ef561213-292c-4768-aef0-c1db800e385e_large.jpg"
        ></img>
      </div>
      <form className="text-white absolute p-12 bg-black/80 w-3/12 my-36 mx-auto right-0 left-0">
        <h1 className="font-bold text-3xl text-white py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 bg-gray-700 w-full text-white"
          ></input>
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 bg-gray-700 w-full text-white"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 bg-gray-700 w-full text-white"
        ></input>

        <button className="p-2 my-6 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-2 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign in now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
