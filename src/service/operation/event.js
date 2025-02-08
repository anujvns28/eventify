import axios from "axios";
import { eventEndPoints } from "../api";


const {
  CREATE_EVENT_API,
  UPDATE_EVENT_API,
  DELETE_EVENT_API,
  GET_ALL_EVENT_API,
  GET_SINGLE_EVENT_API,
  PARTICIPATE_EVENT_API,
  GET_TOP_FIVE_EVENT_API,
} = eventEndPoints;

export const createEvent = async (data) => {
  try {
    const response = await axios({
      method: "POST",
      url: CREATE_EVENT_API,
      data: data,
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (response) {
      window.location.href = "/";
    }

    console.log("create event  response....", response);
  } catch (err) {
    console.log("create event  Api error....", err);
  }
};

export const updateEvent = async (eventId, eventData) => {
  const data = {
    ...eventData,
    eventId: eventId,
  };

  try {
    const response = await axios({
      method: "POST",
      url: UPDATE_EVENT_API,
      data: data,
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log("update event  response....", response);
  } catch (err) {
    console.log("update event  Api error....", err);
  }
};

export const deleteEvent = async (data) => {
  try {
    const response = await axios({
      method: "POST",
      url: DELETE_EVENT_API,
      data: data,
      withCredentials: true,
    });

    console.log("Delete event  response....", response);
  } catch (err) {
    console.log("Delete event  Api error....", err);
  }
};

export const getAllEvents = async (data) => {
  let result;
  try {
    const response = await axios({
      method: "GET",
      url: GET_ALL_EVENT_API,
      data: data,
      withCredentials: true,
    });
    if (response) {
      result = response.data;
    }

    console.log("all event  response....", response);
  } catch (err) {
    console.log("all event  Api error....", err);
  }
  return result;
};

export const getEvent = async (data) => {
  let result;
  try {
    const response = await axios({
      method: "POST",
      data: { eventId: data },
      url: GET_SINGLE_EVENT_API,
      withCredentials: true,
    });
    if (response) {
      result = response.data;
    }

    console.log("single event  response....", response);
  } catch (err) {
    console.log("single event  Api error....", err);
  }
  return result;
};

export const participateInEvent = async (data) => {
  try {
    const response = await axios({
      method: "POST",
      data: data,
      url: PARTICIPATE_EVENT_API,
      withCredentials: true,
    });

    console.log("participateInEvent event  response....", response);
  } catch (err) {
    console.log("participateInEvent event  Api error....", err);
  }
};

export const fetchTopFiveEvent = async () => {
  let result;
  try {
    const response = await axios({
      method: "GET",
      url: GET_TOP_FIVE_EVENT_API,
      withCredentials: true,
    });
    if (response) {
      result = response.data;
    }

    console.log("top event  response....", response);
  } catch (err) {
    console.log("top event  Api error....", err);
  }
  return result;
};