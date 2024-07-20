import React from 'react'
import { BtnWrap, Buttonplus, FromWhere, Grid1, GridCon, GridCon2, Telegram30, Telegram30Wrap } from './gridstyle';
import AccordionUsage from './accordion';
import AddFromWhere from './addWhere';
import Section from './section';

const LeadGrid = () => {
  return (
    <GridCon>
        <GridCon2>
            <Grid1>
                <FromWhere>
                    <h1>From Where</h1>
                </FromWhere>
                <BtnWrap>
                <AddFromWhere/>
                </BtnWrap>
                <Telegram30Wrap>
                    <Telegram30>
                    <p>Telegram</p>
                    <h1>30</h1>
                    </Telegram30>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99992 5.83333C10.9204 5.83333 11.6666 5.08714 11.6666 4.16667C11.6666 3.24619 10.9204 2.5 9.99992 2.5C9.07944 2.5 8.33325 3.24619 8.33325 4.16667C8.33325 5.08714 9.07944 5.83333 9.99992 5.83333Z" fill="#BFBAE3"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99992 11.6663C10.9204 11.6663 11.6666 10.9201 11.6666 9.99967C11.6666 9.0792 10.9204 8.33301 9.99992 8.33301C9.07944 8.33301 8.33325 9.0792 8.33325 9.99967C8.33325 10.9201 9.07944 11.6663 9.99992 11.6663Z" fill="#BFBAE3"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99992 17.5003C10.9204 17.5003 11.6666 16.7541 11.6666 15.8337C11.6666 14.9132 10.9204 14.167 9.99992 14.167C9.07944 14.167 8.33325 14.9132 8.33325 15.8337C8.33325 16.7541 9.07944 17.5003 9.99992 17.5003Z" fill="#BFBAE3"/>
                    </svg>
                   
                </Telegram30Wrap>
                <Telegram30Wrap>
                    <Telegram30>
                    <p>Walked by</p>
                    <h1>12</h1>
                    </Telegram30>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99992 5.83333C10.9204 5.83333 11.6666 5.08714 11.6666 4.16667C11.6666 3.24619 10.9204 2.5 9.99992 2.5C9.07944 2.5 8.33325 3.24619 8.33325 4.16667C8.33325 5.08714 9.07944 5.83333 9.99992 5.83333Z" fill="#BFBAE3"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99992 11.6663C10.9204 11.6663 11.6666 10.9201 11.6666 9.99967C11.6666 9.0792 10.9204 8.33301 9.99992 8.33301C9.07944 8.33301 8.33325 9.0792 8.33325 9.99967C8.33325 10.9201 9.07944 11.6663 9.99992 11.6663Z" fill="#BFBAE3"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99992 17.5003C10.9204 17.5003 11.6666 16.7541 11.6666 15.8337C11.6666 14.9132 10.9204 14.167 9.99992 14.167C9.07944 14.167 8.33325 14.9132 8.33325 15.8337C8.33325 16.7541 9.07944 17.5003 9.99992 17.5003Z" fill="#BFBAE3"/>
                    </svg>
                   
                </Telegram30Wrap>
                <Telegram30Wrap>
                    <Telegram30>
                    <p>Friends</p>
                    <h1>3</h1>
                    </Telegram30>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99992 5.83333C10.9204 5.83333 11.6666 5.08714 11.6666 4.16667C11.6666 3.24619 10.9204 2.5 9.99992 2.5C9.07944 2.5 8.33325 3.24619 8.33325 4.16667C8.33325 5.08714 9.07944 5.83333 9.99992 5.83333Z" fill="#BFBAE3"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99992 11.6663C10.9204 11.6663 11.6666 10.9201 11.6666 9.99967C11.6666 9.0792 10.9204 8.33301 9.99992 8.33301C9.07944 8.33301 8.33325 9.0792 8.33325 9.99967C8.33325 10.9201 9.07944 11.6663 9.99992 11.6663Z" fill="#BFBAE3"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99992 17.5003C10.9204 17.5003 11.6666 16.7541 11.6666 15.8337C11.6666 14.9132 10.9204 14.167 9.99992 14.167C9.07944 14.167 8.33325 14.9132 8.33325 15.8337C8.33325 16.7541 9.07944 17.5003 9.99992 17.5003Z" fill="#BFBAE3"/>
                    </svg>
                   
                </Telegram30Wrap>

            </Grid1>
        </GridCon2>
        <GridCon2>
            <Grid1>
            <FromWhere>
                    <h1>Section</h1>
                </FromWhere>
                <BtnWrap>
                   <Section/>
                </BtnWrap>
                <AccordionUsage/>

            </Grid1>
        </GridCon2>
    </GridCon>
  )
}

export default LeadGrid;