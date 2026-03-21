# Changelog

## [Unreleased]

## [1.0.0] — 2026-03-21

### Changed
- Control library bumped to v1.0.0 (was v0.1.0); library file renamed `library.v0.1.json` → `library.v1.0.json`
- `skill.json` controlLibraryVersionRange updated to `>=1.0.0 <2.0.0`
- Skill version and library version constants both set to `1.0.0`

## [0.2.1] — 2026-03-21

### Fixed
- SKILL.md and README.md incorrectly stated 6 stable controls — there are 7 (NC-OC-009 was missing from the docs table)
- Added NC-OC-009 (Info: OpenClaw update available) to control tables in SKILL.md and README.md

## [0.2.0] — 2026-03-21

### Removed
- Dashboard/link feature (`handleLink`, `clawvitals link`, `org_token`, `pending_org_token`, `agent-session.json`, `AgentSession` type, `PlatformClient`, `retryPendingOrgToken`) — the platform is not live in v0.1.x. These were dead code that introduced unnecessary scanner surface. Will be reintroduced when the dashboard ships.

### Changed
- `ScanOrchestrator` no longer accepts or holds a `PlatformClient` dependency
- `ConfigManager` no longer has `getAgentSession`, `saveAgentSession`, or `clearAgentSession` methods
- `skill.json` intents: removed `clawvitals link *` handler

## [0.1.9] — 2026-03-21

### Fixed
- `skill.json` version was stuck at `0.1.0` — now correctly tracks package version
- Added `"always": false` to `skill.json` — explicitly declares skill is not autonomously invoked without user intent

## [0.1.8] — 2026-03-21

### Added
- Uninstall instructions in SKILL.md and README.md (`npx clawhub@latest uninstall clawvitals` + manual removal of scan history)

## [0.1.7] — 2026-03-21

### Changed
- `src/telemetry/index.ts` — added inline comments documenting every transmitted field and an explicit "never sent" list, so the full audit surface is visible without truncation
- Added `SECURITY.md` — machine- and human-readable declaration of telemetry fields, local token storage behaviour, and network permissions

## [0.1.6] — 2026-03-21

### Fixed
- Excluded `package-lock.json` from published skill bundle — the lockfile included transitive peer dependencies from `openclaw` itself (AWS SDK, Anthropic SDK, ACP SDK, etc.) which are not runtime deps of ClawVitals. Skills are instruction-only; users don't run `npm install` against them. The lockfile was misleading to security scanners.
- `SKILL_VERSION` and `LIBRARY_VERSION` constants updated to match package version

## [0.1.5] — 2026-03-21

### Changed
- Updated description to include 'security' and 'secure' keywords for search discoverability

## [0.1.x] — 2026-03-19 to 2026-03-21

Pre-release development leading to v1.0.0. All v0.1.x work is represented in the v1.0.0 release.
