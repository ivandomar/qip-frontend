# qip-frontend
Frontend app built with vanilla HTML, CSS and JS for personal notes taking.

---
## Usage

1. Install deps
```
$ npm install
```

2. Provide env vars
```
|   Variable        |   Description   |   Observations                                            |
|   -------------   |   ----------    |   -----------------------------------------------------   |
|   VITE_API_URL    |   URL da API    |   Must be a full formed URL (i.e. http://localhost:5000)  |
```
>*Use`.env.example` file as an example*

3. Publish app
- dev mode
```
$ npm run dev
```

- prod build
```
$ npm run build && npm run preview
```

> **App is published at http://localhost:5173 (dev mode) or http://127.0.0.1:4173 (prod preview)**
