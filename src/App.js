import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Footer from './Components/Footer'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Home/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
