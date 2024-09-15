
const characters = [
    { name: '1. Shelly' },
    { name: '2. Colt' },
    { name: '3. Bull' },
    { name: '4. Jessie' },
    { name: '5. Nita' },
    { name: '6. Brock' },
    { name: '7. Dynamike' },
    { name: '8. Bo' },
    { name: '9. Tick' },
    { name: '10. 8-Bit' },
    { name: '11. Emz' },
    { name: '12. El Primo' },
    { name: '13. Barley' },
    { name: '14. Poco' },
    { name: '15. Rosa' },
    { name: '16. Rico' },
    { name: '17. Darryl' },
    { name: '18. Penny' },
    { name: '19. Carl' },
    { name: '20. Jacky' },
    { name: '21. Piper' },
    { name: '22. Pam' },
    { name: '23. Frank' },
    { name: '24. Bibi' },
    { name: '25. Bea' },
    { name: '26. Nani' },
    { name: '27. Edgar' },
    { name: '28. Griff' },
    { name: '29. Grom' },
    { name: '30. Buzz' },
    { name: '31. Ash' },
    { name: '32. Lola' },
    { name: '33. Fang' },
    { name: '34. Eve' },
    { name: '35. Janet' },
    { name: '36. Bonnie' },
    { name: '37. Gus' },
    { name: '38. Sam' },
    { name: '39. Otis' },
    { name: '40. Mandy' },
    { name: '41. Pearl' },
    { name: '42. Maisie' },
    { name: '43. Kenji' },
    { name: '44. Moe' },
    { name: '45. Leon' },
    { name: '46. Spike' },
    { name: '47. Crow' },
    { name: '48. Sandy' },
    { name: '49. Amber' },
    { name: '50. Gale' },
    { name: '51. Surge' },
    { name: '52. Colette' },
    { name: '53. Lou' },
    { name: '54. Ruffs' },
    { name: '55. Belle' },
    { name: '56. Squeak' },
    { name: '57. Buzz' },
    { name: '58. Griff' },
    { name: '59. Grom' },
    { name: '60. Ash' },
    { name: '61. Lola' },
    { name: '62. Fang' },
    { name: '63. Eve' },
    { name: '64. Janet' },
    { name: '65. Bonnie' },
    { name: '66. Gus' },
    { name: '67. Sam' },
    { name: '68. Otis' },
    { name: '69. Mandy' },
    { name: '70. Pearl' },
    { name: '71. Maisie' },
    { name: '72. Kenji' },
    { name: '73. Moe' },
    { name: '74. Leon' },
    { name: '75. Spike' },
    { name: '76. Crow' },
    { name: '77. Sandy' },
    { name: '78. Amber' },
    { name: '79. Gale' },
    { name: '80. Surge' },
    { name: '81. Colette' },
    { name: '82. Lou' },
    { name: '83. Ruffs' },
    { name: '84. Belle' }
];

const characterList = document.getElementById('character-list');

characters.forEach(character => {
    const characterDiv = document.createElement('div');
    characterDiv.classList.add('character');
    characterDiv.innerHTML = `
        <h3>${character.name}</h3>
    `;
    characterList.appendChild(characterDiv);
});

const maps = [
    { name: "Gem Grab",},
    { name: "Showdown",},
    { name: "Brawl Ball",},
    // Add more maps as needed
];

const mapContainer = document.getElementById('map-container');

maps.forEach(map => {
    const mapDiv = document.createElement('div');
    mapDiv.classList.add('map');
    
    const mapName = document.createElement('h2');
    mapName.textContent = map.name;
    
    const mapImage = document.createElement('img');
    mapImage.src = map.image;
    mapImage.alt = map.name;
    
    mapDiv.appendChild(mapName);
    mapDiv.appendChild(mapImage);
    mapContainer.appendChild(mapDiv);
});



const games = [
    { name: "Brawl Stars", players: 1000000 },
];

const gameContainer = document.getElementById('game-container');

games.forEach(game => {
    const gameDiv = document.createElement('div');
    gameDiv.classList.add('game');
    
    const gameName = document.createElement('h2');
    gameName.textContent = game.name;
    
    const playerCount = document.createElement('p');
    playerCount.textContent = `Játékosok száma: ${game.players}`;
    
    gameDiv.appendChild(gameName);
    gameDiv.appendChild(playerCount);
    gameContainer.appendChild(gameDiv);
});

const updates = [
    { version: "1.0", date: "2018-06-15" },
    { version: "1.1", date: "2018-07-10" },
    { version: "1.2", date: "2018-08-05" },
    { version: "1.3", date: "2018-09-20" },
    { version: "1.4", date: "2018-10-15" },
    { version: "2.0", date: "2019-03-20" },
    { version: "2.1", date: "2019-05-10" },
    { version: "2.2", date: "2019-07-01" },
    { version: "2.3", date: "2019-09-15" },
    { version: "3.0", date: "2020-07-10" },
    { version: "3.1", date: "2020-09-05" },
    { version: "3.2", date: "2020-11-20" },
    { version: "4.0", date: "2021-11-05" },
    { version: "4.1", date: "2022-01-15" },
    { version: "4.2", date: "2022-03-10" },
    { version: "5.0", date: "2022-12-01" },
    { version: "5.1", date: "2023-02-20" },
    { version: "5.2", date: "2023-05-10" },
    { version: "5.3", date: "2023-08-01" },
    { version: "6.0", date: "2024-01-15" },
    { version: "", date: "soon" },
];

const updateContainer = document.getElementById('update-container');

