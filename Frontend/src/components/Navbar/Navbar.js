import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './Navbar.css';
import { googleSignIn, userSignOut } from '../../store/actions/authActions';

const Navbar = props => {
    const authState = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        const navbar = document.querySelector('nav');
        window.addEventListener('scroll', (event) => {
            if (window.pageYOffset>= 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }, []);

    const loginHandler = () => {
        dispatch(googleSignIn());
    };

    const logoutHandler = () => {
        dispatch(userSignOut());
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <a className="navbar-brand" href="/" style={{fontFamily: 'Pacifico'}}>campusX</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/videos">Videos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/admin">Admin</Link>
                    </li>
                    <li className="nav-item">
                        {
                            authState.user ? (
                                <Link className="nav-link" to="#" tabIndex="-1" aria-disabled="true" onClick={logoutHandler}>Logout</Link>
                            ) : (
                                <Link className="nav-link" to="#" tabIndex="-1" aria-disabled="true" onClick={loginHandler}>Login</Link>
                            )
                        }
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;