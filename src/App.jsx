import { Routes } from "./routes";
import { GlobalStyle } from "./styles/global";
import MenuNav from "./components/Menu";

function App() {
  return (
    <div>
      <MenuNav />
      <Routes />
      <GlobalStyle />
    </div>
  );
}

export default App;
