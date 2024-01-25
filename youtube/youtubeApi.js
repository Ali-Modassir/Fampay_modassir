const axios = require("axios").default;

const { QUERIES, BASE_URL } = require("../constant/youtubeConstant");
const Videos = require("../models/Videos");

var { API_KEYS } = require("../constant/youtubeConstant");

//Fetching all videos from Youtube
module.exports.getYTVideos = async () => {
  //Randomly getting a query from an array.
  const query = QUERIES[Math.floor(Math.random() * QUERIES?.length)];

  const URL = `${BASE_URL}/search?key=${API_KEYS[0]}&type=video&part=snippet&q=${query}`;

  try {
    const res = await axios.get(URL);
    const vids = res?.data?.items;

    if (!vids) return;

    const allVideos = vids.map((vid) => ({
      videoId: vid?.id?.videoId,
      title: vid?.snippet?.title,
      description: vid?.snippet?.description,
      channelTitle: vid?.snippet?.channelTitle,
      publishTime: vid?.snippet?.publishTime,
      thumbnail: vid?.snippet?.thumbnails?.high?.url,
    }));

    await Videos.insertMany(allVideos);
  } catch (error) {
    /*If quota is exhausted, then 403 status code will return, so will 
    change the API Keys by rotating the API_KEYS array 
    */
    if (error?.response?.status == 403) {
      console.log(`Error ${error.response.status}`);
      rotateApiKeys();
    } else console.log(error);
  }
};

//Rotating array, to change API KEYS
const rotateApiKeys = () => {
  API_KEYS.unshift(API_KEYS.pop());
  console.log(`Rotated to API key: ${getCurrentApiKey()}`);
};
