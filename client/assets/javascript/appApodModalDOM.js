let mainDivApodModal = document.querySelector("#apodModal");
//mainDivApodModal.innerHTML = "";

// NASA API
const count = 15;
const apiKey = 'IxIBOwaTmmj18dCu2RLvBHM6H3AgOSfsuQ1YYor0';
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;


//let resultsArray = [];


function createApodModal(resultsArray) {
 resultsArray.forEach((result) => {
     
    // Card Container
    
    let card = document.createElement("div");
    //card.classList.add("card mb-3");
    card.setAttribute("class", "card");
    
    const image = document.createElement('img');
    
    //image.alt = result.title;
    image.setAttribute('class','myImages');
     image.setAttribute('id','myImg');
     image.src = result.url;
     image.alt=result.title;
    //image.setAttribute('class','card-img-top');
    //image.classList.add("card-img-top");
    image.width = "360";
    image.height = "200";
    
    
    let modal = document.createElement("div");
    
    modal.setAttribute("id", "myModal");
    modal.setAttribute("class", "modal");
     
    let res = '<span class="close">&times;</span>';
    modal.innerHTML += res;
     
    const modelContent = document.createElement('img');
    modelContent.setAttribute('class','modal-content');
    modelContent.setAttribute('id','img01');
    
    let modelCaption = document.createElement("div");
    modelCaption.setAttribute("id", "caption");
     
    
    modal.append(modelContent, modelCaption);
    card.append(image,modal);
       
    mainDivApodModal.appendChild(card);
     
    //console.log(result);
    const result2 = result;
    //console.log(result2);
    //console.log(card);
   // console.log(mainDivApodModal);
     
      
    
      
    
 });

};


async function getApodModalPictures() {

  try {
    const response = await fetch(apiUrl);
    resultsArray = await response.json();
    console.log(resultsArray);
    createApodModal(resultsArray);
    
  } catch (error) {
    // Catch Error Here
  }
}


getApodModalPictures();


