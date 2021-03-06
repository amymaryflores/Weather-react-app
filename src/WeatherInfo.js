import React from "react";
import FormattedDate from "./Date";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./Temperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="mt-4 fw-bold">{props.data.city}</h1>
      <ul className="mb-4">
        <li>
          Last Updated: <FormattedDate date={props.data.date} />
        </li>
        <li>{props.data.description}</li>
      </ul>
      <div className="row mb-3">
        <div className="col-sm-6">
          <div className="Icon">
            <WeatherIcon code={props.data.icon} />
          </div>
          <WeatherTemperature fahrenheit={props.data.temperature} size={64} />
        </div>
        <div className="col-sm-6 ">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}