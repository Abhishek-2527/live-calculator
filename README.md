# 🧮 Live Calculator

A simple, responsive, and interactive **Live Calculator Web Application** built using **HTML, CSS, and JavaScript**. The project performs basic arithmetic calculations through a clean calculator interface and also supports keyboard input for a smoother user experience.

🔗 **Live Demo:** https://live-calculator-pearl.vercel.app/

🔗 **GitHub Repository:** https://github.com/Abhishek-2527/live-calculator

---

## 📌 About the Project

The **Live Calculator** is a frontend web application designed to provide a simple and user-friendly calculator experience directly in the browser.

The application allows users to perform common mathematical operations such as:

* Addition
* Subtraction
* Multiplication
* Division
* Modulus / Percentage
* Decimal calculations

It also includes utility features such as **AC (Clear All)**, **DEL (Delete)**, keyboard support, and error handling for invalid operations.

The project was developed to strengthen practical knowledge of **HTML structure, CSS styling, JavaScript DOM manipulation, event handling, and application logic**.

---

## ✨ Featuressss

### 🔢 Basic Calculations

Supports the following operations:

* `+` Addition
* `−` Subtraction
* `×` Multiplication
* `÷` Division
* `%` Modulus

### 🧹 Calculator Controls

* **AC** – Clears the complete calculator state.
* **DEL** – Removes the last entered digit.
* **=** – Calculates and displays the result.
* **.** – Supports decimal numbers.

### ⌨️ Keyboard Support

The calculator can also be controlled using the keyboard.

| Keyboard Key  | Function       |
| ------------- | -------------- |
| `0–9`         | Enter numbers  |
| `.`           | Decimal point  |
| `+`           | Addition       |
| `-`           | Subtraction    |
| `*`           | Multiplication |
| `/`           | Division       |
| `%`           | Modulus        |
| `Enter` / `=` | Calculate      |
| `Backspace`   | Delete         |
| `Escape`      | Clear          |

### ⚠️ Error Handling

The application handles division by zero and displays an error instead of producing an invalid result.

### 🔢 Decimal Validation

The calculator prevents multiple decimal points from being entered into the same number.

---

## 🛠️ Technologies Used

| Technology       | Purpose                                    |
| ---------------- | ------------------------------------------ |
| **HTML5**        | Structure of the calculator                |
| **CSS3**         | Styling, layout and responsive interface   |
| **JavaScript**   | Calculator logic and user interaction      |
| **Vercel**       | Deployment and hosting                     |
| **Git & GitHub** | Version control and source code management |

---

## 🏗️ Project Structure

```text
live-calculator/
│
├── index.html      # Calculator interface and HTML structure
├── style.css       # Styling and layout
├── script.js       # Calculator functionality and logic
└── README.md       # Project documentation
```

---

## ⚙️ How It Works

The application follows a simple flow:

```text
User Input
    ↓
Number / Operator Selection
    ↓
JavaScript Processes Input
    ↓
Calculation
    ↓
Result Displayed
```

### 1. Number Input

When the user clicks a number, JavaScript adds it to the current number and updates the calculator display.

### 2. Operator Selection

When an operator is selected, the current number is stored as the previous number and the selected operator is saved.

For example:

```text
10 + 5
```

The application internally stores:

```text
previousNumber = 10
operator = +
currentNumber = 5
```

### 3. Calculation

When the `=` button is pressed, JavaScript performs the selected operation.

For example:

```text
10 + 5 = 15
```

The calculation logic handles:

```text
Addition       → firstNumber + secondNumber
Subtraction    → firstNumber - secondNumber
Multiplication → firstNumber * secondNumber
Division       → firstNumber / secondNumber
Modulus        → firstNumber % secondNumber
```

### 4. Display Update

The calculator dynamically updates the current and previous values using JavaScript DOM manipulation.

---

## 🧠 JavaScript Logic

The main JavaScript functionality is divided into several functions:

### `appendNumber()`

Handles number and decimal input while preventing multiple decimal points.

### `chooseOperator()`

Stores the selected mathematical operator and prepares the calculator for the next number.

### `calculate()`

Performs the selected mathematical operation and displays the result.

### `clearDisplay()`

Resets the calculator completely.

### `deleteNumber()`

Removes the last entered character from the current number.

### `updateDisplay()`

Updates the calculator interface whenever the internal values change.

### Keyboard Event Listener

The application listens for keyboard events so users can operate the calculator without clicking every button.

---

## 🚀 Running the Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/Abhishek-2527/live-calculator.git
```

### 2. Open the project

```bash
cd live-calculator
```

### 3. Run the project

Since this is a frontend project, no backend or package installation is required.

Simply open:

```text
index.html
```

in your web browser.

You can also open the project using **VS Code Live Server**.

---

## 🌐 Live Deployment

The project is deployed and publicly accessible through Vercel.

👉 **Live Application:**
https://live-calculator-pearl.vercel.app/

The deployed version provides the same calculator functionality directly through the browser.

---

## 📸 Project Preview

You can add a screenshot of the calculator here:

```markdown
![Live Calculator Screenshot](./screenshot.png)
```

To use this:

1. Take a screenshot of your calculator.
2. Save it inside the project folder.
3. Name it `screenshot.png`.
4. Push it to GitHub.
5. The image will appear automatically in this README.

---

## 🎯 Learning Outcomes

Through this project, I practiced:

* Building a web interface using HTML5
* Styling interfaces using CSS3
* JavaScript DOM manipulation
* JavaScript functions and conditional logic
* Handling user events
* Keyboard event handling
* Managing application state
* Input validation
* Basic error handling
* Git and GitHub workflow
* Deploying a frontend project using Vercel

---

## 🔮 Future Improvements

Possible future enhancements include:

* Scientific calculator functions
* Calculation history
* Dark/light theme
* Memory functions
* More advanced keyboard shortcuts
* Improved mobile responsiveness
* Enhanced accessibility
* Calculation history stored using Local Storage

---

## 👨‍💻 Author

**Abhishek Singh**

B.Tech Computer Science Engineering Student

GitHub:
https://github.com/Abhishek-2527

---

## ⭐ If You Like This Project

If you find this project useful or interesting, consider giving the repository a ⭐ on GitHub.

**Thanks for checking out the project!**
