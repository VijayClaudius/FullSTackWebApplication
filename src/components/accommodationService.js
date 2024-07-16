// // accommodationService.js

// import axios from "axios";

// const API_URL = "http://localhost:9099/api/accommodations";

// export const getAllAccommodations = async () => {
//   const response = await axios.get(`${API_URL}/getall`);
//   return response.data;
// };

// export const getAccommodationById = async (id) => {
//   const response = await axios.get(`${API_URL}/${id}`);
//   return response.data;
// };

// export const addAccommodation = async (data) => {
//   const response = await axios.post(API_URL, data);
//   return response.data;
// };

// export const updateAccommodation = async (id, data) => {
//   const response = await axios.put(`${API_URL}/${id}`, data);
//   return response.data;
// };

// export const deleteAccommodation = async (id) => {
//   const response = await axios.delete(`${API_URL}/${id}`);
//   return response.data;
// };
