import { useEffect, useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const fetchPost = async () =>
  fetch("https://random-data-api.com/api/coffee/random_coffee?size=5");

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: `Psychiatrist Appointment`,
      day: "Mar 16th at 1:15 PM",
      reminder: true,
    },
    {
      id: 2,
      text: `Code Assessment`,
      day: "Mar 17th at 11:00 AM",
      reminder: true,
    },
    {
      id: 3,
      text: `Code Review`,
      day: "Mar 17th at 11:00 AM",
      reminder: true,
    },
  ]);

  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    fetchPost().then((res) => {
      console.log(res);
      res.json().then((data) => {
        setCoffees(data);
      });
    });
  }, []);

  console.log(coffees);

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  // Add Task
  const addTask = (task) => {
    setTasks((prv) => [...prv, task]);
  };

  return (
    <div className="container">
      <Header onAdd={addTask} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
}

export default App;
