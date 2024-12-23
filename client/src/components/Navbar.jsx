import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { setLogOut } from "@/slices/UserSlice";
import ModeToggle from "./ModeToggle";
import { BookOpenText } from "lucide-react";
import { useLogoutMutation } from "@/services/authApi";
import { toast } from "sonner";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [logOutApi, { idLoading: logOutLoading }] = useLogoutMutation();
  const handleLogOut = async () => {
    setLoading(true);
    try {
      const response = await logOutApi().unwrap();
      toast.success(response.message);
      dispatch(setLogOut());
      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const user = useSelector((state) => state.user.user);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  return (
    <>
      <header className="w-full fixed h-16 backdrop-blur-sm">
        <div className="container mx-auto h-full">
          <div className="flex items-center justify-between h-full">
            {/* left */}
            <h1
              className="text-3xl font-bold font-sans light:text-orange-500 dark:text-white flex justify-center items-center gap-2 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <BookOpenText size={32} />
              LMS
            </h1>
            {/* right  */}
            <div className="flex justify-center items-center gap-4">
              <div>
                {isAuthenticated ? (
                  <>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <div className="flex justify-center items-center gap-4 cursor-pointer">
                          <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                          <p className="text-[17px] tracking-wide capitalize">
                            {user.username}
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
                          <Link to="/profile">Profile</Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="cursor-pointer">
                          <Link to="/mylearning">My Learning</Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          onClick={handleLogOut}
                          className="cursor-pointer"
                        >
                          Log out
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </>
                ) : (
                  <Button asChild className="rounded-full px-6">
                    <Link
                      to="/auth"
                      className="font-sans text-[17px] tracking-wider"
                    >
                      {" "}
                      Login
                    </Link>
                  </Button>
                )}
              </div>
              <div>
                <ModeToggle />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
