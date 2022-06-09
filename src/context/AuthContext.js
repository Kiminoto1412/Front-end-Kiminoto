import { createContext, useEffect, useState, useContext } from "react";
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
  const [role ,setRole] = useState(null)

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const token = getAccessToken();
        if (token) {
          const resMe = await axios.get("/customers/me");
          setUser(resMe.data.customer || resMe.data.admin );
          setRole(resMe.data.role  );
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
    const formData = new FormData();
    formData.append("firstName", input.firstName);
    formData.append("lastName", input.lastName);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("confirmPassword", input.confirmPassword);
    formData.append("profilePic", input.profilePic);
    formData.append("addressName", input.addressName);
    formData.append("address", input.address);
    formData.append("city", input.city);
    formData.append("district", input.district);
    formData.append("postalCode", input.postalCode);
    formData.append("moreDetails", input.moreDetails);

    const res = await axios.post("/auth/customers/signup", formData);
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

  const loginAdmin = async (email, password) => {
    const res = await axios.post("/auth/admins/login", { email, password });
    setAccessToken(res.data.token);
    // const resMe = await axios.get("/admins/me");
    // setUser(resMe.data.user);
  };

  const logout = () => {
    removeAccessToken();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ signUp, user, login,loginAdmin, logout ,role}}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => {
  const ctx = useContext(AuthContext);
  return ctx;
};

export default AuthContextProvider;
export { AuthContext, useAuth };
