"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signUp } from "@/lib/auth-client";
import { LockKeyhole, Mail, UserRound } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

const SignUpPage = () => {
  const handleSignUp = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries()) as {
      name: string;
      image: string;
      email: string;
      password: string;
    };

    const { data, error } = await signUp.email({
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
    <main className="min-h-screen bg-[#f8f9fb] px-4 py-4">
      <div className="mx-auto w-full max-w-[364px]">
        {/* Heading */}
        <div className="mb-4 text-center">
          <h1 className="font-serif text-[28px] leading-tight tracking-tight text-black">
            Create Account
          </h1>
          <p className="mt-1 text-xs text-gray-500">
            Start your adventure with Wanderlust
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white px-6 py-6 shadow-md">
          <form onSubmit={handleSignUp} className="space-y-3">
            {/* Full Name */}
            <div className="space-y-1.5">
              <Label htmlFor="name" className="text-[11px]">
                Full Name
              </Label>
              <div className="relative">
                <UserRound className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-500" />
                <Input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="h-[30px] rounded-none border-gray-100 bg-[#f7f8fa] pl-7 text-[11px] shadow-none placeholder:text-gray-500"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="name" className="text-[11px]">
                Image
              </Label>
              <div className="relative">
                <UserRound className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-500" />
                <Input
                  id="image"
                  type="url"
                  name="image"
                  placeholder="Image"
                  required
                  className="h-[30px] rounded-none border-gray-100 bg-[#f7f8fa] pl-7 text-[11px] shadow-none placeholder:text-gray-500"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-[11px]">
                Email Address
              </Label>
              <div className="relative">
                <Mail className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-500" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="h-[30px] rounded-none border-gray-100 bg-[#f7f8fa] pl-7 text-[11px] shadow-none placeholder:text-gray-500"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <Label htmlFor="password" className="text-[11px]">
                Password
              </Label>
              <div className="relative">
                <LockKeyhole className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-500" />
                <Input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Create a password"
                  required
                  className="h-[30px] rounded-none border-gray-100 bg-[#f7f8fa] pl-7 text-[11px] shadow-none placeholder:text-gray-500"
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div className="space-y-1.5">
              <Label htmlFor="confirmPassword" className="text-[11px]">
                Confirm Password
              </Label>
              <div className="relative">
                <LockKeyhole className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-500" />
                <Input
                  id="confirmPassword"
                  type="password"
                  name="password"
                  placeholder="Confirm your password"
                  className="h-[30px] rounded-none border-gray-100 bg-[#f7f8fa] pl-7 text-[11px] shadow-none placeholder:text-gray-500"
                />
              </div>
            </div>

            {/* Create Account */}
            <Button
              type="submit"
              className="h-[34px] w-full rounded-none bg-[#18a1b9] text-[11px] font-normal text-white hover:bg-[#138da3]"
            >
              Create Account
            </Button>
          </form>

          {/* Divider */}
          <div className="my-3 flex items-center gap-2.5">
            <div className="h-px flex-1 bg-gray-100" />
            <span className="text-[11px] text-gray-500">Or sign up with</span>
            <div className="h-px flex-1 bg-gray-100" />
          </div>

          {/* Google Button */}
          <Button
            type="button"
            variant="outline"
            className="h-[35px] w-full rounded-none border-gray-100 text-[11px] font-normal shadow-none hover:bg-gray-50"
          >
            <FcGoogle className="mr-1 h-3.5 w-3.5" />
            Sign Up With Google
          </Button>

          {/* Sign In */}
          <p className="mt-4 text-center text-[11px] text-gray-500">
            Already have an account?{" "}
            <Link
              href="/sign-in"
              className="font-semibold text-[#159eb8] hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default SignUpPage;
