import NavBar from "./components/NavBar/NavBar";
import TopHeader from "./components/TopHeader/TopHeader";
import Services from "./components/services/services";
import Chart from "./components/Chart/Chart";
import TotalWorks from "./components/TotalWorks/TotalWorks";
import RecentProjects from './components/RecentProjects/RecentProjects';
import OurCourses from "./components/OurCourses/OurCourses";
import VideoPlay from "./components/VideoPlay/VideoPlay";
import ClientReview from "./components/ClientReview/ClientReview";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="myApp"> 
      <NavBar/>
      <TopHeader/>
      <Services/>
      <Chart/>
      <TotalWorks/>
      <RecentProjects/>
      <OurCourses/>
      <VideoPlay/>
      <ClientReview/>
      <Footer/>


      
    </div>
  );
}

export default App;
