# MentoLink

MentoLink is a platform designed to connect students with their alumni for guidance, mentorship, and career development. It provides features such as resume reviews, mock interviews, AI-powered chat assistance, and alumni connections to help students achieve their professional goals.

## Features

### 1. **Alumni Finder**
   - Allows students to find alumni from their colleges.
   - Displays alumni profiles with details like name, degree, graduation year, and LinkedIn profile.
   - Example: [Feed.js](./mentolink-master/src/Feed.js) and [data.js](./mentolink-master/src/data.js).

### 2. **Mentorship**
   - Students can connect with mentors for 1:1 sessions.
   - Mentors provide guidance on career paths, skill development, and relocation opportunities.
   - Example: [ProfileCard.js](./mentolink-master/src/ProfileCard.js) and [MentorSearch.js](./mentolink-master/src/MentorSearch.js).

### 3. **Resume Review and Mock Interviews**
   - Students can book sessions for resume reviews and mock interviews.
   - Includes a booking system with date and time selection.
   - Example: [Booking.js](./mentolink-master/src/Booking.js) and [BookingForm.js](./mentolink-master/src/BookingForm.js).

### 4. **AI-Powered Chat**
   - AI chatbot to answer student queries and provide instant guidance.
   - Example: [AIChat.js](./mentolink-master/src/AIChat.js).

### 5. **Community and Roadmaps**
   - Students can connect with peers and mentors in a community setting.
   - Provides skill-based roadmaps for structured learning.
   - Example: [Cards.js](./mentolink-master/src/Cards.js).

### 6. **Feed and Posts**
   - Students and mentors can share posts, updates, and achievements.
   - Example: [FeedSec.js](./mentolink-master/src/FeedSec.js) and [Post.js](./mentolink-master/src/Post.js).

## Project Structure

The project is organized into the following key components:

- **Frontend**: Built using React.js with components for different features.
- **Routing**: Uses `react-router-dom` for navigation between pages.
- **Styling**: CSS files for each component to ensure a clean and responsive UI.
- **Service Worker**: Provides offline capabilities and faster loading in production.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/mentolink.git
   ```
2. Navigate to the project directory:
   ```bash
   cd mentolink
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## Usage

- **Homepage**: Displays the hero section and cards for features like mentorship, roadmaps, and alumni finder.
- **Login/Signup**: Users can log in or sign up to access personalized features.
- **Alumni Finder**: Select a college to view its alumni and connect with them on LinkedIn.
- **Mentorship**: Browse mentor profiles and book sessions for guidance.
- **AI Chat**: Ask questions and get instant answers from the AI chatbot.

## Example Workflow

1. A student logs in and searches for alumni from their college.
2. The student connects with a mentor for a 1:1 session or books a mock interview.
3. The student uses the AI chatbot for quick guidance on career-related queries.

## Technologies Used

- **React.js**: Frontend framework.
- **Material-UI**: For UI components.
- **Axios**: For API calls (e.g., AI chatbot).
- **React Router**: For navigation.
- **CSS**: For styling.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Contact

For any questions or feedback, please contact us at support@mentolink.com.
