function DD_click(n){
    // const trigger=document.getElementsByClassName("navBar__visible");
    // trigger[n-1].style.backgroundColor=(trigger[n-1].style.backgroundColor==="#1a1a1a"?"#000":"#1a1a1a");
    // for(i=0;i<trigger.length;i++){
    //     trigger[i].style.backgroundColor="#000";
    // }
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