const moodMap = {
    happy: { color: "#FFD700", msg: "the world is brighter with your smile! ✨" },
    sad: { color: "#A9D6E5", msg: "it's okay to feel this way. Better days are coming. 🌧️" },
    calm: { color: "#B8E0D2", msg: "peace starts from within. Breathe deep. 🌿" },
    birthday: { color: "pink", msg: "Happy Birthday! Have a magical day! 🎂" },
    default: { color: "#f0f2f5", msg: "you have a unique vibe! Stay wonderful. 🌈" }
};

const btn = document.getElementById('generate-btn');
const nameInp = document.getElementById('user-name');
const moodInp = document.getElementById('mood-input');
const output = document.getElementById('affirmation');

btn.addEventListener('click', function() {
    const name = nameInp.value.trim() || "Friend";
    const mood = moodInp.value.toLowerCase().trim();
    const data = moodMap[mood] || moodMap.default;

    document.body.style.background = data.color;
    output.textContent = `${name}, ${data.msg}`;
});
