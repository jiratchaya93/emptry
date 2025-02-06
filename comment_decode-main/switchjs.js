const main_score = document.getElementById("main_score") //รับidเพื่อเปลี่ยนstyle decodemath.htmlบรรทับที่59-96
const truemain = document.getElementById("truemain") //รับidเพื่อเปลี่ยนstyle อยุู่ในdecodemath.htmlบรรทับที่22-57
const colorboxa = document.getElementById("a")
const colorboxb = document.getElementById("b")
const colorboxc = document.getElementById("c")
const colorboxd = document.getElementById("d")
const colorboxf = document.getElementById("f")
const colorboxe = document.getElementById("e")
const colorboxr = document.getElementById("r")

const colorboxa1 = document.getElementById("a1")
const colorboxb1 = document.getElementById("b1")
const colorboxc1 = document.getElementById("c1")
const colorboxd1 = document.getElementById("d1")
const colorboxf1 = document.getElementById("f1")
const colorboxe1 = document.getElementById("e1")
const colorboxr1 = document.getElementById("r1")


const colorboxa2 = document.getElementById("a2")
const colorboxb2 = document.getElementById("b2")
const colorboxc2 = document.getElementById("c2")
const colorboxd2 = document.getElementById("d2")
const colorboxf2 = document.getElementById("f2")
const colorboxe2 = document.getElementById("e2")
const colorboxr2 = document.getElementById("r2")



function checkme() {
    const checknow = document.getElementById("checkbox") //รับidเพื่อตรวจสอบค่าว่าเป็นtrue อยุู่ในdecodemath.htmlบรรทับที่17-20
    if (checknow.checked == true) { //ตรวจสอบcheckboxว่าเป็นtrue
        main_score.style.display = 'inline' //เปิดการมองเป็น
        truemain.style.display = 'none' //ปิดการมองเป็น
        colorboxa.style.backgroundColor = "#000000"
        colorboxb.style.backgroundColor = "#000000"
        colorboxc.style.backgroundColor = "#000000"
        colorboxd.style.backgroundColor = "#000000"
        colorboxf.style.backgroundColor = "#000000"
        colorboxe.style.backgroundColor = "#000000"
        colorboxr.style.backgroundColor = "#000000"

        colorboxa1.style.backgroundColor = "#000000"
        colorboxb1.style.backgroundColor = "#000000"
        colorboxc1.style.backgroundColor = "#000000"
        colorboxd1.style.backgroundColor = "#000000"
        colorboxf1.style.backgroundColor = "#000000"
        colorboxe1.style.backgroundColor = "#000000"
        colorboxr1.style.backgroundColor = "#000000"

        colorboxa2.style.backgroundColor = "#000000"
        colorboxb2.style.backgroundColor = "#000000"
        colorboxc2.style.backgroundColor = "#000000"
        colorboxd2.style.backgroundColor = "#000000"
        colorboxf2.style.backgroundColor = "#000000"
        colorboxe2.style.backgroundColor = "#000000"
        colorboxr2.style.backgroundColor = "#000000"
    } else { //ตรวจสอบcheckboxว่าไม่เป็นtrue
        main_score.style.display = 'none' //ปิดการมองเป็น
        truemain.style.display = 'inline' //เปิดการมองเป็น
    }
}