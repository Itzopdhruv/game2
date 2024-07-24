let boxes = document.querySelectorAll(".box")
// onsole.log(boxes);c
let winPatterns = [[0,1,2],[3,4,5] ,[6,7,8] , [0,3,6], [1,4,7] , [2,5,8] , [0,4,8] , [2,4,6]];
let resetButton = document.querySelector("#reset-button");
let newButton = document.querySelector(".new-game");
let turn0 = true;
let messageContainer = document.querySelector(".msg-container");
let msgContainer = document.querySelector(".winner-msg");
let cnt = 0;
const drawGame = () =>{
    messageContainer.classList.remove("hide");
    msgContainer.innerText = "Your game is draw";
    cnt = 0;

}

const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const resetGame = ()=>{
    cnt = 0;
    turn0 = true;
    messageContainer.classList.add("hide");
    enableBoxes();
}
const enableBoxes = ()=>{
    
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";

    }
}
const showWinner= (winner)=>{
    disableBoxes();
    messageContainer.classList.remove("hide")
    msgContainer.innerText = ` Congratulations, the winner is ${winner}.`

}
let checkWinner = ()=>{
    for(let pattern of winPatterns){
        let val1 = pattern[0];
        let val2 = pattern[1];
        let val3 = pattern[2];
        if(boxes[val1].innerText != "" && boxes[val2].innerText != "" && boxes[val3].innerText != ""){
            if(boxes[val1].innerText === boxes[val2].innerText && boxes[val2].innerText === boxes[val3].innerText){
                console.log("winner" + boxes[val1].innerText);
                showWinner(boxes[val1].innerText);
                return true;
            }
        }
        
    }
    return false;
}

boxes.forEach((box) =>{
    box.addEventListener("click" , ()=>{
        cnt++;
        if(turn0){
            box.innerText = "0";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
        if(!checkWinner() && cnt == 9){
            drawGame();
        }
    });

});
resetButton.addEventListener("click" , resetGame);
newButton.addEventListener("click" , resetGame);

