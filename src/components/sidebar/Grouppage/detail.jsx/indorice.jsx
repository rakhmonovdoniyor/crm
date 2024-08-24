import * as React from 'react';
import Table from '@mui/joy/Table';
import { Active, ConfGroup, H4Active, Table1, ThAll } from './style';
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

export default function IndividualPrice() {
  return (
    <Table sx={{ '& tr > *:not(:first-child)': { textAlign: 'center' }, borderRadius:'15px',backgroundColor:'white',width:'1180px' }}>
      <thead>
        
        
        <tr  style={{borderRadius:'20px',color:'#A098D5'}}>
        <th style={{ width: '5%' 
           }}></th>
          <ThAll style={{ width: '20%'  }}>Column width (40%)</ThAll>
          <ThAll >Phone Number</ThAll>
          <ThAll >Individual Content</ThAll>
          <ThAll >Discount</ThAll>
         
      
        </tr>
      </thead>
      <tbody>
        {data.map((value,index, key) => {
          return(

            <tr key={key}>
               <td >{index + 1}</td> 
            <td> <Active>
                
                <h1><ConfGroup>{value.car.name}</ConfGroup></h1>
                <div> <H4Active>ACTIVE</H4Active></div>
              
               </Active></td>
            <td style={{
              color: 'var(--500, #6053B9)',
              fontFamily: "Public Sans",
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: '16px'/* 114.286% */
            }}>01097575501</td>
            <td><img style={{width:'150px'}} src={inddis} alt="" /></td>
            <td style={{
              color: 'var(--500, #2C2669)',
              fontFamily: "Public Sans",
              fontSize: '11px',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: '14px'/* 114.286% */
            }}>Because he mastered it well</td>
          
         
       
          </tr>
          )
        }
         
        )}
      </tbody>
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