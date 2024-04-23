import axios from "axios";
// Application ID: 592560
const accessKey = "ITJxZ4BbLHJ0IN85JA5bH-YxOvEwvITDPaPcn7iffL8";
// Secret key: keR86WEjnJYv8kuENRj36AN1fIFfds1YBIJTHXmwHng
axios.defaults.baseURL = "https://api.unsplash.com/search";

export const featchPhotos = async (title, currentPage) => {
  const response = await axios.get("/photos", {
    params: {
      client_id: accessKey,
      query: title,
      per_page: 12,
      page: currentPage,
    },
  });
  return response.data;
};
