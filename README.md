# Task Tracker Pro

An interactive task management board built using core **Vanilla JavaScript**. It features dynamic task generation, priority classification, status filtering, and a global light/dark theme switcher.

---

## 🚀 Live Demo
[View Live Demo](https://kamran934.github.io/interactive-task-tracker/)

---

## ✨ Features
* **Dynamic Task Management**: Add and delete tasks seamlessly with real-time DOM element lifecycle handling (`createElement`, `appendChild`, `remove`).
* **Priority Tagging**: Assign and visualize task urgency (Low, Medium, High) with color-coded borders driven by custom `data-priority` attributes.
* **Multi-Criteria Filter Pipeline**: Filter tasks instantaneously between All, Active, and Completed views.
* **Live Incomplete Counter**: Tracks and updates remaining active tasks dynamically as completion states change.
* **Global Theme Switcher**: Full Light/Dark mode implementation toggling theme rules across `document.body` via `classList.toggle()`.

---

## 🛠️ Built With
* **JavaScript (ES6+)**: Event delegation, class state toggling (`classList.toggle`), string sanitization (`trim`), and dynamic selector queries (`querySelectorAll`).
* **HTML5**: Structured semantic inputs, custom options, and data containers.
* **CSS3**: CSS variables/theming, custom transitions, scrollable containers, and Flexbox.

---

## 💻 Getting Started

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/kamran934/interactive-task-tracker.git](https://github.com/kamran934/interactive-task-tracker.git)
