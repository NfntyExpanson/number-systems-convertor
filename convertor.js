// Отримуємо посилання на кнопку та поле вводу
var submitButton = document.getElementById("submit_button");
var valueInput = document.getElementById("value_input");

var selectInput = document.getElementById("system_input");
var selectOutput = document.getElementById("system_output");

submitButton.addEventListener("click", function() {               // Додаємо обробник події "click" до кнопки
    var resultElement = document.getElementById("value_output");  //знаходить елемент, у який треба вивести результат
    if (selectInput.value === "decimal" && selectOutput.value === "binary"){            //перевірка обраних систем
        var temp_string = valueInput.value;                           //збереження числа, що ввів користувач, у окрему змінну
        var count_number = temp_string.length;                        //збереження кількості розрядів у числі
        var answer_number = new Array(256);                           //створення буферного масиву, у якому будуть зберігатись одиниці та нулі
        var count_binary = 0;                                         //змінна, що бере участь в обчисленні
        var temp_number = parseInt(temp_string);                      //перевод введеної користувачем строки в числовий тип

        while (temp_number > 0){                                      //обчислення двійкового числа
            answer_number[count_binary] = temp_number % 2;
            temp_number = Math.floor(temp_number / 2);
            ++count_binary;
        }

        var complete_answer = "";                                     //створення строки, у яку буде записано відповідь
        for ( let i = 1; i <= count_binary; ++i ){                    //запис відповіді у строки
            complete_answer += answer_number[count_binary-i];
        }
        resultElement.textContent = complete_answer;                  //вивід відповіді в потрібний елемент (див. строку 8)
    }
    else if(selectInput.value === "decimal" && selectOutput.value === "octal"){
        var temp_string = valueInput.value;                           //збереження числа, що ввів користувач, у окрему змінну
        var count_number = temp_string.length;                        //збереження кількості розрядів у числі
        var answer_number = new Array(256);                           //створення буферного масиву, у якому будуть зберігатись одиниці та нулі
        var count_binary = 0;                                         //змінна, що бере участь в обчисленні
        var temp_number = parseInt(temp_string);

        while (temp_number > 0){
            answer_number[count_binary] = temp_number % 8;
            temp_number = Math.floor(temp_number / 8);
            ++count_binary;
        }

        var complete_answer = "";
        for (let i = 1; i <= count_binary; ++i ){
            complete_answer += answer_number[count_binary-i];
        }
        resultElement.textContent = complete_answer;
    }
    else if(selectInput.value === "decimal" && selectOutput.value === "hex"){
        var temp_string = valueInput.value;                           //збереження числа, що ввів користувач, у окрему змінну
        var count_number = temp_string.length;                        //збереження кількості розрядів у числі
        var answer_number = new Array(256);                           //створення буферного масиву, у якому будуть зберігатись одиниці та нулі
        var count_binary = 0;                                         //змінна, що бере участь в обчисленні
        var temp_number = parseInt(temp_string);

        while (temp_number > 0){
            answer_number[count_binary] = temp_number % 16;
            temp_number = Math.floor(temp_number / 16);
            ++count_binary;
        }

        var complete_answer = "";
        for ( let i = 1; i <= count_binary; ++i ){
                switch ( answer_number[count_binary-i] ){
                    case 10:{
                        complete_answer += "A";
                        break;
                    }
                    case 11:{
                        complete_answer += "B";
                        break;
                    }
                    case 12:{
                        complete_answer += "C";
                        break;
                    }
                    case 13:{
                        complete_answer += "D";
                        break;
                    }
                    case 14:{
                        complete_answer += "E";
                        break;
                    }
                    case 15:{
                        complete_answer += "F";
                        break;
                    }
                    default:{
                        complete_answer += answer_number[count_binary-i];
                        break;
                    }
                }
        }
        resultElement.textContent = complete_answer;
    }
    else if(selectInput.value === "binary" && selectOutput.value === "decimal"){
        var temp_string = valueInput.value;                           //збереження числа, що ввів користувач, у окрему змінну
        var count_number = temp_string.length;                        //збереження кількості розрядів у числі
        var answer_number = new Array(256);                           //створення буферного масиву, у якому будуть зберігатись одиниці та нулі
        var count_binary = 0;                                         //змінна, що бере участь в обчисленні
        var temp_number = parseInt(temp_string);

        for (let i=1; i<=count_number; ++i){
            answer_number[i] = temp_number%10;
            temp_number = Math.floor(temp_number / 10);
        }
        for (let i=count_number; i>=1; --i){
            if (answer_number[i]>1){
                resultElement.textContent = "Спробуйте знову"; 
                return 0;
            }
        }

        var complete_value = parseInt(temp_string);
        var sum_number = 0, revers_number=count_number-1;
        for (let i=count_number; i>=1; --i){
            if (answer_number[i] == 1){
                sum_number = sum_number + Math.pow(2, revers_number);
            }
            --revers_number;
        }
        resultElement.textContent = sum_number; 
    }
    else if(selectInput.value === "binary" && selectOutput.value === "octal"){
        var temp_string = valueInput.value;                           //збереження числа, що ввів користувач, у окрему змінну
        var count_number = temp_string.length;                        //збереження кількості розрядів у числі
        var answer_number = new Array(256);                           //створення буферного масиву, у якому будуть зберігатись одиниці та нулі                                       //змінна, що бере участь в обчисленні
        var temp_number = parseInt(temp_string);

        for (let i=1; i<=count_number; ++i){
            answer_number[i] = temp_number%10;
            temp_number = Math.floor(temp_number / 10);
        }
        for (let i=count_number; i>=1; --i){
            if (answer_number[i]>1){
                resultElement.textContent = "Спробуйте знову"; 
                return 0;
            }
        }
        
        var complete_value = parseInt(temp_string);
        var sum_number = 0, revers_number=count_number-1;
        for (let i=count_number; i>=1; --i){
            if (answer_number[i] == 1){
                sum_number = sum_number + Math.pow(2, revers_number);
            }
            --revers_number;
        }

        var complete_number = new Array(256);
        var count_binary = 0;
        while (sum_number > 0){
            complete_number[count_binary] = sum_number % 8;
            sum_number = Math.floor(sum_number / 8);
            ++count_binary;
        }

        var complete_string = "";
        for (let i = 1; i <= count_binary; ++i ){
            complete_string += complete_number[count_binary-i];
        }
        resultElement.textContent = complete_string;
    }
    else if(selectInput.value === "binary" && selectOutput.value === "hex"){
        var temp_string = valueInput.value;                           //збереження числа, що ввів користувач, у окрему змінну
        var count_number = temp_string.length;                        //збереження кількості розрядів у числі
        var answer_number = new Array(256);                           //створення буферного масиву, у якому будуть зберігатись одиниці та нулі                                       //змінна, що бере участь в обчисленні
        var temp_number = parseInt(temp_string);

        for (let i=1; i<=count_number; ++i){
            answer_number[i] = temp_number%10;
            temp_number = Math.floor(temp_number / 10);
        }
        for (let i=count_number; i>=1; --i){
            if (answer_number[i]>1){
                resultElement.textContent = "Спробуйте знову"; 
                return 0;
            }
        }
        
        var sum_number = 0, revers_number=count_number-1;
        for (let i=count_number; i>=1; --i){
            if (answer_number[i] === 1){
                sum_number = sum_number + Math.pow(2, revers_number);
            }
            --revers_number;
        }

        var complete_number = new Array(256);
        var count_binary = 0;
        while (sum_number > 0){
            complete_number[count_binary] = sum_number % 16;
            sum_number = Math.floor(sum_number / 16);
            ++count_binary;
        }

        var complete_answer = "";
        for ( let i = 1; i <= count_binary; ++i ){
            switch ( complete_number[count_binary-i] ){
                case 10:{
                    complete_answer += "A";
                    break;
                }
                case 11:{
                    complete_answer += "B";
                    break;
                }
                case 12:{
                    complete_answer += "C";
                    break;
                }
                case 13:{
                    complete_answer += "D";
                    break;
                }
                case 14:{
                    complete_answer += "E";
                    break;
                }
                case 15:{
                    complete_answer += "F";
                    break;
                }
                default:{
                    complete_answer += complete_number[count_binary-i];
                }
            }
        }
        resultElement.textContent = complete_answer;
    }
    else if(selectInput.value === "octal" && selectOutput.value === "decimal"){
        var temp_string = valueInput.value;
        var count_number = temp_string.length;
        var answer_number = new Array(256);
        var count_binary = 0;
        var temp_number = parseInt(temp_string);

        for (let i=1; i<=count_number; ++i){
            answer_number[i] = temp_number%10;
            temp_number = Math.floor(temp_number / 10);
        }
        var sum_number=0, revers_number=count_number-1;
        for (let i=count_number; i>=1; --i){
            sum_number = sum_number + answer_number[i]*Math.pow(8,revers_number);
            --revers_number;
        }
        resultElement.textContent = sum_number;      
    }
    else if(selectInput.value === "octal" && selectOutput.value === "binary"){
        var temp_string = valueInput.value;
        var count_number = temp_string.length;
        var answer_number = new Array(256);
        var count_binary = 0;
        var temp_number = parseInt(temp_string);

        for (let i=1; i<=count_number; ++i){
            answer_number[i] = temp_number%10;
            temp_number = Math.floor(temp_number / 10);
        }
        var sum_number=0, revers_number=count_number-1;
        for (let i=count_number; i>=1; --i){
            sum_number = sum_number + answer_number[i]*Math.pow(8,revers_number);
            --revers_number;
        }
        var complete_string = new Array(256);
        while (sum_number > 0){
            complete_string[count_binary] = sum_number % 2;
            sum_number = Math.floor(sum_number / 2);
            ++count_binary;
        }

        var complete_answer = "";
        for ( let i = 1; i <= count_binary; ++i ){
            complete_answer += complete_string[count_binary-i];
        }
        resultElement.textContent = complete_answer;
    }
    else if(selectInput.value === "octal" && selectOutput.value === "hex"){
        var temp_string = valueInput.value;
        var count_number = temp_string.length;
        var answer_number = new Array(256);
        var count_binary = 0;
        var temp_number = parseInt(temp_string);

        for (let i=1; i<=count_number; ++i){
            answer_number[i] = temp_number%10;
            temp_number = Math.floor(temp_number / 10);
        }
        var sum_number=0, revers_number=count_number-1;
        for (let i=count_number; i>=1; --i){
            sum_number = sum_number + answer_number[i]*Math.pow(8,revers_number);
            --revers_number;
        }
        var complete_string = new Array(256);
        while (sum_number > 0){
            complete_string[count_binary] = sum_number % 16;
            sum_number = Math.floor(sum_number / 16);
            ++count_binary;
        }

        var complete_answer = "";
        for ( let i = 1; i <= count_binary; ++i ){
            switch ( complete_string[count_binary-i] ){
                case 10:{
                    complete_answer += "A";
                    break;
                }
                case 11:{
                    complete_answer += "B";
                    break;
                }
                case 12:{
                    complete_answer += "C";
                    break;
                }
                case 13:{
                    complete_answer += "D";
                    break;
                }
                case 14:{
                    complete_answer += "E";
                    break;
                }
                case 15:{
                    complete_answer += "F";
                    break;
                }
                default:{
                    complete_answer += complete_string[count_binary-i];
                }
            }
        }
        resultElement.textContent = complete_answer;
    }
    else if(selectInput.value === "hex" && selectOutput.value === "decimal"){
        var temp_string = valueInput.value;
        var count_number = temp_string.length;
        var answer_number = new Array(256);
        var count_binary = 0;
        for (let i=1; i<=count_number; ++i){
            answer_number[i] = temp_string[i-1];
        }
        var ascii_number = new Array(256);
        for(let i=1; i<=count_number; ++i){
            ascii_number[i] = temp_string.charCodeAt(i-1);
        }
        var complete_answer = new Array(256);
        for (let i=1; i<=count_number; ++i){
            switch (ascii_number[i]){
                case 65:{
                    complete_answer[i] = 10;
                    break;
                }
                case 66:{
                    complete_answer[i] = 11;
                    break;
                }
                case 67:{
                    complete_answer[i] = 12;
                    break;
                }
                case 68:{
                    complete_answer[i] = 13;
                    break;
                }
                case 69:{
                    complete_answer[i] = 14;
                    break;
                }
                case 70:{
                    complete_answer[i] = 15;
                    break;
                }
                default:{
                    complete_answer[i] = answer_number[i];
                    break;
                }
            }
        }
        var sum_number = 0, revers_number=count_number-1;
        for (let i=1; i<=count_number; ++i){
            sum_number = sum_number + complete_answer[i]*Math.pow(16,revers_number);
            --revers_number;
        }
        resultElement.textContent = sum_number;
    }
    else if(selectInput.value === "hex" && selectOutput.value === "binary"){
        var temp_string = valueInput.value;
        var count_number = temp_string.length;
        var answer_number = new Array(256);
        var count_binary = 0;
        for (let i=1; i<=count_number; ++i){
            answer_number[i] = temp_string[i-1];
        }
        var ascii_number = new Array(256);
        for(let i=1; i<=count_number; ++i){
            ascii_number[i] = temp_string.charCodeAt(i-1);
        }
        var complete_answer = new Array(256);
        for (let i=1; i<=count_number; ++i){
            switch (ascii_number[i]){
                case 65:{
                    complete_answer[i] = 10;
                    break;
                }
                case 66:{
                    complete_answer[i] = 11;
                    break;
                }
                case 67:{
                    complete_answer[i] = 12;
                    break;
                }
                case 68:{
                    complete_answer[i] = 13;
                    break;
                }
                case 69:{
                    complete_answer[i] = 14;
                    break;
                }
                case 70:{
                    complete_answer[i] = 15;
                    break;
                }
                default:{
                    complete_answer[i] = answer_number[i];
                    break;
                }
            }
        }
        var sum_number = 0, revers_number=count_number-1;
        for (let i=1; i<=count_number; ++i){
            sum_number = sum_number + complete_answer[i]*Math.pow(16,revers_number);
            --revers_number;
        }
        var string_number = new Array(256);
        while (sum_number > 0){                                      //обчислення двійкового числа
            string_number[count_binary] = sum_number % 2;
            sum_number = Math.floor(sum_number / 2);
            ++count_binary;
        }

        var complete_string = "";                                     //створення строки, у яку буде записано відповідь
        for ( let i = 1; i <= count_binary; ++i ){                    //запис відповіді у строки
            complete_string += string_number[count_binary-i];
        }
        resultElement.textContent = complete_string;

    }
    else if(selectInput.value === "hex" && selectOutput.value === "octal"){
        var temp_string = valueInput.value;
        var count_number = temp_string.length;
        var answer_number = new Array(256);
        var count_binary = 0;
        for (let i=1; i<=count_number; ++i){
            answer_number[i] = temp_string[i-1];
        }
        var ascii_number = new Array(256);
        for(let i=1; i<=count_number; ++i){
            ascii_number[i] = temp_string.charCodeAt(i-1);
        }
        var complete_answer = new Array(256);
        for (let i=1; i<=count_number; ++i){
            switch (ascii_number[i]){
                case 65:{
                    complete_answer[i] = 10;
                    break;
                }
                case 66:{
                    complete_answer[i] = 11;
                    break;
                }
                case 67:{
                    complete_answer[i] = 12;
                    break;
                }
                case 68:{
                    complete_answer[i] = 13;
                    break;
                }
                case 69:{
                    complete_answer[i] = 14;
                    break;
                }
                case 70:{
                    complete_answer[i] = 15;
                    break;
                }
                default:{
                    complete_answer[i] = answer_number[i];
                    break;
                }
            }
        }
        var sum_number = 0, revers_number=count_number-1;
        for (let i=1; i<=count_number; ++i){
            sum_number = sum_number + complete_answer[i]*Math.pow(16,revers_number);
            --revers_number;
        }
        var string_number = new Array(256);
        while (sum_number > 0){                                      //обчислення двійкового числа
            string_number[count_binary] = sum_number % 8;
            sum_number = Math.floor(sum_number / 8);
            ++count_binary;
        }

        var complete_string = "";                                     //створення строки, у яку буде записано відповідь
        for ( let i = 1; i <= count_binary; ++i ){                    //запис відповіді у строки
            complete_string += string_number[count_binary-i];
        }
        resultElement.textContent = complete_string;

    }
    else {
        resultElement.textContent = "Спробуйте знову";
    }
});


// Отримуємо значення з поля вводу
   // var inputValue = valueInput.value;  
// Виводимо отримане значення у елемент <p>
  //  var resultElement = document.getElementById("value_output");
  //  resultElement.textContent = count_number;
