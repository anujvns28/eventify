const BASE_URL = "https://eventserver-g3cn.onrender.com/api/v1";

export const authEndPoints = {
  SIGNUP_API: BASE_URL + "/auth/signup/",
  LOGIN_API: BASE_URL + "/auth/login",
  LOGOUT_API: BASE_URL + "/auth/logout",
};

export const eventEndPoints = {
  CREATE_EVENT_API: BASE_URL + "/event/createEvent",
  UPDATE_EVENT_API: BASE_URL + "/event/updateEvent",
  DELETE_EVENT_API: BASE_URL + "/event/deleteEvent",
  GET_ALL_EVENT_API: BASE_URL + "/event/getAllEvents",
  GET_SINGLE_EVENT_API: BASE_URL + "/event/getEvent",
  PARTICIPATE_EVENT_API: BASE_URL + "/event/participateInEvent",
  GET_TOP_FIVE_EVENT_API: BASE_URL + "/event/getTopFiveEvents",
};

export const userEndPoints = {
  GET_USER_EVENTS_API: BASE_URL + "/user/user_events",
};
