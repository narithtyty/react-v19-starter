import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CreditCard, Download, History } from "lucide-react"

export default function Billing() {
  const currentPlan = {
    name: "Pro Plan",
    price: "$49",
    period: "month",
    features: [
      "Unlimited API calls",
      "Advanced analytics",
      "24/7 support",
      "Custom integrations",
    ],
  }

  const usage = {
    api: { used: 75000, limit: 100000 },
    storage: { used: 4.2, limit: 10 },
  }

  const billingHistory = [
    {
      date: "Dec 1, 2023",
      amount: "$49.00",
      status: "Paid",
      invoice: "#INV-2023-12",
    },
    {
      date: "Nov 1, 2023",
      amount: "$49.00",
      status: "Paid",
      invoice: "#INV-2023-11",
    },
  ]

  return (
    <div className="container mx-auto py-6">
      <div className="flex flex-col gap-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Billing & Usage</h1>
          <p className="text-muted-foreground">
            Manage your subscription and billing information
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Current Plan</CardTitle>
              <CardDescription>Your current subscription plan</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold">{currentPlan.price}</span>
                    <span className="text-muted-foreground">
                      /{currentPlan.period}
                    </span>
                  </div>
                  <h3 className="font-semibold">{currentPlan.name}</h3>
                </div>
                <ul className="space-y-2">
                  {currentPlan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full">Upgrade Plan</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Usage Overview</CardTitle>
              <CardDescription>Monitor your API and storage usage</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>API Calls</span>
                  <span className="text-muted-foreground">
                    {usage.api.used.toLocaleString()} /{" "}
                    {usage.api.limit.toLocaleString()}
                  </span>
                </div>
                <Progress value={(usage.api.used / usage.api.limit) * 100} />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Storage</span>
                  <span className="text-muted-foreground">
                    {usage.storage.used}GB / {usage.storage.limit}GB
                  </span>
                </div>
                <Progress
                  value={(usage.storage.used / usage.storage.limit) * 100}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <div>
              <CardTitle>Payment Method</CardTitle>
              <CardDescription>Manage your payment details</CardDescription>
            </div>
            <Button variant="outline" size="icon">
              <CreditCard className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="rounded-md border p-2">
                <CreditCard className="h-4 w-4" />
              </div>
              <div>
                <p className="font-medium">•••• •••• •••• 4242</p>
                <p className="text-sm text-muted-foreground">
                  Expires 12/2024
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <div>
              <CardTitle>Billing History</CardTitle>
              <CardDescription>View your recent invoices</CardDescription>
            </div>
            <Button variant="outline" size="icon">
              <History className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {billingHistory.map((bill, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-2"
                >
                  <div>
                    <p className="font-medium">{bill.date}</p>
                    <p className="text-sm text-muted-foreground">
                      {bill.invoice}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span>{bill.amount}</span>
                    <Button variant="outline" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
