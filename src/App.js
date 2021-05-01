import logo from "./logo.svg";
import "./App.css";

function App() {
  const myName = "Vadim";
  const user = {
    name: "Vadim",
    age: 26,
    getFullName: function () {
      return `${this.name} ${this.age}`;
    },
  };
  return (
    <div className="App">
      Hello, {user.getFullName()}
    </div>
  );
}

export default App;
