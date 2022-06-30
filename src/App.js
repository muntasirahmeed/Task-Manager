import { Route, Routes } from "react-router-dom";
import Calender from "./Components/Calender";
import CompleteTask from "./Components/CompleteTask";
import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home";
import Todo from "./Components/Todo";
import  { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Dashboard />} />
          <Route path="todo" element={<Todo />} />
          <Route path="complete" element={<CompleteTask />} />
          <Route path="calender" element={<Calender />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
