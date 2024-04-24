import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />

        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/nydiasubur/"
            target="_blank"
            rel="noopener noreferrer"
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
