import React, { useState } from 'react';
import Watch from './watch';
import History from './History';

function App() {
  const [history, setHistory] = useState([]);

  return (
    <div className="App">
      <Watch setHistory={setHistory} />
      <History history={history} setHistory={setHistory} />
    </div>
  );
}

export default App;
