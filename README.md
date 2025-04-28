# Portfolio Website

This is a portfolio website, built with [Next.js](https://nextjs.org/), [React](https://react.dev/), and [Tailwind CSS](https://tailwindcss.com/).

Currently hosted @ [jaeho.me](https://jaeho.me)

Deployed via **GitHub Pages** using GitHub Actions. Previously deployed with K3s locally and proxied through CF.

---

## 🚀 Features
- Fully static exported with Next.js.
- Built with TypeScript.
- Deployed with GitHub Actions + GitHub Pages.
- Dockerized with `compose.yaml` support for local production testing.
- Clean, modular, and security-conscious codebase.

---

## 🛠️ Tech Stack
- **Next.js** 14.x (Stable)
- **React** 18.x (Stable)
- **TypeScript** 5.x (Stable)
- **Tailwind CSS** 3.4.x
- **ESLint** 9.x
- **Docker** (for local testing)

> 🔹 Verified: Stack is up-to-date with latest stable and **secure** releases as of 2025.

---

## 💻 Local Development

1. Install dependencies:

```bash
pnpm install
```

2. Run the development server:

```bash
pnpm dev
```

Application will be live at `http://localhost:3000`

---

## 🐳 Docker Local Deployment

To simulate production locally:

```bash
docker compose up --build
```

- Serves the static `out/` directory after `next export`.
- Useful for testing static builds before GitHub Pages deployment.

---

## 🌍 Deployment (GitHub Pages)

Deployment is automated using GitHub Actions:
- On every push to `main`, the site is built and deployed.
- See `.github/workflows/nextjs.yml` for full CI/CD pipeline.

---

## 📂 Project Structure

```
/src
  /app         # Main Next.js app pages
  /components  # Reusable UI components
/public        # Static assets (images, favicons, etc.)
/compose.yaml  # Docker Compose for local deployment
```

---

## 📄 License

MIT License — see [LICENSE](./LICENSE) for details.

---

## 📬 Contact

- GitHub: [https://github.com/koda-git](https://github.com/koda-git)
