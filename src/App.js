import { Contenido } from "./components/Content/contenido";
import { Footer } from "./components/Footer/footer";
import { Header } from "./components/Header/header";
import { Portada } from "./components/Portada/portada";

function App() {
  return (
    <div className="App">
      <Header/>
      <Portada/>
      <Contenido/>
      <Footer/>
    </div>
  );
}

export default App;
