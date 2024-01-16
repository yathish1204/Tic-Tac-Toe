let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newBtn = document.querySelector("#newbtn");

let turnO = true;
let count = 0 ;

let newContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText = "O";
            turnO= false;
        }else{
            box.innerText="X";
            turnO= true;
        }
        box.disabled=true;
        count++;
        let isWinner = checkWinner();
        if(count ===9 && !isWinner){
            drawGame();
        }
    });
});

const drawGame = () =>{
    msg.innerText=`Game was Draw`;
    newContainer.classList.remove("hide");
    disableBoxes();
}

const resetGame = () =>{
    enableBoxes();
    newContainer.classList.add("hide");
    count = 0;
    turnO = true;
};

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner = (winner) => {
    msg.innerText= `Winner is ${winner}`;
    newContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () =>{
    for(let pattern of winPattern){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos1Val!=""&& pos2Val!=""&&pos3Val!=""){
            if(pos1Val===pos2Val&&pos2Val===pos3Val){
                console.log("winner",pos1Val);
                showWinner(pos1Val);
                return true;
            }
        }
    }
};

newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
