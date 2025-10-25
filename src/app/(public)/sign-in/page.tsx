import { createClient } from "@/utils/supabase/server";
import { SignInForm } from "./components/form";

export default async function SignIn() {
  const supabase = await createClient();

  async function signUpNewUser() {
    const { data, error } = await supabase.auth.signUp({
      email: "valid.email@supabase.io",
      password: "example-password",
      options: {
        emailRedirectTo: "https://example.com/welcome",
      },
    });

    console.log(data, error);
  }

  return <SignInForm login={signUpNewUser} />;
}
