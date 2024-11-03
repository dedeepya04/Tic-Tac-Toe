let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let win = document.querySelector(".new");
let newgame= document.querySelector("#btn");
let msg=document.querySelector("#msg");

let turn0  = true;
let click= 0;

const winPatterns= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach ( (box) => {
    box.addEventListener("click", () => {
        
        if(turn0)
        {
        box.innerText="O";
        turn0=false;
        click++;
        } else{
            box.innerText="X";
            turn0=true;
            click++;
        }
        box.disabled =true;
        checkWinner();
    });
});

const disableBoxes = () => {
    for (let box of boxes ){
        box.disabled=true;
    }
}
const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText="";
    }

}

const showWinner = (winner) => {
    msg.innerText= `Congratulations, Winner is ${winner}`;
    win.classList.remove("new");
    disableBoxes();
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        
    let pos1Val=  boxes[pattern[0]].innerText;
    let pos2Val=  boxes[pattern[1]].innerText;
    let pos3Val=  boxes[pattern[2]].innerText;

    if(pos1Val!= "" && pos2Val!="" && pos3Val!="")
    {
        if(pos1Val===pos2Val && pos2Val===pos3Val)
        {
            console.log("Winner", pos1Val);
           showWinner(pos1Val);

        }
    
    else if (click==9)
    {
        msg.innerText=`The match  is draw!!`;
        win.classList.remove("new");
    }
    }
}
}

const resetGame = () => {
    turn0= true;
    enableBoxes();
    win.classList.add("new");
};

newgame.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);