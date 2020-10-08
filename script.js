// $('document').ready(function () {
//     var arr = [];
//     for (i = 1; i < 51; i++) {
//         arr.push(`<div class="item" id="${i}">Lorem Ipsum</div>`)
//     }
//     var arrJoin = arr.join('\n');
//     $('.bingo').html(arrJoin);
// });
function arrayRandom(items) {
    return items[Math.floor(Math.random() * items.length)];
}
$('.item').click(function () {
    $(this).toggleClass('clicked').toggleClass('notclicked');
});
var bingoItems = ['1-1 Remake', 'Free', 'Enemy Spam', 'Bad Name', 'Good name', 'Bad Level', 'Good Level', '1-4 Remake', '1-2 Remake', '1-3 Remake', 'Auto', 'Death On Spawn', 'Bowser', 'Bossfight', 'Easy', 'Normal', 'Expert', 'Super Expert', 'Too Hard', 'Sound Effect Spam', 'Bring Yoshi To Goal', 'Music', 'Collect All Coins', 'Enemy Spam(Star)', 'Clear Condition', 'Kaizo blocks', '"First Level" In Title', 'Troll Level', '#DGR', 'Boom-Boom', 'Meowswer']
var tingSomAlleredeErTatt = [];
var bingoItemsAmount = 25;
console.log(bingoItems, '\n\n', bingoItems.length);
$('document').ready(function () {
    bingo();
});

function bingo() {
    $('.bingo').text('');
    tingSomAlleredeErTatt = [];
    for (let i = 1; i < bingoItemsAmount + 1; i++) {
        let bingoItem = arrayRandom(bingoItems);
        if (tingSomAlleredeErTatt.includes(bingoItem)) {
            i -= 1;
        } else {
            console.log(bingoItem);
            $(`.bingo`).append(`<div class="item notclicked">${bingoItem}</div>`);
            tingSomAlleredeErTatt.push(bingoItem);
        }
    }
}