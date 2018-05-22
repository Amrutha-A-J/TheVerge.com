function DD_click(n){
    const target=document.getElementById("DD"+n);
    target.style.display=(target.style.display==="block"?"none":"block");
    const siblings = target.parentNode.children;
    for(i=0;i<siblings.length;i++){
        if(i!=n-1){
            siblings[i].style.display="none";
        }
    }
}

//in each click close everything thats open, open the one thats clicked