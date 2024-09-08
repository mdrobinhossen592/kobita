// var x = 100,
//     y = 101,
//     z = 102;
// if (x > y || x > z) {
//     console.log("max number is " + x);
// }
// if (y > x || y > z) {
//     console.log("max number is " + y);
// }
// if (z > x || z > y) {
//     console.log("max numbr is " + z);
// }

const banglanumber = prompt("বাংলাতে (১-১০) পর্যন্ত অথবা ইংরেজিতে (1-10) পর্যন্ত যেকোনো একটি সংখ্যা বেছে নিন এবং মজার মজার কবিতা পড়ুন");
const englishNumbr = prompt("বাংলাতে (১-১০) পর্যন্ত অথবা ইংরেজিতে (1-10) পর্যন্ত যেকোনো একটি সংখ্যা বেছে নিন এবং মজার মজার কবিতা পড়ুন");

if (banglanumber == "০") {
    console.log("আপনি " + banglanumber + " টাইপ করেছেন।দয়া করে ১ থেকে ১০ এর মধ্যে একটি সংখ্যা বেছে নিন এবং কবিতা দেখুন, ধন্যবাদ!🤗");
} else if (banglanumber == "১") {
    console.log(
        "হাট্টিমা টিম্ টিম্ \n \n" +
        "তারা মাঠে পাড়ে ডিম্! \n \n" +
        "তাদের খাড়া দুটো শিং, \n \n" +
        "তারা হাট্টিমা টিম্ টিম্।" 
    )
}else if (banglanumber == "২") {
    console.log(
        "নাম কী তোমার?—ননীবালা। \n \n" +
        "গলাতে কী?—ফুলের মালা। \n \n" +
        "বাড়ি কোথায়?—খড়ের চালা। \n \n" +
        "খাওনি কেন?—শূন্য থালা।" 
    )
}else if (banglanumber == "৩") {
    console.log(
        "ধেড়ে বাঁদর করলে আদর \n \n" +
        "লাফায় ঘাড়ের পর \n \n" +
        "দিইনি কলা তাই দ্যাখো না \n \n" +
        "মারল কষে চড়!" 
    )
}else if (banglanumber == "৪") {
    console.log(
        "ওলে ওলে কী হলো লে \n \n" +
        "মুক তি কেন ভালো? \n \n" +
        "দুধেল বাতি ভত্তি দালে \n \n" +
        "তাই লেগেথে ধাল!" 
    )
}else if (banglanumber == "৫") {
    console.log(
        "পুঁইয়ের মাচায় পুঁই ধরেছে \n \n" +
        "লাউয়ের মাচায় লাউ \n \n" +
        "ঘরের মাচায় চাল কেন নেই \n \n" +
        "তাই নিয়ে হাউকাউ।" 
    )
}else if (banglanumber == "৬") {
    console.log(
        "লাজুক লাজুক বউটা লাজুক \n \n" +
        "বাজুক সানাই ঢোলক বাজুক \n \n" +
        "সাজুক বাড়ি উঠোন সাজুক \n \n" +
        "নাচুক দিদা, দাদুও নাচুক।" 
    )
}else if (banglanumber == "৭") {
    console.log(
        "পুকুর ভরা কই \n \n" +
        "জাল পেতে দে সই \n \n" +
        "জালে সুতোর টান \n \n" +
        "নাচছে পোলাপান।" 
    )
}else if (banglanumber == "৮") {
    console.log(
        "অচল অচল পয়সা অচল \n \n" +
        "অচল পাটের কল \n \n" +
        "চটের থলে ভিজলে জলে \n \n" +
        "সকল রসাতল।" 
    )
}else if (banglanumber == "৯") {
    console.log(
        "দোল দোল দোল \n \n" +
        "সালুনে দে ঝোল \n \n" +
        "দুধটুকু ফেলে দিয়ে \n \n" +
        "খেতে নেই ঘোল।" 
    )
}else if (banglanumber == "১০") {
    console.log(
        "কালবোশেখি ঝড় \n \n" +
        "দস্যি হাওয়ার চর \n \n" +
        "এক নিমিষে উড়িয়ে নিল \n \n" +
        "বাবুই পাখির ঘর।" 
    )
}

if(englishNumbr == 0) {
    console.log("আপনি " + 0 + " টাইপ করেছেন।দয়া করে ১ থেকে ১০ এর মধ্যে একটি সংখ্যা বেছে নিন এবং কবিতা দেখুন, ধন্যবাদ!🤗");
} else if (englishNumbr == 1) {
    console.log(
        "Twinkle, twinkle, little star, \n \n" +
        "How I wonder what you are! \n \n" +
        "Up above the world so high, \n \n" +
        "Like a diamond in the sky." 
    )
}else if (englishNumbr == 2) {
    console.log(
        "Hickory Dickory Dock, \n \n" +
        "The mouse ran up the clock, \n \n" +
        "The clock struck one, \n \n" +
        "The mouse ran down, \n \n" +
        "Hickory Dickory Dock."
    )
}else if (englishNumbr == 3) {
    console.log(
        "Baa baa black sheep, have you any wool? \n \n" +
        "Yes sir, yes sir, three bags full, \n \n" +
        "One for the master, one for the dame, \n \n" +
        "One for the little boy who lives down the lane." 
    )
}else if (englishNumbr == 4) {
    console.log(
        "Jack and Jill went up the hill \n \n" +
        "To fetch a pail of water, \n \n" +
        "Jack fell down and broke his crown, \n \n" +
        "And Jill came tumbling after." 
    )
}else if (englishNumbr == 5) {
    console.log(
        "Mary had a little lamb, \n \n" +
        "Its fleece was white as snow, \n \n" +
        "And everywhere that Mary went, \n \n" +
        "The lamb was sure to go." 
    )
}else if (englishNumbr == 6) {
    console.log(
        "Ring a ring o' roses, \n \n" +
        "A pocket full of posies, \n \n" +
        "A-tishoo! A-tishoo! \n \n" +
        "We all fall down." 
    )
}else if (englishNumbr == 7) {
    console.log(
        "London Bridge is falling down, \n \n" +
        "Falling down, falling down, \n \n" +
        "London Bridge is falling down, \n \n" +
        "My fair lady." 
    )
}else if (englishNumbr == 8) {
    console.log(
        "This little piggy went to market, \n \n" +
        "This little piggy stayed home, \n \n" +
        "This little piggy had roast beef, \n \n" +
        "This little piggy had none, \n \n" +
        "And this little piggy cried wee, wee, wee all the way home."
    )
}else if (englishNumbr == 9) {
    console.log(
        "Hey diddle diddle, \n \n" +
        "The cat and the fiddle, \n \n" +
        "The cow jumped over the moon, \n \n" +
        "The little dog laughed to see such fun \n \n" +
        "And the dish ran away with the spoon."
    )
}else if (englishNumbr == 10) {
    console.log(
        "The itsy bitsy spider climbed up the water spout \n \n" +
        "Down came the rain and washed the spider out \n \n" +
        "Out came the sun and dried up all the rain \n \n" +
        "And the itsy bitsy spider climbed up the spout again." 
    )
}else if (englishNumbr < 0 || englishNumbr > 10){
    console.log("আবার চেষ্টা করুন")
}