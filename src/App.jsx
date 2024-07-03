import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-600 p-4">Hi, Welcome our youtube channel</h1>
      <Header />
      <Home/>
      <Footer/>
    </>
  );
}

export default App;
