import { Select, MenuItem } from "@mui/material";
import { useState } from "react";

export function SelectBox() {
  const [age, setAge] = useState(30);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Select value={age} onChange={handleChange} sx={{ width: "30%", ml: 5 }}>
      <MenuItem value={10}>단답형</MenuItem>
      <MenuItem value={20}>장문형</MenuItem>
      <MenuItem value={30}>객관식 질문</MenuItem>
      <MenuItem value={40}>체크박스</MenuItem>
      <MenuItem value={50}>드롭다운</MenuItem>
    </Select>
  );
}
