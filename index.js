window.onload=function(){
    let letters=['a','b','c','d','i','f','g','h']
    let board=[]
    for (let i=0;i<8;i++){
        board[i]=[]
        for(let j=0;j<8;j++){
            board[i].push(letters[j]+(i+1));
        }
    }
    console.log(board[0][3])
    console.log(board[0].indexOf('a1'))
    function setPosition(pos,array){

    }
   function stepUp(direction,coord){
       if(direction=='u'){
        coord.numb--
        if(i<0){return false}
        return true
       }
       if(direction=='r'){
           coord.char++
           if(j>7){return false}
           return true
       }
       if(direction=='d'){
        coord.numb++
        if(i>7){return false}
        return true
        }
        if(direction=='l'){
            coord.numb--
            if(j<0){return false}
            return true
       }
       return true
   }
   function checkStep(array,i,j){
       if(array[i][j]==undefined){return false}
       return true
   }
   let input= prompt('введите позицию коня')
   input.replace(' ','').replace('.','').replace(',','').toLowerCase()
   char=Number(letters.indexOf(input[0]))
   numb=Number(input[1])
   function Coord(char,numb){
       this.char=char
       this.numb=numb
   }
   let coord=new Coord(Number(letters.indexOf(input[0])),Number(input[1]))
   let possibilities=[]
   let KnightMoves=[
       ['u','u','r'],
       ['u','u','l'],
       ['r','r','u'],
       ['r','r','d'],
       ['d','d','r'],
       ['d','d','l'],
       ['l','l','u'],
       ['l','l','d']
   ]
   function TryMove(moves){
       let flag=true
       for(let i=0;i<moves.length;i++){
           for(let j=0;j<moves[i].length;j++){
                flag=stepUp(moves[i][j],numb,char)
           }
           if(flag){
               possibilities.push([char,numb])
           }
           char=Number(letters.indexOf(input[0]))
           numb=Number(input[1])
       }
   }
   TryMove(KnightMoves)


}