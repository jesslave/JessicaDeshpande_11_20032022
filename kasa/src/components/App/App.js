import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import '../../index.css';
import HomePage from "../../views/HomePage/HomePage";
import AboutPage from '../../views/AboutPage/AboutPage';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ErrorNotFound from '../../components/ErrorNotFound/ErrorNotFound';
import ApartementPage from '../../views/ApartementPage/ApartementPage';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
            <Header/>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="apartment/:id" element={<ApartementPage />} />
              <Route path="notfound" element={<ErrorNotFound />} />
            </Routes>
            <Footer/>
        </Router>
      </div>
    );
  }
}

export default App;
