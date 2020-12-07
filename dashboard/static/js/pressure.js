var ctx = document.getElementById('pressure')
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Pressure'],
        datasets: [{
            label: 'current',
            data: [950],
            backgroundColor: [
                'rgba(229, 89, 52, 0.5)',
            ],
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false
                }
            }]
        }
    }
});