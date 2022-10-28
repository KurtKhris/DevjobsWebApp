fetch('data.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
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

  function appendData(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.innerHTML = `<div id="ID${data[i].id}" class="jobs">
                <div class="card">
                    <div class="card-body">
                        <div class="card-header">
                            <div class="company-logo" style="background-color: ${data[i].logoBackground}">
                                <img src="${data[i].logo}" alt="company logo">
                            </div>
                            <div class="company-period">
                                <p><span class="post-time">${data[i].postedAt}</span> <span style="font-size: 40px">.</span> <span class="contract">${data[i].contract}</span></p>
                            </div>
                            <div class="company-role">
                                <a href="${data[i].website}">${data[i].position}</a>
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
  });

  //filter
    const jobs = document.querySelectorAll('.jobs');
    

    function filter(){
    //Get Values
    const inputTitle = titleCase(document.getElementById("title").value);
    const inputLocation = titleCase(document.getElementById('location').value);
    const inputPeriod = titleCase(document.getElementById('period').value);


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






