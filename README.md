# 🚗 Car Finder Web App

A sleek, responsive, and fully functional **Car Finder Web Application** built using **React.js + Vite**. This app allows users to filter cars based on brand, fuel type, seating capacity, and price — along with wishlist support and dark mode functionality!

---

## 🔥 Features

✨ **Brand & Feature Filtering**  
✨ **Search Bar with Live Filtering**  
✨ **Wishlist Management (LocalStorage)**  
✨ **Dark & Light Mode Toggle**  
✨ **Responsive UI**  
✨ **Car Details Viewer**  
✨ **Stylish Animations with Framer Motion**  
✨ **Built with Tailwind CSS**  
✨ **Deployed via GitHub Pages**

---

## 🖼️ Preview

![Car Finder Preview](https://your-preview-image-url.com) <!-- Add actual screenshot here -->

---

## 🛠️ Tech Stack

| Tech           | Usage                          |
|----------------|--------------------------------|
| ⚛️ React       | Frontend framework             |
| 🚀 Vite        | Lightning-fast dev build tool  |
| 💅 TailwindCSS | Utility-first styling          |
| 💾 JSON        | Simulated backend data         |
| 🎨 React Icons | Beautiful icon support         |
| 💡 Framer Motion | Smooth animations           |
| 🌙 Dark Mode   | Toggle with persistent state   |

---

## 📂 Folder Structure

vite-project/ ├── public/ │ └── cars.json # Car data ├── src/ │ ├── components/ # Reusable components │ ├── services/ # API handler │ ├── App.jsx # Main component │ └── main.jsx # App root ├── index.html ├── tailwind.config.js └── vite.config.js

yaml
Copy
Edit

---

## ⚙️ How to Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/Abhay-Singh-00/car-finder.git
   cd car-finder
Install dependencies

bash
Copy
Edit
npm install
Run development server

bash
Copy
Edit
npm run dev
Build for production

bash
Copy
Edit
npm run build
🚀 Deployment on GitHub Pages (Vite + gh-pages)
Step-by-step setup:
Install gh-pages

bash
Copy
Edit
npm install --save-dev gh-pages
Update vite.config.js:

js
Copy
Edit
export default defineConfig({
  base: "/car-finder/",
  plugins: [react()],
});
Update package.json:

json
Copy
Edit
{
  "homepage": "https://Abhay-Singh-00.github.io/car-finder",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
Deploy:

bash
Copy
Edit
npm run deploy
🧠 Learnings
How to build single-page applications using React + Vite

Creating reusable and animated components

Styling with Tailwind in a clean and scalable way

Dark mode implementation with CSS variables and React

LocalStorage and filtering logic

JSON-based simulated API usage

💖 Acknowledgements
React.js

Tailwind CSS

Vite

React Select

Framer Motion

React Icons

🙋‍♂️ Author
Abhay Singh
📧 2k22.cscys32245@gmail.com
🌐 GitHub Profile

⭐ Give a Star
If you liked this project, consider giving it a ⭐ on GitHub!
It helps others discover the repo and motivates me to improve further 😊

yaml
Copy
Edit

---

### ✅ What to do now:
- Paste the above in your `README.md` file.
- Replace the `![Car Finder Preview]` image link with a real screenshot URL (hosted somewhere like Imgur or GitHub).
- You're ready to go live 🚀

Let me know if you also want a badge section (version, license, etc.) or CI/CD automation next!






