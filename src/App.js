import './App.css';
import Home from "./components/home/Home";
import data from "./data/db.json";



function App() {
  return (
    <Home data={data}></Home>
  );
}

export default App;
