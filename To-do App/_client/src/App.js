import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/navbar";
import { Register } from "./components/register/register";
import { Login } from "./components/login/login";
import { ListTasks } from "./components/list-tasks/listTasks";
import { CreateTask } from "./components/createTask/createTask";
import { Footer } from "./components/footer/footer";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" Component={Login} />
            <Route path="/login" Component={Login} />
            <Route path="/register" Component={Register} />
            <Route path="/tasks" Component={ListTasks} />
            <Route path="/tasks/create" Component={CreateTask} />
            <Route path="/tasks/:id/update" Component={CreateTask} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
