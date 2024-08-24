import React from 'react'
import { AvatarCon, BoxWrap, FourWrap, GroupWrap, HJ, LineBottom, LineBottom4, LineBottom5 } from '../../TecherDetail/groupstyle'
import profile from "../../../../assets/leads/image 17.png"
import { Users } from '../../../../data/data';
import { Bottomdiv } from '../../TecherDetail/style';
import { LogButton } from '../../../../styles/homeStyle/style';
import CustomizedMenus from '../../leads/leadcolumn/menulist';
import GroupTabs from './grouptab';
import { LeadCol } from '../../leads/leadcolumn/ldcolumn';
import { ConGroup } from './style';

const Group = () => {
    const data = Users.maindata.slice(0,1);
    const dataLength = data.length;
    console.log("data:", data.length);

  return (
   
    <ConGroup style={{margin: '100px 300px',flexDirection:'column'}}>
        {
            data.map((value, key, index) => {
                return(
                    <>
          <BoxWrap>
              <AvatarCon>
                <img src={profile} alt="" />
                <CustomizedMenus/>
            </AvatarCon>
            <FourWrap>
                <Bottomdiv><h1
                
                    style={{color: '#2C2669',

                    /* Medium/18px -> 24px */
                    fontFamily: "Public Sans",
                    fontSize: '18px',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    lineHeight: '24px'}}>Ocean</h1> <p>Group name</p></Bottomdiv>

                <Bottomdiv><h1 
                 style={{color: '#2C2669',

                    /* Medium/18px -> 24px */
                    fontFamily: "Public Sans",
                    fontSize: '24px',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    lineHeight: '32px'}}
                >IT- Bootcamp</h1> <p>Course</p></Bottomdiv>
                <Bottomdiv><h1 
                style={{color: '#6053B9',

                    /* Medium/18px -> 24px */
                    fontFamily: "Public Sans",
                    fontSize: '18px',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    lineHeight: '24px'}}
                >Shoxsanam</h1> <p>Teacher name</p></Bottomdiv>

                <Bottomdiv><h1 
                style={{color: '#6053B9',

                    /* Medium/18px -> 24px */
                    fontFamily: "Public Sans",
                    fontSize: '15px',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    lineHeight: '24px'}}
                >03.24.2024 - 07.29.2024</h1> <p>Training dates</p></Bottomdiv>
                <Bottomdiv>
                    <div style={{display: 'flex', gap: '10px'}}>
                    <HJ>12-students</HJ>
                <HJ>2-rooms</HJ>
                </div>
                <p>Students & room</p></Bottomdiv>
            </FourWrap>
            <LineBottom></LineBottom>
            <LineBottom4>
                <LineBottom5>
                <h1>09:00 - 11:00</h1>
                <p>Mon, Tue, Wed, Thu, Fri</p>
                </LineBottom5>
               
                <div>
                    <LogButton>223.000 UZS</LogButton>
                </div>

            </LineBottom4>
           
        </BoxWrap>
       <GroupTabs/>
        </>
        
       
        
            )
        })
          }
           
         
    </ConGroup>
   
  )
}

export default Group