import React, { Component } from "react";
import { Provider } from 'react-redux'
import { BrowserRouter  as Router, Route} from 'react-router-dom'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
/*Local Files To import */
import App from './App';
import Login from './components/Login';
class Routes extends Component {
    constructor() {
        super();
        this.state = {

        };
    }

    render() {
        console.log("Routes");
        console.log(this);
        // const history = syncHistoryWithStore(browserHistory, this.props.store)
        return (
            <Provider store={this.props.store}>
                <Router >
                <App >
                    <Route path='/login' component={Login} />
                </App>
                </Router>
            </Provider>

        )
    }
}
export default Routes;