var ctx = document.getElementById('Humidity-Bar')
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Humidty'],
        datasets: [{
            label: 'current',
            data: [53],
            backgroundColor: [
                'rgba(229, 89, 52, 0.5)'
            ],
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});