# 🧭 Breadcrumb Component (React + TypeScript)

A fully accessible, reusable **Breadcrumb navigation component** built using  
**React, TypeScript, Tailwind CSS, and Radix Slot**.

This component follows **modern UI patterns**, supports **router links**, and provides a clean API for scalable applications.

---

## ✨ Features

- Accessible breadcrumb navigation (`aria-label`, `aria-current`)
- Polymorphic links using **Radix Slot**
- Clean Tailwind-based styling
- Type-safe with TypeScript
- Supports collapsed breadcrumbs (ellipsis)
- Easy integration with React Router / Next.js

---

## 🧰 Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- clsx
- tailwind-merge
- @radix-ui/react-slot
- lucide-react (icons)

---

## 📦 Installation

```
pnpm add @radix-ui/react-slot lucide-react clsx tailwind-merge
```

## 🧠 Utility Function (cn)

This component uses a cn utility built with clsx and tailwind-merge.

```
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}
```

---

## 🧩 Components Included

| Component             | Description                    |
| --------------------- | ------------------------------ |
| `Breadcrumb`          | Root navigation wrapper        |
| `BreadcrumbList`      | Ordered list container         |
| `BreadcrumbItem`      | Individual breadcrumb item     |
| `BreadcrumbLink`      | Clickable breadcrumb link      |
| `BreadcrumbPage`      | Current page indicator         |
| `BreadcrumbSeparator` | Separator between items        |
| `BreadcrumbEllipsis`  | Collapsed breadcrumb indicator |

---

### 🚀 Basic Usage

```
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./breadcrumb";

export default function Example() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        <BreadcrumbItem>
          <BreadcrumbLink href="/products">Products</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        <BreadcrumbItem>
          <BreadcrumbPage>Details</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
```

## 📜 License

MIT License
Free to use in personal and commercial projects.

⭐ Support

If this component helped you:

⭐ Star the repository

📢 Share with others

🎥 Watch the video tutorial

---

## Interview Questions (Based on This Component) 🔥

### 1️⃣ What is the purpose of the `Breadcrumb` component?

The `Breadcrumb` component acts as the root navigation wrapper and uses the semantic `<nav>` element with `aria-label="breadcrumb"` to improve accessibility and screen reader support.

---

### 2️⃣ Why is an ordered list (`<ol>`) used for breadcrumbs?

Breadcrumbs represent a hierarchical path, so an ordered list (`<ol>`) is semantically correct.  
Each breadcrumb item is placed inside a `<li>` to maintain proper document structure and accessibility.

---

### 3️⃣ What problem does `@radix-ui/react-slot` solve in `BreadcrumbLink`?

Radix Slot allows the component to be **polymorphic**, meaning it can render different elements (like router links) without adding extra DOM nodes.

This enables seamless integration with:

- React Router
- Next.js `<Link />`
- Any custom navigation component

---

### 4️⃣ What is the purpose of the `asChild` prop?

The `asChild` prop allows the consumer to pass a custom component (such as a router link) as the underlying element while preserving styles and behavior from `BreadcrumbLink`.

Example:

```
<BreadcrumbLink asChild>
  <Link to="/dashboard">Dashboard</Link>
</BreadcrumbLink>
```

---

### 🔥 Want next?

Just tell me what to generate next 👌
