import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./containers/Signin";

const App = () => {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
