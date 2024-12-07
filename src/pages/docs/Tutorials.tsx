import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Bot, FileCode, Image, Rocket, Clock, Book } from "lucide-react"

export default function Tutorials() {
  const categories = [
    {
      name: "Text Generation",
      icon: Bot,
      tutorials: [
        {
          title: "Building a Chatbot",
          description: "Create an interactive chatbot using Genesis model",
          duration: "45 mins",
          difficulty: "Intermediate",
          tags: ["Genesis", "Real-time", "Interactive"],
        },
        {
          title: "Content Generation",
          description: "Generate blog posts and articles automatically",
          duration: "30 mins",
          difficulty: "Beginner",
          tags: ["Genesis", "Content", "Automation"],
        },
      ],
    },
    {
      name: "File Analysis",
      icon: FileCode,
      tutorials: [
        {
          title: "Code Review Assistant",
          description: "Analyze and improve code quality",
          duration: "60 mins",
          difficulty: "Advanced",
          tags: ["Explorer", "Code", "Analysis"],
        },
        {
          title: "Document Processing",
          description: "Extract insights from documents",
          duration: "40 mins",
          difficulty: "Intermediate",
          tags: ["Explorer", "Documents", "Data"],
        },
      ],
    },
    {
      name: "Image Generation",
      icon: Image,
      tutorials: [
        {
          title: "Style Transfer",
          description: "Apply artistic styles to images",
          duration: "35 mins",
          difficulty: "Intermediate",
          tags: ["Quantum", "Art", "Creative"],
        },
        {
          title: "Image Editing",
          description: "Advanced image manipulation techniques",
          duration: "50 mins",
          difficulty: "Advanced",
          tags: ["Quantum", "Editing", "Design"],
        },
      ],
    },
  ]

  const popularTutorials = [
    {
      title: "Getting Started with AI Models",
      description: "Learn the basics of our AI models",
      progress: 0,
      icon: Rocket,
    },
    {
      title: "Real-time Processing",
      description: "Handle real-time data processing",
      progress: 30,
      icon: Clock,
    },
    {
      title: "Advanced Techniques",
      description: "Master advanced AI features",
      progress: 60,
      icon: Book,
    },
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "beginner":
        return "bg-green-500"
      case "intermediate":
        return "bg-yellow-500"
      case "advanced":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="container mx-auto py-4 sm:py-6 px-4 sm:px-6 max-w-full sm:max-w-7xl">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">Tutorials</h1>
          <p className="text-muted-foreground">Learn how to use our platform effectively</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {popularTutorials.map((tutorial, index) => (
            <Card key={index} className="w-full">
              <CardHeader className="space-y-2">
                <div className="flex items-center gap-2">
                <tutorial.icon className="h-5 w-5" />
                  <CardTitle className="text-lg sm:text-xl">{tutorial.title}</CardTitle>
                </div>
                <CardDescription className="text-sm">{tutorial.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Progress</span>
                    <span>{tutorial.progress}%</span>
                  </div>
                  <Progress value={tutorial.progress} className="h-2" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-6">
          {categories.map((category, index) => (
            <Card key={index} className="w-full">
              <CardHeader>
                <div className="flex items-center gap-2">
                <category.icon className="h-5 w-5" />
                  <CardTitle className="text-xl sm:text-2xl">{category.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {category.tutorials.map((tutorial, tutorialIndex) => (
                    <div key={tutorialIndex} className="p-4 bg-muted rounded-lg space-y-3">
                      <div className="space-y-1">
                        <h3 className="font-medium text-base sm:text-lg">{tutorial.title}</h3>
                        <p className="text-sm text-muted-foreground">{tutorial.description}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {tutorial.duration}
                        </Badge>
                        <Badge variant="outline" className={`text-xs ${getDifficultyColor(tutorial.difficulty)}`}>
                          {tutorial.difficulty}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {tutorial.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
