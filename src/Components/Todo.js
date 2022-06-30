import React, { useEffect, useState } from "react";
import img2 from "../assests/images/img2.png";
import { CheckIcon, PlusCircleIcon, TrashIcon } from "@heroicons/react/solid";
import toast from "react-hot-toast";
import useAddedTask from "../hooks/useAddedTask";
import Spinner from "../Components/Spinner";
const Todo = () => {
  const [allTasks, setAllTasks] = useState([]);
  const [tasks, isLoading, refetch] = useAddedTask();
  useEffect(() => {
    if (tasks) {
      const sorted = [...tasks].reverse();
      setAllTasks(sorted);
    }
  }, [tasks]);
  if (isLoading) {
    return <Spinner />;
  }
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
            refetch();
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
      <div className=" mt-20 py-10 px-10 rounded-lg">
        <h1 className="text-[#F0A500] text-3xl font-bold mb-10">
          Recently Added Task
        </h1>
        <div className="space-y-3">
          {allTasks.map((task, index) => (
            <div
              key={task._id}
              className="flex items-center text-white w-full gap-5"
            >
              <p className="bg-[#082032] text-gray-100  tracking-wider text-lg py-3 capitalize px-4 rounded-lg w-full">
                {task.task}
              </p>
              <div className="flex items-center gap-4">
                <button className=" py-3 flex items-center gap-2 bg-green-600 text-white px-6 font-semibold rounded-lg ">
                  <CheckIcon className="w-6 h-6" /> Complete
                </button>
                <button className=" py-3 flex items-center gap-2 bg-rose-600 text-white px-6 font-semibold rounded-lg ">
                  <TrashIcon className="w-6 h-6" /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
