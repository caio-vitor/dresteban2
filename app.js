// artigos
const artigo = document.getElementById('artigo');
const artigos = {
	art1:
		'<h1>O que são as arritmias cardíacas?</h1><p>As arritmias cardíacas são situações em que o batimento cardíaco se apresenta irregular, acelerado ou lento. De forma descritiva, as diversas classes de arritmias podem ser caracterizadas como:<ol><li>Bradicardia – batimento lento<li>Taquicardia – batimento acelerado<li>Batimento irregular (como na Fibrilação atrial, por exemplo.)<li>Batimento prematuro (extra-sístoles)</ol><p>Muitas arritmias são de baixo risco cardiovascular. No entanto, alguns casos podem trazer maiores riscos e necessitam de tratamento específico. A avaliação do especialista em arritmias nestes casos é fundamental.',
	art2:
		'<h1>O que pode causar arritmias?</h1><p>Muitos fatores podem contribuir para um mal funcionamento do ritmo cardíaco:<ul><li>Abuso de álcool ou outros tóxicos<li>Diabetes<li>Abuso de cafeína<li>Doenças cardíacas estruturais prévias<li>Hipertensão arterial<li>Hiper e Hipotireoidismo<li>Stress mental<li>Suplementos alimentares inadequados<li>Tabagismo<li>Alterações genéticas</ul>',
	art3:
		'<h1>Quais são os principais tratamentos das arritmias cardíacas?</h1><p>O tratamento das arritmias tem 3 componentes principais:<ol><li><strong>Mudanças alimentares e comportamentais:</strong> evitar álcool, drogas, cafeína. Cessar o tabagismo. Controlar sobrepeso, stress mental.<li><strong>Medicamentos:</strong> existem várias classes de medicamentos antiarrítmicos que podem ser usadas de acordo com o perfil do paciente e com o diagnóstico da arritmia. A escolha da medicação mais adequada deve ser feita pelo especialista.<li><strong>Procedimentos invasivos:</strong> algumas arritmias podem ser  tratadas através de procedimentos por cateter (Estudo Eletrofisiológico e Ablação).</ol>',
	art4:
		'<h1>Em que casos a Ablação está indicada?</h1><p>A ablação é um procedimento invasivo por cateter, geralmente indicado de forma eletiva em pacientes portadores de arritmias com sintomas ou riscos significativos são candidatos a esta forma de tratamento. Na maioria das vezes o procedimentos é realizado sob sedação ou anestesia, não trazendo desconforto ao paciente. As principais arritmias tratadas com este método são as taquicardias supraventriculares, as extra-sístoles e a Fibrilação Atrial.</p>',
	art5:
		'<h1>Artigos acadêmicos</h1><p>Clique para acessar:</p><p><a href="http://www.scielo.br/scielo.php?pid=S0104-42302011000300001&script=sci_arttext"target=_blank>The Athlete\'s heart and the endless pursuit of prediction factors</a></p><p><a href=https://academic.oup.com/europace/article/13/8/1141/515357 target=_blank>Spectral characteristics of atrial electrograms in sinus rhythm correlates with sites of ganglionated plexuses in patients with paroxysmal atrial fibrillation</a></p><p><a href="https://www.ahajournals.org/doi/full/10.1161/CIRCEP.116.004638?url_ver=Z39.88-2003&rfr_id=ori%3Arid%3Acrossref.org&rfr_dat=cr_pub%3Dpubmed"target=_blank>Targets and End Points in Cardiac Autonomic Denervation Procedures</a></p>'
};

artigo.innerHTML = chamarTexto('art1');

const art1 = document.getElementById('art1');
const art2 = document.getElementById('art2');
const art3 = document.getElementById('art3');
const art4 = document.getElementById('art4');
const art5 = document.getElementById('art5');

art1.addEventListener('click', () => (artigo.innerHTML = chamarTexto('art1')));
art2.addEventListener('click', () => (artigo.innerHTML = chamarTexto('art2')));
art3.addEventListener('click', () => (artigo.innerHTML = chamarTexto('art3')));
art4.addEventListener('click', () => (artigo.innerHTML = chamarTexto('art4')));
art5.addEventListener('click', () => (artigo.innerHTML = chamarTexto('art5')));

function chamarTexto(index) {
	return artigos[index];
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById('myBtn').style.display = 'block';
	} else {
		document.getElementById('myBtn').style.display = 'none';
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
