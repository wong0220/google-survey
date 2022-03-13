import { Box, Divider } from "@mui/material";
import { useSelector } from "react-redux";

export function HeaderView() {
  const surveyHeader = useSelector((state) => state.header.headerContent);

  const surveyTitle = surveyHeader.title;
  const surveySub = surveyHeader.description;

  return (
    <Box
      sx={{
        width: 814,
        bgcolor: "white",
        border: " 1px solid gray",
        borderRadius: 4,
        mt: 3,
        boxShadow: 2,
        borderTop: 7,
        borderTopColor: "purple",
      }}
    >
      <Box sx={{ fontSize: 30, m: 3 }}>{surveyTitle}</Box>
      <Box sx={{ ml: 3, mb: 1 }}>{surveySub}</Box>
      <Divider />
      <Box sx={{ ml: 3, mb: 1, mt: 2, color: "red" }}>*필수항목</Box>
    </Box>
  );
}
