
$('document').ready(function () {


    var matrix = [[null, null, null], [null, null, null], [null, null, null]]
    var turn = 'X'
    var counter = 0
    var gameFinished

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
    }

    $('#reset').click(function () {
        matrix = [[null, null, null], [null, null, null], [null, null, null]]
        $('.boxes').text('')
        gameFinished = null
        counter = 0
        turn = 'X'
        document.getElementsByTagName('p')[0].innerHTML = 'Game starts with X..!!! Winner will be shown here...'
    })

    $('.boxes').click(function () {
        insertValue(this.id[0], this.id[1])
    })

})
