---
name: gizmo-team
description: Gizmo Team workflow orchestration for software project design and delivery. Use when the user explicitly wants the Gizmo Team approach, wants multiple specialist roles to collaborate, or wants a structured project workflow that coordinates product, design, engineering, QA, security, release, and retrospectives.
---

# Gizmo Team

Use this skill as the **team operating model** for software projects.

This skill defines:
- when to engage the team
- which specialist roles to use
- how they should collaborate
- how to synthesise their outputs

Do not use this skill for ordinary one-shot questions.

## Team members
- gizmo-product-lead
- gizmo-tech-lead
- gizmo-ui-ux-designer
- gizmo-frontend-engineer
- gizmo-backend-engineer
- gizmo-database-engineer
- gizmo-qa-lead
- gizmo-security-reviewer
- gizmo-release-engineer
- gizmo-investigator-retro-lead

Treat each role as a specialist that can be run as its own spawned agent when useful.

## Default project workflow
1. Product Lead — define the problem, scope, and MVP
2. Tech Lead — shape architecture and engineering approach
3. UI/UX Designer — shape experience, flows, hierarchy, and interaction
4. Frontend / Backend / Database — design implementation details as needed
5. QA Lead — turn the plan into testable quality expectations
6. Security Reviewer — review auth, privacy, permissions, and risks when relevant
7. Release Engineer — check rollout, rollback, and launch readiness
8. Investigator / Retro Lead — analyse incidents, lessons, and process improvements after launches or failures

## Operating rules
- Do not force every role into every task.
- Use only the specialists that materially improve the outcome.
- Let roles disagree when tradeoffs are real.
- End with one clear synthesis and recommended next step.
- Prefer a sharp project workflow over roleplay theatre.

## Default output
1. Objective
2. Relevant team roles
3. Each role's key contribution
4. Main tradeoffs / disagreements
5. Final synthesis
6. Recommended next step
