import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ImagePlus, Sparkles, Image as ImageIcon, Settings, History, Download } from "lucide-react";

export default function Quantum() {
  const [prompt, setPrompt] = useState("");
  const [generating, setGenerating] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [selectedStyle, setSelectedStyle] = useState("realistic");
  const [enhanceDetails, setEnhanceDetails] = useState(true);

  const handleGenerate = async () => {
    if (!prompt) return;
    
    setGenerating(true);
    
    // Simulate image generation
    setTimeout(() => {
      setImages([
        "https://placehold.co/512x512/png",
        "https://placehold.co/512x512/png",
        "https://placehold.co/512x512/png",
        "https://placehold.co/512x512/png"
      ]);
      setGenerating(false);
    }, 3000);
  };

  return (
    <div className="container mx-auto py-4 sm:py-6 px-4 sm:px-6 space-y-6 sm:space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">Quantum Model</h1>
          <p className="text-muted-foreground">Advanced image generation and manipulation</p>
        </div>
        <Badge variant="secondary" className="px-3 sm:px-4 py-1">
          v3.0
        </Badge>
      </div>

      <Tabs defaultValue="generate" className="space-y-6">
        <TabsList className="w-full sm:w-auto flex justify-between sm:justify-start">
          <TabsTrigger value="generate" className="flex-1 sm:flex-none">Generate</TabsTrigger>
          <TabsTrigger value="history" className="flex-1 sm:flex-none">History</TabsTrigger>
          <TabsTrigger value="settings" className="flex-1 sm:flex-none">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="generate" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Image Generation</CardTitle>
              <CardDescription>Create stunning images with AI</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Style</Label>
                <Select value={selectedStyle} onValueChange={setSelectedStyle}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a style" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="realistic">Realistic</SelectItem>
                    <SelectItem value="artistic">Artistic</SelectItem>
                    <SelectItem value="abstract">Abstract</SelectItem>
                    <SelectItem value="cartoon">Cartoon</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Prompt</Label>
                <Textarea
                  placeholder="Describe the image you want to generate..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-[100px]"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  checked={enhanceDetails}
                  onCheckedChange={setEnhanceDetails}
                  id="enhance-details"
                />
                <Label htmlFor="enhance-details">Enhance details</Label>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                className="ml-auto"
                onClick={handleGenerate}
                disabled={!prompt || generating}
              >
                {generating ? (
                  <>
                    <Sparkles className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <ImagePlus className="mr-2 h-4 w-4" />
                    Generate Images
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>

          {images.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Generated Images</CardTitle>
                <CardDescription>Click on any image to download</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className="relative aspect-square rounded-lg overflow-hidden border bg-muted"
                    >
                      <img
                        src={image}
                        alt={`Generated ${index + 1}`}
                        className="object-cover w-full h-full"
                      />
                      <Button
                        variant="secondary"
                        size="icon"
                        className="absolute bottom-2 right-2"
                        onClick={() => window.open(image, '_blank')}
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Generation History</CardTitle>
              <CardDescription>View your recent image generations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <ImageIcon className="mx-auto h-8 w-8 mb-4" />
                No generation history available
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Model Settings</CardTitle>
              <CardDescription>Configure generation parameters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Default Style</Label>
                <Select defaultValue="realistic">
                  <SelectTrigger>
                    <SelectValue placeholder="Select default style" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="realistic">Realistic</SelectItem>
                    <SelectItem value="artistic">Artistic</SelectItem>
                    <SelectItem value="abstract">Abstract</SelectItem>
                    <SelectItem value="cartoon">Cartoon</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label>Image Resolution</Label>
                <Select defaultValue="512">
                  <SelectTrigger>
                    <SelectValue placeholder="Select resolution" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="256">256x256</SelectItem>
                    <SelectItem value="512">512x512</SelectItem>
                    <SelectItem value="1024">1024x1024</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
