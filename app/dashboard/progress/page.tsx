import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { Overview } from "@/components/overview"

export default function ProgressPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Progress" text="Track your wellness journey over time." />
      <Card>
        <CardHeader>
          <CardTitle>Progress Overview</CardTitle>
          <CardDescription>Your wellness progress over the past 30 days.</CardDescription>
        </CardHeader>
        <CardContent className="pl-2">
          <Overview />
        </CardContent>
      </Card>
    </DashboardShell>
  )
}
