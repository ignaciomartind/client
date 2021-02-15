import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faSearch, faShoppingBag, faShoppingCart, faTh } from '@fortawesome/free-solid-svg-icons'


import userIcon from '../img/person-icon-eg.jpg'
import './styles/header.css'

function Header(props){

    return <header className="header">
        <nav className="header-nav">
            <h1>gaMarket</h1>
            <FontAwesomeIcon className="icon" icon={ faTh } />
            <a href="#products">Products</a>
            <a href="#">Contests</a>
            <a href="#">Labs</a>
        </nav>
        <div className="header-search">
            <div className="search-bar">
                <input type="text"></input>
                <FontAwesomeIcon icon={ faSearch } />
            </div>
            <button className="btn-blue">Upload</button>
        </div>
        {props.isLogged ? 
            <div className="header-user">
                <FontAwesomeIcon className="icon" icon={ faBell } /> 
                <FontAwesomeIcon className="icon" icon={ faShoppingCart} />
                <a href="#" onClick={props.handleLogin}>Logout</a>
                <img src={userIcon} className="header-img"></img>
            </div>:
            <div className="header-user">
                <a href="#" onClick={props.handleLogin}>Login</a>
                <a href="#" onClick={props.handleLogin}>Register</a>
            </div>}
    </header>
}

export default Header