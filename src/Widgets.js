// import React from "react";
// import "./Widgets.css";
// import SearchIcon from "@mui/icons-material/Search";
// import { Card, CardContent, CardHeader, Typography, IconButton } from '@mui/material';
// import { Link } from 'react-router-dom';
// import { styled } from '@mui/system';

// // Define styles for the cards using @mui/system's styled
// const StyledCard = styled(Card)({
//   marginBottom: 20,
// });

// const CardHeaderContent = styled('div')({
//   display: 'flex',
//   alignItems: 'center',
// });

// const NewsCard = ({ title, subtitle, description, date, icon, link }) => {
//   return (
//     <StyledCard>
//       <CardHeader
//         title={
//           <CardHeaderContent>
//             <Typography variant="h6" style={{ fontSize: 40, marginRight: 10 }}>
//               {icon}
//             </Typography>
//             <Typography variant="h6">{title}</Typography>
//           </CardHeaderContent>
//         }
//         subheader={subtitle}
//       />
//       <CardContent>
//         <Typography variant="body2">{description}</Typography>
//         <Typography variant="body2" color="textSecondary">{date}</Typography>
//         <Link to={link}>
//           <IconButton>
//             <Typography variant="body2">→</Typography>
//           </IconButton>
//         </Link>
//       </CardContent>
//     </StyledCard>
//   );
// };

// const newsItems = [
//   {
//     title: 'Remote Work Surge',
//     subtitle: 'Global Tech Job Market Update',
//     description: 'With the increasing shift towards remote work, tech companies are adapting their hiring strategies to focus on remote talent. Explore how this trend is reshaping job opportunities and company cultures.',
//     date: 'September 2024',
//     icon: '🌍',
//     link: '#',
//   },
//   {
//     title: 'Top Skills for 2024',
//     subtitle: 'Skills Employers Are Seeking',
//     description: 'Discover the top technical skills that are in high demand this year. From AI expertise to cybersecurity knowledge, find out what skills can boost your career prospects.',
//     date: 'September 2024',
//     icon: '🛠️',
//     link: '#',
//   },
//   {
//     title: 'Rise of AI Specialists',
//     subtitle: 'New Roles in Artificial Intelligence',
//     description: 'AI is transforming job roles across industries. Learn about the emerging job titles and how AI is creating new opportunities for tech professionals.',
//     date: 'August 2024',
//     icon: '🤖',
//     link: '#',
//   },
//   {
//     title: 'Tech Salaries on the Rise',
//     subtitle: 'Latest Salary Insights',
//     description: 'The tech industry continues to see salary increases. Get the latest data on salary trends across various tech roles and regions.',
//     date: 'August 2024',
//     icon: '💰',
//     link: '#',
//   },
//   {
//     title: 'Tech Job Market Analysis',
//     subtitle: 'Current Market Insights',
//     description: 'Dive into the latest analysis of the tech job market. Understand the current trends, challenges, and opportunities in tech employment.',
//     date: 'July 2024',
//     icon: '📊',
//     link: '#',
//   },
// ];

// function Widgets() {
//   return (
//     <div className="widgets">
//       <div className="widgets__input">
//         <SearchIcon className="widgets__searchIcon" />
//         <input placeholder="Search" type="text" />
//       </div>

//       <div className="widgets__widgetContainer">
//         <h2>What's New</h2>
//         <h6>See what's trending at MentoLink</h6>

//         {newsItems.map((item, index) => (
//           <NewsCard key={index} {...item} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Widgets;
