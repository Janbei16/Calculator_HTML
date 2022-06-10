function Calculator() {
  var KatheteA = document.getElementById("KatheteAId").value;
  var KatheteB = document.getElementById("KatheteBId").value;
  var KatheteC = document.getElementById("KatheteCId").value;
  var WinkelB = document.getElementById("WinkelBId").value;
  var WinkelA = document.getElementById("WinkelAId").value;
  var WinkelY = document.getElementById("WinkelYId").value;
  var selected = document.getElementById("select");
  if (selected.value == 1) {
    allSites(KatheteA, KatheteB, KatheteC);
  } else if (selected.value == 2) {
    oneSite(KatheteA, KatheteB, KatheteC);
  } else if (selected.value == 3) {
    enclosedAngleBetweenTwoSites(
      KatheteA,
      KatheteB,
      KatheteC,
      WinkelA,
      WinkelB,
      WinkelY
    );
  } else if (selected.value == 4) {
    twoSites90Degree(KatheteA, KatheteB, KatheteC, WinkelA, WinkelB, WinkelY);
  } else if (selected.value == 5) {
    oneSiteTwoAngles(KatheteA, KatheteB, KatheteC, WinkelA, WinkelB, WinkelY);
  } else if (selected.value == 6) {
    twoSitesOneAngle(KatheteA, KatheteB, KatheteC, WinkelA, WinkelB, WinkelY);
  }
}

function allSites(KatheteA, KatheteB, KatheteC) {
  a =
    (Math.acos(
      (KatheteA * KatheteA - KatheteB * KatheteB - KatheteC * KatheteC) /
        (-2 * KatheteB * KatheteC)
    ) *
      180) /
    Math.PI;
  b =
    (Math.acos(
      (KatheteB * KatheteB - KatheteA * KatheteA - KatheteC * KatheteC) /
        (-2 * KatheteA * KatheteC)
    ) *
      180) /
    Math.PI;
  y = 180 - b - a;
  document.getElementById("output_print").innerHTML = 
  "Winkel a = " +
  a +
  "°" +
  "<br>" + "Winkel b = " +
  b +
  "°" +
  "<br>" + "Winkel y = " +
  y +
  "°";
  
}

function oneSite(KatheteA, KatheteB, KatheteC) {
  if (KatheteA || KatheteB || KatheteC != 0) {
    a = 60;
    b = 60;
    y = 60;
  }
  document.getElementById("output_print").innerHTML = 
  "Winkel a = " +
  a +
  "°" +
  "<br>" + "Winkel b = " +
  b +
  "°" +
  "<br>" + "Winkel y = " +
  y +
  "°";
  
}

function enclosedAngleBetweenTwoSites(
  KatheteA,
  KatheteB,
  KatheteC,
  WinkelA,
  WinkelB,
  WinkelY
) {
  if (WinkelA > 0) {
    KatheteA = Math.sqrt(
      KatheteB * KatheteB +
        KatheteC * KatheteC -
        KatheteB * KatheteC * Math.cos(WinkelA)
    );
    WinkelB =
      (Math.acos(
        (KatheteC * KatheteC + KatheteA * KatheteA - KatheteB * KatheteB) /
          (2 * KatheteC * KatheteA)
      ) *
        180) /
      Math.PI;
    WinkelY = 180 - WinkelB - WinkelA;
    document.getElementById("output_print").innerHTML = 
       "Seite a = " +
       KatheteA +
       "<br>" + "Winkel b = " +
       WinkelB +
       "°" +
       "<br>" + "Winkel y = " +
       WinkelY +
       "°";    
    
  } else if (WinkelB > 0) {
    KatheteB = Math.sqrt(
      KatheteA * KatheteA +
        KatheteC * KatheteC -
        KatheteA * KatheteC * Math.cos(WinkelB)
    );
    WinkelA =
      (Math.acos(
        (KatheteC * KatheteC + KatheteB * KatheteB - KatheteA * KatheteA) /
          (2 * KatheteC * KatheteB)
      ) *
        180) /
      Math.PI;
    WinkelY = 180 - WinkelB - WinkelA;
    document.getElementById("output_print").innerHTML = 
    "Seite b = " +
    KatheteB +
    "<br>" + "Winkel a = " +
    WinkelA +
    "°" +
    "<br>" + "Winkel y = " +
    WinkelY +
    "°"; 
    
  } else if (WinkelY > 0) {
    KatheteC = Math.sqrt(
      KatheteA * KatheteA +
        KatheteB * KatheteB -
        KatheteA * KatheteB * Math.cos(WinkelY)
    );
    WinkelA =
      (Math.acos(
        (KatheteB * KatheteB + KatheteC * KatheteC - KatheteA * KatheteA) /
          (2 * KatheteB * KatheteC)
      ) *
        180) /
      Math.PI;
    WinkelB = 180 - WinkelY - WinkelA;
    document.getElementById("output_print").innerHTML = 
       "Seite c = " +
       KatheteC +
       "<br>" + "Winkel a = " +
       WinkelA +
       "°" +
       "<br>" + "Winkel b = " +
       WinkelB +
       "°"; 
   
  }
}

