const infor = document.createElement("div");
infor.setAttribute("class", "userDetails");
document.body.append(infor);
async function getdetail() {
  try{
  const data = await fetch("https://www.boredapi.com/api/activity/");
  const result = await data.json();
  console.log(result.activity);
    document.querySelector(".userDetails").innerHTML='';
  createuser(result.activity,result.type,result.price)
  }
  catch(err){
    err => console.log(err);
  }
}
  function createuser(activity,type,price){
  const info = document.createElement("div");
  info.setAttribute("class", "container");
  info.innerHTML = `
  <h3>Please check your activity</h3>
  </div class="overall">
  <div class="general">
  <div class="content1">
  <p class="content1para">Activity</p>
  </div>
  <div class="content2">
  <p class="content2para">${activity}</p>
  </div>
  </div>
   <div class="general">
  <div class="content1">
  <p class="content1para">type</p>
  </div>
  <div class="content2">
  <p class="content2para">${type}</p>
  </div>
  </div>
   <div class="general">
  <div class="content1">
  <p class="content1para">price</p>
  </div>
  <div class="content2">
  <p class="content2para">${price}</p>
  </div>
  </div>
  <div class="buttons">
  <button class="repeat" onclick="repeat()">Repeate Mode </button>
  <button class="repeat" onclick="Next()">Next </button>
  </div>
  </div>
  `;
  document.querySelector(".userDetails").append(info);
}
getdetail();

function repeat(){
  setInterval(()=>{
    getdetail()
  },3000);
}
function Next(){
  getdetail();
}
