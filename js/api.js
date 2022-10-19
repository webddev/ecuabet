fetch('http://sportsbook.bets-soft.com:777/api/sports?locale=ENG')
    .then((response) => response.json())
    .then((data) => console.log(data));


