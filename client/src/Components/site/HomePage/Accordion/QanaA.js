import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function QanaA() {
  const [expanded, setExpanded] = React.useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <div>
    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
        >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                שאלה: עברתי טיפול ולא עזר לי, מה לעשות?
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
        ורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק.
            בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש.
                קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת.
                צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק.
                מוסן מנת. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך.
                נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר מודוף.
            </Typography>
        </AccordionDetails>
    </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            שאלה: עברתי טיפול ולא עזר לי, מה לעשות?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            ורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. מוסן מנת. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר מודוף.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            שאלה: עברתי טיפול ולא עזר לי, מה לעשות?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            ורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. מוסן מנת. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר מודוף.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            שאלה: עברתי טיפול ולא עזר לי, מה לעשות?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            ורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. מוסן מנת. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר מודוף.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            שאלה: עברתי טיפול ולא עזר לי, מה לעשות?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            ורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. מוסן מנת. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר מודוף.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            שאלה: עברתי טיפול ולא עזר לי, מה לעשות?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            ורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. מוסן מנת. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר מודוף.
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}

export default QanaA;
