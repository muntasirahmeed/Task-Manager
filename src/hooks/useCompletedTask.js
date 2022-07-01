import { useQuery } from "react-query";

const useAddedTask = () => {
  const { isLoading, data, refetch } = useQuery("completedtask", () =>
    fetch("https://quiet-sands-49746.herokuapp.com/completed-task", {
      method: "GET",
    }).then((res) => res.json())
  );

  return [data, isLoading, refetch];
};

export default useAddedTask;
