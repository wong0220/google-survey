import { Select, MenuItem } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { SetType } from "../features/content/contentSlice";

export function SelectBox({ contentID }) {
  const optType = useSelector(
    (state) => state.content.mltplChcOp[contentID].type
  );
  const dispatch = useDispatch();

  return (
    <Select
      value={optType}
      onChange={(event) => {
        dispatch(SetType([contentID, event.target.value]));
      }}
      sx={{ width: "30%", ml: 5 }}
    >
      <MenuItem value={10}>단답형</MenuItem>
      <MenuItem value={20}>장문형</MenuItem>
      <MenuItem value={30}>객관식 질문</MenuItem>
      <MenuItem value={40}>체크박스</MenuItem>
      <MenuItem value={50}>드롭다운</MenuItem>
    </Select>
  );
}
