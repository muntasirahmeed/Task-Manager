import { Route, Routes } from "react-router-dom";
import CompleteTask from "./Components/CompleteTask";
import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home";
import Todo from "./Components/Todo";
import Footer from "./Components/Footer";
import  { Toaster } from "react-hot-toast";

import Calender1 from "./Components/Calender";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Dashboard />} />
          <Route path="todo" element={<Todo />} />
          <Route path="complete" element={<CompleteTask />} />
          <Route path="calender" element={<Calender1 />} />
        </Route>
      </Routes>
      <Footer/>
      <Toaster />
    </>
  );
}

export default App;
