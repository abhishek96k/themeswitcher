import React  from 'react';
import './App.css';
import Tabs from './Components/Tabs';
import DarkMode from './Components/DarkMode';

function App() {
  return (
    <div className="App">
      <DarkMode />
      <Tabs/>
    </div>
  );
}

export default App;
