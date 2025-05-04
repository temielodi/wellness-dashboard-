"use client"

import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { GoalsList } from "@/components/goals-list"
import { AddGoalDialog } from "@/components/add-goal-dialog"

export default function GoalsPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Goals" text="Create and manage your wellness goals.">
        <AddGoalDialog />
      </DashboardHeader>
      <GoalsList />
    </DashboardShell>
  )
}
