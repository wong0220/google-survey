import { Box } from "@mui/material";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import { useDispatch } from "react-redux";
import { OptIncrement } from "../features/content/contentSlice";
import { nanoid } from "nanoid";

export function RadioOpt({ contentID }) {
  const dispatch = useDispatch();

  return (
    <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          color: "gray",
        }}
        onClick={() => {
          dispatch(OptIncrement([nanoid(), contentID]));
        }}
      >
        <CircleOutlinedIcon /> 옵션추가
      </Box>
      <Box sx={{ ml: 1 }}>또는</Box>
      <Box sx={{ color: "blue", ml: 1, cursor: "pointer" }}>'기타 추가'</Box>
    </Box>
  );
}
