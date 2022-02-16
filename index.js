
$('document').ready(function () {


    var matrix = [[null, null, null], [null, null, null], [null, null, null]]
    var turn = 'X'
    var counter = 0
    var gameFinished
    var multiplayer = 1
    var emptyMatrixValues = ['00', '01', '02', '10', '11', '12', '20', '21', '22']

    function checkMatchWin(player, x, y) {
        if (matrix[x][0] == player && matrix[x][1] == player && matrix[x][2] == player) {
            return true
        }
        if (matrix[0][y] == player && matrix[1][y] == player && matrix[2][y] == player) {
            return true
        }
        if (x == y || (x == 2 && y == 0) || (x == 0 && y == 2)) {
            if (matrix[0][0] == player && matrix[1][1] == player && matrix[2][2] == player) {
                return true
            }
            if (matrix[0][2] == player && matrix[1][1] == player && matrix[2][0] == player) {
                return true
            }
        }
    }

    function insertValue(x, y) {

        if (gameFinished) return

        document.getElementById('' + x + '' + y).innerHTML = turn
        matrix[x][y] = turn
        emptyMatrixValues.splice(emptyMatrixValues.indexOf(x + '' + y), 1)

        var p = document.getElementsByTagName('p')[0]
        if (checkMatchWin(turn, x, y)) {
            document.getElementsByTagName('p')[0].innerHTML = 'Player ' + turn + ' wins!!!! Please click Reset to Continue'
            gameFinished = 1
            return
        }

        if (turn == 'X') turn = '0'
        else turn = 'X'

        if (++counter >= 9) {
            document.getElementsByTagName('p')[0].innerHTML = 'Match Drawn!!!! Please click Reset to Continue'
            gameFinished = 1
            return
        }

        if (!multiplayer && turn == '0') {
            computerTurn()
        }
    }

    $('#reset').click(function () {
        reset()
    })

    function reset() {

        matrix = [[null, null, null], [null, null, null], [null, null, null]]
        gameFinished = null
        counter = 0
        turn = 'X'
        emptyMatrixValues = ['00', '01', '02', '10', '11', '12', '20', '21', '22']
        $('.boxes').text('')
        document.getElementsByTagName('p')[0].innerHTML = 'Game starts with X..!!! Winner will be shown here...'
    }

    $('.boxes').click(function () {
        insertValue(this.id[0], this.id[1])
    })

    $('input[type=radio][name=GameType]').change(function () {
        if (this.value == 'SinglePlayer') {

            multiplayer = null
            reset()
        }
        else if (this.value == 'MultiPlayer') {
            multiplayer = 1
            reset()
        }
    });

    //Single Player functions
    function randomNumber(min, max) {
        return Math.random() * (max - min) + min;
    }

    function getAvailableCells() {
        var emptyMatrixValues = []

        matrix.forEach(x => {
            matrix.forEach(y => {
                if (!x && !y) emptyMatrixValues.push(x + '' + y)
            });
        });
        return emptyMatrixValues
    }

    function computerTurn() {
        var computerChoose = Math.random() * emptyMatrixValues.length
        insertValue(emptyMatrixValues[parseInt(computerChoose)][0], emptyMatrixValues[parseInt(computerChoose)][1])
    }



})
