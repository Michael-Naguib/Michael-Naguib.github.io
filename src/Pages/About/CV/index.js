/*
=========================================================
* Otis Kit PRO - v2.0.1
=========================================================

* Product Page: https://material-ui.com/store/items/otis-kit-pro-material-kit-react/
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";// eslint-disable-line no-unused-vars

// Otis Kit PRO components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Otis Kit PRO examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Coworking page sections
import Information from "pages/About/CV/sections/Information";// eslint-disable-line no-unused-vars
import Testimonials from "pages/About/CV/sections/Testimonials";// eslint-disable-line no-unused-vars
import AboutUs from "pages/About/CV/sections/AboutUs";// eslint-disable-line no-unused-vars
import Places from "pages/About/CV/sections/Places";// eslint-disable-line no-unused-vars

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/bg-coworking.jpeg";
import bgPattern from "assets/images/shapes/pattern-lines.svg";

function CV() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://material-ui.com/store/items/otis-kit-pro-material-kit-react/",
          label: "buy now",
          color: "info",
        }}
        sticky
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.5),
              rgba(gradients.dark.state, 0.5)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            md={7}
            justifyContent={{ xs: "center", md: "start" }}
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Curriculum Vitae
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              mt={1}
              pr={{ md: 12, lg: 24, xl: 32 }}
              opacity={0.8}
            >
              Michael Naguib
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <MKBox position="relative" variant="gradient" bgColor="dark" mt={6} py={2} mx={-2}>
          <MKBox
            component="img"
            src={bgPattern}
            alt="background-pattern"
            position="absolute"
            top={0}
            left={0}
            width="100%"
            opacity={0.2}
            display={{ xs: "none", md: "block" }}
          />
          <Container>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={8} lg={5}>
                <MKTypography variant="h5" color="white" fontWeight="bold">
                  References & additional information available at request. 
                </MKTypography>
              </Grid>
              <Grid item xs={12} lg={6} sx={{ ml: "auto" }}>
                <MKBox width="12rem" ml="auto">
                  <MKButton variant="gradient" color="warning" fullWidth sx={{ boxShadow: "none" }}>
                    Download PDF
                  </MKButton>
                </MKBox>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default CV;
