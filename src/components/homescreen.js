import React, { useState, useEffect } from "react";
import styled from "styled-components";
import pix from "./london.jpg";
import sun from "./suntwo.jpg";
import rain from "./raintwo.jpg";
import cold from "./coldone.jpg";
// import snow from "./snowone.jpg";
import axios from "axios";
// import moment from "momemt"

const api = {
  key: "1dddec5bb1f81b184a2f5cf72a85e134",
  base: "https://api.openweathermap.org/data/2.5/",
};

const Homescreen = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState("");

  const search = async () => {
    const url = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=1dddec5bb1f81b184a2f5cf72a85e134`
    );
    console.log(url);
    if (url) {
      const data = await url.data;
      return setWeather(data);
    } else {
      console.log("No data");
    }
  };
  const dateBuilder = (d) => {
    let months = [
      "January",
      "Febuary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month}, ${year}`;
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    search();
  }, []);

  return (
    <Container>
      <Wrapper>
        {/* <Top> */}
        <Input>
          <input
            type="text"
            placeholder="know your weather"
            onChange={handleChange}
            value={query}
            onKeyPress={search}
          />
        </Input>
        {/* <Button>Search</Button> */}
        {/* </Top> */}
        <Holder>
          <Card>
            {/* <img src={pix} alt="jpg" /> */}
            {Math.ceil(weather?.main?.temp - 273.15) >= 28 ? (
              <img src={sun} alt="" />
            ) : Math.ceil(weather?.main?.temp - 273.15) < 28 ||
              Math.ceil(weather?.main?.temp - 273.15) < 19 ? (
              <img src={cold} alt="" />
            ) : Math.ceil(weather?.main?.temp - 273.15) < 18 ? (
              <img src={rain} alt="" />
            ) : null}
            <Wrap>
              {/* <placeName>{weather.name}</placeName> */}
              <Weather>
                {weather.name}, {weather.sys.country}
              </Weather>
              <Temperature>{Math.round(weather.main.temp)}°c</Temperature>
              <Date>{dateBuilder(new Date())}</Date>
            </Wrap>
          </Card>
        </Holder>
      </Wrapper>
    </Container>
  );
};
export default Homescreen;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;
// const Top = styled.div`
//   width: 500px;
//   height: 80px;
//   display: flex;
//   justify-content: space-between;
//   flex-direction: row;
//   align-items: center;
//   @media (max-width: 500px) {
//     width: 400px;
//   }
//   @media (max-width: 414px) {
//     width: 350px;
//   }
//   @media (max-width: 400px) {
//     width: 350px;
//   }
//   @media (max-width: 320px) {
//     width: 280px;
//   }
// `;
const Input = styled.div`
  width: 380px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #020c1b;
  background: inherit;
  input {
    width: 90%;
    height: 90%;
    border: none;
    outline: none;
    opacity: none;
    ::placeholder {
      color: #020c1b;
      font-size: 11px;
    }
  }
  @media (max-width: 500px) {
    width: 280px;
  }
  @media (max-width: 414px) {
    width: 220px;
  }
  @media (max-width: 400px) {
    width: 220px;
  }
  @media (max-width: 320px) {
    width: 150px;
  }
`;
// const Button = styled.div`
//   width: 100px;
//   height: 50px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: #020c1b;
//   border-radius: 5px;
//   color: white;
//   text-align: center;
//   font-size: 14px;
//   cursor: pointer;
// `;
const Holder = styled.div`
  width: 600px;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 500px) {
    width: 450px;
  }
  @media (max-width: 414px) {
    width: 350px;
  }
  @media (max-width: 400px) {
    width: 350px;
  }
  @media (max-width: 320px) {
    width: 280px;
  }
`;
const Card = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
    position: relative;
  }
`;
const Wrap = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  position: absolute;
`;
// const placeName = styled.div`
//   color: #020c1b;
//   font-size: 17px;
// `;
const Weather = styled.div`
  color: #020c1b;
  font-size: 17px;
`;
const Date = styled.div`
  color: #020c1b;
  font-size: 17px;
`;
const Temperature = styled.div`
  color: #020c1b;
  font-size: 50px;
  font-weight: bold;
`;
