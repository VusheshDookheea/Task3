var ctx = document.getElementById('deviceload');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Cpu-Use','Idle'],
        datasets: [{
            label: 'current',
            data: [12,29],
            backgroundColor: [
                'rgba(91, 192, 235, 0.5)',
                'rgba(253, 231, 76, 0.5)',

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