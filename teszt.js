document.querySelector(".szabalyok").addEventListener("click", () => {
    document.querySelector(".menu").style.display = "none",
        document.querySelector(".szabalySection").style.display = "flex"
})
document.querySelector(".backToMenu").addEventListener("click", () => {
    document.querySelector(".menu").style.display = "flex",
        document.querySelector(".szabalySection").style.display = "none"
})
document.querySelector(".jatekosNevek").addEventListener("click", () => {
    document.querySelector(".menu").style.display = "none",
        document.querySelector(".jatekKezdese").style.display = "flex"
})
document.querySelector(".backToMenu2").addEventListener("click", () => {
    document.querySelector(".menu").style.display = "flex",
        document.querySelector(".jatekKezdese").style.display = "none"
})
document.querySelector(".startBtn").addEventListener("click", () => {
    document.querySelector(".jatekFelulet").style.display = "flex",
        document.querySelector(".jatekKezdese").style.display = "none"
})
document.querySelector(".retToMenu").addEventListener("click", () => {
    document.querySelector(".jatekFelulet").style.display = "none",
        document.querySelector(".menu").style.display = "flex"
})

const rndNum = Math.floor(Math.random() * 11);
let firstPlayer = document.querySelector("#egyesJatekos")
let secondPlayer = document.querySelector("#kettesJatekos")
let egyesJatekosNeve = document.querySelector(".egyesJatekosNeveS")
let kettesJatekosNeve = document.querySelector(".kettesJatekosNeveS")
let nextPlayer = document.querySelector(".nextPlayerName")
let t = Array.from(document.querySelectorAll('.tabla .mezo')), tableData = []
let kjbh = document.querySelector(".kettesJatekosCsikiCsukiBabuHider")
let ejbh = document.querySelector(".egyesJatekosCsikiCsukiBabuHider")
let egyesJatekosBabui = document.querySelector(".egyesJatekosBabui").querySelectorAll("img")
let kettesJatekosBabui = document.querySelector(".kettesJatekosBabui").querySelectorAll("img")
const draggables = document.querySelectorAll('.draggableImg');
const containers = document.querySelectorAll('.dragabbleTd', 'dragContainer');
let mezoHider = Array.from(document.querySelectorAll('.mezoHider')), mezoHiderArr = []
let
    babuMatrix = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ]
