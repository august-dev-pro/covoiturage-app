import "./App.css";
import Apropos from "./components/apropos/Apropos";
import Header from "./components/layout/header/Header";
import Marche from "./components/ça marche/Marche";

function App() {
  return (
    <div className="App">
      <Header />
      <Marche />
      <Apropos />
    </div>
  );
}

export default App;
