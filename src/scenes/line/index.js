import { Box } from "@mui/material";
import Header from "../../components/Header";
import Linechart from "../../components/Linechart";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <Linechart />
      </Box>
    </Box>
  );
};

export default Line;
