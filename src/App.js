import "./App.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather cityName="Singapore" />

        <footer>
          This project was coded with 🧡 by{" "}
          <a
            href="https://www.linkedin.com/in/nydiasubur/"
            target="_blank"
            rel="noopener noreferrer"
            autoFocus="on"
          >
            Nydia Subur
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/nydiasubur/weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="weather-app-ns8.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
