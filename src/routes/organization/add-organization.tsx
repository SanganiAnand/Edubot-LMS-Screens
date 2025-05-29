// routes/organization/add-organization.tsx
import AddOrganization from '@/pages/organization/add-organization'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/organization/add-organization')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <AddOrganization />
    </div>
  )
}

