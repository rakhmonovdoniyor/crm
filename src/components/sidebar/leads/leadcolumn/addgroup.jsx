import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { Container2, Container4, Edit, InputName, InputPWrapp, Line, SendButton } from '../../profile/modalst';
import { Addlead } from '../style';
import MultipleSelect from './addtogroup';
// import Example from '../../requestDemo/numberInput';
// import { Link } from 'react-router-dom';
// import App from '../../loginPage/hiddenpassword';
// import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';

export default function AddGroup() {
  // const [open, setOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <React.Fragment>
      <p  onClick={handleOpen}>

    +   Add group
      
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
           Add new lead
          </Typography>
          <Typography id="modal-desc" textColor="text.tertiary" >
              <Container2>
                <InputPWrapp>
                    <p>Select group</p>
                    {/* <InputN/>ame  placeholder='Select group' type="text" /> */}
              <MultipleSelect/>
               </InputPWrapp>

                <InputPWrapp>
                    <p>Date form</p>
                    <InputName type='date' placeholder='Select date' />
                </InputPWrapp>

                
                <div>
                    
                    <SendButton>Add to group</SendButton>
                    
                    
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
