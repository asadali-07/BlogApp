---
title: Express.js Programming Tutorial
description: This is an Express.js tutorial for learning web development with Node.js and Express.
slug: expressjs-programming-tutorial
date: 02/07/2025
author: Asad Ali
image: /express.png
---

Welcome to this comprehensive Express.js programming tutorial! Whether you're new to web development or looking to master Express.js, this guide will take you through everything from basic concepts to advanced features of this popular Node.js web framework.

## Introduction to Express.js

Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It's known for its speed, minimalist approach, and extensive middleware ecosystem.

### Why Choose Express.js?

- **Minimalist**: Provides just what you need without unnecessary complexity
- **Flexible**: Supports various templating engines and databases
- **Large Ecosystem**: Extensive collection of middleware and plugins
- **Performance**: Lightweight and fast execution
- **Community Support**: Active community and extensive documentation

## Setting Up Express.js

Before starting with Express.js, ensure you have the following prerequisites:

1. **Install Node.js**: Download and install from [nodejs.org](https://nodejs.org/)
2. **Initialize Project**: Create a new directory and run `npm init`
3. **Install Express**: Run `npm install express`
4. **Choose Editor**: VS Code, WebStorm, or any preferred code editor

### Basic Server Setup

```javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
```

## Express.js Fundamentals

### Routing

```javascript
// Basic routing
app.get('/about', (req, res) => {
    res.send('About page');
});

// Route parameters
app.get('/users/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});

// Query strings
app.get('/search', (req, res) => {
    const query = req.query.q;
    res.send(`Search query: ${query}`);
});
```

### Middleware

Middleware functions are functions that have access to the request object (req), response object (res), and the next middleware function.

```javascript
// Custom middleware
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date()}`);
    next();
};

// Using middleware
app.use(logger);

// Built-in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
```

### Request Handling

```javascript
// POST request handling
app.post('/api/users', (req, res) => {
    const userData = req.body;
    // Process user data
    res.json({
        message: 'User created',
        user: userData
    });
});

// File upload handling with multer
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), (req, res) => {
    res.send('File uploaded successfully');
});
```

## Intermediate Express.js

### Template Engines

```javascript
// Setting up EJS template engine
app.set('view engine', 'ejs');

app.get('/profile', (req, res) => {
    res.render('profile', {
        name: 'John Doe',
        email: 'john@example.com'
    });
});
```

### Error Handling

```javascript
// Custom error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Route-specific error handling
app.get('/error-demo', (req, res, next) => {
    try {
        throw new Error('Demo error');
    } catch (error) {
        next(error);
    }
});
```

### Database Integration (MongoDB Example)

```javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/myapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model('User', UserSchema);

app.post('/users', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
```

## Advanced Express.js

### Authentication

```javascript
const jwt = require('jsonwebtoken');

// Authentication middleware
const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

// Protected route
app.get('/protected', authenticateToken, (req, res) => {
    res.json({ data: 'Protected data' });
});
```

### Route Organization

```javascript
// routes/users.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Users list');
});

router.post('/', (req, res) => {
    res.send('Create user');
});

module.exports = router;

// app.js
const usersRouter = require('./routes/users');
app.use('/users', usersRouter);
```

### API Versioning

```javascript
// api/v1/routes.js
const v1Router = express.Router();

v1Router.get('/users', (req, res) => {
    res.send('V1 Users API');
});

// api/v2/routes.js
const v2Router = express.Router();

v2Router.get('/users', (req, res) => {
    res.send('V2 Users API');
});

// app.js
app.use('/api/v1', v1Router);
app.use('/api/v2', v2Router);
```

### Rate Limiting

```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});

app.use(limiter);
```

### WebSocket Integration

```javascript
const WebSocket = require('ws');
const server = require('http').createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        console.log('received: %s', message);
        ws.send(`Server received: ${message}`);
    });
});

server.listen(port);
```

## Testing

```javascript
const request = require('supertest');

describe('GET /', () => {
    it('responds with hello world', async () => {
        const response = await request(app)
            .get('/')
            .expect(200);
        expect(response.text).toBe('Hello World!');
    });
});
```

## Deployment

### Production Best Practices

```javascript
// Configure environment variables
require('dotenv').config();

// Use helmet for security headers
const helmet = require('helmet');
app.use(helmet());

// Enable CORS
const cors = require('cors');
app.use(cors());

// Compression for response
const compression = require('compression');
app.use(compression());

// Trust proxy if behind reverse proxy
app.set('trust proxy', 1);
```

## Conclusion

This tutorial covered the essential aspects of Express.js development, from basic setup to advanced features. Continue exploring the vast ecosystem of Express.js middleware and keep building robust web applications!

Remember to:
- Always follow security best practices
- Keep your dependencies updated
- Write tests for your applications
- Document your API endpoints
- Handle errors appropriately

Happy coding with Express.js!