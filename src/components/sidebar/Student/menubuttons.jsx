// import * as React from 'react';
// import IconButton from '@mui/joy/IconButton';
// import Menu from '@mui/joy/Menu';
// import MenuItem from '@mui/joy/MenuItem';
// import ListItemDecorator from '@mui/joy/ListItemDecorator';
// import ListDivider from '@mui/joy/ListDivider';
// import MoreVert from '@mui/icons-material/MoreVert';
// import Edit from '@mui/icons-material/Edit';
// import DeleteForever from '@mui/icons-material/DeleteForever';
// import MenuButton from '@mui/joy/MenuButton';
// import Dropdown from '@mui/joy/Dropdown';
// import { Addlead } from './style';

// export default function StudentMenuButton() {
//     const [open, setOpen] = React.useState(false);
//   return (
//     <Dropdown>
//       <MenuButton  onClik
//         slots={{ root: IconButton }}
//         slotProps={{ root: { variant: 'outlined', color: 'neutral' } }}
//       >

//         <MoreVert />
//       </MenuButton>
//       <Menu placement="bottom-end">
//         <MenuItem>
//           <ListItemDecorator>
//             <Edit />
//           </ListItemDecorator>{' '}
//           Edit post
//         </MenuItem>
//         <MenuItem disabled>
//           <ListItemDecorator />
//           Draft post
//         </MenuItem>
//         <ListDivider />
//         <MenuItem variant="soft" color="danger">
//           <ListItemDecorator sx={{ color: 'inherit' }}>
//             <DeleteForever />
//           </ListItemDecorator>{' '}
//           Delete
//         </MenuItem>
//       </Menu>
//     </Dropdown>
//   );
// }



// import * as React from 'react';
// import IconButton from '@mui/joy/IconButton';
// import Menu from '@mui/joy/Menu';
// import MenuItem from '@mui/joy/MenuItem';
// import ListItemDecorator from '@mui/joy/ListItemDecorator';
// import ListDivider from '@mui/joy/ListDivider';
// import MoreVert from '@mui/icons-material/MoreVert';
// import Edit from '@mui/icons-material/Edit';
// import DeleteForever from '@mui/icons-material/DeleteForever';
// import MenuButton from '@mui/joy/MenuButton';


// export default function StudentMenuButton() {
//   const [open, setOpen] = React.useState(false);

//   return (
//     <>
//       <MenuButton
//         onClick={() => setOpen(!open)}
//         slots={{ root: IconButton }}
//         slotProps={{ root: { variant: 'outlined', color: 'neutral' } }}
//       >
//         <MoreVert />
//       </MenuButton>
//       <Menu
//         open={open}
//         onClose={() => setOpen(false)}
//         placement="bottom-end"
//       >
//         <MenuItem>
//           <ListItemDecorator>
//             <Edit />
//           </ListItemDecorator>
//           Edit post
//         </MenuItem>
//         <MenuItem disabled>
//           <ListItemDecorator />
//           Draft post
//         </MenuItem>
//         <ListDivider />
//         <MenuItem variant="soft" color="danger">
//           <ListItemDecorator sx={{ color: 'inherit' }}>
//             <DeleteForever />
//           </ListItemDecorator>
//           Delete
//         </MenuItem>
//       </Menu>
//     </>
//   );
// }


// import * as React from 'react';
// import IconButton from '@mui/joy/IconButton';
// import Menu from '@mui/joy/Menu';
// import MenuItem from '@mui/joy/MenuItem';
// import ListItemDecorator from '@mui/joy/ListItemDecorator';
// import ListDivider from '@mui/joy/ListDivider';
// import MoreVert from '@mui/icons-material/MoreVert';
// import Edit from '@mui/icons-material/Edit';
// import DeleteForever from '@mui/icons-material/DeleteForever';
// import MenuButton from '@mui/joy/MenuButton';
// import { Addlead } from './style';

