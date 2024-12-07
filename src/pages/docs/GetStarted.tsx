import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Code } from "@/components/ui/code";
import { Bot, FileCode, Wrench, Terminal, Rocket } from "lucide-react";

export default function GetStarted() {
  const installationSteps = [
    {
      title: "npm",
      steps: [
        {
          title: "Create New Project",
          description: "Create a new project using our CLI tool",
          code: "npx create-our-platform-app my-app",
        },
        {
          title: "Install Dependencies",
          description: "Navigate to your project and install dependencies",
          code: "cd my-app\nnpm install",
        },
        {
          title: "Start Development",
          description: "Run the development server",
          code: "npm run dev",
        }
      ]
    },
    {
      title: "yarn",
      steps: [
        {
          title: "Create New Project",
          description: "Create a new project using our CLI tool",
          code: "yarn create our-platform-app my-app",
        },
        {
          title: "Install Dependencies",
          description: "Navigate to your project and install dependencies",
          code: "cd my-app\nyarn",
        },
        {
          title: "Start Development",
          description: "Run the development server",
          code: "yarn dev",
        }
      ]
    }
  ];

  const quickStartGuides = [
    {
      title: "Text Generation",
      description: "Generate text content using Genesis model",
      icon: Bot,
      steps: [
        "Configure model parameters",
        "Prepare your prompt",
        "Generate content",
        "Handle the response",
      ],
    },
    {
      title: "File Analysis",
      description: "Analyze files using Explorer model",
      icon: FileCode,
      steps: [
        "Upload your file",
        "Select analysis type",
        "Process the file",
        "View results",
      ],
    },
    {
      title: "Image Generation",
      description: "Create images using Quantum model",
      icon: Rocket,
      steps: [
        "Choose generation mode",
        "Set style parameters",
        "Generate image",
        "Save or edit result",
      ],
    },
  ];

  return (
    <div className="container mx-auto py-4 sm:py-6 px-4 sm:px-6 space-y-6 sm:space-y-8">
      <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-center">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Getting Started</h1>
          <p className="text-sm md:text-base text-muted-foreground">Quick guide to get you up and running</p>
        </div>
      </div>

      <div className="space-y-4 md:space-y-6">
        <Alert className="flex flex-col md:flex-row items-start md:items-center gap-2">
          <Terminal className="h-4 w-4 mt-1 md:mt-0" />
          <AlertTitle className="text-sm md:text-base">Installation</AlertTitle>
          <AlertDescription className="text-sm md:text-base">
            Follow these steps to set up your development environment
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader className="px-4 md:px-6">
            <CardTitle className="text-lg md:text-2xl">Installation Steps</CardTitle>
            <CardDescription className="text-sm md:text-base">Choose your preferred package manager</CardDescription>
          </CardHeader>
          <CardContent className="px-4 md:px-6">
            <Tabs defaultValue="npm" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                {installationSteps.map((tab) => (
                  <TabsTrigger key={tab.title} value={tab.title.toLowerCase()}>
                    {tab.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              {installationSteps.map((tab) => (
                <TabsContent key={tab.title} value={tab.title.toLowerCase()}>
                  <div className="space-y-4">
                    {tab.steps.map((step, index) => (
                      <div key={index} className="space-y-2 p-3 md:p-4 bg-muted rounded-lg">
                        <h3 className="font-medium text-sm md:text-base flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-xs">
                            {index + 1}
                          </span>
                          {step.title}
                        </h3>
                        <p className="text-xs md:text-sm text-muted-foreground">{step.description}</p>
                        <div className="mt-2">
                          <pre className="p-2 md:p-3 rounded bg-background overflow-x-auto text-xs md:text-sm">
                            <Code className="whitespace-pre-wrap break-all md:break-normal">{step.code}</Code>
                          </pre>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickStartGuides.map((guide, index) => (
            <Card key={index}>
              <CardHeader className="space-y-1">
                <div className="flex items-center gap-2">
                  {React.createElement(guide.icon, { className: "h-4 w-4 md:h-5 md:w-5" })}
                  <CardTitle className="text-base md:text-lg">{guide.title}</CardTitle>
                </div>
                <CardDescription className="text-xs md:text-sm">{guide.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {guide.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="text-xs md:text-sm flex items-center gap-2">
                      <span className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-primary/10 flex items-center justify-center text-xs">
                        {stepIndex + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg md:text-xl">Next Steps</CardTitle>
            <CardDescription className="text-sm md:text-base">
              Now that you've set up the basics, here are some resources to
              help you dive deeper:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Wrench className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm md:text-base">Explore advanced configuration options</span>
              </li>
              <li className="flex items-center gap-2">
                <Bot className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm md:text-base">Learn about model fine-tuning</span>
              </li>
              <li className="flex items-center gap-2">
                <Rocket className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm md:text-base">Check out our example projects</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
