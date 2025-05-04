"use client"

import type React from "react"
import { DashboardNav } from "@/components/dashboard-nav"
import { UserAccountNav } from "@/components/user-account-nav"
import { GoalsProvider } from "@/contexts/goals-context"

// Mock user data
const mockUser = {
  name: "Demo User",
  email: "demo@example.com",
  image: null,
}

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <GoalsProvider>
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex h-14 items-center">
            <div className="mr-4 hidden md:flex">
              <a href="/" className="mr-6 flex items-center space-x-2">
                <span className="font-bold">WellnessTracker</span>
              </a>
              <nav className="flex items-center space-x-6 text-sm font-medium">
                <a href="/dashboard" className="transition-colors hover:text-foreground/80">
                  Dashboard
                </a>
                <a href="/dashboard/goals" className="transition-colors hover:text-foreground/80">
                  Goals
                </a>
                <a href="/dashboard/progress" className="transition-colors hover:text-foreground/80">
                  Progress
                </a>
                <a href="/dashboard/settings" className="transition-colors hover:text-foreground/80">
                  Settings
                </a>
              </nav>
            </div>
            <div className="flex flex-1 items-center justify-end space-x-2">
              <UserAccountNav user={mockUser} />
            </div>
          </div>
        </header>
        <div className="grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
          <aside className="hidden w-[200px] flex-col md:flex">
            <DashboardNav />
          </aside>
          <main className="flex w-full flex-1 flex-col overflow-hidden py-6">{children}</main>
        </div>
      </div>
    </GoalsProvider>
  )
}
