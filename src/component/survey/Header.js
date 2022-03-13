import { TextField, Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setTitle, setDescription } from "../../features/header/headerSlice";

export function Header() {
  const title = useSelector((state) => state.header.headerContent.title);
  const description = useSelector(
    (state) => state.header.headerContent.description
  );

  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        width: 768,
        bgcolor: "white",
        border: " 1px solid gray",
        borderRadius: 4,
        p: 3,
        boxShadow: 2,
        borderTop: 7,
        borderTopColor: "purple",
      }}
    >
      <TextField
        fullWidth
        id="headerID"
        variant="standard"
        margin="normal"
        fontSize="20px"
        inputProps={{ style: { fontSize: 30 } }}
        size="small"
        value={title}
        onChange={(event) => dispatch(setTitle(event.target.value))}
      />
      <TextField
        fullWidth
        id="headerID"
        value={description}
        variant="standard"
        size="small"
        onChange={(event) => dispatch(setDescription(event.target.value))}
      />
    </Box>
  );
}