let col1, col2, col3, col4, row1, row2, row3, row4, negyzet1, negyzet2, negyzet3, negyzet4
let winnerPlayer = document.querySelector(".winnerPlayer")
while (t.length) tableData.push(t.splice(0, 4))
while (mezoHider.length) mezoHiderArr.push(mezoHider.splice(0, 4))
winnerPlayer.parentElement.style.display = "none"
document.querySelector(".startBtn").addEventListener("click", () => {
    egyesJatekosNeve.innerText = firstPlayer.value,
        kettesJatekosNeve.innerText = secondPlayer.value,

        nextPlayerName(rndNum),
        babuHider(nextPlayer.innerText),
        console.log(rndNum)
})
function nextPlayerName(rndNum) {
    if (rndNum % 2 === 0) {
        return nextPlayer.innerText = firstPlayer.value,
            nextPlayer.style.color = "#8ad930"
    }
    else {
        return nextPlayer.innerText = secondPlayer.value,
            nextPlayer.style.color = "#d93030"
    }
}
function babuHider(nev) {
    if (nev == secondPlayer.value) {
        kjbh.style.display = "none", ejbh.style.display = "flex"
    }
    else {
        kjbh.style.display = "flex", ejbh.style.display = "none"
    }
}
function idChanger(szuloCella) {
    szuloCella.setAttribute('id', szuloCella.firstChild.id)
    szuloCella.firstChild.setAttribute('draggable', false)
    szuloCella.setAttribute('draggable', false)
    szuloCella.firstChild.classList.remove('draggableImg')
    szuloCella.classList.remove('dragabbleTd')
}
draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging')
    })

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging')
    })
})
containers.forEach(container => {
    container.addEventListener('dragover', e => {
        e.preventDefault()
        const draggable = document.querySelector('.dragging')
        container.appendChild(draggable)
    })
})
console.log(tableData);
const matrixCol = (matrix, colNumber) => matrix.map(n => n[colNumber]);
for (let i = 0; i < tableData.length; i++) {
    for (let j = 0; j < tableData[i].length; j++) {
        tableData[i][j].addEventListener('drop', () => {
            if (nextPlayer.innerText === firstPlayer.value) {
                kjbh.style.display = "none", ejbh.style.display = "flex"
                idChanger(tableData[i][j])
                babuMatrix[i][j] = tableData[i][j].id
                nextPlayer.innerText = secondPlayer.value
                nextPlayer.style.color = "#d93030"
                console.log(babuMatrix)
                col1 = matrixCol(babuMatrix, 0)
                col2 = matrixCol(babuMatrix, 1)
                col3 = matrixCol(babuMatrix, 2)
                col4 = matrixCol(babuMatrix, 3)
                row1 = [babuMatrix[0][0], babuMatrix[0][1], babuMatrix[0][2], babuMatrix[0][3]]
                row2 = [babuMatrix[1][0], babuMatrix[1][1], babuMatrix[1][2], babuMatrix[1][3]]
                row3 = [babuMatrix[2][0], babuMatrix[2][1], babuMatrix[2][2], babuMatrix[2][3]]
                row4 = [babuMatrix[3][0], babuMatrix[3][1], babuMatrix[3][2], babuMatrix[3][3]]
                negyzet1 = [babuMatrix[0][0], babuMatrix[0][1], babuMatrix[1][0], babuMatrix[1][1]]
                negyzet2 = [babuMatrix[0][2], babuMatrix[0][3], babuMatrix[1][2], babuMatrix[1][3]]
                negyzet3 = [babuMatrix[2][0], babuMatrix[2][1], babuMatrix[3][0], babuMatrix[3][1]]
                negyzet4 = [babuMatrix[2][2], babuMatrix[2][3], babuMatrix[3][2], babuMatrix[3][3]]
                console.log(`
                col1: ${col1}   row1: ${row1}   negyzet1: ${negyzet1}
                col2: ${col2}   row2: ${row2}   negyzet2: ${negyzet2}
                col3: ${col3}   row3: ${row3}   negyzet3: ${negyzet3}
                col4: ${col4}   row4: ${row4}   negyzet4: ${negyzet4}
                `);
                winner = winCheck(col1, col2, col3, col4, row1, row2, row3, row4, negyzet1, negyzet2, negyzet3, negyzet4)
                console.log(winner);
                mezoHiderArr[i][j].style.visibility = "visible"
                if (winner === true) {
                    console.log(firstPlayer.value);
                    nextPlayer.parentElement.style.display = "none"
                    winnerPlayer.parentElement.style.display = ""
                    winnerPlayer.textContent = firstPlayer.value.toUpperCase()
                    winnerPlayer.style.color = "#8ad930"
                    kjbh.style.display = "flex", ejbh.style.display = "flex"
                }
            }
            else if (nextPlayer.innerText === secondPlayer.value) {
                kjbh.style.display = "flex", ejbh.style.display = "none"
                idChanger(tableData[i][j])
                babuMatrix[i][j] = tableData[i][j].id
                nextPlayer.innerText = firstPlayer.value
                nextPlayer.style.color = "#8ad930"
                console.log(babuMatrix)
                col1 = matrixCol(babuMatrix, 0)
                col2 = matrixCol(babuMatrix, 1)
                col3 = matrixCol(babuMatrix, 2)
                col4 = matrixCol(babuMatrix, 3)
                row1 = [babuMatrix[0][0], babuMatrix[0][1], babuMatrix[0][2], babuMatrix[0][3]]
                row2 = [babuMatrix[1][0], babuMatrix[1][1], babuMatrix[1][2], babuMatrix[1][3]]
                row3 = [babuMatrix[2][0], babuMatrix[2][1], babuMatrix[2][2], babuMatrix[2][3]]
                row4 = [babuMatrix[3][0], babuMatrix[3][1], babuMatrix[3][2], babuMatrix[3][3]]
                negyzet1 = [babuMatrix[0][0], babuMatrix[0][1], babuMatrix[1][0], babuMatrix[1][1]]
                negyzet2 = [babuMatrix[0][2], babuMatrix[0][3], babuMatrix[1][2], babuMatrix[1][3]]
                negyzet3 = [babuMatrix[2][0], babuMatrix[2][1], babuMatrix[3][0], babuMatrix[3][1]]
                negyzet4 = [babuMatrix[2][2], babuMatrix[2][3], babuMatrix[3][2], babuMatrix[3][3]]
                console.log(`
                col1: ${col1}   row1: ${row1}   negyzet1: ${negyzet1}
                col2: ${col2}   row2: ${row2}   negyzet2: ${negyzet2}
                col3: ${col3}   row3: ${row3}   negyzet3: ${negyzet3}
                col4: ${col4}   row4: ${row4}   negyzet4: ${negyzet4}
                `);
                winner = winCheck(col1, col2, col3, col4, row1, row2, row3, row4, negyzet1, negyzet2, negyzet3, negyzet4)
                console.log(winner)
                mezoHiderArr[i][j].style.visibility = "visible"
                if (winner === true) {
                    console.log(secondPlayer.value);
                    nextPlayer.parentElement.style.display = "none"
                    winnerPlayer.parentElement.style.display = ""
                    winnerPlayer.textContent = secondPlayer.value.toUpperCase()
                    winnerPlayer.style.color = '#d93030'
                    kjbh.style.display = "flex", ejbh.style.display = "flex"
                }
            }
        })
    }
}

function winCheck(col1, col2, col3, col4, row1, row2, row3, row4, negyzet1, negyzet2, negyzet3, negyzet4) {
    let c1 = new Set(col1)
    let c2 = new Set(col2)
    let c3 = new Set(col3)
    let c4 = new Set(col4)
    let r1 = new Set(row1)
    let r2 = new Set(row2)
    let r3 = new Set(row3)
    let r4 = new Set(row4)
    let n1 = new Set(negyzet1)
    let n2 = new Set(negyzet2)
    let n3 = new Set(negyzet3)
    let n4 = new Set(negyzet4)
    c1.delete(0)
    c2.delete(0)
    c3.delete(0)
    c4.delete(0)
    r1.delete(0)
    r2.delete(0)
    r3.delete(0)
    r4.delete(0)
    n1.delete(0)
    n2.delete(0)
    n3.delete(0)
    for (let i = 1; i <= 4; i++) {
        if (
            c1.size === 4 ||
            c2.size === 4 ||
            c3.size === 4 ||
            c4.size === 4 ||
            r1.size === 4 ||
            r2.size === 4 ||
            r3.size === 4 ||
            r4.size === 4 ||
            n1.size === 4 ||
            n2.size === 4 ||
            n3.size === 4 ||
            n4.size === 4
        ) {
            return naVanEGyoztes = true
        }
    }
    return naVanEGyoztes = false
}
/* WIN CHECK

[1][2][3][4] 
[1][2][3][4]
[1][2][3][4]
[1][2][3][4]


[1][1][1][1]
[2][2][2][2]
[3][3][3][3]
[4][4][4][4]


[1][2][1][2]
[3][4][3][4]
[1][2][1][2]
[3][4][3][4]
*/
