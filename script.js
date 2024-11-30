// Função para copiar conteúdo para a área de transferência
function copyToClipboard(text) {
    // Cria um elemento temporário para segurar o texto
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    
    // Exibe um feedback visual
    alert("Copiado: " + text);
}
