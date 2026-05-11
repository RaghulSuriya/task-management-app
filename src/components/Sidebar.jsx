function Sidebar() {

    return (

        <div className="bg-[#0B1736] border border-[#1B2A52] rounded-3xl p-6 text-white h-full">

            <div className="mb-10">

                <h2 className="text-3xl font-bold mb-2">
                    TaskFlow
                </h2>

                <p className="text-gray-400">
                    Manage your workflow
                </p>

            </div>

            <div className="space-y-4">

                <button className="w-full bg-[#09142F] p-4 rounded-2xl text-left">
                    Dashboard
                </button>

                <button className="w-full bg-[#09142F] p-4 rounded-2xl text-left">
                    My Tasks
                </button>

                <button className="w-full bg-[#09142F] p-4 rounded-2xl text-left">
                    Completed
                </button>

                <button className="w-full bg-red-500/20 text-red-300 p-4 rounded-2xl text-left">
                    Logout
                </button>

            </div>

        </div>

    );
}

export default Sidebar;