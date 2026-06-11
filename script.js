function executarSistema() {
   // 1. Captura dinâmica dos inputs
   const nome = document.getElementById("inputNome").value;
   const idade = parseInt(document.getElementById("inputIdade").value);
   const valor = parseFloat(document.getElementById("inputValor").value);
   const cupom = document.getElementById("inputCupom").value === "true";

   // Elementos de saída
   const msg = document.getElementById("mensagem-autorizacao");
   const lista = document.getElementById("lista-estoque");
   const relatorio = document.getElementById("relatorio-final");

   // Validação simples: se campos estiverem vazios
   if (!nome || isNaN(idade) || isNaN(valor)) {
       alert("Por favor, preencha todos os campos!");
       return;
   }

   // 2. Lógica de Negócio (Reutilizando os desafios anteriores)
   if (idade >= 16) {
       msg.innerText = `✅ Venda autorizada: ${nome}`;
       msg.style.color = "#00ff88";

       // Cálculo de desconto (Desafio 4 + 8)
       let valorFinal = (valor > 500 || cupom) ? valor * 0.85 : valor;

       // 3. Simulação de Estoque (Desafio 10 + 7)
       let estoque = ["Placa de Vídeo", "Processador", "Memória RAM"];
       lista.innerHTML = ""; // Limpa a lista anterior
       
       // forEach: Percorre uma lista (array) e aplica uma ação, sendo um sinônimo funcional de "para cada" elemento.
       estoque.forEach(item => {
           let li = document.createElement("li");
           li.innerText = `📦 Item ${item} reservado.`;
           lista.appendChild(li); // usada para adicionar um novo nó (como um elemento ou texto)
       });

       // 4. Exibição do Relatório Final
       relatorio.style.display = "block";
       relatorio.innerHTML = `
           <strong>RESUMO DO PEDIDO</strong><br>
           Cliente: ${nome}<br>
           Total Original: R$ ${valor.toFixed(2)}<br>
           <strong>Total com Desconto: R$ ${valorFinal.toFixed(2)}</strong>
       `;

   } else {
       msg.innerText = "Venda bloqueada: Menor de 16 anos.";
       msg.style.color = "#ff4444";
       relatorio.style.display = "none";
       lista.innerHTML = "";
   }
}