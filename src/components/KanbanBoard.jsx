import { useState, useEffect } from "react";
import TaskCard from "./TaskCard";
import AddTaskModal from "./AddTaskModal";

function KanbanBoard() {

    const [showModal, setShowModal] = useState(false);

    const [tasks, setTasks] = useState({
        todo: [],
        progress: [],
        review: [
            {
                id: 1,
                title: "Connect CRUD actions",
                description: "Add create, edit and delete features",
                priority: "HIGH",
                status: "review",
            },
        ],
        done: [],
    });

    useEffect(() => {

        const savedTasks = localStorage.getItem("tasks");

        if (savedTasks) {
            setTasks(JSON.parse(savedTasks));
        }

    }, []);

    useEffect(() => {

        localStorage.setItem("tasks", JSON.stringify(tasks));

    }, [tasks]);

    const addTask = (task) => {

        setTasks((prev) => ({
            ...prev,
            [task.status]: [...prev[task.status], task],
        }));
    };

    const deleteTask = (taskId) => {

        const updatedTasks = {};

        Object.keys(tasks).forEach((column) => {

            updatedTasks[column] = tasks[column].filter(
                (task) => task.id !== taskId
            );

        });

        setTasks(updatedTasks);
    };
    const editTask = (task) => {

        const newTitle = prompt(
            "Edit task title",
            task.title
        );

        if (!newTitle) return;

        const updatedTasks = {};

        Object.keys(tasks).forEach((column) => {

            updatedTasks[column] = tasks[column].map((t) =>

                t.id === task.id
                    ? { ...t, title: newTitle }
                    : t

            );

        });

        setTasks(updatedTasks);
    };

    return (

        <>

            <div className="flex justify-end mb-6">

                <button
                    onClick={() => setShowModal(true)}
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-3 rounded-2xl font-bold"
                >
                    + Add Task
                </button>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

                {Object.entries(tasks).map(([column, taskList]) => (

                    <div
                        key={column}
                        className="bg-[#09142F] border border-[#1B2A52] rounded-3xl p-5 min-h-[500px]"
                    >

                        <div className="flex justify-between items-center mb-6">

                            <h2 className="text-3xl font-bold capitalize">
                                {column}
                            </h2>

                            <div className="w-10 h-10 rounded-full bg-indigo-900 flex items-center justify-center text-indigo-400 font-bold">
                                {taskList.length}
                            </div>

                        </div>

                        {taskList.length === 0 ? (

                            <div className="border-2 border-dashed border-gray-600 rounded-3xl h-40 flex items-center justify-center text-gray-400 text-center text-2xl">
                                Drop tasks here or create a new one.
                            </div>

                        ) : (

                            taskList.map((task) => (
                                <TaskCard
                                    key={task.id}
                                    task={task}
                                    deleteTask={deleteTask}
                                    editTask={editTask}
                                />
                            ))

                        )}

                    </div>

                ))}

            </div>

            {showModal && (
                <AddTaskModal
                    closeModal={() => setShowModal(false)}
                    addTask={addTask}
                />
            )}

        </>
    );
}

export default KanbanBoard;