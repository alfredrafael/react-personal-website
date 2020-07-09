import React, { useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import { GlobalStyle } from './AppGlobalStyle';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Resume from './components/Resume/Resume';
import Casa from './components/Casa/Casa';
import ResumeEspanol from './components/ResumeEspanol/ResumeEspanol';
import $ from 'jquery';


const App = () => {

  // window.history.pushState({}, '', '/') //AMAZING

  return (
    <React.Fragment>
      <Router>




        {/* //////////////////////////////////////////////////////////////////////// */}
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/resume" component={Resume} />
          <Route path="/espanol" component={Casa} exact/>
          <Route path="/resume-espanol" component={ResumeEspanol} exact/>

          <Route render={() => <h2 style={{ paddingTop: '15%' }}>404 Page not found</h2>} />

        </Switch>
        {/* //////////////////////////////////////////////////////////////////////// */}


        <Footer />
      </Router>


    </React.Fragment>
  );
}

export default App;
