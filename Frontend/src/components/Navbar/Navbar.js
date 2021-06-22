import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './Navbar.css';
import { googleSignIn, userSignOut } from '../../store/actions/authActions';
import alertMessage from '../../config/alertMessage';

const Navbar = props => {
    const authState = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const history = useHistory();

    const loginHandler = () => {
        dispatch(googleSignIn());
    };
    const logoutHandler = () => {
        dispatch(userSignOut());
    };

    // Validate authentication
    const videoPageRouteHandler = () => {
        if (authState.user) {
            history.push('/videos');
        } else {
            history.replace('/');
            alertMessage('error', 'Error', 'You have to sign in to go forward', false, true);
        }
    };
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <Link className="navbar-brand" to="/" style={{fontFamily: 'Pacifico'}}>campusX</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#" onClick = {videoPageRouteHandler}>Videos</Link>
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