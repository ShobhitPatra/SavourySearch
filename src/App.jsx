import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Favourites from "./pages/Favourites";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/favourites" element={<Favourites />}></Route>
      </Routes>
    </>
  );
}

export default App;
