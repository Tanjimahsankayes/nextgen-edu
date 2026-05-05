# NextGen Edu - Online Learning Platform

A modern, responsive online learning platform built with Next.js, featuring course management, user authentication, and an engaging learning experience.

## 🚀 Features

### Core Features

- **User Authentication**: Secure signup and signin system with Better Auth
- **Course Management**: Browse and view detailed course information
- **Responsive Design**: Mobile-first design with Tailwind CSS and DaisyUI
- **Interactive UI**: Smooth animations with Framer Motion and GSAP
- **Toast Notifications**: User-friendly feedback system with React Toastify

### Platform Sections

- **Home Page**: Dynamic banner, featured courses, and learning tips
- **Courses**: Course catalog with detailed views and filtering
- **Authentication**: Secure user registration and login
- **Profile**: User dashboard and course progress
- **About**: Platform information and instructor details

## 🛠️ Technology Stack

### Frontend

- **Framework**: Next.js 16.2.4 (App Router)
- **UI Library**: React 19.2.4
- **Styling**: Tailwind CSS 4.0 with DaisyUI components
- **Animations**: Framer Motion 12.38.0, GSAP 3.15.0
- **Icons**: React Icons 5.6.0
- **Notifications**: React Toastify 11.1.0
- **Carousels**: Swiper 12.1.4

### Backend & Database

- **Authentication**: Better Auth 1.6.9 with MongoDB adapter
- **Database**: MongoDB 7.2.0
- **API**: Next.js API routes

### Development Tools

- **Package Manager**: npm
- **Linting**: ESLint 9.0 with Next.js config
- **Fonts**: Google Fonts (Poppins, Inter, Geist)

## 📦 Installation

### Prerequisites

- Node.js 18+
- MongoDB instance (local or cloud)

### Setup

1. Clone the repository:

```bash
git clone <repository-url>
cd nextgen-edu
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Start the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# MongoDB
MONGODB_URI=mongodb://localhost:27017/nextgen-edu

# Better Auth
BETTER_AUTH_SECRET=your-secret-key
BETTER_AUTH_URL=http://localhost:3000

# Next.js
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret
```

## 📁 Project Structure

```
nextgen-edu/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── auth/           # Authentication pages
│   │   ├── courses/        # Course-related pages
│   │   ├── profile/        # User profile
│   │   └── api/            # API routes
│   ├── components/         # Reusable React components
│   │   ├── Banner.jsx      # Hero section
│   │   ├── CourseCard.jsx  # Course display card
│   │   ├── Navbar.jsx      # Navigation header
│   │   └── Footer.jsx      # Page footer
│   └── lib/               # Utility functions and configs
├── public/                # Static assets
├── package.json          # Dependencies and scripts
└── README.md            # This file
```

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Key Components

### Authentication System

- **Better Auth Integration**: Modern authentication with MongoDB adapter
- **Protected Routes**: Secure API endpoints and pages
- **Session Management**: Automatic token handling

### Course Management

- **Dynamic Course Pages**: Individual course detail pages
- **Course Cards**: Responsive course display components
- **Filtering & Search**: Easy course discovery

### UI/UX Features

- **Responsive Design**: Works seamlessly on all devices
- **Smooth Animations**: Engaging micro-interactions
- **Dark Mode Support**: Modern theme switching capability
- **Loading States**: Optimistic UI updates

## 🔒 Security Features

- **Authentication**: Secure user login/signup with Better Auth
- **Session Management**: Protected user sessions
- **Input Validation**: Form validation and sanitization
- **CSRF Protection**: Built-in Next.js security features

## 🌐 Deployment

### Live Demo

- **Live URL**: [https://nextgen-edu-ruddy.vercel.app/](https://nextgen-edu-ruddy.vercel.app/)

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Configure environment variables
3. Deploy automatically

### Other Platforms

```bash
npm run build
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For issues and questions:

- Create an issue in the repository
- Check the documentation
- Review existing issues for solutions

---

**Built with ❤️ using Next.js and modern web technologies**
