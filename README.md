# Makova Calisthenics Platform

A comprehensive calisthenics platform featuring AI-powered training tools. Built with React and designed for optimal user experience across all devices.

## Features
- **AI-Powered Training Tools**: Interactive ChatBot and RepBot for personalized guidance
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional interface with smooth animations
- **Real-time Interaction**: Live chat and exercise tracking capabilities
- **Comprehensive Training Section**: Tabbed interface for easy navigation between tools

## AI Training Tools

### 🤖 AI ChatBot
- Custom-trained AI assistant using verified calisthenics science
- Real-time form guidance and routine building
- 24/7 availability for instant support
- Embedded iframe integration with message handling

### 🏋️ RepBot
- AI-powered exercise tracking using MediaPipe technology
- Real-time rep counting and form feedback
- Supports 7 key bodyweight exercises
- Automatic exercise logging and progress tracking

## Getting Started
1. Install dependencies: `npm install`
2. Start the development server: `npm run dev`
3. Navigate to `/train` to access the AI training tools

## Project Structure
```
src/
├── components/
│   ├── TrainSection.jsx       # Main training section with tabbed interface
│   ├── ChatbotComponent.jsx   # AI ChatBot integration
│   ├── RepBotComponent.jsx    # RepBot exercise tracker
│   └── ...
├── styles.css                 # Enhanced styling for train section
└── ...
```

## Technical Implementation
- **React 18** with hooks for state management
- **Lucide React** for modern iconography
- **Tailwind CSS** for responsive styling
- **Iframe Integration** for external AI tools
- **Message Handling** for cross-origin communication
