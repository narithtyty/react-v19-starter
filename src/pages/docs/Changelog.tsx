import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bot, Zap, Sparkles, Bug, Wrench, Star } from "lucide-react"

export default function Changelog() {
  const releases = [
    {
      version: "2.1.0",
      date: "December 7, 2023",
      type: "major",
      changes: [
        {
          type: "feature",
          title: "New Genesis Model Features",
          description: "Enhanced text generation capabilities with better context understanding",
          icon: Bot,
        },
        {
          type: "improvement",
          title: "Explorer Performance",
          description: "50% faster file analysis with improved accuracy",
          icon: Zap,
        },
        {
          type: "feature",
          title: "Quantum Model Updates",
          description: "New style transfer options and improved image quality",
          icon: Sparkles,
        },
      ],
    },
    {
      version: "2.0.5",
      date: "November 30, 2023",
      type: "patch",
      changes: [
        {
          type: "fix",
          title: "Bug Fixes",
          description: "Fixed memory leak in long-running processes",
          icon: Bug,
        },
        {
          type: "improvement",
          title: "API Optimization",
          description: "Reduced API response time by 30%",
          icon: Wrench,
        },
      ],
    },
    {
      version: "2.0.0",
      date: "November 15, 2023",
      type: "major",
      changes: [
        {
          type: "feature",
          title: "New UI Design",
          description: "Complete redesign of the platform interface",
          icon: Star,
        },
        {
          type: "feature",
          title: "SDK 2.0",
          description: "Major update to our SDK with new features",
          icon: Zap,
        },
      ],
    },
  ]

  const getVersionBadge = (type: string) => {
    switch (type) {
      case "major":
        return <Badge className="bg-blue-500">Major Release</Badge>
      case "minor":
        return <Badge variant="secondary">Minor Release</Badge>
      case "patch":
        return <Badge variant="outline">Patch</Badge>
      default:
        return null
    }
  }

  const getChangeTypeBadge = (type: string) => {
    switch (type) {
      case "feature":
        return <Badge className="bg-green-500">New Feature</Badge>
      case "improvement":
        return <Badge className="bg-blue-500">Improvement</Badge>
      case "fix":
        return <Badge variant="destructive">Bug Fix</Badge>
      default:
        return null
    }
  }

  return (
    <div className="container mx-auto py-4 sm:py-6 px-4 sm:px-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">Changelog</h1>
          <p className="text-muted-foreground">Latest updates and improvements</p>
        </div>
      </div>

      <div className="space-y-6">
        {releases.map((release, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <div>
                  <CardTitle>Version {release.version}</CardTitle>
                  <CardDescription>{release.date}</CardDescription>
                </div>
                {getVersionBadge(release.type)}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 text-sm sm:text-base">
                {release.changes.map((change, idx) => (
                  <div key={idx}>
                    <h3 className="font-medium mb-2 text-base sm:text-lg">{change.type === "feature" ? "✨ Features" : change.type === "improvement" ? "📈 Improvements" : "🐛 Bug Fixes"}</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>
                        {change.title} - {change.description}
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
