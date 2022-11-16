let arrayMessage = ["THE TAO THAT CAN BE TOLD OF IS NOT THE ABSOLUTE TAO", 
"DO YOU KNOW WHO I AM?", "You have known emptiness only in a negative way.", "You will die as a nobody.",
"The ambitious mind is never here, he is always on the go.", "Ambition will never be fulfilled.",
"Lao Tzu is not teaching something -- he is that something.", "Love is God", "THE SPIRIT OF THE VALLEY NEVER DIES.",
"If you accept everything suddenly love flowers, hate disappears.", "In life everything is a rhythm.",
"You simply wait and seeing will come to you. ", "Life is a balance between opposites, it never comes to an end. ",
"Don't try to find the meaning.", "If you try to remain in the middle you will never be in the middle. ",
];
function generateRandomNumber(num)
{
    return Math.floor(Math.random() * num);
}

let indexOfMess = generateRandomNumber(arrayMessage.length);
console.log(arrayMessage[indexOfMess]);