updates.forEach(update => {
    const updateDiv = document.createElement('div');
    updateDiv.classList.add('update');
    
    const version = document.createElement('h2');
    version.textContent = `Verzió: ${update.version}`;
    
    const date = document.createElement('p');
    date.textContent = `Dátum: ${update.date}`;
    
    updateDiv.appendChild(version);
    updateDiv.appendChild(date);
    updateContainer.appendChild(updateDiv);
});

const managers = [
    { name: "Frank Keienburg", role: "Játékvezető" },
    { name: "Paula", role: "Közösségi Menedzser" },
    { name: "Drew", role: "Új Közösségi Menedzser" },
   
];

const managerContainer = document.getElementById('manager-container');

managers.forEach(manager => {
    const managerDiv = document.createElement('div');
    managerDiv.classList.add('manager');
    
    const managerName = document.createElement('h2');
    managerName.textContent = manager.name;
    
    const managerRole = document.createElement('p');
    managerRole.textContent = `Szerep: ${manager.role}`;
    
    managerDiv.appendChild(managerName);
    managerDiv.appendChild(managerRole);
    managerContainer.appendChild(managerDiv);
});

const creators = [
    { name: "KairosTime" },
    { name: "Lex" },
    { name: "OJ" },
    { name: "BenTimm1" },
    { name: "Ash" },
    { name: "Rey" },
    { name: "Coach Cory" },
    { name: "Chief Pat" },
    
];

const creatorContainer = document.getElementById('creator-container');

creators.forEach(creator => {
    const creatorDiv = document.createElement('div');
    creatorDiv.classList.add('creator');
    
    const creatorName = document.createElement('h2');
    creatorName.textContent = creator.name;
    
    creatorDiv.appendChild(creatorName);
    creatorContainer.appendChild(creatorDiv);
});

document.addEventListener('DOMContentLoaded', () => {
    const events = [
        {
            title: 'Brawl Stars Championship 2024',
            description: 'Vegyél részt a Brawl Stars Championship 2024 eseményen és nyerj játékon belüli jutalmakat!',
            link: 'https://event.supercell.com/brawlstars/en'
        },
        {
            title: 'Brawl Stars Tournaments - Challengermode',
            description: 'Versenyezz a legjobb szervezők által rendezett Brawl Stars versenyeken, vagy hozz létre saját eseményt!',
            link: 'https://www.challengermode.com/brawlstars/tournaments?state=upcoming'
        },
        {
            title: 'WORLD FINALS - HOW TO WATCH, INTERACT AND EARN REWARDS!',
            description: 'Nézd meg a Brawl Stars World Finals eseményt, szavazz a meccsekre és nyerj jutalmakat!',
            link: 'https://supercell.com/en/games/brawlstars/blog/esports/bswf2021/'
        }
    ];

    const eventsContainer = document.getElementById('events');
    events.forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.classList.add('event');
        eventElement.innerHTML = `
            <h2>${event.title}</h2>
            <p>${event.description}</p>
            <a href="${event.link}" target="_blank">További információ</a>
        `;
        eventsContainer.appendChild(eventElement);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const events = [
        {
            title: 'SpongeBob SquarePants Event',
            description: 'Csatlakozz a SpongeBob SquarePants eseményhez, és élvezd a Bikini Bottom lakóinak megjelenését a Brawl Stars világában!',
            link: 'https://supercell.com/en/games/brawlstars/blog/community/spongebob-event/'
        },
        {
            title: 'Godzilla vs Kong Event',
            description: 'Vegyél részt a Godzilla vs Kong eseményen, és harcolj a legendás szörnyekkel a Brawl Stars arénában!',
            link: 'https://supercell.com/en/games/brawlstars/blog/community/godzilla-vs-kong-event/'
        },
        {
            title: 'Mega Box Event',
            description: 'Gyűjtsd össze a Mega Boxokat és nyerj fantasztikus jutalmakat a Mega Box esemény során!',
            link: 'https://supercell.com/en/games/brawlstars/blog/community/mega-box-event/'
        },
        {
            title: '#BrawlTogether - New Community Event!',
            description: 'Csatlakozz a #BrawlTogether eseményhez, és érj el 16 milliárd Takedowns-t 14 nap alatt!',
            link: 'https://supercell.com/en/games/brawlstars/blog/community/brawltogether-new-community-event/'
        },
        {
            title: 'Classic Brawl Event: Boxes Are Back!',
            description: 'A Classic Brawl esemény visszahozza a Mega Boxokat és az új Sovereign Rico Hypercharge Skin-t!',
            link: 'https://brawlstars-stats.azurewebsites.net/News'
        }
    ];

    const eventsContainer = document.getElementById('events');
    events.forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.classList.add('event');
        eventElement.innerHTML = `
            <h2>${event.title}</h2>
            <p>${event.description}</p>
            <a href="${event.link}" target="_blank">További információ</a>
        `;
        eventsContainer.appendChild(eventElement);
    });
});


function addTip() {
    const tipsList = document.getElementById('tips-list');
    const newTip = document.createElement('li');
    newTip.textContent = 'Mindig figyelj a környezetedre és használd ki a fedezékeket.';
    tipsList.appendChild(newTip);
}

function addInfo() {
    const infoDiv = document.getElementById('info');
    const newInfo = document.createElement('p');
    newInfo.textContent = 'A Brawl Stars folyamatosan frissül új Brawlerekkel, skinekkel, térképekkel és játékmódokkal.';
    infoDiv.appendChild(newInfo);
}







