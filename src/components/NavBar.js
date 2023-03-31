function NavBar({currentPage, setCurrentPage}) {

  return(
    <nav>
      <h4 onClick={() => setCurrentPage("About")}>About Me</h4>
      <h4 onClick={() => setCurrentPage("Contact")}>Contact Me</h4>
      <h4 onClick={() => setCurrentPage("Portfolio")}>Portfolio</h4>
      <h4 onClick={() => setCurrentPage("Resume")}>Resume</h4>
    </nav>
  )
}
export default NavBar