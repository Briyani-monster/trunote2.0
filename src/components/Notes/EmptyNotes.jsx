import Lightbulb from "@mui/icons-material/LightbulbOutlined";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material";
const EmptyNotes = () => {
  const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20vh;
  `;
  const Light = styled(Lightbulb)`
    font-size: 150px;
    color: #f5f5f5;
  `;
  const Text = styled(Typography)`
    font-size: 22px;
    color: #80868b;
  `;
  return (
    <Container>
      <Light />
      <Text> Notes you add appear here</Text>
    </Container>
  );
};
export default EmptyNotes;
