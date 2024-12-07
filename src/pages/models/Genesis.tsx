import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Wand2, Settings, History, Save } from "lucide-react";

export default function Genesis() {
  const [prompt, setPrompt] = useState("");
  const [temperature, setTemperature] = useState([0.7]);
  const [streamResponse, setStreamResponse] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [result, setResult] = useState("");

  const handleGenerate = async () => {
    setGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setResult("This is a simulated response from the Genesis model...");
      setGenerating(false);
    }, 2000);
  };

  return (
    <div className="container mx-auto py-4 sm:py-6 px-4 sm:px-6 space-y-6 sm:space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">Genesis Model</h1>
          <p className="text-muted-foreground">Advanced text generation and completion</p>
        </div>
        <Badge variant="secondary" className="px-3 sm:px-4 py-1">
          v2.0
        </Badge>
      </div>

      <Tabs defaultValue="generate" className="space-y-6">
        <TabsList className="w-full sm:w-auto flex justify-between sm:justify-start">
          <TabsTrigger value="generate" className="flex-1 sm:flex-none">Generate</TabsTrigger>
          <TabsTrigger value="settings" className="flex-1 sm:flex-none">Settings</TabsTrigger>
          <TabsTrigger value="history" className="flex-1 sm:flex-none">History</TabsTrigger>
        </TabsList>

        <TabsContent value="generate" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Prompt</CardTitle>
              <CardDescription>Enter your prompt for text generation</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Enter your prompt here..."
                className="min-h-[200px]"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            </CardContent>
            <CardFooter className="justify-between">
              <div className="flex items-center space-x-2">
                <Switch
                  checked={streamResponse}
                  onCheckedChange={setStreamResponse}
                  id="stream-mode"
                />
                <Label htmlFor="stream-mode">Stream response</Label>
              </div>
              <Button 
                onClick={handleGenerate} 
                disabled={!prompt || generating}
              >
                <Wand2 className="mr-2 h-4 w-4" />
                {generating ? "Generating..." : "Generate"}
              </Button>
            </CardFooter>
          </Card>

          {result && (
            <Card>
              <CardHeader>
                <CardTitle>Generated Result</CardTitle>
                <CardDescription>AI-generated content based on your prompt</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="p-4 bg-muted rounded-lg whitespace-pre-wrap text-sm sm:text-base">
                  {result}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="ml-auto">
                  <Save className="mr-2 h-4 w-4" />
                  Save Result
                </Button>
              </CardFooter>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Model Settings</CardTitle>
              <CardDescription>Configure generation parameters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label>Temperature</Label>
                  <span className="text-muted-foreground">{temperature[0]}</span>
                </div>
                <Slider
                  value={temperature}
                  onValueChange={setTemperature}
                  min={0}
                  max={1}
                  step={0.1}
                />
                <p className="text-sm text-muted-foreground">
                  Controls randomness: Lower values make the output more focused and deterministic
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Generation History</CardTitle>
              <CardDescription>View your recent generations</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground py-8">
                No generation history available
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
