import "./App.css";

import Picker from "./componentes/Picker";

function App() {
  console.log("Rendering App...");
  return (
    <div className="App">
      <header className="App-header">
        <h1>Días sin accidentes</h1>
        <div>
          <Picker defaultValue={0} />
        </div>
      </header>
    </div>
  );
}

export default App;
