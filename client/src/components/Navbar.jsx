import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button"
import { useDispatch, useSelector } from "react-redux";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { setLogOut } from "@/slices/UserSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch(setLogOut());
    navigate("/")
  }
  const user = useSelector((state) => state.user.user);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  return (
    <>
      <header className="w-full fixed h-16 shadow-md backdrop-blur-sm">
        <div className="container mx-auto h-full">
          <div className="flex items-center justify-between h-full">
            {/* left */}
            <h1 className="text-2xl font-bold">Mart</h1>
            {/* right  */}
            {
              isAuthenticated ? (
                <>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <div className="flex justify-center items-center gap-4 cursor-pointer">
                        <Avatar>
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <p className="text-[17px] tracking-wide capitalize">
                          {
                            user.username
                          }
                        </p>
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="cursor-pointer">
                        Dashboard
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="cursor-pointer">
                        Account Setting
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="cursor-pointer">
                        My Learning
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={handleLogOut} className="cursor-pointer">
                        Log out
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </>

              ) : (
                <Button asChild>
                  <Link to="/auth"> Login</Link>
                </Button>
              )
            }
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;