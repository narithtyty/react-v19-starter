import * as React from "react"
import { cn } from "@/lib/utils"

export interface CodeProps
  extends React.HTMLAttributes<HTMLPreElement> {
  children: React.ReactNode
}

const Code = React.forwardRef<HTMLPreElement, CodeProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <pre
        ref={ref}
        className={cn(
          "m-2 overflow-x-auto rounded-lg border bg-muted px-4 py-3 font-mono text-sm",
          className
        )}
        {...props}
      >
        {children}
      </pre>
    )
  }
)
Code.displayName = "Code"

export { Code }
