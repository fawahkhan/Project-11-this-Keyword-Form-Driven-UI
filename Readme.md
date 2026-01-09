# Project 11 – `this` Keyword & Form-Driven UI

A small web app that collects user details from a form, stores them as objects, and renders profile cards dynamically. The focus is practicing JavaScript object methods, the `this` keyword in different contexts, and wiring form events to UI updates.

## What this project showcases
- **`this` binding in object methods**: `userManager.init()` binds `this` to the object when attaching the submit handler (`this.submitForm.bind(this)`) so methods can access shared state (`this.users`).
- **Event handling flow**: On form submit, `submitForm` prevents default page reload, delegates to `addUser`, then re-renders the UI.
- **Stateful object pattern**: A single `userManager` object owns `users` state and related behaviors (`init`, `submitForm`, `addUser`, `renderUi`).
- **DOM creation from data**: `renderUi` loops over `users` to create and append card elements (image, name, role, bio) into the `.users` container.
- **Form → data → UI pipeline**: Reads input values, pushes a normalized user object, clears the form, and updates the view.

## How the app works
1. **Initialize**: `userManager.init()` attaches a `submit` listener to the form. `bind` ensures `this` inside the handler refers to `userManager`.
2. **Submit**: The handler prevents default navigation, then calls `addUser()`.
3. **Add user**: Reads the four fields (name, role, bio, photo URL), pushes an object into `users`, resets the form, and calls `renderUi()`.
4. **Render**: For each user, a card is built with Tailwind utility classes and appended to `.users`.

## `this` keyword notes
- **Method call (`obj.method()`)**: Inside `submitForm`, `addUser`, `renderUi`, `this` refers to `userManager` because they are invoked as methods on the object.
- **Event listener pitfalls**: Passing a bare function to `addEventListener` would set `this` to the DOM element (the form). Using `.bind(this)` preserves the object context.
- **Callback `this`**: Inside `renderUi`, a plain function callback would have `this` as `undefined`/`window` (depending on mode). Use an arrow function or `.bind(this)` to keep access to `userManager`.

## What I learned
- Building and using a stateful object to group related data (`users`) and behaviors (init, submit, add, render).
- How `this` changes across scenarios: object methods, event listeners, and callbacks—and how `.bind` or arrow functions fix context.
- Preventing default form submission to stay on the page and manage custom UI updates.
- Reading form values, resetting the form, and re-rendering UI from in-memory state.
- Creating DOM nodes programmatically (images, headings, paragraphs) and styling them with Tailwind classes.

## Run it
- Open [index.html](index.html) in a browser (Tailwind is loaded from CDN).
- Fill in Name, Role, Bio, and a valid Photo URL, then submit.
- Each submit adds a new profile card to the grid.

## Possible improvements
- Clear `.users` before re-rendering to avoid duplicates if re-render is called multiple times.
- Use arrow functions in `renderUi` to keep `this` automatically.
- Add delete/edit actions per card.
- Add basic validation or placeholder images for broken URLs.
- Persist `users` in `localStorage` so cards survive reloads.
