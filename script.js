function checkPassword(){

    let password =
    document.getElementById("password").value;

    let result =
    document.getElementById("result");

    if(password.length < 6){
        result.innerHTML = "🔴 Weak Password";
    }

    else if(password.length < 10){
        result.innerHTML = "🟡 Medium Password";
    }

    else{
        result.innerHTML = "🟢 Strong Password";
    }
}
const quiz = [
{
question: "What is Phishing?",
options: ["Antivirus Software", "Social Engineering Attack", "Firewall", "Operating System"],
answer: 1
},
{
question: "What is a strong password?",
options: ["123456", "Combination of letters, numbers & symbols", "password", "abc123"],
answer: 1
},
{
question: "What is Malware?",
options: ["Security Tool", "Malicious Software", "Browser", "Network"],
answer: 1
},
{
question: "What does HTTPS indicate?",
options: ["Secure Website Connection", "Faster Internet", "Free Website", "Antivirus Installed"],
answer: 0
},
{
question: "What should you do if you receive a suspicious email?",
options: ["Click the link", "Reply with details", "Delete or report it", "Share it"],
answer: 2
}
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {

document.getElementById("quiz-result").innerHTML = "";

let q = quiz[currentQuestion];

document.getElementById("question").innerHTML =
`Question ${currentQuestion + 1} of ${quiz.length}<br><br>${q.question}`;

let optionsHTML = "";

for(let i = 0; i < q.options.length; i++) {
optionsHTML += `
<label>
<input type="radio" name="option" value="${i}">
${q.options[i]}
</label><br><br>
`;
}

document.getElementById("options").innerHTML = optionsHTML;
}

function nextQuestion() {

let selected =
document.querySelector('input[name="option"]:checked');

if(!selected){
alert("Please select an answer!");
return;
}

if(Number(selected.value) === quiz[currentQuestion].answer){
score++;
}

currentQuestion++;

if(currentQuestion < quiz.length){
loadQuestion();
}
else{

let percentage = (score / quiz.length) * 100;

let message="";

    if(percentage === 100){
        message = " Excellent!🥳 Cyber Security Expert😎🙌🏻";
    }
    else if(percentage >= 80){
        message = " Great Job!🤝🏻🎉🏆";
    }
    else if(percentage >= 60){
        message = " Good Job👍🏻!!Keep Learning💫";
    }
    else{
        message = " Keep Practicing📚";
    }

document.getElementById("question").innerHTML =
        "🎯 Quiz Completed!";

        document.getElementById("options").innerHTML = "";

        document.getElementById("quiz-result").innerHTML = `
        <h3>${message}</h3>
        <h3>Score: ${score}/${quiz.length}</h3>
        <h3>Percentage: ${percentage}%</h3>
        `;
    }
}
if(document.getElementById("question"))
{
loadQuestion();
}
function sendMessage() {
    alert(" Message Sent Successfully✅!\nThank you for contacting us.");
}

function openPasswordAnalyzer(){
    window.location.href="password.html";
    
}

function checkPhishing() {

    let input = document.getElementById("phishInput").value;
    let result = document.getElementById("phishResult");

    let badWords = ["free", "win", "click", "login", "verify", "urgent"];

    let flag = false;

    if(input.includes("http://")) flag = true;

    for(let i = 0; i < badWords.length; i++){
        if(input.toLowerCase().includes(badWords[i])){
            flag = true;
        }
    }

    if(input.includes("@") && !input.includes(".com")){
        flag = true;
    }

    if(flag){
        result.innerHTML = "🔴 Phishing Likely!";
        result.style.color = "red";
    } else {
        result.innerHTML = "🟢 Looks Safe";
        result.style.color = "green";
    }
}
function checkRisk() {

    let score = 0;

    score += Number(document.getElementById("risk1").value);
    score += Number(document.getElementById("risk2").value);
    score += Number(document.getElementById("risk3").value);

    let result = document.getElementById("risk-result");

    if(score === 0){
        result.innerHTML = "🟢 Low Risk";
    }
    else if(score <= 2){
        result.innerHTML = "🟡 Medium Risk";
    }
    else{
        result.innerHTML = "🔴 High Risk";
    }
}
function showRiskTool() {
    window.location.href = "risk.html";
}
function showPasswordTips() {
    window.location.href = "passwordtips.html";
}

function show2FA() {
    window.location.href = "2fa.html";
}

function showPhishingTips() {
    window.location.href = "phishingtips.html";
}
function getStarted() {
    document.querySelector(".hero").style.display = "none";
    document.getElementById("content").style.display = "block";
}
function showPhishingTool() {
    window.location.href = "phishing.html";
}
function showBeginner() {
    window.location.href = "beginner.html";
}

function showIntermediate() {
    window.location.href = "intermediate.html";
}

function showAdvanced() {
    window.location.href = "advanced.html";
}
function checkScam(){

let msg = document.getElementById("scamInput").value.toLowerCase();

let keywords = [
"otp","bank","verify","click here","urgent","gift","winner","prize","refund","upi","account suspended","free"
];

let result = document.getElementById("result");

let scam = keywords.some(word => msg.includes(word));

if(scam){
    result.innerHTML = "🔴 Warning! Possible Scam Detected";
    result.style.color = "red";
}else{
    result.innerHTML = "🟢 No Scam Detected";
    result.style.color = "lime";
}

}