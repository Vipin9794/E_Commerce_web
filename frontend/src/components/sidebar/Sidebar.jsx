import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import GroupIcon from "../../assets/Group.svg";
import logo from "../../assets/logo.svg";
import Manu from "../../assets/manu.svg"

export default function Sidebar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: { xs: '100%',  sm: 350 } }}  role="presentation" onClick={toggleDrawer(false)}>
     
        <div className="flex items-center gap-3 pt-2 pb-3 ps-6 sm:ps-1 md:ps-3 ">
          <div className="logo p-2 rounded-full bg-linear-to-r from-[#FFF5CD] to-[#FEB00280] ">
            <img src={logo} alt="" />
          </div>
          <div className="logo-image">
            <img src={GroupIcon} alt="" />
          </div>
        </div>
       <Divider />  
      <List>
        {["Showcase", "About Us", "Case Studies", "Blog", "Contact"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
     
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}><img src={Manu} alt="" height={30} width={30} /> </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
