import { useEffect, useState } from "react";

const useAddedTask = () => {
  const [addedTask, setAddedTask] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/add")
      .then((res) => res.json())
      .then((data) => setAddedTask(data));
  }, []);
  return [addedTask];
};

export default useAddedTask;
