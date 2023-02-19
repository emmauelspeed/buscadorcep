import axios from "axios";

// https://viacep.com.br/ws/cep/jason

const api = axios.create({
  baseURL: "https://viacep.com.br/ws/"
});

export default api;