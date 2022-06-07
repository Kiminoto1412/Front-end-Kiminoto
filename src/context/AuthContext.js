import { createContext, useEffect, useState , useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../config/axios";
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "../services/localStorage";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const token = getAccessToken();
        if (token) {
          const resMe = await axios.get("/customers/me");
          setUser(resMe.data.user);
          // console.log(resMe.data.user)
        }
      } catch (err) {
        removeAccessToken();
        navigate("/login");
      }
    };
    fetchMe();
  }, []);

  
  const signUp = async (input) => {
    const res = await axios.post("/auth/customers/signup", input);
    setAccessToken(res.data.token);
    const resMe = await axios.get("/customers/me");
    setUser(resMe.data.user);
  };

  const login = async (email, password) => {
    const res = await axios.post("/auth/customers/login", { email, password });
    setAccessToken(res.data.token);
    const resMe = await axios.get("/customers/me");
    setUser(resMe.data.user);
  };

  const logout = () => {
    removeAccessToken();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ signUp, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () =>{
  const ctx = useContext(AuthContext)
  return ctx
}

export default AuthContextProvider;
export { AuthContext , useAuth};
