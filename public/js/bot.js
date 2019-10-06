var trigger = [
	["hi","hey","hello"], 
	["how are you", "how is life", "how are things"],
	["what are you doing", "what is going on"],
	["how old are you"],
	["who are you", "are you human", "are you bot", "are you human or bot"],
	["who created you", "who made you"],
	["your name please",  "your name", "may i know your name", "what is your name"],
	["i love you"],
	["happy", "good"],
	["bad", "bored", "tired"],
	["help me", "tell me story", "tell me joke"],
	["ah", "yes", "ok", "okay", "nice", "thanks", "thank you"],
	["bye", "good bye", "goodbye", "see you later"]
];
var reply = [
	["Hi","Hey","Hello"], 
	["Fine", "Pretty well", "Fantastic"],
	["Nothing much", "About to go to sleep", "Can you guest?", "I don't know actually"],
	["I am 1 day old"],
	["I am just a bot", "I am a bot. What are you?"],
	["Anshu kumar Singh", "My God"],
	["I am nameless", "I don't have a name"],
	["I love you too", "Me too"],
	["Have you ever felt bad?", "Glad to hear it"],
	["Why?", "Why? You shouldn't!", "Try watching TV"],
	["I will", "What about?"],
	["Tell me a story", "Tell me a joke", "Tell me about yourself", "You are welcome"],
	["Bye", "Goodbye", "See you later"]
];
var check=1;
document.querySelector("#input").addEventListener("keypress", function(e){
	var key = e.which || e.keyCode;
    if(key === 13){ 
        e.preventDefault();
        window.inputs = document.getElementById("input").value;
	   // console.log();
	   
		//document.getElementById("messages").innerHTML = input;
		output(inputs);
	}
});
function output(input){
	try{
		var product = input + "=" + eval(input);
	} catch(e){
		var text = (input.toLowerCase()).replace(/[^\w\s\d]/gi, ""); //remove all chars except words, space and 
		text = text.replace(/ a /g, " ").replace(/i feel /g, "").replace(/whats/g, "what is").replace(/please /g, "").replace(/ please/g, "");
		if(compare(trigger, reply, text)){
			document.getElementById("messages").innerHTML = inputs;
			let product = compare(trigger, reply, text);
			document.getElementById("edge").innerHTML = product;
	
			document.getElementById("input").value = ""; //clear input value
		} else {
			 document.getElementById("messages").innerHTML = 'Passing control to human ';
			let product=human(input);
			// console.log(product);
			// document.getElementById("edge").innerHTML = product;
	
			// document.getElementById("input").value = ""; //clear input value
		}
	}
	
}
function compare(arr, array, string){
	var item;
	for(var x=0; x<arr.length; x++){
		for(var y=0; y<array.length; y++){
			if(arr[x][y] == string){
				
				items = array[x];
				item =  items[Math.floor(Math.random()*items.length)];
			}
		}
	}
	return item;
}
function human(input){
		
			var socket=io.connect('http://localhost:3000');
			socket.emit('chat',{
				message:input,
			})
			socket.on('chat',function(data){
				messages.innerHTML= "";
				// messages.innerHTML='<strong>'+data.message+'</strong>'
				 document.getElementById("edge").innerHTML ='Human:'+ data.message;
			})

}