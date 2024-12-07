import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { AlertCircle, Zap } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function Limits() {
  const limits = {
    apiCalls: {
      used: 75000,
      limit: 100000,
      percentage: 75,
    },
    storage: {
      used: 4.2,
      limit: 10,
      percentage: 42,
    },
    models: {
      genesis: {
        used: 1500,
        limit: 2000,
        percentage: 75,
      },
      explorer: {
        used: 800,
        limit: 1000,
        percentage: 80,
      },
      quantum: {
        used: 300,
        limit: 500,
        percentage: 60,
      },
    },
  }

  return (
    <div className="container mx-auto py-6">
      <div className="flex flex-col gap-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Usage Limits</h1>
          <p className="text-muted-foreground">
            Monitor and configure your usage limits
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>API Usage</CardTitle>
              <CardDescription>Track your API consumption</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>API Calls</span>
                  <span className="text-muted-foreground">
                    {limits.apiCalls.used.toLocaleString()} /{" "}
                    {limits.apiCalls.limit.toLocaleString()}
                  </span>
                </div>
                <Progress value={limits.apiCalls.percentage} />
              </div>

              {limits.apiCalls.percentage > 90 && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Usage Warning</AlertTitle>
                  <AlertDescription>
                    You are approaching your API usage limit. Consider upgrading
                    your plan.
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Storage Usage</CardTitle>
              <CardDescription>Monitor your storage consumption</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Storage Space</span>
                  <span className="text-muted-foreground">
                    {limits.storage.used}GB / {limits.storage.limit}GB
                  </span>
                </div>
                <Progress value={limits.storage.percentage} />
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Model Usage</CardTitle>
            <CardDescription>Track usage per AI model</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Genesis Model</span>
                  <span className="text-muted-foreground">
                    {limits.models.genesis.used} / {limits.models.genesis.limit}{" "}
                    credits
                  </span>
                </div>
                <Progress value={limits.models.genesis.percentage} />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Explorer Model</span>
                  <span className="text-muted-foreground">
                    {limits.models.explorer.used} / {limits.models.explorer.limit}{" "}
                    credits
                  </span>
                </div>
                <Progress value={limits.models.explorer.percentage} />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Quantum Model</span>
                  <span className="text-muted-foreground">
                    {limits.models.quantum.used} / {limits.models.quantum.limit}{" "}
                    credits
                  </span>
                </div>
                <Progress value={limits.models.quantum.percentage} />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Limit Settings</CardTitle>
            <CardDescription>Configure usage alerts and limits</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label className="text-sm font-medium">Usage Alerts</label>
                <p className="text-sm text-muted-foreground">
                  Receive notifications when approaching limits
                </p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="space-y-4">
              <label className="text-sm font-medium">Alert Threshold</label>
              <div className="flex items-center gap-4">
                <Slider
                  defaultValue={[80]}
                  max={100}
                  step={5}
                  className="flex-1"
                />
                <span className="w-12 text-sm text-muted-foreground">80%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button>
            <Zap className="mr-2 h-4 w-4" />
            Upgrade Limits
          </Button>
        </div>
      </div>
    </div>
  )
}
