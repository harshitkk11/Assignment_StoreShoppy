import { Route, Routes } from "react-router-dom";
import Payout from "./pages/Payout";

function App() {
  return (
    <div className="w-[100%] h-[100vh] bg-primary text-text-primary font-Poppins">
      <Routes>
      <Route path="/" element={<Payout />} />
      </Routes>
    </div>
  );
}

export default App;
