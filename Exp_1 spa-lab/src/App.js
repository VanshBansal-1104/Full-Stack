// EXPERIMENT 1
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter SPA</h2>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default App;

// EXPERIMENT 2
// import { useState } from "react";

// function App() {
//   const [task, setTask] = useState("");
//   const [tasks, setTasks] = useState([]);

//   const addTask = () => {
//     setTasks([...tasks, task]);
//     setTask("");
//   };

//   return (
//     <div>
//       <h2>To-Do List SPA</h2>
//       <input
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//       />
//       <button onClick={addTask}>Add</button>

//       <ul>
//         {tasks.map((t, i) => (
//           <li key={i}>{t}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;



// EXPEROIMENT 3
// import { useState } from "react";

// function App() {
//   const [dark, setDark] = useState(false);

//   return (
//     <div
//       style={{
//         background: dark ? "black" : "white",
//         color: dark ? "white" : "black",
//         height: "100vh",
//       }}
//     >
//       <h2>Theme Toggle SPA</h2>
//       <button onClick={() => setDark(!dark)}>
//         Toggle Theme
//       </button>
//     </div>
//   );
// }

// export default App;



// EXPERIMENT 4
// import { useState } from "react";

// function App() {
//   const [name, setName] = useState("");

//   return (
//     <div>
//       <h2>Form SPA</h2>
//       <input
//         placeholder="Enter name"
//         onChange={(e) => setName(e.target.value)}
//       />
//       <p>Hello, {name}</p>
//     </div>
//   );
// }

// export default App;
