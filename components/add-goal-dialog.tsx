"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useGoals } from "@/contexts/goals-context"

interface AddGoalDialogProps {
  trigger?: React.ReactNode
}

const categories = [
  "Fitness",
  "Nutrition",
  "Mental Health",
  "Sleep",
  "Digital Wellbeing",
  "Hydration",
  "Meditation",
  "Other",
]

export function AddGoalDialog({ trigger }: AddGoalDialogProps) {
  const { addGoal } = useGoals()
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    target: 0,
    unit: "",
    dueDate: "",
    progress: 0,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: Number.parseFloat(value) || 0 }))

    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.title.trim()) {
      newErrors.title = "Title is required"
    }

    if (!formData.category) {
      newErrors.category = "Category is required"
    }

    if (formData.target <= 0) {
      newErrors.target = "Target must be greater than 0"
    }

    if (!formData.unit.trim()) {
      newErrors.unit = "Unit is required"
    }

    if (!formData.dueDate.trim()) {
      newErrors.dueDate = "Due date is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      addGoal(formData)
      setFormData({
        title: "",
        description: "",
        category: "",
        target: 0,
        unit: "",
        dueDate: "",
        progress: 0,
      })
      setOpen(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger || <Button>Add Goal</Button>}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add New Goal</DialogTitle>
            <DialogDescription>Create a new wellness goal to track your progress.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="title" className="flex items-center justify-between">
                Title
                {errors.title && <span className="text-xs text-destructive">{errors.title}</span>}
              </Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className={errors.title ? "border-destructive" : ""}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={3}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="category" className="flex items-center justify-between">
                Category
                {errors.category && <span className="text-xs text-destructive">{errors.category}</span>}
              </Label>
              <Select value={formData.category} onValueChange={(value) => handleSelectChange("category", value)}>
                <SelectTrigger id="category" className={errors.category ? "border-destructive" : ""}>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="target" className="flex items-center justify-between">
                  Target
                  {errors.target && <span className="text-xs text-destructive">{errors.target}</span>}
                </Label>
                <Input
                  id="target"
                  name="target"
                  type="number"
                  min="0"
                  step="any"
                  value={formData.target || ""}
                  onChange={handleNumberChange}
                  className={errors.target ? "border-destructive" : ""}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="unit" className="flex items-center justify-between">
                  Unit
                  {errors.unit && <span className="text-xs text-destructive">{errors.unit}</span>}
                </Label>
                <Input
                  id="unit"
                  name="unit"
                  value={formData.unit}
                  onChange={handleChange}
                  placeholder="miles, hours, etc."
                  className={errors.unit ? "border-destructive" : ""}
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="dueDate" className="flex items-center justify-between">
                Due Date
                {errors.dueDate && <span className="text-xs text-destructive">{errors.dueDate}</span>}
              </Label>
              <Input
                id="dueDate"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleChange}
                placeholder="YYYY-MM-DD or 'Daily', 'Weekly', etc."
                className={errors.dueDate ? "border-destructive" : ""}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">Add Goal</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
