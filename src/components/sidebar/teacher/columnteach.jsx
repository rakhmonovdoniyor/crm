import * as React from 'react';
import Table from '@mui/joy/Table';
import { LeadCol, Thtag } from '../leads/leadcolumn/ldcolumn';
import { Users } from '../../../data/data';
import profil from "../../../assets/leads/image 17.png"
// import PositionedMenu from '../leads/leadgridcolumn/menulist';
import CustomizedMenus from '../leads/leadcolumn/menulist';
import { InputContainer, InputStyledIcon, LeadsCon, SearchIcon } from '../leads/style';
import search from "../../../assets/leads/serach.png"
import { GridCon } from '../leads/leadgridcolumn/gridstyle';
import { InputTeachWrap } from './style';
import AddTeachModal from './addteachmodal';
import { Link } from 'react-router-dom';




export default function TeachColumn() {
  const data = Users.maindata.slice(0,6);
  const dataLength = data.length;
  console.log("data:", data.length);
  return (
    <LeadsCon>
        
        <InputTeachWrap>
        <InputContainer>
          <SearchIcon src={search} alt="icon" />
          <InputStyledIcon type="text" placeholder="Search student..." />
        </InputContainer>
            {/* <input type="text" placeholder='Search' /> */}
           <div>
            <AddTeachModal/>
           </div>

        </InputTeachWrap>
        
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
           }}>Groups</th>
          <th  style={{  padding: '20px',
             color:' #A098D5',
             fontFamily: "Public Sans",
             fontSize: '12px',
             fontStyle: 'normal',
             fontWeight: '600',
             lineHeight: '14px' /* 116.667% */
           }}>Percent</th>
         
          {/* <th style={{width:'5%'}}></th> */}
        </tr>
      </thead>




      <tbody >
        {data.map((value,key, index) => (
          <Link to={`${value.id}`}  style={{display: "contents"}}>
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
                  {index ++}
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
                color:' #6053B9',
             fontFamily: "Public Sans",
             fontSize: '14px',
             fontStyle: 'normal',
             fontWeight: '700',
             lineHeight: '16px' /* 116.667% */
            }}>0</td>

            <td  style={{
                color:' #6053B9',
             fontFamily: "Public Sans",
             fontSize: '14px',
             fontStyle: 'normal',
             fontWeight: '700',
             lineHeight: '16px' /* 116.667% */
            }}>40%</td>

            {/* <td><CustomizedMenus/></td> */}
          </tr>
           </Link>
        ))}
      </tbody>
    </Table>
    </LeadCol>
    </LeadsCon>
  );
}
