import './App.css';
import Home from './pages/Home';
import Login from './components/Login/Login'; 
import SignUp from './components/SignUp/SignUp';
// import Profile from './components/Profile/Profile';
import ProfilePage from './pages/ProfilePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider, useAuth } from "././Hooks/UseAuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        {" "}
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}

function AppRoutes() {
  const { currentUser } = useAuth();
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
}

export default App;
