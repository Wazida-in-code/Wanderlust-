"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "@/lib/auth-client";
import { LockKeyhole, Mail } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

const SignInPage = () => {
  const handleSignIn = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };

    const { data, error } = await signIn.email({
      ...userData,
    });
    if (data) {
      redirect("/");
    }
    if (error) {
      console.log(error);
    }
  };
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f8f9fb] p-4">
      <div className="w-full max-w-[420px]">
        {/* Heading */}
        <div className="mb-5 text-center">
          <h1 className="text-3xl font-bold text-gray-950">Welcome Back</h1>

          <p className="mt-1 text-sm text-gray-500">
            Resume your adventure with Wanderlust
          </p>
        </div>

        {/* Login Card */}
        <div className="border border-gray-100 bg-white p-7 shadow-md">
          <form onSubmit={handleSignIn}>
            {/* Email */}
            <div className="mb-3">
              <Label className="mb-2 block">Email Address</Label>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-500" />

                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="h-9 rounded-none border-gray-100 bg-[#f8f9fb] pl-9 text-xs"
                />
              </div>
            </div>

            {/* Password */}
            <div className="mb-3">
              <Label className="mb-2 block">Password</Label>

              <div className="relative">
                <LockKeyhole className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-500" />

                <Input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="h-9 rounded-none border-gray-100 bg-[#f8f9fb] pl-9 text-xs"
                />
              </div>
            </div>

            {/* Remember Me */}
            <div className="mb-3 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label
                  htmlFor="remember"
                  className="text-xs font-normal text-gray-600"
                >
                  Remember me
                </Label>
              </div>

              <span className="cursor-pointer text-cyan-600">
                Forgot password?
              </span>
            </div>

            {/* Sign In */}
            <Button
              type="submit"
              className="h-10 w-full rounded-none bg-[#17a2b8] text-xs font-normal text-white hover:bg-[#138496]"
            >
              Sign In
            </Button>

            {/* Divider */}
            <div className="my-3 flex items-center gap-3">
              <div className="h-px flex-1 bg-gray-100" />
              <span className="text-xs text-gray-500">Or continue with</span>
              <div className="h-px flex-1 bg-gray-100" />
            </div>

            {/* Google Button */}
            <Button
              type="submit"
              variant="outline"
              className="h-10 w-full rounded-none border-gray-100 text-xs font-normal"
            >
              <span className="font-bold text-blue-600">G</span>
              Sign Up With Google
            </Button>

            {/* Sign Up */}
            <p className="mt-4 text-center text-xs text-gray-500">
              Don&apos;t have an account?{" "}
              <Link
                href="/sign-up"
                className="cursor-pointer font-medium text-cyan-600"
              >
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
};

export default SignInPage;
