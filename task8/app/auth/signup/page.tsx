// app/auth/signin/page.tsx
import { getProviders } from "next-auth/react";
import SignUpForm from "./signupform";

export default async function SignInPage() {
  const providers = await getProviders();
  return <SignUpForm providers={providers} />;
}
