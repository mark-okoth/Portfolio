import Logo from "./logo.svg";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Home/>
      </header>
    </div>
  );
}

export default App;
