
# Spring Life

**Spring Life** is a modern career counseling and services platform designed to help students and professionals connect with expert counselors, book sessions, and access valuable resources for career growth. The platform features secure authentication, protected routes, dynamic service listings, and a responsive, user-friendly interface.

**Live link:** https://spring-life-ab760.web.app/

---

## Technologies Used
- **JavaScript (ES6+)**: For application logic and interactivity.
- **React.js**: For building a dynamic and interactive user interface.
- **React Router**: For navigation and routing between pages.
- **Tailwind CSS**: For responsive and modern styling.
- **Firebase**: For authentication and backend services.
- **Context API**: For global state management.
- **React Toastify**: For user notifications.
- **Swiper**: For interactive sliders and carousels.
- **Vite**: For fast development and build tooling.

---

## Key Features

**1. User Authentication**
   - Secure login with email/password and Google.
   - Authentication state is persisted and managed globally.
   - Protected routes ensure only authenticated users can access sensitive pages.

**2. Service Listings**
   - Browse a variety of career counseling services.
   - View detailed information about each service.
   - Data is dynamically loaded from JSON.

**3. Responsive Design**
   - Fully responsive layout using Tailwind CSS.
   - Optimized for mobile, tablet, and desktop devices.

**4. Error Handling**
   - Custom 404 error page with an illustration and a "Back to Home" button.
   - Ensures users are guided back to the main page when they encounter an invalid route.

**5. Toast Notifications**
   - User feedback for actions like login, logout, and errors using React Toastify.

**6. Protected Routing**
   - Users are redirected to the login page if they try to access protected routes without authentication.
   - After login, users are redirected to their originally intended page.

---

## React Fundamental Concepts Used

1. **Components:** Modular UI components such as Navbar, BannerSlider, ServicesCard, and ErrorPage.
2. **Props:** Passing data between components (e.g., service details to ServicesCard).
3. **State:** Managing local and global state using `useState` and Context API.
4. **Hooks:**
   - `useEffect`: For side effects like fetching data.
   - `useContext`: For accessing authentication and global state.
   - `useLocation`, `useNavigate`, `useParams`: For routing and navigation logic.
5. **Routing:** Nested and dynamic routes implemented with React Router.

---

## ES6 Features Used

1. **Arrow Functions:** For concise function expressions (e.g., `const handleLogin = () => { ... }`).
2. **Template Literals:** For dynamic class names and JSX content (e.g., ``className={`text-lg ${isActive ? 'text-primary' : ''}`}``).
3. **Destructuring:** To extract data from props and API responses (e.g., `const { id, serviceName } = item`).
4. **Spread Operator:** For copying and updating arrays/objects (e.g., `setItems([...items, newItem])`).

---

## How to Run the Project

Clone the repository:
```bash
git clone git@github.com:jabirstain3/gadget_heaven.git
```

Navigate to the project directory:
```bash
cd spring_life
```

Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm run dev
```

Open the application in your browser at [http://localhost:5173](http://localhost:5173)

---

**Enjoy exploring and planning your career with Spring Life!**