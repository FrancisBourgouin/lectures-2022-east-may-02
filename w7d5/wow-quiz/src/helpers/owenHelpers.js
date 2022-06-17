import axios from "axios";

export const fetchAWow = () => {
  return axios
    .get("https://owen-wilson-wow-api.herokuapp.com/wows/random")
    .then((res) => res.data[0]);
};
