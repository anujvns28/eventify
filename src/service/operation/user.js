import axios from "axios";

import { userEndPoints } from "../api";


const {GET_USER_EVENTS_API} = userEndPoints;


export const fetchUserEvents = async (data) => {
    let result ;
    try {
      const response = await axios({
        method: "POST",
        data:{token:data},
        url: GET_USER_EVENTS_API,
        withCredentials: true,
        
      });
     if(response){
        result = response.data;
     }
  
      console.log("user Event  response....", response);
    } catch (err) {
      console.log("user event  Api error....", err);
    }
    return result;
  };