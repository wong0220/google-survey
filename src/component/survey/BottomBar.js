import { Box, Switch, Divider } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  SetEssential,
  SetDuplicate,
  Decrement,
} from "../../features/content/contentSlice";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";

export function BottomBar({ contentID }) {
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        mt: 3,
      }}
    >
      <ContentCopyIcon
        sx={{ cursor: "pointer" }}
        onClick={() => {
          dispatch(SetDuplicate([contentID, nanoid()]));
        }}
      />
      <DeleteIcon
        sx={{ ml: 2, mr: 3, cursor: "pointer" }}
        onClick={() => {
          dispatch(Decrement(contentID));
        }}
      />
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{ mr: 2 }}
        />
        필수
        <Switch
          onChange={(event) => {
            dispatch(SetEssential([contentID, event.target.checked]));
          }}
        />
      </Box>
    </Box>
  );
}
