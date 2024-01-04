import "./App.css";
import Header from "./components/Header";
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
          {/* Removed Nav component here, as it's conditionally rendered in Header */}
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
