import { NavLink, useNavigate } from "react-router-dom";
import Header from "./Header";
import { useContext, useState } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";

const SignUp = () => {

  const navigate = useNavigate();
    const { createUser } = useContext(AuthContext)
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(email)) {
            setEmailError('Please enter a valid email address');
            return false;
        }
        setEmailError('');
        return true;
    };

    const validatePassword = (password) => {
        if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters');
            return false;
        }
        setPasswordError('');
        return true;
    };

    const handleRegister = (event) => {
        event.preventDefault();
        const email = event.target.email.value.trim();
        const password = event.target.password.value.trim();
        const confirmPassword = event.target.confirmPassword.value.trim();

        // Reset previous errors
        setEmailError('');
        setPasswordError('');
        setErrorMessage('');

        // Client-side validation
        let isValid = true;

        if (!email) {
            setEmailError('Email is required');
            isValid = false;
        } else if (!validateEmail(email)) {
            isValid = false;
        }

        if (!password) {
            setPasswordError('Password is required');
            isValid = false;
        } else if (!validatePassword(password)) {
            isValid = false;
        }

        if (password !== confirmPassword) {
            setPasswordError('Passwords do not match');
            isValid = false;
        }

        if (!isValid) return;

        // Firebase registration
        createUser(email, password)
            .then(() => {
                // const user = userCredential.user;
                // console.log(user)
                const newUser = {
                  email
              }
                const requestOptions = {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(newUser)
              };
      
              fetch(`${import.meta.env.VITE_API_BASE_URL}/users`, requestOptions)
                  .then(response => response.json())
                  .then(data => {
                      // console.log(data)
                      if (data.insertedId) {
                          Swal.fire({
                              title: 'successful!',
                              text: 'coffee added successfully',
                              icon: 'success',
                              confirmButtonText: 'Cool'
                          })
                      }
                  });
                navigate('/signIn')
            })
            .catch((error) => {
                console.error("Registration error:", error);
                setErrorMessage(error.message.replace('Firebase: ', ''));
                setSuccess(false);
            });
    };

  return (
    <>
      <div>
        <Header></Header>
      </div>
      <section>
                <div className="h-[700px] mt-10 rounded-2xl flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 animate-gradient">
                    <div className="relative w-full max-w-md p-8 space-y-8 bg-slate-800 rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-500 group">
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-500/30 via-transparent to-blue-500/30 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>

                        <div className="relative z-10">
                            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Create an User
                            </h2>

                            <form onSubmit={handleRegister} className="space-y-8" noValidate>
                                <div className="space-y-6">
                                    {/* Email Input */}
                                    <div className="group">
                                        <input
                                            type="email"
                                            name="email"
                                            className="w-full px-6 py-4 bg-slate-700/50 border-2 border-slate-600 rounded-2xl outline-none focus:border-purple-400 transition-all duration-300 placeholder-slate-400 text-slate-100 shadow-inner"
                                            placeholder="Email Address"
                                            required
                                        />
                                        {emailError && (
                                            <p className="mt-2 text-red-400 text-sm">{emailError}</p>
                                        )}
                                    </div>

                                    {/* Password Input */}
                                    <div className="group relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            className="w-full px-6 py-4 bg-slate-700/50 border-2 border-slate-600 rounded-2xl outline-none focus:border-purple-400 transition-all duration-300 placeholder-slate-400 text-slate-100 shadow-inner"
                                            placeholder="Create Password"
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white"
                                        >
                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                        </button>
                                    </div>

                                    {/* Confirm Password Input */}
                                    <div className="group relative flex flex-col">
                                        <div className="relative w-full flex items-center">
                                            <input
                                                type={showConfirmPassword ? "text" : "password"}
                                                name="confirmPassword"
                                                className="w-full px-6 py-4 pr-12 bg-slate-700/50 border-2 border-slate-600 rounded-2xl outline-none focus:border-purple-400 transition-all duration-300 placeholder-slate-400 text-slate-100 shadow-inner"
                                                placeholder="Confirm Password"
                                                required
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 text-white"
                                            >
                                                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                            </button>
                                        </div>
                                        {passwordError && (
                                            <p className="mt-2 text-red-400 text-sm">{passwordError}</p>
                                        )}
                                    </div>

                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="radio" required />
                                    <span className="text-white">I accept the terms and conditions</span>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full py-4 px-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                                >
                                    <span className="text-lg">Sign Up</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-bounce-horizontal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                                <p className="text-center text-white mt-4">Already have an account? <NavLink to="/signIn" className="text-pink-400 hover:underline">Login</NavLink></p>
                            </form>

                            {/* Status Messages */}
                            {errorMessage && (
                                <div className="mt-6 p-4 bg-red-400/10 border border-red-400/30 text-red-300 rounded-xl text-center animate-fade-in backdrop-blur-sm">
                                    ⚠️ {errorMessage}
                                </div>
                            )}

                            {success && (
                                <div className="mt-6 p-4 bg-green-400/10 border border-green-400/30 text-green-300 rounded-xl text-center animate-fade-in backdrop-blur-sm flex items-center justify-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-checkmark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Registration Successful!
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
      {/* <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">signUp</button>
              </div>
            </form>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default SignUp;