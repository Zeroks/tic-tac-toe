var clicks = 1
var a = 0
function move (id) {

    if(document.getElementById(id).textContent === '') {
        if(clicks == 2 || clicks == 4 || clicks === 6 || clicks === 8) {
        document.getElementById(id).innerHTML = '0'
        clicks += 1
        }
    
        else {
            document.getElementById(id).innerHTML = 'X'
            clicks += 1 
        }
    }       
            const pole0 = document.getElementById(0).textContent
            const pole1 = document.getElementById(1).textContent
            const pole2 = document.getElementById(2).textContent
            const pole3 = document.getElementById(3).textContent
            const pole4 = document.getElementById(4).textContent
            const pole5 = document.getElementById(5).textContent
            const pole6 = document.getElementById(6).textContent
            const pole7 = document.getElementById(7).textContent
            const pole8 = document.getElementById(8).textContent
            if(pole0 === 'X' && pole1 === 'X' && pole2 === 'X'){
                alert("победили крестики")  
            }
            if (pole3 === 'X' && pole4 === 'X' && pole5 === 'X') {
                alert("победили крестики")
            }
            if (pole6 === 'X' && pole7 === 'X' && pole8 === 'X') {
                alert("победили крестики")
            } 
            if (pole0 === 'X' && pole3 === 'X' && pole6 === 'X') {
                alert("победили крестики")
            }
            if (pole1 === 'X' && pole4 === 'X' && pole7 === 'X') {
                alert("победили крестики")
            }
            if (pole2 === 'X' && pole5 === 'X' && pole8 === 'X') {
                alert("победили крестики")
            }
            if (pole0 === 'X' && pole4 === 'X' && pole8 === 'X') {
                alert("победили крестики")
            }
            if (pole2 === 'X' && pole4 === 'X' && pole6 === 'X') {
                alert("победили крестики")
            }
            if (pole0 === '0' && pole1 === '0' && pole2 === '0') {
                alert("победили нолики")
            }
            if (pole3 === '0' && pole4 === '0' && pole5 === '0') {
                alert("победили нолики")
            }
            if (pole6 === '0' && pole7 === '0' && pole8 === '0') {
                alert("победили нолики")
            }
            if (pole0 === '0' && pole3 === '0' && pole6 === '0') {
                alert("победили нолики")
            }
            if (pole1 === '0' && pole4 === '0' && pole7 === '0') {
                alert("победили нолики")
            }
            if (pole2 === '0' && pole5 === '0' && pole8 === '0') {
                alert("победили нолики")
            }
            if (pole0 === '0' && pole4 === '0' && pole8 === '0') {
                alert("победили нолики")
            }
            if (pole2 === '0' && pole4 === '0' && pole6 === '0') {
                alert("победили нолики")
            }
            if(clicks===10){alert('Ничья') } 
}


