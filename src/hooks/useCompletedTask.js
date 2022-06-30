import { useQuery } from "react-query";

const useAddedTask = () => {
  const { isLoading, data, refetch } = useQuery("completedtask", () =>
    fetch("http://localhost:4000/completed-task", {
      method: "GET",
    }).then((res) => res.json())
  );

  return [data, isLoading, refetch];
};

export default useAddedTask;
