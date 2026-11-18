from datetime import datetime
from pydantic import BaseModel, Field


class BuildCreate(BaseModel):
    name: str = Field(min_length=1, max_length=80)
    game_version: str = "elden_ring"
    character_class: str = "vagabond"
    rune_level: int = Field(default=9, ge=1, le=713)
    notes: str = Field(default="", max_length=2000)


class BuildRead(BuildCreate):
    id: int
    created_at: datetime
    updated_at: datetime
