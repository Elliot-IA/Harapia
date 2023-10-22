console.log("deviceOptimizer.js File Initated");

window.addEventListener('resize',()=> {
    setTimeout(()=>{
        console.log("");
        optimizeForDevice();
    },10);
    if(device != "webpage"){
        window.location.href = window.location.href;
    }
});


optimizeForDevice();

function optimizeForDevice(){
    console.log("Checking device...");
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        console.log("User is on mobile, overriding stylization...");
        if($("#MOJS")[0] == undefined){
            var MOCSS = document.createElement("link");
            var MOJS = document.createElement('script'); 
            MOCSS.href = "deviceOptimization/mobileOverride.css";
            MOCSS.rel = "stylesheet";
            MOCSS.id = "MOCSS";
            MOJS.src = "./deviceOptimization/mobileOverride.js";
            MOJS.id = "MOJS";
            $("head")[0].appendChild(MOCSS);
            $("head")[0].appendChild(MOJS);
        }
        if(window.innerHeight > window.innerWidth){     //Vertical Mode
            device = "mobileVertical";
            console.log("Detected that user is in verticle mode");

            if($("#MOVCSS")[0] == undefined){
                console.log("Applying verticle Stylization");
                var MOVCSS = document.createElement("link");
                MOVCSS.href = "deviceOptimization/mobileOverrideVertical.css";
                MOVCSS.rel = "stylesheet";
                MOVCSS.id = "MOVCSS";
                $("head")[0].appendChild(MOVCSS);
            }
            if($("#MOHCSS")[0] != undefined){
                $("#MOHCSS")[0].remove();
            }
            $("#webcam")[0].outerHTML = '<video id="webcam" autoplay="" playsinline="" width="'+(document.body.clientWidth-35)+'" height="'+(document.body.clientHeight-35)+'" style="transform: scale(-1, 1);" class="pulse"></video>';
            $("#imagePlaceholder")[0].outerHTML = '<img id="imagePlaceholder" src="" onclick="imageInputClick()" style="display:none" width="'+(document.body.clientWidth-35)+'" height="'+(document.body.clientHeight-35)+'">';
        }else{                                          //Horizontial Mode
            device = "mobileHorizontial";
            console.log("Detected that user is in horizontial mode");
            if($("#MOHCSS")[0] == undefined){
                console.log("Applying horizontial Stylization");
                var MOHCSS = document.createElement("link");
                MOHCSS.href = "deviceOptimization/mobileOverrideHorizontal.css";
                MOHCSS.rel = "stylesheet";
                MOHCSS.id = "MOHCSS";
                $("head")[0].appendChild(MOHCSS);    
            }
            if($("#MOVCSS")[0] != undefined){
                $("#MOVCSS")[0].remove();
            }
            $("#webcam")[0].outerHTML = '<video id="webcam" autoplay="" playsinline="" width="'+(document.body.clientWidth-20)+'" height="'+(document.body.clientHeight-10)+'" style="transform: scale(-1, 1);" class="pulse"></video>';
            $("#imagePlaceholder")[0].outerHTML = '<img id="imagePlaceholder" src="" onclick="imageInputClick()" style="display:none" width="'+(document.body.clientWidth-20)+'" height="'+(document.body.clientHeight-10)+'">';
        }
    }else{
        console.log("User is on Computer...");
        device = "webpage";
        if($("#MOJS")[0] != undefined){
            $("#MOCSS")[0].remove();
            $("#MOJS")[0].remove();
        }
        if($("#MOVCSS")[0] != undefined){
            $("#MOVCSS")[0].remove();
        }
        if($("#MOHCSS")[0] != undefined){
            $("#MOHCSS")[0].remove();
        }
    }

    /*setTimeout(()=>{
        var webcamLib = document.createElement("script");
        webcamLib.id = "webcamLib";
        webcamLib.src = "./js/webcamLib.js";
        document.head.appendChild(webcamLib);
        webcamLib.onload = ()=>{
            var jsSrcipt = document.createElement("script");
            jsSrcipt.id = "jsSrcipt";
            jsSrcipt.src = "./js/hyperlogger.js";
            document.head.appendChild(jsSrcipt);
            jsSrcipt.onload = ()=>{
                activateCamera();
            }
        }
    },0);*/
}