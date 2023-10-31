import { useSelector, useDispatch } from "react-redux";
import { deleteProfil } from "../../redux";

import { Link } from 'react-router-dom';

import logo from './../../assets/argentBankLogo.png'
import './style.css'

function Header() {
    const profile = useSelector((state) => state.user);
    const isConnected = profile.userName !== '';
    
    const dispatch = useDispatch();

    return (
        <header>
            <Link to='/'>
                <h1>
                    <img src={logo} alt="Argent Bank" />
                </h1>
            </Link>

            <nav className={!isConnected ? 'hover-effect' : ''}>
                <Link 
                    to='/profile'
                    className={isConnected ? 'hover-effect' : ''}
                >
                    <i className='fas fa-circle-user'></i>
                    {isConnected && profile.userName}
                </Link>
                
                {!isConnected && <Link to='/sign-in'>Sign In</Link>}

                {isConnected && 
                    <button 
                        className="hover-effect"
                        onClick={() => dispatch(deleteProfil())}
                    >
                        <i className="fas fa-right-from-bracket"></i>
                        Sign Out
                    </button>
                } 
            </nav>
        </header>
    )
}

export default Header;