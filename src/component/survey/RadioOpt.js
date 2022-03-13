import { Box } from "@mui/material";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { useDispatch, useSelector } from "react-redux";
import { OptIncrement, SetEtc } from "../../features/content/contentSlice";
import { nanoid } from "nanoid";

export function RadioOpt({ contentID }) {
  const optType = useSelector(
    (state) => state.content.mltplChcOp[contentID].type
  );

  const dispatch = useDispatch();

  function rtrnType(type) {
    if (type === 30) {
      return <CircleOutlinedIcon sx={{ color: "gray", mr: 1 }} />;
    } else if (type === 40) {
      return <CheckBoxOutlineBlankIcon sx={{ color: " gray", mr: 1 }} />;
    }
  }

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
        {rtrnType(optType)} 옵션추가
      </Box>
      <Box sx={{ ml: 1 }}>또는</Box>
      <Box
        sx={{ color: "blue", ml: 1, cursor: "pointer" }}
        onClick={() => {
          dispatch(SetEtc(contentID));
        }}
      >
        '기타 추가'
      </Box>
    </Box>
  );
}
