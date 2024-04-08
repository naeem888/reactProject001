import NavBar from "./components/NavBar";
import TopHeader from "./components/TopHeader";
import Services from "./components/services";
import Chart from "./components/Chart";
function App() {
  return (
    <div className="myApp"> 
      <NavBar/>
      <TopHeader/>
      <Services/>
      <Chart/>
      
    </div>
  );
}

export default App;
