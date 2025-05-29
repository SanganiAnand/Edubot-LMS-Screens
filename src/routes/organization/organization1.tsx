import Organization1 from '@/pages/organization/organization1'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/organization/organization1')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <Organization1 />
    </div>
  )
}
