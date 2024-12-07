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
      title: "Install Dependencies",
      description: "Install the required packages using your package manager",
      code: "npm install @our-platform/sdk",
    },
    {
      title: "Configure API Key",
      description: "Set up your API key in the configuration file",
      code: `const config = {
  apiKey: 'your-api-key',
  environment: 'production'
};`,
    },
    {
      title: "Initialize SDK",
      description: "Initialize the SDK in your application",
      code: `import { initializeSDK } from '@our-platform/sdk';

initializeSDK(config);`,
    },
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
    <div className="container mx-auto py-4 sm:py-6 px-4 sm:px-6 max-w-full sm:max-w-7xl">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">Getting Started</h1>
          <p className="text-muted-foreground">Quick guide to get you up and running</p>
        </div>
      </div>

      <div className="space-y-4 sm:space-y-6">
        <Alert className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
          <Terminal className="h-4 w-4 mt-1 sm:mt-0" />
          <AlertTitle>Installation</AlertTitle>
          <AlertDescription>
            Follow these steps to set up your development environment
          </AlertDescription>
        </Alert>

        <Card className="w-full">
          <CardHeader className="px-4 sm:px-6">
            <CardTitle className="text-xl sm:text-2xl">Installation Steps</CardTitle>
            <CardDescription className="text-sm sm:text-base">Complete these steps to get started</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 sm:space-y-6 px-4 sm:px-6">
            {installationSteps.map((step, index) => (
              <div key={index} className="space-y-2 p-3 sm:p-4 bg-muted rounded-lg">
                <h3 className="font-medium text-base sm:text-lg">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
                <div className="mt-2 -mx-3 sm:mx-0">
                  <div className="overflow-x-auto">
                    <pre className="p-3 sm:p-4 rounded bg-background">
                      <Code className="text-xs sm:text-sm whitespace-pre-wrap break-all sm:break-normal">{step.code}</Code>
                    </pre>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickStartGuides.map((guide, index) => (
            <Card key={index} className="w-full">
              <CardHeader className="space-y-1">
                <div className="flex items-center gap-2">
                  {React.createElement(guide.icon, { className: "h-5 w-5" })}
                  <CardTitle className="text-lg sm:text-xl">{guide.title}</CardTitle>
                </div>
                <CardDescription className="text-sm">{guide.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {guide.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="text-sm flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-xs">
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
            <CardTitle>Next Steps</CardTitle>
            <CardDescription>
              Now that you've set up the basics, here are some resources to
              help you dive deeper:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Wrench className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm sm:text-base">Explore advanced configuration options</span>
              </li>
              <li className="flex items-center gap-2">
                <Bot className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm sm:text-base">Learn about model fine-tuning</span>
              </li>
              <li className="flex items-center gap-2">
                <Rocket className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm sm:text-base">Check out our example projects</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
