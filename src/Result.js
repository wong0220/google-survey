import { Box } from "@mui/material";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";
import { ContentRes } from "./component/result/ContentRes";
import { HeaderRes } from "./component/result/HeaderRes";

export function Result() {
  const answer = useSelector((state) => state.preview.previewContent);

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: 7,
        }}
      >
        <HeaderRes />
        <Box
          sx={{
            width: 814,
            bgcolor: "white",
            border: " 1px solid gray",
            borderRadius: 4,
            mt: 3,
            pt: 3,
            pb: 3,
            boxShadow: 2,
          }}
        >
          {Object.keys(answer).map((el) => (
            <ContentRes key={nanoid()} title={el} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
