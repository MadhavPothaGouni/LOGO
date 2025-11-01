import SortBar from "./components/SortBar/SortBar";
import Header from "./components/Header/Header";
import Filters from "./components/Filters/Filters";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import Footer from "./components/Footer/Footer";
import "./styles/globals.css";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className="hero">
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus 
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
      </div>

      {/*  Sort + Filter Row */}
      <SortBar />

      {/* Main Layout */}
      <main className="layout container">
        <aside>
          <Filters />
        </aside>

        <section>
          <ProductGrid />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
