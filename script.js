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
                                <a id="roleName" href="./details.html/${data[i].company}" >${data[i].position}</a>
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

    // let link = document.getElementById("roleName").href;
    // url = String(link);
    // console.log(url);

    // const array = url.split('/');
    // const urlx = array[4];
    // console.log(urlx);

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

// document.getElementById("roleName").addEventListener("click", function(){
//   if (urlx === data[i].company) {
//     console.log("Yes");
//   }else{
//     console.log("No");
//   }
    

// });



}

// details page 
// function appendDatA(data){
//   var detailsContainer = document.getElementById("myDetails");
//   for (var i = 0; i < data.length; i++) {
//     var div = document.createElement("div");
//     div.innerHTML = `<div class="details-body">
//                 <div class="content">
//                     <div class="content-head">
//                         <p><span class="post-time">1w ago</span> <span style="font-size: 40px">.</span> <span class="contract">Part Time</span></p>
//                         <div class="position-apply">
//                             <p>Senior Software Engineer</p>
//                             <button>Apply Now</button>
//                         </div>
//                         <p class="country">United Kingdom</p>
//                     </div>
//                     <div class="description">
//                         <p>
//                             Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.
//                         </p>
//                     </div>
//                     <div class="requirement">
//                         <div class="requirement-head">
//                             <p>Requirements</p>
//                         </div>
//                         <div class="requirement-body">
//                             <p>
//                                 Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu, vulputate vel, nisl.
//                             </p>
//                             <ul>
//                                 <li>Morbi interdum mollis sapien. Sed</li>
//                                 <li>Phasellus lacinia magna a ullamcorper laoreet, lectus arcu pulvinar risus</li>
//                                 <li>Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus.</li>
//                                 <li>Morbi interdum mollis sapien. Sed</li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div class="responsibility">
//                         <div class="responsibility-head">
//                             <p>What You Will Do</p>
//                         </div>
//                         <div class="responsibility-body">
//                             <p>
//                                 Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.
//                             </p>
//                             <ol>
//                                 <li>Morbi interdum mollis sapien. Sed</li>
//                                 <li>Phasellus lacinia magna a ullamcorper laoreet, lectus arcu pulvinar risus</li>
//                                 <li>Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus.</li>
//                                 <li>Morbi interdum mollis sapien. Sed</li>
//                             </ol>
//                         </div>
//                     </div>
//                 </div>
//             </div>`
//     detailsContainer.appendChild(div);
//   }
// }






