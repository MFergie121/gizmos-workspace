# Gizmo Team v1

Formal naming convention:
- internal slug = role slug only
- nickname/name = sourced from Hobbits in The Lord of the Rings
- formal name = `[Nickname] [Role]`

## Team roster

- **Frodo Orchestrator**
  - internal slug: `orchestrator`
  - role: workflow owner, delegation, sequencing, review gates, handoffs

- **Bilbo Product Lead**
  - internal slug: `product-lead`
  - role: product framing, scoping, prioritisation, MVP definition

- **Peregrin Tech Lead**
  - internal slug: `tech-lead`
  - role: architecture, implementation planning, engineering tradeoffs

- **Rosie UI/UX Designer**
  - internal slug: `ui-ux-designer`
  - role: interaction design, flows, layout, copy, anti-slop review

- **Merry Frontend Engineer**
  - internal slug: `frontend-engineer`
  - role: user-facing implementation, component structure, accessibility, polish

- **Samwise Backend Engineer**
  - internal slug: `backend-engineer`
  - role: APIs, services, jobs, integrations, reliability

- **Hamfast Database Engineer**
  - internal slug: `database-engineer`
  - role: schema, migrations, indexes, query and data-model quality

- **Primula QA Lead**
  - internal slug: `qa-lead`
  - role: acceptance criteria, test plans, regressions, release confidence

- **Fredegar Security Reviewer**
  - internal slug: `security-reviewer`
  - role: auth, permissions, secrets, privacy, OWASP-style review

- **Odo Release Engineer**
  - internal slug: `release-engineer`
  - role: rollout, rollback, release readiness, deployment sanity

- **Drogo Investigator / Retro Lead**
  - internal slug: `investigator-retro-lead`
  - role: debugging, incident analysis, retros, process improvement

## Working model

- Frodo Orchestrator decides which specialist should engage and in what order.
- Not every task needs every role.
- Default serious delivery flow:
  1. Bilbo Product Lead
  2. Peregrin Tech Lead
  3. Rosie UI/UX Designer
  4. Merry / Samwise / Hamfast as needed
  5. Primula QA Lead
  6. Fredegar Security Reviewer when relevant
  7. Odo Release Engineer
  8. Drogo Investigator / Retro Lead after incidents or launches when useful
