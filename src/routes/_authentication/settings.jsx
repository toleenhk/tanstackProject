import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authentication/settings')({
  component: () => <div>Hello /_authentication/settings!</div>
})