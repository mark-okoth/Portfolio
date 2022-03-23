import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Footer from './Components/Footer'
import Skills from "./Components/Skill";
import Projects from "./Components/Projects";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Home/>
        <Skills/>
        <Projects/>
        <Footer/>

      </header>
    </div>
  );
}

export default App;
