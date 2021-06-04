
const player1 = {
    name: 'June',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: [],
    attack: function() {
        console.log(player1.name + 'Fight...');
    }
};

const player2 = {
    name: 'May',
    hp: 50,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: [],
    attack: function() {
        console.log(player2.name + 'Fight...');
    }
};

function createPlayer(classPlayer, playerObj) {
    const $player = document.createElement('div');
    $player.classList.add(classPlayer);

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');

    const $character = document.createElement('div');
    $character.classList.add('character');

    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = playerObj.hp +'%';

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = playerObj.name;

    const $img = document.createElement('img');
    $img.src = playerObj.img;

    const $arenas = document.querySelector('.arenas');
    $arenas.appendChild($player);
    $player.appendChild($progressbar);
    $player.appendChild($character);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);

};

createPlayer('player1', player1);
createPlayer('player2', player2);