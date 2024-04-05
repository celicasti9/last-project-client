import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, Navigate, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Loader from './common/Loader';
import HomePageUser from "./pages/HomePageUser";
import HomePage from "./pages/HomePage";
import BooksPage from "./pages/BooksPage";
import ErrorPage from "./pages/ErrorPage";
import ErrorPage2 from "./pages/ErrorPage2";
import AuthorPage from "./pages/AuthorPage";
import SignupPage from "./pages/SignupPage";
import SignupPage2 from "./pages/SignupPage2";
import LoginPage from "./pages/LoginPage";
import LoginPage2 from "./pages/LoginPage2";

function App() {

    const [loading, setLoading] = useState<boolean>(true);
    const { pathname } = useLocation();

    const getToken = () => {
        return localStorage.getItem("authToken");
      };
    
      const LoggedIn = () => {
        return getToken() ? <Outlet /> : <Navigate to="/login" />;
      };
    
      const NotLoggedIn = () => {
        return !getToken() ? <Outlet /> : <Navigate to="/" />;
      };

      useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);
    
      useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
      }, []);

  return loading ? (
    <Loader />
  ) : (
    <div className="App">
    
      {/*<Navbar />*/}

      <Routes>

      {/*<Route path="/" element={<HomePage />} />*/}
      {/*<Route path="/books" element={<BooksPage />} />*/}
      {/*<Route path="/authors" element={<AuthorPage />} />*/}



        <Route element={<LoggedIn />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/authors" element={<AuthorPage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Route>

        <Route element={<NotLoggedIn />}>

          <Route path="/signup" element={<SignupPage2 />} />
          <Route path="/login" element={<LoginPage2 />} />
          <Route path="/*" element={<ErrorPage2 />} />

        </Route>

      </Routes>

    </div>
  );
}

export default App;
