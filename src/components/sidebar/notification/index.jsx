import React from "react";
import {
  ButtonDiv,
  Con1,
  ConItem1,
  ConItemText,
  ConItemWiev,
  Flex1,
  Flex2,
  NotifCon,
  TextDiv,
  Wiev,
} from "./style";

const NotificationCom = () => {
  return (
    <NotifCon>
      {/* <ButtonDiv>
        <button>Add new blog</button>
      </ButtonDiv> */}
      <Flex1>
        <Con1>
          <ConItem1>
            <ConItemText>
              <h1>Test uchun yaratilgan blog</h1>
            </ConItemText>
            <ConItemWiev>
              <p>05.18.2024 - 12:24</p>
              <Wiev>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M7.00009 1.75C10.1455 1.75 12.7623 4.01319 13.3109 7C12.7623 9.98678 10.1455 12.25 7.00009 12.25C3.85466 12.25 1.23784 9.98678 0.689209 7C1.23784 4.01319 3.85466 1.75 7.00009 1.75ZM7.00009 11.0833C9.47086 11.0833 11.5851 9.36367 12.1202 7C11.5851 4.63635 9.47086 2.91667 7.00009 2.91667C4.52927 2.91667 2.41505 4.63635 1.87987 7C2.41505 9.36367 4.52927 11.0833 7.00009 11.0833ZM7.00009 9.625C5.55032 9.625 4.37507 8.44976 4.37507 7C4.37507 5.55025 5.55032 4.375 7.00009 4.375C8.44979 4.375 9.62509 5.55025 9.62509 7C9.62509 8.44976 8.44979 9.625 7.00009 9.625ZM7.00009 8.45833C7.8055 8.45833 8.45843 7.80541 8.45843 7C8.45843 6.19459 7.8055 5.54167 7.00009 5.54167C6.19469 5.54167 5.54174 6.19459 5.54174 7C5.54174 7.80541 6.19469 8.45833 7.00009 8.45833Z"
                    fill="#BFBAE3"
                  />
                </svg>
                <p>165</p>
              </Wiev>
            </ConItemWiev>
          </ConItem1>
          <ConItem1>
            <ConItemText>
              <h1>Test uchun yaratilgan blog</h1>
            </ConItemText>
            <ConItemWiev>
              <p>05.18.2024 - 12:24</p>
              <Wiev>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M7.00009 1.75C10.1455 1.75 12.7623 4.01319 13.3109 7C12.7623 9.98678 10.1455 12.25 7.00009 12.25C3.85466 12.25 1.23784 9.98678 0.689209 7C1.23784 4.01319 3.85466 1.75 7.00009 1.75ZM7.00009 11.0833C9.47086 11.0833 11.5851 9.36367 12.1202 7C11.5851 4.63635 9.47086 2.91667 7.00009 2.91667C4.52927 2.91667 2.41505 4.63635 1.87987 7C2.41505 9.36367 4.52927 11.0833 7.00009 11.0833ZM7.00009 9.625C5.55032 9.625 4.37507 8.44976 4.37507 7C4.37507 5.55025 5.55032 4.375 7.00009 4.375C8.44979 4.375 9.62509 5.55025 9.62509 7C9.62509 8.44976 8.44979 9.625 7.00009 9.625ZM7.00009 8.45833C7.8055 8.45833 8.45843 7.80541 8.45843 7C8.45843 6.19459 7.8055 5.54167 7.00009 5.54167C6.19469 5.54167 5.54174 6.19459 5.54174 7C5.54174 7.80541 6.19469 8.45833 7.00009 8.45833Z"
                    fill="#BFBAE3"
                  />
                </svg>
                <p>165</p>
              </Wiev>
            </ConItemWiev>
          </ConItem1>
        </Con1>
      </Flex1>
      <Flex2>
        <TextDiv>
          <h1>Test uchun yaratilgan blog</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </TextDiv>
      </Flex2>
    </NotifCon>
  );
};

export default NotificationCom;
