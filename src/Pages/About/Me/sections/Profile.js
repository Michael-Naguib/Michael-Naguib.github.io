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
import Icon from "@mui/material/Icon";// eslint-disable-line no-unused-vars

// Otis Kit PRO components
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKButton from "components/MKButton";// eslint-disable-line no-unused-vars
import MKTypography from "components/MKTypography";

// Images
import profilePicture from "assets/images/Michael_Naguib.webp";

// Additional Displays // for another day
// import GitHubCalendar from 'react-github-calendar';

function Profile() {
  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <MKBox mt={{ xs: -16, md: -20 }} textAlign="center">
            <MKAvatar src={profilePicture} alt="Burce Mars" size="xxl" shadow="xl" />
          </MKBox>
          <Grid container justifyContent="center" py={6}>
            <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h3">Michael Naguib</MKTypography>
              </MKBox>
              <Grid container spacing={3} mb={3}>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    0!&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Posts
                  </MKTypography>
                </Grid>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    &lfloor;π&rfloor;-&lfloor;e&rfloor;&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Published papers
                  </MKTypography>
                </Grid>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    Research&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Experience
                  </MKTypography>
                </Grid>
              </Grid>
              <MKTypography variant="body1" fontWeight="light" color="text">
                I am a Software Engineer with B.S. in Computer Science and a B.S. with focus in Mathematics. I have experience
                in Multiagent systems research and have a great curiosity for figuring out how things work. Ever since I was little
                the natural world around me fascinated me, whether it was observing the behavior of ants, hot wiring a makeshift motor circuit,
                or taking my first steps into programming,  I have endeavored to try to understand the way things work. To me concepts, algorithms,
                and mathematics present themselves as uniquely intricate structures which can interact with another in an infinitely diverse number
                of ways. Part of the satisfaction I find in my line of work is that I get to pluck one or several branches from this infinitely sized tree to
                create something new directed at solving the task at hand. This is a very human-centered process despite the fact that it involves utilizing
                a large variety of computational resources and tools. Often I have found the human intuition about coming to the solution reveals more than
                the solution itself. Understanding the fundamental logic and intuitive steps of a process is what makes my work gratifying and interesting.
                I seek to understand the rationality of people who wrote the textbook so to speak, not just the axiomatic statements put forth. I have found
                that this is what leads to true understanding and creativity when crafting an algorithm no one has ever seen before, as you are no longer constructing
                with the building blocks passed on to you but with the mind of the architect who sculpted them.<br/><br/>
                I&apos;m also not a robot (who eats real food 🍪)  and enjoys hobbies such as XC Running 🏃, Rock Climbing 🧗, & Guitar 🎸.
              </MKTypography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Profile;
