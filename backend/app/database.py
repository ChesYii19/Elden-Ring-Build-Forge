from pathlib import Path

from sqlmodel import SQLModel, Session, create_engine

DATABASE_DIR = Path(__file__).resolve().parents[1] / "data"
DATABASE_DIR.mkdir(parents=True, exist_ok=True)
DATABASE_URL = f"sqlite:///{DATABASE_DIR / 'build_forge.db'}"

engine = create_engine(
    DATABASE_URL,
    connect_args={"check_same_thread": False},
    echo=False,
)


def create_db_and_tables() -> None:
    SQLModel.metadata.create_all(engine)


def get_session():
    with Session(engine) as session:
        yield session
