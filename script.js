document.addEventListener("DOMContentLoaded", function () {
    const chatLog = document.getElementById("chat-log");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");

    sendButton.addEventListener("click", function () {
        sendMessage();
    });

    
    userInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); 
            sendMessage();
        }
    });

    function sendMessage() {
        const userMessage = userInput.value.trim();
        if (userMessage === "") return;

        appendMessage("User", userMessage);
        userInput.value = "";

        
        const botResponse = getBotResponse(userMessage);
        setTimeout(() => {
            appendMessage("Chatbot", botResponse);
        }, 500); 
    }

    function appendMessage(sender, message) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message", sender.toLowerCase());
        messageElement.textContent = `${sender}: ${message}`;
        chatLog.appendChild(messageElement);

        
        chatLog.scrollTop = chatLog.scrollHeight;
    }

    function getBotResponse(msg) {
        tempvar=0
        msg = msg.toLowerCase();

        if (msg.includes("hi") || msg.includes("hlw")|| msg.includes("hello")) {
            return "Hello! How can I assist you?";
        } else if (msg.includes("help")) {
            return "Sure, I can help with that.";
        } else if (msg.includes("where") || msg.includes("get to") || msg.includes("reach") || msg.includes("find")) {
            if (msg.includes("hospital")){
                return "https://tinyurl.com/y3vf283y"
            }
            else if(msg.includes("ub") || msg.includes("university building")){
                return "https://tinyurl.com/mr3yse3p"
            }
            else if(msg.includes("tp") || msg.includes("tech park")){
                return "https://tinyurl.com/mua7pxv4"
            }
            else if(msg.includes("ganesan")){
                return "https://tinyurl.com/33nuymy3"
            }
            else if(msg.includes("main campus")){
                return "https://tinyurl.com/yd9yc5w5"
            }
            else if(msg.includes("boy")){
                return "https://tinyurl.com/49rcpbhd"
            }
            else if(msg.includes("girl")){
                return "https://tinyurl.com/2xhcbu8y"
            }
            else{
                return("I'm sorry I do not know where that is.")
            }
        } else if (msg.includes("next class")) {
            return "Your next class is scheduled on 8/Sept/23 at 08:00 a.m.";
        }
        else if(msg.includes("how does") || msg.includes("how do")){
            if(msg.includes("od") || msg.includes("on duty")){
                return ("Upon taking part in an event endorsed by SRM that takes place during class hours, a student can apply for an OD (On Duty) form that will give them the attendance for the day(s) they missed.\nTo do so a student must ask their Faculty Advisor for an OD/ML form, fill up the details and attach the proof of them attending the event and submit the form to their FA.\nOnce verified the attendance will be added to the student's final attendance tally.")
            }
            else if(msg.includes("ml") || msg.includes("medical leave")){
                return ("If a student misses any class due to any medical reason, they can apply for a Medical Leave (ML) form that will give them the attendance for the day(s) they missed.\nTo do so a student must ask their Facult Advisor for an OD/ML form, fill up the details and attack proof in the form of a doctor's note and/or a prescription and submit the form to their FA.\nOnce verified the attendance will be added to the student's final attendance tally.")
            }
        }
        else if(msg=="you gay?"){
            return ("OMG YES HOW DID YOU KNOW???")
        }
        else {
            return "I'm sorry, I don't understand that.";
        }
    }
});
