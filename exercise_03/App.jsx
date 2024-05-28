const App = () => {
  const temperature = 25;
  return (
    <>
      <Header temperature={temperature} />;
      <Content temperature={temperature} />;
	  <Footer />
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

const Footer = () => {
	return (
	  <footer>
		<button>Down</button>
		<button>Up</button>
	  </footer>
	);
  };
  
export default App;
