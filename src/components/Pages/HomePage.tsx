import "./Page.css";
import { Typography, Box, Container } from "@mui/material";

function HomePage() {
  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "background.paper",
        padding: "3em",
      }}
    >
      <Container maxWidth="sm" sx={{}}>
        <Typography component="h1" variant="h2" color="black" gutterBottom>
          Album layout
        </Typography>
        <Typography variant="h5" color="black" paragraph>
          Programming the Future
        </Typography>
        <Typography variant="h5" color="black" paragraph>
          One Line at a Time
        </Typography>
      </Container>
    </Box>
  );
}

export default HomePage;
