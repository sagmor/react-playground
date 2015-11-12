import React from 'react';
import { Router, Route, Link } from 'react-router';

import {
  HomePage
} from 'app/pages';

export default <Router>
  <Route path="/" component={HomePage}>
  </Route>
</Router>

// export default (<HomePage />)
