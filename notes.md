# lifecycle Events
- The first render of the component on to the DOM is known as lifecycle event.

1. Mounting (Birth of Component)

👉 When the component is created and added to the screen (DOM).

Example:

* You open a page.
* A `Login` component appears.
* That means it is **mounted**.


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

* In **Class Components**, we had:

  * `componentDidMount()`
  * `componentDidUpdate()`
  * `componentWillUnmount()`

* In **Function Components**, we use:

  * `useEffect()` to handle all lifecycle events.

# useEffect:

    `useEffect` does **not always run only on mount**.
    It depends on the **dependency array**.

    ---

    ## 1️⃣ Case 1: No dependency array

    ```js
    useEffect(() => {
        console.log("Effect runs");
    });
    ```

    👉 This runs:

    * After **every render**
    * First mount ✅
    * Every re-render ✅

    So here it is **NOT ignored during re-rendering**.

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

    Your statement is **partially correct**, but more accurate version is:

    * The effect runs after rendering.
    * It runs on mount and also on re-render depending on dependencies.
    * The returned function runs before unmounting and before the next effect execution.
