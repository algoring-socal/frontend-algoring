import logo from "./logo.svg";
import "./App.css";
import MainPage from "./pages/MainPage";

function App() {
  
  return (
    <div className="App">
      {/* react-router-v6 인스톨 -> <Route url='/'> */}
      <MainPage />
    </div>
  );
}

export default App;
