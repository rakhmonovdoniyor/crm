import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Button from '@mui/material/Button';
import { AccordWrapp, BoxItemIconMenu, MoreMenu } from './accordstyle';
import PositionedMenu from './menulist';
import Usersdata from './usermockdata';


export default function AccordionUsage() {

  
  return (
    
    <div style={{gap: '20px'}}>
      <Accordion  style={{boxShadow: 'none',border: '1px solid #BFBAE3',borderRadius: "6px",  marginBottom: '15px'}}>
        <AccordionSummary style={{border: 'none'}}
         
        expandIcon ={ <ExpandMoreIcon />  }
          aria-controls="panel1-content"
          id="panel1-header"
        aria-details = {<button><PositionedMenu/></button>}
        >

          <BoxItemIconMenu>
            <AccordWrapp>
            Elementary 
            <p>30</p>
            </AccordWrapp>

            <MoreMenu>
            {/* <ExpandMoreIcon />  */}

            </MoreMenu>
          </BoxItemIconMenu>
         
           
        </AccordionSummary >
      
       
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99992 5.83333C10.9204 5.83333 11.6666 5.08714 11.6666 4.16667C11.6666 3.24619 10.9204 2.5 9.99992 2.5C9.07944 2.5 8.33325 3.24619 8.33325 4.16667C8.33325 5.08714 9.07944 5.83333 9.99992 5.83333Z" fill="#BFBAE3"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99992 11.6663C10.9204 11.6663 11.6666 10.9201 11.6666 9.99967C11.6666 9.0792 10.9204 8.33301 9.99992 8.33301C9.07944 8.33301 8.33325 9.0792 8.33325 9.99967C8.33325 10.9201 9.07944 11.6663 9.99992 11.6663Z" fill="#BFBAE3"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99992 17.5003C10.9204 17.5003 11.6666 16.7541 11.6666 15.8337C11.6666 14.9132 10.9204 14.167 9.99992 14.167C9.07944 14.167 8.33325 14.9132 8.33325 15.8337C8.33325 16.7541 9.07944 17.5003 9.99992 17.5003Z" fill="#BFBAE3"/>
</svg> */}
        <AccordionDetails style={{border: 'none'}}>
         <Usersdata/>
        </AccordionDetails>
      </Accordion>

      <Accordion style={{boxShadow: 'none',border: '1px solid #BFBAE3',borderRadius: "6px",  marginBottom: '15px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Accordion 2
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>

      <Accordion style={{boxShadow: 'none',border: '1px solid #BFBAE3',borderRadius: "6px",  marginBottom: '15px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Accordion Actions
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
       
      </Accordion>
      <Accordion style={{boxShadow: 'none',border: '1px solid #BFBAE3',borderRadius: "6px",  marginBottom: '15px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Accordion 2
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion style={{boxShadow: 'none',border: '1px solid #BFBAE3',borderRadius: "6px",  marginBottom: '15px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Accordion 2
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion style={{boxShadow: 'none',border: '1px solid #BFBAE3',borderRadius: "6px",  marginBottom: '15px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Accordion 2
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
