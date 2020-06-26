/* import React from 'react';
import Child from './Child'
import './App.css';


function App() {
  return (
    
      <div >
        <Child></Child>
      </div>
    
  );
}

export default App;


 */

import React from 'react';
import './App.css';
import Child from './Child';
import {TransactionProvider} from './transContext';

function App() {
  return (
    <TransactionProvider>
      <Child></Child>
      </TransactionProvider>
  );
}

export default App;