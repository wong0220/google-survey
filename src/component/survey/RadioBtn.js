import { TextField, Box } from "@mui/material";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import { useDispatch, useSelector } from "react-redux";
import { SetMltAns, OptDecrement } from "../../features/content/contentSlice";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

export function RadioBtn({ contentId, nanoOptID }) {
  const optContent = useSelector(
    (state) => state.content.mltplChcOp[contentId].opt[nanoOptID]
  );
  const optType = useSelector(
    (state) => state.content.mltplChcOp[contentId].type
  );
  const numberOfOpt = Object.keys(
    useSelector((state) => state.content.mltplChcOp[contentId].opt)
  ).length;
  const indexNumber =
    Object.keys(
      useSelector((state) => state.content.mltplChcOp[[contentId]].opt)
    ).indexOf(nanoOptID) + 1;

  function rtrnType(type) {
    if (type === 30) {
      return <CircleOutlinedIcon sx={{ color: "gray", mr: 1 }} />;
    } else if (type === 40) {
      return <CheckBoxOutlineBlankIcon sx={{ color: " gray", mr: 1 }} />;
    } else if (type === 50) {
      return <Box sx={{ mr: 2 }}>{indexNumber}</Box>;
    }
  }
  const dispatch = useDispatch();

  return (
    <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
      {rtrnType(optType)}
      <TextField
        id="headerID"
        value={optContent}
        variant="standard"
        size="small"
        sx={{ width: "90%" }}
        onChange={(event) => {
          dispatch(SetMltAns([contentId, nanoOptID, event.target.value]));
        }}
      />
      {numberOfOpt > 1 && (
        <CancelIcon
          sx={{ ml: 1, cursor: "pointer" }}
          onClick={() => {
            dispatch(OptDecrement([contentId, nanoOptID]));
          }}
        />
      )}
    </Box>
  );
}