function twoSites90Degree(
  KatheteA,
  KatheteB,
  KatheteC,
  WinkelA,
  WinkelB,
  WinkelY
) {
  if (WinkelA == 90) {
    KatheteA = Math.sqrt(KatheteB * KatheteB + KatheteC * KatheteC);
    WinkelB = (Math.atan(KatheteB / KatheteC) * 180) / Math.PI;
    WinkelY = 180 - WinkelA - WinkelB;
    document.getElementById("output_print").innerHTML = 
       "Seite a = " +
       KatheteA +
       "<br>" + "Winkel b = " +
       WinkelB +
       "°" +
       "<br>" + "Winkel y = " +
       WinkelY +
       "°"; 
   
  } else if (WinkelB == 90) {
    KatheteB = Math.sqrt(KatheteA * KatheteA + KatheteC * KatheteC);
    WinkelA = (Math.atan(KatheteA / KatheteC) * 180) / Math.PI;
    WinkelY = 180 - WinkelA - WinkelB;
    document.getElementById("output_print").innerHTML = 
       "Seite b = " +
       KatheteB +
       "<br>" + "Winkel a = " +
       WinkelA +
       "°" +
       "<br>" + "Winkel y = " +
       WinkelY +
       "°"; 
    
  } else if (WinkelY == 90) {
    KatheteC = Math.sqrt(KatheteA * KatheteA + KatheteB * KatheteB);
    WinkelA = (Math.atan(KatheteA / KatheteB) * 180) / Math.PI;
    WinkelB = 180 - WinkelA - WinkelY;
    document.getElementById("output_print").innerHTML = 
       "Seite c = " +
       KatheteC +
       "<br>" + "Winkel a = " +
       WinkelA +
       "°" +
       "<br>" + "Winkel b = " +
       WinkelB +
       "°"; 
    
  }
}

function oneSiteTwoAngles(
  KatheteA,
  KatheteB,
  KatheteC,
  WinkelA,
  WinkelB,
  WinkelY
) {
  if (KatheteA > 0) {
    if (WinkelA && WinkelB > 0) {
      WinkelY = 180 - WinkelA - WinkelB;
      document.getElementById("output_print").innerHTML = 
      "Winkel y = " + WinkelY + "°"; 
      
    } else if (WinkelA && WinkelC > 0) {
      WinkelB = 180 - WinkelY - WinkelA;
      document.getElementById("output_print").innerHTML = 
      "Winkel b = " + WinkelB + "°"; 
      
    } else if (WinkelB && WinkelC > 0) {
      WinkelA = 180 - WinkelY - WinkelB;
      document.getElementById("output_print").innerHTML = 
      "Winkel a = " + WinkelA + "°"; 
      
    }
    KatheteB =
      (KatheteA * Math.sin((WinkelB * Math.PI) / 180)) /
      Math.sin((WinkelA * Math.PI) / 180);
    KatheteC =
      (KatheteB * Math.sin((WinkelY * Math.PI) / 180)) /
      Math.sin((WinkelB * Math.PI) / 180);
      document.getElementById("output_print").innerHTML = 
      "Seite b = " + KatheteB + "<br>" + "Seite c = " + KatheteC; 
      
  } else if (KatheteB > 0) {
    if (WinkelA && WinkelB > 0) {
      WinkelY = 180 - WinkelA - WinkelB;
      document.getElementById("output_print").innerHTML = 
      "Winkel y = " + WinkelY + "°"; 
      
    } else if (WinkelA && WinkelY > 0) {
      WinkelB = 180 - WinkelY - WinkelA;
      document.getElementById("output_print").innerHTML = 
      "Winkel b = " + WinkelB + "°"; 
      
    } else if (WinkelB && WinkelY > 0) {
      WinkelA = 180 - WinkelY - WinkelB;
      document.getElementById("output_print").innerHTML = 
      "Winkel a = " + WinkelA + "°"; 
      
    }

    KatheteC =
      (KatheteB * Math.sin((WinkelY * Math.PI) / 180)) /
      Math.sin((WinkelB * Math.PI) / 180);
    KatheteA =
      (KatheteC * Math.sin((WinkelA * Math.PI) / 180)) /
      Math.sin((WinkelY * Math.PI) / 180);
      document.getElementById("output_print").innerHTML = 
      "Seite a = " + KatheteA + "<br>" + "Seite c = " + KatheteC; 
    
  } else if (KatheteC > 0) {
    if (WinkelA && WinkelB > 0) {
      WinkelY = 180 - WinkelA - WinkelB;
      document.getElementById("output_print").innerHTML = 
      "Winkel y = " + WinkelY + "°"; 
      
    } else if (WinkelA && WinkelC > 0) {
      WinkelB = 180 - WinkelY - WinkelA;
      document.getElementById("output_print").innerHTML = 
      "Winkel b = " + WinkelB + "°"; 
      
    } else if (WinkelB && WinkelC > 0) {
      WinkelA = 180 - WinkelY - WinkelB;
      document.getElementById("output_print").innerHTML = 
      "Winkel a = " + WinkelA + "°"; 
      
    }

    KatheteA =
      (KatheteC * Math.sin((WinkelA * Math.PI) / 180)) /
      Math.sin((WinkelY * Math.PI) / 180);
    KatheteB =
      (KatheteA * Math.sin((WinkelB * Math.PI) / 180)) /
      Math.sin((WinkelA * Math.PI) / 180);
      document.getElementById("output_print").innerHTML = 
      "Seite a = " + KatheteA + "<br>" + "Seite b = " + KatheteB; 
      
  }
}

