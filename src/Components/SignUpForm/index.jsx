import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../Context/authUserContext";
import { doCreateUserWithEmailAndPassword } from "../../firebase/auth";

export default function SignUp() {
  const { userLoggedIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isSigningUp, setIsSigningUp] = useState(false);

  const [formValidated, setFormValidated] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function formValidation() {
    if (password.length < 8) {
      setErrorMessage("password needs to be more then eight charecter");
    } else if (password !== confirmPassword) {
      setErrorMessage("password and confirm password doesn't match");
    } else {
      setFormValidated(true);
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    formValidation();
    if (!isSigningUp) {
      setIsSigningUp(true);
      await doCreateUserWithEmailAndPassword(email, password);
    }
  };

  return (
    <div>
      {userLoggedIn && <Navigate to={"/"} replace={true} />}

      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create an account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={(e) => onSubmit(e)}>
            <div>
              <label
                htmlFor="email"
                className="block text-md font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className=" ">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border-0 pl-[1rem]  py-[0.7rem] text-gray-900 shadow-sm ring-1 ring-inset  
 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
              </div>
               
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="block w-full rounded-md border-0 pl-[1rem]  py-[0.7rem] text-gray-900 shadow-sm ring-1 ring-inset  
 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
                <p>{errorMessage}</p>
              </div>
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Confirm Password
              </label>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  className="block w-full rounded-md border-0 pl-[1rem]  py-[0.7rem] text-gray-900 shadow-sm ring-1 ring-inset  
 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className=" mt-1 bg-black text-white py-[0.7rem] px-4 rounded-md hover:bg-gray-800 transition-all w-full  hover:bg-black-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Sign up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already a member?  
            <Link
              to="/LogInForm"
              href="#"
              className="font-semibold leading-6 text-blue-600 hover:text-blue-500"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
