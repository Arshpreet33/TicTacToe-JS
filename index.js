
var matrix = [[null, null, null], [null, null, null], [null, null, null]]
turn = 'X'

function checkMatchWin(player, x, y) {
    if (matrix[x][0] == player && matrix[x][1] == player && matrix[x][2] == player) {
        return true
    }
    if (matrix[0][x] == player && matrix[1][x] == player && matrix[2][x] == player) {
        return true
    }
    if (x == y) {
        if (matrix[0][0] == player && matrix[1][1] == player && matrix[2][2] == player) {
            return true
        }
        if (matrix[0][2] == player && matrix[1][1] == player && matrix[2][0] == player) {
            return true
        }
    }
}

function insertValue(x, y) {
    document.getElementById('' + x + '' + y).innerHTML = turn
    matrix[x][y] = turn

    var p = document.getElementsByTagName('p')[0]
    if (checkMatchWin(turn, x, y)) {
        document.getElementsByTagName('p')[0].innerHTML = 'Player ' + turn + ' wins!!!!'
        return
    }

    if (turn == 'X') turn = '0'
    else turn = 'X'
}

function reset() {
    matrix = [[null, null, null], [null, null, null], [null, null, null]]
    document.getElementsByClassName('boxes').innerHTML = ''
}

