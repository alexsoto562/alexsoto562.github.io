import React, { useEffect, useState } from "react";
import carService from "./services/carService";
import SingleCar from "./SingleCar";

function Cars() {
  const [carData, setCarData] = useState({
    carArr: [],
    carComponents: [],
  });

  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    carService.getCars().then(onGetCarsSuccess).catch(onGetCarError);
  }, []);


  const onGetCarsSuccess = (response) => {
    // console.log("testing response->",response);
    const carArray = response.data;
    console.log("testing carArray", carArray);

    // show2018Cars(carArray)
    // show2019Cars(carArray)
    // show2020Cars(carArray)
    // show2021Cars(carArray)

  
    setCarData((prevState) => {
      const pd = { ...prevState };
      pd.carArr = carArray;
      pd.carComponents = carArray.map(mapCars);
      return pd;
    });

    // console.log("testing car Info", carInfo);
    
  };

//   const carInformation = show2018Cars(carArray)

  const onGetCarError = (response) => {
    console.warn({ error: response });
    console.log("onGetCarError is firing");
  };

  const showCars = (e) => {
    console.log("showCars was clicked");
    e.preventDefault();
    setToggle(!toggle);
  };

  const mapCars = (carProps) => {
    console.log("testing map cars->", carProps);
    return( <SingleCar car={carProps} key={"ListA-" + carProps} />);
  };

  //i am doing another ajax call because i cant pass the array of cars into 
  //my filtering function

  const show2018Cars = ()=>{
    console.log("show2018Cars was clicked");
    // console.log("testing perameter->",);
    carService
    .getCars()
    .then(onShow2018CarsSuccess)
    .catch(onShow2018CarsError)
  }

  const onShow2018CarsSuccess =(response)=>{
    const carArray = response.data;
    console.log("testing carArray", carArray);

    let filteredCars = carArray.filter(carArr=>carArr.year===2018)

    console.log("testing 2018 cars",filteredCars);
// debugger
    setCarData((prevState) => {
        const pd = { ...prevState };
        pd.carArr = carArray;
        carArray.map(filteredCars);
        return pd;
      });

    // const search2018 = carArray.filter((carArray)=>{

    //      console.log("testing carArray.year", carArray)
    //     if (carArray.year === 2018) {
    //         return carArray.year
            
    //     }
    //     console.log("testing carArray.year", carArray)
    // })
    // return search2018
  }

//   const filter2018 = ()=>{}

  const onShow2018CarsError=(response)=>{
    console.warn({ error: response });
    console.log("onGetCarError is firing");
  }

  const show2019Cars = ()=>{
    console.log("show2019Cars was clicked");
    carService
    .getCars()
    .then(onShow2019CarsSuccess)
    .catch(onShow2019CarsError)
  }

  const onShow2019CarsSuccess =(response)=>{
    const carArray = response.data;
    console.log("testing carArray", carArray);

    let filteredCars = carArray.filter(carArr=>carArr.year===2019)

    console.log("testing 2019 cars",filteredCars);

    setCarData((prevState) => {
        const pd = { ...prevState };
        pd.carArr = carArray;
        carArray.map(filteredCars);
        return pd;
      });
  }
  const onShow2019CarsError=(response)=>{
    console.warn({ error: response });
    console.log("onGetCarError is firing");
  }

  const show2020Cars = ()=>{
    console.log("show2020Cars was clicked");
  
    carService
    .getCars()
    .then(onShow2020CarsSuccess)
    .catch(onShow2020CarsError)
  }

  const onShow2020CarsSuccess =(response)=>{
    const carArray = response.data;
    console.log("testing carArray", carArray);

    let filteredCars = carArray.filter(carArr=>carArr.year===2020)

    console.log("testing 2020 cars",filteredCars);

    setCarData((prevState) => {
        const pd = { ...prevState };
        pd.carArr = carArray;
        carArray.map(filteredCars);
        return pd;
      });
  }
  const onShow2020CarsError=(response)=>{
    console.warn({ error: response });
    console.log("onGetCarError is firing");
  }

  const show21Cars = ()=>{
    console.log("show2021Cars was clicked");
 
    carService
    .getCars()
    .then(onShow2021CarsSuccess)
    .catch(onShow2021CarsError)
  }

  const onShow2021CarsSuccess =(response)=>{
    const carArray = response.data;
    console.log("testing carArray", carArray);

    let filteredCars = carArray.filter(carArr=>carArr.year===2021)

    console.log("testing 2021 cars",filteredCars);

    setCarData((prevState) => {
        const pd = { ...prevState };
        pd.carArr = carArray;
        carArray.map(filteredCars);
        return pd;
      });
  }
  const onShow2021CarsError=(response)=>{
    console.warn({ error: response });
    console.log("onGetCarError is firing");
  }

  return (
    <React.Fragment>
      <div className="row">
        <div className="col">
          <button
            type="button"
            className="btn btn-primary"
            id="show-all"
            onClick={showCars}
          >
            Show Cars
          </button>

          <button
            type="button"
            className="btn btn-primary"
            id="show-2018-cars"
            onClick={show2018Cars}
          >
           2018 Cars
          </button>

          <button
            type="button"
            className="btn btn-primary"
            id="show-2019-cars"
            onClick={show2019Cars}
          >
           2019 Cars
          </button>

          <button
            type="button"
            className="btn btn-primary"
            id="show-2020-cars"
            onClick={show2020Cars}
          >
           2020 Cars
          </button>

          <button
            type="button"
            className="btn btn-primary"
            id="show-2021-cars"
            onClick={show21Cars}
          >
           2021 Cars
          </button>


          <div className="row">{!toggle && carData.carComponents}</div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Cars;
