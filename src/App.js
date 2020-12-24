import React from 'react';
import { BrowserRouter} from 'react-router-dom';

import './App.css';
import './styles/all.css';
import Navigation from './Router/Routes.navigation';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
      </div>
    </BrowserRouter>
  );
}

export default App;
