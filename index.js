let myEmojis = []
const inputField = document.getElementById("emoji-input")
const emojiContainer = document.getElementById("emoji-container")
const addBtn = document.getElementById("push-btn")
const addBeginnig = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")
const clearBtn = document.getElementById("clr-btn")

const emojisFromLocalStorage = JSON.parse(localStorage.getItem("myEmojis"))

if (emojisFromLocalStorage){
  myEmojis = emojisFromLocalStorage
  renderEmojis()
}

function renderEmojis() {
  inputField.value = ""
  emojiContainer.innerHTML = ""
  if (myEmojis !== []){
    for (let i = 0; i < myEmojis.length; i++){
      const emoji = document.createElement("span")
      emoji.textContent = myEmojis[i]
      emojiContainer.append(emoji)
    }
  }else {
    myEmojis = []
    for (let i = 0; i < myEmojis.length; i++){
      const emoji = document.createElement("span")
      emoji.textContent = myEmojis[i]
      emojiContainer.append(emoji)
    }
  }

}

renderEmojis()

function local() {
  localStorage.setItem("myEmojis", JSON.stringify(myEmojis))
}

addBtn.addEventListener("click", function() {
  // ya da if (inputField.value)
  if (inputField.value !== ""){
    myEmojis.push(inputField.value)
    local()
    renderEmojis()
  }
})


addBeginnig.addEventListener("click", function() {
  if (inputField.value) {
    myEmojis.unshift(inputField.value)
    local()
    renderEmojis()
  }
})

popBtn.addEventListener("click", function() {
    myEmojis.pop()
    local()
    renderEmojis()

})

shiftBtn.addEventListener("click", function() {
    myEmojis.shift()
    local()
    renderEmojis()

})

clearBtn.addEventListener("click", function() {
  myEmojis = []
  local()
  renderEmojis()
})
