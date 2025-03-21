import React, { useState } from 'react';
import './MentoSearch.css';

const mentors = [
  {
    name: 'Aditya Rao',
    description: 'Technology Enthusiast and a Mentor for more than a year',
    image: 'https://media.licdn.com/dms/image/D4D03AQFpA5Kz4b3VbA/profile-displayphoto-shrink_200_200/0/1683635155071?e=2147483647&v=beta&t=QybjMYYSIvvkM3rr4vigUf1EeILL2KcRWKtCeuNMRKs',
    badges: ['Top 1%', '221 Bookings', 'Top Rated 2023', 'Top Rated Software'],
    skills: ['Technology', 'React', 'Software Engineering']
  },
  {
    name: 'Aman Singh',
    description: 'Career Coach and Resume Expert',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQHjPdnTas6iQA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1699129728197?e=1731542400&v=beta&t=uZYzb0_u-R2k7fVEVDkMiH2jxX-Bx-MsoroQ6ehVvhg',
    badges: ['500+ Bookings', 'Top Rated 2023', 'Resume Guru'],
    skills: ['Technology', 'Mentoring', 'Software Engineering']
  },
  {
    name: 'Amandeep ummat',
    description: 'Expert in UK/EU Relocation & Study Opportunities',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQE2iIeuz_2Lxg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718885426900?e=1731542400&v=beta&t=ib9t9n2y1dUojr1JV3x1utUrlyLQLOLp6Z2YAYJAVgU',
    badges: ['Top Mentor', '1000+ Bookings', 'Relocation Specialist'],
    skills: ['React Development', 'Javascript', 'MernStack']
  },
  {
    name: 'Amanpreet Kaur',
    description: 'Expert in (Data Base management/Operating System)UK/EU Relocation & Study Opportunities',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQHBUu4qtkhUBg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725279924037?e=1731542400&v=beta&t=uMgVB0AQWd9iKZTc-Zmirr8TZWy7bJz_6n_gxYXK9-4',
    badges: ['Top Mentor', '1000+ Bookings', 'Relocation Specialist'],
    skills: ['Angular', 'MongoDB', 'Java']
  },
  {
    name: 'Shradha Khapra',
    description: 'Expert in Web Development(React.js/java script)/Co-founder, Apna College | Ex-Microsoft | Tedx Speaker | Google SPS’20',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQHGNAxeyJhZbQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1685972237021?e=1731542400&v=beta&t=-GhZ6UgCWGWa38w_CHUvh9bClz9VeUQaZswJwK_8Pa0',
    badges: ['Top Mentor', '1000+ Bookings', 'Relocation Specialist'],
    skills: ['DSA', 'C++', 'Software Engineering']
  },
  {
    name: 'Love Babbar',
    description: 'Expert: DSA/Founder - CodeHelp | SSB Recommended | TedX Speaker | Ex-Amazon | Ex-Microsoft',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQEO10ue8NTlBw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1714135658517?e=1731542400&v=beta&t=lLtVogU_B_3xcXCPYgEjd3IEujqp-HJ3toWbLFyCvYs',
    badges: ['Top Mentor', '10000+ Bookings', 'Software Design Specialist'],
    skills: ['HTml', 'Mentoring', 'Software Engineering']
  },
  {
    name: 'Aman Kumar',
    description: 'Expert: in FLAT ,DSA,Software',
    image: 'https://media.licdn.com/dms/image/D5603AQHUMB_4N63w9Q/profile-displayphoto-shrink_200_200/0/1710703441973?e=2147483647&v=beta&t=zNCA9d72m1YzGDh17cyxOg9EgiSOnFJW43TQT5H1PaM',
    badges: ['Top Mentor', '10000000000+ Bookings', 'Software Design Specialist And Gaming'],
    skills: ['Mentoring', 'Software Engineering']
  }
];

const MentorSearch = () => {
  const [query, setQuery] = useState('');
  const [filteredMentors, setFilteredMentors] = useState([]);

  const handleSearch = (e) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);

    if (searchQuery.length > 0) {
      const results = mentors.filter(mentor =>
        mentor.skills.some(skill =>
          skill.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setFilteredMentors(results);
    } else {
      setFilteredMentors([]);
    }
  };

  return (
    <div className="mentor-search">
      <input
        type="text"
        placeholder="Search for skills..."
        value={query}
        onChange={handleSearch}
        className="mentor-search-input"
      />
      {filteredMentors.length > 0 && (
        <ul className="mentor-suggestions">
          {filteredMentors.map((mentor, index) => (
            <li key={index}>
              <img src={mentor.image} alt={mentor.name} className="mentor-image" />
              <div className="mentor-details">
                <h3 className="mentor-name">{mentor.name}</h3>
                <p className="mentor-description">{mentor.description}</p>
                <div className="mentor-skills">
                  {mentor.badges.map((badge, i) => (
                    <span key={i} className="mentor-badge">{badge}</span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MentorSearch;