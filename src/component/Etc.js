import { Box, TextField } from "@mui/material";
import { OffEtc } from "../features/content/contentSlice";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CancelIcon from "@mui/icons-material/Cancel";
import { useDispatch } from "react-redux";

export function Etc({ contentID }) {
  const dispatch = useDispatch();
  return (
    <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
      <CircleOutlinedIcon sx={{ color: "gray" }} />
      <TextField
        defaultValue="기타..."
        variant="standard"
        sx={{ width: "90%" }}
        disabled
      />
      <CancelIcon
        sx={{ cursor: "pointer" }}
        onClick={() => {
          dispatch(OffEtc(contentID));
        }}
      />
    </Box>
  );
}
