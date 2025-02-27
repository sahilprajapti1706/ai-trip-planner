# AI-Powered Trip Planner

An intelligent trip planning application that leverages AI to create personalized travel itineraries based on user preferences and interests.

## Features
- 🌍 **AI-Powered Itinerary**: Generates personalized travel plans using Gemini AI.
- 🔑 **Google OAuth Authentication**: Seamless login with Google.
- 🎨 **Intuitive UI**: Built with React and TailwindCSS for a smooth user experience.
- 🚀 **Real-time Data Storage**: Uses Firebase for storing trip details securely.
- 📱 **Responsive Design**: Optimized for all devices.

## Tech Stack
- **Frontend**: React, JavaScript, TailwindCSS
- **Backend & Database**: Firebase
- **AI Integration**: Google Gemini AI
- **Authentication**: Google OAuth

## Installation & Setup

1. **Clone the Repository**:
   ```sh
   git clone https://github.com/yourusername/ai-trip-planner.git
   cd ai-trip-planner
   ```

2. **Install Dependencies**:
   ```sh
   npm install
   ```

3. **Set Up Firebase**:
   - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
   - Enable Firestore Database.
   - Enable Google OAuth in Firebase Authentication.
   - Get your Firebase config and update `.env`:
     ```sh
     REACT_APP_FIREBASE_API_KEY=your-api-key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
     REACT_APP_FIREBASE_PROJECT_ID=your-project-id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
     REACT_APP_FIREBASE_APP_ID=your-app-id
     ```

4. **Run the Project**:
   ```sh
   npm start
   ```

## Usage
1. **Sign in** with Google OAuth.
2. **Enter travel preferences** (e.g., destination, interests, duration).
3. **Generate AI-powered itinerary** with Gemini.
4. **Save & manage trips** in Firebase.

## Future Improvements
- Add real-time weather and flight details.
- Enhance AI recommendations based on past trips.
- Improve UI/UX with more animations.

## License
This project is open-source and available under the MIT License.

---

**Contributors**: Feel free to fork and contribute! 🚀

