import "./app.css";
import Weather from "./weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Worcester, MA" />
        <footer>
          <a
            href="https://github.com/amymaryflores/Weather-react-app"
            alt=""
            target="_blank"
            rel="noreferrer"
          >
            Open sourced code
          </a>{" "}
          by{" "}
          <a
            href="https://brave-einstein-7d18c1.netlify.app"
            alt=""
            target="_blank"
            rel="noreferrer"
          >
            Amy Flores
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;