
function gradecalculation(){
    let s1 = document.getElementById("odia").value;
    let s2 = document.getElementById("eng").value;
    let s3 = document.getElementById("skt").value;
    let s4 = document.getElementById("math").value;
    let s5 = document.getElementById("science").value;
    let s6 = document.getElementById("ssh").value;
   
    
  
     let t1 = parseInt(s1)+parseInt(s2)+parseInt(s3)+parseInt(s4)+parseInt(s5)+parseInt(s6);
    
    document.getElementById("total").value=t1;
     
    let pr=t1/600*100+"%";
    document.getElementById("per").value=pr;
    
    let grade;
    
    if(pr>90) grade = "A";
    else if(pr<90 && pr>70) grade = "B";    
    else if(pr<70 && pr>50) grade = "C";
    else if(pr<50 && pr>35) grade = "D";
    else grade = "F";
       

    
    document.getElementById("grd").value=grade;
    
}