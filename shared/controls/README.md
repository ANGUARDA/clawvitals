# ClawVitals Control Library

The `library.v1.0.json` file is the authoritative source of control definitions used by both the skill and the plugin.

## Structure

Each control has:
- `id` — unique identifier (e.g. `NC-OC-004`)
- `name` — human-readable name
- `domain` — control domain (OC, AUTH, VERS)
- `severity` — critical / high / medium / low / info
- `status` — stable / experimental
- `check.source` — which CLI command provides the data
- `check.condition` — the PASS condition
- `remediation` — exact fix text

## Versioning

The library version is independent of the skill and plugin versions.
Current: `v1.0.0`

When controls are added, changed, or removed, bump the library version and update both `skill/skill.json` (`controlLibraryVersion`) and `plugin/package.json`.
