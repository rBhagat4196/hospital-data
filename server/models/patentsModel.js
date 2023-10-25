import mongoose from "mongoose";

// Define the Tweet schema
const patentSchema = new mongoose.Schema({
  name : {
    type:String,
    required: true
  },
  age : {
    type : Number
  },
  gender : {
    type : String
  },
  appointmentPreference : {
    type : Date,
    required : true
  },
  disease : {
    type : String,
    required : true
  },
  diseaseType : {
    type : String
  },
  diseasePhase:{
    type:String
  },

});

// Create a Mongoose model
const Patent = mongoose.model('Patent', patentSchema);

export default Patent

// name
// gender
// age
// appointment preference (date)
// diseaae type (dropdown slect)
// disease
