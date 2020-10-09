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
var bingoItems = ['1-1 Remake', 'Free', 'Enemy Spam', 'Bad Name', 'Good name', 'Bad Level', 'Good Level', 'Mario Bros 1 Remake', 'Mario Bros 3 Remake', 'Mario World Remake', 'Auto', 'Death On Spawn', 'Bowser', 'Bossfight', 'Easy', 'Normal', 'Expert', 'Super Expert', 'Too Hard', 'Sound Effect Spam', 'Bring Yoshi To Goal', 'Music', 'Collect All Coins', 'Enemy Spam(Star)', 'Clear Condition', 'Kaizo blocks', '"First Level" In Title', 'Troll Level', '#DGR', 'Boom-Boom', 'Meowswer', 'Tech Level', 'Underwater', 'Speedrun', 'Pick a Door', 'Pick a Pipe', 'Night Theme', 'Art', 'Themed After Another Game', 'On Off Blocks', 'Death at the start', 'Shell Jump', 'Pow Jump', 'Uno Mas', 'Glitch Showcase', 'Builder', 'Superball', 'SMB2 Mushroom', 'Playable Mushroom', 'Totle Screen Level', 'World Record', 'First Clear', 'Red Coins', 'Softlock', 'No Damage Clear Condition', 'Cheese', 'THX At The End', 'Off Screen Thwomp', 'Multiplayer Versus', 'Standard', 'Puzzle', 'Autoscroll', 'Short And Sweet', 'Shooter', 'Link', 'Single Player', 'Dev Door', 'Typo', 'Anti-Softlock', 'Dev Pipe', 'Dev Key', 'Low Visibility', 'Four Lane Multiplayer', 'Clown Car Spam', 'Koopa Car', 'Grb a 10-Coin', 'Grab a 30-Coin', 'Grab a 50-Coin', 'Little Timmy Level', 'Fall Into Lava After Clear', 'Mario Galaxy Music', 'Super Mario World', 'Super Mario Bros', 'Super Mario Bros 3', 'Super Mario Bros U', 'Super Mario 3D World', 'Thwomp at goal']
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
            // console.log(bingoItem);
            $(`.bingo`).append(`<div class="item notclicked">${bingoItem}</div>`);
            tingSomAlleredeErTatt.push(bingoItem);
        }
    }
}

document.body.onkeyup = function (e) {
    if (e.keyCode == 32) {
        e.preventDefault();
        bingo();
    }
}