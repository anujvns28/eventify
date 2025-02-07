import {authEndPoints} from "../api"
import axios from "axios";


const {LOGIN_API,SIGNUP_API,LOGOUT_API} = authEndPoints;

export const signup = async (data) => {
    console.log(data,"singupdate")
    try {
      const response = await axios({
        method: "POST",
        url: SIGNUP_API,
        data: data,
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      if (response) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("token", JSON.stringify(response.data.token));
        window.location.href = "/";
      }
  
      console.log("signup response....", response);
    } catch (err) {
      console.log("signup Api error....", err);
    }
  };
  
  export const login = async (data, ) => {
    try {
      const response = await axios({
        method: "POST",
        url: LOGIN_API,
        data: data,
        withCredentials: true,
      });
  
      if (response) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("token", JSON.stringify(response.data.token));
        window.location.href = "/";
      }
  
      console.log("login response....", response);
    } catch (err) {
      console.log("login Api error....", err);
    }
  };
  
  export const logout = async (dispatch) => {
    try {
      const response = await axios({
        method: "GET",
        url: LOGOUT_API,
        withCredentials: true,
      });
  
      if (response) {
        localStorage.clear();
       
      }
  
      console.log("Logout response....", response);
    } catch (err) {
      console.log("Logut Api error....", err);
    }
   
  };