import './App.css';
import Header from "./components/Header";
import {Routes, Route} from "react-router";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Life from "./components/Life";
import Air from "./components/Air";
import PreLink from "./components/PreLink";

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/roller mechanism'} element={<Life/>}/>
            <Route path={'/peculiarities'} element={<Air/>}/>
            <Route path={'/advantages'} element={<PreLink/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
