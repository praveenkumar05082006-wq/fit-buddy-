function generatePlan() {

    const goal = document.getElementById("goal").value;
    const intensity = document.getElementById("intensity").value;

    let plan = "";

    for (let i = 1; i <= 7; i++) {
        plan += "Day " + i + "\n";
        plan += "- Warm-up (5 mins)\n";

        if (goal === "weight loss") {
            plan += "- Cardio + HIIT\n";
        } else if (goal === "muscle gain") {
            plan += "- Strength Training\n";
        } else {
            plan += "- Full Body Workout\n";
        }

        plan += "- Intensity: " + intensity + "\n";
        plan += "- Cooldown\n\n";
    }

    document.getElementById("result").innerText = plan;
}
