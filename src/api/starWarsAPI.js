import axios from "axios";
import { API_URL } from "../constants/constants";

const fetchHeroes = async () => {
  try {
    const { data } = await axios.get(API_URL);
    return data;
  } catch (error) {
    console.error("Failed to fetch heroes:", error);
  }
};

export default fetchHeroes;
