# Vite React Project

## Project Overview
This is a simple React project built using Vite. The project has two main pages:

1. **Signup Page**: A page where users can sign in.
2. **Repositories Page**: A page displaying repositories. When a user clicks on the logout button, they are navigated back to the Signup page.

This is a static project and does not include backend functionality.

---

### Key Packages:
- **React**: Library for building user interfaces.
- **React DOM**: Provides DOM-specific methods for React.
- **React Router DOM**: Enables navigation and routing between pages.

---

### Pages:
- **Signup.jsx**: Contains the static signup/signin page.
- **Repositories.jsx**: Displays repositories and includes a logout button.

---

## Navigation Flow
1. User lands on the **Signup Page**.
2. On successful navigation (e.g., clicking a button), the user is taken to the **Repositories Page**.
3. When the user clicks the logout button on the **Repositories Page**, they are redirected back to the **Signup Page**.
