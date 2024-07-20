import React from 'react'
import { Avatar, AvatarImg, Avatarright, Block, Blockbottom, Blockbottomleft, Blockbottomright, BlockWrapp, Bottomdiv, CEO, Con, EditProfile } from './profilestyle';
import avatar2 from "../../../assets/sidebar/Avatar (1).png"
import pen from "../../../assets/sidebar/pencil.png"
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import BasicModal from './modalprofile';

const ProfilePage = () => {
  return (
    <Con>
        <BlockWrapp>
            <Block>
                {/* <Avatar>
                    <div>
                    <img src={avatar2} alt="ghj" />
                    </div>
                </Avatar> */}

                <EditProfile>
                    <Avatarright>
                        {/* <img src={pen} alt="ghj"style={{color: 'white'}}/> */}
                        <BasicModal>
                        {/* <CreateOutlinedIcon 
                         style={{width: 12,
                                height: 12
                               }}/>
                        <p style={{display: 'flex'}}>Edit profile</p> */}
                        </BasicModal>
                    </Avatarright>

                </EditProfile>

            </Block>

            <Blockbottom>
                <Blockbottomleft>
                    
                    <AvatarImg src={avatar2} alt="none" />
                    <h1>Andrew Smith</h1>
                    <CEO> 
                        <h2>CEO</h2>
                    </CEO>
                   
                    <Bottomdiv>
                         <p>Telegram:</p>
                         <h4>@andrewsmith</h4>

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




    </Con>
  )
}

export default ProfilePage;