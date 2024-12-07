import * as React from "react"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

interface StepsProps extends React.HTMLAttributes<HTMLDivElement> {
  steps: number
  currentStep?: number
  orientation?: "vertical" | "horizontal"
}

export function Steps({
  steps,
  currentStep = 1,
  orientation = "vertical",
  className,
  ...props
}: StepsProps) {
  return (
    <div
      className={cn(
        "relative",
        orientation === "horizontal" ? "flex justify-between" : "flex-col space-y-4",
        className
      )}
      {...props}
    >
      {Array.from({ length: steps }, (_, i) => i + 1).map((step) => (
        <div
          key={step}
          className={cn(
            "flex items-center gap-2",
            orientation === "vertical" && "flex-1"
          )}
        >
          <div
            className={cn(
              "relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-sm font-medium",
              step < currentStep
                ? "border-primary bg-primary text-primary-foreground"
                : step === currentStep
                ? "border-primary"
                : "border-muted"
            )}
          >
            {step < currentStep ? (
              <Check className="h-4 w-4" />
            ) : (
              <span>{step}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

interface StepProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  description?: string
}

export function Step({
  title,
  description,
  children,
  className,
  ...props
}: StepProps) {
  return (
    <div
      className={cn("space-y-2", className)}
      {...props}
    >
      {title && (
        <h3 className="font-medium leading-none tracking-tight">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-sm text-muted-foreground">
          {description}
        </p>
      )}
      {children}
    </div>
  )
}
