import React from 'react';
import { render } from "react-dom";

import store from 'app/config/store';
import router from 'app/config/router';

import Root from "app/components/root";
import Application from "app/components/application";

window.store = store;

router.start((err, route) => {
  render(
    (
       <Root store={ store } router={ router }>
         <Application />
       </Root>
    ),
    document.getElementById('app')
  );
});
