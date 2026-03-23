/**
 * intents.ts — User command intent patterns for the ClawVitals plugin.
 *
 * These patterns mirror the skill's skill.json intent definitions so the plugin
 * can intercept them in before_agent_start and run its own pipeline instead.
 * Extracted to a separate module so they can be unit-tested without importing
 * the OpenClaw plugin SDK (which is an ESM bundle incompatible with Jest/CJS).
 */

/** Patterns that trigger a standard scan (mirrors skill.json intents). */
export const SCAN_PATTERNS: readonly string[] = [
  'run clawvitals',
  'clawvitals scan',
  'check clawvitals',
  'clawvitals check',
];

/** Patterns that trigger a full detail report (mirrors skill.json intents). */
export const DETAIL_PATTERNS: readonly string[] = [
  'show clawvitals details',
  'clawvitals full report',
  'clawvitals details',
];

/**
 * Returns true if the prompt starts with any of the given patterns,
 * case-insensitively. Trims leading/trailing whitespace before matching.
 */
export function matchesIntent(prompt: string, patterns: readonly string[]): boolean {
  const normalised = prompt.trim().toLowerCase();
  return patterns.some(p => normalised.startsWith(p));
}
