
# 🛒 QuickMart – Firebase E-Commerce Platform

**QuickMart** is a full-featured e-commerce web application built with **React.js** and **Firebase**, offering seamless user and admin experiences. It includes Firebase Authentication, Firestore database integration, real-time product and cart management, and a secure admin panel for managing products, users, and orders.

  
📂 **GitHub Repo**: [QuickMart-Firebase-E-Commerce-Platform](https://github.com/VishalKumarGupta1/QuickMart-Firebase-E-Commerce-Platform)

---

## 🚀 Features

### 🧑‍💻 User Functionality
- User authentication with Firebase (Email/Password)
- Browse all products with real-time updates
- Search by product name
- Filter products by **category** and **price range**
- Add/remove items from cart
- View cart total and proceed to checkout
- Place orders with confirmation
- Fully responsive design (mobile-friendly)

### 🛠️ Admin Panel
- Admin login with role-based access
- View, add, edit, and delete products
- View all registered users (name, email, etc.)
- View complete order details for all users
  - Products ordered
  - User information
  - Order total
  - Timestamps

### ⚙️ Tech Stack
- **React.js** with Hooks and Context API
- **Firebase Authentication** for login/signup
- **Cloud Firestore** as the database
- **Real-time DB updates**
- **Protected routes** for admin and user dashboards
- Version control with **Git** (Agile/Scrum methodology)

---

## 🛠️ Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/VishalKumarGupta1/QuickMart-Firebase-E-Commerce-Platform.git
cd QuickMart-Firebase-E-Commerce-Platform
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Firebase Setup

* Create a Firebase project: [https://firebase.google.com](https://firebase.google.com)
* Enable **Authentication** (Email/Password)
* Create a **Firestore** database
* Copy your Firebase config and replace it in `src/firebase/config.js`

```js
// Example Firebase config structure
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_ID",
  appId: "YOUR_APP_ID"
};
```

### 4. Start the App

```bash
npm run dev
```

---

## 📸 Screenshots

### 🛍️ User View

![Screenshot 2025-06-10 183803](https://github.com/user-attachments/assets/ff106b3a-194d-4f48-87f0-1adb44ffd810)

![Screenshot 2025-06-10 182837](https://github.com/user-attachments/assets/4a755245-84d9-40c7-af83-59d158e1f032)

![Screenshot 2025-06-10 182849](https://github.com/user-attachments/assets/a37ae0a1-03c7-41f4-934c-4e075c25674a)
![Screenshot 2025-06-10 182939](https://github.com/user-attachments/assets/bcfb25a1-80cc-4a54-8e72-67fad4e6fdd6)

### 🔧 Admin Panel

![Screenshot 2025-06-10 182820](https://github.com/user-attachments/assets/14cd9dbf-3c7f-41c0-9fa1-22543a1c9457)
![Screenshot 2025-06-10 183731](https://github.com/user-attachments/assets/444b5b61-d1e4-4f36-ac75-47165c087570)

---

## ✨ Future Enhancements

* Payment integration (e.g. Stripe)
* Order status tracking
* Email notifications
* Product image upload and preview
* Enhanced dashboard analytics

---

## 📃 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 Acknowledgments

Built with ❤️ using:

* [React](https://reactjs.org/)
* [Firebase](https://firebase.google.com/)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

Feel free to ⭐️ the repo if you found it useful!

```



