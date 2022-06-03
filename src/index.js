
function Calculator(){
    var KatheteA = document.getElementById("KatheteAId").value;
    var KatheteB = document.getElementById("KatheteBId").value;
    var KatheteC = document.getElementById("KatheteCId").value;
    var WinkelB = document.getElementById("WinkelBId").value;
    var WinkelA = document.getElementById("WinkelAId").value;
    var WinkelY = document.getElementById("WinkelYId").value;


    if((KatheteA && KatheteB && KatheteC > 0)){
        if(KatheteA && KatheteB > KatheteC || KatheteA && KatheteC > KatheteB || KatheteB && KatheteC > KatheteA){
            allSites(KatheteA, KatheteB, KatheteC);
        }
        else(
            console.log("The two smallest Values Combined have to be bigger then the biggest")
        )
    }

    else if(((KatheteA && KatheteB > 0 ) && ((KatheteA >= KatheteB && (WinkelA > 0))||(KatheteB>=KatheteA && (WinkelB > 0)))) || ((KatheteA && KatheteC > 0 ) && ((KatheteA >= KatheteC && (WinkelA > 0))||(KatheteC>=KatheteA && (WinkelY > 0)))) || ((KatheteC && KatheteB > 0 ) && ((KatheteC >= KatheteB && (WinkelY > 0))||(KatheteB>=KatheteY && (WinkelB > 0))))){
        twoSitesOneAngle(KatheteA, KatheteB, KatheteC, WinkelA, WinkelB, WinkelY)

    }

    else if((KatheteA && WinkelA && WinkelB > 0 || KatheteA && WinkelA && WinkelY > 0 ||KatheteA && WinkelB && WinkelY > 0 || KatheteB && WinkelA && WinkelB > 0 ||KatheteB && WinkelA && WinkelY > 0 ||KatheteB && WinkelY && WinkelB > 0 || KatheteC && WinkelA && WinkelB > 0 ||KatheteC && WinkelA && WinkelY > 0 ||KatheteC && WinkelY && WinkelB > 0)){
        oneSiteTwoAngles(KatheteA, KatheteB, KatheteC, WinkelA, WinkelB, WinkelY)
    }

    else if(((WinkelA == 90) && (KatheteB && KatheteC) > 0 || (WinkelB == 90) && (KatheteA && KatheteC) > 0 || (WinkelY == 90) && (KatheteA && KatheteB) > 0)){
        twoSites90Degree(KatheteA, KatheteB, KatheteC, WinkelA, WinkelB, WinkelY)
    }

    else if((WinkelA && KatheteB && KatheteC >= 0) || (WinkelB && KatheteA && KatheteC >= 0) || (WinkelY && KatheteA && KatheteB >= 0)){
        enclosedAngleBetweenTwoSites(KatheteA, KatheteB, KatheteC, WinkelA, WinkelB, WinkelY)
    }

    else if(KatheteA >= 0||KatheteB >= 0 ||KatheteC >= 0){
        oneSite(KatheteA, KatheteB, KatheteC)
    }


}

function allSites(KatheteA, KatheteB, KatheteC){
    a = (Math.acos(((KatheteA * KatheteA) - (KatheteB * KatheteB) - (KatheteC * KatheteC)) / (-2 * KatheteB * KatheteC))) * 180 / Math.PI
    b = (Math.acos(((KatheteB * KatheteB) - (KatheteA * KatheteA) - (KatheteC * KatheteC)) / (-2 * KatheteA * KatheteC))) * 180 / Math.PI
    y = 180 - b - a
    console.log("Winkel a = " + a + "°" + "\nWinkel b = " + b + "°" + "\nWinkel y = " + y + "°")
}

function oneSite(KatheteA, KatheteB, KatheteC){
    if(KatheteA || KatheteB || KatheteC != 0){
        a = 60
        b = 60
        y = 60
    }

    console.log("Winkel a = " + a + "°" + "\nWinkel b = " + b + "°" + "\nWinkel y = " + y + "°")
}

function enclosedAngleBetweenTwoSites(KatheteA, KatheteB, KatheteC, WinkelA, WinkelB, WinkelY){
    if(WinkelA > 0){
        KatheteA = Math.sqrt((KatheteB * KatheteB) + (KatheteC * KatheteC) - (KatheteB * KatheteC) * Math.cos(WinkelA))
        WinkelB = Math.acos(((KatheteC * KatheteC) + (KatheteA * KatheteA) - (KatheteB * KatheteB)) / ( 2 * KatheteC * KatheteA)) * 180 / Math.PI
        WinkelY = 180 - WinkelB - WinkelA

        console.log("Seite a = " + KatheteA + "\nWinkel b = " + WinkelB + "\nWinkel y = " + WinkelY)
    }

    else if(WinkelB > 0){
        KatheteB = Math.sqrt((KatheteA * KatheteA) + (KatheteC * KatheteC) - (KatheteA * KatheteC) * Math.cos(WinkelB))
        WinkelA = Math.acos(((KatheteC * KatheteC) + (KatheteB * KatheteB) - (KatheteA * KatheteA)) / (2 * KatheteC * KatheteB)) * 180 / Math.PI
        WinkelY = 180 - WinkelB - WinkelA

        console.log("Seite b = " + KatheteB + "\nWinkel a = " + WinkelA + "\nWinkel y = " + WinkelY)

    }

    else if(WinkelY > 0){
        KatheteC = Math.sqrt((KatheteA * KatheteA) + (KatheteB * KatheteB) - (KatheteA * KatheteB) * Math.cos(WinkelY))
        WinkelA = Math.acos(((KatheteB * KatheteB) + (KatheteC * KatheteC) - (KatheteA * KatheteA)) / (2 * KatheteB * KatheteC)) * 180 / Math.PI
        WinkelB = 180 - WinkelY - WinkelA
        console.log("Seite c = " + KatheteC + "\nWinkel a = " + WinkelA + "\nWinkel b = " + WinkelB )
    }
}

