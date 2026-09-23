# WorkSphere

**Multi-user SaaS Project & Team Management Dashboard**

An interview-focused, production-style MERN project — not just a CRUD tutorial. WorkSphere gives enough real-world complexity to practice React deeply while keeping the scope manageable.

A user can register, log in, create/manage projects, manage tasks, view analytics, receive notifications, update settings, and access features according to their role.

---

## 1. Project Goal

Build a multi-user SaaS project-management platform covering:

- React → primary learning focus
- Node.js + Express → REST APIs
- MongoDB + Mongoose → persistence
- JWT → authentication
- Role-based authorization
- Responsive dashboard
- Charts
- Data tables (search / filter / sort / pagination)
- Notifications
- Activity / audit history
- Testing
- Docker
- CI/CD concepts
- Production deployment

## 2. High-Level Architecture

Traditional frontend/backend separation:

```
                    ┌──────────────────────┐
                    │       Browser        │
                    │                      │
                    │   React Application  │
                    └──────────┬───────────┘
                               │
                         HTTP / REST API
                               │
                               ▼
                    ┌──────────────────────┐
                    │    Express Server    │
                    │                      │
                    │ Routes / Controllers │
                    │ Middleware / Services│
                    └──────────┬───────────┘
                               │
                         Mongoose / ODM
                               │
                               ▼
                    ┌──────────────────────┐
                    │       MongoDB        │
                    │                      │
                    │ Users / Projects     │
                    │ Tasks / Notifications│
                    │ Activities / etc.    │
                    └──────────────────────┘
```

Later we'll introduce:

```
React
 │
 ├── Authentication
 ├── API Client
 ├── Global State
 ├── Routing
 ├── UI Components
 ├── Pages
 └── Features
        │
        ▼
      REST API
        │
        ▼
   Express/Node
        │
        ├── Auth Middleware
        ├── Validation
        ├── Controllers
        ├── Services
        └── Models
               │
               ▼
            MongoDB
```

## 3. Technology Stack

### Frontend

| Technology | Purpose |
|---|---|
| React | UI |
| React Router | Routing |
| JavaScript / TypeScript | Application logic |
| Axios/fetch | API communication |
| Tailwind CSS | Styling |
| React Hook Form | Forms |
| Zod | Validation |
| Recharts | Charts |
| Vitest | Unit testing |
| React Testing Library | Component testing |

We won't introduce every library immediately. **Important:** understand React fundamentals using normal React APIs before hiding them behind libraries.

### Backend

| Technology | Purpose |
|---|---|
| Node.js | Runtime |
| Express.js | REST API |
| MongoDB | Database |
| Mongoose | MongoDB ODM |
| JWT | Authentication |
| bcrypt | Password hashing |
| multer | File upload |
| express-validator/Zod | Validation |
| Morgan/Pino | Logging |

### Development Tools

Git, GitHub, VS Code, Postman / Thunder Client, MongoDB Compass, Docker, Docker Compose, Jest/Vitest, ESLint, Prettier

Later: GitHub Actions, CI/CD, cloud deployment, environment variables, production logging.

## 4. Core Features — Development Phases

**Phase 1 — Foundation**
Project setup, React setup, Express setup, MongoDB connection, environment variables, Git workflow.

**Phase 2 — React Fundamentals**

```
Components → JSX → Props → State → Events → Conditional rendering → Lists → Forms → Reusable components
```

These won't just be theoretical exercises — they'll become actual dashboard components.

## 5. Feature Roadmap

### Step 1 — Project Setup
Build: React frontend + Express backend + MongoDB connection.
Learn: React, Vite, component structure, JSX, props, basic state, reusable components; Node, Express, middleware, environment variables, MongoDB connection.

### Step 2 — Application Layout

```
┌──────────────────────────────────────┐
│ Navbar                               │
├───────────┬──────────────────────────┤
│           │                          │
│ Sidebar   │       Dashboard          │
│           │                          │
│ Dashboard │                          │
│ Projects  │                          │
│ Tasks     │                          │
│ Analytics │                          │
│ Settings  │                          │
│           │                          │
└───────────┴──────────────────────────┘
```

Learn: component composition, props, children, reusable/layout components, conditional rendering, responsive design.

