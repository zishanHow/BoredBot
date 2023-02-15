const activity = document.getElementById('activity')


document.getElementById("btn").addEventListener("click", () => {
    fetch('https://apis.scrimba.com/bored/api/activity')
    .then((response) => response.json())
    .then((data) => {
        activity.textContent = data.activity
        activity.classList.add("activity")

        document.getElementById("titel").textContent = "Idea :-)"
    })
})