import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import pix from "./london.jpg";
import sun from "./london.jpg";
import rain from "./raintwo.jpg";
import cold from "./coldone.jpg";
// import snow from "./snowone.jpg";
import axios from "axios";
// import moment from "momemt";

const Main = () => {
  const [city, setCity] = React.useState("Lagos");
  const [text, setText] = React.useState(city);
  const [data, setData] = React.useState([]);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9c56dc5e4dfd47aa7fa1665568e9233e`;

  const axiosData = async () => {
    const data = await axios.get(url);
    if (data) {
      setData(data.data);
      console.log(data);
    } else {
      console.log("No data");
    }
  };

  React.useEffect(() => {
    axiosData();
  }, []);

  return (
    <Container>
      <Wrapper>
        <Top>
          <Input>
            <input
              type="text"
              placeholder="know your weather"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
          </Input>
          <Button
            onClick={() => {
              setText(city);
              axiosData();

              setCity("");
            }}
          >
            Search
          </Button>
        </Top>
        <Holder>
          <Card>
            {Math.ceil(data?.main?.temp - 273.15) >= 28 ? (
              <img src={sun} alt="" />
            ) : Math.ceil(data?.main?.temp - 273.15) < 28 ||
              Math.ceil(data?.main?.temp - 273.15) < 19 ? (
              <img src={cold} alt="" />
            ) : Math.ceil(data?.main?.temp - 273.15) < 18 ? (
              <img src={rain} alt="" />
            ) : null}
            <Wrap>
              <City>
                {data.name} {""}
              </City>
              <Degree>
                {Math.ceil(data?.main?.temp - 273.15)} °C{""}
              </Degree>
              {/* <Dates>{moment(Date.now()).format(" D MMMM YYYY, h:mm a")}</Dates> */}
            </Wrap>
          </Card>
        </Holder>
      </Wrapper>
    </Container>
  );
};
export default Main;

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
const Top = styled.div`
  width: 500px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  @media (max-width: 500px) {
    width: 400px;
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
const Button = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #020c1b;
  border-radius: 5px;
  color: white;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
`;
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

const City = styled.div`
  color: #020c1b;
  font-size: 17px;
`;
// const Dates = styled.div`
//   color: #020c1b;
//   font-size: 17px;
// `;
const Degree = styled.div`
  color: #020c1b;
  font-size: 50px;
  font-weight: bold;
`;
