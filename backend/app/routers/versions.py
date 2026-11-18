from fastapi import APIRouter

router = APIRouter(tags=["game-data"])

VERSIONS = [
    {"id": "elden_ring", "name": "Elden Ring", "status": "planned"},
    {"id": "shadow_of_the_erdtree", "name": "Shadow of the Erdtree", "status": "planned"},
    {"id": "convergence", "name": "Convergence", "status": "future"},
]


@router.get("/versions")
def list_versions() -> list[dict[str, str]]:
    return VERSIONS
