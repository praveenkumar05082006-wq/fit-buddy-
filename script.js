function generatePlan() {

    const name = document.getElementById("name").value;
    const goal = document.getElementById("goal").value;
    const intensity = document.getElementById("intensity").value;

    if (!name) {
        alert("Please enter your name");
        return;
    }

    let plan = `🔥 Fitness Plan for ${name}\n\n`;

    for (let i = 1; i <= 7; i++) {

        plan += `Day ${i}:\n`;

        // Warm-up
        plan += "- Warm-up: 5–10 mins stretching\n";

        // Goal-based workout
        if (goal === "weight loss") {
            plan += "- Workout: Cardio + HIIT (Jump rope, running, burpees)\n";
        } 
        else if (goal === "muscle gain") {
            plan += "- Workout: Strength training (Pushups, squats, weights)\n";
        } 
        else {
            plan += "- Workout: Full body exercises (Yoga, mobility, light cardio)\n";
        }

        // Intensity logic
        if (intensity === "low") {
            plan += "- Intensity: Light pace (30 mins)\n";
        } 
        else if (intensity === "medium") {
            plan += "- Intensity: Moderate (45 mins)\n";
        } 
        else {
            plan += "- Intensity: High (60 mins intense training)\n";
        }

        // Cooldown
        plan += "- Cooldown: Stretching & breathing\n\n";
    }

    // Nutrition tip
    let tip = "\n🥗 Nutrition Tip:\n";

    if (goal === "weight loss") {
        tip += "Eat low-calorie, high-protein meals and stay hydrated.";
    } 
    else if (goal === "muscle gain") {
        tip += "Increase protein intake and eat more calories.";
    } 
    else {
        tip += "Maintain a balanced diet with carbs, protein, and fats.";
    }

    document.getElementById("result").innerText = plan + tip;
}
