import NavBar from "./NavBar";

function Header({currentPage, setCurrentPage}) {

  return(
    <div>
      <h1>Ben</h1>
      <NavBar currentPage = {currentPage} setCurrentPage = {setCurrentPage}/>
    </div>
  )
}

export default Header