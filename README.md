Mini Instagram Clone (Full Stack)

A mini Instagram-style application built to understand full-stack web development, authentication, social relationships, and RESTful APIs.
This project includes core Instagram features like user authentication, posts, likes, comments, follow system, and feed generation.

🚀 Features
🔐 Authentication
User Signup
User Login
Password hashing for security
JWT-based authentication for protected routes

👥 Follow System
Follow another user
Unfollow a user
Maintain followers & following relationships

🖼️ Post Management
Authenticated users can create posts
Each post includes:
Image URL
Caption
View posts by users you follow

❤️ Likes
Like a post
Unlike a post
Prevent duplicate likes from the same user

💬 Comments
Comment on posts
Display commenter name and comment text
Real-time UI updates without page refresh

📰 Feed
Personalized feed API
Shows posts only from users you follow
Sorted by latest posts
🖥️ Frontend Screens
🔑 Login & Signup
Secure token storage
Redirect after successful authentication

🏠 Home Feed
View posts with:
Image
Caption
Likes
Comments

➕ Create Post
Add image URL and caption
Instant post rendering after creation

👤 Profile Page
User posts
Followers / Following count
Follow / Unfollow button

📄 Post Detail Page
Full post view
Interactive like & comment system

🛠️ Tech Stack
Backend
Node.js
Express.js
MongoDB
JWT Authentication
bcrypt for password hashing

Frontend
React / Next.js
Axios / Fetch API
State Management using React Hooks
Responsive UI design

📡 API Overview (Sample)
Method	Endpoint	Description
POST	/api/auth/signup	Register new user
POST	/api/auth/login	Login user
POST	/api/posts	Create post
GET	/api/feed	Get user feed
POST	/api/posts/:id/like	Like a post
POST	/api/posts/:id/comment	Comment on post
POST	/api/users/:id/follow	Follow user
POST	/api/users/:id/unfollow	Unfollow user

⚙️ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/your-username/instagram-clone.git
cd instagram-clone

2️⃣ Backend Setup
cd backend
npm install
npm run dev

Create a .env file:
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev

🎯 Learning Outcomes
Implement JWT-based authentication
Design MongoDB schemas with relationships
Build RESTful APIs
Handle likes, comments, and follow logic
Manage frontend state efficiently
Connect frontend with backend securely

👩‍💻 Author
Siya Kusumakar
Computer Science Engineering Student
Learning full-stack development 🚀
