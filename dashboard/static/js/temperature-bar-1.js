var ctx = document.getElementById('Temperature-Bar')
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Temperature'],
        datasets: [{
            label: 'current',
            data: [30],
            backgroundColor: [
                'rgba(229, 89, 52, 0.5)'
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