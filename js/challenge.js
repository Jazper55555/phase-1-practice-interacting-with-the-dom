function timer() {
    const counter = document.getElementById('counter')
    counter.textContent = startCount++
}

let startCount = 0
let interval = setInterval(timer, 1000)

function buttonCounter() {
    const parent = document.body
    parent.addEventListener('click', function(event) {
        if (event.target.id === 'minus') {
            startCount--
        } else if
        (event.target.id === 'plus') {
            startCount++
        }
    })
}

buttonCounter()

function heartDisplay() {
    let heart = document.getElementById('heart')
    let heartList = document.getElementsByClassName('likes')[0]
    heart.addEventListener('click', function(event) {
        const newLike = document.createElement('li')
        newLike.textContent = `You liked number: ${startCount}`
        heartList.appendChild(newLike)
    })
}

heartDisplay()

function pauseButton() {
    let pause = document.getElementById('pause');
    let buttons = document.getElementsByTagName('button');
    let isPaused = false
  
    pause.addEventListener('click', function(event) {
      if (!isPaused) {
        clearInterval(interval);
        pause.textContent = 'resume';
        for (let i = 0; i < buttons.length; i++) {
          if (buttons[i] !== pause) {
            buttons[i].disabled = true;
          }
        }
      } else {
        interval = setInterval(timer, 1000);
        pause.textContent = 'pause';
        for (let i = 0; i < buttons.length; i++) {
          buttons[i].disabled = false;
        }
      }
      isPaused = !isPaused
    });
} 

function inputText() {
    let commentForm = document.getElementById('comment-form')
    commentForm.addEventListener('submit', function(event) {
        event.preventDefault()
        const newComment = document.createElement('li')
        newComment.textContent = commentForm.elements['comment-input'].value
        document.getElementById('list').appendChild(newComment)
        commentForm.reset
    })
}

inputText()
  
  document.addEventListener('DOMContentLoaded', function(event) {
    console.log("DOM")
    pauseButton();
  });