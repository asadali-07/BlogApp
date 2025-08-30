"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";

export default function SignIn() {
  const { setUser } = useUser();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignIn = async () => {
    const response = await fetch("/api/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (response.ok) {
      setUser(data.user);
      router.push("/");
    } else {
      // Handle errors
      console.error(data.error);
    }
    setFormData({ email: "", password: "" });
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-300 dark:bg-purple-900 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -right-24 w-80 h-80 bg-pink-300 dark:bg-pink-900 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-300 dark:bg-purple-900 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 flex items-center justify-center min-h-screen py-12">
        <div className="w-full max-w-md">
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-2xl border-0">
            <CardHeader className="text-center space-y-2">
              <CardTitle className="text-3xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
                  Welcome Back
                </span>
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-300 text-base">
                Sign in to your account to continue exploring
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="space-y-4">
                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 dark:text-gray-300 font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="border-gray-300 dark:border-gray-600 focus:border-purple-500 focus:ring-purple-500 transition-colors"
                    required
                  />
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-700 dark:text-gray-300 font-medium">
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="border-gray-300 dark:border-gray-600 focus:border-purple-500 focus:ring-purple-500 transition-colors pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-purple-600 transition-colors"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <Button 
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
                  size="lg"
                  onClick={handleSignIn}
                >
                  Sign In
                </Button>
              </div>

              {/* Sign Up Link */}
              <div className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Don&apos;t have an account?{" "}
                  <Link
                    href="/signup"
                    className="text-purple-600 dark:text-purple-400 hover:underline font-medium"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}