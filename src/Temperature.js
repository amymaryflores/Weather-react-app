import React from "react";

export default function Temperature(props) {
  return (
    <div className="Temperature">
      <span className="temperature">{Math.round(props.fahrenheit)}</span>
      <span className="units">°F</span>
    </div>
  );
}