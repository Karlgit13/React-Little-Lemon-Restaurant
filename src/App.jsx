import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="app">
        <div className="header">
          <Header />
        </div>
        <div className="nav">
          <Nav />
        </div>
        <div className="main">
          <Main />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
