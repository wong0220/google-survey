import { useState } from "react";
import { Box, TextField } from "@mui/material";
import { SelectBox } from "./SelectBox";
import { RadioBtn } from "./RadioBtn";
import { SetAnsTitle } from "../features/content/contentSlice";
import { useDispatch, useSelector } from "react-redux";

export function Content({ nanoID }) {
  const answerTitle = useSelector(
    (state) => state.content.answerTitles[nanoID]
  );
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        width: 768,
        bgcolor: "white",
        border: " 1px solid gray",
        borderRadius: 4,
        mt: 3,
        p: 3,
        boxShadow: 2,
      }}
    >
      <TextField
        id="filled-helperText"
        defaultValue="제목없는 질문"
        value={answerTitle}
        variant="filled"
        sx={{
          width: "60%",
        }}
        onChange={(event) =>
          dispatch(SetAnsTitle([nanoID, event.target.value]))
        }
      />
      <SelectBox />
      <RadioBtn />
    </Box>
  );
}
