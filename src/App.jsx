import { useState } from 'react';
import './App.css';
import Box from './Box';

const ITEMS = 3;

function App() {
  const [position, setPosition] = useState(0);
  return (
    <div className="app">
      <h1>Highlight then Drag and Drop</h1>
      {Array(ITEMS)
        .fill(null)
        .map((_, index) => (
          <Box
            key={index}
            hasItem={index === position}
            onSelect={() => setPosition(index)}
          />
        ))}
    </div>
  );
}

export default App;
