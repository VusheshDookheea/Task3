var ctx = document.getElementById('Pressure-Bar')
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Pressure'],
        datasets: [{
            label: 'current',
            data: [950],
            backgroundColor: [
                'rgba(155, 197, 61, 0.5)'
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