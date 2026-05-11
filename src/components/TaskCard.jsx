function TaskCard({
    task,
    deleteTask,
    editTask,
}) {

    return (

        <div className="bg-[#09142F] border border-[#1B2A52] rounded-2xl p-5 mb-5">

            <div className="flex justify-between items-start">

                <div>

                    <h2 className="text-2xl font-bold text-white">
                        {task.title}
                    </h2>

                    <p className="text-gray-400 mt-3">
                        {task.description}
                    </p>

                </div>

                <div className="flex gap-3">

                    <button
                        onClick={() => editTask(task)}
                        className="text-blue-400 text-2xl"
                    >
                        ✎
                    </button>

                    <button
                        onClick={() => deleteTask(task.id)}
                        className="text-red-400 text-3xl"
                    >
                        ×
                    </button>
                    <button onclick="deleteTask(${task.id})">Delete</button>
                </div>

            </div>

            <div className="mt-5 flex gap-3">

                <span className="bg-red-500/20 text-red-300 px-4 py-2 rounded-full text-sm font-semibold">
                    {task.priority}
                </span>

            </div>

        </div>

    );
}

export default TaskCard;