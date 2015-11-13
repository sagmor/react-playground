import React from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router5';
import Debugger from 'app/components/debugger';

/**
 * Root component
 */
export default class Root extends React.Component {
  render() {
    return (
      <div>
        <Provider store={ this.props.store }>
          <RouterProvider router={ this.props.router }>
            {this.props.children}
          </RouterProvider>
        </Provider>
        {
          (__DEBUG__) ? <Debugger store={ this.props.store } /> : ''
        }
      </div>
    );
  }
}
