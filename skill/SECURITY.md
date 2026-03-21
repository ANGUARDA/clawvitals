# Security

## Telemetry

Telemetry is **off by default**. You must explicitly run `clawvitals telemetry on` to enable it.

When enabled, ClawVitals sends a single anonymous GET request to `https://telemetry.clawvitals.io/ping` after each scan.

### What is sent (complete list)

| Field | Value | Example |
|-------|-------|---------|
| `v`   | Skill version | `0.1.6` |
| `lv`  | Control library version | `0.1.0` |
| `s`   | Overall score (0–100) | `85` |
| `b`   | Score band | `green` |
| `sf`  | Number of FAIL findings | `2` |
| `sp`  | Number of PASS findings | `4` |
| `tr`  | Total lifetime scan count | `7` |
| `sc`  | `1` if scheduled, `0` if manual | `0` |
| `iid` | Random UUID generated at install | `a3f9...` |

The `iid` field is a random UUID generated once at install time and stored in `usage.json`. It is not derived from any system identifier, hostname, username, or hardware. Its sole purpose is to deduplicate scan counts in aggregate telemetry. If you prefer zero persistent identifiers, keep telemetry disabled.

### What is never sent

- Finding details, control IDs, or failure reasons
- File paths, hostnames, IP addresses, or usernames
- OpenClaw config, tokens, credentials, or secrets
- Tokens, credentials, or secrets of any kind

The full telemetry implementation is in [`src/telemetry/index.ts`](src/telemetry/index.ts) — it is intentionally short and fully auditable.

## Network permissions

`skill.json` declares one outbound network permission: `telemetry.clawvitals.io`. No other external endpoints are used.

## Reporting a vulnerability

Open an issue at [github.com/ANGUARDA/clawvitals-skill](https://github.com/ANGUARDA/clawvitals-skill) or email security@anguarda.com.
