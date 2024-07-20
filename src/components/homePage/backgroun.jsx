import React from 'react'
import { BackImgwrap, FlexColumn, FlexColumn2, LineBackground, ReqBtnWrap, RequestBtn } from '../../styles/homeStyle/style';
import { Link } from 'react-router-dom';

const BackggroundImg = () => {
  return (
    <div>
          <BackImgwrap>
            <FlexColumn>
               <h1>
               A simple management system <br />
               for education
               </h1>
               <Link to="/requestdemo" style={{textDecoration: 'none'}}>
                <ReqBtnWrap>
                <RequestBtn>Request a demo</RequestBtn>
                </ReqBtnWrap>
              
               </Link>
               
               </FlexColumn>
               <FlexColumn2 >
               <LineBackground></LineBackground>
               <h2>© 2024 edumansim.uz  All rights reserved</h2>
               </FlexColumn2>
            </BackImgwrap>
    </div>
  )
}

export default BackggroundImg;