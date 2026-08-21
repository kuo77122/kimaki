import { describe, expect, test } from 'vitest'
import { buildMaintenanceGitCommand } from './maintenance.js'

describe('maintenance worktree commands', () => {
  test('passes shell expansion syntax in a custom worktree path literally', () => {
    expect(
      buildMaintenanceGitCommand({
        worktreeDirectory: '/tmp/Feature/with`true`',
        command: 'symbolic-ref --short HEAD',
      }),
    ).toBe("git -C '/tmp/Feature/with`true`' symbolic-ref --short HEAD")
  })
})
