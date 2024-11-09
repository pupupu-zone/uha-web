import { createFileRoute } from '@tanstack/react-router'

import { InitResetPage } from '@pages/auth-flows/reset-flow'

export const Route = createFileRoute('/_id/reset-password/init')({
  component: InitResetPage,
})
