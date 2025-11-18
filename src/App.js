import "./styles/reset.css";
import "./styles/global.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Quote from "./components/Quote/Quote";
import Collections from "./components/Collections/Collections";
import Reviews from "./components/Reviews/Reviews";
import Blog from "./components/Blog/Blog";
import More from "./components/More/More";
import Prioritise from "./components/Prioritise/Prioritise";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Hero/>
        <Quote />
        <Collections />
        {/* <Reviews />
        <Blog />
        <More />
        <Prioritise /> */}
      </main>
      {/* <Footer /> */}
      
    </div>
  );
}

export default App;
