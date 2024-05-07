function showOutcome(event) {
    event.preventDefault()
    var q1 = document.getElementById("q1").value;
    var q2 = document.getElementById("q2").value;
    var q3 = document.getElementById("q3").value;
    var q4 = document.getElementById("q4").value;
    var q5 = document.getElementById("q5").value;
    var q6 = document.getElementById("q6").value;
    var q7 = document.getElementById("q7").value;
    var q8 = document.getElementById("q8").value;
    var q9 = document.getElementById("q9").value;
    var q10 = document.getElementById("q10").value;

        // Check if any input field is empty
        if (q1 === "" || q2 === "" || q3 === "" || q4 === "" || q5 === "" || q6 === "" || q7 === "" || q8 === "" || q9 === "" || q10 === "") {
            alert("נדרש למלא את כל השדות"); // Display an alert message
            return; // Exit the function
        }

    let summary = document.getElementById("inputValue")

    summary.innerHTML =`
מאז ומתמיד חיה בתוכך סטארית, כזו שתמיד אהבה ${q1}
ושמוכנה לשארית חייה ${q2}.
מבחינתה, ${q4} יכול להיות הזדמנות גדולה ומרגשת ובו זמנית גם מפחידה.
הצד האנושי שבך היה מוכן לעזוב הכל בשביל  ${q3} כל עוד הייתה לך הבטחה שגם אחרי שתעשי את השינוי הזה, הכל יהיה בסדר.
אז הסטארית הזו שחיה בתוכך, כאן כדי להזכיר לך כמה את חזקה ב ${q5}
וכמה את טובה ב ${q5}
ואחרי שכל החיים שלך הרגשת  ${q6}
אולי הגיע הזמן עבורך לרפא את הפצע הזה ע"י כך שתעזרי לכל מי  
ש ${q7} ללכת איתך יד ביד ולעבור מסע ולהפוך לאדם ש ${q7} באמצעות היכולת שלך ב ${q5}
זהו מסע שיגרום גם לך וגם להם להרגיש את ה ${q8} שאת כ"כ רוצה,
שתדעי שאת יכולה כבר עכשיו ${q9} כדי להרגיש ${q8}.
ואם את ממש רוצה להתחבר לסטארית שאת,
לכי ${q10} וזכרי, את כאן כי הנשמה שלך בחרה להיות כאן,
הסטארית שבתוכך עוד זוכרת שהחיים כאן נועדו להיות קרנבל משמח ואושר צרוף.
ושאת, נועדת להיות זרקור, זרקור של מישהי שהיא ${q8},
זה הזמן שלך לצאת למסע, כדי לחיות את החיים שנועדת...
מגיע לך! ואת ראויה לכך!
מימני באהבה,
סיון ברוק
    `
   let personalReview = document.getElementById("personalReview")
   let seedsOfLight = document.getElementById("seedsOfLight")
   personalReview.style.display ="none"
   seedsOfLight.style.display = "block"
}