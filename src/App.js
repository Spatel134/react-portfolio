import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import Portfolio from "./containers/Portfolio/Portfolio";
import Contact from "./containers/Contact/Contact";
import Footer from "./components/Footer/Footer"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Header />
        <main className="page">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
            <Route path="*" component={Home} />
          </Switch>
        </main>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
