export const montarEmail = (cliente) => {
  if(!cliente) throw Error("Dados do cliente não podem ser inválidos.")

  const assunto = `${cliente.nome}! Descontos imperdíveis - modelos novos e mais vendidos!!!`

  const corpoEmail = `
          *** Lançamentos do mês ***
          
          -> Novo HRV 2023
            O novo HRV 2023 também terá uma versão híbrida e vai bater de 
            frente com modelos como Toyota Corolla Cross e o Jeep Compass.
            Preço: R$ 150.000,00
            Confira condições de pagamento com nossos vendedores.

          -> VW Polo Track 2023
            O novo Polo merece destaque por ferramentas tecnológicas que 
            emitem menos gases poluentes.
            Preço: R$ 70.000,00
            Atenção: Condições especiais na troca do seu usado.


          *** Carros mais vendidos do mês passado ***
            1 - Fiat Strada | 50.526 unidades
            2 - Chevrolet Onix | 44.110 unidades
            3 - VW Polo | 37.722 unidades
            4 - Chevrolet Onix Plus | 35.726 unidades
            5 - Hyundai HB20 | 34.002 unidades
  `;

  return {
    destinatario: cliente.email,
    assunto,
    corpoEmail
  }
}

