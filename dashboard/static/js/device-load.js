var ctx = document.getElementById('Device-Load-Pie')
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['CPU-Use', 'Idle'],
        datasets: [{
            data: [12, 19],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
        }]
    },
});