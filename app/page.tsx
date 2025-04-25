export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">Hospedagem de JSON no Vercel</h1>
      <p className="mb-4">Seu arquivo JSON está disponível nos seguintes endereços:</p>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2">
          <a href="/data.json" className="text-blue-500 hover:underline">
            /data.json
          </a>{" "}
          - Arquivo JSON estático
        </li>
        <li className="mb-2">
          <a href="/api/data" className="text-blue-500 hover:underline">
            /api/data
          </a>{" "}
          - API que retorna o mesmo JSON
        </li>
      </ul>
    </main>
  )
}
