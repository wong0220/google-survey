import { Box, Divider } from "@mui/material";

export function Answer({ optType }) {
  function rtrnType(type) {
    if (type === 10) {
      return (
        <Box sx={{ mt: 3 }}>
          단문형 텍스트
          <Divider sx={{ width: "50%", mt: 1 }} />
        </Box>
      );
    } else {
      return (
        <Box sx={{ mt: 3 }}>
          장문형 텍스트
          <Divider sx={{ width: "80%", mt: 1 }} />
        </Box>
      );
    }
  }
  return <Box> {rtrnType(optType)}</Box>;
}
