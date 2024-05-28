import React from "react";

const App = () => {
  const temperature = 25;

  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
};

const Header = () => {
  return (
    <header>
      <button>ON/OFF</button>
      <span>Current Temperature: {temperature}C</span>
    </header>
  );
};
const Content = () => {
  return (
    <div>
      <span>temperature</span>
    </div>
  );
};
const Footer = () => {
  return (
    <footer>
      <button>Down</button>
      <button>Up</button>
    </footer>
  );
};

export default App;
