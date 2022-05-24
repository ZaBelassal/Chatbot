let inputSubmit = document.getElementById('exampleInput')
let discussion = document.getElementById('discussion')


function Submit(){
    window.event.preventDefault();
    var discussionThumbnail = document.createElement('div')
    console.log(discussionThumbnail)
    discussionThumbnail.textContent = inputSubmit.value
    discussion.appendChild(discussionThumbnail)
    inputSubmit.value=""
    let regex = discussionThumbnail.textContent.toLowerCase()
    if(regex==="hy"){
        let responseboot = document.createElement('div');
        setTimeout(()=>{
            let sound = new Audio('notificationSound.wav')
            responseboot.innerText = "How are you ..?"
            sound.play()
        },500)
        
        console.log(responseboot)
        discussion.appendChild(responseboot)
    }
}