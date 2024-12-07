import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileUp, Search, Download, Clock, Settings } from "lucide-react";

export default function Explorer() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<string | null>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleAnalyze = async () => {
    if (!selectedFile) return;
    
    setAnalyzing(true);
    setProgress(0);
    
    // Simulate analysis progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setAnalyzing(false);
          setResult("File analysis complete. Here are the insights...");
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  return (
    <div className="container mx-auto py-4 sm:py-6 px-4 sm:px-6 space-y-6 sm:space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">Explorer Model</h1>
          <p className="text-muted-foreground">Advanced file analysis and understanding</p>
        </div>
        <Badge variant="secondary" className="px-3 sm:px-4 py-1">
          v1.5
        </Badge>
      </div>

      <Tabs defaultValue="analyze" className="space-y-6">
        <TabsList className="w-full sm:w-auto flex justify-between sm:justify-start">
          <TabsTrigger value="analyze" className="flex-1 sm:flex-none">Analyze</TabsTrigger>
          <TabsTrigger value="history" className="flex-1 sm:flex-none">History</TabsTrigger>
          <TabsTrigger value="settings" className="flex-1 sm:flex-none">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="analyze" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>File Upload</CardTitle>
              <CardDescription>Upload a file for AI analysis</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="file">File</Label>
                <Input 
                  id="file" 
                  type="file" 
                  onChange={handleFileSelect}
                  accept=".txt,.pdf,.doc,.docx"
                  className="mr-4 py-2 px-4 rounded-full border-0 text-sm font-semibold hover:bg-accent"
                />
              </div>
              {selectedFile && (
                <div className="text-sm text-muted-foreground">
                  Selected: {selectedFile.name}
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button 
                className="ml-auto" 
                onClick={handleAnalyze}
                disabled={!selectedFile || analyzing}
              >
                {analyzing ? (
                  <>
                    <Search className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Search className="mr-2 h-4 w-4" />
                    Analyze File
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>

          {analyzing && (
            <Card>
              <CardHeader>
                <CardTitle>Analysis Progress</CardTitle>
                <CardDescription>Processing your file...</CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={progress} className="w-full" />
                <p className="mt-2 text-sm text-muted-foreground text-center">
                  {progress}% complete
                </p>
              </CardContent>
            </Card>
          )}

          {result && (
            <Card>
              <CardHeader>
                <CardTitle>Analysis Results</CardTitle>
                <CardDescription>AI-generated insights from your file</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[150px] sm:h-[200px] w-full rounded-md border p-4">
                  {result}
                </ScrollArea>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="ml-auto">
                  <Download className="mr-2 h-4 w-4" />
                  Download Report
                </Button>
              </CardFooter>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Analysis History</CardTitle>
              <CardDescription>View your recent file analyses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <Clock className="mx-auto h-8 w-8 mb-4" />
                No analysis history available
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Analysis Settings</CardTitle>
              <CardDescription>Configure analysis parameters</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center py-8 text-muted-foreground">
                No configurable settings available
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
