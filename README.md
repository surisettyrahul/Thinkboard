# ThinkBoard

A modern, full-stack note-taking application built with React and Express.js. Create, edit, and manage your notes with a beautiful UI and rate-limited API endpoints for optimal performance.

## Features

- ✨ **Create Notes** – Quickly jot down your thoughts with title and content
- ✏️ **Edit Notes** – Modify existing notes and save changes instantly
- 🗑️ **Delete Notes** – Remove notes you no longer need
- 📱 **Responsive Design** – Works seamlessly on desktop and mobile devices
- ⚡ **Rate Limiting** – Protected API endpoints prevent abuse with Upstash Redis
- 🔒 **Persistent Storage** – All notes saved to MongoDB
- 🎨 **Beautiful UI** – Built with DaisyUI and Tailwind CSS

## Tech Stack

### Frontend

- **React 19** – Modern UI library with hooks
- **React Router DOM** – Client-side routing
- **Vite** – Lightning-fast build tool
- **Tailwind CSS** – Utility-first CSS framework
- **DaisyUI** – Beautiful component library
- **Axios** – HTTP client for API calls
- **React Hot Toast** – Toast notifications
- **Lucide React** – Beautiful icon library

### Backend

- **Express.js** – Lightweight web framework
- **MongoDB** – NoSQL database for note storage
- **Mongoose** – ODM for MongoDB
- **Upstash Redis** – Serverless Redis for rate limiting
- **CORS** – Cross-Origin Resource Sharing support
- **Dotenv** – Environment variable management

## Project Structure

```
THINKBOARD/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.js              # MongoDB connection
│   │   │   └── upstash.js         # Redis configuration
│   │   ├── controllers/
│   │   │   └── notesController.js # Business logic for notes
│   │   ├── middleware/
│   │   │   └── rateLimiter.js     # Rate limiting middleware
│   │   ├── models/
│   │   │   └── Note.js            # Note data model
│   │   ├── routes/
│   │   │   └── notesRoutes.js     # API endpoints
│   │   └── server.js              # Express app setup
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx         # Navigation header
│   │   │   ├── NoteCard.jsx       # Individual note card
│   │   │   ├── NotesNotFound.jsx  # Empty state UI
│   │   │   └── RateLimitedUI.jsx  # Rate limit message
│   │   ├── pages/
│   │   │   ├── HomePage.jsx       # All notes listing
│   │   │   ├── CreatePage.jsx     # Create new note form
│   │   │   └── NoteDetailPage.jsx # Edit/view single note
│   │   ├── lib/
│   │   │   ├── axios.js           # Axios instance with config
│   │   │   └── utils.js           # Utility functions
│   │   ├── App.jsx                # Main app component
│   │   ├── main.jsx               # React entry point
│   │   └── index.css              # Global styles
│   ├── vite.config.js             # Vite configuration
│   ├── tailwind.config.js         # Tailwind CSS config
│   └── package.json
└── README.md (this file)
```

## Getting Started

### Prerequisites

- Node.js 16+ and npm
- MongoDB URI (local or cloud)
- Upstash Redis credentials (optional, for rate limiting)

### Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd THINKBOARD
```

2. **Backend Setup**

```bash
cd backend
npm install
```

3. **Frontend Setup**

```bash
cd ../frontend
npm install
```

### Environment Variables

Create a `.env` file in the `backend` directory:

```env
# MongoDB
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>

# Port (optional, defaults to 5001)
PORT=5001

# Environment
NODE_ENV=development

# Upstash Redis (for rate limiting)
UPSTASH_REDIS_REST_URL=<your-upstash-redis-url>
UPSTASH_REDIS_REST_TOKEN=<your-upstash-redis-token>
```

## Development

### Running the Backend

```bash
cd backend
npm run dev
```

The server will start on `http://localhost:5001` (or your configured PORT).

### Running the Frontend

```bash
cd frontend
npm run dev
```

The app will be available at `http://localhost:5173` (Vite default).

### Running Both Concurrently (from root)

Open two terminals and run:

```bash
# Terminal 1 - Backend
cd backend && npm run dev

# Terminal 2 - Frontend
cd frontend && npm run dev
```

## API Endpoints

All endpoints are prefixed with `/api/notes`:

| Method | Endpoint | Description             |
| ------ | -------- | ----------------------- |
| GET    | `/`      | Get all notes           |
| GET    | `/:id`   | Get a single note by ID |
| POST   | `/`      | Create a new note       |
| PUT    | `/:id`   | Update a note           |
| DELETE | `/:id`   | Delete a note           |

### Example API Call

```bash
# Get all notes
curl http://localhost:5001/api/notes

# Create a note
curl -X POST http://localhost:5001/api/notes \
  -H "Content-Type: application/json" \
  -d '{"title":"My Note","content":"Note content here"}'
```

## Rate Limiting

The API implements rate limiting using Upstash Redis to prevent abuse. Rate limits are applied per IP address and reset periodically. When rate limited, the API returns a `429 Too Many Requests` status, and the UI displays the `RateLimitedUI` component.

## Building for Production

### Build Frontend

```bash
cd frontend
npm run build
```

Output is generated in `frontend/dist/`.

### Build & Start Backend

```bash
cd backend
npm run start
```

The backend serves the static frontend from `dist/` folder when `NODE_ENV=production`.

## Styling

The project uses **Tailwind CSS** with **DaisyUI** presets for a modern, accessible design. All components follow the DaisyUI component library conventions:

- DaisyUI Components: `btn`, `card`, `input`, `textarea`, `form-control`
- Tailwind Utilities: Responsive (`md:`, `lg:`), spacing, colors, animations
- Custom colors: Primary green accent (`#00FF9D`) for brand consistency

## Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -m 'Add your feature'`
3. Push to branch: `git push origin feature/your-feature`
4. Submit a pull request


## Support

For issues, questions, or suggestions, please open an issue in the repository or contact the maintainers.

---

**Happy note-taking!** 📝✨
