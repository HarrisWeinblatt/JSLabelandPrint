function showInput() {
document.getElementById('person').innerHTML = "Hello" + "," + ' ' +
document.getElementById('firstname').value + ' ' +  document.getElementById('lastname').value + "!" + ' ' + "You" + ' ' + "are" + ' ' + document.getElementById('age').value + ' ' + "years" + ' ' + "old" + ".";

return false;
}
