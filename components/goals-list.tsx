"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useGoals } from "@/contexts/goals-context"

export function GoalsList() {
  const { goals, updateGoalProgress } = useGoals()

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {goals.map((goal) => (
        <Card key={goal.id}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>{goal.title}</CardTitle>
              <Badge>{goal.category}</Badge>
            </div>
            <CardDescription>{goal.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>
                  Progress: {goal.progress} / {goal.target} {goal.unit}
                </span>
                <span>{Math.round((goal.progress / goal.target) * 100)}%</span>
              </div>
              <Progress value={(goal.progress / goal.target) * 100} />
            </div>
            <div className="text-sm text-muted-foreground">Due: {goal.dueDate}</div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              variant="outline"
              size="sm"
              onClick={() => updateGoalProgress(goal.id, false)}
              disabled={goal.progress <= 0}
            >
              Decrease
            </Button>
            <Button size="sm" onClick={() => updateGoalProgress(goal.id, true)} disabled={goal.progress >= goal.target}>
              Increase
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
