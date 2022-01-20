import type { Component } from 'solid-js';
import { $signal } from 'macros/ref';

const App: Component = () => {
  let points = $signal(['val']);

  return (
    <div style={{ padding: '2em' }}>
      {points.map(point => <p>{point}</p>)}
      <button onClick={() => points = [...points, 'wol']}>Add</button>
    </div>
  );
};

export default App;
