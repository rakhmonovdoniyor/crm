import * as React from 'react';
import Table from '@mui/joy/Table';
import { Active, Border, BorderGray, ConfGroup, H4Active, HeadAtt, Headborder, Headborder2, Sep5, Table1, View } from './style';
import { Users } from '../../../../data/data';
import MultipleSelect from '../../leads/leadcolumn/addtogroup';
import PositionedMenu from '../../leads/leadgridcolumn/menulist';
import styled from 'styled-components';
import calendar from "../../../../assets/home/calendar4-frame.png"
import settings from "../../../../assets/home/image3.png"

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

export default function Attandance() {
  return (
    <Table sx={{ '& tr > *:not(:first-child)': { textAlign: 'center' },  borderRadius:'15px',backgroundColor:'white',width:'1180px' }}>
   
      <thead>
   
        {/* <tr> 
        <HeadAtt>
        <Headborder>
           <img src={calendar} alt="" />
           <h2>September, 2023  </h2>
        </Headborder>
          
          <Headborder2>
            <img src={settings} alt="" />
            <h2>Show all</h2>
          </Headborder2>

        </HeadAtt>
        </tr> */}
        
        <tr  style={{borderRadius:'20px' , 
          background: 'var(--Table-Head-Background, #FAFAFB)',

          /* Table/Border */
          boxShadow: '0px -1px 0px 0px #EDF2F7 inset'
        }}>
          <th style={{ width: '5%' 
           }}></th>
          <th style={{ width: '20%' 
           }}>Column width (40%)</th>
          <ThAll >MORE</ThAll>
          <ThAll >SEP 1</ThAll>
          <ThAll >SEP 2</ThAll>
          <ThAll >SEP 3</ThAll>
          <ThAll >SEP 4</ThAll>
          <ThAll >SEP 5</ThAll>
          <ThAll >SEP 6</ThAll>
          <ThAll >SEP 7</ThAll>
          <ThAll >SEP 8</ThAll>
          <ThAll >SEP 9</ThAll>
          <ThAll >SEP 10</ThAll>
      
        </tr>
      </thead>
      <tbody>
        {data.map((value,index, key) => {
          return(

            <tr  key={key}>
             <td >{index + 1}</td> 
            <td style={{ 
              // display: 'flex',
              // padding: '10px 119px 10px 20px',
              // flexDirection: 'column',
              // justifyContent: 'center',
              // alignItems: 'flex-start',
              // gap: '10px'
            }} >
              <Active>
                
               <h1><ConfGroup>{value.car.name}</ConfGroup></h1>
               <div> <H4Active>ACTIVE</H4Active></div>
             
              </Active>
             
            </td>
            <td><PositionedMenu/></td>
            <td><View>Was</View></td>
            <td><Border></Border></td>
            <td><BorderGray></BorderGray></td>
            <td><BorderGray></BorderGray></td>
            <td><Sep5>x</Sep5></td>
            <td><BorderGray></BorderGray></td>
            <td><BorderGray></BorderGray></td>
            <td><BorderGray></BorderGray></td>
            <td><BorderGray></BorderGray></td>
            <td><BorderGray></BorderGray></td>
         
       
          </tr>
          )
        }
         
        )}
      </tbody>
    </Table>
  );
};



const ThAll = styled.th`
/* display: flex; */
/* justify-content: center; */
/* align-items: center; */
color: #6053B9;
text-align: center;
font-family: "Public Sans";
font-size: 10px;
font-style: normal;
font-weight: 600;
line-height: 16px; /* 160% */
letter-spacing: 0.6px;
text-transform: uppercase;
`