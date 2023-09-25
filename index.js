let progress = document.querySelector(".progress")
let progressLabel = document.querySelector(".progressLabel")
let btn = document.querySelector(".btn")
let value = 0
const handleClick = () => {
    let timer = setInterval(()=>{
        if (value <= 90) {
            value += 10
            progressLabel.innerText = `${value}%`
            progress.style.width = `${value}%`
        }
    }, 1000)

}
btn.addEventListener('click', ()=>{
    value = 0
    handleClick()
})
