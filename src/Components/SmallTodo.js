import React, { useEffect, useState } from "react";

import {
  CheckIcon,
  ClipboardListIcon,
  PencilAltIcon,
  TrashIcon,
} from "@heroicons/react/solid";
import toast from "react-hot-toast";
import useAddedTask from "../hooks/useAddedTask";
import Spinner from "../Components/Spinner";
import UpdateModal from "./UpdateModal";
const SmallTodo = () => {
  const [allTasks, setAllTasks] = useState([]);
  const [tasks, isLoading, refetch] = useAddedTask();
  const [modalShow, setModalShow] = useState(null);
  const [updatingTask, setUpdatingTask] = useState({});
  const [oneTask, setOneTask] = useState({});
  useEffect(() => {
    if (tasks) {
      const sorted = [...tasks].reverse();
      setAllTasks(sorted);
    }
  }, [tasks]);
  if (isLoading) {
    return <Spinner />;
  }

  const deleteTask = (_id) => {
    fetch(`https://quiet-sands-49746.herokuapp.com/add/${_id}`, {
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
  const updateTask = (_id) => {
    setModalShow(true);
    fetch(`https://quiet-sands-49746.herokuapp.com/updatetask/${_id}`)
      .then((res) => res.json())
      .then((data) => setUpdatingTask(data));
  };
  const CompleteTask = (_id) => {
    fetch(`https://quiet-sands-49746.herokuapp.com/complete/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setOneTask(data);
        const tasks = { oneTask };
        fetch(`https://quiet-sands-49746.herokuapp.com/completed-task/${_id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(tasks),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount) {
              toast.success("Task Complete", { id: 19, position: "top-right" });
              refetch();
            }
          });
      });
    //
  };

  return (
    <div className=" h-[500px] font-ralway">
      <div className=" bg-[#2A2550] p-5 rounded-lg w-full h-full">
        <h1 className="text-2xl lg:text-3xl font-bold mb-10 text-[#F0A500] flex items-center gap-3">
          {" "}
          <ClipboardListIcon className="w-12 h-12" /> Pending Tasks
        </h1>
        <div className="space-y-3 w-full">
          {allTasks.slice(0, 6).map(
            (task, index) =>
              task.complete || (
                <div key={task._id} className="w-full">
                  <div className="flex  lg:items-center flex-col justify-center  lg:flex-row    text-white  gap-5">
                    <p className="bg-[#082032] text-gray-100  text-lg py-3 capitalize px-4 rounded-lg w-full">
                      {task.task}
                    </p>
                    <div className="flex lg:flex-1  items-center justify-center gap-4 w-full">
                      <button
                        onClick={() => CompleteTask(task._id)}
                        className="hover:bg-[#082032] transition-all duration-300 ease-in-out  py-3 flex items-center gap-2 bg-[#07814a] text-white px-3  rounded-lg "
                      >
                        <CheckIcon className="w-6 h-6" />
                      </button>
                      <label
                        for="my-modal-6"
                        onClick={() => updateTask(task._id)}
                        class=" modal-button hover:bg-[#082032] transition-all duration-300 ease-in-out py-3 flex items-center gap-2 bg-[#F0A500] text-white px-3 rounded-lg "
                      >
                        <PencilAltIcon className="w-6 h-6" />
                      </label>
                      <button
                        onClick={() => deleteTask(task._id)}
                        className=" hover:bg-[#082032] transition-all duration-300 ease-in-out py-3 flex items-center gap-2 bg-rose-600 text-white px-3 rounded-lg "
                      >
                        <TrashIcon className="w-6 h-6" />
                      </button>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
      {modalShow && (
        <UpdateModal
          update={updatingTask}
          setModalShow={setModalShow}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default SmallTodo;
