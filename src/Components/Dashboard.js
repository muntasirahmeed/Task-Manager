import { CheckCircleIcon, TrashIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import logo from "../assests/images/logo.png";
import useCompletedTask from "../hooks/useCompletedTask";
import SmallTodo from "./SmallTodo";
import Spinner from "./Spinner";

const Dashboard = () => {

  const [complete, isLoading, refetch] = useCompletedTask();
  const [sortedData, setSortedData] = useState([]);

 
  useEffect(() => {
    if (complete) {
      const sorted = [...complete].reverse();
      setSortedData(sorted);
    }
  }, [complete]);

  const deleteTask = (_id) => {
    fetch(`http://localhost:4000/add/${_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success(`Task Deleted`);
          refetch();
        }
      });
  };
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <div className="bg-[#122A3B] p-5 lg:p-10   ">
        <div className="flex items-center justify-center mb-20 gap-3 ">
          <img src={logo} className="w-16 h-16" alt="" />

          <span className="lg:text-4xl font-bold text-[#0666b9] font-ralway">
            Task Manager
          </span>
        </div>
        <div className=" flex items-center flex-col lg:flex-row justify-center gap-5 w-full">
          <div className="lg:flex-1 w-full">
            <SmallTodo />
          </div>
          <div className="bg-yellow-500 lg:flex-1 h-[500px] w-full  rounded-lg  p-5 ">
            <h1 className="text-3xl font-bold mb-10 flex items-center gap-3">
              {" "}
              <CheckCircleIcon className="w-12 h-12" /> Task Completed
            </h1>
            <div className="space-y-3">
              {sortedData.slice(0, 6).map(
                (task) =>
                  task.complete && (
                    <div className="flex items-center gap-5 ">
                      <p className="bg-gray-100 h-[52px] flex items-center px-4 rounded-lg w-full">
                        {task.task}
                      </p>
                      <button
                        onClick={() => deleteTask(task._id)}
                        className=" hover:bg-[#082032] transition-all duration-300 ease-in-out py-3 flex items-center gap-2 bg-rose-600 text-white px-3 rounded-lg "
                      >
                        <TrashIcon className="w-6 h-6" />
                      </button>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
