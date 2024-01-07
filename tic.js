let turn=1
let win=-1
let matrix=[[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]]
let click=0
function reset(){
    turn=1
    win=-1
    matrix=[[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]]
    click=0
    const cells=document.getElementsByTagName("div")
    for (const cell of cells){
        cell.innerText= "";

    }
    document.getElementById("message").innerText="Player One Turn";
}
function check(ele,r,c){
    matrix[r][c]=turn;
    click=click+1;
    if (ele.innerText!="") return;
    else if(turn==1){
        ele.innerText="X";
        turn=2;
        document.getElementById("message").innerText="Player Two Turn";
        
     }
     else {
        ele.innerText="O";
        turn=1;
        document.getElementById("message").innerText="Player One Turn";
       
     }
     
    for(i=0;i<3;i++)
    {
        //rwo checking
        if(matrix[i][0]==matrix[i][1]&&matrix[i][1]==matrix[i][2])
        {
            win=matrix[i][0];
        }
       //column checking
        if(matrix[0][i]==matrix[1][i]&&matrix[1][i]==matrix[2][i])
        {
            win=matrix[0][i];
        
        }
        if(click==9&&win==-1){
            document.getElementById("message").innerText="No one has win please reset the game";
        }
        
    }  
    //diagonal checking
    if(matrix[0][0]==matrix[1][1]&&matrix[1][1]==matrix[2][2])
    {
        win=matrix[0][0];
        
    }
    if(matrix[0][2]==matrix[1][1]&&matrix[1][1]==matrix[2][0])
    {
            win=matrix[0][2];
    
    }
    if (win!=-1)
    {
        document.getElementById("message").innerText="Player "+win+" has win";  
    }
    
}
