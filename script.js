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

// $('.item').click(function () {
//     $(this).toggleClass('clicked').toggleClass('notclicked');
// });
var checkcount = 0;
var bingoItems = ['1-1 Remake', 'Free', 'Enemy Spam', 'Bad Name', 'Good name', 'Bad Level', 'Good Level', 'Mario Bros 1 Remake', 'Mario Bros 3 Remake', 'Mario World Remake', 'Auto', 'Death On Spawn', 'Bowser', 'Bossfight', 'Easy', 'Normal', 'Expert', 'Super Expert', 'Too Hard', 'Sound Effect Spam', 'Bring Yoshi To Goal', 'Music', 'Collect All Coins', 'Enemy Spam(Star)', 'Clear Condition', 'Kaizo blocks', '"First Level" In Title', 'Troll Level', '#DGR', 'Boom-Boom', 'Meowswer', 'Tech Level', 'Underwater', 'Speedrun', 'Pick a Door', 'Pick a Pipe', 'Night Theme', 'Art', 'Themed After Another Game', 'On Off Blocks', 'Death at the start', 'Shell Jump', 'Pow Jump', 'Uno Mas', 'Glitch Showcase', 'Builder', 'Superball', 'SMB2 Mushroom', 'Playable Mushroom', 'Title Screen Level', 'World Record', 'First Clear', 'Red Coins', 'Softlock', 'No Damage Clear Condition', 'Cheese', 'THX At The End', 'Off Screen Thwomp', 'Multiplayer Versus', 'Standard', 'Puzzle', 'Autoscroll', 'Short And Sweet', 'Shooter', 'Link', 'Single Player', 'Dev Door', 'Typo', 'Anti-Softlock', 'Dev Pipe', 'Dev Key', 'Low Visibility', 'Four Lane Multiplayer', 'Clown Car Spam', 'Koopa Car', 'Grab a 10-Coin', 'Grab a 30-Coin', 'Grab a 50-Coin', 'Little Timmy Level', 'Fall Into Lava After Clear', 'Mario Galaxy Music', 'Super Mario World', 'Super Mario Bros', 'Super Mario Bros 3', 'Super Mario Bros U', 'Super Mario 3D World', 'Thwomp at goal']
var tingSomAlleredeErTatt = [];
var bingoItemsAmount = 25;

function check(item) {
    if ($(item).attr('click') == 'clicked') {
        checkcount--;
        $(item).toggleClass('clicked').toggleClass('notclicked').attr('click', 'no');
    } else {
        checkcount++;
        $(item).toggleClass('clicked').toggleClass('notclicked').attr('click', 'clicked');
    }
    // console.log(checkcount);
    if (checkcount == bingoItemsAmount) {
        bingo.bingo();
    }
}

console.log(bingoItems, '\n\n', bingoItems.length);
$('document').ready(function () {
    bingo.new();
});

var bingo = {
    new: function () {
        $('.bingo').text('');
        checkcount = 0;
        tingSomAlleredeErTatt = [];
        for (let i = 1; i < bingoItemsAmount + 1; i++) {
            let bingoItem = arrayRandom(bingoItems);
            if (tingSomAlleredeErTatt.includes(bingoItem)) {
                i -= 1;
            } else {
                if (bingoItem == 'Free') {
                    $(`.bingo`).append(`<div class="item clicked smb1" onclick="check(this)" click="clicked"><span>${bingoItem}</span></div>`);
                    tingSomAlleredeErTatt.push(bingoItem);
                    checkcount = 1;
                } else {
                    $(`.bingo`).append(`<div class="item notclicked smb1" onclick="check(this)" click="no"><span>${bingoItem}</span></div>`);
                    tingSomAlleredeErTatt.push(bingoItem);
                }
                // console.log(bingoItem);
            }
        }
    },
    bingo: function () {
        console.log('Bingo!');
        alert('Bingo!')
        bingo.new();
    }
}

document.body.onkeyup = function (e) {
    if (e.keyCode == 32) {
        e.preventDefault();
        bingo.new();
    }
}