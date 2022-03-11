import { Box, TextField } from "@mui/material";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

export function Etc() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
      <CircleOutlinedIcon sx={{ color: "gray" }} />
      <TextField
        defaultValue="기타..."
        variant="standard"
        sx={{ width: "90%" }}
        disabled
      />
    </Box>
  );
}
