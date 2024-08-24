import React from 'react'
import { Avatar, AvatarImg, Avatarright, Block, Blockbottom, Blockbottomleft, Blockbottomright, BlockWrapp, Bottomdiv, Center, CEO, Con, EditProfile, TabTop } from './style';
import avatar2 from "../../../assets/sidebar/Avatar (1).png"
import pen from "../../../assets/sidebar/pencil.png"
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import BasicModal from '../profile/profile';
import { Users } from '../../../data/data';
import { Link, useParams } from 'react-router-dom';
import CustomizedMenus from '../leads/leadcolumn/menulist';
import BasicTabs from './tab';
import { Button } from '@mui/material';
import { LeadsCon } from '../leads/style';
import { GroupWrap } from './groupstyle';
// import { ButtonGroup } from '@mui/joy';
// import LabTabs from './tab';

const DetailCom = () => {
  const { id } = useParams() ;
  const resultdata = Users.maindata.find(
  (value) => value.id === parseInt(id));
  console.log(resultdata);
  return (
    <GroupWrap>
  

        <BlockWrapp>
            <Block>
                {/* <Avatar>
                    <div>
                    <img src={avatar2} alt="ghj" />
                    </div>
                </Avatar> */}

                <EditProfile>
                  <div style={{paddingLeft: '70px'}}>
                  <CustomizedMenus/>
                  </div>
              
                    {/* <Avatarright>
              
                    </Avatarright> */}

                </EditProfile>

            </Block>

            <Blockbottom>
                <Blockbottomleft>
                    
                    <AvatarImg src={avatar2} alt="none" />
                    <h1>{resultdata.car.name}</h1>

                    <div style={{display: 'flex', gap: '5px'}}>
                    <CEO  >
                      <h2>Teacher</h2>
                    </CEO>
                    <h1> </h1>
                    <CEO> 
                        <h2>CEO</h2>
                    </CEO>
                    </div>
                    <Bottomdiv>
                         <p>Telegram:</p>
                         <h4>@andrewsmith</h4>

                         </Bottomdiv>
                         <Bottomdiv>
                         <p>Phone:</p> <h4>99 772-45-58</h4>
                    </Bottomdiv>
                    <Bottomdiv>
                         <p>Phone:</p> <h4>99 772-45-58</h4>
                    </Bottomdiv>
                    <Bottomdiv>
                         <p>Phone:</p> <h4>99 772-45-58</h4>
                    </Bottomdiv>
                    <Bottomdiv>
                         <p>Phone:</p> <h4>99 772-45-58</h4>
                    </Bottomdiv>

                </Blockbottomleft>



                {/* 2 */}
                {/* <Blockbottomright>
                    <p>fghjk</p>

                </Blockbottomright> */}
            

            </Blockbottom>

        </BlockWrapp>



            {/* 2 */}
        <div>

        </div>




    
    </GroupWrap>
  )
}

export default DetailCom;