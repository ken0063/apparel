import "./App.scss";
import Input from "./components/Input/Input";

function App() {
  return (
    <div className="App">
      <div className="tittle">
        <img src="./images/logo.svg" alt="logo" />
      </div>

      <div className="banner">
        <img src="./images/hero-mobile.jpg" alt="hero-mobile" />
      </div>

      <div className="banner-desk">
        <img src="./images/hero-desktop.jpg" alt="hero-mobile" />
      </div>

      <div className="container">
        <div className="content">
          <h1>
            <span>WE'RE</span> COMING SOON
          </h1>
          <p>
            Hello fellow shoppers! We;re currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
        </div>

        <div className="input">
          <Input />
        </div>
      </div>
    </div>
  );
}

export default App;
