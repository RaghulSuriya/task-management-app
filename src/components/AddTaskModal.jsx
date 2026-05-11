import { useState } from "react";

function AddTaskModal({ closeModal, addTask }) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("HIGH");
    const [status, setStatus] = useState("todo");

    const handleSubmit = () => {

        const newTask = {
            id: Date.now(),
            title,
            description,
            priority,
            status,
        };

        addTask(newTask);
        closeModal();
    };

    return (

        <div className="fixed inset-0 bg-black/60 flex justify-center items-center">

            <div className="bg-[#0B1736] p-8 rounded-3xl w-[500px]">

                <h1 className="text-4xl font-bold text-white mb-6">
                    Add Task
                </h1>

                <input
                    type="text"
                    placeholder="Title"
                    className="w-full p-4 rounded-2xl bg-[#09142F] text-white mb-4"
                    onChange={(e) => setTitle(e.target.value)}
                />

                <textarea
                    placeholder="Description"
                    className="w-full p-4 rounded-2xl bg-[#09142F] text-white mb-4 h-32"
                    onChange={(e) => setDescription(e.target.value)}
                />

                <select
                    className="w-full p-4 rounded-2xl bg-[#09142F] text-white mb-4"
                    onChange={(e) => setPriority(e.target.value)}
                >
                    <option>HIGH</option>
                    <option>MEDIUM</option>
                    <option>LOW</option>
                </select>

                <select
                    className="w-full p-4 rounded-2xl bg-[#09142F] text-white mb-6"
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="todo">Todo</option>
                    <option value="progress">Progress</option>
                    <option value="review">Review</option>
                    <option value="done">Done</option>
                </select>

                <div className="flex gap-4">

                    <button
                        onClick={closeModal}
                        className="flex-1 bg-gray-700 py-4 rounded-2xl text-white"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleSubmit}
                        className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-600 py-4 rounded-2xl text-white"
                    >
                        Add
                    </button>

                </div>

            </div>

        </div>
    );
}

export default AddTaskModal;