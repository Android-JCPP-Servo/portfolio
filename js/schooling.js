// Chart creation referenced from chartjs.org
const ctx = document.getElementById('myChart');

const myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['HTML5', 'CSS3', 'JavaScript/React', 'PHP', 'MySQL'],
        datasets: [{
            label: 'Coding Experience',
            data: [100, 100, 14, 100, 0],
            backgroundColor: [
                'rgba(241, 89, 49, 0.2)',
                'rgba(0, 125, 198, 0.2)',
                'rgba(245, 130, 51, 0.2)',
                'rgba(120, 124, 180, 0.2)',
                'rgba(83, 130, 161, 0.2)'
            ],
            borderColor: [
                'rgba(241, 89, 49, 1)',
                'rgba(0, 125, 198, 1)',
                'rgba(245, 130, 51, 1)',
                'rgba(120, 124, 180, 1)',
                'rgba(83, 130, 161, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});