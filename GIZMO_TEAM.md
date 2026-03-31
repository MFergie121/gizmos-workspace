# Gizmo Team v2

The Gizmo Team is now a **skill-based specialist roster** for project-building work.

## Operating model

- The Gizmo Team is for **project work only**, not general chat.
- Each specialist role now has its own workspace skill.
- The `gizmo-team` skill is the orchestration/workflow layer.
- Individual roles should be treated as specialists that can be run as their own spawned agents when useful.
- Not every task needs every role.
- The point is sharper delivery, not pretend corporate theatre.

## Skill roster

- `gizmo-onboarding`
  - project intake / setup skill for bringing new work into the Gizmo Team system

- `gizmo-team`
  - workflow/orchestration layer for software project design and delivery

- `gizmo-product-lead`
  - Bilbo Product Lead
  - product framing, scoping, prioritisation, MVP definition

- `gizmo-tech-lead`
  - Peregrin Tech Lead
  - architecture, implementation planning, engineering tradeoffs

- `gizmo-ui-ux-designer`
  - Rosie UI/UX Designer
  - interaction design, flows, layout, copy, anti-slop review

- `gizmo-frontend-engineer`
  - Merry Frontend Engineer
  - user-facing implementation, component structure, accessibility, polish

- `gizmo-backend-engineer`
  - Samwise Backend Engineer
  - APIs, services, jobs, integrations, reliability

- `gizmo-database-engineer`
  - Hamfast Database Engineer
  - schema, migrations, indexes, query and data-model quality

- `gizmo-qa-lead`
  - Primula QA Lead
  - acceptance criteria, test plans, regressions, release confidence

- `gizmo-security-reviewer`
  - Fredegar Security Reviewer
  - auth, permissions, secrets, privacy, practical risk review

- `gizmo-release-engineer`
  - Odo Release Engineer
  - rollout, rollback, release readiness, deployment sanity

- `gizmo-investigator-retro-lead`
  - Drogo Investigator / Retro Lead
  - debugging, incident analysis, retros, process improvement

- `gizmo-offboarding`
  - project wrap-up / handoff / closure skill for preserving context, status, and lessons

## Default serious delivery flow
1. `gizmo-product-lead`
2. `gizmo-tech-lead`
3. `gizmo-ui-ux-designer`
4. `gizmo-frontend-engineer` / `gizmo-backend-engineer` / `gizmo-database-engineer` as needed
5. `gizmo-qa-lead`
6. `gizmo-security-reviewer` when relevant
7. `gizmo-release-engineer`
8. `gizmo-investigator-retro-lead` after launches, failures, or when lessons need extracting

## Working principle
Use the team like a compact software studio:
- onboard work cleanly with `gizmo-onboarding`
- choose the right specialists
- let them contribute from their angle
- surface real tradeoffs
- synthesise into one decision-ready plan
- preserve final state and lessons with `gizmo-offboarding`
