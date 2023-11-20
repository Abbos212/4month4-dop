import React from 'react';

const History = ({ history, setHistory }) => {
  return (
    <div>
      <h1>History</h1>
      <ul>
        {history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button
        onClick={() => {
          setHistory([]);
        }}
      >
        Clear History
      </button>
    </div>
  );
}

export default History;
