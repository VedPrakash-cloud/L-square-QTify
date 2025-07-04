import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import style from "../FAQ/Faq.module.css"

export default function AccordionUsage() {
  return (
    <div className={style.mainContainer}>
      <h1>FAQs</h1>
      <Accordion sx={{marginBottom:"10px", borderRadius:"8px", border: "1px solid #FFFFFF"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:"#34C94B", fontSize: 40}} />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            background:"#121212",
            color:"#FFFFFF",
            borderRadius: "6px"
          }}
        >
          <Typography component="span">Is QTify free to use?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Yes, QTify is free for everyone...
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{marginBottom:"10px", borderRadius:"8px", border: "1px solid #FFFFFF"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:"#34C94B", fontSize: 40}}/>}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{
            background:"#121212",
            color:"#FFFFFF",
            borderRadius: "6px"
          }}
        >
          <Typography component="span">Can I download and listen to songs offline?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Sorry, unfortunately we don't provide the service to download any songs.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
