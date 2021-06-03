// // 0st Task

// const leader = {
//     name: 'June',
//     hp: 80,
//     img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
//     weapon: [],
//     attack: function() {
//         console.log(player1.name + 'Fight...');
//     }
// };

// const hero = {
//     name: 'May',
//     hp: 50,
//     img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
//     weapon: [],
//     attack: function() {
//         console.log(player2.name + 'Fight...');
//     }
// };

// // 1st Task

// function createPlayer(player_class, name, life) {
//     const $player1 = document.createElement('div');
//     $player1.classList.add(player_class);

//     const $progressbar = document.createElement('div');
//     $progressbar.classList.add('progressbar');

//     const $character = document.createElement('div');
//     $character.classList.add('character');

//     const $life = document.createElement('div');
//     $life.classList.add('life');
//     $life.style.width = '100%';

//     const $name = document.createElement('div');
//     $name.classList.add('name');
//     $name.innerText = 'Brad';

//     const $img = document.createElement('img');
//     $img.src = 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif';

//     const $arenas = document.querySelector('.arenas');
//     $arenas.appendChild($player1);
//     $player1.appendChild($progressbar);
//     $player1.appendChild($character);
//     $progressbar.appendChild($life);
//     $progressbar.appendChild($name);
//     $character.appendChild($img);

// };

// createPlayer('player1');

//2nd Task

function createPlayer(player_class, name, life) {
    const $player1 = document.createElement('div');
    $player1.classList.add(player_class);

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');

    const $character = document.createElement('div');
    $character.classList.add('character');

    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = life +'%';

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = name;

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

createPlayer('player1', 'Kitty', 12);
createPlayer('player2', 'Linn', 52);


// /// 3rd Task

// const hero = {
//     name: 'May',
//     hp: 50,
//     img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
//     weapon: [],
//     attack: function() {
//         console.log(player2.name + 'Fight...');
//     }
// };

// function createPlayer(player_class, hero) {
//     const $player1 = document.createElement('div');
//     $player1.classList.add(player_class);

//     const $progressbar = document.createElement('div');
//     $progressbar.classList.add('progressbar');

//     const $character = document.createElement('div');
//     $character.classList.add('character');

//     const $life = document.createElement('div');
//     $life.classList.add('life');
//     $life.style.width = hero.hp +'%';

//     const $name = document.createElement('div');
//     $name.classList.add('name');
//     $name.innerText = hero.name;

//     const $img = document.createElement('img');
//     $img.src = hero.img;

//     const $arenas = document.querySelector('.arenas');
//     $arenas.appendChild($player1);
//     $player1.appendChild($progressbar);
//     $player1.appendChild($character);
//     $progressbar.appendChild($life);
//     $progressbar.appendChild($name);
//     $character.appendChild($img);

// };

// createPlayer('player', hero);