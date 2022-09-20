import { Route, Routes } from "react-router-dom";

import Header from "./containers/Header";
import Landing from "./containers/Landing";
import Auth from "./containers/Auth";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
