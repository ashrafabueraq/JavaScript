// fetch ("https://www.breakingbadapi.com/api/")
// .then(function(respons){                         /// الطريقة القديمة 

//     return respons.json();
    

// })

// .then(function(data){
       
//     console.log(data)
// })



const api =  "https://www.breakingbadapi.com/api/characters";
async function getInfo() {                                                            //........ الطريقة الحديثة 

    const respons = await fetch(api) 
   const data = await respons.json()

   printData(data)


}


function printData(data){

     const header  = document.getElementById('header')
     const content = document.getElementById('content')
     const img = document.getElementById('img')
    

    header.innerHTML += `<select class="form-control" onchange="(getChar(this.value))">
    
    <option>Select nickname character </option>  
          ${data.map(character => `<option> ${character.name} </option>`)} 
     </select>`

  

}


 async function getChar(val) {
   const response = await fetch(`${api}?name=${val}`)
  const data = await response.json()

  content.innerHTML=`<h2>${data[0].name} (${data[0].nickname})</h2> <h4> BirthDay: ${data[0].birthday}</h4>`
   img.src = data[0].img


  
}

getInfo()