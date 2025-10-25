"use client";

export function SignInForm({
  login,
}: {
  login: (formData: FormData) => Promise<void>;
}) {
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <button formAction={login} className="bg-red-500">
        Log in
      </button>
    </form>
  );
}
