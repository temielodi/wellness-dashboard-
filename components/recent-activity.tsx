"use client"

import { Activity, CheckCircle, Target, Trophy } from "lucide-react"

const activities = [
  {
    icon: CheckCircle,
    description: "Completed daily meditation goal",
    timestamp: "Today, 9:30 AM",
  },
  {
    icon: Target,
    description: "Added new goal: Reduce screen time",
    timestamp: "Yesterday, 4:15 PM",
  },
  {
    icon: Activity,
    description: "Updated progress on running goal",
    timestamp: "Yesterday, 2:30 PM",
  },
  {
    icon: Trophy,
    description: "Achieved 7-day streak for water intake",
    timestamp: "May 1, 2025",
  },
  {
    icon: CheckCircle,
    description: "Completed sleep goal for the week",
    timestamp: "April 30, 2025",
  },
]

export function RecentActivity() {
  return (
    <div className="space-y-8">
      {activities.map((activity, index) => (
        <div key={index} className="flex items-start">
          <div className="mr-4 mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-muted">
            <activity.icon className="h-4 w-4" />
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">{activity.description}</p>
            <p className="text-sm text-muted-foreground">{activity.timestamp}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
