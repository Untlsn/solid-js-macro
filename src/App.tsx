import type { Component } from 'solid-js';
import { $memo, $signal } from 'solid-js/macro';

const App: Component = () => {
  let num = $signal(0);
  let a = $memo(num * 2);

  return (
    <div style={{ padding: '2em' }}>
      <p>{a}</p>
      <button onClick={() => num++}>Add</button>
    </div>
  );
};

export default App;
