import * as React from 'react';
import Table from '@mui/joy/Table';
import { Active, ConfGroup, Flex1, Flex2, FlexWrap, H4Active, HistoryTable, Line, Table1, ThAll } from './style';
import { Users } from '../../../../data/data';
import styled from 'styled-components';
import inddis from "../../../../assets/image.png"

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const data = Users.maindata.slice(0,6);
const dataLength = data.length;
console.log("data:", data.length);

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function History() {
  return (
    <Table sx={{ '& tr > *:not(:first-child)': { textAlign: 'center' }, borderRadius:'15px',backgroundColor:'white',width:'1180px' }}>
      <thead>
        
        
        <tr  style={{borderRadius:'20px',color:'#A098D5'}}>
        
          {/* <ThAll style={{ width: '20%'  }}>Column width (40%)</ThAll>
          <ThAll >Phone Number</ThAll>
          <ThAll >Individual Content</ThAll>
          <ThAll >Discount</ThAll> */}
         
      
        </tr>
      </thead>
<HistoryTable>
        <FlexWrap>
          <Flex1>
            <div style={{display:'grid', gap:'20px'}}>
              <h1>Status changed</h1>
              <h2>Jumayev Eshbo’ri - (93) 635 42 98  </h2>
            </div>
            <div>
              <p>Group name: Facebook</p>
              <p>Group: #68125</p>
              <p style={{display:'flex'}}>Current status: <p style={{color:'black'}}> FROZEN</p></p>
              <p style={{display:'flex'}}>Previos status:  <p style={{color:'black'}}> ACTIVE</p> </p>
            </div>
        
          </Flex1>
          <Flex2>
            <h3>12.09.2023 | 11:20:26</h3>
            <h3>Teacher Usmon</h3>
          </Flex2>
         
        </FlexWrap>
        <Line></Line>
        </HistoryTable>
         
       
    </Table>
  );
}


// const ThAll = styled.th`
// /* display: flex; */
// /* justify-content: center; */
// /* align-items: center; */
// color: #A098D5;
// text-align: center;
// font-family: "Public Sans";
// font-size: 10px;
// font-style: normal;
// font-weight: 600;
// line-height: 16px; /* 160% */
// letter-spacing: 0.6px;
// text-transform: uppercase;
// `