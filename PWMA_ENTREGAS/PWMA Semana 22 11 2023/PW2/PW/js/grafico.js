function mostrarConteudo(id) {
    var conteudos = document.querySelectorAll('div[id^="opcao"]');
    for (var i = 0; i < conteudos.length; i++) {
        conteudos[i].style.display = 'none';
    }

    var conteudoSelecionado = document.getElementById(id);
    conteudoSelecionado.style.display = 'block';


    if (id === 'opcao1') {
        criarGrafico1();
    } else if (id === 'opcao2') {
        criarGrafico2();
    } else if (id === 'opcao3') {
        criarGrafico3();
    } else if (id === 'opcao4') {
        criarGrafico4();
    }else if (id === 'opcao5') {
        criarGrafico5();
    }
    else if (id === 'opcao6') {
        criarGrafico6();
    }
}

function criarGrafico1() {
    var ctx = document.getElementById('grafico1').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Santander', 'Bradesco', 'Itaú', 'C6'],
            datasets: [{
                label: 'Dados do Gráfico 1',
                data: [10000, 25000, 60000, 50000],
                backgroundColor: '#0089FF',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        }
    });
}

function criarGrafico2() {
    var data = {
        labels: ['Administrativa', 'Impostos', 'Vendas', 'Diversas'],
        datasets: [
            {
                data: [9000, 3000, 26000, 8000],
                backgroundColor: ['#99ccff', '#4d0026', '#ffeb99', '#666699']
            }
        ]
    };

    var ctx = document.getElementById('grafico2').getContext('2d');
    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: data
    });
}

function criarGrafico3() {
    var ctx = document.getElementById('grafico3').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Reserva Emergencial', 'Curto Prazo', 'Medio Prazo', 'Longo Prazo'],
            datasets: [{
                label: 'Dados do Gráfico 1',
                data: [15000, 32600, 28960, 65753],
                backgroundColor: '#0089FF',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        }
    });
}
function criarGrafico4() {
    var data = {
        labels: ['Rendimentos', 'Aporte', 'Produtos', 'Prestação de Serviços', 'Locação', 'Vendas', 'Diversas'],
        datasets: [
            {
                label: 'Dados do Gráfico 4',
                data: [13900, 25000, 6000, 40000, 8000, 74000, 7313],
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                borderColor: '#254a01',
                borderWidth: 2
            }
        ]
    };

    var options = {
        scale: {
            angleLines: {
                display: false
            },
            ticks: {
                suggestedMin: 0,
                suggestedMax: 300000
            }
        }
    };

    var ctx = document.getElementById('grafico4').getContext('2d');
    var myRadarChart = new Chart(ctx, {
        type: 'radar',
        data: data,
        options: options
    });
}

function criarGrafico5() {
    var data = {
        labels: ['Materia Prima', 'Máquinas', 'Bens Imóveis'],
        datasets: [
            {
                data: [6000, 60000, 28000],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FFCE55' ],
                borderColor: 'white',
                borderWidth: 2
            }
        ]
    };

    var ctx = document.getElementById('grafico5').getContext('2d');
    var myDoughnutChart = new Chart(ctx, {
        type: 'doughnut',
        data: data
    });
}
function criarGrafico6() {
    var data = {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [
            {
                label: 'Relatório Mensal',
                data: [15000, 13000, 25000, 24500, 22000, 26000, 28500, 30000, 32000, 31750, 37000, 40000],
                backgroundColor: 'rgba(75, 192, 192, 0.2)', // Cor de fundo da área
                borderColor: 'rgba(75, 192, 192)',     // Cor da linha da área
                borderWidth: 1,
                fill: true // Preencher a área abaixo da linha
            }
        ]
    };

    var options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    var ctx = document.getElementById('grafico6').getContext('2d');
    var myAreaChart = new Chart(ctx, {
        type: 'line', // Pode ser 'line' para um gráfico de área
        data: data,
        options: options
    });
}


function destruirGraficos() {
    var graficos = document.querySelectorAll('canvas[id^="grafico"]');
    for (var i = 0; i < graficos.length; i++) {
        var chartInstance = Chart.getChart(graficos[i]);
        if (chartInstance) {
            chartInstance.destroy();
        }
    }
}