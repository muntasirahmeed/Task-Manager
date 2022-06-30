import React, { useState } from "react";

const UpdateModal = ({ singleTask, setModalShow }) => {
   const [user, setUser] = useState({ task: singleTask});
    const handleTaskChange = event =>{
        // console.log(event.target.value);
        const {task, ...rest} = user;
        const newtask = event.target.value;
        const newUser = {task: newtask, ...rest};

        setUser(newUser);
    }

  return (
    <div>
      {/* <!-- The button to open modal --> */}
      {/* <label for="my-modal-6" class="btn modal-button">
        open modal
      </label> */}

      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box bg-[#082032]">
          <textarea
            onChange={handleTaskChange}
            value={user.task}
            className="textarea block w-full h-32 resize-none border-2 border-yellow-600"
          ></textarea>
          <div class="mt-5 flex items-center gap-2 justify-center">
            <label
              onClick={() => setModalShow(false)}
              class="hover:bg-white hover:text-black transition-all duration-300 ease-in-out py-3 flex items-center gap-2 bg-yellow-600 text-white px-7 rounded-lg "
            >
              Close
            </label>
            <span class="hover:bg-white hover:text-black transition-all duration-300 ease-in-out py-3 flex items-center gap-2 bg-green-600 text-white px-5 rounded-lg ">
              Update
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
