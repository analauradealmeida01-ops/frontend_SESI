function executarSistema () {
   const nome = document.getElementById("inputNome").value;
   const idade = parseInt(document.getElementById("inputIdade")).value;
   const valor= parseInt(document.getElementById("inputValor")).value;
   const Cupom = parseInt(document.getElementById("inputCupom")).value =="true";

   //Dados de saída 
   const msg = document.getElementById("mensagem-autorizacao");
   const lista = document.getElementById("lista-estoque");
   const relatorio = document.getElementById("relatorio-final");

   //Validação para campos vazios
   if (!nome || isNaN(idade) || isNaN(valor))  {
      alert("Por favor, preencha todos os campos!");
      return;

   }
   // Rwgra de negócio
   if (idade >=16){
      msg.innerText =`Venda autorizada: ${nome}`;
      msg.style.color = "#00ff88";

      // Desconto
      let Valorfinal = (valor > 500 || Cupom) ? valor * 0.85 : valor;

      // Estoque
      let estoque = ["Placa de Video", "Processador", "Memória RAM"];
      lista.innerHTML = ""; //limpa a lista anterior
      

   }

}