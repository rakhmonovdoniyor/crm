import React from "react";
import styled from "styled-components";
import { DateInput } from "./style";

 
 
const DateInputCom = () => {
  return (
    <div>
        <DateInput>
            <input type="date" placeholder="July 23, 2023 - August 23, 2023"  style={{border: 'none'}}/>
         </DateInput>
    </div>
  );
};

export default DateInputCom;


 