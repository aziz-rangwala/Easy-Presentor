// function aziz() {
//     console.log('dajkajs');

//     var r = document.querySelector('.output');
//     // if ('SpeechRecognition' in window){
//     console.log("Inside");

//     var SpeechToText = window.SpeechRecognition || window.webkitSpeechRecognition;
//     var speechrecognizer = new SpeechToText();
//     speechrecognizer.continuous = true;
//     speechrecognizer.interimResults = true;
//     speechrecognizer.start();


//     var result = '';
//     // var transcript = "";
//     speechrecognizer.onresult = function (event) {
//         var resultIndex = event.resultIndex;
//         var transcript = event.results[resultIndex][0].transcript;

//         // console.log("transcripet",transcript);
//         result += transcript

//         console.log("result", result);

//         // this.document.querySelector('.output').textContent = transcript;
//         $('.output').text(result);
//     }

//     // }else{
//     //     console.log("Outside");

//     // }

// // }
// $('.btn-start').click(function(){
//     console.log('started');
//     speech.init();
// })
// $('.btn-stop').click(function(){
//     console.log('ended');
//     speech.stop();
// })

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
    var speechrecognizer = new SpeechRecognition();
var pageNo = 0
var keywords = [['language', 'person', 'feeing'], ['user', 'computer', 'languages', 'level', 'computer'], ['language', 'codes', 'programming', '0', 'is a'], ['languages', 'actual language', '', 'computer understands', 'primitive computer'], ['languages', 'assembly'], ['obvious correspondence', 'abstraction', 'memory', 'clock', 'cycles'], ['language', 'very time', 'machine', 'consuming.    error', 'program'], ['programming', 'languages', 'to know', 'solution', 'programmer'], ['languages', 'words', 'generation'], [], ['level', 'multi', 'c++ is paradigm', 'purpose'], ['ide', 'eventprogramming driven language', 'environment', 'generation', 'microsoft'], ['methods', 'performance', 'messagestyle', 'concise', 'classes'], ['compiler', 'memory'], [], []];
function initialize(){
    console.log('started');
    // var r = document.querySelector('.output');
    // var SpeechToText = window.SpeechRecognition;
    // var speechrecognizer = new SpeechToText();
    
    speechrecognizer.continuous = true;
    speechrecognizer.interimResults = true;
    speechrecognizer.lang = 'en-IN';
    speechrecognizer.start();
    var finaltranscript = '';
    speechrecognizer.onsoundstart = function() { 
        console.log('Some sound is being received'); 
      }
      speechrecognizer.onsoundend = function(event) { 
        console.log('Sound has stopped being received');
        speechrecognizer.start() 
      }
      speechrecognizer.onaudioend = function() {
        console.log('Audio capturing ended');
        speechrecognizer.start()
      }
    speechrecognizer.onresult = function(event){
        var interimResults1 = '';
        for (i=event.resultIndex; i<event.results.length;i++){
            var transcript = event.results[i][0].transcript;
            // console.log("transcript",transcript);
            
            if(event.results[i].isFinal){
                finaltranscript += transcript;
                var printarr = transcript.toLowerCase();
                console.log('inside if',printarr);
                
            }else{
                interimResults1 += transcript;   
            }
        }

        if(printarr){
        var arr =  printarr.split(" ");
        console.log("arr",arr);
        for(i=0;i<arr.length;i++){
           if ($.inArray(arr[i],keywords[pageNo] != -1)){
               console.log("k",keywords[pageNo])
                console.log("Match found",arr[i],$.inArray(arr[i],keywords[pageNo]));
                
            }
        }
        }
        // r.innerHTML = finaltranscript + interimResults 
    }
    
}

function close1(){
    console.log('ended');
    // var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
    // var speechrecognizer = new SpeechRecognition();
    speechrecognizer.stop();
}