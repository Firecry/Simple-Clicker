let monety = 0
let kliker = document.getElementById('kliker')
let mnoznik = 0
let kopanie = 100
let koszt = 100
let zarabianie = 0
var msec = 0
var sec = '0' + 0
var min = '0' + 0

function kasiura(){
    document.getElementById('upklik').style.backgroundColor = "rgb(15, 15, 15)"
    document.getElementById('uptime').style.backgroundColor = "rgb(15, 15, 15)"
}


function klik(){
    kliker.style.backgroundColor = "black"
    monety = monety + mnoznik + 1
    kasiura()
    document.getElementById('img').style.transform = "rotate(-7deg)";
}
function odklik(){
    kliker.style.backgroundColor = "rgb(15, 15, 15)"
    document.getElementById('img').style.transform = "rotate(0deg)";
}

function up(){
    if(monety>=kopanie){
        mnoznik = mnoznik + 5
        monety = monety - kopanie
        kopanie = kopanie + 100
        kasiura()
    }
}

function ups(){
    if(monety>=koszt){
        setInterval(()=>{
            monety = monety + zarabianie
        }, 1000)
        monety = monety - koszt
        koszt = koszt + 100
        zarabianie++
        kasiura()
    }
}

setInterval(()=>{
        msec++
    
        if(msec==100){
            msec = 0
            sec++
            if(sec<10){
                sec = '0' + sec
            }
        }
        if(sec==60){
            sec = 0
            min++
            if(sec<10){
                sec = '0' + sec
            }
            if(min<10){
                min = '0' + min
            }
        }
        if(min==60){
            sec = 0
            sec = 0
            min = 0
            if(sec<10){
                sec = '0' + sec
            }
            if(min<10){
                min = '0' + min
            }
        }
    
    
        if(msec<10){
            msec = msec + '0'
        }

    let time = `${min}:${sec}:${msec}`

    let objective = monety / 1000000 * 100
    let result = parseFloat(objective).toFixed(0)

    document.getElementById('monety').innerHTML = `Money: ${monety}$`
    document.getElementById('nakladka').style.width = `${monety / 1000000 * 100}vh`
    document.getElementById('upklik').innerHTML = `Upgrade Click ${kopanie}$, Upgrades: ${mnoznik / 5}`
    document.getElementById('uptime').innerHTML = `Upgrade Automatic Investments ${koszt}$, Upgrades: ${zarabianie}`
    document.getElementById('cel').innerHTML = `To finish left ${1000000 - monety}$ (${result}%) Time: ${time}`

    if(monety>=koszt){
        document.getElementById('uptime').style.backgroundColor = "rgb(0, 87, 0)"
    }
    else{
        document.getElementById('uptime').style.backgroundColor = "rgb(146, 0, 0)"
    }

    if(monety>=kopanie){
        document.getElementById('upklik').style.backgroundColor = "rgb(0, 87, 0)"
    }
    else{
        document.getElementById('upklik').style.backgroundColor = "rgb(146, 0, 0)"
    }

    if(monety >= 1000000){
        monety = 0
        mnoznik = 0
        zarabianie = 0
        document.getElementById('ending').style.display = "inherit"
        document.getElementById('container').style.filter = "blur(5px)"
        document.getElementById('kliker').removeAttribute("onmousedown");
        document.getElementById('nakladka').style.display = "none"
        document.getElementById('ending').innerHTML = `Congrats! You finished this simple clicker :D <p>Time: ${time}</p>`
    }
}, 10)