import { Box, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetShortAns } from "../../features/preview/previewSlice";

export function ShortAns({ answer, contentID }) {
  const [shorAns, setAns] = useState("내 답변");
  const ansTitle = answer.content;
  const essentialAns = answer.essential;

  const dispatch = useDispatch();
  return (
    <Box>
      <Box sx={{ display: "flex", fontSize: 20 }}>
        {ansTitle} {essentialAns && <Box sx={{ ml: 1, color: "red" }}>*</Box>}
      </Box>
      <TextField
        value={shorAns}
        variant="standard"
        sx={{
          mt: 3,
          width: "40%",
        }}
        onChange={(event) => {
          setAns(event.target.value);
        }}
        onBlur={() => {
          dispatch(SetShortAns([contentID, shorAns]));
        }}
      />
    </Box>
  );
}
