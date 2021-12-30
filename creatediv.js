function create_div(id,texte){
    var newdiv = document.createElement("div");
    var content = document.createTextNode(texte);
    newdiv.appendChild(content);
    var lieu_du_div = document.getElementById(id);
    document.body.insertBefore(newdiv,lieu_du_div);
}