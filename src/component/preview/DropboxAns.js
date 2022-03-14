import { Box, FormControl, Select, MenuItem } from "@mui/material";
import { nanoid } from "nanoid";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetDropVal } from "../../features/preview/previewSlice";

export function DropboxAns({ answer, contentID }) {
  const isEssential = answer.essential;
  const ansTitle = answer.content;
  const ansOpt = answer.opt;

  const [boxValue, SetboxValue] = useState("default");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    SetboxValue(event.target.value);
    dispatch(SetDropVal([contentID, event.target.value]));
  };

  return (
    <Box>
      <Box sx={{ display: "flex", fontSize: 20 }}>
        {ansTitle} {isEssential && <Box sx={{ ml: 1, color: "red" }}>*</Box>}
      </Box>

      <FormControl sx={{ mt: 2 }}>
        <Select value={boxValue} sx={{ width: 250 }} onChange={handleChange}>
          <MenuItem value="default" sx={{ color: "gray" }}>
            선택
          </MenuItem>
          {Object.values(ansOpt).map((opt, idx) => (
            <MenuItem key={nanoid()} value={Object.keys(ansOpt)[idx]}>
              {opt}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
