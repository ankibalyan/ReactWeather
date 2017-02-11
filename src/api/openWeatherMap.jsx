import axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=c9b715281b93d174f65d7927ded3385d&units=metric';
const getTemp = (location) => {
  const encodedLocation = encodeURIComponent(location);
  let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

  return axios.get(requestUrl).then(function (res) {
    if (res.data.cod && res.data.message) {
      throw new Error(res.data.message);
    } else {
      return res.data.main.temp;
    }
  }).catch(function(err) {
    if (err.data && err.data.message) {
      throw new Error(err.data.message);
    }
    else if (err.response.data && err.response.data.message) {
      throw new Error(err.response.data.message);
    } else {
      throw new Error('something went wrong');
    }
  });
};

export {getTemp};
