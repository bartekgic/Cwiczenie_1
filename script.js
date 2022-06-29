const squares = document.querySelectorAll('.square');
const winnerInfo = document.querySelector('.winner');
const resetBtn = document.querySelector('.resetBtn');

let marker = 'x';
const options = ['', '', '', '', '', '', '', '', ''];
const winOptions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
];

const addMark = event => {
    let sq = event.target;
    if (!sq.classList.contains('xMark') && !sq.classList.contains('oMark')) {
        if (marker === 'x') {
            sq.classList.add('xMark');
            options[sq.value] = sq.value;
            marker = 'o';
        } else {
            sq.classList.add('oMark');
            options[sq.value] = sq.value;
            marker = 'x';
        }
        winnerCheck();
    }
};

const winnerCheck = () => {
    for (let i = 0; i < winOptions.length; i++) {
        const [val1, val2, val3] = winOptions[i];
        const mark1 = options[val1];
        const mark2 = options[val2];
        const mark3 = options[val3];

        if (mark1 !== '' && mark1 === mark2 && mark1 === mark3) {
            console.log('win');
        }
    }
};

const reset = () => {
    squares.forEach(el => el.classList.remove('xMark'));
    squares.forEach(el => el.classList.remove('oMark'));
    marker = 'o';
    resetBtn.classList.add('resetBtnAnime');
    setTimeout(() => {
        resetBtn.classList.remove('resetBtnAnime');
    }, 100);
};

resetBtn.addEventListener('click', reset);
squares.forEach(el => el.addEventListener('click', addMark));