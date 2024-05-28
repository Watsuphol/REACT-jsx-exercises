import React, { useState } from "react";

const App = () => {
  const [temperature, setTemperature] = useState(25); // Initial temperature value

  const decreaseTemperature = () => setTemperature((prevTemp) => prevTemp - 1);
  const increaseTemperature = () => setTemperature((prevTemp) => prevTemp + 1);

  return (
    <>
      <Header temperature={temperature} />
      <Content temperature={temperature} />
      <Footer
        decreaseTemperature={decreaseTemperature}
        increaseTemperature={increaseTemperature}
      />
    </>
  );
};

const Header = ({ temperature }) => {
  return (
    <div>
      <button>ON / OFF</button>
      <span>Current Temperature: {temperature}°C</span>
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

const Temperature = ({ temperature }) => {
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
