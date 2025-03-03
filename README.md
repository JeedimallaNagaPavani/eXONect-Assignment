# Country, State, and City Management Application

## Overview
This project is a ReactJS-based hierarchical management system for countries, states, and cities. Users can add, edit, and delete countries, states, and cities with confirmation dialogs for critical actions.

## Features
- **Country Management**: Add, edit, and delete countries.
- **State Management**: Add, edit, and delete states within a country.
- **City Management**: Add and delete cities within a state.
- **Confirmation Dialogs**: Alerts before updating or deleting entries.

## Project Structure
```
📂 country-state-city-app
│── 📂 src
│   ├── 📂 components
│   │   ├── 📄 CountryList.js
│   │   ├── 📄 StateList.js
│   │   ├── 📄 CityList.js
│   ├── 📄 App.js
│   ├── 📄 index.js
│── 📄 package.json
│── 📄 README.md
```

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/country-state-city-app.git
   cd country-state-city-app
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```
4. Open `http://localhost:3000` in your browser.

## Usage
- Click **Add Country** to create a new country.
- Click **Edit** to rename an existing country/state.
- Click **Delete** to remove a country/state/city (confirmation required).
- Click **Add State** to create a state within a country.
- Click **Add City** to create a city within a state.

## Build for Production
To generate an optimized production build:
```sh
npm run build
```

## License
This project is licensed under the MIT License.
