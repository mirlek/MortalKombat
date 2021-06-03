const hero = {
    name: 'June',
    hp: 100,
    img: 'Nice pic',
    weapon: [],
    attack: function() {
        console.log(hero.name + 'Fight...');
    }
};


function createPlayer() {
    const $player1 = document.createElement('div');
    $player1.classList.add('player1');

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');

    const $character = document.createElement('div');
    $character.classList.add('character');

    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = '100%';

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = 'Katana';

    const $img = document.createElement('img');
    $img.src = 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif';

    const $arenas = document.querySelector('.arenas');
    $arenas.appendChild($player1);
    $player1.appendChild($progressbar);
    $player1.appendChild($character);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);

};

createPlayer('player1', 'John', 12);
createPlayer('player2', 'Linn', 52);