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

  function appendData(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    // div.innerHTML = 'Id: ' + data[i].id + ' ' + data[i].company;
    div.innerHTML = `<div class="jobs">
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
                                <a href="#">${data[i].position}</a>
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

    if (data[i].id === 13 || data[i].id === 14 || data[i].id === 15) {
        div.style.display = "none";
    }

    document.getElementById("loadMore").addEventListener("click", function () {
        div.style.display = "inline-block";
    });
  }
}