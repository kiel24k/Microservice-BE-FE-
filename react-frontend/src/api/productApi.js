import axios from 'axios';

const productApi = axios.create({
    baseURL: import.meta.env.VITE_PRODUCT_URL
})

export default productApi