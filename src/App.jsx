/* eslint-disable react/jsx-no-undef */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Expend from "./pages/Expense";
import Home from "./pages/Home";
import Income from "./pages/Income";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="income" element={<Income />}/>
          <Route path="expend" element={<Expend />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
