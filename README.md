# About repo
- Nothing just learning and building react project.

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
