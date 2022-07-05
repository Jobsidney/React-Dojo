import Home from "./home"
const NavBar = () => {
    return ( 
        <nav className="navBar">
            <h1>Dojo Blog</h1>
            <Home/>
            <div className="links">
                <a href="/">Home</a>
                <a href="/">cONTACT</a>
                <a href="/create">Blog</a>
            </div>
            
        </nav>
     );
}
 
export default NavBar;