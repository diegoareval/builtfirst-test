import { BrowserRouter, Routes, Route } from "react-router-dom";
import MarketPlace from "../pages/MarketPlace";

const RoutesRoot = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<MarketPlace />} />
        <Route path="marketplace" index element={<MarketPlace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesRoot;
