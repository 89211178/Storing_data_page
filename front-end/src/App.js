import "./styles.css";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="APP">
      <Helmet>
        <title>CookSmart</title>
        <link rel="icon" type="image" href="https://cdn.icon-icons.com/icons2/1859/PNG/512/fooddome_117914.png" />
      </Helmet>
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;