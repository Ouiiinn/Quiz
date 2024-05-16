let count = 0; // เอาไว้นับคะแนนที่กดแล้วถูกต้อง

function checkAnswer(answer) {
    const result = document.getElementById('result1');
    if (answer === 'a') {
        result.textContent = "ถูกต้อง PIM ย่อมาจาก PIM";
        result.style.color = 'green';
        count = 1; // count = count + 1;
    } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
    }
 }

function checkAnswer2(answer) {
    const result = document.getElementById('result2');
    const result3 = document.getElementById('result3');
    if (answer === 'c') {
        result.textContent = "ถูกต้อง สำนักพัฒนาและประกันคุณภาพผลิตภัณฑ์ อยู่ตึก Food Technology";
        result.style.color = 'green';
        count++; // +1 คะแนน ถ้าตอบถูก;
    } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
    }

    result3.textContent = "คุณได้ทั้งหมด " + count + " คะแนน";
    count = 0;
    

}