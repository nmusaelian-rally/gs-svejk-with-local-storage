import React from 'react';
import Container from '../components/Container';
import Top from '../components/Top';
import School from '../components/School';
import { Route, IndexRoute } from 'react-router';

export default (
  <Route path="/" component={Container}>
    <Route path="/school" component={School} />
    <Route path="/school/:schoolname" component={School} />
    <IndexRoute component={Top} />
  </Route>
);