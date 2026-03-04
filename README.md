# CS — Ticket System

A modern, responsive React-based **Customer Support Zone** designed to streamline ticket management, track progress, and improve response times. Built with React.js, Tailwind CSS, and React-Toastify for an enhanced user experience.

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Usage](#-usage)
- [React Concepts Explained](#-react-concepts-explained)
- [Project Rules](#-project-rules)
- [Deployment](#-deployment)

---

## ✨ Features

### ✅ Navbar
- Website logo/name on the left
- Navigation menu items (Home, FAQ, Changelog, Blog, Download, Contact)
- "+ New Ticket" button on the right
- Mobile hamburger menu with smooth slide-in animation from right to left
- Fully responsive design

### ✅ Banner Section
- Linear gradient background (Purple for In-Progress, Green for Resolved)
- Displays real-time ticket statistics:
  - **In Progress Count** - Updates dynamically
  - **Resolved Count** - Starts at 0, increases on completion
- Responsive grid layout (2 columns on desktop, stacked on mobile)

### ✅ Main Section

#### Customer Tickets (Left Side)
- 2-column grid layout of ticket cards
- Each card displays:
  - Ticket ID and Title
  - Description (truncated to 2 lines)
  - Status badge (Open, In-Progress, Resolved)
  - Priority level (High, Medium, Low) with color coding
  - Customer name with icon
  - Created date with calendar icon
- Click any ticket to add it to Task Status
- Hover effects and transitions for better UX

#### Task Status (Right Side)
- Shows selected tickets in-progress
- Displays ticket title for each task
- "Complete" button to mark ticket as resolved
- Shows count and list of completed tasks

### ✅ Footer
- Dark theme footer with multiple sections:
  - Company information and description
  - Company links (About Us, Our Mission, Contact Sales)
  - Services links (Products & Services, Customer Stories, Download Apps)
  - Information links (Privacy Policy, Terms & Conditions, Join Us)
  - Social links with icons (Twitter, Facebook, Instagram, Email)
- 5-column grid layout on desktop, responsive 2-column and single column on smaller devices
- Copyright section

### ✅ Responsiveness
- Mobile-first responsive design
- Optimized for mobile (320px+), tablet (768px+), and desktop (1024px+)
- Touch-friendly interactive elements
- Hamburger menu for mobile navigation

### ✅ React-Toastify Integration
- Toast notifications replace all alerts
- Success notifications when adding/completing tickets
- Error handling with toast feedback
- Customizable toast styling and duration

---

## 🛠 Tech Stack

- **Frontend Framework**: React.js 18+
- **Styling**: Tailwind CSS 4
- **UI Components**: DaisyUI 5
- **Icons**: React Icons (FontAwesome 6)
- **Build Tool**: Vite
- **Notifications**: React-Toastify
- **Version Control**: Git

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx           # Navigation with mobile slide menu
│   ├── Banner.jsx           # Statistics display (In-Progress & Resolved)
│   ├── ProgressCard.jsx     # Individual stats card with gradient & pattern
│   ├── TicketCard.jsx       # Individual ticket card component
│   ├── TicketsContainer.jsx # Main container with 2-column layout
│   ├── TaskStatus.jsx       # Task management sidebar
│   └── Footer.jsx           # Footer with multiple sections
├── data/
│   └── tickets.js           # Sample ticket data (15 tickets)
├── assets/
│   ├── vector1.png          # Background pattern for cards
│   └── vector2.png          # Alternative pattern
├── App.jsx                  # Main app component with state management
├── index.css                # Global styles & Tailwind directives
└── main.jsx                 # React entry point
```

---

## 🚀 Installation

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/tirthorajmondal/CS-Ticket-System.git
   cd CS-Ticket-System
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```


3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

---

## 💻 Usage

### Running Locally

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Key Interactions

#### Adding a Ticket to Task Status
1. Click on any ticket card in the "Customer Tickets" section
2. Toast notification confirms the action
3. Ticket appears in "Task Status" section on the right
4. "In Progress" count in banner increases by 1

#### Completing a Ticket
1. Click the "Complete" button on a task in "Task Status"
2. Toast notification confirms completion
3. Ticket is removed from Task Status
4. Ticket moves to "Resolved Task" section
5. "In Progress" count decreases by 1
6. "Resolved" count increases by 1
7. Ticket is removed from main "Customer Tickets" list

---

## 📚 React Concepts Explained

### What is JSX, and why is it used?

**JSX** (JavaScript XML) is a syntax extension that allows you to write HTML-like code within JavaScript. It makes React code more readable and intuitive.

**Example:**
```jsx
const Card = ({ title, count }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{count}</p>
    </div>
  );
};
```

**Why use JSX:**
- ✅ More readable and maintainable code
- ✅ Closer to HTML syntax developers are familiar with
- ✅ Combines structure (HTML) and logic (JavaScript) in one place
- ✅ Better error messages and debugging

JSX is compiled to `React.createElement()` calls by Babel before execution.

---

### What is the difference between State and Props?

| Feature | State | Props |
|---------|-------|-------|
| **Definition** | Data managed within a component | Data passed from parent to child |
| **Mutability** | Can be changed using `setState` | Immutable (read-only) |
| **Scope** | Local to component | Passed down the component tree |
| **Default Values** | Set in `useState` hook | Defined with default values |
| **Updates** | Changes trigger re-render | Changes cause child to re-render |
| **Example** | `const [count, setCount] = useState(0)` | `<Card title={title} />` |

**Example in this project:**
```jsx
// State - managed in App.jsx
const [tickets, setTickets] = useState(ticketsData);
const [inProgressCount, setInProgressCount] = useState(0);

// Props - passed to components
<TicketCard ticket={ticket} onCardClick={handleAddToTask} />
<ProgressCard title="In-Progress" count={inProgressCount} />
```

---

### What is the useState hook, and how does it work?

**useState** is a React hook that allows functional components to have state. It returns a state variable and a function to update it.

**Syntax:**
```jsx
const [state, setState] = useState(initialValue);
```

**How it works:**
1. `useState` takes an initial value
2. Returns an array with 2 elements:
   - First: current state value
   - Second: function to update the state
3. When state updates, component re-renders with new value

**Example in this project:**
```jsx
const [inProgressTickets, setInProgressTickets] = useState([]);

// Add ticket to in-progress
const handleAddToTask = (ticket) => {
  setInProgressTickets([...inProgressTickets, ticket]);
  // Component re-renders automatically
};

// Complete ticket
const handleComplete = (ticketId) => {
  setInProgressTickets(
    inProgressTickets.filter(t => t.id !== ticketId)
  );
};
```

---

### How can you share state between components in React?

**Solution: Lift state up to a common parent component**

State should be managed at the highest component where it's needed, then passed down via props.

**Pattern:**
```jsx
// App.jsx (Parent) - manages global state
const App = () => {
  const [tickets, setTickets] = useState(ticketsData);
  const [inProgressCount, setInProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);

  // Pass state & update functions to children
  return (
    <>
      <Banner inProgressCount={inProgressCount} resolvedCount={resolvedCount} />
      <TicketsContainer tickets={tickets} onAddToTask={handleAddToTask} />
      <TaskStatus tasks={inProgressTasks} onComplete={handleComplete} />
    </>
  );
};
```

**Benefits:**
- ✅ Single source of truth
- ✅ Easier to debug
- ✅ Avoids prop drilling with Context API for large apps
- ✅ Clear data flow (parent → children)

---

### How is event handling done in React?

Event handling in React uses camelCase syntax and passes function references (or handlers).

**Common Events:**
```jsx
<button onClick={handleClick}>Click Me</button>
<input onChange={handleChange} />
<form onSubmit={handleSubmit}>
<div onHover={handleHover}>Hover</div>
```

**Example in this project:**
```jsx
// Click handler on Ticket Card
const TicketCard = ({ ticket, onCardClick }) => {
  return (
    <div onClick={() => onCardClick(ticket)}>
      {ticket.title}
    </div>
  );
};

// Using the handler
<TicketCard 
  ticket={ticketData} 
  onCardClick={(ticket) => {
    setInProgressTickets([...inProgressTickets, ticket]);
    toast.success("Ticket added to Task Status!");
  }}
/>
```

**Event Object:**
```jsx
const handleChange = (event) => {
  console.log(event.target.value); // Access input value
};

const handleSubmit = (event) => {
  event.preventDefault(); // Prevent default form behavior
};
```

**Key Points:**
- ✅ Use camelCase: `onClick`, `onChange`, `onSubmit`
- ✅ Pass function reference or arrow function
- ✅ Event object automatically passed to handler
- ✅ Use `preventDefault()` for forms

---

## ✅ Project Rules

- ✅ Built with **React.js** (no other frameworks allowed)
- ✅ **Responsive design** works on all devices
- ✅ **No dummy text** - all data is meaningful
- ✅ **At least 5 meaningful commits** in git history
- ✅ **React-Toastify** used for all notifications
- ✅ **Tailwind CSS** for styling (DaisyUI optional)

---

## 🌐 Deployment

### Live Demo
**URL:** https://cs-ticket-system-by-tirtho.netlify.app

### GitHub Repository
**URL:** https://github.com/tirthorajmondal/CS-Ticket-System

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Drag and drop 'dist' folder to Netlify
```

---


## 📧 Support

For questions or issues:
- Create an issue in the GitHub repository
- Contact: tirthorajmondal@gmail.com

---

## 📄 License

This project is part my personal practice.

---

**Happy coding! 🚀**
