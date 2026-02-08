---
trigger: always_on
---

# Antigravity & Gemini Project Instructions

**Project:** My Portfolio (Pratik Singh Lad)
**Tech Stack:** React (Vite), TypeScript, SCSS, i18next (i18n)

---

## 🚀 Core Mission

Generate high-end, premium, and engineering-driven code that enhances the portfolio's visual appeal and performance. Prioritize visual excellence ("WOW" factor) while maintaining strict architectural standards.

---

## 🧠 Agentic Guidelines

### 1. Proactive Research

- **Always** check existing KIs (Knowledge Items) and `public/images` before creating new assets.
- Use `grep_search` to verify if patterns (like theme toggling or i18n keys) already exist before implementing from scratch.
- If an image is missing, use the `generate_image` tool to create a high-quality demonstration asset.

### 2. Implementation Workflow

- **Styles First**: Update `src/styles/_variables.scss` and global styles before component-specific work.
- **Theme Support**: Every UI change **must** support both Dark and Light modes using CSS variables.
- **I18n Compliance**: Never use hardcoded strings. Add keys to `src/i18n/en.json` (and other languages if possible) and use `useTranslation`.
- **Verify**: Run `npm run lint` or `npm run build` to ensure correctness after significant changes.

---

## 🎨 Design & Aesthetics (Premium Standard)

- **Colors**: Use the CSS variables defined in `_variables.scss` (e.g., `--color-accent`, `--color-bg`).
- **Typography**: Favor modern fonts (Inter, JetBrains Mono for code).
- **Interactions**: Add subtle micro-animations (hover floats, smooth transitions, glassmorphism effects).
- **Responsiveness**: All designs must be mobile-first and tested for various breakpoints.
- **Glassmorphism**: Use `backdrop-filter: blur()` and semi-transparent backgrounds for a modern tech feel.

---

## 🛠 Technical Standards

### 1. React & TypeScript

- Use **Functional Components** with explicit TypeScript types.
- Avoid `any`. Use generics or specific interfaces.
- Prefer `const` and arrow functions.
- Keep components focused and reusable.

### 2. Styling (SCSS)

- Use `@use '../../styles/variables' as *;` in every component SCSS file.
- Prefer CSS Variables over static SCSS variables for values that change with themes.
- Maintain a clear hierarchy in SCSS nesting.

### 3. Theme System

- Themes are controlled via the `[data-theme]` attribute on the `html` element.
- Use `rgba(var(--color-accent-rgb), 0.1)` for alpha colors to ensure theme compatibility.

### 4. Internationalization (i18n)

- Use `t("namespace.key")` from `react-i18next`.
- Organize keys logically: `navigation`, `main`, `expertise`, `contact`, `footer`.

---

## 📂 File Structure Conventions

- `src/components/`: JSX logic.
- `src/assets/styles/`: Component SCSS (named `ComponentName.scss`).
- `src/i18n/`: Translation files (`en.json`, `hi.json`, etc.).
- `public/images/`: Static assets (always use relative paths `./images/...` for subpath compatibility).

---

## 🚫 Explicit "Do Not"

- **Do not** use hardcoded color values (hex/rgb) directly in components; use CSS variables.
- **Do not** use leading slashes for public assets (e.g., use `./favicon.ico` not `/favicon.ico`) to avoid subpath hosting issues.
- **Do not** skip accessibility (ARIA labels, semantic tags).
- **Do not** ignore lint errors.

---

## 📝 Communication Style

- Act as a collaborative lead engineer.
- Explain non-obvious design decisions.
- Be proactive in suggesting UX improvements.
- Use rich formatting in responses to aid clarity.
