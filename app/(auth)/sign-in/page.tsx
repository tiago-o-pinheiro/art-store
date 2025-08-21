import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { APP_NAME } from "@/lib/constants/constants";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SignInForm from "./component/SignInForm";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your account",
};

const SignInPage = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      <Card>
        <CardHeader className="space-y-4">
          <Link href="/" className="flex-center">
            <Image
              src="/images/logo.svg"
              width={100}
              height={100}
              alt={`${APP_NAME} logo`}
              priority
            />
          </Link>
        </CardHeader>
        <CardTitle className="text-center">Sign In</CardTitle>
        <CardDescription className="text-center py-2">
          Sign in to your account to continue using {APP_NAME}.
        </CardDescription>
        <CardContent className="space-y-4">
          <SignInForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default SignInPage;