### Step 3 — Routing
Implement: `/`, `/login`, `/register`, `/dashboard`, `/projects`, `/projects/:id`, `/tasks`, `/analytics`, `/profile`, `/settings`, `/admin`.
Learn: React Router, nested routes, route parameters, navigation, protected routes, 404 pages.

### Step 4 — Authentication
Flow: Register → Login → JWT → Authenticated user → Dashboard.

API:
```
POST /api/auth/register
POST /api/auth/login
GET  /api/auth/me
POST /api/auth/logout
```

Learn (React): authentication state, forms, controlled inputs, `useEffect`, custom hooks, protected routes.
Learn (Backend): JWT, bcrypt, middleware, authentication, authorization.

### Step 5 — User Profile
Fields: Name, Email, Avatar, Role, Password.

API:
```
GET    /api/users/me
PATCH  /api/users/me
PATCH  /api/users/me/password
```

Learn: form handling, validation, API integration, loading/error states, optimistic UI concepts.

### Step 6 — Projects CRUD
First major full-stack feature. Users can create/read/update/delete projects.

API:
```
GET    /api/projects
GET    /api/projects/:id
POST   /api/projects
PATCH  /api/projects/:id
DELETE /api/projects/:id
```

Learn: CRUD, REST API, MongoDB, Mongoose, React API calls, reusable forms, modal components.

### Step 7 — Tasks
Projects contain tasks.

Task fields: `title`, `description`, `status`, `priority`, `assignee`, `dueDate`, `project`, `createdBy`.
Statuses: Todo, In Progress, Completed.

Learn: relational thinking in MongoDB, references, filtering, reusable components, drag/drop concepts.

### Step 8 — Data Tables
Professional task table with pagination, sorting, filtering, search, page size. Very important for React interviews.

### Step 9 — Search + Debouncing
Instead of firing a request on every keystroke, wait 300–500ms before sending.
Learn: `useEffect`, dependency arrays, debouncing, cleanup, API optimization.

### Step 10 — Dashboard Analytics
Stat cards (Projects / Tasks / Completed) plus a task-completion trend chart.
Learn: derived data, API aggregation, charts, memoization, performance.

### Step 11 — Notifications
E.g. "You were assigned a new task", "Project deadline is tomorrow", "Your profile was updated".
Learn: state updates, polling concepts, notification UI, unread/read state, eventually WebSocket/Socket.IO concepts.

### Step 12 — Role-Based Access Control
Roles: Admin, Manager, Member.

| Feature | Admin | Manager | Member |
|---|---|---|---|
| Dashboard | ✅ | ✅ | ✅ |
| Projects | ✅ | ✅ | 👁️ |
| Create Project | ✅ | ✅ | ❌ |
| Delete Project | ✅ | ❌ | ❌ |
| Users | ✅ | ❌ | ❌ |
| Settings | ✅ | ✅ | Own |

Learn: authorization, route guards, conditional UI, backend authorization, security.
**Important interview point:** hiding a button in React is not security — the backend must enforce permissions.

### Step 13 — Admin Dashboard
Shows: Total Users, Active Users, Projects, Tasks, Recent Activities. Can manage Users, Roles, Projects.
Learn: role-based UI, reusable tables, dashboard architecture, aggregation APIs.

### Step 14 — File Upload
Profile avatar, project attachments, task attachments.
Learn: multipart/form-data, file validation, upload handling, frontend preview, backend file processing, storage architecture.

### Step 15 — Activity / Audit History
E.g. "Nisha created project 'SaaS Dashboard'", "Rahul updated task 'Login API'", "Admin changed Amit's role".
Learn: audit logging, timestamps, MongoDB schema design, activity feeds. Particularly useful for explaining real-world SaaS architecture in interviews.

### Step 16 — Settings
Profile Settings, Security, Notification Preferences, Appearance.
React concepts: forms, reusable inputs, Context, custom hooks, state management.

### Step 17 — Error Handling
States: Loading → Success → Empty → Error, with retry affordances.
Learn: error boundaries, API errors, retry, error states, fallback UI.

### Step 18 — React Performance
Only after the application works will we optimize it: `React.memo`, `useMemo`, `useCallback`, `lazy()`, `Suspense`, code splitting, debouncing, virtualization — and importantly, when *not* to use memoization (a common interview topic).

