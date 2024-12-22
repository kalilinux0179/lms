import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLoginMutation, useRegisterMutation } from "@/services/authApi";
import { setLogin } from "@/slices/UserSlice";
// import ends here

export const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginApi, { isLoading: loginLoading }] = useLoginMutation();
  const [registerApi, { isLoading: registerLoading }] = useRegisterMutation();
  const [loading, setLoading] = useState(false);

  // login and register values
  const [registerCreds, setRegisterCreds] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loginCreds, setLoginCreds] = useState({
    email: "",
    password: "",
  });

  // onchange handler
  const onChangeInputHandler = (e, type) => {
    const { name, value } = e.target;
    type === "register"
      ? setRegisterCreds({ ...registerCreds, [name]: value })
      : setLoginCreds({ ...loginCreds, [name]: value });
  };

  // register handling
  const handleRegister = async () =>{
    setLoading(true);
    try {
      const response = await registerApi(registerCreds).unwrap();
      toast.success(response.message)
      setRegisterCreds({
        username:"",
        email:"",
        password:""
      })
    } catch (error) {
      toast.error(`${error.data?.message}`)
      console.log(error)
    } finally{
      setLoading(false);
    }
  }

  // login handling
  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await loginApi(loginCreds).unwrap();
      toast.success(`Welcome Back ${response.user.username}`);
      dispatch(setLogin({ user: response.user })); // Save user data in Redux
      setLoginCreds({
        email:"",
        password:""
      })
      navigate("/");
    } catch (error) {
      console.error(error.data.message);
      toast.error(`${error.data?.message}`);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="container mx-auto flex justify-center items-start min-h-screen pt-24">
        <Tabs defaultValue="auth" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="register">Register</TabsTrigger>
            <TabsTrigger value="login">Login</TabsTrigger>
          </TabsList>
          <TabsContent value="register">
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-2xl font-bold">
                  Register
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    placeholder="John Doe"
                    name="username"
                    value={registerCreds.username}
                    required
                    onChange={(e) => {
                      onChangeInputHandler(e, "register");
                    }}
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="johndoe@example.com"
                    required
                    value={registerCreds.email}
                    onChange={(e) => {
                      onChangeInputHandler(e, "register");
                    }}
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    placeholder="password"
                    required
                    value={registerCreds.password}
                    onChange={(e) => {
                      onChangeInputHandler(e, "register");
                    }}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleRegister} disabled={loading}>
                  {registerLoading ? (
                    <>
                      <Loader2 className=" h-4 w-4 animate-spin" />{" "}
                      Registering...
                    </>
                  ) : (
                    "Register"
                  )}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-2xl font-bold">
                  Login
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="johndoe@example.com"
                    value={loginCreds.email}
                    onChange={(e) => {
                      onChangeInputHandler(e, "login");
                    }}
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="text"
                    placeholder="password"
                    value={loginCreds.password}
                    onChange={(e) => {
                      onChangeInputHandler(e, "login");
                    }}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleLogin}>
                  {loginLoading ? (
                    <>
                      <Loader2 className=" h-4 w-4 animate-spin" /> Please
                      Wait...
                    </>
                  ) : (
                    "Login"
                  )}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};
