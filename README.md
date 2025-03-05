# 3-APIs Project

This project combines three different APIs to provide a diverse set of functionalities: weather information, dog images, and movie details.

## APIs Used

1.  **Weather API:**  This API is used to fetch current weather conditions for a specified location.
2.  **Dog API:**  This API provides access to a collection of dog images.
3.  **Movie API:**  This API allows you to search for and retrieve information about movies.

## Functionality

This application integrates the three APIs to offer the following features:

*   **Weather Information:** Users can retrieve weather details for a specific location.
*   **Dog Image Display:**  The application displays random dog images.
*   **Movie Search:** Users can search for movies and view their details.

## Setup/Installation

To set up and run this project, follow these steps:

### Step 1: **Clone the repository:**
   ```sh
   git clone https://github.com/CODERKABU/3-APIs.git
   cd 3-APIs
   ```

### Step 2: **Install dependencies:**
   ```sh
   npm install
   ```

### Step 3: **Start the development server:**
   ```sh
   npm run dev
   ```
## 📂 Project Structure
```
3-APIs/
├── public/           
├── src/
│   ├── components/
|       ├── LoadingSpinner.jsx
|       ├── ErrorMessage.jsx
│   ├── pages/     
│       ├── Dogs.jsx
|       ├── Home.jsx
|       ├── Movies.jsx
|       ├── Weather.jsx        
│   ├── redux/     
│       ├── actions/
|           ├── dogActions.js
|           ├── movieActions.js
|           ├── weatherActions.js    
|       ├── reducers/
|           ├── dogReducer.js
|           ├── movieReducer.js
|           ├── weatherReducer.js
|       ├── store.js
│   ├── App.jsx
|   ├── App.css      
│   ├── main.jsx      
│   └── index.css     
├── .gitignore         
├── package.json       
├── README.md          
└── vite.config.js     
```

## 🛠 Tech Stack
- **Frontend:** React, Vite, Tailwind CSS
- **State Management:** React Hooks
- **API Requests:** Axios / Fetch API
- **UI Components:** Custom-designed with Tailwind CSS

## 📄 License
This project is licensed under the MIT License.

## ✨ Contributors
- [Kabir Kansara](https://github.com/CODERKABU)

---
