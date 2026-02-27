# lifecycle Events
        - The first render of the component on to the DOM is known as lifecycle event.

        1. Mounting (Birth of Component)

        👉 When the component is created and added to the screen (DOM).

        Example:

        * You open a page.
        * A `Login` component appears.
        * That means it is mounted.


        2. Updating (Component Changes)

        👉 When component data (state or props) changes.

        Example:

        * You click a button.
        * Counter increases.
        * Component re-renders.

        3. Unmounting (Component Removed)

        👉 When component is removed from screen.

        Example:

        * You change page.
        * Previous component disappears.


        The `return` function inside `useEffect` runs when component is removed.

        - In Short

        | Phase      | What Happens         |
        | ---------- | -------------------- |
        | Mounting   | Component created    |
        | Updating   | Component re-renders |
        | Unmounting | Component removed    |

        - Important

        * In Class Components, we had:

        * `componentDidMount()`
        * `componentDidUpdate()`
        * `componentWillUnmount()`

        * In Function Components, we use:

        * `useEffect()` to handle all lifecycle events.

# useEffect:

        `useEffect` does not always run only on mount.
        It depends on the dependency array.

        ---

        ## 1️⃣ Case 1: No dependency array

        ```js
        useEffect(() => {
            console.log("Effect runs");
        });
        ```

        👉 This runs:

        * After every render
        * First mount ✅
        * Every re-render ✅

        So here it is NOT ignored during re-rendering.

        ---

        ## 2️⃣ Case 2: Empty dependency array `[]`

        ```js
        useEffect(() => {
            console.log("Runs only once");
        }, []);
        ```

        👉 This runs:

        * Only once after the first render (mount) ✅
        * Not on re-renders ❌

        In this case, your statement is correct.

        ---

        ## 3️⃣ Case 3: With dependencies

        ```js
        useEffect(() => {
            console.log("Runs when count changes");
        }, [count]);
        ```

        👉 This runs:

        * On mount ✅
        * Whenever `count` changes ✅
        * Not on other re-renders ❌

        ---

        # Now About the Cleanup Function

        ```js
        useEffect(() => {
            console.log("Effect");

            return () => {
            console.log("Cleanup");
            };
        }, []);
        ```

        The returned function (cleanup) runs:

        1. ✅ Before the component unmounts
        2. ✅ Before the effect runs again (if dependencies change)

        Very important:

        If dependencies exist:

        ```js
        useEffect(() => {
            console.log("Effect runs");

            return () => {
            console.log("Cleanup runs before next effect");
            };
        }, [count]);
        ```

        When `count` changes:

        1. Cleanup runs first
        2. Then effect runs again

        ---

        # 🔥 Simple Timeline Example

        If `count` changes 3 times:

        ```
        Mount:
        Effect runs

        count changes:
        Cleanup runs
        Effect runs

        count changes:
        Cleanup runs
        Effect runs

        Unmount:
        Cleanup runs
        ```

        ---

        # ✅ Final Correct Understanding

        Your statement is partially correct, but more accurate version is:

        * The effect runs after rendering.
        * It runs on mount and also on re-render depending on dependencies.
        * The returned function runs before unmounting and before the next effect execution.


 
# Error Boundary :

        Short answer:
        👉 Yes, it is important — but not in the beginning.

        Since you’re building React apps seriously, you should understand it conceptually.

        ---

        # 🧠 First, What Is an Error Boundary?

        An Error Boundary is a special React component that:

        * Catches JavaScript errors in child components
        * Prevents the whole app from crashing
        * Shows a fallback UI instead

        ---

        ## 🔴 Without Error Boundary

        If one component crashes:

        ```javascript
        throw new Error("Something broke!");
        ```

        👉 Entire React app crashes
        👉 White screen

        ---

        ## 🟢 With Error Boundary

        Instead of crashing, React shows:

        ```
        Something went wrong.
        ```

        The rest of the app still works.

        ---

        # 🔥 Why Is It Important?

        Imagine you're building:

        * Dashboard
        * Admin panel
        * E-commerce
        * SaaS product

        If one small widget crashes, you don't want the entire app to die.

        Error Boundary = Safety Net 🛟

        ---

        # ⚠️ Very Important Thing

        Error Boundaries:

        * ❌ Do NOT catch errors in event handlers
        * ❌ Do NOT catch async errors (like setTimeout)
        * ✅ Catch errors during rendering
        * ✅ Catch lifecycle method errors

        ---

        # 💡 How It Is Written

        Error Boundaries only work in Class Components.

        Example:

        ```javascript
        class ErrorBoundary extends React.Component {
        constructor(props) {
            super(props);
            this.state = { hasError: false };
        }

        static getDerivedStateFromError(error) {
            return { hasError: true };
        }

        render() {
            if (this.state.hasError) {
            return <h2>Something went wrong.</h2>;
            }

            return this.props.children;
        }
        }
        ```

        Then wrap components:

        ```javascript
        <ErrorBoundary>
        <MyComponent />
        </ErrorBoundary>
        ```

