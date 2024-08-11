import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authentication/dashboard')({
  component: () => <div>Hello /_authentication/dashboard!</div>
})