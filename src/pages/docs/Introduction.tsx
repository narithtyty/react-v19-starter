import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Zap, Bot, Lightbulb } from "lucide-react"

export default function Introduction() {
  const features = [
    {
      title: "Genesis Model",
      description: "Advanced text generation with fine-tuned controls",
      icon: Bot,
      tags: ["Text Generation", "Content Creation", "Code Assistance"],
    },
    {
      title: "Explorer Model",
      description: "Intelligent file analysis and data extraction",
      icon: Zap,
      tags: ["File Analysis", "Data Processing", "Pattern Recognition"],
    },
    {
      title: "Quantum Model",
      description: "State-of-the-art image generation and manipulation",
      icon: Sparkles,
      tags: ["Image Generation", "Style Transfer", "Visual Editing"],
    },
  ]

  const highlights = [
    {
      title: "Modern Architecture",
      description: "Built with React 19, TypeScript, and modern web standards",
    },
    {
      title: "AI-Powered",
      description: "Cutting-edge AI models for various use cases",
    },
    {
      title: "Developer-First",
      description: "Comprehensive API documentation and developer tools",
    },
    {
      title: "Scalable",
      description: "Enterprise-ready architecture that grows with your needs",
    },
  ]

  return (
    <div className="container mx-auto py-6">
      <div className="flex flex-col gap-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Welcome to Our Platform</h1>
          <p className="text-muted-foreground">
            Discover the power of AI-driven solutions for your applications
          </p>
        </div>

        <Alert>
          <Lightbulb className="h-4 w-4" />
          <AlertTitle>Getting Started</AlertTitle>
          <AlertDescription>
            New to our platform? Check out our{" "}
            <a href="/docs/get-started" className="font-medium underline">
              quick start guide
            </a>{" "}
            to begin your journey.
          </AlertDescription>
        </Alert>

        <Tabs defaultValue="features" className="w-full">
          <TabsList>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="highlights">Highlights</TabsTrigger>
          </TabsList>

          <TabsContent value="features">
            <div className="grid gap-4 md:grid-cols-3">
              {features.map((feature, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <feature.icon className="h-5 w-5 text-primary" />
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </div>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {feature.tags.map((tag, idx) => (
                        <Badge key={idx} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="highlights">
            <Card>
              <CardContent className="pt-6">
                <div className="grid gap-4 md:grid-cols-2">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="space-y-2">
                      <h3 className="font-semibold">{highlight.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card>
          <CardHeader>
            <CardTitle>Why Choose Our Platform?</CardTitle>
            <CardDescription>
              Discover the advantages of our AI-powered solutions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="prose prose-gray dark:prose-invert">
              <p>
                Our platform combines cutting-edge AI technology with developer-friendly
                tools to help you build powerful applications. Here's what sets us
                apart:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>State-of-the-art AI models for various use cases</li>
                <li>Comprehensive API documentation and SDKs</li>
                <li>Enterprise-grade security and compliance</li>
                <li>Flexible pricing plans for teams of all sizes</li>
                <li>24/7 technical support and community resources</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
