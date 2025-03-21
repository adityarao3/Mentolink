import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
// import HomeIcon from "@material-ui/icons/Home";
// import SearchIcon from "@material-ui/icons/Search";//
// // import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
// import MailOutlineIcon from "@material-ui/icons/MailOutline";
// import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
// import ListAltIcon from "@material-ui/icons/ListAlt";
// import PermIdentityIcon from "@material-ui/icons/PermIdentity";
// import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";
// import AltRouteRoundedIcon from '@mui/icons-material/AltRouteRounded';
// import ContactPageRoundedIcon from '@mui/icons-material/ContactPageRounded';
// import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
// import SmartToyRoundedIcon from '@mui/icons-material/SmartToyRounded';

// Import the Link component from react-router-dom
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarOption text="Home" />

      {/* Use Link to navigate to ProfileCard */}
      <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
        <SidebarOption text="Mentors" />
      </Link>

      {/* Link to the AIChat page */}
      <Link to="/chatbot" style={{ textDecoration: 'none', color: 'inherit' }}>
        <SidebarOption text="Chatbot" />

      </Link>
      <SidebarOption

        onClick={() => window.open("https://theresanaiforthat.com/", "_blank")}
        text="Find YourAI"
      />

      <Link to="/post" style={{ textDecoration: 'none', color: 'inherit' }}>

        <SidebarOption text="Post" />
      </Link>
      <SidebarOption

        text="RoadMaps"
        onClick={() => window.open("https://roadmap.sh/", "_blank")}
      />
      <SidebarOption text="Resume Review" />
      <SidebarOption text="Messages" />
      <SidebarOption text="Mentorship" />

      <SidebarOption

        text="AI Mock Interview"
        onClick={() => window.open("https://www.witmyworld.com", "_blank")}
      />


      {/* Update the Webinar option to navigate using Link */}
      <Link to="/webinar" style={{ textDecoration: 'none', color: 'inherit' }}>
        <SidebarOption text="Webinar" />
      </Link>

      {/* Button -> Book Now */}
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Book Now
      </Button>
    </div>
  );
}

export default Sidebar;
