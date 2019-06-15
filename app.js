const artigo = document.getElementById('artigo');
const artigos = {
	art1:
		'<h1>O que são as arritmias cardíacas?</h1><p>As arritmias cardíacas são situações em que o batimento cardíaco se apresenta irregular, acelerado ou lentificado. De forma descritiva, as diversas classes de arritmias podem ser descritas abaixo:<ol><li>Bradicardia – batimento lento<li>Taquicardia - batimento acelerado<li>Batimento irregular (como na Fibrilação atrial, por exemplo.)<li>Batimento prematuro (extra-sístoles)</ol><p>A maioria das arritmias diagnosticadas é de baixo risco cardiovascular. No entanto, alguns casos especificos podem trazer maiores riscos e necessitam de tratamento específico. A avaliação do especialista em arritmias nestes casos, é fundamental.',
	art2:
		'<h1>O que pode causar arritmias?</h1><p>Muitas causas potenciais podem contribuir para um mal funcionamento do ritmo cardíaco:<ul><li>abuso de álcool ou outros tóxicos<li>diabetes<li>Abuso de cafeína<li>Doenças cardíacas estruturais prévias<li>Hipertensão arterial<li>Hiper e Hipotireoidismo<li>Stress mental<li>Suplementos alimentares inadequados<li>Tabagismo<li>Alterações genéticas</ul>',
	art3:
		'<h1>Quais são os principais tratamentos das arritmias cardíacas?</h1><p>O tratamento das arritmias tem 3 componentes principais:<ol><li>Mudanças alimentares e comportamentais- evitar abuso de alcool, drogas e cafeína. Evitar/cessar o tabagismo. Evitar sobrepeso, stress mental.<li>Medicamentos- existem várias classes de medicamentos anti-arrítmicos que podem ser usadas nos diferentes perfis de pacientes e nas diversas arritmias conhecidas. A escolha da medicação mais adequada em cada situação deve ser analisada em detalhe pelo especialista.<li>Procedimentos invasivos. Algumas arritmias podem ser diagnosticadas e tratadas através de procedimentos por cateter (chamados Estudo Eletrofisiológico e Ablação).</ol>',
	art4:
		'<h1>Em que casos a Ablação está indicada?</h1><p>A ablação é um procedimento invasivo por cateter, geralmente indicado de forma eletiva. Pacientes portadores de arritmias com sintomas ou riscos significativos são candidatos a esta forma de tratamento. Na maioria das vezes o procedimentos é realizado sob sedação ou anestesia, nã0 trazendo desconforto ao paciente. As principais arritmias tratadas com este método na prática clínica são as taquicardias supraventriculares, as extra-sístoles e a Fibrilação Atrial.</p>',
	art5:
		'<h1>Artigos acadêmicos</h1><p>Clique para acessar:</p><p><a href="http://www.scielo.br/scielo.php?pid=S0104-42302011000300001&script=sci_arttext"target=_blank>O coração do atleta e a busca incessante de fatores de previsão</a></p><p><a href=https://academic.oup.com/europace/article/13/8/1141/515357 target=_blank>Características espectrais de eletrogramas atriais em ritmo sinusal se correlacionam com sítios de plexos ganglionares em pacientes com fibrilação atrial paroxística</a></p><p><a href="https://www.ahajournals.org/doi/full/10.1161/CIRCEP.116.004638?url_ver=Z39.88-2003&rfr_id=ori%3Arid%3Acrossref.org&rfr_dat=cr_pub%3Dpubmed"target=_blank>Alvos e pontos definitivos em Procedimentos de Denervação Autônoma Cardíaca</a></p>'
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
