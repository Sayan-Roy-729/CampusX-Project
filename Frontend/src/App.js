import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './Pages/HomePage/HomePage';
import VideoPage from './Pages/VideoPage/VideoPage';
import AdminPage from './Pages/AdminPage/AdminPage';
import AdminAddPage from './Pages/AdminAddPage/AdminAddPage';
import AdminUpdatePage from './Pages/AdminUpdatePage/AdminUpdatePage';
import AdminDeletePage from './Pages/AdminDeletePage/AdminDeletePage';
import ErrorPage from './Pages/404Error/404Error';
import { currentSignInUser } from './store/actions/authActions';
import { getVideos } from './store/actions/videoActions';

function App() {
    const authState = useSelector(state => state.auth);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(currentSignInUser());
        dispatch(getVideos());
    }, [dispatch]);

    return (
        <>
            <Navbar />
            <Switch>
                <Route path = '/' exact component = {HomePage}/>
                <Route path = '/videos' component = {VideoPage} />
                {/* These pages are only for admin */}
                {(authState.user && authState.user.email === 'rsayan553@gmail.com') && (
                    <>
                    <Route path = "/admin/add" exact component = {AdminAddPage}/>
                    <Route path = '/admin/update' exact component = {AdminUpdatePage}/>
                    <Route path = "/admin/delete" exact component = {AdminDeletePage}/>
                    <Route path = '/admin' exact component = { AdminPage }/>
                    </>
                )}
                <Route component = {ErrorPage}/>
            </Switch>
            <Footer />
        </>
    );
}

export default App;
