import { CheckCircleIcon, TrashIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import toast, { CheckmarkIcon } from "react-hot-toast";
import useCompletedTask from "../hooks/useCompletedTask";
import Spinner from "./Spinner";
const CompleteTask = () => {
  const [complete, isLoading, refetch] = useCompletedTask();
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    if (complete) {
      const sorted = [...complete].reverse();
      setSortedData(sorted);
    }
  }, [complete,refetch]);
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
    <div className="bg-teal-700 p-5 lg:p-10 pb-8 lg:pb-16 px-5 lg:px-10 font-ralway h-full">
      <div className="bg-yellow-500  rounded-lg px-5 lg:px-10 pt-5 lg:pt-10 pb-8 lg:pb-16 h-full overflow-scroll">
        <h1 className="text-2xl lg:text-3xl font-bold mb-10 flex items-center gap-3">
          {" "}
          <CheckCircleIcon className="w-12 h-12" /> Task Completed
        </h1>
        <div className="space-y-3">
          {sortedData.map((task) => (
            <div className="flex items-center gap-5 ">
              <p className="bg-white py-3 px-4 rounded-lg w-full">
                {task.task}
              </p>
              <button
                onClick={() => deleteTask(task._id)}
                className=" hover:bg-[#082032] transition-all duration-300 ease-in-out py-3 flex items-center gap-2 bg-rose-600 text-white px-3 rounded-lg "
              >
                <TrashIcon className="w-6 h-6" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompleteTask;
