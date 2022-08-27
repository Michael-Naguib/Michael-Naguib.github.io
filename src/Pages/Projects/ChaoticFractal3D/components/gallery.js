import MKBox from "components/MKBox";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import bgImage from "assets/images/sergio-medina-U4zohVXjQaE-unsplash.jpg";
import ImageCard from "./ImageCard";

function Gallery() {
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid item xs={12} md={6} lg={4}>
            <MKBox mt={3}>
                <ImageCard image={bgImage}/>
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Gallery;
