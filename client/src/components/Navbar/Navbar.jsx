import React , {useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Navbar.css";
import decode from "jwt-decode";
import logo from '../../assets/logo.png'
import search from '../../assets/search-solid.svg'
import Avatar from '../../components/Avatar/Avatar'
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from '../../actions/CurrentUser';




const Navbar = () => {
    const dispatch = useDispatch()
    var User = useSelector((state) => (state.currentUserReducer));
     const navigate = useNavigate()

    const handleLogout = () => {
      dispatch({type: 'LOGOUT'})
      navigate('/')
      dispatch(setCurrentUser(null))
    }



    useEffect(() => {
      const token = User?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }
      dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    } , [User?.token,dispatch])
     
     






  return (
    <nav className='main-nav'>
    <div className='navbar'>
        <Link to= '/' className='nav-item nav-btn'>
            <img src={logo} alt='logo'/>
        </Link>
        <Link to = '/' className='nav-item nav-btn'>About</Link>
        <Link to = '/' className='nav-item nav-btn'>Products</Link>
        <Link to = '/' className='nav-item nav-btn'>for Teams</Link>
        <form>
            <input type='text' placeholder='Search...'/>
            <img src={search} alt='search' width={18} className="search-icon"/>
        </form>
        {User === null ? 
        <Link to = '/Auth' className='nav-item nav-links' >Log in</Link> :
        <>
           <Avatar
             backgroundColor="#009dff"
                px="13px"
                py="7px"
                borderRadius="45%"
                color="white">
                <Link to = '/'
                style={{ color: "white", textDecoration: "none" }}>
                {User.result.name.charAt(0).toUpperCase()}
                </Link>
                </Avatar>
                
            <button className='nav-item nav-links' onClick={handleLogout}>Log out</button>
        </> }
    </div>
    </nav>
  )
}

export default Navbar