// export default function StudentMenuButton() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <>
//       <IconButton
//         onClick={handleClick}
//         variant="outlined"
//         color="neutral"
//       >
//         <MoreVert />
//       </IconButton>
//       <Menu
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//         placement="bottom-end"
//       >
//         <MenuItem onClick={handleClose}>
//           <ListItemDecorator>
//             <Edit />
//           </ListItemDecorator>
//           Edit post
//         </MenuItem>
//         <MenuItem disabled>
//           <ListItemDecorator />
//           Draft post
//         </MenuItem>
//         <ListDivider />
//         <MenuItem onClick={handleClose} variant="soft" color="danger">
//           <ListItemDecorator sx={{ color: 'inherit' }}>
//             <DeleteForever />
//           </ListItemDecorator>
//           Delete
//         </MenuItem>
//       </Menu>
//     </>
//   );
// }
// import * as React from 'react';
// import IconButton from '@mui/joy/IconButton';
// import Menu from '@mui/joy/Menu';
// import MenuItem from '@mui/joy/MenuItem';
// import ListItemDecorator from '@mui/joy/ListItemDecorator';
// import ListDivider from '@mui/joy/ListDivider';
// import MoreVert from '@mui/icons-material/MoreVert';
// import Edit from '@mui/icons-material/Edit';
// import DeleteForever from '@mui/icons-material/DeleteForever';

// export default function StudentMenuButton() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <>
//       <IconButton
//         onClick={handleClick}
//         variant="outlined"
//         color="neutral"
//       >
//         <MoreVert />
//       </IconButton>
//       <Menu
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//         placement="bottom-end"
//       >
//         <MenuItem onClick={handleClose}>
//           <ListItemDecorator>
//             <Edit />
//           </ListItemDecorator>
//           Edit post
//         </MenuItem>
//         <MenuItem disabled>
//           <ListItemDecorator />
//           Draft post
//         </MenuItem>
//         <ListDivider />
//         <MenuItem onClick={handleClose} variant="soft" color="danger">
//           <ListItemDecorator sx={{ color: 'inherit' }}>
//             <DeleteForever />
//           </ListItemDecorator>
//           Delete
//         </MenuItem>
//       </Menu>
//     </>
//   );
// }

// import * as React from 'react';
// import IconButton from '@mui/joy/IconButton';
// import Menu from '@mui/joy/Menu';
// import MenuItem from '@mui/joy/MenuItem';
// import ListItemDecorator from '@mui/joy/ListItemDecorator';
// import ListDivider from '@mui/joy/ListDivider';
// import MoreVert from '@mui/icons-material/MoreVert';
// import Edit from '@mui/icons-material/Edit';
// import DeleteForever from '@mui/icons-material/DeleteForever';

// export default function StudentMenuButton() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <>
//       <IconButton
//         onClick={handleClick}
//         variant="outlined"
//         color="neutral"
//       >
//         <MoreVert />
//       </IconButton>
//       <Menu
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//         placement="bottom-end"
//       >
//         <MenuItem onClick={handleClose}>
//           <ListItemDecorator>
//             <Edit />
//           </ListItemDecorator>
//           Edit post
//         </MenuItem>
//         <MenuItem disabled>
//           <ListItemDecorator />
//           Draft post
//         </MenuItem>
//         <ListDivider />
//         <MenuItem onClick={handleClose} variant="soft" color="danger">
//           <ListItemDecorator sx={{ color: 'inherit' }}>
//             <DeleteForever />
//           </ListItemDecorator>
//           Delete
//         </MenuItem>
//       </Menu>
//     </>
//   );
// }
import * as React from 'react';
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListDivider from '@mui/joy/ListDivider';
import MoreVert from '@mui/icons-material/MoreVert';
import Edit from '@mui/icons-material/Edit';
import DeleteForever from '@mui/icons-material/DeleteForever';

export default function StudentMenuButton() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        variant="outlined"
        color="neutral"
      >
        <MoreVert />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        placement="bottom-end"
      >
        <MenuItem onClick={handleClose}>
          <ListItemDecorator>
            <Edit />
          </ListItemDecorator>
          Edit post
        </MenuItem>
        <MenuItem disabled>
          <ListItemDecorator />
          Draft post
        </MenuItem>
        <ListDivider />
        <MenuItem onClick={handleClose} variant="soft" color="danger">
          <ListItemDecorator sx={{ color: 'inherit' }}>
            <DeleteForever />
          </ListItemDecorator>
          Delete
        </MenuItem>
      </Menu>
    </>
  );
}
