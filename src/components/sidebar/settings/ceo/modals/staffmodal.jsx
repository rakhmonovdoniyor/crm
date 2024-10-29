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
} from "../../../profile/modalst";
import { Addlead } from "../../../leads/style";
import { Checkbox } from "@mui/joy";
import { CheckboxAddTeach, Scroll, Wrapp } from "../../../teacher/style";
import Radio from "./n";
import Radio1 from "./n";
import Radio2 from "./radio";
 
 

export default function NewStaff() {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <Addlead onClick={() => setOpen(true)}>
        <p>+ Create Expense</p>
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
             Create new employee
            </Typography>
            <Typography id="modal-desc" textColor="text.tertiary">
              <Container2>
                <InputPWrapp>
                  <p>Full name</p>
                  <InputName placeholder="Enter name" type="text" />
                </InputPWrapp>

                <InputPWrapp>
                  <p>Phone number </p>
                  <InputName placeholder="+998 93 195 65 55 " type="number" />
                </InputPWrapp>

                <InputPWrapp>
                  <p>Telegram username</p>
                  <InputName type="number" placeholder="Enter username" />
                  {/* <Example/> */}
                </InputPWrapp>

                <InputPWrapp>
                  <p>Upload photo</p>
                  <InputName type="select" placeholder="Upload photo" />
                  {/* <Example/> */}
                </InputPWrapp>
                <InputPWrapp>
                  <p>Password</p>
                  <InputName type="password" placeholder="Enter password" />
                </InputPWrapp>
                <InputPWrapp>
                  <p>Roles</p>

                 <Radio1/>
                </InputPWrapp>
                <InputPWrapp>
                  <p>Branches</p>

                 <Radio2/>
                </InputPWrapp>

                <div>
                  <SendButton> Create employee</SendButton>
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
