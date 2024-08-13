import React from 'react';
import ReactDOM from 'react-dom/client';
//import AppClass from './AppClass';
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container'>
      <div className='row'>
        <div className='col'>
          {/*<AppClass msg='State Classes' />*/}
          <App msg='State With Functional Component' />
        </div>
      </div>
    </div>
  </React.StrictMode>
);
