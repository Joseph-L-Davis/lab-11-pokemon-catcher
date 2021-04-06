import { getPokedex } from '../local-storage-utils.js';

const pokedex = getPokedex();

var ctx = document.getElementById('myChart').getContext('2d');
let names = [];
let captured = [];
let encountered = [];
const reset = document.querySelector('.reset');

for (let pokemon of pokedex) {
    names.push(pokemon.id);
    captured.push(pokemon.captured);
    encountered.push(pokemon.encountered);
}

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: names,
        datasets: [{
            label: '# of Captured',
            data: captured,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        },
        {
            label: '# of Encountered',
            data: encountered,
            backgroundColor: 'lightblue',
            borderColor: 'yellow',
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

reset.addEventListener('click', () => {
    localStorage.clear();
    window.location = '../index.html';
});