function twoSites90Degree(KatheteA, KatheteB, KatheteC, WinkelA, WinkelB, WinkelY){
    if(WinkelA == 90){
        KatheteA = Math.sqrt((KatheteB * KatheteB) + (KatheteC * KatheteC))
        WinkelB = Math.atan(KatheteB / KatheteC) * 180 / Math.PI
        WinkelY = 180 - WinkelA - WinkelB
        console.log("Seite a = " + KatheteA + "\nWinkel b = " + WinkelB + "\nWinkel y = " + WinkelY )
    }

    else if(WinkelB == 90){
        KatheteB = Math.sqrt((KatheteA * KatheteA) + (KatheteC * KatheteC))
        WinkelA = Math.atan(KatheteA / KatheteC) * 180 / Math.PI
        WinkelY = 180 - WinkelA - WinkelB
        console.log("Seite b = " + KatheteB + "\nWinkel a = " + WinkelA + "\nWinkel y = " + WinkelY )
    }

    else if(WinkelY == 90){
        KatheteC = Math.sqrt((KatheteA * KatheteA) + (KatheteB * KatheteB))
        WinkelA = Math.atan(KatheteA / KatheteB) * 180 / Math.PI
        WinkelB = 180 - WinkelA - WinkelY
        console.log("Seite c = " + KatheteC + "\nWinkel a = " + WinkelA + "\nWinkel b = " + WinkelB )
    }
}

function oneSiteTwoAngles(KatheteA, KatheteB, KatheteC, WinkelA, WinkelB, WinkelY){
    if(KatheteA > 0){
        if(WinkelA && WinkelB >0){
            WinkelY = 180 - WinkelA - WinkelB
            console.log("Winkel y = " + WinkelY)
        }
        else if(WinkelA && WinkelC >0){
            WinkelB = 180 - WinkelY - WinkelA
            console.log("Winkel b = " + WinkelB)
        }
        else if(WinkelB && WinkelC >0){
            WinkelA = 180 - WinkelY - WinkelB
            console.log("Winkel a = " + WinkelA)
        }
       KatheteB = KatheteA * Math.sin(WinkelB * Math.PI/180) / Math.sin(WinkelA * Math.PI/180)
       KatheteC = KatheteB * Math.sin(WinkelY * Math.PI/180) / Math.sin(WinkelB * Math.PI/180)
       console.log("Seite b = " + KatheteB + "\nSeite c = " + KatheteC)
    }

    else if(KatheteB > 0){
        if(WinkelA && WinkelB >0){
            WinkelY = 180 - WinkelA - WinkelB
            console.log("Winkel y = " + WinkelY)
        }
        else if(WinkelA && WinkelC >0){
            WinkelB = 180 - WinkelY - WinkelA
            console.log("Winkel b = " + WinkelB)
        }
        else if(WinkelB && WinkelC >0){
            WinkelA = 180 - WinkelY - WinkelB
            console.log("Winkel a = " + WinkelA)
        }

        KatheteC = KatheteB * Math.sin(WinkelY * Math.PI/180) / Math.sin(WinkelB * Math.PI/180)
        KatheteA = KatheteC * Math.sin(WinkelA * Math.PI/180) / Math.sin(WinkelY * Math.PI/180)
        console.log("Seite a = " + KatheteA + "\nSeite c = " + KatheteC)
    }

    else if(KatheteC > 0){
        if(WinkelA && WinkelB >0){
            WinkelY = 180 - WinkelA - WinkelB
            console.log("Winkel y = " + WinkelY)
        }
        else if(WinkelA && WinkelC >0){
            WinkelB = 180 - WinkelY - WinkelA
            console.log("Winkel b = " + WinkelB)
        }
        else if(WinkelB && WinkelC >0){
            WinkelA = 180 - WinkelY - WinkelB
            console.log("Winkel a = " + WinkelA)
        }

        KatheteA = KatheteC * Math.sin(WinkelA * Math.PI/180) / Math.sin(WinkelY * Math.PI/180)
        KatheteB = KatheteA * Math.sin(WinkelB * Math.PI/180) / Math.sin(WinkelA * Math.PI/180)
        console.log("Seite a = " + KatheteA + "\nSeite b = " + KatheteB)
    }
 }

function twoSitesOneAngle(KatheteA, KatheteB, KatheteC, WinkelA, WinkelB, WinkelY){
    if(KatheteA && KatheteB > 0) {
        // beta = arccos( b × sin alpha° / a )
        if(WinkelA > 0){
            WinkelB = Math.acos(KatheteB * Math.sin(WinkelA * Math.PI/180) / KatheteA)
        }
        // alpha = arccos( a × sin beta° / b )
        if(WinkelB > 0){
            WinkelA = Math.acos(KatheteA * Math.sin(WinkelB * Math.PI/180) / KatheteB)


        }

        // c = b × sin gamma / sin beta

        KatheteC = KatheteA * Math.sin(WinkelY * Math.PI/180) / Math.sin(WinkelA * Math.PI/180)
        console.log(WinkelA)
        console.log(WinkelB)

    }
}




