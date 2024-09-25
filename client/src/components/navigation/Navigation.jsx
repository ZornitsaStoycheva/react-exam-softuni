import { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/authContext'
import Navigation2 from '../nav2/Navigation2'
import Search from '../search/Search'

export default function Navigation() {
    const {
        isAutenticated,
        username,
        email,
        userId
    } = useContext(AuthContext)

    return (
        <header className="header-section">
        <div className="site-header">
            <div className="logo">
                <h1><Link to="/"><i className="fa-solid fa-car"></i></Link></h1>
            </div>
            
            <nav className="main-nav">
                <ul>
                    
                    <li><Link to="/">Home</Link></li>
                    
                    <li><Link to="/cars">Cars</Link></li>
                    {/* <li><Link to="/search">Search</Link></li> */}
                    
                    {isAutenticated && (
                    <div className='user'>
                        <li><Link to="/cars/create">Add Car</Link></li>
                        <li><Link to="/cars/my-publish">My Publish</Link></li>
                        <li><Link to="/auth/logout">Logout</Link></li>
                    </div>
                    )}

                    {!isAutenticated && (
                    <div className='guest'>
                        <li><Link to="/auth/login">Login</Link></li>
                        <li><Link to="/auth/register">Register</Link></li>
                    </div>
                    )}

<li>
                    <div className="form-search" style={{padding: "0"}}>
                <form className="search" style={{padding: "0"}}>
                    <div style={{marginTop: "2px"}}>
                        <input
                        type="search"
                        id="mySearch"
                        name="q"
                        placeholder="Brand…" />
                    </div>
                </form>
            </div>
                    </li>
                </ul>
            </nav>
        </div>

        <div>
            <Navigation2 />
        </div>
    </header>
    )
}