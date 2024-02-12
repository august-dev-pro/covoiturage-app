import "./App.css";
import Banner from "./components/banner/banner";
import Header from "./components/layout/header/Header";
import Service from "./components/nosService/service";
import Application from "./components/telecharger-app/apllication";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Service />
      <Application />
    </div>
  );
}

export default App;
