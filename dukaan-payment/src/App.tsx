
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/sidebar";

function App() {

  return (
   <div className="w-full grid grid-cols-[2fr_10fr] bg-[#FAFAFA]" >
   <Sidebar/>
   <Dashboard/>
   </div>
  );
}

export default App;
