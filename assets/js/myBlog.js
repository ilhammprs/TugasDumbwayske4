let pushBlog = []
let iconBlog = document.getElementById("iconcD")
function addBlog(event) {
  event.preventDefault()
  let judul = document.getElementById("judulBlog1").value
  let startDate = document.getElementById("startDate").value
  let endDate = document.getElementById("endDate").value
  let dsck = document.getElementById("descBlog").value  
  let foto = document.getElementById("inputFoto") 
  foto = URL.createObjectURL(foto.files[0]);
  let blog = {
    judul,
    dsck,
    foto,
  };
  pushBlog.push(blog)
  domInner()
}
function domInner() {
  let content = document.getElementById("listCard");
  content.innerHTML = "" ;
  for (i = 0; i < pushBlog.length; i++) {
    content.innerHTML += `
    <div class="listCt">
                <img src="${pushBlog[i].foto}">
                <a href="blogDetail.html" class="cardJudul">${pushBlog[i].judul}</a>
                    <p class="duration">duration : 3 bulan </p>
                    <div class="desc"><p>${pushBlog[i].dsck}</p></div>
                    <div id="iconCd" class="iconCd">
                        <i class="fa-brands fa-node-js" title="node.js"></i>
                        <i class="fa-brands fa-react" title="react.js"></i>
                        <i class="fa-brands fa-angular" title="angular"></i>
                        <i class="fa-brands fa-vuejs" title="vue.js"></i>
                    </div>
                    <div class="frist">
                        <button type="button" class="fristEdit">edit</button>
                        <button type="button" class="fristDelete">delete</button>
                    </div>
            </div>
    `
  }
}