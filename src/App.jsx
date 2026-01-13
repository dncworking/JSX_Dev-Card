import "./App.css";
import Card from "./components/Card";

const available = true;
function App() {
  return (
    <div className={available ? "card available" : "card unavailable"}>
      <Card />
    </div>
  );
}

export default App;
