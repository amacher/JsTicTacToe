let flag = 1;
let players = 0;
openBoard(true)

function players_t(){
    if(document.getElementById('player1').checked == true) {   
        players = 1;
    } else {  
        players = 2;
    }  
    lockPly(true);
    clrBrd();
    document.getElementById('print').innerHTML = "Player X Turn";
    openBoard(false);
}

function lockPly(pass){
    document.getElementById("player1").disabled = pass;
    document.getElementById("player2").disabled = pass;
}

function clrBrd(){
    document.getElementById('c1').value = '';
    document.getElementById('c2').value = '';
    document.getElementById('c3').value = '';
    document.getElementById('c4').value = '';
    document.getElementById('c5').value = '';
    document.getElementById('c6').value = '';
    document.getElementById('c7').value = '';
    document.getElementById('c8').value = '';
    document.getElementById('c9').value = '';
    flag = 1;
}

function openBoard(pass){
    document.getElementById("c1").disabled = pass;
    document.getElementById("c2").disabled = pass;
    document.getElementById("c3").disabled = pass;
    document.getElementById("c4").disabled = pass;
    document.getElementById("c5").disabled = pass;
    document.getElementById("c6").disabled = pass;
    document.getElementById("c7").disabled = pass;
    document.getElementById("c8").disabled = pass;
    document.getElementById("c9").disabled = pass;
}

function computerPlayer(freeSpaces){
    let randomIndex = Math.floor(Math.random() * freeSpaces.length);
    let item = freeSpaces[randomIndex];
    toChk(item); theGame();
}

function theGame() {
    // window.alert('Player # ' + players);
    let c1 = document.getElementById('c1').value;
    let c2 = document.getElementById('c2').value;
    let c3 = document.getElementById('c3').value;
    let c4 = document.getElementById('c4').value;
    let c5 = document.getElementById('c5').value;
    let c6 = document.getElementById('c6').value;
    let c7 = document.getElementById('c7').value;
    let c8 = document.getElementById('c8').value;
    let c9 = document.getElementById('c9').value;
    
    //creates array of empty rows if 1 player
    let freeSpaces = [];
    playSpaces(c1, c2, c3, c4, c5, c6, c7, c8, c9);
    //put in own function to keep seperated from main if statement.
    function playSpaces(c1, c2, c3, c4, c5, c6, c7, c8, c9){
        if (c1 =='') {freeSpaces.push('c1');}
        if (c2 =='') {freeSpaces.push('c2');}
        if (c3 =='') {freeSpaces.push('c3');}
        if (c4 =='') {freeSpaces.push('c4');}
        if (c5 =='') {freeSpaces.push('c5');}
        if (c6 =='') {freeSpaces.push('c6');}
        if (c7 =='') {freeSpaces.push('c7');}
        if (c8 =='') {freeSpaces.push('c8');}
        if (c9 =='') {freeSpaces.push('c9');}
    }

    //Check if X won; then disable all other fields
    if ((c1 == 'X' && c2 == 'X' && c3 =='X') || (c1 == 'X' && c4 == 'X' && c7 =='X') || (c7 == 'X' && c8 == 'X' && c9 =='X') ||
    (c3 == 'X' && c6 == 'X' && c9 =='X') || (c1 == 'X' && c5 == 'X' && c9 =='X') || (c3 == 'X' && c5 == 'X' && c7 =='X') ||
    (c2 == 'X' && c5 == 'X' && c8 =='X') || (c4 == 'X' && c5 == 'X' && c6 =='X')) {
        document.getElementById('print').innerHTML = "Player X Won!";
        openBoard(true);
        window.alert('Player X Won!');
        lockPly(false);
    }

    //Check if Y won; then disable all other fields
    else if ((c1 == 'O' && c2 == 'O' && c3 =='O') || (c1 == 'O' && c4 == 'O' && c7 =='O') || (c7 == 'O' && c8 == 'O' && c9 =='O') ||
    (c3 == 'O' && c6 == 'O' && c9 =='O') || (c1 == 'O' && c5 == 'O' && c9 =='O') || (c3 == 'O' && c5 == 'O' && c7 =='O') ||
    (c2 == 'O' && c5 == 'O' && c8 =='O') || (c4 == 'O' && c5 == 'O' && c6 =='O')){
        document.getElementById('print').innerHTML = "Player O Won!";
        openBoard(true);
        window.alert('Player O Won!');
        lockPly(false);
    }
    // Checking Tie but seeing if all spaces are filled.
    else if (c1 != '' && c2 != '' && c3 != '' && c4 != '' && c5 != '' && c6 != '' && c7 != '' && c8 != '' && c9 != ''){
        document.getElementById('print').innerHTML= "Tie!";
        window.alert("Tie!");
        lockPly(false);
    }
    else {
        if (flag == 1) {
            document.getElementById('print').innerHTML = "Player X Turn";
        }
        else {
            document.getElementById('print').innerHTML = 'Player O Turn';
            if (players == 1){
                computerPlayer(freeSpaces);
            }
        }
    }
}

function theGame_reset() {
    location.reload();
    clrBrd();
    players = 0;
}

function toChk(brdCell) {
    if (flag == 1) {
        document.getElementById(brdCell).value = 'X';
        document.getElementById(brdCell).disabled = true;
        flag = 0;
    }
    else {
        document.getElementById(brdCell).value = 'O';
        document.getElementById(brdCell).disabled = true;
        flag = 1;
    }
    }
