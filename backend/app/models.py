from datetime import datetime, timezone
from typing import Optional
from sqlmodel import SQLModel, Field


class Build(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    game_version: str = Field(default="elden_ring", index=True)
    character_class: str = Field(default="vagabond")
    rune_level: int = Field(default=9, ge=1, le=713)
    notes: str = Field(default="")
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    updated_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
