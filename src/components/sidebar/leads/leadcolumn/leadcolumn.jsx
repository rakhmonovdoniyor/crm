import * as React from 'react';
import Table from '@mui/joy/Table';
import { LeadCol, Thtag } from './ldcolumn';
import { Users } from '../../../../data/data';
import profil from "../../../../assets/leads/image 17.png"
import PositionedMenu from '../leadgridcolumn/menulist';
import CustomizedMenus from './menulist';





export default function LeadColumn() {
  const data = Users.maindata.slice(0,6);
  const dataLength = data.length;
  console.log("data:", data.length);
  return (
    <LeadCol >
    <Table hoverRow  >
      <thead>
        <tr>
          
          <th style={{ width: '30%', padding: '20px',
                color:' #A098D5',
                fontFamily: "Public Sans",
                fontSize: '12px',
                fontStyle: 'normal',
                fontWeight: '600',
                lineHeight: '14px', /* 116.667% */
                paddingLeft: '80px'
           }}>Lead names</th>
          
         
          <th  style={{  padding: '20px',
             color:' #A098D5',
             fontFamily: "Public Sans",
             fontSize: '12px',
             fontStyle: 'normal',
             fontWeight: '600',
             lineHeight: '14px' /* 116.667% */
           }}>Phone Number</th>
          <th  style={{  padding: '20px',
             color:' #A098D5',
             fontFamily: "Public Sans",
             fontSize: '12px',
             fontStyle: 'normal',
             fontWeight: '600',
             lineHeight: '14px' /* 116.667% */
           }}>From Where</th>
          <th  style={{  padding: '20px',
             color:' #A098D5',
             fontFamily: "Public Sans",
             fontSize: '12px',
             fontStyle: 'normal',
             fontWeight: '600',
             lineHeight: '14px' /* 116.667% */
           }}>Section</th>
         
          <th style={{width:'5%'}}></th>
        </tr>
      </thead>
      <tbody >
        {data.map((value , index,key ) => (
          <tr   key= {key}>
            
            <td style={{display: 'flex',
               alignItems: 'center',padding: '30px',
                gap: '10px', 
                color:'  #2C2669',
             fontFamily: "Public Sans",
             fontSize: '14px',
             fontStyle: 'normal',
             fontWeight: '700',
             lineHeight: '16px' /* 116.667% */
                }} >
                  {index + 1}
                  <img src={profil} alt="" />
                  {value.car.name}</td>

            <td style={{padding: '20px',
               color:'  #6053B9',
               fontFamily: "Public Sans",
               fontSize: '14px',
               fontStyle: 'normal',
               fontWeight: '500',
               lineHeight: '16px' /* 116.667% */
            }}>{value.car.desc.callnumber}</td>

            <td  style={{
                color:'  #2C2669',
             fontFamily: "Public Sans",
             fontSize: '14px',
             fontStyle: 'normal',
             fontWeight: '700',
             lineHeight: '16px' /* 116.667% */
            }}>{value.car.location}</td>

            <td  style={{
                color:'  #2C2669',
             fontFamily: "Public Sans",
             fontSize: '14px',
             fontStyle: 'normal',
             fontWeight: '700',
             lineHeight: '16px' /* 116.667% */
            }}>{value.car.name}</td>

            <td><CustomizedMenus/></td>
          </tr>
        ))}
      </tbody>
    </Table>
    </LeadCol>
  );
}
