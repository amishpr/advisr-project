import axios from "axios";
// const port = process.env.PORT || 8080 
const BASE_URL = "https://advisr-project.herokuapp.com/";

export default class BusinessService {
  getAllBusinesses() {
    return axios.get(BASE_URL + "business/all").then((res) => res.data);
  }

  getBusinessById(businessId) {
    return axios
      .get(BASE_URL + "business/" + businessId)
      .then((res) => res.data);
  }
}
