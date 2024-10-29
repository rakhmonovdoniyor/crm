import * as React from 'react';
import Table from '@mui/joy/Table';
import { LeadCol, Thtag } from '../../leads/leadcolumn/ldcolumn';
import { Users } from '../../../../data/data';
//  import CustomizedMenus from '../leads/leadcolumn/menulist';
// import { InputContainer, InputStyledIcon, LeadsCon, SearchIcon } from '../../leads/style';

// import { Link } from 'react-router-dom';




export default function Expense2() {
  const data = Users.maindata.slice(0,4);
  const dataLength = data.length;
  console.log("data:", data.length);
  return (
    <>
        
        {/* <InputTeachWrap> */}
        {/* <InputContainer>
          <SearchIcon src={search} alt="icon" />
          <InputStyledIcon type="text" placeholder="Search student..." />
        </InputContainer> */}
            {/* <input type="text" placeholder='Search' /> */}
           {/* <div> */}
            {/* <AddTeachModal/> */}
           {/* </div> */}

        {/* </InputTeachWrap> */}
        
    <LeadCol >
    <Table hoverRow  >
      <thead>
        <tr>
             
          
          <th style={{ width: '30%', padding: '20px',
        //   display: 'flex',
        //   justifyContent:'center',
        //   alignItems: 'center',
                color:' #A098D5',
                fontFamily: "Public Sans",
                fontSize: '12px',
                fontStyle: 'normal',
                fontWeight: '600',
                lineHeight: '14px', /* 116.667% */
                paddingLeft: '150px'
           }}>Amount</th>
          
         
          <th  style={{  padding: '20px',
             color:' #A098D5',
             fontFamily: "Public Sans",
             fontSize: '12px',
             fontStyle: 'normal',
             fontWeight: '600',
             lineHeight: '14px' /* 116.667% */
           }}>Category</th>
          <th  style={{  padding: '20px',
             color:' #A098D5',
             fontFamily: "Public Sans",
             fontSize: '12px',
             fontStyle: 'normal',
             fontWeight: '600',
             lineHeight: '14px' /* 116.667% */
           }}>Description</th>
          <th  style={{  padding: '20px',
             color:' #A098D5',
             fontFamily: "Public Sans",
             fontSize: '12px',
             fontStyle: 'normal',
             fontWeight: '600',
             lineHeight: '14px' /* 116.667% */
           }}>Date</th>
         
          {/* <th style={{width:'5%'}}></th> */}
        </tr>
      </thead>




      <tbody >
        {data.map((value,key, index) => (
        
          <tr   key= {key}>
            
            
            <td style={{display: 'flex',
               alignItems: 'center',padding: '30px',
               justifyContent: "center",
                gap: '10px', 
                color:'  #2C2669',
             fontFamily: "Public Sans",
             fontSize: '14px',
             fontStyle: 'normal',
             fontWeight: '700',
             lineHeight: '16px' /* 116.667% */
                }} >
                   
                  {/* <img src={profil} alt="" /> */}
                  {value.car.cost}</td>
                 

            <td style={{padding: '20px',
               color:'  #6053B9',
               fontFamily: "Public Sans",
               fontSize: '14px',
               fontStyle: 'normal',
               fontWeight: '500',
               lineHeight: '16px' /* 116.667% */
            }}> Salary</td>

            <td  style={{
                color:' #6053B9',
             fontFamily: "Public Sans",
             fontSize: '14px',
             fontStyle: 'normal',
             fontWeight: '700',
             lineHeight: '16px' /* 116.667% */
            }}>May oyi uchun</td>

            <td  style={{
                color:' #6053B9',
             fontFamily: "Public Sans",
             fontSize: '14px',
             fontStyle: 'normal',
             fontWeight: '700',
             lineHeight: '16px' /* 116.667% */
            }}>06.06.2024</td>

            {/* <td><CustomizedMenus/></td> */}
          </tr>
          
        ))}
      </tbody>
    </Table>
    </LeadCol>
    </>
  );
}
