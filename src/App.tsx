import "./App.css";
import LeftPanel from "./components/leftPanel/LeftPanel";
import RightPanel from "./components/rightPanel/RightPanel";

function App() {
  return (
    <div className='Wrapper'>
      <LeftPanel />
      <RightPanel />
    </div>
  );
}

export default App;
