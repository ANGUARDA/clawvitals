import * as fs from "node:fs";
import * as path from "node:path";

export interface ExportResult {
  found: boolean;
  content?: string;
  path?: string;
  message?: string;
}

const RUNS_DIR = "clawvitals/runs";

export function getLatestReport(workspaceDir: string, format: "markdown" | "path" = "markdown"): ExportResult {
  const runsPath = path.join(workspaceDir, RUNS_DIR);
  try {
    const entries = fs.readdirSync(runsPath).sort();
    if (entries.length === 0) {
      return { found: false, message: "No scan history yet. Run clawvitals first." };
    }

    const latest = entries[entries.length - 1];
    const latestDir = path.join(runsPath, latest);

    if (format === "path") {
      return { found: true, path: latestDir };
    }

    const reportPath = path.join(latestDir, "report.txt");
    const content = fs.readFileSync(reportPath, "utf8");
    return { found: true, content };
  } catch {
    return { found: false, message: "No scan history yet. Run clawvitals first." };
  }
}