function twoSitesOneAngle(
  KatheteA,
  KatheteB,
  KatheteC,
  WinkelA,
  WinkelB,
  WinkelY
) {
  if(KatheteA && KatheteB > 0) {
    if(WinkelB >= WinkelA){
        WinkelA = (Math.asin(KatheteA * (Math.sin((WinkelB*0.017453292519943)))/KatheteB))*57.295779513082
        WinkelY = 180 - WinkelA - WinkelB
        KatheteC = KatheteB * Math.sin(WinkelY*0.017453292519943) / Math.sin(WinkelB*0.017453292519943)
        document.getElementById("output_print").innerHTML = 
        "Seite c = " + KatheteC + "<br>" + "Winkel a = " + WinkelA + "<br>" + "Winkel y =" + WinkelY; 
        
    }

    else if(WinkelA >= WinkelB){
        WinkelB = (Math.asin(KatheteB * (Math.sin((WinkelA*0.017453292519943)))/KatheteA))*57.295779513082
        WinkelY = 180 - WinkelA - WinkelB
        KatheteC = KatheteA * Math.sin(WinkelY*0.017453292519943) / Math.sin(WinkelA*0.017453292519943)
        document.getElementById("output_print").innerHTML = 
        "Seite c = " + KatheteC + "<br>" + "Winkel b = " + WinkelB + "<br>" + "Winkel y =" + WinkelY; 
        
    }
}
else if (KatheteA && KatheteC > 0){
    if(WinkelA >= WinkelY){
        WinkelY = (Math.asin(KatheteC * (Math.sin((WinkelA*0.017453292519943)))/KatheteA))*57.295779513082
        WinkelB = 180 - WinkelA - WinkelY
        KatheteB = KatheteA * Math.sin(WinkelB*0.017453292519943) / Math.sin(WinkelA*0.017453292519943)
        document.getElementById("output_print").innerHTML = 
        "Seite B = " + KatheteB + "<br>" + "Winkel b = " + WinkelB + "<br>" + "Winkel y =" + WinkelY; 
        
    }

    else if(WinkelY >= WinkelA){
        WinkelA = (Math.asin(KatheteA * (Math.sin((WinkelY*0.017453292519943)))/KatheteC))*57.295779513082
        WinkelB = 180 - WinkelA - WinkelY
        KatheteB = KatheteC * Math.sin(WinkelB*0.017453292519943) / Math.sin(WinkelY*0.017453292519943)
        document.getElementById("output_print").innerHTML = 
        "Seite b = " + KatheteB + "<br>" + "Winkel b = " + WinkelB + "<br>" + "Winkel a =" + WinkelA; 
        
    }

}
else if (KatheteB && KatheteC > 0){
    if(WinkelB >= WinkelY){
        WinkelY = (Math.asin(KatheteC * (Math.sin((WinkelB*0.017453292519943)))/KatheteB))*57.295779513082
        WinkelA = 180 - WinkelB - WinkelY
        KatheteA = KatheteB * Math.sin(WinkelA*0.017453292519943) / Math.sin(WinkelB*0.017453292519943)
        document.getElementById("output_print").innerHTML = 
        "Seite a = " + KatheteA + "<br>" + "Winkel a = " + WinkelA + "<br>" + "Winkel y =" + WinkelY; 
        
    }
    else if(WinkelY >= WinkelB){
        WinkelB = (Math.asin(KatheteB * (Math.sin((WinkelY*0.017453292519943)))/KatheteC))*57.295779513082
        WinkelA = 180 - WinkelB - WinkelY
        KatheteA = KatheteC * Math.sin(WinkelA*0.017453292519943) / Math.sin(WinkelY*0.017453292519943)
        console.log(KatheteA)
        console.log(WinkelA)
        console.log(WinkelB)
        document.getElementById("output_print").innerHTML = 
        "Seite a = " + KatheteA + "<br>" + "Winkel a = " + WinkelA + "<br>" + "Winkel b =" + WinkelB; 
        
    }
}

}
