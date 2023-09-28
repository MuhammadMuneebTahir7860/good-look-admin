import './App.css';
import React, { useEffect, useState } from 'react'
import { HashRouter } from 'react-router-dom';
import ScrollToTop from './navigation/ScrollToTop';
import Navigation from './navigation/Navigation';
import SplashScreen from './commonComponents/splash/SplashScreen'
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { doGetLoggedInUser } from './redux/actions/AuthActions';
import Toast from './commonComponents/toast/Toast';
function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  useEffect(async () => {
    const token = await window.localStorage.getItem('adminToken');
    if (token) {
      dispatch(doGetLoggedInUser(setLoading, token, Toast))
    }
  }, [])
  return (
    <div className='App'>
      {
        loading ?
          <SplashScreen />
          :
          <HashRouter>
            <ScrollToTop />
            <Navigation />
          </HashRouter>
      }

      {/* <SampleDataFetch /> */}
      <ToastContainer />
    </div>
  );
}

export default App;
