import axios from "axios";
const BASEURL = "/api/";
export default {
  postUser: function (user) {
    return axios.post(BASEURL + 'user', {
      email: user.email,
      password: user.password
    }) .catch(err => {
      console.log("Error in utils: ",err);
    })
  },
  searchUser: function (query) {
    return axios.get(BASEURL + 'user/' + query);
  },
  searchByURL: function (query) {
    return axios.get(BASEURL + "event/" + query);
  },
  searchByID: function (query) {
    return axios.get(BASEURL + "event/" + query);
  },
  postEvent: function (event) {
    return axios.post(BASEURL + 'event', {
      name: event.name,
      description: event.description,
      valid_dates: event.valid_dates,
      valid_times: event.valid_times,
      calendar_matrix: event.calendar_matrix,
      names_list: event.names_list,
      created_by: event.created_by,
      url_end: event.url_end
    })
  },
  updateEvent: function (event) {
    return axios.put(BASEURL + 'event/' + event._id, {
      name: event.name,
      description: event.description,
      valid_dates: event.valid_dates,
      valid_times: event.valid_times,
      calendar_matrix: event.calendar_matrix,
      names_list: event.names_list,
      created_by: event.created_by,
      url_end: event.url_end
    })
  }

};