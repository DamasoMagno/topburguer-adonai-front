export default function SignIn() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-semibold">Bem-vindo</h1>
        <p>Gestão simplificada de pedidos</p>
        <form className="flex flex-col gap-4 w-full max-w-sm">
          <input
            type="email"
            className="mt-1 p-2 border border-gray-300 rounded"
            placeholder="Email"
          />
          <input
            type="password"
            className="mt-1 p-2 border border-gray-300 rounded"
            placeholder="Senha"
          />
          <button
            type="submit"
            className="mt-4 bg-foreground text-background py-2 rounded hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors"
          >
            Acessar painel
          </button>
        </form>
      </main>
    </div>
  );
}
