$(document).ready(function () {
    // Oculta todos os conteúdos inicialmente
    $(".canvas-container").hide();
    $("#cotation-content").hide();

    // Manipulador de eventos para o link de cotação
    $("#cotation-link").click(function () {
        // Oculta todos os conteúdos
        $(".canvas-container").hide();
        
        // Exibe o conteúdo da aba de cotação
        $("#cotation-content").show();
        $(".aside").hide();
    });

    // Manipulador de eventos para o link do menu
    $("#menu-link").click(function () {
        // Oculta todos os conteúdos
        $(".canvas-container").hide();
        $(".aside").show();
        
        // Oculta o conteúdo da aba de cotação
        $("#cotation-content").hide();
    });
});