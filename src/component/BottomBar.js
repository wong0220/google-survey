import { Box, Switch } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteIcon from "@mui/icons-material/Delete";

export function BottomBar() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        mt: 3,
      }}
    >
      <ContentCopyIcon fontSize="large" />
      <DeleteIcon fontSize="large" sx={{ ml: 2, mr: 3 }} />
      필수
      <Switch />
    </Box>
  );
}
