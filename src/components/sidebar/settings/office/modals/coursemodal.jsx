import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { Container2, Container4, Edit, InputName,
     InputPWrapp, Line, SendButton
     } from '../../../profile/modalst';
import { Addlead } from '../../../leads/style';
// import Example from '../../requestDemo/numberInput';
// import { Link } from 'react-router-dom';
// import App from '../../loginPage/hiddenpassword';
// import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';

export default function NewCourse() {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <Addlead  onClick={() => setOpen(true)}>

      <p >+ Add New Course</p>     
      
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
           Create new course
          </Typography>
          <Typography id="modal-desc" textColor="text.tertiary" >
              <Container2>
                <InputPWrapp>
                    <p>Course name</p>
                    <InputName  placeholder='Enter course name' type="text" />
                </InputPWrapp>

                <InputPWrapp>
                    <p>Lesson duration</p>
                    <InputName placeholder='Select  ' type="select" />
                </InputPWrapp>

                <InputPWrapp>
                    <p>Course duration (month)</p>
                    <InputName type="text" placeholder='Enter course duration' />
                    {/* <Example/> */}
                </InputPWrapp>

                <InputPWrapp>
                    <p>Course price</p>
                    <InputName  placeholder='Enter course price' type="text" />
                </InputPWrapp>

                <InputPWrapp>
                    <p> Comment</p>
                    <InputName  placeholder='Comment' type="text" />
                </InputPWrapp>
                
                <div>
                    
                    <SendButton>Create Course</SendButton>
                    
                    
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
