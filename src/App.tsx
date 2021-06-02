import React, { PureComponent } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { History } from 'history';

import { ApplicationState } from './store';
import Routes from './routes/routes';

// Any additional component props go here.
interface MainProps {
  store: Store<ApplicationState>;
  history: History;
}

class App extends PureComponent<MainProps> {
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </Provider>
    );
  }
}



export default App;