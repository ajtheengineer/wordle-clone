import './app.css';
import Grid from './components/grid.js';
import Header from './components/header.js';
import KeyBoard from './components/keyboard.js'

function App() {
  const width = 5
  const height = 6

  return (
    <div className="app-container">
      <Header />
      <Grid width={width} height={height} />
      <KeyBoard />
    </div>
  );
}

export default App;
