import NavigationBar from "./NavBar"

function Header({currentPage, setCurrentPage}) {

  return(
    <div>
      <h1>Ben Marz</h1>
      <NavigationBar currentPage = {currentPage} setCurrentPage = {setCurrentPage}/>
    </div>
  )
}

export default Header