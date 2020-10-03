 let setProduct=()=>{

      // document.getElementById('pro007').removeAttribute('style');
      // document.getElementById('addform').setAttribute('style', 'display:none;')

    var pro01 = `<div class="col-lg-4 col-md-4 sm-4">
                <div class="card" style="width: 18rem;">
                    <img src="images/card3.webp" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">Ndure</h5>
                      <p class="card-text">${document.getElementById('productname').value}.</p>
                      <a href="#" class="btn btn-primary">${document.getElementById('producttxt').value}.</a>
                    </div>
                  </div>
                </div>
    `;
    

 document.getElementById('Product').innerHTML += pro01;
}