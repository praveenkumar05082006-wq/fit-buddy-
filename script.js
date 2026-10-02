function generatePlan() {

    const name = document.getElementById("name").value;
    const goal = document.getElementById("goal").value;
    const intensity = document.getElementById("intensity").value;

    if (!name) {
        alert("Enter your name");
        return;
    }

    let days = [
        "Chest & Triceps",
        "Back & Biceps",
        "Leg Day",
        "Cardio & Core",
        "Shoulders",
        "Full Body",
        "Rest & Recovery"
    ];

    let plan = `🔥 Fitness Plan for ${name}\n\n`;

    for (let i = 0; i < 7; i++) {

        plan += `Day ${i + 1}: ${days[i]}\n`;

        plan += "- Warm-up: 5–10 mins\n";

        if (goal === "weight loss") {
            plan += "- Workout: HIIT + Cardio (Jump rope, running)\n";
        } 
        else if (goal === "muscle gain") {
            plan += "- Workout: Strength training (Gym exercises)\n";
        } 
        else {
            plan += "- Workout: Mixed training (Yoga + light cardio)\n";
        }

        if (intensity === "low") {
            plan += "- Intensity: 30 mins\n";
        } 
        else if (intensity === "medium") {
            plan += "- Intensity: 45 mins\n";
        } 
        else {
            plan += "- Intensity: 60 mins\n";
        }

        plan += "- Cooldown: Stretching\n\n";
    }

    let tip = "\n🥗 Nutrition Tip:\n";

    if (goal === "weight loss") {
        tip += "Eat clean, avoid sugar, and stay in calorie deficit.";
    } 
    else if (goal === "muscle gain") {
        tip += "Eat high protein foods and maintain calorie surplus.";
    } 
    else {
        tip += "Maintain a balanced healthy diet.";
    }

    document.getElementById("result").innerText = plan + tip;
}
