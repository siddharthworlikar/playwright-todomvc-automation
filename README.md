# 📝 TodoMVC Automation using Playwright

This project automates the **React TodoMVC** application using **Microsoft Playwright**. The automation suite validates the core functionality of the Todo application by performing end-to-end user interactions and verifying the expected behavior.

**Application Under Test:** https://todomvc.com/examples/react/dist/
---

## 🚀 Tech Stack

- Playwright
- JavaScript
- Node.js
- Chromium Browser

---

## 📂 Project Structure

```
Playwright-ToDo/
│
├── tests/
│   └── todo-demo.spec.js
│
├── playwright.config.js
├── package.json
└── README.md
```

---

## 📋 Test Scenario

The automation script performs the following actions:

### ✅ Add Todo Items

- Adds the following tasks:
  - Buy Groceries
  - Clean the house
  - Pay bills
  - Go for a Run!
- Verifies that all four tasks are successfully added.

---

### ✅ Verify Todo Items

Verifies the text of each todo item individually using Playwright assertions.

---

### ✅ Mark Todos as Completed

- Marks every task as completed.
- Navigates to the **Completed** filter.
- Verifies the completed tasks are displayed.

---

### ✅ Mark Todos as Active

- Returns to the **All** view.
- Unchecks all completed tasks.
- Navigates to the **Active** filter.
- Verifies the active tasks are displayed.

---

### ✅ Delete Todo Items

- Navigates back to the **All** view.
- Deletes every todo item.
- Verifies that no todo items remain.

---

## ▶️ Installation

Clone the repository

```bash
git clone <repository-url>
```

Navigate into the project

```bash
cd Playwright-ToDo
```

Install dependencies

```bash
npm install
```

Install Playwright browsers

```bash
npx playwright install
```

---

## ▶️ Execute Tests

Run all tests

```bash
npx playwright test
```

Run in headed mode

```bash
npx playwright test --headed
```

Run a specific test file

```bash
npx playwright test tests/todo-demo.spec.js
```

Open the Playwright HTML report

```bash
npx playwright show-report
```

---

## ✅ Assertions Used

The project uses Playwright's built-in assertions such as:

- `toHaveText()`
- `toHaveCount()`
- `toBeVisible()`

---

## 🔍 Playwright Features Demonstrated

- Element Locators
- `getByTestId()`
- `getByRole()`
- `locator()`
- Auto Waiting
- Assertions
- Loops
- Dynamic Locators
- Filtering Todo Items
- Hover Actions
- Click Actions
- Keyboard Events (`Enter`)
- Page Navigation
- End-to-End Testing

---

## 📚 Learning Outcomes

This project demonstrates practical experience with:

- Writing end-to-end automation tests using Playwright.
- Working with dynamic web elements.
- Using Playwright locators effectively.
- Handling auto-waiting and synchronization.
- Verifying UI state using assertions.
- Implementing maintainable test scripts following Playwright best practices.

---

## 📖 About TodoMVC

TodoMVC is a standardized todo application implemented using multiple JavaScript frameworks, allowing developers to compare framework implementations and testing approaches. The React version used in this project follows the common TodoMVC specification. 
---

## 👨‍💻 Author

**Siddharth Worlikar**

QA Engineer | Playwright Automation Tester | JavaScript | End-to-End Testing
