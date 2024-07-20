import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { Container2, Container4, Edit, InputName, InputPWrapp, Line, SendButton } from '../profile/modalst';
import { Addlead } from './style';
// import Example from '../../requestDemo/numberInput';
// import { Link } from 'react-router-dom';
// import App from '../../loginPage/hiddenpassword';
// import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';

export default function AddleadModal() {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <Addlead  onClick={() => setOpen(true)}>

      <p >+ Add Lead</p>     
      
      </Addlead>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
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
           Add new lead
          </Typography>
          <Typography id="modal-desc" textColor="text.tertiary" >
              <Container2>
                <InputPWrapp>
                    <p>Lead name</p>
                    <InputName  placeholder='Lead name' type="text" />
                </InputPWrapp>

                <InputPWrapp>
                    <p>Phone number</p>
                    <InputName placeholder='+998 ' type="number" />
                </InputPWrapp>

                <InputPWrapp>
                    <p>Section</p>
                    <InputName type="text" placeholder='Section' />
                    {/* <Example/> */}
                </InputPWrapp>

                <InputPWrapp>
                    <p>From Where</p>
                    <InputName  placeholder='From Where' type="text" />
                </InputPWrapp>

                
                <div>
                    
                    <SendButton>Create lead</SendButton>
                    
                    
                </div>
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
