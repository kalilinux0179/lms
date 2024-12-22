import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"
import { useState } from "react"

const Profile = () => {
  const [isLoading,setIsLoading] = useState(false);
  return (
    <>
      <main className='min-h-screen pt-20 pb-8'>
        <div className="container mx-auto">
          <div className="space-y-4">
            <h1 className='text-4xl font-bold tracking-wider text-center md:text-left'>My Profile</h1>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="flex flex-col items-center">
                <Avatar className="h-24 w-24 md:h-32 md:w-32">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div>
                <div className="space-y-2">
                  <p className="text-lg text-muted-foreground tracking-wider capitalize">Hacker</p>
                  <p className="text-lg text-muted-foreground">hacker@hacker.com</p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="rounded-full tracking-wider">Edit Profile</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                          Make changes to your profile here. Click save when you're done.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="username" className="text-right">
                            Username
                          </Label>
                          <Input
                            type="text"
                            id="username"
                            className="col-span-3"
                            value=""
                            placeholder="username"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="username" className="text-right">
                            Photo
                          </Label>
                          <Input 
                          type="file" 
                          id="username" 
                          className="col-span-3"
                          accept="image/*"
                          value="" 
                           />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit" 
                        className="rounded-full px-6 tracking-wider"
                        disabled={isLoading}
                        >
                          {
                            isLoading?
                            (
                              <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Changing...
                              </>
                            ):"Save Changes"
                          }
                          </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Profile
