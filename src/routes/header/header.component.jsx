import { useContext } from 'react';
import { UserContext } from '../../context/user.context';

import { Link, useNavigate, Outlet } from 'react-router-dom'

import { signOutUser } from '../../utils/firebase/firebase.utils'

import CartIcon from '../../components/cart-icon/cart-icon.component'

import StorefrontIcon from '@mui/icons-material/Storefront';

import SearchIcon from '@mui/icons-material/Search';


import './header.styles.css'

const Header = () => {
    const { currentUser } = useContext(UserContext)

    const navigate = useNavigate();

    const signOut = () => {
        signOutUser()
        navigate('/', {replace: true})
    }


    return (
        <>
            <header>
                <Link to="/">
                    <div className="header__logoContainer">
                        <StorefrontIcon
                            fontSize="large"
                            className="header__logo"
                        />
                        <h2 className="header__logoTitle">eSHOP</h2>
                    </div>
                </Link>

                <div className="header__search">
                    <input type="search" className='header__searchInput' />
                    <button className='header__searchIconContainer'>
                        <SearchIcon
                            fontSize="large"
                            className="header__searchIcon"
                        />
                    </button>
                </div>



                <div className="nav">
                    {
                        currentUser ?
                            (
                                <div className="nav__item nav__item-signOut" onClick={signOut}>
                                    <span className="nav__itemLineOne">
                                        Hello User
                                    </span>
                                    <span className="nav__itemLineTwo"
                                    >
                                        Sign Out
                                    </span>
                                </div>
                            )
                            : (
                                <Link to='/authentication'>
                                    <div className="nav__item">
                                        <span className="nav__itemLineOne">
                                            Hello Guest
                                        </span>
                                        <span className="nav__itemLineTwo">
                                            Sign In
                                        </span>
                                    </div>
                                </Link>
                            )
                    }


                    <div className="nav__item">
                        <span className="nav__itemLineOne">
                            Your
                        </span>
                        <span className="nav__itemLineTwo">
                            Shop
                        </span>
                    </div>

                    <Link to="/checkout">
                        <CartIcon />
                    </Link>

                </div>

            </header>
            <Outlet />
        </>
    )
}

export default Header