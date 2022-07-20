var time = prompt('Whats the time Now?')
if (time > 4 && time < 12) {
    alert('Good Morning')
} else if (time > 12 && time < 15) {
    alert('Good Noon')
} else if (time > 15 && time < 21) {
    alert('Good Evening')
} else {
    alert('Good Night')
}
