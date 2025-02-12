function isChecked(){
    if (document.getElementById("Yes").checked){
        window.location.href = "html/acept.html"
    }else{
        document.getElementById("lblNo").style.display = "none";
        document.getElementById("No").style.display = "none";
    }
}