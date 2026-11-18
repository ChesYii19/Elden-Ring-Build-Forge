from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import create_db_and_tables
from app.routers import builds, health, versions

app = FastAPI(
    title="Elden Ring Build Forge API",
    description="Personal build planning API. Game calculations are added incrementally and must be verified.",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
def on_startup() -> None:
    create_db_and_tables()


app.include_router(health.router, prefix="/api")
app.include_router(versions.router, prefix="/api")
app.include_router(builds.router, prefix="/api")


@app.get("/")
def root() -> dict[str, str]:
    return {"name": "Elden Ring Build Forge API", "docs": "/docs"}
