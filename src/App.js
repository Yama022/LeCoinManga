import { Route, Routes } from "react-router-dom";

import Header from "./containers/Header";
import Landing from "./containers/Landing";
import Auth from "./containers/Auth";
import Form from "./containers/Form";
import Profile from "./containers/Profile";
import Cart from "./components/Cart";
import Favorites from "./components/Favorites";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/form" element={<Form />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
