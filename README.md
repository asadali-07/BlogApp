# 🤖 AI-Assisted Blog Platform

A modern, full-stack blog platform built with **Next.js 14**, featuring **AI-powered content generation**, **user authentication**, and a beautiful responsive design with **glassmorphism UI effects**.

![AI Blog Platform](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![AI Powered](https://img.shields.io/badge/AI_Powered-Gemini-FF6B35?style=for-the-badge&logo=google&logoColor=white)

---

## ✨ Features

### 🎨 **Modern UI/UX**
- 🌈 **Glassmorphism Design**: Beautiful glass-effect cards with backdrop blur
- 🎯 **Purple/Pink Gradient Theme**: Consistent brand colors throughout
- � **Dark/Light Mode**: Theme switching with smooth transitions
- 📱 **Responsive Design**: Mobile-first approach with Tailwind CSS
- ⚡ **Loading States**: Elegant skeleton loaders and animations

### 🔐 **Authentication System**
- 👤 **User Registration**: Sign up with email and password
- 🔑 **User Login**: Secure authentication with JWT
- �️ **Protected Routes**: Middleware-based route protection
- 💾 **Session Management**: Persistent login sessions

### 📝 **Blog Management**
- ✍️ **Create Blog Posts**: Rich form with image upload
- 🖼️ **Image Handling**: Base64 image conversion and storage
- 🔗 **Auto-generated Slugs**: SEO-friendly URLs
- � **Blog Listing**: Beautiful blog grid with loading states
- 📄 **Individual Blog Pages**: Full blog post display with syntax highlighting

### 🤖 **AI Integration**
- 🧠 **Gemini AI**: AI-powered content suggestions and generation
- ✨ **Smart Content**: Enhanced writing assistance

### 📱 **Additional Features**
- � **Share Buttons**: Social media sharing capabilities
- 📚 **Table of Contents**: Auto-generated navigation for blog posts
- 📧 **Newsletter Subscription**: Email list management
- 📞 **Contact Forms**: User inquiry handling
- 🔍 **SEO Optimized**: Meta tags and sitemap generation

---

## 🛠️ Tech Stack

### **Frontend**
- ⚛️ **Next.js 14**: React framework with App Router
- 🎭 **React 18**: Latest React features with hooks
- � **Tailwind CSS**: Utility-first CSS framework
- 🎪 **shadcn/ui**: Beautiful UI components
- � **Lucide React**: Modern icon library

### **Backend**
- 🔌 **Next.js API Routes**: Serverless API endpoints
- 🗄️ **MongoDB**: NoSQL database with Mongoose ODM
- 🔐 **JWT**: JSON Web Token authentication
- 🛡️ **Middleware**: Custom authentication middleware

### **AI & External Services**
- 🤖 **Google Gemini AI**: AI content generation
- ☁️ **Cloudinary**: Image hosting and optimization

### **Development Tools**
- 🔍 **ESLint**: Code linting
- 🎨 **PostCSS**: CSS processing
- 📝 **Unified**: Markdown processing ecosystem

---

## 📁 Project Structure

```
ai-assisted-blog/
├── app/                          # Next.js App Router
│   ├── api/                      # API Routes
│   │   ├── blogs/               # Blog CRUD operations
│   │   ├── signin/              # User authentication
│   │   ├── signup/              # User registration
│   │   ├── logout/              # Session logout
│   │   └── check-auth/          # Auth verification
│   ├── blog/                    # Blog listing page
│   ├── blogpost/[slug]/         # Dynamic blog post pages
│   ├── create-blog/             # Blog creation form
│   ├── signin/                  # Login page
│   ├── signup/                  # Registration page
│   ├── about/                   # About page
│   ├── contact/                 # Contact page
│   ├── privacy/                 # Privacy policy
│   ├── terms/                   # Terms of service
│   ├── sitemap/                 # XML sitemap
│   ├── models/                  # MongoDB schemas
│   │   ├── blog.model.js        # Blog schema
│   │   └── user.model.js        # User schema
│   ├── globals.css              # Global styles
│   ├── layout.js                # Root layout
│   └── page.js                  # Home page
├── components/                   # Reusable components
│   ├── ui/                      # shadcn/ui components
│   ├── Navbar.js                # Navigation component
│   ├── Footer.js                # Footer component
│   ├── ShareButtons.js          # Social sharing
│   ├── subscribe-form.js        # Newsletter signup
│   ├── onthispage.js           # Table of contents
│   ├── theme-provider.jsx       # Theme context
│   └── themeButton.jsx          # Theme toggle
├── lib/                         # Utility functions
│   ├── db.js                    # MongoDB connection
│   ├── gemini.js                # AI integration
│   ├── cloudnairy.js           # Image upload
│   └── utils.js                 # Helper functions
├── context/                     # React contexts
│   └── UserContext.js           # User state management
└── public/                      # Static assets
    └── images/                  # Blog images
```

---

## 🚀 Getting Started

### **Prerequisites**
- 📦 Node.js 18.0 or later
- 🗄️ MongoDB database
- ☁️ Cloudinary account (for image hosting)
- 🤖 Google Gemini AI API key

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/asadali-07/AsadBlog.git
   cd ai-assisted-blog
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:
   ```env
   # Database
   MONGO_URL=your_mongodb_connection_string
   
   # Authentication
   JWT_SECRET=your_jwt_secret_key
   
   # AI Integration
   GEMINI_API_KEY=your_gemini_api_key
   
   # Image Upload
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   
   # Environment
   NODE_ENV=development
   NEXT_PUBLIC_API_KEY=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📋 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

---

## 🔧 Database Schema

### **User Model:**
```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (required, hashed),
  createdAt: Date,
  updatedAt: Date
}
```

### **Blog Model:**
```javascript
{
  title: String (required),
  description: String (required),
  slug: String (required, unique),
  image: String (required, base64),
  content: String (required, markdown),
  author: ObjectId (User reference),
  createdAt: Date,
  updatedAt: Date
}
```

---

## 🎨 UI Components

### **Custom Components**
- 🪟 **Glassmorphism Cards**: Translucent cards with backdrop blur
- 🌈 **Gradient Buttons**: Purple to pink gradient interactive elements
- ⚡ **Loading Skeletons**: Animated placeholder content
- 🌙 **Theme Switcher**: Dark/light mode toggle
- 📱 **Responsive Navigation**: Mobile-friendly navigation bar

### **shadcn/ui Components Used**
- Button, Input, Label, Textarea
- Card, Sheet, Dropdown Menu
- Custom styled with brand colors

---

## 🔐 Authentication Flow

1. **Registration**: User creates account with email/password
2. **Login**: JWT token generation and storage
3. **Protected Routes**: Middleware checks authentication
4. **Session Management**: Token verification on requests
5. **Logout**: Token cleanup and redirect

---

## � Blog Creation Workflow

1. **Create Post**: User fills in title, description, slug
2. **Image Upload**: File converted to base64 and stored
3. **Content Writing**: Markdown support with AI assistance
4. **Preview**: Real-time preview of blog post
5. **Publish**: Save to MongoDB with author reference

---

## 🌐 Deployment

### **Vercel (Recommended)**
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### **Manual Deployment**
```bash
npm run build
npm run start
```

---

## 🔒 Security Features

- 🔐 **JWT Authentication**: Secure token-based auth
- 🔒 **Password Hashing**: bcrypt for password security
- ✅ **Input Validation**: Server-side validation
- 🛡️ **CORS Protection**: Controlled cross-origin requests
- 🔑 **Environment Variables**: Sensitive data protection

---

## 🐛 Troubleshooting

### **Common Issues**

**Database Connection Error:**
```bash
# Check MongoDB connection string
# Ensure network access is allowed
# Verify credentials
```

**Build Failures:**
```bash
# Clear next cache
rm -rf .next
npm run build
```

**Environment Variables:**
```bash
# Ensure all required variables are set
# Check for typos in variable names
# Restart development server after changes
```

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### **Development Guidelines**
- Follow ESLint configuration
- Use conventional commit messages
- Add tests for new features
- Update documentation for changes

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Asad Ali**
- 🐙 GitHub: [@asadali-07](https://github.com/asadali-07)
- 🚀 Project: [AsadBlog](https://github.com/asadali-07/AsadBlog)
- 🌐 Live Demo: [AI Blog Platform](https://asad-blog.vercel.app)

---

## 🙏 Acknowledgments

- ⚛️ Next.js team for the amazing framework
- 🚀 Vercel for hosting and deployment
- 🎨 shadcn for the beautiful UI components
- 🎭 Tailwind CSS for the utility-first approach
- 🗄️ MongoDB for the flexible database solution
- 🤖 Google for Gemini AI integration

---

## � Support

If you encounter any issues or have questions:

1. � Check the [Issues](https://github.com/asadali-07/AsadBlog/issues) page
2. 🆕 Create a new issue with detailed description
3. 💬 Join our community discussions
4. 📧 Contact the maintainer

---

**Happy Blogging! 🎉✨**
