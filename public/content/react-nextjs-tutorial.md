---
title: React and Next.js Tutorial
description: A comprehensive guide to React and Next.js development
slug: react-nextjs-tutorial
date: 02/07/2025
author: Asad Ali
image: /reactnextjs.png
---

# React and Next.js Tutorial

This comprehensive guide covers both React and Next.js, starting with React fundamentals and progressing to building full-stack applications with Next.js.

## Part 1: React Fundamentals

### Getting Started with React

```bash
# Create a new React project
npx create-react-app my-app
cd my-app
npm start
```

### Components and JSX

```jsx
// Functional Component
function Welcome({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// Arrow Function Component
const Button = ({ onClick, children }) => (
  <button onClick={onClick}>
    {children}
  </button>
);

// Using Components
function App() {
  return (
    <div>
      <Welcome name="Alice" />
      <Button onClick={() => alert('Clicked!')}>
        Click me
      </Button>
    </div>
  );
}
```

### State and Hooks

```jsx
import { useState, useEffect } from 'react';

function Counter() {
  // State Hook
  const [count, setCount] = useState(0);
  
  // Effect Hook
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

### Custom Hooks

```jsx
// Custom Hook
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    if (typeof window === 'undefined') return initialValue;
    
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });
  
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  
  return [value, setValue];
}

// Using Custom Hook
function App() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  
  return (
    <div className={theme}>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </div>
  );
}
```

### Context API

```jsx
import { createContext, useContext } from 'react';

// Create Context
const ThemeContext = createContext('light');

// Provider Component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Consumer Component
function ThemedButton() {
  const { theme, setTheme } = useContext(ThemeContext);
  
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Current theme: {theme}
    </button>
  );
}
```

## Part 2: Next.js

### Setting Up Next.js

```bash
# Create a new Next.js project
npx create-next-app@latest my-next-app
cd my-next-app
npm run dev
```

### File-Based Routing

```jsx
// pages/index.js - Home page (/)
export default function Home() {
  return <h1>Welcome to Next.js!</h1>;
}

// pages/about.js - About page (/about)
export default function About() {
  return <h1>About Us</h1>;
}

// pages/posts/[id].js - Dynamic route (/posts/1, /posts/2, etc.)
export default function Post({ post }) {
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } }
    ],
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  // Fetch post data
  return {
    props: {
      post: {
        id: params.id,
        title: `Post ${params.id}`,
        content: 'Content...'
      }
    }
  };
}
```

### Data Fetching Methods

```jsx
// Static Site Generation (SSG)
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();
  
  return {
    props: { data },
    revalidate: 60 // ISR - revalidate every 60 seconds
  };
}

// Server-Side Rendering (SSR)
export async function getServerSideProps(context) {
  const { req, res } = context;
  const data = await fetchData(req.headers.cookie);
  
  return {
    props: { data }
  };
}

// Client-Side Data Fetching
import useSWR from 'swr';

function Profile() {
  const { data, error } = useSWR('/api/user', fetcher);
  
  if (error) return <div>Error loading</div>;
  if (!data) return <div>Loading...</div>;
  
  return <div>Hello {data.name}!</div>;
}
```

### API Routes

```jsx
// pages/api/users.js
export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Handle GET request
    res.status(200).json({ users: [] });
  } else if (req.method === 'POST') {
    // Handle POST request
    const { name, email } = req.body;
    // Save user to database
    res.status(201).json({ message: 'User created' });
  }
}
```

### Middleware

```typescript
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check auth token
  const token = request.cookies.get('token');
  
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/protected/:path*'
};
```

### Layout and Components

```jsx
// components/Layout.js
export default function Layout({ children }) {
  return (
    <div>
      <header>
        <nav>{/* Navigation */}</nav>
      </header>
      <main>{children}</main>
      <footer>{/* Footer */}</footer>
    </div>
  );
}

// pages/_app.js
import Layout from '../components/Layout';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
```

### Image Optimization

```jsx
import Image from 'next/image';

function MyImage() {
  return (
    <Image
      src="/profile.jpg"
      alt="Profile"
      width={500}
      height={300}
      priority
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,..."
    />
  );
}
```

### Environment Variables

```plaintext
# .env.local
DATABASE_URL=postgresql://...
API_KEY=your_api_key
```

```jsx
// Access in pages or API routes
console.log(process.env.DATABASE_URL); // Server-side only
console.log(process.env.NEXT_PUBLIC_API_KEY); // Available client-side
```

### Deployment

```bash
# Build for production
npm run build

# Start production server
npm start

# Deploy to Vercel
vercel
```

## Advanced Features

### Authentication

```jsx
// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
});

// Protected Component
import { useSession } from 'next-auth/react';

function ProtectedPage() {
  const { data: session } = useSession();
  
  if (!session) {
    return <div>Please sign in</div>;
  }
  
  return <div>Welcome {session.user.name}</div>;
}
```

### Error Handling

```jsx
// pages/404.js - Custom 404 page
export default function Custom404() {
  return <h1>404 - Page Not Found</h1>;
}

// pages/500.js - Custom error page
export default function Custom500() {
  return <h1>500 - Server Error</h1>;
}

// pages/_error.js - Generic error page
function Error({ statusCode }) {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
  );
}
```

### Performance Optimization

```jsx
// Component optimization
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('../components/Heavy'), {
  loading: () => <p>Loading...</p>,
  ssr: false
});

// Link prefetching
import Link from 'next/link';

<Link href="/about" prefetch={false}>
  About
</Link>
```

## Best Practices

1. **Project Structure**
```
my-next-app/
├── components/
├── lib/
├── pages/
│   ├── api/
│   └── _app.js
├── public/
├── styles/
└── utils/
```

2. **Type Safety with TypeScript**
```typescript
interface Post {
  id: string;
  title: string;
  content: string;
}

interface Props {
  post: Post;
}

export default function PostPage({ post }: Props) {
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}
```

3. **Performance Checklist**
- Use Image component for optimized images
- Implement dynamic imports for heavy components
- Enable ISR for frequently updated pages
- Optimize fonts and third-party scripts
- Use proper caching strategies

## Conclusion

This tutorial covered the essentials of both React and Next.js. To become proficient:

1. Build practical projects
2. Learn about state management (Redux, Zustand)
3. Explore testing frameworks
4. Study deployment and optimization
5. Keep up with new features and updates

Remember to check the official documentation:
- [React Docs](https://react.dev)
- [Next.js Docs](https://nextjs.org/docs)

Happy coding!