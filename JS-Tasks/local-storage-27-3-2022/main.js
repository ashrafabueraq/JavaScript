


function impo() {
   
    let h = document.getElementById('Html').innerHTML = "this is imprtamt language"

    let ss = document.getElementById('span') 

    ss.innerHTML = h 

    ss.style.cssText = ["color:red"]
}

//localStorage.clear()

function submitt() {
    window.localStorage.setItem('Name', document.getElementById('input-name').value)
    window.localStorage.setItem('Age', document.getElementById('input-age').value)
    window.localStorage.setItem('Major', document.getElementById('input-major').value)
    window.localStorage.setItem('Date of birth', document.getElementById('input-bod').value)
    window.localStorage.setItem('markup', document.getElementById('label-html').innerHTML)
    window.localStorage.setItem('stylesheet', document.getElementById('label-css').innerHTML)
    window.localStorage.setItem('programing', document.getElementById('label-js').innerHTML)
    window.localStorage.setItem('gender-male', document.getElementById('input-male').value)
    window.localStorage.setItem('gender-female', document.getElementById('input-female').value)
    window.localStorage.setItem('Breif Description about you', document.getElementById('input-desc').value)
    window.localStorage.setItem('image', document.getElementById('img').value)
}

 
 document.getElementById('headd').innerHTML = ` your name is : ${localStorage.getItem('Name')} <br/> `
 document.getElementById('headd2').innerHTML = ` your Age is : ${localStorage.getItem('Age')} <br/> `
 document.getElementById('headd3').innerHTML = ` your Major is : ${localStorage.getItem('Major')} <br/> `
 document.getElementById('headd4').innerHTML = ` Date Of Birth : ${localStorage.getItem('Date of birth')} <br/> `
 document.getElementById('headd5').innerHTML = ` MarkUp Language : ${localStorage.getItem('markup')} <br/> `
 document.getElementById('headd6').innerHTML = ` style sheet : ${localStorage.getItem('stylesheet')} <br/> `
 document.getElementById('headd7').innerHTML = ` program : ${localStorage.getItem('programing')} <br/> `
 document.getElementById('headd8').innerHTML = ` Gender : ${localStorage.getItem('gender-male')} <br/> `
 document.getElementById('headd9').innerHTML = ` Gender : ${localStorage.getItem('gender-female')} <br/> `
 document.getElementById('headd10').innerHTML = ` Breif Description: ${localStorage.getItem('Breif Description about you')} <br/> `
 document.getElementById('headd11').innerHTML = ` Your Image : ${localStorage.getItem('image')} <br/> `






document.getElementById('input-name').value="ashraf"




 

 


