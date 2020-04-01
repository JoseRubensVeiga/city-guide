import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Navbar from './_layouts/Navbar';
import Footer from './_layouts/Footer';

import Home from './pages/Home';
import News from './pages/News';
import Contacts from './pages/Contacts';
import Details from './pages/Details';
import NotFoundPage from './pages/NotFoundPage';

export default function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/news" component={News} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/details" component={Details} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
