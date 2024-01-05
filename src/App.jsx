import { useDispatch } from 'react-redux';
import './App.css';
import conf from './conf/conf';
import { useState } from 'react';
import AuthService from './appwrite/auth/auth';
import { login, logout } from './store/authSlice';
import { useEffect } from 'react';
import { Footer, Header } from './components/index';
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setloading] = useState(true);
  const dispatch = useDispatch();
  // console.log(conf);

  useEffect(() => {
    AuthService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => {
        setloading(false);
      });
  }, []);

  return !loading ? (
    <div className="min-h-screen  flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>TODO: {/* <Outlet /> */}</main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
