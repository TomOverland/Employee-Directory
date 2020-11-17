import axios from 'axios';

export default {
    // Get "employees"
    getEmployees: function() {
        return axios.get("https://randomuser.me/api/?results=200&nat=us")
    }
}