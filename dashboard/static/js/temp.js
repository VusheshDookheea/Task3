var ctx = document.getElementById('temperature')
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Temperature'],
        datasets: [{
            label: 'current',
            data: [30],
            backgroundColor: [
                'rgba(91, 192, 235, 0.5)',
            ],
        }]
    },
});