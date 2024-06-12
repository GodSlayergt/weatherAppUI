import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import { WeatherInfo } from "../WeatherInfo/WeatherInfo";
import { Input } from "../Input/Input";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

const Carousel = () => {
  const [weatherData, setData] = useState(null);
  const [error, setError] = useState(null);
  const [city, updateCity] = useState("");
  const sliderRef = useRef(null);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  useEffect(() => {
    sliderRef.current?.slickGoTo(0);
  }, [weatherData]);

  if (error) {
    return <div>Error...</div>;
  }

  return (
    <div className="carousel-container" data-testid="carousel-container">
      <Input
        setData={setData}
        setError={setError}
        updateCity={updateCity}
        city={city}
      />

      <Slider ref={sliderRef} {...settings}>
        <div className="carousel-slide">
          <WeatherInfo city={city} weatherData={weatherData?.data.today} />
        </div>
        <div className="carousel-slide">
          <WeatherInfo city={city} weatherData={weatherData?.data.tomorrow} />
        </div>
        <div className="carousel-slide">
          <WeatherInfo
            city={city}
            weatherData={weatherData?.data.dayAfterTomorrow}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
