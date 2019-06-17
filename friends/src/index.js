import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { withRouter } from 'react-router';

import './index.css';
import App from './App';

// Passes the App component to withRouter. withRouter returns App component wrapped with Router Component to be able to use match, location and history properties on router.
const AppWithRouter = withRouter(App);

ReactDOM.render(
<Router>
    {/* AppWithRouter is the value assigned to the component returned from withRouter call */}
    <AppWithRouter />
</Router>, document.getElementById('root'));