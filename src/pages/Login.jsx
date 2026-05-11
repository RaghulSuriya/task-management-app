import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {

        if (!email || !password) {
            alert("Please fill all fields");
            return;
        }

        localStorage.setItem("token", "taskflow-token");

        navigate("/dashboard");
    };

    return (

        <div className="min-h-screen bg-[#071028] flex justify-center items-center p-6">

            <div className="bg-[#0B1736] border border-[#1B2A52] rounded-3xl p-10 w-full max-w-md">

                <h1 className="text-5xl font-bold text-white mb-3">
                    Welcome Back
                </h1>

                <p className="text-gray-400 mb-8">
                    Login to continue
                </p>

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-[#09142F] border border-[#1B2A52] p-4 rounded-2xl mb-4 text-white"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full bg-[#09142F] border border-[#1B2A52] p-4 rounded-2xl mb-6 text-white"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    onClick={handleLogin}
                    className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 py-4 rounded-2xl text-white font-bold text-lg"
                >
                    Sign In
                </button>

            </div>

        </div>

    );
}

export default Login;