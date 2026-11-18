# Project Specification

## Product
A responsive, personal web application for manually assembling and guided-planning Elden Ring builds. Initial target: base game. Shadow of the Erdtree follows as a separate content pack; Convergence is a later, isolated ruleset/content adapter.

## Decisions
- Audience: personal use initially
- Platform: responsive web
- Build generation: guided, user preferences remain editable
- Data: hybrid import + manual validation
- Connectivity: online is acceptable; no offline guarantee
- Frontend: React + TypeScript + Vite
- Backend: Python + FastAPI
- Initial database: SQLite
- Catalog: versioned JSON

## Core modules
1. Character Builder: starting class, level, attributes.
2. Equipment Forge: weapons, shields, armor and catalysts.
3. Magic & Skills: sorceries, incantations and skills.
4. Loadout Manager: talismans and consumables.
5. Build Analyzer: requirements, equip load and compatibility.
6. Guided Forge: suggestions based on player-selected goals.
7. Build Library: save, edit and compare builds.
8. Data Importer: import, validate and stage catalog data.

## Data principles
- Separate game content from calculation rules.
- Every catalog entry has a stable internal ID and source/version metadata.
- Never mix base-game, DLC and Convergence records implicitly.
- Unknown or unverified values must remain explicitly unknown.
- Damage formulas and scaling must be verified before being presented as authoritative.

## Initial API
- GET /api/health
- GET /api/versions
- GET /api/catalog
- GET /api/classes
- POST /api/builds
- GET /api/builds
- GET /api/builds/{build_id}
- PUT /api/builds/{build_id}
- DELETE /api/builds/{build_id}

## Milestones
1. Repository foundation and health endpoint.
2. Base-game catalog and data validation.
3. Manual build editor and persistence.
4. Guided build suggestions.
5. Analysis and comparison.
6. Shadow of the Erdtree content pack.
7. Convergence adapter.

## Non-goals for v1
Authentication, public sharing, multiplayer, guaranteed offline operation, live game integration and authoritative damage simulation until formulas/data are verified.
