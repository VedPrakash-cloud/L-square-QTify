import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import style from "../FAQ/Faq.module.css";

export default function AccordionUsage() {
  const [data, setData] = useState([]);

  const FetchFaq = async () => {
    try {
      const response = await axios.get(
        "https://qtify-backend-labs.crio.do/faq"
      );
      setData(response.data.data);
    } catch (err) {
      console.error("unable to fetch FAQs", err);
    }
  };

  useEffect(() => {
    FetchFaq();
  }, []);

  return (
    <div className={style.mainContainer}>
      <h1>FAQs</h1>
      {data.map((items) => (
        <Accordion
          key={uuidv4()}
          sx={{
            marginBottom: "10px",
            borderRadius: "8px",
            border: "1px solid #FFFFFF",
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon sx={{ color: "#34C94B", fontSize: 40 }} />
            }
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{
              background: "#121212",
              color: "#FFFFFF",
              borderRadius: "6px",
            }}
          >
            <Typography component="span">{items.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>{items.answer}</AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
