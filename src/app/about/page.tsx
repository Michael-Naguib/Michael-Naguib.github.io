"use client"
import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link';
import NoBreakSpace from '@/images/NoBreakSpaceM.png'

const qAndAList=[
    {
        question:"How did you get started programming?",
        answer:"Windows Batch (shell) script programming ... from there I took on a bunch of 'for fun' projects\
                and learned several other languages. I found that the best way to learn was to do. Most programming languages\
                even if the errors are esoteric, let you retry very quickly, which let me try again and again until I learned\
                the ideas and nuances behind programming."
    },
    {
        question:"What's your favorite language?",
        answer:"While I enjoy the scalpal like precision & efficiency C++ has to offer, I don't always\
                enjoy having to make my own egg farm, wheat farm, spoon factory, and oven to bake a cake\
                which is why python 🐍 holds #1 spot. It let's you test ideas quickly and expirament, which\
                to me is one of the joys of programming."
    },
    {
        question:"'Gif' or 'Jif'?",
        answer:"It's 'Gif'(soft g dʒɪf not hard g ɡɪf) as the inventor Steve Wilhite intended.\
                It was a pun of the fameous advert 'Choosy mothers choose Jiff'. He would say \
                'Choosy programmers choose dʒɪf'. Does it matter that much?"
    },
    {
      question:"Most obscure bug 🪲 ever had to solve ?",
      answer:
      <Typography display="inline">
        I have figured out my fair share of deadlock and <i>off by one</i> bugs but the most memorable one was a unicode compiler bug. I spent about a month debugging this bug, and was 
        almost at the point where I was going to rewrite the code from scratch. It occured because 
        a <Link href="https://en.wikipedia.org/wiki/Non-breaking_space">Non-Breaking Space</Link> had silently made it's way into my code. This invisible character
        could not be seen in the editors I was using & caused no issue for my compiler, however on the system I was deploying to, the compiler version was a little different.
        The remote compiler simply would fail to generate the object code for one of my classes, but provided no reason and hit some pretty out there edge case error reporting. 
        I eventually found it when I opened it in VS Code which registered the character � . This incident spawned multiple <Link href={NoBreakSpace.src}> memes </Link> from my buddies in CS. 
      </Typography>
    },
    {
      question:"Why computer science & not mathematics for a degree? ",
      answer:"I considered philosophy, mathematics, and computer science.\
              I ultimately decided on computer science because I liked that I \
              could apply mathematics to it. I consider myself a mathematician who\
              knows how to implement efficiently. That skill can mean the difference\
              between computable and unatainable -- a whole new world of possibility." 
    },
    {
      question:"What are your hobbies?",
      answer:"I have several hobbies: \
              (1) Guitar 🎸which keeps me creative. \
              (2) Hiking 🚶🏻 which keeps me fit ,and \
              (3) reading which helps me learn. "
    },
    {
      question:"Which programmer would I like to meet from history?",
      answer: <Typography display="inline">
        It's  a close tie between 
        <Link href="https://en.wikipedia.org/wiki/John_von_Neumann"> John Von Neuman </Link> and
        <Link href="https://en.wikipedia.org/wiki/Margaret_Hamilton_(software_engineer)"> Margaret Hamilton </Link>.
        Von Neuman had such an amazing mind of ideas about computing, many of which continue to underpin computing today!
        Mararet Hamilton had an level of professional skill getting software right in difficult circumstances: she wrote the on-board 
        flight software for NASA's Apollo Moon missions.
      </Typography>
    },
];

function QuestionAndAnswer(props) {

    const [expanded, setExpanded] = React.useState<string | false>('panel1');
  
    const handleChange =
      (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
      <Box sx={{width:"100%"}}>
        {props.qaList.map((qa,i)=>{ return(
            <Accordion key={i} expanded={expanded === ('panel'+i)} onChange={handleChange('panel'+i)}>
                <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls={"panel"+i+"a-content"}
                      id={"panel"+i+"a-header"}
                >
                    <Typography><b>Q:</b>{qa.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography><b>A:</b> <>{qa.answer}</></Typography>
                </AccordionDetails>
            </Accordion>
        )})}
      </Box>
    );
}
export default function AboutPage() {
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="body1" gutterBottom>
          About Page
        </Typography>
        <QuestionAndAnswer qaList={qAndAList}/>
      </Box>
    </Container>
  );
}
