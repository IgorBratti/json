import { NextResponse } from "next/server"

export async function GET() {
  // Você pode personalizar estes dados ou buscar de um banco de dados
  const data = {
    nome: "API JSON",
    descricao: "Este é um exemplo de API que retorna dados JSON",
    itens: [
      {
        id: 1,
        nome: "Produto A",
        preco: 29.99,
      },
      {
        id: 2,
        nome: "Produto B",
        preco: 49.99,
      },
      {
        id: 3,
        nome: "Produto C",
        preco: 19.99,
      },
    ],
    timestamp: new Date().toISOString(),
  }

  return NextResponse.json(data)
}
