import React, { useState } from "react";

const App = () => {
  const [temperature, setTemperature] = useState(25); // Initial temperature value
  const [isOn, setIsOn] = useState(true); // Initial visibility state

  const decreaseTemperature = () => setTemperature((prevTemp) => prevTemp - 1);
  const increaseTemperature = () => setTemperature((prevTemp) => prevTemp + 1);
  const toggleIsOn = () => setIsOn(!isOn);

  return (
    <>
      <Header temperature={temperature} isOn={isOn} toggleIsOn={toggleIsOn} />
      <Content temperature={temperature} />
      <Footer
        decreaseTemperature={decreaseTemperature}
        increaseTemperature={increaseTemperature}
      />
    </>
  );
};

const Header = ({ temperature, isOn, toggleIsOn }) => {
  return (
    <div>
      <button onClick={toggleIsOn}>ON / OFF</button>
      {isOn && <span>Current Temperature: {temperature}°C</span>}
    </div>
  );
};

const Content = ({ temperature }) => {
  return (
    <>
      <Temperature temperature={temperature} />
    </>
  );
};

const Temperature = ({ temperature, isOn }) => {
  return <div>{temperature} °C</div>;
};

const Footer = ({ decreaseTemperature, increaseTemperature }) => {
  return (
    <footer>
      <button onClick={decreaseTemperature}>Down</button>
      <button onClick={increaseTemperature}>Up</button>
    </footer>
  );
};

export default App;
