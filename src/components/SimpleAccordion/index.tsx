
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { optionFAQ } from './optionFAQ';
import { Container, AnswerContainer } from './styles';


export function SimpleAccordion() {
  return (
    <Container >
      {optionFAQ?.map(faq => {  
        return (
          <Accordion >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                <span>{faq.question}</span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails >
              <Typography>
                <AnswerContainer >
                  {faq.answer}
                </AnswerContainer>
              </Typography>
            </AccordionDetails>
          </Accordion>
        )})}
    </Container>
  );
}