import "./App.css";
import Header from "./components/header/Header";
import LeftPanel from "./components/leftPanel/LeftPanel";
import RightPanel from "./components/rightPanel/RightPanel";

function App() {
  return (
    <div className='Wrapper'>
      <Header />
      <LeftPanel />
      <RightPanel />
    </div>
  );
}

export default App;
