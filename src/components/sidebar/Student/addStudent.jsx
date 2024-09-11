import * as React from "react";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import {
  Container2,
  Container4,
  Edit,
  InputName,
  InputPWrapp,
  Line,
  SendButton,
} from "../profile/modalst";
import { Addlead } from "../leads/style";
import { Checkbox } from "@mui/joy";
import { CheckboxAddTeach, Scroll, Wrapp } from "../teacher/style";
// import Example from "../../requestDemo/numberInput";
import App from "../../loginPage/hiddenpassword";
// import Example from '../../requestDemo/numberInput';
// import { Link } from 'react-router-dom';
// import App from '../../loginPage/hiddenpassword';
// import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';

export default function AddStudent() {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <Addlead onClick={() => setOpen(true)}>
        <p>+ Add Teacher</p>
      </Addlead>

      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Scroll>
          <Sheet
            variant="outlined"
            sx={{
              maxWidth: 600,
              borderRadius: "md",
              p: 3,
              boxShadow: "lg",
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
              style={{
                paddingBottom: "20px",
                color: "#2C2669",

                /* Bold/24px -> 32px */
                fontFamily: "Public Sans",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "32px" /* 133.333% */,
              }}
            >
              Add new Teacher
            </Typography>
            <Typography id="modal-desc" textColor="text.tertiary">
              <Container2>
                <InputPWrapp>
                  <p>Full name</p>
                  <InputName placeholder="Lead name" type="text" />
                </InputPWrapp>

                <InputPWrapp>
                  <p>Date of birth</p>
                  <InputName placeholder="Teelegram username " type="date" />
                </InputPWrapp>

                <InputPWrapp>
                  <p>Phone Number</p>
                  <InputName type="number" placeholder="Phone Number" />
                  {/* <Example/> */}
                </InputPWrapp>
                <InputPWrapp>
                  <p>Gender</p>
                  <form style={{ display: "flex", gap: "20px" }}>
                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                        alignItems: "center",
                      }}
                    >
                      <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="male"
                      />

                      <label htmlFor="">Male</label>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                        alignItems: "center",
                      }}
                    >
                      <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                      />
                      <label htmlFor="">Female</label>
                    </div>
                  </form>
                </InputPWrapp>
                <InputPWrapp>
                  <p>Phone Number</p>
                  <InputName type="number" placeholder="+998 ..." />
                  {/* <Example/> */}
                </InputPWrapp>
                <InputPWrapp>
                  <p>Parent's Phone Number</p>
                  <InputName type="password" placeholder="Enter Password" />
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
        </Scroll>
      </Modal>
    </React.Fragment>
  );
}