### Step 19 — State Management
Start with `useState`, `useReducer`, `useContext`, then evaluate whether an external state manager (e.g. Redux Toolkit) is actually necessary. You'll learn the interview answer to "Why didn't you put everything into Redux?"

### Step 20 — Testing
Frontend: component tests, integration tests, user interaction tests.
Backend: API tests, authentication tests, CRUD tests, authorization tests.

### Step 21 — Security
Password hashing, JWT, authorization, CORS, Helmet, input validation, rate limiting, HTTP security, environment variables, no sensitive data in frontend — plus common vulnerabilities at a practical level.

### Step 22 — Docker
`docker-compose` with `frontend`, `backend`, `mongodb` services.
Learn: Dockerfile, images, containers, networking, environment variables, production builds.

### Step 23 — CI/CD
`git push` → GitHub Actions → Lint → Test → Build → Deploy.
Learn: CI/CD, automated testing, deployment pipelines.

### Step 24 — Production Deployment
React → frontend hosting; Node/Express → backend hosting; MongoDB → cloud database.
Discuss: production environment variables, CORS configuration, build process, logging, monitoring, deployment architecture.

## 6. Database Design

Initial MongoDB collections: `users`, `projects`, `tasks`, `notifications`, `activities`.
Later: `refreshTokens`, `attachments`.

**User**
- name, email, passwordHash, avatar, role, isActive, createdAt, updatedAt

**Project**
- name, description, owner, members[], status, createdAt, updatedAt

**Task**
- title, description, project, assignee, createdBy, status, priority, dueDate, createdAt, updatedAt

**Notification**
- user, type, title, message, isRead, createdAt

**Activity**
- user, action, entityType, entityId, metadata, createdAt

## 7. Backend Folder Structure

```
backend/
│
├── src/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── user.controller.js
│   │   ├── project.controller.js
│   │   └── task.controller.js
│   │
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   ├── error.middleware.js
│   │   └── role.middleware.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   ├── Project.js
│   │   ├── Task.js
│   │   ├── Notification.js
│   │   └── Activity.js
│   │
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── user.routes.js
│   │   ├── project.routes.js
│   │   └── task.routes.js
│   │
│   ├── services/
│   │   ├── auth.service.js
│   │   ├── project.service.js
│   │   └── task.service.js
│   │
│   ├── utils/
│   │   ├── jwt.js
│   │   └── response.js
│   │
│   ├── app.js
│   └── server.js
│
├── .env
├── .env.example
├── package.json
└── README.md
```

Separation of concerns:

```
Route → Controller → Service → Model → MongoDB
```

## 8. React Folder Structure

```
frontend/
│
├── src/
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   ├── common/
│   │   ├── layout/
│   │   ├── forms/
│   │   ├── tables/
│   │   └── charts/
│   │
│   ├── features/
│   │   ├── auth/
│   │   ├── dashboard/
│   │   ├── projects/
│   │   ├── tasks/
│   │   ├── notifications/
│   │   └── users/
│   │
│   ├── hooks/
│   │
│   ├── pages/
│   │
│   ├── routes/
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── context/
│   │
│   ├── utils/
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .env
├── package.json
└── README.md
```

**Why `features/`?** Instead of putting everything into `components/`, business functionality is organized by feature (`projects/`, `tasks/`, `auth/`) — closer to the architecture found in larger React applications.

## 9. React Learning Progression

```
Level 1 — Components, JSX, Props, Events, State
Level 2 — Forms, Conditional rendering, Lists, Keys
Level 3 — useEffect, API calls, Loading/Error
Level 4 — Router, Authentication, Context, Custom Hooks
Level 5 — Tables, Pagination, Search, Filtering, Debouncing
Level 6 — useMemo, useCallback, React.memo, Lazy loading, Code splitting
Level 7 — State management, Architecture, Testing, Error boundaries
Level 8 — Performance, Security, Production architecture
```

## 10. API Architecture

```
/api/auth
/api/users
/api/projects
/api/tasks
/api/notifications
/api/activities
/api/admin
```

Example (Projects):
```
GET    /api/projects
POST   /api/projects
GET    /api/projects/:id
PATCH  /api/projects/:id
DELETE /api/projects/:id
```

HTTP status codes covered as each API is implemented: `200 OK`, `201 Created`, `400 Bad Request`, `401 Unauthorized`, `403 Forbidden`, `404 Not Found`, `409 Conflict`, `500 Internal Server Error`.

