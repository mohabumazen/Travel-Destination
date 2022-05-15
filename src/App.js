import './App.css';
import Home from "./components/home/Home";
import data from "./data/db.json";
import { BrowserRouter } from "react-router-dom";




function App() {
  return (
    <BrowserRouter>
      <Home data={data} />;
    </BrowserRouter>
  );
}

export default App;
