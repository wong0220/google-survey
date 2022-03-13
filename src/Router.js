import { BrowserRouter, Routes, Route } from "react-router-dom";
import Survey from "./Survey";
import { Preview } from "./Preview";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Survey />} />
        <Route path="/preview" element={<Preview />} />
      </Routes>
    </BrowserRouter>
  );
}
