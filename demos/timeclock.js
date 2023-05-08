let currentHour = 18;

if (currentHour >= 0 && currentHour <= 9) {
    console.log("Good morning!");
} else if (currentHour >= 10 && currentHour <= 16) {
    console.log("Good Day!");
} else if (currentHour >= 17 && currentHour <= 24) {
    console.log("Good Evening!");
} else {
    console.log("Invalid hour value");
}
