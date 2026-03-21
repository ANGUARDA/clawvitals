# ClawVitals

Security health check for self-hosted [OpenClaw](https://openclaw.ai) installations.

Check your OpenClaw security vitals — scans your installation, scores your setup, and shows you exactly what to fix.

🌐 **[clawvitals.io](https://clawvitals.io)**

---

## Repository structure

```
skill/      → ClawHub skill (instruction-based, stateless)
plugin/     → OpenClaw plugin (runtime, persistent) — coming soon
shared/
  controls/ → Control library (shared between skill and plugin)
```

## Skill

The skill is available now on ClawHub:

```bash
npx clawhub install clawvitals
```

Then in your OpenClaw messaging surface:
```
run clawvitals
```

→ [skill/README.md](skill/README.md) · [clawvitals.io/docs](https://clawvitals.io/docs)

## Plugin

The plugin adds scan history, delta detection, scheduled scans, exclusion management, and telemetry. Coming soon.

```bash
# When available:
openclaw plugins install @anguarda/clawvitals
```

→ [plugin/README.md](plugin/README.md)

## License

MIT — see [skill/LICENSE](skill/LICENSE)
