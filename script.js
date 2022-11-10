let allData = [];
fetch('data.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    allData.push(...data);
    appendData(data);
  })
  .catch(function (err) {
    console.log(err);
});

function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  return str.join(' ');
}

let filteredItems = [];

function getItemById(id){
  let item = allData.filter(item => item.id === id);
  localStorage.setItem('item',JSON.stringify(item))
}
console.log(filteredItems);


  function appendData(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.innerHTML = `<div id="ID${data[i].id}" class="jobs">
                <div class="card" >
                    <div class="card-body" id="card-id">
                        <div class="card-header">
                            <div class="company-logo" style="background-color: ${data[i].logoBackground}">
                                <img src="${data[i].logo}" alt="company logo">
                            </div>
                            <div class="company-period">
                                <p><span class="post-time">${data[i].postedAt}</span> <span style="font-size: 40px">.</span> <span class="contract">${data[i].contract}</span></p>
                            </div>
                            <div class="company-role">
                                <a id="roleName" href="./details.html"  onclick="getItemById(${data[i].id})">${data[i].position}</a>
                            </div>
                            <div class="company-name">
                                <p>${data[i].company}</p>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="company-location">
                                <p>${data[i].location}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
    mainContainer.appendChild(div);
  }

  document.getElementById("ID13").style.display = "none";
  document.getElementById("ID14").style.display = "none";
  document.getElementById("ID15").style.display = "none";

  document.getElementById("loadMore").addEventListener("click", function(){
    document.getElementById("ID13").style.display = "block";
    document.getElementById("ID14").style.display = "block";
    document.getElementById("ID15").style.display = "block";
    document.getElementById("loadMore").style.display = "none";
  })

  //filter
    const jobs = document.querySelectorAll('.jobs');
    
    function filter(){
    //Get Values
    const inputTitle = titleCase(document.getElementById("title").value);
    const inputLocation = titleCase(document.getElementById('location').value);
    const inputPeriod = titleCase(document.getElementById('period').value = "Full Time");


    console.log(inputPeriod);

    for (var i = 0; i < jobs.length; i++) {
        if(jobs[i].textContent.includes(inputTitle) && jobs[i].textContent.includes(inputLocation) && jobs[i].textContent.includes(inputPeriod)){
            jobs[i].style.display = "block";
            console.log(jobs[i].textContent);
        }else{
            jobs[i].style.display = "none";
        }
    }

    }

document.getElementById("searchFilter").addEventListener("click", function(){
    filter();
});

}

// details page 
function appendDatA(){
  var detailsContainer = document.getElementById("myDetails");
    let item = JSON.parse(localStorage.getItem('item'))
    console.log(item)
    // console.log(item)
    var div = document.createElement("div");
    div.innerHTML = `<div class="details-body">
                <div class="content">
                    <div class="content-head">
                        <p><span class="post-time">1w ago</span> <span style="font-size: 40px">.</span> <span class="contract">Part Time</span></p>
                        <div class="position-apply">
                            <p class="pos">${item[0].position}</p>
                            <p class="country mobile">${item[0].location}</p>
                            <button>Apply Now</button>
                        </div>
                        <p class="country desktop">${item[0].location}</p>
                        
                    </div>
                    <div class="description">
                        <p>
                            ${item[0].description}
                        </p>
                    </div>
                    <div class="requirement">
                        <div class="requirement-head">
                            <p>Requirements</p>
                        </div>
                        <div class="requirement-body">
                            <p>
                            ${item[0].requirements.content}
                            </p>
                            <ul>
                                <li>${item[0].requirements.items[0]}</li>
                                <li>${item[0].requirements.items[1]}</li>
                                <li>${item[0].requirements.items[2]}</li>
                                <li>${item[0].requirements.items[3]}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="responsibility">
                        <div class="responsibility-head">
                            <p>What You Will Do</p>
                        </div>
                        <div class="responsibility-body">
                            <p>
                            ${item[0].role.content}
                            </p>
                            <ol>
                            <li> ${item[0].role.items[0]}</li>
                            <li>${item[0].role.items[1]}</li>
                            <li>${item[0].role.items[2]}</li>
                            <li>${item[0].role.items[3]}</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>`
    detailsContainer.appendChild(div);
  
}

appendDatA()


 function mode(){
    var element = document.getElementById('fluid');
    var cards = document.querySelectorAll('.card');
    var search = document.querySelector('.search-bar');
    
    element.classList.toggle('dark-mode');
    cards.forEach(box => {
        box.classList.toggle('dark-mode2');
    });
    search.classList.toggle('dark-mode3');
}

function mode2(){
    var element = document.getElementById('fluid');
    element.classList.toggle('dark-mode');
    var modal = document.querySelector('.modal-filter');
    var details = document.querySelector('.details-body');
    var detailsContainer = document.querySelector('.details-header');
    var footer = document.querySelector('.details-footer');
    detailsContainer.classList.toggle('dark-mode2');
    details.classList.toggle('dark-mode2');
    footer.classList.toggle('dark-mode2');
    modal.classList.toggle('dark-mode3');
}

// modal 
var modal = document.getElementById("myModal");

document.getElementById("modalBtn").addEventListener("click", function(){
    modal.style.display = "block";
});


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}











