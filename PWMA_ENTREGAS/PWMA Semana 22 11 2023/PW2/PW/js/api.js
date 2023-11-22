function getStockData() {
    const apiKey = '7P68GKLJDZLMBI53';
    const symbol = $('#symbolInput').val().toUpperCase();

    // Verifique se o símbolo foi fornecido
    if (!symbol) {
      alert('Por favor, insira um símbolo de ação.');
      return;
    }

    const apiUrl = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`;
    const apiUrl2 = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${apiKey}`;

    // Faça a solicitação AJAX usando jQuery
    $.ajax({
      url: apiUrl,
      method: 'GET',
      success: function(data) {
        // Verifique se a resposta contém dados válidos
        if (data['Global Quote']) {
          displayStockData(data['Global Quote']);
        } else {
          alert('Não foi possível obter os dados da cotação de ações. Verifique o símbolo inserido.');
        }
      },
      error: function(error) {
        console.error('Erro na solicitação:', error);
        alert('Ocorreu um erro na solicitação à API.');
      }
    });
  }

  // Função para exibir os dados da cotação de ações na página
  function displayStockData(stockData) {
    const stockDataDiv = $('#stockData');

    // Exemplo: exibindo o preço da ação
    const stockPrice = stockData['05. price'];
    const stockSymbol = stockData['01. symbol'];

    // Crie elementos HTML para exibir os dados
    const heading = $('<h2>').text(`Cotação para ${stockSymbol}`);
    const paragraph = $('<p>').text(`Preço: ${stockPrice}`);

    // Adicione os elementos à div
    stockDataDiv.append(heading, paragraph);
  }