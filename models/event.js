const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    default: ""
  },
  description: {
    type: String,
    default: ""
  },
  //date object array
  valid_dates: [{
    date: {
      type: Date
    }
  }],
  //int saved as military time
  valid_times: {
    start: {
      type: Number
    },
    end: {
      type: Number
    }
  },
  calendar_matrix: [[[]]],
  //empty list of lists
  names_list: [{
    name: {
      type: String,
      default: ""
    }
  }],
  created_by: {
    type: String,
    default: ""
  },
  url_end: {
    type: String,
    default: ""
  }

});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;