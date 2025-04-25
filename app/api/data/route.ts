import { NextResponse } from "next/server"

export async function GET() {
  // Seu JSON exato como solicitado
  const data = {
    items: [
      {
        width: "464",
        height: "464",
        firstImg:
          "https://zlnfb.stripocdn.email/content/guids/CABINET_a9ae59fe432b73a18850d72ea1c4a110/images/img01.png",
        lastImg:
          "https://zlnfb.stripocdn.email/content/guids/CABINET_a9ae59fe432b73a18850d72ea1c4a110/images/img02.png",
        arrowImg:
          "https://zlnfb.stripocdn.email/content/guids/CABINET_a9ae59fe432b73a18850d72ea1c4a110/images/img03.png",
        resultTotal: "4",
        resultImg: [
          {
            id: "1",
            title: "2",
          },
          {
            id: "2",
            title: "10",
          },
          {
            id: "3",
            title: "7",
          },
          {
            id: "4",
            title: "5",
          },
        ],
      },
    ],
  }

  // Configurando CORS para permitir acesso de qualquer origem
  return new NextResponse(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  })
}
