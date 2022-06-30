import React from "react";
import img2 from "../assests/images/img2.png";
import { PlusCircleIcon } from "@heroicons/react/solid";
import toast from "react-hot-toast";
import useAddedTask from "../hooks/useAddedTask";
const Todo = () => {
  const [addedTask] = useAddedTask();
  const addTask = (event) => {
    event.preventDefault();
    const task = event.target.task.value;
    const data = { task };

    if (task) {
      fetch("http://localhost:4000/add", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            toast.success("Task Added", { id: 5, position: "top-right" });
            event.target.reset();
          } else {
            toast.error("Failed to add", { id: 6, position: "top-right" });
          }
        });
    } else {
      toast.error("Please Add Some Text", { id: 3, position: "top-right" });
    }
  };
  return (
    <div className="p-10 font-ralway">
      <div className="bg-[#05569c] pt-10 pb-16 px-10 rounded-lg text-white">
        <div className="flex gap-3 items-center justify-center mb-10">
          <img src={img2} alt="" />
          <h1 className="text-4xl font-bold "> Add Your Task</h1>
        </div>{" "}
        <form onSubmit={addTask}>
          <div className="flex items-center w-1/2 mx-auto gap-2 text-black">
            <input
              type="text"
              className="input focus:outline-none w-full"
              name="task"
            />
            <button
              className="btn btn-md bg-[#F0A500] flex border-none items-center gap-2"
              type="submit"
            >
              <PlusCircleIcon className="w-7 h-7" />
              Add
            </button>
          </div>
        </form>
      </div>
      <div className="bg-yellow-600 mt-20 py-10 px-10 rounded-lg">
        {addedTask.map((task) => (
          <div className="bg-white mb-2 py-2 ">{task.task}</div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
