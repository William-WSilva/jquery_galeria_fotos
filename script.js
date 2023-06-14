$("header button").click(function() {
    $("form").slideDown();
})

$("#botao_cancelar").click(function() {
    $("header").slideUp();
})

$("form").on("submit", function(evento) {
    evento.preventDefault();

    const enderecoNovaImagem = $("#input_URL_nova_imagem").val();
    
    const novo_Item = 
    $(`
        <li style="display: none">
            <img src="${enderecoNovaImagem}" alt="Pintura de um gato">
            <div class="overlay_imagem_link"   >
                <a href="${enderecoNovaImagem}" target="_blank" title="Expandir imagem">
                    Expandir imagem
                </a>
            </div>
        </li>
    `);

    $(novo_Item).appendTo("ul");
    $(novo_Item).fadeIn(1000);
    $("#input_URL_nova_imagem").val("");

})