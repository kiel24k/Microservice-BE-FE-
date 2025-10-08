import axios from 'axios';

const orderApi = axios.create({
    baseURL: import.meta.env.VITE_ORDER_URL
})

export default orderApi