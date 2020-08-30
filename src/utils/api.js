import axios from "axios";

// Url link for ajax call
 const BASEURL = "https://randomuser.me/api/?results=50&nat=us";

 export default {
     getEmployee: function() {
         return axios.get(BASEURL);   
     }
 }; 