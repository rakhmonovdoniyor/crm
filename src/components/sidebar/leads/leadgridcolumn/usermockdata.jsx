import React from 'react'
import { Users } from '../../../../data/data';
import { DataItemWrap, Flex1, Flex2, NameNum, Wrap } from './accordstyle';

// import menu from "../../../../assets/leads/men.png"
import PositionedMenu from './menulist';
import BasicPopover from './popup';

export const Usersdata = () => {

    const data = Users.maindata.slice(0,3);
    const dataLength = data.length;
  console.log("data:", data.length);

  return (
    <div>
        {
            data.map((value,key) => {
                return(
                    <Wrap>
                        <DataItemWrap>
                            <Flex1>
                                <h2>B</h2>
                                <NameNum>
                                <h1>{value.car.name}</h1>
                                <p>{value.car.desc.callnumber}</p>

                                </NameNum>
                               
                            </Flex1>
                            <Flex2>
                               <BasicPopover/>
                               <PositionedMenu/>
                            </Flex2>

                        </DataItemWrap>


                    </Wrap>
                )
            })
        }

    </div>
  )
}

export default Usersdata;
