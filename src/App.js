import "./App.css";
import Weather from "./Weather.js";

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
            href="https://agitated-yalow-146329.netlify.app"
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