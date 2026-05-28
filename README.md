# PastePlay Landing Page

The official marketing and download website for **[PastePlay](https://www.pasteplay.app)** — a fast, offline text-to-speech (TTS) companion app for Windows.

This repository hosts the static landing page, featuring a modern, dark-mode design system with responsive components, built using React and styled with Tailwind CSS.

---

## 🚀 About PastePlay App

**PastePlay** is a lightweight desktop app that lets you highlight any text on your screen, press a custom hotkey, and listen to it read aloud instantly using high-quality local AI voices.

*   **Highlight & Speak:** Select text anywhere (browser, PDF, Word doc, IDE) and press the hotkey to hear it.
*   **Fully Offline:** No network requests, subscriptions, or remote servers required for speech generation. Uses a high-performance local TTS engine (Piper).
*   **Minimal Widget Overlay:** A transparent, sleek, customizable controller that floats over your screen when speaking.
*   **History & Archive:** Replay previous clips, pin important transcripts, and download txt files of your highlighted content.

---

## 🛠️ Web Tech Stack

This landing page is built with performance and aesthetics in mind:

*   **Framework:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
*   **Bundler:** [Vite 5](https://vite.dev/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Icons:** [Lucide React](https://lucide.dev/)

---

## 💻 Local Development

Follow these steps to run the landing page site locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/wolfken26/pasteplay-web.git
    cd pasteplay-web
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start dev server:**
    ```bash
    npm run dev
    ```
    Open your browser and navigate to `http://localhost:5173`.

4.  **Build for production:**
    ```bash
    npm run build
    ```
    The compiled build will be generated in the `dist` directory, ready to be deployed to Vercel, Netlify, or GitHub Pages.

---

## 🔒 Security & Privacy

*   **Public Landing Page:** This repository only hosts the static public website. The core Electron application code is kept in a separate, secure, and private repository.
*   **Environment Safety:** All secrets, keys, and environment configs (`.env` files) are strictly ignored and never pushed to production.
