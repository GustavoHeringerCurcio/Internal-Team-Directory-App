# 👥 Internal Team Directory App - TeamForce

![Status](https://img.shields.io/badge/status-active-success)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

---

## 🧭 Overview

**Internal Team Directory App** is a modern, responsive web application designed to manage and visualize internal team members within an organization. It allows users to quickly **search, filter, sort, and view details** about team members in a clean and intuitive interface.

This project was built as a **technical challenge**, focusing on fundamentals, clean architecture, reusable components, and real-world UI/UX patterns commonly found in internal dashboards.

---

## 🖥️ Live Demo

🔗 **Production:** [https://internal-team-directory-app.vercel.app](https://internal-team-directory-app.vercel.app)

---

## ✨ Features

* 📋 Team members table with avatar, name, role, and email
* 🔍 Search members by name (real-time)
* 🏷️ Filter members by role (Team Lead, Developer, Marketing, Support)
* 🔤 Alphabetical sorting (A → Z)
* 🟢 Status indicator (Active / Away)
* 🪟  Modal with detailed member information
* 📱 Fully responsive (mobile & desktop layouts)
* ⚡ Data fetching using Fetch API

---

## 🛠️ Tech Stack

### Frontend

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript\&logoColor=000)
![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5\&logoColor=fff)
![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3\&logoColor=fff)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react\&logoColor=000)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwindcss\&logoColor=fff)

### Framework & Tools

* ⚛️ **Next.js (App Router)**
* 🎨 **Tailwind CSS** for utility-first styling
* 📦 **Reusable React Components**
* 🌐 **Fetch API** for data handling
* 🚀 **Vercel** for deployment
* 🧠 **Git & GitHub** (clean commit history and workflow)

---

## 🗂️ Project Structure

```
internal-team-directory-app/
│
├── app/
│   ├── (pages)/
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── pricing/
│   │   │   └── page.tsx
│   │   └── settings/
│   │       └── page.tsx
│   │
│   ├── components/
│   │   ├── buttons/
│   │   │   └── RoleButton.tsx
│   │   │
│   │   ├── modals/
│   │   │   └── MemberModal.tsx
│   │   │
│   │   ├── navbar/
│   │   │   ├── Header.tsx
│   │   │   └── NavLink.tsx
│   │   │
│   │   ├── team/
│   │   │   ├── MemberList.tsx
│   │   │   ├── MemberRow.tsx
│   │   │   └── Overview.tsx
│   │   │
│   │   ├── titles/
│   │   │   └── Titles.tsx
│   │   │
│   │   └── ui/
│   │       └── SearchInput.tsx
│   │
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── public/
  └── images/
      ├── logo_team_force.png
       └── my_picture.jpg
```

---

## 🧠 Key Implementation Details

* **Component-based architecture** to ensure reusability and scalability
* **Conditional rendering** for mobile vs desktop layouts
* **State management with React hooks** (`useState`, `useEffect`)
* **Separation of concerns** between UI, logic, and data
* **Clean and semantic UI** inspired by real internal dashboards

---

## 📱 Responsiveness

The application adapts seamlessly across different screen sizes:

* 📱 Mobile: card-based layout
* 💻 Desktop: table-based layout

Tailwind breakpoints were used to conditionally render components and layouts.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/internal-team-directory-app.git
cd internal-team-directory-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

---

## 👤 Author

**Gustavo Hc**
Frontend Developer | Web Enthusiast

* GitHub: [https://github.com/GustavoHeringerCurcio](https://github.com/GustavoHeringerCurcio)
* LinkedIn: [https://linkedin.com/in/Gustavo-Hc](https://www.linkedin.com/in/gustavo-hc-48bab12b8/)

---

⭐ Feel free to explore the codebase and commit history — they reflect a focus on **fundamentals, clarity, and consistency**.
