var ctx = document.getElementById('humidity')
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Humidity'],
        datasets: [{
            label: 'current',
            data: [50],
            backgroundColor: [
                'rgba(250, 121, 33, 0.5)',
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