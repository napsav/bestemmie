var sentences= [
	"Mneg chillu puorc spurc Sant'Adalberto di Praga che sputava sangue da ogni buco creato da non so quante frecce sparate da dei grandi soldati romani che svolgevano il loro fantastico compito \n\r - Francesco Acierno",
	"Mneg chella puttan orfan e Santa Flavia Domitilla cugina dell'imperatore Domiziano ma nonostante ciò questo nobile e giusto imperatore rilegò questa puttana non si sa se a Ponza o a Ventotene \n\r - Francesco Acierno",
	"Quel porco del gesuita San Luigi di Gonzaga perché al posto di dedicarsi alla vita religiosa ed entrare nel mondo di dio non ereditò il principato di Castiglione, essendo primo di 8 figli, ceh cazzo primo di 8 FIGLI?! \n\r - Francesco Acierno",
	"Come cazzo si fa a santificare uno come quel bastardo di San Francesco il cui unico potere era quello di parlare con un lupo bastardo; ceh potrebbe essere definito un cocainomane. \n\r - Francesco Acierno",
	"Mneg chella puttan e Santa Filomena, principessa sul pisello di Corfù, la quale rifiutò l’imperatore, ripeto l’IMPERATORE Diocleziano per sposarsi con quel porco di Gesù. Giustamente fu martoriata al meglio, ma resistette e sopravvisse alla flagellazione, alle frecce, ad un annegamento, e infine fu decapitata. Se questa non è una strega ditemi cos’è?! \n\r - Francesco Acierno",
	"Mneg o sang e chillu bastard e San gennar, ex vescovo di Benevento, che al posto di farsi i cazzi suoi andò a salvare il diacono di Miseno (giusto per spararsi la posa) e alla fine al posto di essere mangiato dagli orsi fu direttamente decapitato dal giusto Diocleziano \n\r - Francesco Acierno",
	"Il giusto Carlo V e i suoi cari lanzichenecchi durante uno degli eventi più belli della storia, ovvero il famosissimo sacco di Roma del 1527, imprigionò giustamente quel bastardo di San Gaetano Thiene, orfano del padre e delusione della povera madre, decise si fondare (giusto per far vedere di essere capace in qualcosa, dopo aver miseramente fallito nella carriera da avvocato) l’Ordine dei Chierici regolari teatini - Francesco Acierno"
];
var frase_render = document.getElementById('frase'); 
function getRandomSentence () {
    var index= Math.floor(Math.random() * (sentences.length));
    return sentences[index];
}
function bestemmia () {
	frase_render.innerHTML = getRandomSentence();
}
