import axios from "axios";

const BASE_URL = "http://localhost:3000/";

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
