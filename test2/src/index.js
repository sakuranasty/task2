window.onload = () => {
    // Массив символов чтобы сформировать название хода, верстать доску
    let letters = [ 'a','b','c','d','e','f','g','h' ];

    /* создаем двумерный массив доски и заполняем его позициями
    ( может для задания 4 можно присвоить id  по позиции массива (например id='d4')) или вычислять по формуле ix8+j*/
    let board = [];
    for (let i = 0;i < 8;i++) {
        board[i]=[];

        for(let j=0;j<8;j++){
            board[i].push(letters[j]+(i+1));
        }
    }
         // функция проверки валидности шага. можно было использовать switch
   function stepUp(direction,coordinates) {
       if(direction == 'u'){
        coordinates.numb++;

        if(coordinates.numb > 7) { return false };

        return true;
       }

       if(direction == 'r') {
        coordinates.char++;

           if(coordinates.numb > 7) { return false };

           return true;
       }

       if(direction == 'd') {
        coordinates.numb--;

        if(coordinates.numb < 0) { return false };

        return true;
        }

        if(direction == 'l' ) {
            coordinates.char--;

            if(coordinates.char < 0) { return false };

            return true;
       }

       return false;
   }
   // запрашиваем у пользователя позицию, сохраняем в переменную
   let input = prompt('введите позицию коня');

   // приводим к нужному виду
   // FIXME сделать проверку на правильность ввода позиции
   input.replace(' ','').replace('.','').replace(',','').toLowerCase();

   char = Number(letters.indexOf(input[0]));
   numb = Number(input[1]);

   // формируем объект координаты чтобы передать его в функцию stepUp по ссылке 
   function Coordinate(char,numb){
    this.char=char;
    this.numb=numb;
    }

    // создаем массив для возможных ходов (массив coordinate)
   let possibilities=[];
   
   // программируем возможные ходы для фигуры
   let knightMoves = [
       ['u','u','r'],
       ['u','u','l'],
       ['r','r','u'],
       ['r','r','d'],
       ['d','d','r'],
       ['d','d','l'],
       ['l','l','u'],
       ['l','l','d'],
    ]

    // функция для проверки валидности всех вариантов движения фигуры
    function tryMove(moves,coordinates) {
        let valid = true;

        // пробуем каждый вариант движения
        for(let i = 0;i < moves.length; i++) {
            for(let j = 0;j < moves[i].length;j++) {
                valid=stepUp(moves[i][j],coordinates);
            }
            // если ход возможен, пушим его координаты в массив
            if(valid) {
                possibilities.push(coordinates);
            }

            /* т.к. координату, переданную в массив мы изменили, то делаем новую. */
            coordinates=new Coordinate(Number(letters.indexOf(input[0])),Number(input[1]-1));
        }
    }

    // создаем экземпляр координаты от ввода пользователя
    let coord = new Coordinate(Number(letters.indexOf(input[0])),Number(input[1]-1));

    // тестируем все движения
    tryMove(knightMoves,coord);

    // формируем сообщение с ответом
    let message='возможные ходы: ';

    /* для каждой координаты в массиве берем букву из массива letters и индекс строки доски +1,
     т.к. нумерация в массиве идет с 0 */
    possibilities.forEach((element) => {
        // TODO я не транспилировала код, поэтому не знаю сработает ли вывод
        // message+= ('${letters[element.char]}${(element.numb+1)}; ');
        // это работает
        message += (letters[element.char] + (element.numb+1) + '; ');
    });

    // выводим сообщение пользвателю
    alert(message);

}
