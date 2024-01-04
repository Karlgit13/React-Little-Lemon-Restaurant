import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ArticleCards from "./components/ArticleCards";

function App() {
  return (
    <>
      <div className="app">
        <div>
          <Header />
        </div>
        <div>
          <Nav />
        </div>
        <div>
          <Main />
        </div>
        <div>
          <ArticleCards />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
