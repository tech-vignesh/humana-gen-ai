import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import ChatBox from "./component/chat/ChatBox";
import Details from "./component/member/Details";
import Dashboard from "./component/dashboard/Dashboard";
import Navigation from "./shared/navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
    </div>
  );
}

export default App;
