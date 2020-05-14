var santi = [
	"Sant'Ambrogio ",
	"San Francesco Saverio ",
	"Sant'Antonio ",
	"San Giuseppe ",
	"San Francesco ",
	"San Giorgio ",
	"San Uwu "
];
function getRandomSanto () {
    var index= Math.floor(Math.random() * (santi.length));
    return santi[index];
}
var nomi = [
	"il burgiardo ",
	"il criminale ",
	"il ladro ",
	"il porco ",
	"il maiale ",
	"lo scomunicato "
];
function getRandomNome () {
    var index= Math.floor(Math.random() * (nomi.length));
    return nomi[index];
}
var aggettivi = [
	"bastardo ",
	"fascista ",
	"nazista ",
	"bestemmiatore ",
	"pedofilo ",
	"razzista ",
	"archico ",
	"uwu ",
	"traditore ",
	":/ ",
	"meschino "
];
function getRandomAggettivo () {
     var index= Math.floor(Math.random() * (aggettivi.length));
     return aggettivi[index];
}
var santi_render = document.getElementById('santi');
function santifica () {
	santi_render.innerHTML = getRandomSanto() + getRandomNome() + getRandomAggettivo();
}
