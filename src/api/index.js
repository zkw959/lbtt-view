import axios from "axios"
export const reqLbtts = (date) => axios.get(`/lbtts/?date=${date}`)
