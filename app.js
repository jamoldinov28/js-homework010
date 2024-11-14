const telEL = document.querySelector(".tel")
const btnEl = document.querySelector(".btn")

const TEL_NUMBERS = [
    "+998 33 556 80 60",
    "+998 91 405 07 93",
    "+998 95 005 66 08",
    "+998 97 166 60 15",
    "+998 99 301 46 55",
    "+998 99 129 62 09",
    "+998 93 615 25 64",
    "+998 88 142 90 05",
    "+998 88 543 17 75",
    "+998 95 150 59 58",
    "+998 90 016 26 54",
    "+998 97 107 01 51",
    "+998 77 877 77 64 ",
    "+998 88 999 09 69 ",
    "+998 88 353 30 06 ",
]


function getRandomNumber(){
    btnEl.setAttribute("disabled", true)

    const interval = setInterval(()=>{
        let randomNumber = Math.floor(Math.random() * TEL_NUMBERS.length)
        telEL.innerHTML = TEL_NUMBERS [randomNumber]
    }, 100)

    setTimeout(()=> {
        clearInterval(interval)
        btnEl.removeAttribute("disabled")
    }, 2500)
}