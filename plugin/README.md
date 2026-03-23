# ClawVitals Plugin

**Scaffold — not yet published.**

Extends the [ClawVitals skill](https://clawhub.com/skills/clawvitals) with recurring scans, posture history, and fleet management on [clawvitals.io/dashboard](https://clawvitals.io/dashboard).

## What the plugin adds

| Feature | Skill | Plugin |
|---|---|---|
| Point-in-time scans | ✅ | ✅ |
| Scan history | ❌ | ✅ |
| Recurring scheduled scans | ❌ | ✅ |
| Regression alerts | ❌ | ✅ |
| posture trend on dashboard | ❌ | ✅ |
| Fleet management (alias) | ❌ | ✅ |
| Telemetry | opt-in | **opt-out** |

## Telemetry

The plugin defaults telemetry **on**. This is intentional: the plugin exists specifically to power the [clawvitals.io/dashboard](https://clawvitals.io/dashboard). Telemetry is what makes the dashboard work.

What is sent (nothing else):
- Skill version, control library version
- Numeric score + band
- FAIL count, PASS count
- Total scan count (integer)
- Scheduled/manual flag
- Random install UUID (no PII)
- **Alias** (only if you set one — see Fleet Management)

What is never sent:
- Hostnames, usernames, IP addresses
- Finding details or control IDs
- Config, tokens, or secrets

Opt out at any time:
```
openclaw plugins config clawvitals set telemetry.enabled false
```

## Fleet Management

Give each installation a human-readable name for the dashboard:

```
set clawvitals alias prod-server-1
set clawvitals alias dev-laptop-bk
```

The alias is **user-set only** — never derived from the machine hostname or any other identifier. The dashboard shows:

```
prod-server-1   (iid: a3f2...)   85/100  🟢  last scan: 2h ago
dev-laptop-bk   (iid: 7c1b...)   70/100  🟡  last scan: 1d ago
<unnamed>       (iid: 9e4d...)   45/100  🔴  last scan: 3d ago
```

## Configuration

```json5
{
  plugins: {
    entries: {
      clawvitals: {
        telemetry: {
          enabled: true,          // opt OUT by setting false
          alias: "prod-server-1"  // optional — for fleet management
        },
        schedule: {
          enabled: true,
          cron: "0 9 * * *"       // 9 AM daily (default)
        },
        alerts: {
          on_regression: true,    // alert on score drop or new FAILs
          on_new_critical: true,  // alert immediately on new critical finding
          threshold: "high"       // minimum severity to alert
        },
        retention_days: 90
      }
    }
  }
}
```

## Directory structure

```
plugin/
├── src/
│   ├── index.ts        ← entry point + plugin registration (TODO: wire SDK)
│   ├── types.ts        ← plugin-specific type definitions
│   ├── telemetry.ts    ← telemetry client (opt-out default, alias support)
│   ├── scheduler.ts    ← cron config resolution + validation
│   ├── alerts.ts       ← regression and critical finding alert logic
│   └── alias.ts        ← alias validation + fleet display formatting
├── openclaw.plugin.json
├── package.json
└── tsconfig.json
```

## Status

🚧 Scaffold complete. Next steps:
- [ ] Wire OpenClaw plugin SDK (`definePluginEntry`)
- [ ] Implement plugin state store (install_id, total_pings, last_ping_at)
- [ ] Connect scheduled scan → skill invocation → telemetry ping pipeline
- [ ] Test against live OpenClaw plugin runtime
