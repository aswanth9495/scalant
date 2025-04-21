# Scalant

A modern, beautiful, and user-friendly React component library built for Scaler with Ant Design. This project is part of the Scalant monorepo, utilizing Lerna for package management.

## 🚀 Features

- Modern and responsive UI using Ant Design
- Component-driven development with Storybook
- Shared component library

## 📦 Project Structure

```
scalant/
├── packages/
│   ├── resume-builder/     # Main resume builder application
│   └── components/         # Shared component library
```

## 🛠️ Prerequisites

- Node.js (v15 or higher)
- npm or yarn
- Git

## 🔧 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd scalant
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

### Running Storybook

Storybook provides a development environment for UI components. To start Storybook:

```bash
# Navigate to the specific package
cd packages/resume-builder

# Start Storybook
npm run storybook
# or
yarn storybook
```

This will start Storybook on port 6006. Visit `http://localhost:6006` to view the component library.

### Building the Project

To build all packages:

```bash
# Navigate to the specific package
cd packages/resume-builder

# Build the package
npm run build
# or
yarn build
```

### Linting

The project uses ESLint for JavaScript/TypeScript linting and Stylelint for SCSS linting.

```bash
# Run JavaScript/TypeScript linting
npm run lint
# or
yarn lint

# Run SCSS linting
npm run lint:styles
# or
yarn lint:styles
```

## 📚 Available Scripts

### Root Directory
- `npm run lint` - Run ESLint on all packages
- `npm run lint:styles` - Run Stylelint on all SCSS files

### Resume Builder/Components Package
- `npm run storybook` - Start Storybook for the resume builder
- `npm run lint` - Run ESLint
- `npm run lint:styles` - Run Stylelint

## 🏗️ Tech Stack

- React 16.12.0
- Ant Design 5.24.7
- Vite 6.3.1
- Storybook 8.6.12
- SASS
- Lerna 8.2.2

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details. 