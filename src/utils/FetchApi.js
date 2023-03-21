import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  method: "GET",
  url: BASE_URL,
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "2d2580be86msh33f864fe97604b8p19c7e2jsnd9fd3890e79b",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchApi = async (url) => {
  const response = await axios.get(`${BASE_URL}/${url}`, options);

  return response.data;
};
