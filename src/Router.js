import { BrowserRouter, Routes, Route } from "react-router-dom";
import Survey from "./Survey";
import { Preview } from "./Preview";
import { Result } from "./Result";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Survey />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}
