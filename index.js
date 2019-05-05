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
   function stepUp(direction,coordinates){
       if(direction=='u'){
        coordinates.numb--
        if(coordinates.numb<0){return false}
        return true
       }
       if(direction=='r'){
        coordinates.char++
           if(coordinates.numb>7){return false}
           return true
       }
       if(direction=='d'){
        coordinates.numb++
        if(coordinates.numb>7){return false}
        return true
        }
        if(direction=='l'){
            coordinates.numb--
            if(coordinates.numb<0){return false}
            return true
       }
       return false
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
    function TryMove(moves,coordinates){
        let flag=true
        for(let i=0;i<moves.length;i++){
            for(let j=0;j<moves[i].length;j++){
                flag=stepUp(moves[i][j],coordinates)
            }
            if(flag){
                possibilities.push(coordinates)
            }
            coordinates=new Coord(Number(letters.indexOf(input[0])),Number(input[1]))
        }
    }
    let coord=new Coord(Number(letters.indexOf(input[0])),Number(input[1]))
    TryMove(KnightMoves,coord)


}