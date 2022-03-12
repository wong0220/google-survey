import { Box, TextField } from "@mui/material";
import { OffEtc } from "../features/content/contentSlice";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { useDispatch, useSelector } from "react-redux";

export function Etc({ contentID }) {
  const optType = useSelector(
    (state) => state.content.mltplChcOp[contentID].type
  );

  function rtrnType(type) {
    if (type === 30) {
      return <CircleOutlinedIcon sx={{ color: "gray", mr: 1 }} />;
    } else if (type === 40) {
      return <CheckBoxOutlineBlankIcon sx={{ color: " gray", mr: 1 }} />;
    }
  }
  const dispatch = useDispatch();

  return (
    <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
      {rtrnType(optType)}
      <TextField
        defaultValue="기타..."
        variant="standard"
        sx={{ width: "90%" }}
        disabled
      />
      <CancelIcon
        sx={{ ml: 1, cursor: "pointer" }}
        onClick={() => {
          dispatch(OffEtc(contentID));
        }}
      />
    </Box>
  );
}
