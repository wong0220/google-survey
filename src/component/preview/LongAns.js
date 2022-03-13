import { Box, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { SetSentence } from "../../features/preview/previewSlice";

export function LongAns({ answer, contentID }) {
  const [longAns, setAns] = useState("내 답변");
  const ansTitle = answer.content;
  const isEssential = answer.essential;

  const dispatch = useDispatch();
  return (
    <Box>
      <Box sx={{ display: "flex", fontSize: 20 }}>
        {ansTitle} {isEssential && <Box sx={{ ml: 1, color: "red" }}>*</Box>}
      </Box>
      <TextField
        value={longAns}
        variant="standard"
        sx={{
          mt: 3,
          width: "70%",
        }}
        onChange={(event) => {
          setAns(event.target.value);
        }}
        onBlur={() => {
          dispatch(SetSentence([contentID, longAns]));
        }}
      />
    </Box>
  );
}
