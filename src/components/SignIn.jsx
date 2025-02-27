import { NavLink, useNavigate } from "react-router-dom";
import Header from "./Header";
import { AuthContext } from "../auth/AuthProvider";
import { useContext, useRef, useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../firebase/firebase.init";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignIn = () => {

    const navigate = useNavigate();
    const {logIn}=useContext(AuthContext)
    const emailRef = useRef();
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleForger = () => {
        // console.log(emailRef.current.value)
        const email = emailRef.current.value;
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("check your email")
            })
            .catch(() => {
                // console.log(error)
                // ..
            });
    }

    const handleLogin = (event) => {
        event.preventDefault();
        setErrorMessage('');
        setLoading(true);

        const email = event.target.email.value.trim();
        const password = event.target.password.value.trim();

        // Validate input
        if (!email || !password) {
            setErrorMessage("Email and password are required");
            setLoading(false);
            return;
        }

        // Firebase Authentication
        logIn(email, password)
            .then(() => {
                setLoading(false);
                event.target.reset();
                alert("Login Successful!");
                navigate('/')
            })
            .catch((error) => {
                setErrorMessage(error.message.replace("Firebase: ", ""));
                setLoading(false);
            });
    };

    return (
        <>
            <div>
                <Header></Header>
            </div>
            <section>
                <div className="h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                    <div className="relative w-full max-w-md p-8 space-y-8 bg-slate-800 rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-500">
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-500/30 via-transparent to-blue-500/30 opacity-50 transition-opacity"></div>

                        <div className="relative z-10">
                            <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Login
                            </h2>

                            <form onSubmit={handleLogin} className="space-y-6">
                                {/* Email Input */}
                                <div className="relative">
                                    <input
                                        type="email"
                                        ref={emailRef}
                                        name="email"
                                        className="w-full px-6 py-4 bg-slate-700/50 border-2 border-slate-600 rounded-2xl outline-none focus:border-purple-400 transition-all duration-300 placeholder-slate-400 text-slate-100 shadow-inner"
                                        placeholder="Email Address"
                                        required
                                    />
                                </div>

                                {/* Password Input */}
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        className="w-full px-6 py-4 pr-12 bg-slate-700/50 border-2 border-slate-600 rounded-2xl outline-none focus:border-purple-400 transition-all duration-300 placeholder-slate-400 text-slate-100 shadow-inner"
                                        placeholder="Password"
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

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                                    disabled={loading}
                                >
                                    {loading ? "Logging in..." : "Login"}
                                </button>
                            </form>

                            {/* Error Message */}
                            {errorMessage && (
                                <div className="mt-4 p-4 bg-red-400/10 border border-red-400/30 text-red-300 rounded-xl text-center animate-fade-in backdrop-blur-sm">
                                    ⚠️ {errorMessage}
                                </div>
                            )}

                            {/* Forgot Password & Sign Up Link */}
                            <div className="mt-4 text-center text-slate-400">
                                <p>
                                    Forgot Password?{" "}
                                    <NavLink onClick={handleForger} href="#" className="text-purple-400 hover:underline">
                                        Reset here
                                    </NavLink>
                                </p>
                                <p>
                                    Don&apos;t have an account?{" "}
                                    <NavLink to="/signUp" className="text-pink-400 hover:underline">
                                        Sign Up
                                    </NavLink>
                                </p>
                            </div>
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
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default SignIn;