import Navbar from "./Components/Navbar"
import Sidebar from "./Components/Sidebar"
import Dashboard from "./Components/Dashboard"
import { useState } from "react";
const App = () => {
  const [isCloseBtn,setIsCloseBtn] = useState(false);
  return (
    <div className="flex">
      <Sidebar isCloseBtn={isCloseBtn} setIsCloseBtn={setIsCloseBtn}/>
      <div className="flex flex-col w-[100%] gap-3 pl-6">
        <Navbar isCloseBtn={isCloseBtn} setIsCloseBtn={setIsCloseBtn}/>
        <hr/>
        <Dashboard/>
      </div>
    </div>
  )
}

export default App
