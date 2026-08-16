# KM Store Irulam - React App

This project is a modern Single Page Application (SPA) built with **React**, **Vite**, **React Router**, and **Bootstrap 5**. It serves as the digital storefront for **KM Store Irulam**, Wayanad, Kerala.

---

## Prerequisites

Make sure you have the following installed:

* **Node.js**
* **npm**

---

## Getting Started Locally

### 1. Clone the Repository

```bash
git clone https://github.com/akhilkm02/km-store.git
cd km-store-react
```

> If your React project is inside a different folder, replace `km-store-react` with the appropriate directory name.

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Open your browser and navigate to:

```text
http://localhost:5173
```

The exact port may be different if Vite selects another available port. Check the terminal output for the correct URL.

---

## Creating a Production Build

To create an optimized production build, run:

```bash
npm run build
```

This generates a `dist` folder containing the compiled HTML, CSS, JavaScript, and other production assets.

---

## Previewing the Production Build Locally

To preview the production build before deploying:

```bash
npm run preview
```

This starts a local server using the contents of the `dist` folder.

---

## Pushing Code to GitHub

To save your changes and push them to the remote `main` branch:

### 1. Stage Changes

```bash
git add .
```

### 2. Commit Changes

```bash
git commit -m "Update application code"
```

### 3. Push to GitHub

```bash
git push origin main
```

---

---

## 4. Contact & Email Integration

This application features a dual-inquiry system on the **Contact Us** page, allowing users to send messages via **WhatsApp** or **Email**.

Email handling is powered by **Web3Forms**, which forwards contact form submissions directly to your email inbox without requiring a backend server or complex OAuth/Google API authentication scopes.

### Setting Up Email Integration (Web3Forms)

1. Go to [Web3Forms](https://web3forms.com/).
2. Enter your store's email address to instantly receive a free **Access Key**.
3. In your React source code (specifically inside your contact component file, e.g., `ContactPage.jsx`), locate the Web3Forms `fetch` request body:

```javascript
const response = await fetch("[https://api.web3forms.com/submit](https://api.web3forms.com/submit)", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify({
    access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // Replace with your actual access key
    name: formData.name,
    phone: formData.phone,
    message: formData.message,
    subject: `New Inquiry from ${formData.name}`
  })
});

## Deploying to GitHub Pages

This project can be deployed to GitHub Pages using the `gh-pages` package.

### 1. Configure `package.json`

Make sure your `package.json` contains the correct `homepage`:

```json
{
  "homepage": "https://akhilkm02.github.io/km-store"
}
```

Your deployment scripts should also include:

```json
{
  "scripts": {
    "build": "vite build",
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

### 2. Deploy the Application

Run:

```bash
npm run deploy
```

This command:

1. Builds the React application.
2. Generates the `dist` folder.
3. Publishes the contents of `dist` to the `gh-pages` branch.

---

## Configure GitHub Pages

After deployment:

1. Open the repository on GitHub.
2. Go to **Settings**.
3. Select **Pages**.
4. Under **Build and deployment**, select:

    * **Source:** Deploy from a branch
    * **Branch:** `gh-pages`
    * **Folder:** `/ (root)`
5. Click **Save**.

Your application should then be available at:

**https://akhilkm02.github.io/km-store/**

---

## Project Technologies

* React
* Vite
* React Router
* Bootstrap 5
* JavaScript
* HTML5
* CSS3
* GitHub Pages

---

## Useful Commands

| Command                   | Description                      |
| ------------------------- | -------------------------------- |
| `npm install`             | Install project dependencies     |
| `npm run dev`             | Start the development server     |
| `npm run build`           | Create a production build        |
| `npm run preview`         | Preview the production build     |
| `npm run deploy`          | Build and deploy to GitHub Pages |
| `git add .`               | Stage changes                    |
| `git commit -m "message"` | Commit changes                   |
| `git push origin main`    | Push changes to GitHub           |

---

## Live Website

**KM Store Irulam**

https://akhilkm02.github.io/km-store/
