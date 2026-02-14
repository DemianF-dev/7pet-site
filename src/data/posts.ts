export interface Post {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    category: string;
    date: string;
    readTime: string;
    image: string;
    featured?: boolean;
    author: {
        name: string;
        role: string;
        bio: string;
        image?: string;
    };
}

export const CATEGORIES = ["Todos", "Saúde", "Comportamento", "Nutrição", "Notícias", "Raças", "Educação"];

export const POSTS: Post[] = [
    {
        id: 1,
        slug: "como-os-pets-se-tornaram-membros-da-familia",
        title: "Como os pets se tornaram membros da família",
        excerpt: "Você já parou para pensar em como os animais de estimação mudaram a nossa forma de viver? Cada vez mais, os pets são vistos como membros da família.",
        category: "Comportamento",
        date: "12/02/2021",
        readTime: "8 min",
        image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=2060&auto=format&fit=crop",
        featured: true,
        author: {
            name: "7Pet",
            role: "Equipe Editorial",
            bio: "Conteúdo focado no vínculo e bem-estar dos animais de companhia."
        },
        content: `
            <p class="mb-4">Você já parou para pensar em como os animais de estimação mudaram a nossa forma de viver? Cada vez mais, os pets são vistos como membros da família, recebendo amor, cuidado e atenção. Essa tendência foi evidenciada pela pesquisa Radar Pet, realizada pelo Sindicato Nacional da Indústria de Produtos para a Saúde Animal (Sindan), que mostrou que 21% das casas que têm cachorros são de casais sem filhos.</p>
            
            <p class="mb-4">Essa escolha de não ter filhos humanos e sim pets foi criticada pelo papa Francisco em janeiro deste ano, quando ele disse haver um "determinado egoísmo" em casais que optam por essa alternativa. Mas será que ele tem razão? Ou será que os pets podem trazer benefícios para a saúde e o bem-estar dos seus tutores? Neste artigo, vamos explorar os motivos que levam as pessoas a verem os pets como filhos, os benefícios dessa relação e as dicas para cuidar bem dos seus bichinhos.</p>

            <h2 class="text-2xl font-bold font-heading mt-8 mb-4">Por que os pets são vistos como filhos?</h2>
            <p class="mb-4">Existem vários fatores que contribuem para que os pets sejam considerados como parte da família. Um deles é o aumento da expectativa de vida dos animais, graças aos avanços da medicina veterinária e da nutrição animal. Com isso, os pets passam mais tempo ao lado dos seus tutores, criando laços afetivos mais fortes.</p>
            <p class="mb-4">Outro fator é a mudança no estilo de vida das pessoas, especialmente nas grandes cidades. Com o aumento do individualismo, do estresse e da solidão, muitas pessoas buscam nos pets uma fonte de companhia, carinho e diversão. Além disso, os pets também podem ajudar a reduzir a ansiedade, a depressão e a pressão arterial dos seus donos.</p>
            <p class="mb-4">Por fim, há também uma questão cultural e social envolvida. Cada vez mais, as pessoas têm liberdade para escolher se querem ou não ter filhos humanos, levando em conta aspectos como a situação econômica, a realização pessoal e o impacto ambiental. Nesse contexto, os pets podem ser uma opção mais viável e satisfatória para muitos casais.</p>

            <h2 class="text-2xl font-bold font-heading mt-8 mb-4">Quais são os benefícios de ter um pet como filho?</h2>
            <ul class="list-disc pl-8 mb-8 space-y-2">
                <li><strong>Melhora o humor e a autoestima:</strong> os pets são capazes de nos fazer rir com suas travessuras e demonstrações de afeto. Eles também nos fazem sentir amados e importantes, aumentando a nossa autoconfiança.</li>
                <li><strong>Estimula a atividade física:</strong> os pets nos incentivam a sair do sedentarismo para passear ou brincar, prevenindo doenças.</li>
                <li><strong>Favorece o convívio social:</strong> os pets nos ajudam a interagir com outras pessoas que também amam os animais.</li>
                <li><strong>Desenvolve a responsabilidade:</strong> cuidar da alimentação, higiene e saúde de um ser vivo nos torna mais conscientes de nossas obrigações.</li>
            </ul>

            <h2 class="text-2xl font-bold font-heading mt-8 mb-4">Como cuidar bem do seu pet filho?</h2>
            <p class="mb-4">Para garantir a felicidade do seu bichinho, siga estas recomendações:</p>
            <ul class="list-disc pl-8 mb-8 space-y-2">
                <li><strong>Escolha adequada:</strong> antes de adotar, pesquise as características da raça e se elas condizem com sua rotina.</li>
                <li><strong>Ambiente seguro:</strong> providencie um espaço confortável com acesso a água limpa, sombra e abrigo.</li>
                <li><strong>Nutrição balanceada:</strong> ofereça alimentação específica para a espécie e idade do animal.</li>
                <li><strong>Saúde preventiva:</strong> consultas periódicas e vacinação em dia são essenciais.</li>
            </ul>
            <p class="mb-8 font-bold italic text-primary">Conclusão: Os pets nos ensinam valores como lealdade, amizade e gratidão. Cuide bem do seu bichinho e aproveite cada momento ao seu lado!</p>
            <p class="mt-8 pt-4 border-t border-gray-200 text-sm text-gray-500">Fonte Original do Texto: <a href="https://7pet.com.br/blog/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">7Pet Blog</a></p>
        `
    },
    {
        id: 2,
        slug: "servicos-profissionais-para-pets",
        title: "Serviços Profissionais para pets",
        excerpt: "Transportar um animal de forma segura e confortável pode ser um desafio. Conheça os benefícios de optar por um serviço especializado.",
        category: "Educação",
        date: "05/03/2023",
        readTime: "7 min",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2070&auto=format&fit=crop",
        author: {
            name: "7Pet",
            role: "Equipe Editorial",
            bio: "Especialistas em logística e conforto animal."
        },
        content: `
            <p class="mb-4">Muitos donos de animais de estimação gostam de levá-los consigo em viagens e passeios, mas transportar um animal de forma segura e confortável pode ser um desafio. Nesse contexto, escolher um serviço de transporte especializado para pets pode trazer muitos benefícios que tornam a experiência mais tranquila tanto para o animal quanto para o dono.</p>
            
            <h2 class="text-2xl font-bold font-heading mt-8 mb-4">Segurança em primeiro lugar</h2>
            <p class="mb-4">Empresas especializadas têm anos de experiência e treinamento específico para lidar com animais durante o trajeto. Os veículos são projetados com gaiolas e cintos de segurança que garantem a integridade do animal em qualquer situação.</p>
            <p class="mb-4">Os veículos contam com gaiolas e cintos de segurança para animais de estimação, que garantem que o animal fique seguro durante o transporte. Além disso, as empresas especializadas seguem todas as regulamentações e normas de segurança aplicáveis ​​ao transporte de animais de estimação.</p>
            
            <h2 class="text-2xl font-bold font-heading mt-8 mb-4">Conforto e comodidade</h2>
            <p class="mb-4">Geralmente, os veículos possuem ar-condicionado e isolamento acústico para reduzir o estresse do animal. Além disso, a comodidade da coleta e entrega em domicílio facilita a rotina do tutor. As gaiolas são projetadas para que o animal possa ficar em pé, deitar e se mover com segurança.</p>
            <p class="mb-4">Optar por serviços profissionais é garantir que seu companheiro receba o melhor tratamento possível, mesmo fora de casa.</p>
            <p class="mb-8">Empresas especializadas oferecem opções de transporte em horários flexíveis, adequados às necessidades do dono e do animal de estimação.</p>
            <p class="mt-8 pt-4 border-t border-gray-200 text-sm text-gray-500">Fonte Original do Texto: <a href="https://7pet.com.br/blog/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">7Pet Blog</a></p>
        `
    },
    {
        id: 3,
        slug: "gatos-comportamento-felino",
        title: "Gatos - comportamento felino",
        excerpt: "Entenda como os gatos se comunicam, suas preferências e como proporcionar um ambiente saudável e feliz para eles.",
        category: "Comportamento",
        date: "01/03/2023",
        readTime: "6 min",
        image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop",
        author: {
            name: "7Pet",
            role: "Equipe Editorial",
            bio: "Observando o mundo através dos olhos dos felinos."
        },
        content: `
            <p class="mb-4">Olá leitores do blog da 7Pet! Hoje vamos falar sobre comportamento felino. Os gatos são animais fascinantes e cheios de personalidade, mas entender seus comportamentos pode ser um desafio. Continue lendo para aprender mais sobre como os gatos se comunicam, suas preferências e como podemos proporcionar um ambiente saudável e feliz para eles.</p>
            
            <h2 class="text-2xl font-bold font-heading mt-8 mb-4">Comunicação e linguagem corporal</h2>
            <p class="mb-4">Os gatos usam miados, ronronados e movimentos de cauda para se expressar. Uma cauda erguida indica confiança, enquanto uma eriçada pode sinalizar medo. Note que os gatos são animais territoriais e marcam seu espaço através de odores e arranhões. É por isso que é fundamental oferecer uma caixa de areia limpa e acessível e um arranhador.</p>
            
            <h2 class="text-2xl font-bold font-heading mt-8 mb-4">Preferências dos gatos</h2>
            <p class="mb-4">Alguns gatos adoram brinquedos com penas ou bolinhas, enquanto outros preferem arranhadores ou caixas de papelão. Observar o comportamento é essencial.</p>
            
            <h2 class="text-2xl font-bold font-heading mt-8 mb-4">Ambiente ideal</h2>
            <p class="mb-4">Ofereça sempre locais elevados para eles observarem e esconderijos seguros para relaxarem. Caixas de areia limpas e arranhadores verticais são fundamentais para o bem-estar diário.</p>
            <p class="mb-8">Entender seu gato é o primeiro passo para uma relação de confiança e amizade verdadeira.</p>
            <p class="mt-8 pt-4 border-t border-gray-200 text-sm text-gray-500">Fonte Original do Texto: <a href="https://7pet.com.br/blog/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">7Pet Blog</a></p>
        `
    },
    {
        id: 4,
        slug: "cuidado-pascoa-chocolate",
        title: "Cuidado na Páscoa: por que cães e gatos não podem ingerir chocolate",
        excerpt: "O chocolate contém substâncias tóxicas que podem ser fatais para os pets. Saiba o que evitar nesta época do ano.",
        category: "Saúde",
        date: "26/03/2021",
        readTime: "5 min",
        image: "https://images.unsplash.com/photo-1544434934-2e2321852033?q=80&w=2070&auto=format&fit=crop",
        author: {
            name: "Globo Rural",
            role: "Fonte Especializada",
            bio: "Informação técnica reproduzida para conscientização dos tutores."
        },
        content: `
            <p class="mb-4">A Páscoa chegou e muito além de um feriado religioso, é um momento de reuniões familiares, que, além de bacalhau, costuma ter muito chocolate. E quem tem animais de estimação muitas vezes não resiste e compartilha o doce com os bichos. Cuidado. O cacau, que é a base do chocolate, é rico em cafeína e teobromina, substâncias que não são metabolizadas pelos cães e gatos e pode levá-los a óbito, dependendo da quantidade ingerida.</p>
            
            <h2 class="text-2xl font-bold font-heading mt-8 mb-4">Riscos e Sintomas</h2>
            <p class="mb-4">Algumas das consequências da ingestão incluem tremores musculares, distensão abdominal, vômitos, diarreia, hemorragia interna e ataque cardíaco. É necessário ressaltar que tudo depende do tipo de chocolate, quantidade ingerida e características do animal, mas os riscos são maiores para filhotes, cães idosos ou de pequeno porte.</p>
            <p class="mb-4">O chocolate branco, que contém pouco cacau na sua receita, acaba sendo o menos tóxico para os animais, só que não deve ser oferecido, pois é rico em açúcar e gorduras, ingredientes que podem causar diarreia, problemas dentários, obesidade e serem fatais para cães diabéticos.</p>
            
            <h2 class="text-2xl font-bold font-heading mt-8 mb-4">Outros alimentos perigosos</h2>
            <ul class="list-disc pl-8 mb-8 space-y-2">
                <li><strong>Alho e Cebola:</strong> Possuem dissulfeto de n-propil, que pode causar destruição dos glóbulos vermelhos, levando à anemia.</li>
                <li><strong>Abacate:</strong> Contém Persin, uma substância tóxica que pode causar vômito e lesões gastrointestinais.</li>
                <li><strong>Leite:</strong> Causa flatulência, diarreia e vômito em adultos, pois é indigesto.</li>
                <li><strong>Ameixa, caqui e pêssego:</strong> Os caroços podem causar inflamação e obstrução intestinal.</li>
                <li><strong>Nozes de macadâmia:</strong> Podem afetar os músculos, o sistema digestivo e nervoso.</li>
            </ul>
            <p class="mb-8">Consulte sempre seu veterinário em caso de ingestão acidental.</p>
            <p class="mt-8 pt-4 border-t border-gray-200 text-sm text-gray-500">Fonte Original do Texto: <a href="https://revistagloborural.globo.com/Colunas/planeta-bicho/noticia/2019/04/cuidado-na-pascoa-por-que-caes-e-gatos-nao-podem-ingerir-chocolate.html" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Revista Globo Rural</a></p>
        `
    },
    {
        id: 5,
        slug: "rotinas-importantes-pets-pandemia",
        title: "Rotinas são importantes para os pets mesmo em tempos de pandemia",
        excerpt: "Conselhos do CRMV-SP sobre como manter o equilíbrio emocional dos animais em períodos de mudança.",
        category: "Comportamento",
        date: "01/03/2021",
        readTime: "6 min",
        image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2070&auto=format&fit=crop",
        author: {
            name: "CRMV-SP",
            role: "Fonte Oficial",
            bio: "Conselho Regional de Medicina Veterinária do Estado de São Paulo."
        },
        content: `
            <p class="mb-4">As mudanças constantes na rotina, como o home office e o isolamento social, podem gerar estresse e ansiedade nos animais. Veterinários alertam que alterações bruscas no dia a dia impactam diretamente o bem-estar dos pets.</p>
            
            <h2 class="text-2xl font-bold font-heading mt-8 mb-4">A Importância da Rotina</h2>
            <p class="mb-4">Os animais são condicionáveis e se sentem mais seguros com previsibilidade. O CRMV-SP orienta manter horários fixos para alimentação, passeios e brincadeiras, simulando a rotina normal de trabalho, para facilitar a adaptação futura quando o tutor voltar às atividades presenciais.</p>
            
            <h2 class="text-2xl font-bold font-heading mt-8 mb-4">Dicas de Adaptação</h2>
            <ul class="list-disc pl-8 mb-8 space-y-2">
                <li><strong>Dessensibilização:</strong> Habite o animal a ficar sozinho por curtos períodos, mesmo com você em casa.</li>
                <li><strong>Enriquecimento Ambiental:</strong> Ofereça brinquedos interativos e atividades que estimulem a mente do animal.</li>
                <li><strong>Exercícios:</strong> Mantenha a rotina de passeios (com segurança e higiene) para gastar energia e reduzir a ansiedade.</li>
            </ul>
            <p class="mb-8">Acompanhe as notícias oficiais e cuide da saúde mental do seu melhor amigo.</p>
            <p class="mt-8 pt-4 border-t border-gray-200 text-sm text-gray-500">Fonte Original do Texto: <a href="https://www.crmvsp.gov.br/arquivo_release/09.02.21.pdf" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">CRMV-SP</a></p>
        `
    },
    {
        id: 6,
        slug: "como-fazer-um-resgate",
        title: "COMO FAZER UM RESGATE",
        excerpt: "Guia essencial sobre como agir com segurança ao encontrar um animal em situação de risco.",
        category: "Educação",
        date: "22/02/2021",
        readTime: "8 min",
        image: "https://images.unsplash.com/photo-1599443015574-be5fe8a05783?q=80&w=2070&auto=format&fit=crop",
        author: {
            name: "Fórum Animal",
            role: "Fonte Editorial",
            bio: "Rede nacional de proteção e defesa animal."
        },
        content: `
            <p class="mb-4">Encontrar um animal ferido ou abandonado gera comoção, mas é preciso agir com racionalidade e segurança. O Fórum Nacional de Proteção e Defesa Animal (FNPDA) orienta sobre os procedimentos corretos.</p>
            
            <h2 class="text-2xl font-bold font-heading mt-8 mb-4">Passos para o Resgate Seguro</h2>
            <p class="mb-4"><strong>1. Segurança em Primeiro Lugar:</strong> Aproxime-se com cautela. Animais feridos podem reagir agressivamente por medo ou dor. Use uma toalha ou cobertor para conter o animal se necessário.</p>
            <p class="mb-4"><strong>2. Avaliação e Primeiros Cuidados:</strong> Observe o estado geral. Se houver ferimentos graves, não medique por conta própria. Mantenha-o aquecido e tranquilo.</p>
            <p class="mb-4"><strong>3. Atendimento Veterinário:</strong> Leve o animal imediatamente a uma clínica veterinária. Ele precisará de exames, vacinas e tratamento para eventuais doenças.</p>
            
            <h2 class="text-2xl font-bold font-heading mt-8 mb-4">O que fazer após o resgate?</h2>
            <p class="mb-4">Se não puder adotá-lo, procure lares temporários ou ONGs parceiras para ajudar na divulgação da adoção. Lembre-se: ao resgatar, você assume a responsabilidade pela vida daquele ser até que ele encontre um lar definitivo.</p>
            <p class="mb-8">Para denúncias de maus-tratos, acione a polícia.</p>
            <p class="mt-8 pt-4 border-t border-gray-200 text-sm text-gray-500">Fonte Original do Texto: <a href="https://forumanimal.org/como-fazer-um-resgate/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Fórum Animal</a></p>
        `
    },
    {
        id: 7,
        slug: "denuncie-maus-tratos",
        title: "DENUNCIE MAUS-TRATOS",
        excerpt: "Saiba como identificar sinais de crueldade e quais os canais oficiais para registro de denúncias.",
        category: "Notícias",
        date: "22/02/2021",
        readTime: "5 min",
        image: "https://images.unsplash.com/photo-1510771463140-d5c2a821941c?q=80&w=2036&auto=format&fit=crop",
        author: {
            name: "7Pet",
            role: "Equipe Editorial",
            bio: "Compromisso com a integridade e direitos dos animais."
        },
        content: `
            <p class="mb-4">Maus-tratos a animais é crime previsto no Artigo 32 da Lei Federal nº 9.605/98 (Lei de Crimes Ambientais). A pena inclui detenção e multa. Não se cale diante da crueldade.</p>
            
            <h2 class="text-2xl font-bold font-heading mt-8 mb-4">O que configura maus-tratos?</h2>
            <p class="mb-4">Ferimentos, agressões físicas, manter o animal em lugares anti-higiênicos ou sem ventilação, privação de água e comida, abandono, e obrigar o animal a trabalho excessivo.</p>
            
            <h2 class="text-2xl font-bold font-heading mt-8 mb-4">Como Denunciar</h2>
            <p class="mb-4">É fundamental reunir provas (fotos, vídeos, testemunhas). As denúncias podem ser feitas através de:</p>
            <ul class="list-disc pl-8 mb-4 space-y-2">
                <li><strong>Polícia Militar (190):</strong> Em casos de flagrante e emergência.</li>
                <li><strong>Polícia Civil:</strong> Registre um Boletim de Ocorrência na delegacia mais próxima.</li>
                <li><strong>DEPA (Delegacia Eletrônica de Proteção Animal):</strong> Em São Paulo, use o site oficial para denúncias online.</li>
                <li><strong>Ministério Público:</strong> Para denúncias de omissão de órgãos públicos ou casos complexos.</li>
                <li><strong>IBAMA (0800 61 8080):</strong> Para animais silvestres.</li>
            </ul>
            <p class="mb-8 font-bold italic">Sua denúncia pode salvar uma vida. Exerça sua cidadania.</p>
            <p class="mt-8 pt-4 border-t border-gray-200 text-sm text-gray-500">Fonte Original do Texto: <a href="https://forumanimal.org/denuncie-maus-tratos/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Fórum Animal</a></p>
        `
    },
    {
        id: 8,
        slug: "golden-retriever-tudo-sobre",
        title: "Golden Retriever: Tudo sobre uma das raças mais queridas",
        excerpt: "Conheça a história, temperamento e cuidados essenciais com este gigante de coração dourado.",
        category: "Raças",
        date: "02/02/2021",
        readTime: "10 min",
        image: "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=2024&auto=format&fit=crop",
        author: {
            name: "7Pet",
            role: "Especialista em Raças",
            bio: "Estudando a genética e o comportamento canino."
        },
        content: `
            <p class="mb-4">O Golden Retriever é conhecido por seus pelos dourados, sendo uma das raças mais populares por seu companheirismo. Porém, é sempre importante entender as características dessa linhagem para saber quais cuidados adotar e garantir que a família terá as melhores condições para acolher o cão. Quer saber mais sobre esses cachorros adoráveis? Então, continue com a gente e confira o nosso guia completo sobre a raça!</p>
            
            <h2 class="text-2xl font-bold font-heading mt-8 mb-4">Conheça a história e origem do Golden Retriever</h2>
            <p class="mb-4">A raça Golden Retriever foi desenvolvido na Escócia, Reino Unido, em uma propriedade serrana que pertencia ao Sir Dudley Majoribanks, que ficou conhecido como Senhor Tweedmouth. O objetivo era criar uma raça que fosse boa na caça de aves aquáticas, com um olfato aguçado e um ótimo temperamento. Foram feitos cruzamentos de algumas raças, entre elas o Retriever e o Tweed Water Spaniel, que já está extinta.</p>
            
            <h2 class="text-2xl font-bold font-heading mt-8 mb-4">Principais características</h2>
            <p class="mb-4">O Golden Retriever é um cão de grande porte, dócil, com olhos escuros e orelhas triangulares. Vivem entre 10 e 12 anos. O peso varia entre 25kg e 34kg.</p>
            
            <h2 class="text-2xl font-bold font-heading mt-8 mb-4">Cuidados Essenciais</h2>
            <ul class="list-disc pl-8 mb-4 space-y-2">
                <li><strong>Higiene:</strong> Escovação semanal e banhos regulares.</li>
                <li><strong>Saúde:</strong> Atenção à displasia de quadril e problemas oculares.</li>
                <li><strong>Exercícios:</strong> Necessitam de muita atividade física diária.</li>
            </ul>
            <p class="mb-8">Se você busca um cão confiável, leal e amigável, o Golden Retriever é uma ótima opção!</p>
            <p class="mt-8 pt-4 border-t border-gray-200 text-sm text-gray-500">Fonte Original do Texto: <a href="https://7pet.com.br/blog/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">7Pet Blog</a></p>
        `
    },
    {
        id: 9,
        slug: "quatro-sinais-cachorro-pulgas",
        title: "Quatro sinais de que seu cachorro tem pulgas",
        excerpt: "Identifique a infestação precocemente e evite dermatites e anemias no seu melhor amigo.",
        category: "Saúde",
        date: "02/02/2021",
        readTime: "6 min",
        image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=2069&auto=format&fit=crop",
        author: {
            name: "Petlove",
            role: "Dicas de Saúde",
            bio: "Parceiro editorial focado em prevenção."
        },
        content: `
            <p class="mb-4">As pulgas são minúsculas mas causam grandes estragos. Estar atento aos sinais é o segredo para o controle efetivo da infestação.</p>
            
            <h2 class="text-2xl font-bold font-heading mt-8 mb-4">Sinais de alerta</h2>
            <ul class="list-decimal pl-8 mb-8 space-y-4">
                <li><strong>Coceira súbita:</strong> O animal se morde ou coça freneticamente, especialmente na base da cauda. Isso pode ser um indicativo claro.</li>
                <li><strong>Ovos de pulgas:</strong> Pequenos grãos brancos, semelhantes a areia, emaranhados nos pelos.</li>
                <li><strong>"Cocô de pulga":</strong> Pontinhos pretos no pelo (fezes das pulgas com sangue digerido). Se você passar um pente fino e caírem esses pontinhos, é um sinal forte.</li>
                <li><strong>Irritação e Picadas:</strong> Manchas vermelhas na pele, especialmente barriga e axilas, causadas pela picada.</li>
            </ul>
            <p class="mb-4">Além da coceira, pulgas podem causar anemia, verminoses e dermatites alérgicas (DAPP).</p>
            <p class="mb-8">Mantenha a desparasitação em dia e limpe sempre o ambiente.</p>
            <p class="mt-8 pt-4 border-t border-gray-200 text-sm text-gray-500">Fonte Original do Texto: <a href="https://www.petlove.com.br/dicas/quatro-sinais-que-seu-cachorro-tem-pulgas" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Petlove</a></p>
        `
    },
    {
        id: 10,
        slug: "5-animacoes-empatia-criancas",
        title: "5 animações para despertar nas crianças a empatia pelos animais",
        excerpt: "Indicações de filmes que educam as novas gerações sobre compaixão e respeito animal.",
        category: "Educação",
        date: "28/01/2021",
        readTime: "7 min",
        image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop",
        author: {
            name: "World Animal Protection",
            role: "Fonte Editorial",
            bio: "Organização global de proteção animal."
        },
        content: `
            <p class="mb-4">Procurando uma sugestão para a próxima noite de cinema com a família? Prepare a pipoca e curta nossas dicas de filmes que compartilham mensagens de compaixão e respeito pelos animais.</p>
            
            <h2 class="text-2xl font-bold font-heading mt-8 mb-4">Filmes Recomendados</h2>
            <ul class="list-disc pl-8 mb-8 space-y-4">
                <li><strong>Horton e o Mundo dos Quem:</strong> O elefante Horton protege uma comunidade microscópica num grão de poeira. O filme ensina que "uma pessoa é uma pessoa, não importa o quão pequena".</li>
                <li><strong>O Mundo Encantado de Annabelle:</strong> Uma bezerra que sonha em voar no Natal e sua amizade com um menino.</li>
                <li><strong>Irmão Urso:</strong> Um caçador é transformado em urso e aprende a ver o mundo pelos olhos da "presa", desenvolvendo empatia.</li>
                <li><strong>O Cão e a Raposa:</strong> Uma amizade improvável que desafia a natureza e o preconceito.</li>
                <li><strong>O Touro Ferdinando:</strong> O touro gentil que se recusa a lutar em touradas, preferindo cheirar flores. Uma lição contra a violência.</li>
            </ul>
            <p class="mb-8">Assista em família e converse sobre as ações dos personagens com seus filhos!</p>
            <p class="mt-8 pt-4 border-t border-gray-200 text-sm text-gray-500">Fonte Original do Texto: <a href="https://www.worldanimalprotection.org.br/blogs/5-animacoes-para-despertar-nas-criancas-empatia-pelos-animais" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">World Animal Protection</a></p>
        `
    },
    {
        id: 11,
        slug: "guarda-responsavel-índices-abandono",
        title: "Guarda-responsável é chave para reduzir os índices de abandono de pets",
        excerpt: "Análise sobre como o comprometimento dos tutores influencia a saúde pública e o bem-estar animal.",
        category: "Notícias",
        date: "28/01/2021",
        readTime: "12 min",
        image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=2086&auto=format&fit=crop",
        author: {
            name: "CRMV-SP",
            role: "Fonte Oficial",
            bio: "Promovendo a conscientização através da medicina veterinária legal."
        },
        content: `
            <p class="mb-4">Se já havia uma carência de dados estatísticos oficiais sobre abandono de animais no Brasil, não foi durante uma pandemia que esta lacuna foi suprida. O CRMV-SP lança a campanha “Nunca abandone seu melhor amigo!” para combater o abandono.</p>
            
            <h2 class="text-2xl font-bold font-heading mt-8 mb-4">Mitos sobre a Covid-19</h2>
            <p class="mb-4">Não há evidências de que pets transmitam o novo coronavírus. O abandono por medo é infundado e cruel. A higiene básica é suficiente para prevenção.</p>
            
            <h2 class="text-2xl font-bold font-heading mt-8 mb-4">O que é Abandono?</h2>
            <p class="mb-4">Além de deixar na rua, a negligência domiciliar (manter acorrentado, sem comida, sem higiene) também é abandono e crime (Lei 9.605/98). Animais abandonados sofrem fome, medo e risco de atropelamento, além de serem vetor de zoonoses.</p>
            <p class="mb-4">A guarda responsável começa antes da adoção, avaliando se a família tem condições de cuidar do animal por toda a sua vida.</p>
            <p class="mb-8">Seja consciente. Adote com responsabilidade.</p>
            <p class="mt-8 pt-4 border-t border-gray-200 text-sm text-gray-500">Fonte Original do Texto: <a href="https://www.crmvsp.gov.br/site/noticia_ver.php?id_noticia=7317" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">CRMV-SP</a></p>
        `
    },
    {
        id: 12,
        slug: "mutirao-castracao-animal-sp",
        title: "mutirão de castração animal sp",
        excerpt: "Novas resoluções do CRMV-SP buscam garantir segurança e ética em programas de castração em massa.",
        category: "Educação",
        date: "28/01/2021",
        readTime: "8 min",
        image: "https://images.unsplash.com/photo-1576091160550-217359f42f8c?q=80&w=2070&auto=format&fit=crop",
        author: {
            name: "7Pet",
            role: "Equipe Editorial",
            bio: "Informando sobre políticas públicas de saúde pet."
        },
        content: `
            <p class="mb-4">Com a Resolução nº 2.579/16, o CRMV-SP normatizou os procedimentos de castração de cães e gatos em mutirões no estado. O objetivo é garantir a segurança sanitária e o bem-estar dos animais nesses eventos coletivos.</p>
            
            <h2 class="text-2xl font-bold font-heading mt-8 mb-4">Como Funciona</h2>
            <p class="mb-4">Instituições devem submeter um projeto ao CRMV-SP com 60 dias de antecedência. O projeto é analisado tecnicamente para verificar se atende às normas de higiene, equipamentos e equipe (médicos-veterinários responsáveis).</p>
            
            <h2 class="text-2xl font-bold font-heading mt-8 mb-4">Exigências do Projeto</h2>
            <ul class="list-disc pl-8 mb-4 space-y-2">
                <li>Endereço adequado e datas;</li>
                <li>Atividades de educação em guarda responsável;</li>
                <li>Descrição de equipamentos, anestesia e triagem;</li>
                <li>Equipe completa com registro no CRMV.</li>
            </ul>
            <p class="mb-8">A castração é vital para o controle populacional, mas deve ser feita com ética e segurança.</p>
            <p class="mt-8 pt-4 border-t border-gray-200 text-sm text-gray-500">Fonte Original do Texto: <a href="https://www.crmvsp.gov.br/site/mult_castrat.php" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">CRMV-SP</a></p>
        `
    },
    {
        id: 13,
        slug: "crimes-contra-animais-quarentena",
        title: "Crimes contra animais também aumentam na quarentena e exigem atenção redobrada",
        excerpt: "O isolamento social trouxe à tona o aumento da violência doméstica, onde os pets frequentemente são as primeiras vítimas.",
        category: "Notícias",
        date: "28/01/2021",
        readTime: "15 min",
        image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop",
        author: {
            name: "CRMV-SP",
            role: "Fonte Técnica",
            bio: "Análise sociológica e veterinária sobre o elo da violência."
        },
        content: `
            <p class="mb-4">Ocorrências podem ser sinalizadoras também de violência doméstica. A “Teoria do Elo” aponta para um padrão: autores de crueldades contra animais são potenciais agressores de pessoas. Durante a quarentena, dados mostraram aumento na violência doméstica e contra pets.</p>
            
            <h2 class="text-2xl font-bold font-heading mt-8 mb-4">O Elo da Violência</h2>
            <p class="mb-4">Estudos mostram que 34% dos autuados por maus-tratos a animais já possuíam registros por outros crimes. Frequentemente, o agressor usa a violência contra o pet para intimidar psicologicamente seus familiares (mulheres e crianças).</p>
            
            <h2 class="text-2xl font-bold font-heading mt-8 mb-4">Identificação e Denúncia</h2>
            <p class="mb-4">Médicos-veterinários e vizinhos devem estar atentos a sinais. Clínicas têm recebido animais com lesões graves de origem suspeita. É dever do profissional e do cidadão denunciar para interromper o ciclo de violência.</p>
            <p class="mb-8">Denuncie na DEPA ou Polícia Militar (190).</p>
            <p class="mt-8 pt-4 border-t border-gray-200 text-sm text-gray-500">Fonte Original do Texto: <a href="https://www.crmvsp.gov.br/arquivo_release/22.05.20_crimes_contra_animais_tambem_aumentam_na_quarentena_e_exigem_atencao_redobrada.pdf" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">CRMV-SP</a></p>
        `
    },
    {
        id: 14,
        slug: "evitar-ataque-animais-peconhentos",
        title: "Como evitar que os pets sejam atacados por animais peçonhentos",
        excerpt: "Verão aumenta o surgimento de cobras e aranhas. Guia de prevenção e Primeiros Socorros.",
        category: "Saúde",
        date: "28/01/2021",
        readTime: "10 min",
        image: "https://images.unsplash.com/photo-1528642463367-1262d08a9ad0?q=80&w=2071&auto=format&fit=crop",
        author: {
            name: "CRMV-SP",
            role: "Fonte Técnica",
            bio: "Orientações de medicina veterinária e saúde ambiental."
        },
        content: `
            <p class="mb-4">Casos de picadas de serpente e aranha aumentam no verão devido ao calor e umidade. Pets curiosos são vítimas frequentes. Mantenha quintais limpos e evite entulhos que sirvam de abrigo para escorpiões e cobras.</p>
            
            <h2 class="text-2xl font-bold font-heading mt-8 mb-4">Primeiros Socorros: O que fazer?</h2>
            <ul class="list-disc pl-8 mb-4 space-y-2">
                <li>Procure atendimento veterinário com URGÊNCIA. O tempo é crucial.</li>
                <li>Mantenha o animal calmo.</li>
                <li>Se possível, tire foto do animal agressor (com segurança) para identificação e escolha do soro.</li>
            </ul>
            
            <h2 class="text-2xl font-bold font-heading mt-8 mb-4">O que NÃO fazer?</h2>
            <p class="mb-4">Nunca fure, corte, chupe o local da picada ou faça torniquetes. Isso agrava a situação.</p>
            <p class="mb-8">Sintomas comuns: inchaço, dor, sangramento e apatia.</p>
            <p class="mt-8 pt-4 border-t border-gray-200 text-sm text-gray-500">Fonte Original do Texto: <a href="https://www.crmvsp.gov.br/arquivo_release/28.01.21.pdf" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">CRMV-SP</a></p>
        `
    },
    {
        id: 15,
        slug: "verao-cuidados-redobrados-dengue",
        title: "Verão exige cuidados redobrados com a dengue",
        excerpt: "Impedir o acúmulo de água em recipientes dos pets é vital para a saúde de toda a família.",
        category: "Saúde",
        date: "28/01/2021",
        readTime: "6 min",
        image: "https://images.unsplash.com/photo-1590611380053-da6447021fbb?q=80&w=2070&auto=format&fit=crop",
        author: {
            name: "7Pet",
            role: "Dicas Preventivas",
            bio: "Saúde única: animal, humana e ambiental."
        },
        content: `
            <p class="mb-4">A dengue é um sério problema de saúde pública. O médico-veterinário atua na prevenção identificando riscos ambientais. Eliminar criadouros do Aedes aegypti dentro de casa é essencial.</p>
            
            <h2 class="text-2xl font-bold font-heading mt-8 mb-4">Cuidado com os potes dos pets</h2>
            <p class="mb-4">Potes de água, se não lavados corretamente, podem virar focos. Troque a água diariamente e lave as bordas com esponja para remover ovos do mosquito.</p>
            <p class="mb-4">Evite pratos de plantas e recipientes que acumulem chuva no quintal dos animais.</p>
            <p class="mb-8">Dengue e Covid-19 podem ter sintomas confundíveis, então atenção redobrada aos sinais.</p>
            <p class="mt-8 pt-4 border-t border-gray-200 text-sm text-gray-500">Fonte Original do Texto: <a href="https://www.crmvsp.gov.br/arquivo_release/28.01.212.pdf" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">CRMV-SP</a></p>
        `
    },
    {
        id: 16,
        slug: "castracao-gatos-machos-vantagens",
        title: "Castração de gatos machos - As vantagens de se castrar um gato macho",
        excerpt: "Além de evitar a reprodução indesejada, a castração melhora o comportamento e prolonga a vida do felino.",
        category: "Saúde",
        date: "30/12/2020",
        readTime: "8 min",
        image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=2070&auto=format&fit=crop",
        author: {
            name: "CachorroGato",
            role: "Parceiro editorial",
            bio: "Conteúdo técnico sobre clínica de pequenos animais."
        },
        content: `
            <p class="mb-4">A castração é muito indicada para controle populacional e saúde. Em machos, a remoção dos testículos interrompe a produção de testosterona, tornando-o infértil e reduzindo comportamentos típicos.</p>
            
            <h2 class="text-2xl font-bold font-heading mt-8 mb-4">Benefícios</h2>
            <ul class="list-disc pl-8 mb-4 space-y-2">
                <li>Elimina/Reduz marcação de território com urina (odor forte).</li>
                <li>Diminui fugas e brigas por fêmeas ou território.</li>
                <li>Aumenta a expectativa de vida (gatos castrados vivem mais).</li>
                <li>Gatos ficam mais caseiros e menos agressivos.</li>
            </ul>
            <p class="mb-4">Cuidados pós: ração específica para castrados e incentivo à ingestão de água para evitar cálculos.</p>
            <p class="mt-8 pt-4 border-t border-gray-200 text-sm text-gray-500">Fonte Original do Texto: <a href="https://www.cachorrogato.com.br/gato/castracao-gatos-machos/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">CachorroGato</a></p>
        `
    },
    {
        id: 17,
        slug: "educacao-e-conscientizacao",
        title: "Educação e conscientização",
        excerpt: "Promover o respeito às diferenças entre as espécies é o primeiro passo para uma sociedade mais humanitária.",
        category: "Educação",
        date: "30/12/2020",
        readTime: "9 min",
        image: "https://images.unsplash.com/photo-1548767791-514d3ecfd3df?q=80&w=2070&auto=format&fit=crop",
        author: {
            name: "ARCA Brasil",
            role: "Fonte Editorial",
            bio: "Associação de Reabilitação e Cuidado Animal."
        },
        content: `
            <p class="mb-4">A educação ambiental deve incluir a consciência sobre os animais como seres sencientes. Respeitar as diferenças é fundamental. Não devemos antropomorfizar excessivamente (tratar como humano) os pets.</p>
            
            <h2 class="text-2xl font-bold font-heading mt-8 mb-4">Mitos e Verdades</h2>
            <ul class="list-disc pl-8 mb-4 space-y-2">
                <li><strong>Castração:</strong> Não é "frustração", é amor e controle populacional ético.</li>
                <li><strong>Humanização:</strong> Roupa no frio é ok; joias e tinturas são estressantes.</li>
                <li><strong>Adoção:</strong> Animais adultos também se adaptam e amam.</li>
            </ul>
            <p class="mb-8">Eduque as crianças para respeitar os animais e teremos adultos melhores.</p>
            <p class="mt-8 pt-4 border-t border-gray-200 text-sm text-gray-500">Fonte Original do Texto: <a href="https://arcabrasil.org.br/index.php/educacao-caes/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">ARCA Brasil</a></p>
        `
    },
    {
        id: 18,
        slug: "noticias-novidades-inauguracao-blog",
        title: "NOTÍCIAS E NOVIDADES no blog",
        excerpt: "Bem-vindo ao novo portal de informações da 7Pet. Dicas, notícias e muito carinho animal.",
        category: "Notícias",
        date: "29/12/2020",
        readTime: "3 min",
        image: "https://images.unsplash.com/photo-1494947665470-20322015e3a8?q=80&w=2070&auto=format&fit=crop",
        author: {
            name: "7Pet",
            role: "Equipe Oficial",
            bio: "Lançando nosso canal direto de comunicação com você."
        },
        content: `
            <p class="mb-4">É com enorme alegria que inauguramos este espaço! Aqui na 7Pet, acreditamos que informação de qualidade salva vidas e fortalece o elo entre você e seu melhor amigo.</p>
            <p class="mb-4">Teremos atualizações semanais com especialistas, depoimentos de resgastes e guias completos sobre raças e comportamento. Siga-nos nas redes sociais e não perca nenhuma novidade do universo animal.</p>
            <p class="mb-8 font-bold text-primary">Seja bem-vindo à família 7Pet!</p>
            <p class="mt-8 pt-4 border-t border-gray-200 text-sm text-gray-500">Fonte Original do Texto: <a href="https://7pet.com.br/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">7Pet</a></p>
        `
    }
];
