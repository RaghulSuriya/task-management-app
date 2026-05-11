function Register() {

    return (

        <div className="min-h-screen bg-[#071028] flex justify-center items-center">

            <div className="bg-[#0B1736] border border-[#1B2A52] rounded-3xl p-10 w-[500px]">

                <h1 className="text-5xl font-bold text-white mb-8">
                    Create Account
                </h1>

                <input
                    type="text"
                    placeholder="Name"
                    className="w-full bg-[#09142F] border border-[#1B2A52] p-4 rounded-2xl mb-4 text-white"
                />

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-[#09142F] border border-[#1B2A52] p-4 rounded-2xl mb-4 text-white"
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full bg-[#09142F] border border-[#1B2A52] p-4 rounded-2xl mb-6 text-white"
                />

                <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 py-4 rounded-2xl text-white font-bold text-lg">
                    Register
                </button>

            </div>

        </div>

    );
}

export default Register;