import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Plus, UserPlus, Settings, MoreVertical } from "lucide-react"
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Edit, UserCog, Trash, X } from "lucide-react"

export default function Team() {
  const teamMembers = [
    {
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      avatar: "/avatars/01.png",
      status: "Active",
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      role: "Member",
      avatar: "/avatars/02.png",
      status: "Active",
    },
    {
      name: "Mike Johnson",
      email: "mike@example.com",
      role: "Member",
      avatar: "/avatars/03.png",
      status: "Active",
    },
  ]

  const pendingInvites = [
    {
      email: "sarah@example.com",
      role: "Member",
      invitedBy: "John Doe",
      date: "2 days ago",
    },
  ]

  return (
    <div className="container mx-auto py-4 sm:py-6 px-4 sm:px-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">Team Settings</h1>
          <p className="text-muted-foreground">Manage your team members and roles</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Member
        </Button>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Team Members</CardTitle>
            <CardDescription>View and manage your team members</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow className="hidden sm:table-row">
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {teamMembers.map((member) => (
                    <TableRow key={member.email} className="sm:table-row flex flex-col sm:flex-row">
                      <TableCell className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={member.avatar} alt={member.name} />
                          <AvatarFallback>{member.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col sm:hidden">
                          <span className="font-medium">{member.name}</span>
                          <span className="text-sm text-muted-foreground">{member.email}</span>
                          <span className="text-sm text-muted-foreground">{member.role}</span>
                          <Badge 
                            variant={member.status === 'Active' ? 'default' : 'secondary'}
                            className="w-fit mt-1"
                          >
                            {member.status}
                          </Badge>
                        </div>
                        <span className="hidden sm:inline">{member.name}</span>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">{member.email}</TableCell>
                      <TableCell className="hidden sm:table-cell">{member.role}</TableCell>
                      <TableCell className="hidden sm:table-cell">
                        <Badge variant={member.status === 'Active' ? 'default' : 'secondary'}>
                          {member.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <UserCog className="mr-2 h-4 w-4" />
                              Change Role
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                              <Trash className="mr-2 h-4 w-4" />
                              Remove
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pending Invitations</CardTitle>
            <CardDescription>Manage team invitations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow className="hidden sm:table-row">
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Invited By</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pendingInvites.map((invite) => (
                    <TableRow key={invite.email} className="sm:table-row flex flex-col sm:flex-row">
                      <TableCell>
                        <div className="flex flex-col sm:hidden">
                          <span className="font-medium">{invite.email}</span>
                          <span className="text-sm text-muted-foreground">{invite.role}</span>
                          <span className="text-sm text-muted-foreground">By: {invite.invitedBy}</span>
                          <span className="text-sm text-muted-foreground">{invite.date}</span>
                        </div>
                        <span className="hidden sm:inline">{invite.email}</span>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">{invite.role}</TableCell>
                      <TableCell className="hidden sm:table-cell">{invite.invitedBy}</TableCell>
                      <TableCell className="hidden sm:table-cell">{invite.date}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon" className="text-destructive">
                          <X className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
