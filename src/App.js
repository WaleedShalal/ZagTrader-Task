import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import MainPage from "./pages/MainPage/MainPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import BuyCrypto from "./pages/BuyCrypto/BuyCrypto";
import PromoCodes from "./pages/PromoCodes/PromoCodes";
import Referrals from "./pages/Referrals/Referrals";
import Settings from "./pages/Settings/Settings";
import Reports from "./pages/Reports/Reports";
import Margin from "./pages/Margin/Margin";
import CopyTrading from "./pages/CopyTrading/CopyTrading";
import Yield from "./pages/Yield/Yield";
import Contests from "./pages/Contests/Contests";
import styles from "./App.module.scss";
import More from "./pages/More/More";

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to='/sign-in' />} />
          <Route path='/' element={<WelcomePage />}>
            <Route path='sign-in' element={<Login />} />
            <Route path='register' element={<Register />} />
          </Route>
          <Route />
          <Route path='/mainpage/' element={<MainPage />}>
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='buycrypto' element={<BuyCrypto />} />
            <Route path='promoCodes' element={<PromoCodes />} />
            <Route path='referrals' element={<Referrals />} />
            <Route path='reports' element={<Reports />} />
            <Route path='settings' element={<Settings />} />
            <Route path='margin' element={<Margin />} />
            <Route path='copytrading' element={<CopyTrading />} />
            <Route path='yield' element={<Yield />} />
            <Route path='contests' element={<Contests />} />
            <Route path='more' element={<More />} />
          </Route>
          <Route
            path='*'
            element={
              <main style={{ padding: "1rem", textAlign: "center" }}>
                <h1>There's nothing here!</h1>
              </main>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
