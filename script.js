function executarSistema () {
   const nome = document.getElementById("inputNome").value;
   const idade = parseInt(document.getElementById("inputIdade").value);
   const valor= parseInt(document.getElementById("inputValor").value);
   const Cupom = parseInt(document.getElementById("inputCupom").value === "true");

   //Dados de saída 
   const msg = document.getElementById("mensagem-autorizacao");
   const lista = document.getElementById("lista-estoque");
   const relatorio = document.getElementById("relatorio-final");

   //Validação para campos vazios
   if (!nome || isNaN(idade) || isNaN(valor))  {
      alert("Por favor, preencha todos os campos!");
      return;

   }
   // Regra de negócio
   if (idade >=16){
      msg.innerText =`Venda autorizada: ${nome}`;
      msg.style.color = "#00ff88";

      // Desconto
      let valorFinal = (valor > 500 || Cupom) ? valor * 0.85 : valor;

      // Estoque
      let estoque = ["Placa de Video", "Processador", "Memória RAM"];
      lista.innerHTML = ""; //limpa a lista anterior

      // forecach: Percorre um array e aplica uma ação para cada elemento
       estoque.forEach (item=> {
         let li = document.createElement("li");
         li.innerText = `item ${item} reservado.`;
         lista.appendChild(li); // usado para adicionar uma novo elemeto ou texto
      });

      //Relatório
      relatorio.style.display = "block";
      relatorio.innerHTML = `
      <strong> RESUMODO PEDIDO <\strong><br>
      Cliente: ${nome} <br>
      Total Original: R$ ${valor.toFixed(2)} <br>
      <strong> Total com Desconto: R$ ${valorFinal.toFixed(2)} <\strong>

      `;
   } else{
      msg.innerText = "Venda bloqueada: Menor de 16 anos."
      msg.style.color = "#ff444";
      relatorio.style.display = "none";
      lista.innerHTML = "";
   }

}