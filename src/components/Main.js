import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./Filter";

const Main = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://site--cars-express-app--gbmmwqlm6cfw.code.run/cars")
      .then((response) => {
        // response.json();
        setData(response.data.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <main>
    <Filter></Filter>
    <div className="car-container">
      {data?.map((car, key) => {
        return (
          <div className="car">
            <img src="/car.png" alt="car" />
            <div key={key} className="car-details">
              <h3>{car.make}</h3>
              <div className="car-specs">
                <div className="spec">
                  <div className="icon">
                    <img src="/mileage.png" height={12} alt="mileage" />
                    <span>Mileage</span>
                  </div>
                  <p>{car.kilometer}km</p>
                </div>

                <div className="spec">
                  <div className="icon">
                    <img src="/transmissie.png" height={12} alt="mileage" />
                    <span>Transmission</span>
                  </div>
                  <p>{car.transmission}</p>
                </div>

                <div className="spec">
                  <div className="icon">
                    <img src="/year.png" height={12} alt="mileage" />
                    <span>Year</span>
                  </div>
                  <p>{car.year}</p>
                </div>

                <div className="spec">
                  <div className="icon">
                    <img src="/intake.png" height={12} alt="mileage" />
                    <span>Intake</span>
                  </div>
                  <p>{car.fuel_type}</p>
                </div>

                <div className="spec">
                  <div className="icon">
                    <img src="/power.png" height={12} alt="mileage" />
                    <span>Power</span>
                  </div>
                  <p>{car.engine}</p>
                </div>

                <div className="spec">
                  <div className="icon">
                    <img src="/color.png" height={12} alt="mileage" />
                    <span>Color</span>
                  </div>
                  <p>{car.color}</p>
                </div>
              </div>
            </div>

            <a href="">
              <button className="view-btn">View car</button>
            </a>
          </div>
        );
      })}
      </div>
    </main>
  );
};

export default Main;
