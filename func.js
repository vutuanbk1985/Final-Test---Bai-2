let n;
let str;
const result = document.getElementById("result");

const numberOneTriangle = (n) => {

    for (i = 1; i <= n; i++) {
        str = "";
        for (j = 1; j <= i; j++) {

            str += "*";

        }
        console.log(str);
        const para = document.createElement("p");
        para.innerText = str;
        document.body.appendChild(para);
    }
    return str;

}

const btn = document.getElementById("btn");
btn.onclick = () => {
    n = Number(document.getElementById('input').value);
    // do {
        // n = Number(prompt("Nhap vao mot so nguyen (1-10) hoac nhap 0 de thoat: "));

        if (n <= 10 && n >= 1 && Number.isInteger(n)) {
            numberOneTriangle(n);
        }   
        
        else { alert("Nhap vao mot so nguyen (1-10)") };

    // } while (n > 10 || n < 1 || Number.isInteger(n) === false || isNaN(n) || n === null);
    
    

    // result.innerHTML = str;
}

