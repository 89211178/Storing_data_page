import "./styles.css";
import Pages from "./pages/Pages";
import Search from "./components/Search";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="APP">
      <BrowserRouter>
        <Search />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;