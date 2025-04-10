# 🛒 Full-Stack E-Commerce Website

This is a full-featured e-commerce website built using **React (Vite)** for the frontend and **Node.js + Express** for the backend. The project uses **MongoDB** for the database and **Cloudinary** for image storage and management.

## 🚀 Tech Stack

**Frontend:**
- React (Vite)
- Tailwind CSS
- Axios
- React Router

**Backend:**
- Node.js
- Express
- MongoDB (Mongoose)
- JWT Authentication
- Bcrypt
- Cloudinary (for image upload)
- Multer (for file handling)

---

## 🔑 Features

- ✅ User registration & login
- 🛍️ Product listing and detail page
- 🔍 Category and subcategory filtering
- 🛒 Shopping cart
- 🧾 Order placement
- 🛠️ Admin functionality to add/manage products
- ☁️ Cloudinary integration for image uploads
- 📅 Timestamps and bestseller product flag

---

## 📁 Folder Structure

  
---

## 🧪 Setup Instructions

### ⚙️ Backend Setup

```bash
cd backend
npm install
# Create a .env file and configure the following:
# MONGO_URI=
# JWT_SECRET=
# CLOUDINARY_NAME=
# CLOUDINARY_API_KEY=
# CLOUDINARY_SECRET_KEY=
npm run dev
npm run dev

🌐 Frontend Setup

cd frontend
npm install
npm run dev

🌍 Environment Variables

Create a .env file inside the backend folder:

MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_SECRET_KEY=your_secret_key

📸 Image Upload

This project uses Multer and Cloudinary to handle and store product images securely in the cloud.
📦 Deployment

You can deploy:

    Frontend: Vercel / Netlify

    Backend: Render / Railway

👨‍💻 Author

Natan Muleta
Student at Adama Science and Technology University
https://github.com/natanmuletahunde
📃 License

This project is licensed under the MIT License.


---

Let me know if you'd like a `LICENSE` file, a contribution section, or live preview badges added.
