import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './Navbar.css';
import { googleSignIn, userSignOut } from '../../store/actions/authActions';

const Navbar = props => {
    const authState = useSelector(state => state.auth);
    const videoState = useSelector(state => state.video);
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

    const signInHandler = () => {
        dispatch(googleSignIn());
    };

    const logoutHandler = () => {
        dispatch(userSignOut());
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{position: 'sticky', top: '0px', left: '0px', zIndex: '10',}}>
            <Link to="/" className="navbar-brand ml-5 font-weight-bold" style={{fontSize: '35px', fontFamily: "'Pacifico', cursive"}}>
                campusX
            </Link>
        
            <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false"
                aria-label="Toggle navigation" data-target="#exnavbar" aria-controls="exnavbar">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse pr-5" id="exnavbar">
                
                <ul className="navbar-nav ml-auto mr-5 pr-5" style={{fontSize: '19px'}}>
                    <li>
                        <Link to="/" className="nav-link">Home</Link>
                    </li>

                    <li>
                        {
                            videoState.videos.length > 0 && (
                                <Link to={`/videos/${videoState.videos[0].id}`} className="nav-link">Videos</Link>
                            )
                        }
                    </li>

                    <li className="nav-item">
                        {
                            authState.user && authState.user.email === 'rsayan553@gmail.com' && (
                                <Link to = '/admin/add' className="nav-link" onClick={logoutHandler}>Admin</Link>
                            )
                        }
                    </li>

                    <li className="nav-item">
                        {
                            authState.user ? (
                                <Link to = '/' className="nav-link" onClick={logoutHandler}>Logout</Link>
                            ) : (
                                <Link to = '/' className="nav-link" onClick={signInHandler}>Login</Link>
                            )
                        }
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;