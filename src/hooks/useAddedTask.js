import { useQuery } from "react-query";

const useAddedTask = () => {
  const { isLoading, data, refetch } = useQuery("addedTask", () =>
    fetch("http://localhost:4000/add", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  return [data, isLoading, refetch];
};

export default useAddedTask;
