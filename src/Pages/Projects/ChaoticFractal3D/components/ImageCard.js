import MKBox from "components/MKBox";
import Card from "@mui/material/Card";
import PropTypes from "prop-types";

function ImageCard({image}){
  return(
    <Card>
      <MKBox position="relative" borderRadius="lg" mx={2} mt={-3}>
        <MKBox
          component="img"
          src={image}
          alt="img"
          borderRadius="lg"
          shadow="md"
          width="100%"
          position="relative"
          zIndex={1}
        />
        <MKBox
          borderRadius="lg"
          shadow="md"
          width="100%"
          height="100%"
          position="absolute"
          left={0}
          top={0}
          sx={{
            backgroundImage: `url(${image})`,
            transform: "scale(0.94)",
            filter: "blur(12px)",
            backgroundSize: "cover",
          }}
        />
      </MKBox>
    </Card>
  );

}

ImageCard.propTypes = {
  image: PropTypes.string.isRequired,
}

export default ImageCard;