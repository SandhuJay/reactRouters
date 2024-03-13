
# GitHub User Fetcher
GitHub User Fetcher is a React application that enables users to fetch GitHub user data such as usernames and followers. The application utilizes React Router for navigation and integration with the GitHub API for fetching data.
github-user-fetcher/
│
├── public/              # Public assets and HTML template
│   └── index.html
│
├── src/                 # Source files
│   ├── components/      # React components
│   │   ├── Home.js      # Home page component
│   │   ├── About.js     # About page component
│   │   ├── Contact.js   # Contact page component
│   │   ├── GitHub.js    # GitHub page component
│   │   └── ...
│   │
│   ├── App.js           # Main application component
│   ├── index.js         # Entry point
│   └── ...
│
├── package.json         # Project dependencies and scripts
└── README.md            # Project documentation

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
