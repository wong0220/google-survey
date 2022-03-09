import { useState } from "react";
import { Box, TextField } from "@mui/material";

export function Content() {
  const [qstnTitle, setQstnTitle] = useState("제목없는 질문");
  return (
    <Box
      sx={{
        width: 768,
        bgcolor: "white",
        border: " 1px solid gray",
        borderRadius: 4,
        mt: 3,
        p: 3,
        boxShadow: 2,
      }}
    >
      <TextField
        id="filled-helperText"
        defaultValue="Default Value"
        value={qstnTitle}
        variant="filled"
        sx={{
          width: "60%",
        }}
        onChange={(event) => setQstnTitle(event.target.value)}
      />
    </Box>
  );
}
