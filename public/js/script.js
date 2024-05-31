var sendBtn= document.getElementById('sendBtn');
var textBox=document.getElementById('textBox');
var chatContainer=document.getElementById('chatContainer');
var user={
    message:""
};
var arrayOfPossibleMessage=[
    {message:"hi",response:"hello"},
    {message:"how are you?",response:"I'm good"},
    {message:"what is your name ",response:"I'm a chatBot !"},
    {message:"what is your favourate food ",response:"Pizza"},

]

function sendMessage(userMessage){
    var messageElement = document.createElement('div');
        messageElement.style.textAlign="right";
        messageElement.style.margin="10px";
        // messageElement.style.fontWeight="bold";
        messageElement.innerHTML="<span><strong> You:</string></span>" +
                                "<span>" +userMessage +"</span>"
        chatContainer.appendChild(messageElement);
    }

function chatbotResponse(userMessage){
var chatBotMessage="";
        if (userMessage.length >5 || userMessage=='hi'){
            var result = arrayOfPossibleMessage.filter(val=>val.message.includes(userMessage.toLowerCase()));
          if(result.length>0)
        {
            var response =result[0].response;
            chatBotMessage=response;
          }
          else{
            chatBotMessage="I don't understand,please send another message";
             }
         }


var messageElement=document.createElement('div');
        messageElement.style.color="rgb(32,199,32) ";
        messageElement.style.textAlign="left";
        // messageElement.style.fontWeight="bold";

messageElement.innerHTML="<span> <strong>chatbot:</strong></span>" +
                             "<span>" +chatBotMessage +"</span>"

setTimeout(()=>{
    messageElement.animate([{easing:"ease-in",opacity:0.4},{opacity:1}],{duration:1000});
    chatContainer.appendChild(messageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight;

},1000)

}




sendBtn.addEventListener('click', function(e){
 var userMessage=textBox.value;

 if(userMessage==""){
      alert('Please type in a message');
 }else{
   let userMessageText = userMessage.trim();
   user.message=userMessageText;
   textBox.value="";
   sendMessage(userMessage);
   chatbotResponse(userMessageText);
 }



})