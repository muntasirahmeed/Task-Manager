import { Route, Routes } from "react-router-dom";
import Calender from "./Components/Calender";
import CompleteTask from "./Components/CompleteTask";
import Home from "./Components/Home";
import Todo from "./Components/Todo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="todo" element={<Todo />} />
          <Route path="complete" element={<CompleteTask />} />
          <Route path="calender" element={<Calender />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
