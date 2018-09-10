import React from 'react';
import ReactDOM from 'react-dom';

import PageHome from 'src/PageHome';

import 'src/styles/app.scss';
import "antd/dist/antd.css";
import 'src/styles/normalize.scss';

const App = () => (
  <div>
    <PageHome />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
