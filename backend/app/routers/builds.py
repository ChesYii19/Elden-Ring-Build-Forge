from datetime import datetime, timezone

from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session, select

from app.database import get_session
from app.models import Build
from app.schemas import BuildCreate, BuildRead

router = APIRouter(prefix="/builds", tags=["builds"])


@router.post("", response_model=BuildRead, status_code=201)
def create_build(payload: BuildCreate, session: Session = Depends(get_session)):
    build = Build(**payload.model_dump())
    session.add(build)
    session.commit()
    session.refresh(build)
    return build


@router.get("", response_model=list[BuildRead])
def list_builds(session: Session = Depends(get_session)):
    return session.exec(select(Build).order_by(Build.updated_at.desc())).all()


@router.get("/{build_id}", response_model=BuildRead)
def get_build(build_id: int, session: Session = Depends(get_session)):
    build = session.get(Build, build_id)
    if not build:
        raise HTTPException(status_code=404, detail="Build not found")
    return build


@router.put("/{build_id}", response_model=BuildRead)
def update_build(build_id: int, payload: BuildCreate, session: Session = Depends(get_session)):
    build = session.get(Build, build_id)
    if not build:
        raise HTTPException(status_code=404, detail="Build not found")
    for key, value in payload.model_dump().items():
        setattr(build, key, value)
    build.updated_at = datetime.now(timezone.utc)
    session.add(build)
    session.commit()
    session.refresh(build)
    return build


@router.delete("/{build_id}", status_code=204)
def delete_build(build_id: int, session: Session = Depends(get_session)):
    build = session.get(Build, build_id)
    if not build:
        raise HTTPException(status_code=404, detail="Build not found")
    session.delete(build)
    session.commit()
