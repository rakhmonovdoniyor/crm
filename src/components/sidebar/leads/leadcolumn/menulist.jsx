import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// import AddToGroup from './addgroup';
import AddGroup from './addgroup';
import SendSMS from './sendSms';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        style={{backgroundColor: 'transparent', border: 'none', cursor:'pointer', color: 'GrayText'}}
      >
        <MoreVertIcon/>
      </button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple style={{
            color:' #6053B9',

            /* Medium/14px -> 20px */
            fontFamily: "Public Sans",
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: '16px' /* 114.286% */
          }}>
          <EditIcon style={{
            color:' #6053B9'}}/>
          <p style={{
            color:' #6053B9',

            /* Medium/14px -> 20px */
            fontFamily: "Public Sans",
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: '16px' /* 114.286% */
          }}>
          Edit

          </p>
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple style={{
            color:' #6053B9',

            /* Medium/14px -> 20px */
            fontFamily: "Public Sans",
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: '16px' /* 114.286% */
          }}>
          <DeleteForeverIcon style={{color:' #6053B9'}} />
          <p>
          Delete

          </p>
        </MenuItem>
        {/* <Divider sx={{ my: 0.5 }} /> */}
        <MenuItem  style={{display: 'flex' , gap: '10px', color:' #6053B9'}}>
      
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 512 512">
              <path
                 d="M 143.4396887159533 416.3735408560311 Q 150.4124513618677 411.39299610894943 158.38132295719845 414.38132295719845 Q 204.2023346303502 431.31517509727627 256.99610894941634 431.31517509727627 Q 360.591439688716 429.3229571984436 427.3307392996109 374.5369649805447 Q 494.07003891050584 319.7509727626459 496.0622568093385 240.06225680933852 Q 494.07003891050584 160.37354085603113 427.3307392996109 105.58754863813229 Q 360.591439688716 50.80155642023346 256.99610894941634 48.809338521400775 Q 153.40077821011673 50.80155642023346 86.6614785992218 105.58754863813229 Q 19.92217898832685 160.37354085603113 17.929961089494164 240.06225680933852 Q 18.926070038910506 301.82101167315176 61.75875486381323 349.6342412451362 Q 65.7431906614786 354.6147859922179 65.7431906614786 361.5875486381323 Q 59.766536964980546 403.42412451361866 41.83657587548638 431.31517509727627 Q 32.8715953307393 446.2568093385214 25.898832684824903 454.2256809338521 L 12.949416342412452 444.26459143968873 L 12.949416342412452 444.26459143968873 L 25.898832684824903 454.2256809338521 L 25.898832684824903 454.2256809338521 Q 21.914396887159533 459.20622568093387 19.92217898832685 461.19844357976655 Q 18.926070038910506 461.19844357976655 18.926070038910506 462.1945525291829 Q 18.926070038910506 462.1945525291829 18.926070038910506 462.1945525291829 L 18.926070038910506 462.1945525291829 L 18.926070038910506 462.1945525291829 L 17.929961089494164 463.1906614785992 L 17.929961089494164 463.1906614785992 L 17.929961089494164 463.1906614785992 L 17.929961089494164 463.1906614785992 L 17.929961089494164 463.1906614785992 L 17.929961089494164 463.1906614785992 L 17.929961089494164 463.1906614785992 L 17.929961089494164 463.1906614785992 Q 57.77431906614786 462.1945525291829 92.63813229571984 445.26070038910507 Q 126.50583657587549 429.3229571984436 143.4396887159533 416.3735408560311 L 143.4396887159533 416.3735408560311 Z M 6.972762645914397 452.23346303501944 L 6.972762645914397 452.23346303501944 L 6.972762645914397 452.23346303501944 L 6.972762645914397 452.23346303501944 L 6.972762645914397 452.23346303501944 L 6.972762645914397 452.23346303501944 L 6.972762645914397 451.2373540856031 L 6.972762645914397 451.2373540856031 Q 6.972762645914397 451.2373540856031 6.972762645914397 451.2373540856031 Q 6.972762645914397 451.2373540856031 7.968871595330739 450.24124513618676 Q 9.961089494163424 448.2490272373541 12.949416342412452 444.26459143968873 Q 19.92217898832685 437.2918287937743 27.891050583657588 423.3463035019455 Q 44.824902723735406 397.44747081712063 49.80544747081712 360.591439688716 Q 2.9883268482490273 308.79377431906613 1.9922178988326849 240.06225680933852 Q 2.9883268482490273 182.28793774319067 36.856031128404666 135.47081712062257 Q 70.72373540856032 88.65369649805447 128.49805447470817 60.762645914396884 Q 185.27626459143968 33.86770428015564 256.99610894941634 32.8715953307393 Q 328.715953307393 33.86770428015564 385.4941634241245 60.762645914396884 Q 443.2684824902724 88.65369649805447 477.136186770428 135.47081712062257 Q 511.00389105058366 182.28793774319067 512 240.06225680933852 Q 511.00389105058366 297.8365758754864 477.136186770428 344.6536964980545 Q 443.2684824902724 391.47081712062254 385.4941634241245 419.36186770428014 Q 328.715953307393 446.2568093385214 256.99610894941634 447.25291828793775 Q 201.21400778210116 447.25291828793775 153.40077821011673 429.3229571984436 Q 134.47470817120623 443.2684824902724 99.61089494163424 460.2023346303502 Q 61.75875486381323 477.136186770428 17.929961089494164 479.1284046692607 Q 7.968871595330739 479.1284046692607 2.9883268482490273 469.16731517509726 Q 0 459.20622568093387 6.972762645914397 452.23346303501944 L 6.972762645914397 452.23346303501944 L 6.972762645914397 452.23346303501944 L 6.972762645914397 452.23346303501944 L 6.972762645914397 452.23346303501944 Z"
                     />
                </svg>
         <p> 
         <SendSMS  onClick={handleClose}/>

          </p>
        </MenuItem>
        <MenuItem  >
          {/* <MoreHorizIcon /> */}
          <p style={{color:' #6053B9'}}>
         <AddGroup onClick={handleClose}/>
          </p>
         
          
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
