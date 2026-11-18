# Elden Ring Build Forge

A responsive, personal build-planning workspace for Elden Ring.

## Stack
- Frontend: React, TypeScript, Vite
- Backend: Python, FastAPI
- Initial persistence: SQLite
- Catalog: versioned JSON datasets

## Development

### Backend
```bash
cd backend
python -m venv .venv
# Windows: .venv\\Scripts\\activate
# macOS/Linux: source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

The frontend expects the API at `http://localhost:8000` by default.

## Project status
Initial foundation. Game data and damage calculations are not yet complete or authoritative.
See [PROJECT_SPEC.md](docs/PROJECT_SPEC.md).