# What is `useNavigate()` ?

        `useNavigate()` is a hook from react-router-dom.

        It lets you move to another page using JavaScript.

        👉 It is programmatic navigation.

        ---

        # 🧠 Simple Meaning

        Instead of clicking a `<Link />`,
        you tell React:

        > “Go to this page now.”

        ---

        # 🔹 Basic Example

        ```jsx
        import { useNavigate } from "react-router-dom";

        function Home() {
        const navigate = useNavigate();

        return (
            <button onClick={() => navigate("/part1")}>
            Go to Part 1
            </button>
        );
        }
        ```

        When button is clicked →
        React changes URL to `/part1`.

        ---

        # 🔥 When Do We Use It?

        You use `useNavigate()` when:

        * After login → go to dashboard
        * After form submit → go to success page
        * After logout → go to home
        * If user not authenticated → redirect to login

        Example:

        ```jsx
        if (!user) {
        navigate("/login");
        }
        ```

        ---

        # 🔁 Go Back / Forward

        You can also move in history.

        ```jsx
        navigate(-1); // go back
        navigate(1);  // go forward
        ```

        Very useful for back button behavior.

        ---

        # 🧠 What Is Happening Internally?

        React Router:

        * Updates browser history
        * Changes URL
        * Finds matching `<Route>`
        * Renders that component
        * WITHOUT reloading page

        That’s why it feels fast.

        ---

        # ⚠️ Important

        `useNavigate()`:

        * Only works inside components
        * Must be used inside `<BrowserRouter>`

        ---

        # 🆚 Link vs useNavigate

        | Link              | useNavigate        |
        | ----------------- | ------------------ |
        | Used in UI        | Used in logic      |
        | Click based       | Code based         |
        | Static navigation | Dynamic navigation |

        ---

        # 🎯 Example Real Scenario

        Login form:

        ```jsx
        function Login() {
        const navigate = useNavigate();

        function handleLogin() {
            // login logic
            navigate("/dashboard");
        }

        return <button onClick={handleLogin}>Login</button>;
        }
        ```

        After login → user goes to dashboard automatically.

        ---

        # TL;DR

        `useNavigate()` lets you change page using JavaScript instead of clicking a link.


# What is Prop Drilling?

        Prop drilling happens when:

        You pass data from a parent
        ➡ through multiple middle components
        ➡ just to reach a deeply nested child.

        Even if middle components don’t need that data.

        ---

        # 🔍 Simple Example

        Imagine this structure:

        ```
        App
        └── Parent
            └── Child
                └── GrandChild
        ```

        Now suppose `App` has some state:

        ```jsx
        const [user, setUser] = useState("Rahul");
        ```

        And `GrandChild` needs `user`.

        ---

        ## ❌ What We Do (Prop Drilling)

        ```jsx
        <App>
        <Parent user={user} />
        </App>
        ```

        Then:

        ```jsx
        <Parent user={user}>
        <Child user={user} />
        </Parent>
        ```

        Then:

        ```jsx
        <Child user={user}>
        <GrandChild user={user} />
        </Child>
        ```

        Finally:

        ```jsx
        function GrandChild({ user }) {
        return <h1>{user}</h1>;
        }
        ```

        ---

        # 🚨 Problem

        * Parent doesn’t use `user`
        * Child doesn’t use `user`
        * But we still pass it down

        That unnecessary passing = Prop Drilling

        ---

        # 🎯 Why It Is Bad?

        When app becomes big:

        * Too many props
        * Hard to manage
        * Hard to maintain
        * Code becomes messy

        ---

        # 🛠 How To Avoid Prop Drilling?

        ### 1️⃣ Context API (Built-in React solution)

        Instead of passing manually,
        React provides global access.

        ---

        ### 2️⃣ State Management Libraries

        * Redux
        * Zustand
        * Recoil

        Used in large applications.

        ---

        # 🧠 Simple Analogy

        Prop drilling is like:

        You want to give money to your friend
        But you give it to your neighbor
        Then neighbor gives to someone else
        Then finally your friend gets it

        Instead of directly giving it.

        ---

        # 🔥 When Is It Okay?

        If components are just 1–2 levels deep → it's fine.

        Prop drilling becomes a problem when:

        * 3+ levels deep
        * Many props
        * Large app

        ---

        # TL;DR

        Prop drilling = passing props through many components just to reach a deeply nested child.


# What is Context API?

        Context API is a React feature that lets you:

        👉 Share data globally
        👉 Without passing props manually through every component

        ---

        # 🔥 Why We Need It?

        Remember prop drilling?

        Instead of:

        ```
        App → Parent → Child → GrandChild
        ```

        Passing `user` again and again...

        We use **Context API** to give data directly to any component.

        ---

        # 🎯 Simple Meaning

        Context API = Global data storage inside React.

        It allows:

        * Any component to access data
        * No matter how deep it is

        ---

        # 🧩 Real-Life Analogy

        Think of WiFi in your house.

        You don’t connect internet cable to every room.

        You install WiFi router once.

        Every room can access internet.

        👉 Context = WiFi
        👉 Components = Rooms

        ---

        # 🛠 How It Works (3 Steps)

        ## 1️⃣ Create Context

        ```jsx
        import { createContext } from "react";

        export const UserContext = createContext();
        ```

        ---

        ## 2️⃣ Provide Data

        Wrap components with Provider.

        ```jsx
        <UserContext.Provider value="Rahul">
        <App />
        </UserContext.Provider>
        ```

        Now all children inside `<App />` can access "Rahul".

        ---

        ## 3️⃣ Use Context

        Inside any child:

        ```jsx
        import { useContext } from "react";
        import { UserContext } from "./UserContext";

        function GrandChild() {
        const user = useContext(UserContext);
        return <h1>{user}</h1>;
        }
        ```

        No prop drilling needed ✅

        ---

        # 🔥 When To Use Context?

        Good for:

        * Theme (dark/light mode)
        * Logged-in user
        * Language settings
        * Global settings

        Not ideal for:

        * Very frequently changing state (performance reasons)
        * Very large apps (Redux better)

        ---

        # ⚠️ Important Concept

        Context avoids prop drilling
        But it does NOT replace all state management.

        Use it wisely.

        ---

        # 🧠 Internal Idea

        React stores context value
        Any component using `useContext()` subscribes to it
        If value changes → those components re-render

        ---

        # TL;DR

        Context API lets you share data globally in React
        Without passing props manually through every component.

