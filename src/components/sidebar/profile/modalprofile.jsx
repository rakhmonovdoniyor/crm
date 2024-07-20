import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { Container2, Container4, Edit, InputName, InputPWrapp, Line, SendButton } from './modalst';
import Example from '../../requestDemo/numberInput';
import { Link } from 'react-router-dom';
import App from '../../loginPage/hiddenpassword';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <Edit  onClick={() => setOpen(true)}>
       
      <CreateOutlinedIcon 
                         style={{width: 12,
                                height: 12,color: "white"
                               }}/>
                        <p >Edit profile</p>     
      
      </Edit>
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
            Edit Profile
          </Typography>
          <Typography id="modal-desc" textColor="text.tertiary" >
              <Container2>
                <InputPWrapp>
                    <p>Full Name</p>
                    <InputName  placeholder='Name' type="text" />
                </InputPWrapp>

                <InputPWrapp>
                    <p>Upload photo</p>
                    <InputName placeholder='Surname' type="text" />
                </InputPWrapp>

                <InputPWrapp>
                    <p>Telegram username</p>
                    <InputName type="text" placeholder='Telegram username' />
                    {/* <Example/> */}
                </InputPWrapp>

                <InputPWrapp>
                    <p>Phone numbers</p>
                    <InputName  placeholder='Email' type="text" />
                </InputPWrapp>

                <InputPWrapp>
                    <p>Enter password</p>
                    <App/>
                    {/* <InputName  placeholder='Country name' type="text" /> */}
                </InputPWrapp>

                <div>
                    <Link to="/sidebar" style={{textDecoration: 'none'}}>
                    <SendButton>Update Profile</SendButton>
                    </Link>
                    
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
