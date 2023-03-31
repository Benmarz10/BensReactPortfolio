//import pages
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";


function App() {
  // const [variable, setVariable] = useState(dafaultValueForVariable)
  const [currentPage, setCurrentPage] = useState("About")


  return(
    <div>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      { currentPage === "About" ? <AboutMe /> : <></>}
      { currentPage === "Contact" && <Contact />}
      { currentPage === "Portfolio" ? <Portfolio /> : <></>}
      { currentPage === "Resume" ? <Resume /> : <></>}
      <Footer/>
    </div>
  )
}

export default App