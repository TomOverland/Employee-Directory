import axios from "axios";

function getUsers() {
  return axios.get("https://randomuser.me/api/?results=200&nat=us");
}

export default getUsers;
