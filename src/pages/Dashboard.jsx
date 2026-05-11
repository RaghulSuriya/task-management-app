import KanbanBoard from "../components/KanbanBoard";

function Dashboard() {
    return (
        <div className="min-h-screen bg-[#071028] text-white p-6">

            {/* TOP NAVBAR */}
            <div className="bg-[#0B1736] border border-[#1B2A52] rounded-3xl p-6 flex justify-between items-center mb-6">

                <div className="flex items-center gap-4">

                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-3xl font-bold">
                        T
                    </div>

                    <div>
                        <h1 className="text-4xl font-bold">
                            TaskFlow Kanban
                        </h1>

                        <p className="text-gray-400 text-lg">
                            Manage tasks beautifully and move faster.
                        </p>
                    </div>

                </div>

            </div>

            <div className="grid grid-cols-12 gap-6">

                {/* SIDEBAR */}
                <div className="col-span-12 lg:col-span-3 bg-[#0B1736] border border-[#1B2A52] rounded-3xl p-6">

                    <div className="flex items-center gap-4 mb-8">

                        <div className="w-14 h-14 rounded-2xl bg-indigo-900 flex items-center justify-center text-2xl font-bold text-indigo-400">
                            S
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold">
                                srs472006
                            </h2>

                            <p className="text-gray-400">
                                srs472006@gmail.com
                            </p>
                        </div>

                    </div>

                    {/* STATS */}
                    <div className="grid grid-cols-2 gap-4">

                        <div className="bg-[#09142F] rounded-2xl p-5 border border-[#1B2A52]">
                            <h1 className="text-4xl font-bold">4</h1>
                            <p className="text-gray-400 mt-2">Total Tasks</p>
                        </div>

                        <div className="bg-[#09142F] rounded-2xl p-5 border border-[#1B2A52]">
                            <h1 className="text-4xl font-bold">1</h1>
                            <p className="text-gray-400 mt-2">Completed</p>
                        </div>

                        <div className="bg-[#09142F] rounded-2xl p-5 border border-[#1B2A52]">
                            <h1 className="text-4xl font-bold">1</h1>
                            <p className="text-gray-400 mt-2">In Progress</p>
                        </div>

                        <div className="bg-[#09142F] rounded-2xl p-5 border border-[#1B2A52]">
                            <h1 className="text-4xl font-bold">2</h1>
                            <p className="text-gray-400 mt-2">High Priority</p>
                        </div>

                    </div>

                </div>

                {/* MAIN CONTENT */}
                <div className="col-span-12 lg:col-span-9 bg-[#0B1736] border border-[#1B2A52] rounded-3xl p-6">

                    <h1 className="text-5xl font-bold mb-4">
                        Kanban Board
                    </h1>

                    <p className="text-gray-400 text-xl mb-6">
                        Drag cards between columns or use the task menu.
                    </p>

                    <KanbanBoard />

                </div>

            </div>

        </div>
    );
}

export default Dashboard;