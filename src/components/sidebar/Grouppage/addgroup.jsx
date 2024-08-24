import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { Container2, Container4, Edit, InputName, InputPWrapp, Line, SendButton } from "../profile/modalst";
import { Addlead } from '../leads/style';
import { Checkbox } from '@mui/joy';
import { CheckboxAddTeach, Scroll, Wrapp } from './style';
import Example from '../../requestDemo/numberInput';
import App from '../../loginPage/hiddenpassword';
import { Select } from './style';
import { Options } from './style';
import MultipleSelectGroup from './select';
import { FlexSelect } from './style';
import { WrapSelect } from './style';
import SelectBig2 from './select2';
// import Example from '../../requestDemo/numberInput';
// import { Link } from 'react-router-dom';
// import App from '../../loginPage/hiddenpassword';
// import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';

export default function CreateGroup() {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>

      <Addlead  onClick={() => setOpen(true)}>

      <p >+ Add Group</p>     
      
      </Addlead>
      
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
         <Scroll>
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
            style={{paddingBottom: '20px' , 
                color:  '#2C2669',

            /* Bold/24px -> 32px */
            fontFamily: "Public Sans",
            fontSize: '24px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: '32px' /* 133.333% */
            }}
          >
           Add new Teacher
          </Typography>
          <Typography id="modal-desc" textColor="text.tertiary" >
              <Container2>
                <InputPWrapp>
                    <p>Full name</p>
                    <InputName  placeholder='Lead name' type="text" />
                </InputPWrapp>


                {/* <InputPWrapp>
                    <p>Telegram username</p>
                    <InputName placeholder='Teelegram username ' type="text" />
                </InputPWrapp> */}
                <FlexSelect>

                <InputPWrapp style={{width:'220px'}}>
                    <p>Upload photo</p>
                    <InputName type="text" placeholder='Upload photo' />
                    {/* <Example/> */}
                </InputPWrapp>
                
                    
                    <InputPWrapp  style={{width:'220px'}}>
                    <p>Telegram username</p>
                   
                <MultipleSelectGroup/>
                </InputPWrapp>

                {/* <WrapSelect>
                   <MultipleSelectGroup/>
                </WrapSelect> */}
            </FlexSelect>
          
        

                <InputPWrapp>
                    <p>Percent (%)</p>
                    {/* <InputName  placeholder='Enter percent' type="text" /> */}
                 <SelectBig2/>
                </InputPWrapp>
                <InputPWrapp>
               
                    <p>Branches</p>
                    <SelectBig2/>
                    {/* <Wrapp>
                    
                    <CheckboxAddTeach>
                        <Checkbox/>
                        <h4>Seul</h4>
                    </CheckboxAddTeach>
                    <CheckboxAddTeach>
                        <Checkbox/>
                        <h4>Seul</h4>
                    </CheckboxAddTeach>
                    <CheckboxAddTeach>
                        <Checkbox/>
                        <h4>Seul</h4>
                    </CheckboxAddTeach>
                    <CheckboxAddTeach>
                        <Checkbox/>
                        <h4>Seul</h4>
                    </CheckboxAddTeach>
                    </Wrapp> */}
                </InputPWrapp>
                <FlexSelect>

                    <InputPWrapp style={{width:'220px'}}>
                        <p>Upload photo</p>
                       
                        <MultipleSelectGroup/>
                    </InputPWrapp>


                        <InputPWrapp  style={{width:'220px'}}>
                        <p>Telegram username</p>

                    <MultipleSelectGroup/>
                    </InputPWrapp>

                    {/* <WrapSelect>
                       <MultipleSelectGroup/>
                    </WrapSelect> */}
                    </FlexSelect>
                    <FlexSelect>

<InputPWrapp style={{width:'220px'}}>
    <p>Upload photo</p>
   
    <MultipleSelectGroup/>
</InputPWrapp>


    <InputPWrapp  style={{width:'220px'}}>
    <p>Telegram username</p>

<MultipleSelectGroup/>
</InputPWrapp>

{/* <WrapSelect>
   <MultipleSelectGroup/>
</WrapSelect> */}
</FlexSelect>
                
                <div>
                    
                    <SendButton> Create Group</SendButton>
                    
                    
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
        </Scroll>
      </Modal>
      
    </React.Fragment>
  );
}
