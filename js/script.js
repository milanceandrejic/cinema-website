function MenuFunction() {
    let el = document.getElementById("navBar");
    if (el.className === "navbar") {
        el.className += " responsive";
    } else {
        el.className = "navbar";
    }
    let res = document.getElementById("nav-menu-button");
    if (res.className === "normal") {
        res.className = "rotated";
    }
    else if(res.className === "rotated"){
        res.className = "normal";
    }
}

function ReservationFun(){

    var inputi=document.getElementsByTagName("input");
    let cheker=true;
    for(i=0;i<inputi.length;++i){
        if(!inputi[i].checkValidity()){
            inputi[i].classList.add("validacija");
            cheker=false;
        }
    }
    if(cheker){
        makeReservation();
    }

}

function makeReservation(){
    if(localStorage.getItem("brrez")===null){
        localStorage.setItem("brrez",0);
    }

    var imeosobe=document.getElementById("ime").value.replaceAll(" ","_");
    var mail=document.getElementById("mail").value;
    var telef=document.getElementById("phone").value;
    var mov=document.getElementById("movie").value.replaceAll(" ","_");
    var br=document.getElementById("no").value;
    var vreme;
    if(document.getElementById("time1").checked){
        vreme=document.getElementById("time1").value;
    }
    else if(document.getElementById("time2").checked){
        vreme=document.getElementById("time2").value;
    }
    else if(document.getElementById("time3").checked){
        vreme=document.getElementById("time3").value;
    }

    brrez = localStorage.getItem("brrez");
    brrez = +brrez + +1;

    //alert("id" + +brrez + ' ' + imeosobe + " " + mail + " " + telef + " " + mov + " " + vreme + " " + br);

    localStorage.setItem("id" + brrez,imeosobe + " " + mail + " " + telef + " " + mov + " " + vreme + " " + br);
    localStorage.setItem("brrez",brrez);

    alert("Vaša rezervacija je poslata.\nKarte možete preuzeti na blagajni sat vremena pre početka filma.");


}

function ShowReservation(){
    let tab=document.getElementById("table-reservation");
    for(i=1;i<= +localStorage.getItem("brrez");i++)
    {
        try{
           red=localStorage.getItem("id"+i).split(" ");

            var imeosobe=red[0].replaceAll("_"," ");
            var mail=red[1];
            var telef=red[2];
            var mov=red[3].replaceAll("_"," ");
            var vreme=red[4];
            var br=red[5];

               trow="";
               trow+="<tr>";
               trow+="<td>"+ imeosobe + "</td>";
               trow+="<td>"+ mail +"</td>";
               trow+="<td>"+ telef +"</td>";
               trow+="<td>"+ mov +"</td>";
               trow+="<td>"+ vreme +"</td>";
               trow+="<td>"+ br +"</td>";
               trow+="<td>" + "<button class=\"btn-delete\" onclick=\"DeleteReservation(" + i + ")\" >" +"Obriši"+"</button>"+"</td>";
               trow+="</tr>"
               tab.innerHTML+=trow;
        }
        catch (error){}
    }

}

function DeleteReservation(rbr){
    localStorage.removeItem("id"+rbr);
    location.reload();
}

function MessageSent(){
    var inputi=document.getElementsByTagName("input");
    var poruka=document.getElementById("message").value;
    cheker=true;
    for(i=0;i<inputi.length;++i){
        if(!inputi[i].checkValidity()){
            inputi[i].classList.add("validacija");
            cheker=false;
        }
    }
    if(poruka==null || poruka===""){
        document.getElementById("message").classList.add("validacija");
        cheker=false;
    }
    if(cheker){
        alert("Vaša poruka je poslata.\nOčekujte da vas neko kontaktira.");
    }

}


function SendMovie(film){
    sessionStorage.setItem("film",film);
}

function CheckMovie(){
    filmic=sessionStorage.getItem("film");
    sessionStorage.clear();
    filmovi = document.getElementsByTagName("option");
    for(i=0;i<=filmovi.length;i++){
        if(filmovi[i].value == filmic){
            filmovi[i].selected=true;
        }
    }
}