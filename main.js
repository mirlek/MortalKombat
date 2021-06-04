const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const player1 = {
    player: 1,
    name: 'June',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: [],
    attack: function() {
        console.log(player1.name + 'Fight...');
    }
};

const player2 = {
    player: 2,
    name: 'May',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: [],
    attack: function() {
        console.log(player2.name + 'Fight...');
    }
};

function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }
    return $tag;
};

function createPlayer(playerObj) {
    const $player = createElement('div', 'player' + playerObj.player);
    const $progressbar = createElement('div', 'progressbar');
    const $character = createElement('div', 'character');

    const $life = createElement('div', 'life');
    $life.style.width = playerObj.hp +'%';

    const $name = createElement('div', 'name');
    $name.innerText = playerObj.name;

    const $img = createElement('img');
    $img.src = playerObj.img;
    
    $player.appendChild($progressbar);
    $player.appendChild($character);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);
    return $player;
};

function changeHP(player) {
    const $playerLife = document.querySelector('.player' + player.player + ' .life');
    player.hp -= Math.ceil(Math.random() * 20);

    if (player.hp <= 0) {
        player.hp = 0;
        $playerLife.style.width = 0 + '%';
        $arenas.appendChild(playerLose(player.name)) && ($randomButton.disabled = true);
    } else {
        $playerLife.style.width = player.hp + '%';
    };

    console.log(player.hp, $playerLife);
    
};

function playerLose(name) {
    const $loseTitle = createElement('div', 'loseTitle');
    $loseTitle.innerText = name + ' lost';
    return $loseTitle;
};

$randomButton.addEventListener('click', function() {
    console.log('CLick the button');
    changeHP(player1);
    changeHP(player2);
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));