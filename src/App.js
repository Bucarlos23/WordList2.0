import InitialScream from "./Pages/InitialScreeam";
import { Routes, Route } from "react-router-dom";
import WordList from "./Pages/WordList";
import NotFound from "./Pages/NotFound";
import Configs from "./Pages/Configs";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<InitialScream />} />
        <Route exact path="/:id" element={<WordList />} />
        <Route exact path="/:id/Configs" element={<Configs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
