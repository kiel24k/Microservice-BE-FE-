import axios from "axios";

let token = localStorage.getItem("token");

const GatewayServiceApi = axios.create({
  baseURL: import.meta.env.VITE_GATEWAY_URL,
});

if(token){
GatewayServiceApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}
export default GatewayServiceApi;
