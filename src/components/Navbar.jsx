function Navbar() {

    return (

        <div className="bg-[#0B1736] border border-[#1B2A52] rounded-3xl p-5 flex justify-between items-center mb-6">

            <h1 className="text-3xl font-bold text-white">
                TaskFlow
            </h1>

            <div className="flex gap-4">

                <button className="bg-[#09142F] border border-[#1B2A52] px-5 py-3 rounded-2xl text-white">
                    Theme
                </button>

                <button className="bg-gradient-to-r from-indigo-500 to-purple-600 px-5 py-3 rounded-2xl text-white font-bold">
                    + New Task
                </button>

            </div>

        </div>

    );
}

export default Navbar;