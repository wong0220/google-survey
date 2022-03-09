import { TextField, Box } from "@mui/material";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

export function RadioBtn() {
  return (
    <Box sx={{ mt: 3 }}>
      <CircleOutlinedIcon />
      <TextField
        id="headerID"
        value="가나다라ㅏ라라ㅏ라라랄"
        variant="standard"
        size="small"
        sx={{ width: "90%" }}
      />
    </Box>
  );
}
