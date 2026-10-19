---
tags:
  - javascript
  - mern
---
---

Everything in JavaScript happens inside an ==Execution Context==.

![[excalidraw-images/Drawing 2026-10-20 03.14.10.excalidraw]]

Execution Context has  2 components:
1. Memory components
2. Code Components

### Memory Components:
-  This is the place where variables and functions stored as  key-value pairs.
-  Memory component is also known as ==Variable Environment==.

### Code Components:
- This is the place where code executed, one line at a time.
- It's also known as thread of execution.

---

JavaScript is a synchronous single-threaded language.

- It means JavaScript runs one command at a time and within a specific order or synchronous order.
- It will jump to next line, only when current execution is finished.
