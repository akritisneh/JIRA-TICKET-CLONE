let add8tn = document.querySelector(".add-btn");
let modalcont=document.querySelector(".modal-cont");
let maincont=document.querySelector("main-cont");
let addflag=false;


add8tn.addEventListener("click",(e) =>{
    //display model
    //generate ticket

    //add flag,true-> modal display
    //addflag,false->modal none
    addflag=!addflag;
    if(addflag){
        modalcont.style.display="flex";
    }
    else{
        modalcont.style.display="none";
    }
})
modalcont.addEventListener("keydown",(e)=>{
    let key=e.key;
    if(key=="Shift"){
        createticket();
    }
})

function createticket(){
    let ticketcont=document.querySelector("div");
    ticketcont.setAttribute("class","ticket-cont");
    ticketcont.innerHTML=`
        <div class="ticket-color"></div>
        <div class="ticket-id">#sample_id</div>
        <div class="task-area">
            lorem ipsum dolor sit amet.
        </div>
     `;   
       
}

