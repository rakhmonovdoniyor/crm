import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { Container2, Container4, Edit, InputName, InputPWrapp, Line, SendButton } from '../../profile/modalst';
import { Addlead } from '../style';
import MultipleSelect from './addtogroup';
import { SendInput, SMSList } from './ldcolumn';
// import Example from '../../requestDemo/numberInput';
// import { Link } from 'react-router-dom';
// import App from '../../loginPage/hiddenpassword';
// import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';

export default function SendSMS() {
  // const [open, setOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <React.Fragment>
      <p  onClick={handleOpen}>

    Send SMS
      
      </p>
      <Modal
        // aria-labelledby="modal-title"
        // aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 600,
            borderRadius: 'md',
            p: 3,
            boxShadow: 'lg',
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
            style={{paddingBottom: '20px'}}
          >
          Send SMS
          </Typography>
          <Typography id="modal-desc" textColor="text.tertiary" >
              <Container2>
                <InputPWrapp>
                    {/* <p>Select group</p> */}
                    {/* <InputN/>ame  placeholder='Select group' type="text" /> */}
                <SendInput type="text"  placeholder='Enter Message'/>
             
               </InputPWrapp>
               <div>
                    
                    <SendButton>Send</SendButton>
                    
                    
                </div>

                <InputPWrapp>
                   <p style={{
                    color: '#2C2669',

                    /* Bold/24px -> 32px */
                    fontFamily: "Public Sans",
                    fontSize: 24,
                    fontStyle: 'normal',
                    fontWeight: 700,
                    // lineHeight: '32', /* 133.333% */
                   }}>SMS Templates</p>
                    <SMSList>
                        <h1>Bugun farzandingiz darsga kelmadi</h1>
                    </SMSList>
                    {/* <InputName type='date' placeholder='Select date' /> */}
                </InputPWrapp>
                <InputPWrapp>
                    
                    <SMSList>
                        <h1>Iltimos kurs uchun to’lovni vaqtida to’lang!</h1>
                    </SMSList>
                    {/* <InputName type='date' placeholder='Select date' /> */}
                </InputPWrapp>
                <InputPWrapp>
                  
                    <SMSList>
                        <h1>Farzandingiz darsdan qochib ketdi!</h1>
                    </SMSList>
                    {/* <InputName type='date' placeholder='Select date' /> */}
                </InputPWrapp>




                
               
                </Container2>
                {/* <Line>
                   
                </Line> */}

                {/* <MiniWrap>
                    <p $ptag >Are you already registered?</p>
                    <Link to="/signlogin">
                    <LogBtnWrap>
                    <LogBtn>Login</LogBtn>
                    </LogBtnWrap>
                   
                    </Link>
                </MiniWrap> */}
               
            
          </Typography>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}
