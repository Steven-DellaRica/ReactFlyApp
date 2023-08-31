import './App.css';
import AirportAPI from './AirportAPI';
import { ContextAirportsProvider } from './ContextAirports';

function App() {
  return (
    <div className="App">
      <ContextAirportsProvider>
        <AirportAPI />
      </ContextAirportsProvider>
    </div>
  );
}

export default App;
