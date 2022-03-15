import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Home from "./Components/Pages/Home";
import Menu from "./Components/Pages/Menu";

function App() {
    return (
            <Router>
                <Layout>
                  <Routes>
                    <Route exact path="/" element={<Home />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/menu" element={<Menu />}/>
                    <Route path="/contact" element={<Contact />}/>
                  </Routes>
                </Layout>
            </Router>
    );
}

export default App;
