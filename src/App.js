import "./App.css";
import Home from "./components/home/Home";
import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
