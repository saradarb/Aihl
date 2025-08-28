# 🤖 Veritas AI ✨

<div align="center">

![AI Chat Demo](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWcxbTBudWRtdW9qNzYyYms0OGtncGNyYnQ5MGE4dWg0aGRpNWViZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5k5vZwRFZR5aZeniqb/giphy.gif)

*A sophisticated React-based AI chat application integrating Google's Gemini AI with modern web technologies and interactive 3D elements.*

[![React](https://img.shields.io/badge/React-19.1.0-61dafb?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.0.4-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Google AI](https://img.shields.io/badge/Google_AI-Gemini-4285f4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)
[![Spline](https://img.shields.io/badge/Spline-3D_Graphics-ff6b6b?style=for-the-badge&logo=spline&logoColor=white)](https://spline.design/)

</div>

---

## 🚀 Technical Implementation

### 🧠 **Core Framework & Architecture**
```javascript
// Modern React with hooks magic ✨
const [aiResponse, setAiResponse] = useState('');
const { onSent, showResult, resultData } = useContext(Context);
```
- **React 19.1.0** with modern functional components and hooks 🎣
- **React Router DOM 7.8.1** for client-side routing and navigation 🗺️
- **Context API** for centralized state management across components 🌐
- Component-based modular architecture with clear separation of concerns 🏗️

<div align="center">

![React Animation](https://media.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif)

</div>

### 🤖 **AI Integration** 
```javascript
// Talking to Google's Gemini AI like a boss 🎯
import { GoogleGenerativeAI } from '@google/generative-ai';
const genAI = new GoogleGenerativeAI(API_KEY);
```
- **Google Generative AI SDK (Gemini)** for intelligent conversational capabilities 💬
- Real-time AI response processing and rendering ⚡
- Dynamic content generation with HTML parsing and display 📝
- Context-aware conversation management 🧠

<div align="center">

![AI Thinking](https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif)

</div>

### ⚡ **Build System & Development Tools**
```bash
# Lightning fast development with Vite ⚡
npm run dev  # 🔥 Hot reload magic
npm run build  # 📦 Production ready
```
- **Vite 7.0.4** for ultra-fast development server and optimized production builds 🚀
- **ESLint 9.30.1** with React-specific plugins for code quality enforcement 📏
- **React Hot Refresh** for instant development feedback 🔄
- Modern ES modules with tree-shaking optimization 🌳

<div align="center">

![Coding Animation](https://media.giphy.com/media/ZVik7pBtu9dNS/giphy.gif)

</div>

### 🎨 **3D Graphics & Interactive Elements**
```jsx
// Bringing 3D magic to the web ✨
<spline-viewer url="https://prod.spline.design/BoWg-dch2T9e59sl/scene.splinecode">
</spline-viewer>
```
- **Spline 3D viewer** integration for immersive visual experiences 🌈
- **WebGL-based** 3D scene rendering and manipulation 🎮
- Interactive 3D models with real-time animation 🎬
- Custom Spline scene implementation for enhanced user engagement 👾

<div align="center">

![3D Animation](https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif)

</div>

### 🎭 **UI/UX & Responsive Design**
```css
/* Smooth animations everywhere ✨ */
.mobile-menu {
  transition: all 0.3s ease-in-out;
  transform: translateX(-100%);
}
```
- **Material-UI icons** integration for consistent iconography 🎯
- **Font Awesome 6.4.0** for comprehensive icon library 📚
- Custom CSS with advanced styling techniques and animations 🎨
- Mobile-first responsive design with hamburger navigation 📱
- Overlay and modal management for mobile interfaces 📲

<div align="center">

![UI Animation](https://media.giphy.com/media/l46Cy1rHbQ92uuLXa/giphy.gif)

</div>

### 🔄 **State Management & Data Flow**
```javascript
// Context API keeping everything in sync 🎪
const Context = createContext();
const [input, setInput] = useState('');
const [resultData, setResultData] = useState('');
```
- **React Context API** for global state management 🌍
- Custom hooks for component logic abstraction 🪝
- Controlled form inputs with real-time validation ✅
- Dynamic content rendering with dangerouslySetInnerHTML for AI responses ⚠️

<div align="center">


</div>


**This project demonstrates expertise in modern React development, AI API integration, 3D web graphics, state management, and contemporary frontend tooling while maintaining high code quality and performance standards!** 🎉

</div>

---

<div align="center">

### 🌟 **Built with passion and lots of Matcha** 🍵

![Footer Animation](https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif)

</div>
