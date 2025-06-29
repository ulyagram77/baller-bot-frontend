# Baller Bot Frontend

## Table of Contents

- [Requirements](#requirements)
- [Tech Stack](#tech-stack)
- [Run Locally](#run-locally)
- [Environment Variables](#environment-variables)
- [Other Commands](#other-commands)
- [Code Quality Tools](#code-quality-tools)

## Requirements

- Node.js
- Configured `.env` file
- Yarn (optional)

## Tech Stack

[![My Skills](https://skillicons.dev/icons?i=ts,react,tailwind,vite&theme=dark)](https://skillicons.dev)

## Run Locally

Clone the project

```bash
  git clone https://github.com/ulyagram77/baller-bot-frontend.git
```

Go to the project directory

```bash
  cd baller-bot-frontend
```

Install dependencies

```bash
  yarn
```

Start the development server

```bash
  yarn dev
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

| Parameter       | Description                                           |
| :-------------- | :---------------------------------------------------- |
| `VITE_API_URL`  | URL of the `backend baller bot API` that will be used |
| `VITE_BASE_URL` | base URL of the client side                           |

## Other Commands

Script for building the project:

```bash
yarn build
```

Script for running the production build locally:

```bash
yarn preview
```

Script for linting code files the project:

```bash
yarn lint
```

Script for linting style (.css) files the project:

```bash
yarn stylelint
```

Script for formatting the project:

```bash
yarn format
```

## Code Quality Tools

This project uses the following tools to ensure code quality and consistency:

- **[ESLint](https://eslint.org/)** – Lints JavaScript/TypeScript code
- **[Stylelint](https://stylelint.io/)** – Lints CSS/SCSS and other style files
- **[Prettier](https://prettier.io/)** – Formats code automatically
- **[Husky](https://typicode.github.io/husky/)** – Runs linting and formatting on git hooks
- **[Lint-staged](https://github.com/okonet/lint-staged)** – Runs linting and formatting on staged files

> [!NOTE]
> All tools are automatically triggered on commit using `husky` and `lint-staged`.  
> Only staged files are checked and auto-fixed before committing.
