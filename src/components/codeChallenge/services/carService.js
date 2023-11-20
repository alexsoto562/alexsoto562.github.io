import axios from "axios";

var carServiceCars = {
    endpoint: "https://my-json-server.typicode.com/selvaicodes/cars/cars",
  };

let getCars = () => {
    console.log("getCars.cars is firing");
    const config = {
      method: "GET",
      url: `${carServiceCars.endpoint}`,
      crossDomain: true,
      headers: { "Content-Type": "application/json" },
    };
    return axios(config);
  };

const carService = 
{ getCars };

export default carService;