## 11. Development Workflow

For every major feature:

1. Understand requirement
2. Design UI
3. Design React components
4. Design API
5. Design MongoDB model
6. Implement backend
7. Test API
8. Implement React UI
9. Integrate API
10. Handle loading/error/empty states
11. Test frontend
12. Refactor
13. Git commit
14. Interview questions

## 12. Git Strategy

Feature-based branches and commits:

```bash
git checkout -b feature/project-crud
git add .
git commit -m "feat: add project CRUD API"
git commit -m "feat: add project management UI"
git commit -m "test: add project API tests"
```

Commit prefixes: `feat`, `fix`, `refactor`, `test`, `docs`, `chore`.

## 13. Interview Strategy

Every completed feature produces an interview section, e.g. after authentication:

**Beginner** — Q: What is JWT?
A: JWT is a token-based authentication mechanism. After successful login, the server issues a signed token that the client uses to authenticate subsequent requests.

**Intermediate** — Q: Authentication vs authorization?
A: Authentication determines who the user is; authorization determines what that user is allowed to do.

**Advanced** — Q: Why shouldn't frontend role checks be considered security?
A: Frontend code can be modified or bypassed — the backend must independently verify the user's role and permissions before allowing protected operations.

## 14. Additional Features (Later, If Core Is Stable)

**Multi-tenancy:** `Organization → Users → Projects → Tasks` — makes the project genuinely SaaS-like.

**Subscription/Billing simulation** (feature gating, no real payment integration needed):
- Free → 3 projects
- Pro → 20 projects
- Enterprise → unlimited

## 15. Target Final Interview Explanation

> "I built a multi-user SaaS project-management platform using React, Node.js, Express and MongoDB. The frontend follows a feature-based architecture with reusable components, protected routes, custom hooks and centralized API handling. The backend uses REST APIs with controller/service separation, JWT authentication and role-based authorization. MongoDB stores users, projects, tasks, notifications and audit activities. I implemented server-side pagination, filtering and sorting, dashboard analytics, form validation, error/loading states and automated tests. I also optimized the React application using code splitting and selective memoization and containerized the application using Docker."

This statement will be built from the actual implementation — no memorization required.

## 16. Complete Roadmap

| Step | Feature | Main React Focus |
|---|---|---|
| 0 | Architecture & planning | Architecture |
| 1 | Project setup | JSX, Components |
| 2 | Dashboard layout | Props, Composition |
| 3 | Routing | React Router |
| 4 | Authentication | Forms, State, Effects |
| 5 | Profile | Forms, Custom Hooks |
| 6 | Projects CRUD | API + State |
| 7 | Tasks | Components + CRUD |
| 8 | Data tables | Lists, Pagination |
| 9 | Search/filter | Effects + Debouncing |
| 10 | Analytics | Memoization + Data |
| 11 | Notifications | State + Effects |
| 12 | RBAC | Context + Protected UI |
| 13 | Admin dashboard | Architecture |
| 14 | File upload | Forms + API |
| 15 | Activity history | Data architecture |
| 16 | Settings | Forms + Context |
| 17 | Error handling | Error boundaries |
| 18 | Performance | Memoization |
| 19 | State management | Context/Redux |
| 20 | Testing | RTL + API tests |
| 21 | Security | Full-stack security |
| 22 | Docker | Production |
| 23 | CI/CD | DevOps |
| 24 | Deployment | Production architecture |
| 25 | Final interview prep | System/project design |

## 17. Rule Going Forward

We will not jump directly to Step 1's code yet. For each step, coverage includes:

📌 Goal · 🧠 Concepts · 🏗 Architecture · 📁 Files · 💻 Implementation · 🔌 API · 🗄 Database · 🧪 Testing · 🐛 Common mistakes · ✅ Best practices · 🎤 Interview questions · 💡 Interview-ready answers · 📝 Git commit

Some portions of code will be written by the learner first, reviewed, and then followed by the production-quality version — making this a learning project, not a copy-paste project.

---

**Step 0 complete ✅ — Next: Step 1 — Project Setup**

We'll create the actual project (`worksphere/frontend`, `worksphere/backend`), then set up React + Vite, Node + Express, MongoDB, environment variables, Git, and the first frontend/backend connection.
