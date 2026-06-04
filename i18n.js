/**
 * i18n.js — Internacionalização / Internationalization
 * Press Kit: Normal Dev Guy – Inside Kenney World
 *
 * Idiomas suportados / Supported languages:
 *   en  → English
 *   pt  → Português (Brasil)
 *
 * Para adicionar um idioma:
 *   1. Adicione um novo objeto em `translations` com a chave do idioma (ex: "es").
 *   2. Adicione um botão .lang-btn com data-lang="es" no nav do HTML.
 */

const translations = {
  en: {
    pageTitle:       "Normal Dev Guy: Inside Kenney World",

    // NAV
    navLogo:         "PRESS KIT",
    navAbout:        "About",
    navFacts:        "Fact Sheet",
    navFeatures:     "Features",
    navStory:        "Story",
    navContact:      "Contact",

    apresentationtitle: "09_PDF_PRESSKIT",
    apresentationkit: "Press Kit",
    navPressKit: "Press Kit",

    // HERO
    heroBadge:       "▶ PRESS KIT — JUNE 2026",
    heroDesc:        "A 2D pixel art platformer where a developer jumps inside his own game — and must fix bugs by playing minigames.",
    metaRelease:     "RELEASE:",
    metaPlatform:    "PLATFORM:",
    metaGenre:       "GENRE:",
    metaGenreVal:    "Platformer / Casual",
    metaPrice:       "PRICE:",
    metaPriceVal:    "1.99 USD",
    heroScroll:      "▼ SCROLL DOWN ▼",

    // ABOUT
    aboutLabel:      "// 01_ABOUT",
    aboutTitle:      "What is",
    aboutP1:         "<strong>Normal Dev Guy – Inside Kenney World</strong> is an indie 2D platformer that turns the day-to-day challenges of game development into a playable adventure. The protagonist, Norman, is just your average indie developer — until the moment he literally jumps inside his own game to test it.",
    aboutP2:         "What starts as a routine playtest quickly turns into pixelated chaos. Bugs don't just crash the game — they become obstacles, enemies, and puzzles. The only way to fix them? Playing minigames.",
    aboutP3:         "Packed with <strong>Easter eggs</strong>, game engine references, cats, and an absurd amount of coffee, the game is a love letter to indie developers all over the world.",
    aboutQuote:      '"A game where fixing bugs IS the gameplay — relatable for any dev, fun for everyone."',

    // NUMBERS
    numLevels:       "Unique Levels",
    numMinigames:    "Exclusive Minigames",
    numLanguages:    "Supported Languages",
    numStorage:      "Storage Required",

    // FACT SHEET
    factsLabel:      "// 02_FACT_SHEET",
    factsTitle:      "Fact",
    factsTitleEm:    "Sheet",
    factKeyTitle:    "Title",
    factKeyDev:      "Developer",
    factKeyPub:      "Publisher",
    factKeyRelease:  "Release Date",
    factValRelease:  "June 26, 2026",
    factKeyPlatforms:"Platforms",
    factKeyGenre:    "Genre",
    factValGenre:    "Adventure / Casual / Indie / 2D Platformer",
    factKeyMode:     "Mode",
    factValMode:     "Singleplayer",
    factKeySteam:    "Steam Features",
    factValSteam:    "Achievements · Cloud · Leaderboards · Family Sharing",
    factKeySteamPage:"Steam Page",
    factKeyDemo:     "Demo Available",
    factValDemo:     "Link",
    factKeyStorage:  "Storage",
    factKeyController:"Controller Support",
    factValController:"Yes",

    // FEATURES
    featLabel:       "// 03_FEATURES",
    featTitle:       "What Makes It",
    featTitleEm:     "Special",
    feat1Name:       "2D Pixel Art Platformer",
    feat1Desc:       "Classic side-scrolling gameplay with charm, personality, and precise controls across 9 handcrafted levels.",
    feat2Name:       "Bug-Fixing Minigames",
    feat2Desc:       '6 unique and varied minigames are the core mechanic — each one a creative way to "fix" in-game bugs.',
    feat3Name:       "Easter Eggs Galore",
    feat3Desc:       "Packed with references and inside jokes for anyone who has ever opened a game engine. A love letter to devs.",
    feat4Name:       "Varied Enemies",
    feat4Desc:       "Each level brings new enemy types that keep gameplay fresh and surprising throughout the adventure.",
    feat5Name:       "Cats!",
    feat5Desc:       "Because no indie game is complete without feline companions. That's enough said.",
    feat6Name:       "Lots of Coffee",
    feat6Desc:       "The universal fuel of game developers, faithfully represented throughout Norman's journey.",
    feat7Name:       "12 Languages",
    feat7Desc:       "Full interface and subtitle support in English, Portuguese (BR & PT), Spanish, French, Italian, German, Russian, Korean, Japanese, Chinese, and Arabic.",
    feat8Name:       "Low-Spec Friendly",
    feat8Desc:       "Designed to run on almost any PC — integrated graphics and older processors are fully supported.",

    // STORY
    storyLabel:      "// 04_GAME_STORY",
    storyTitle:      "The",
    storyTitleEm:    "Story",
    storyP1:         "Norman is just your average indie developer — overworked, over-caffeinated, and passionate about what he does. One day, instead of testing his game the normal way, he makes a decision that will change everything: he jumps inside his own game.",
    storyP2:         "What awaits him is not a polished experience — it's the raw, bug-ridden guts of a game in development. And the only way to fix them is from the inside out.",
    storyP3:         "Armed with nothing but his wits (and an inexplicable supply of coffee), Norman must tackle each bug head-on — through a series of crazy, unexpected minigames. It's a developer's nightmare turned into an adventure.",

    // TAGS
    tagsLabel:       "// 05_STEAM_TAGS",
    tagAdventure:    "Adventure",
    tagCasual:       "Casual",
    tagArcade:       "Arcade",
    tagPlatformer:   "Platformer",
    tagSideScroller: "Side Scroller",
    tagPixel:        "Pixel Graphics",
    tagFantasy:      "Fantasy",
    tagSatire:       "Satire",
    tagLinear:       "Linear",
    tagSingle:       "Singleplayer",

    // LANGUAGES
    langsLabel:      "// 06_LANGUAGES",
    langsTitle:      "Localization",
    langsNote:       "* Interface + Subtitles for all languages. No full audio dubbing.",

    // SYSTEM REQUIREMENTS
    reqLabel:        "// 07_SYSTEM_REQUIREMENTS",
    reqTitle:        "System",
    reqTitleEm:      "Requirements",
    reqThComponent:  "Component",
    reqThMinimum:    "Minimum",
    reqOS:           "OS",
    reqCPU:          "Processor",
    reqRAM:          "Memory",
    reqGPU:          "Graphics",
    reqGPUVal:       "Integrated graphics compatible with DirectX",
    reqDX:           "Version 11",
    reqStorage:      "Storage",
    reqStorageVal:   "400 MB available space",
    reqSound:        "Sound",
    reqSoundVal:     "Any DirectX compatible sound card",
    reqNotes:        "Notes",
    reqNotesVal:     "Low-spec PC friendly. Designed to run on most systems.",

    // MEDIA
    mediaLabel:      "// 08_MEDIA",
    mediaTitle:      "Screenshots",
    mediaTitleEm:    "& Videos",
    mediaKeyArt:     "KEY ART & CAPSULE",
    mediaScreenshots:"SCREENSHOTS",
    mediaVideos:     "VIDEOS & GIFS",
    mediaSprites:    "CHARACTERS & SPRITES",
    mediaTrailer:    "GAMEPLAY TRAILER",
    trailerDuration: "Duration",
    trailerLocal:    "Local file",
    mediaOpen:       "↗ Open",
    mediaReplace:    "replace with local file",
    mediaNoteLocal:  "💡 To host locally: save your images/videos in an <code>assets/</code> folder next to index.html and update the <code>src</code> attributes.",

    // NAV
    navMedia:        "Media",

    // CONTACT
    contactTitle:    "GET IN TOUCH",
    contactSub:      "For press inquiries, review keys, interviews, or any media request, reach out via the Steam page or publisher contact at leandrorogalabritezltda@gmail.com. We're happy to provide screenshots, additional materials, or a press key.",
    btnSteam:        "▶ STEAM PAGE",
    btnDemo:         "DOWNLOAD DEMO",

    // FOOTER
    footerRights:    "All rights reserved.",
    footerRelease:   "Planned Release:",
  },

  pt: {
    pageTitle:       "Normal Dev Guy: Inside Kenney World",

    // NAV
    navLogo:         "PRESS KIT",
    navAbout:        "Sobre",
    navFacts:        "Ficha Técnica",
    navFeatures:     "Recursos",
    navStory:        "História",
    navContact:      "Contato",

    apresentationtitle: "09_PDF_APRESENTACAO",
    apresentationkit: "Kit de Apresentação",
    navPressKit: "Kit Apresentação",

    // HERO
    heroBadge:       "▶ PRESS KIT — JUNHO 2026",
    heroDesc:        "Um jogo platforma 2D em pixel art onde um desenvolvedor entra dentro do próprio jogo — e precisa corrigir bugs jogando minigames.",
    metaRelease:     "LANÇAMENTO:",
    metaPlatform:    "PLATAFORMA:",
    metaGenre:       "GÊNERO:",
    metaGenreVal:    "Plataforma / Casual",
    metaPrice:       "PREÇO:",
    metaPriceVal:    "4,99 BRL",
    heroScroll:      "▼ ROLAR PARA BAIXO ▼",

    // ABOUT
    aboutLabel:      "// 01_SOBRE",
    aboutTitle:      "O que é",
    aboutP1:         "<strong>Normal Dev Guy – Inside Kenney World</strong> é um jogo platforma 2D indie que transforma os desafios do dia a dia do desenvolvimento de jogos em uma aventura jogável. O protagonista, Norman, é um desenvolvedor indie comum — até o momento em que ele literalmente entra no próprio jogo para testá-lo.",
    aboutP2:         "O que começa como um playtest de rotina rapidamente vira caos pixelado. Os bugs não travam apenas o jogo — eles se tornam obstáculos, inimigos e puzzles. A única forma de resolvê-los? Jogando minigames.",
    aboutP3:         "Repleto de <strong>Easter eggs</strong>, referências a engines de jogos, gatos e uma quantidade absurda de café, o jogo é uma carta de amor para desenvolvedores indie do mundo inteiro.",
    aboutQuote:      '"Um jogo onde corrigir bugs É a gameplay — identificável para qualquer dev, divertido para todos."',

    // NUMBERS
    numLevels:       "Fases Únicas",
    numMinigames:    "Minigames Exclusivos",
    numLanguages:    "Idiomas Suportados",
    numStorage:      "Armazenamento Necessário",

    // FACT SHEET
    factsLabel:      "// 02_FICHA_TÉCNICA",
    factsTitle:      "Ficha",
    factsTitleEm:    "Técnica",
    factKeyTitle:    "Título",
    factKeyDev:      "Desenvolvedor",
    factKeyPub:      "Publicador",
    factKeyRelease:  "Data de Lançamento",
    factValRelease:  "26 de junho de 2026",
    factKeyPlatforms:"Plataformas",
    factKeyGenre:    "Gênero",
    factValGenre:    "Aventura / Casual / Indie / Plataforma 2D",
    factKeyMode:     "Modo",
    factValMode:     "Um jogador",
    factKeySteam:    "Recursos Steam",
    factValSteam:    "Conquistas · Nuvem · Placar · Compartilhamento Familiar",
    factKeySteamPage:"Página Steam",
    factKeyDemo:     "Demo Disponível",
    factValDemo:     "Link",
    factKeyStorage:  "Armazenamento",
    factKeyController:"Suporte a Controle",
    factValController:"Sim",

    // FEATURES
    featLabel:       "// 03_RECURSOS",
    featTitle:       "O que o torna",
    featTitleEm:     "Especial",
    feat1Name:       "Plataforma 2D em Pixel Art",
    feat1Desc:       "Gameplay clássica de side-scrolling com charme, personalidade e controles precisos em 9 fases criadas à mão.",
    feat2Name:       "Minigames de Correção de Bugs",
    feat2Desc:       '6 minigames únicos e variados são a mecânica central — cada um uma forma criativa de "corrigir" os bugs do jogo.',
    feat3Name:       "Easter Eggs em Abundância",
    feat3Desc:       "Cheio de referências e piadas internas para quem já abriu uma game engine. Uma carta de amor aos devs.",
    feat4Name:       "Inimigos Variados",
    feat4Desc:       "Cada fase traz novos tipos de inimigos que mantêm o gameplay fresco e surpreendente durante toda a aventura.",
    feat5Name:       "Gatos!",
    feat5Desc:       "Porque nenhum jogo indie está completo sem companheiros felinos. É o suficiente.",
    feat6Name:       "Muito Café",
    feat6Desc:       "O combustível universal dos desenvolvedores de jogos, fielmente representado ao longo da jornada de Norman.",
    feat7Name:       "12 Idiomas",
    feat7Desc:       "Suporte completo de interface e legendas em inglês, português (BR e PT), espanhol, francês, italiano, alemão, russo, coreano, japonês, chinês e árabe.",
    feat8Name:       "Amigável para PCs Modestos",
    feat8Desc:       "Projetado para rodar em quase qualquer PC — gráficos integrados e processadores mais antigos são totalmente suportados.",

    // STORY
    storyLabel:      "// 04_HISTÓRIA_DO_JOGO",
    storyTitle:      "A",
    storyTitleEm:    "História",
    storyP1:         "Norman é só um desenvolvedor indie comum — sobrecarregado, supercafeinado e apaixonado pelo que faz. Um dia, em vez de testar o jogo do jeito normal, ele toma uma decisão que vai mudar tudo: ele pula para dentro do próprio jogo.",
    storyP2:         "O que o espera não é uma experiência polida — são as entranhas cruas e cheias de bugs de um jogo em desenvolvimento. E a única forma de corrigi-los é por dentro.",
    storyP3:         "Armado apenas com sua inteligência (e um suprimento inexplicável de café), Norman precisa enfrentar cada bug de frente — através de uma série de minigames malucos. É o pesadelo de um desenvolvedor transformado na aventura.",

    // TAGS
    tagsLabel:       "// 05_TAGS_STEAM",
    tagAdventure:    "Aventura",
    tagCasual:       "Casual",
    tagArcade:       "Arcade",
    tagPlatformer:   "Plataforma",
    tagSideScroller: "Side Scroller",
    tagPixel:        "Gráficos Pixel",
    tagFantasy:      "Fantasia",
    tagSatire:       "Sátira",
    tagLinear:       "Linear",
    tagSingle:       "Um Jogador",

    // LANGUAGES
    langsLabel:      "// 06_IDIOMAS",
    langsTitle:      "Localização",
    langsNote:       "* Interface + Legendas em todos os idiomas. Sem dublagem completa.",

    // SYSTEM REQUIREMENTS
    reqLabel:        "// 07_REQUISITOS_DE_SISTEMA",
    reqTitle:        "Requisitos de",
    reqTitleEm:      "Sistema",
    reqThComponent:  "Componente",
    reqThMinimum:    "Mínimo",
    reqOS:           "SO",
    reqCPU:          "Processador",
    reqRAM:          "Memória",
    reqGPU:          "Placa de Vídeo",
    reqGPUVal:       "Gráficos integrados compatíveis com DirectX",
    reqDX:           "Versão 11",
    reqStorage:      "Armazenamento",
    reqStorageVal:   "400 MB de espaço disponível",
    reqSound:        "Áudio",
    reqSoundVal:     "Qualquer placa de som compatível com DirectX",
    reqNotes:        "Observações",
    reqNotesVal:     "Amigável para PCs modestos. Projetado para rodar na maioria dos sistemas.",

    // MEDIA
    mediaLabel:      "// 08_MÍDIA",
    mediaTitle:      "Screenshots",
    mediaTitleEm:    "& Vídeos",
    mediaKeyArt:     "KEY ART & CÁPSULA",
    mediaScreenshots:"SCREENSHOTS",
    mediaVideos:     "VÍDEOS & GIFS",
    mediaSprites:    "PERSONAGENS & SPRITES",
    mediaTrailer:    "TRAILER DE GAMEPLAY",
    trailerDuration: "Duração",
    trailerLocal:    "Arquivo local",
    mediaOpen:       "↗ Abrir",
    mediaReplace:    "substituir pelo arquivo local",
    mediaNoteLocal:  "💡 Para hospedar localmente: salve as imagens/vídeos em uma pasta <code>assets/</code> ao lado do index.html e atualize os atributos <code>src</code>.",

    // NAV
    navMedia:        "Mídia",

    // CONTACT
    contactTitle:    "ENTRE EM CONTATO",
    contactSub:      "Para pedidos de imprensa, chaves de avaliação, entrevistas ou qualquer solicitação de mídia, entre em contato via página Steam ou contato do publicador pelo email: leandrorogalabritezltda@gmail.com. Ficamos felizes em fornecer capturas de tela, materiais adicionais ou uma chave para imprensa.",
    btnSteam:        "▶ PÁGINA STEAM",
    btnDemo:         "BAIXAR DEMO",

    // FOOTER
    footerRights:    "Todos os direitos reservados.",
    footerRelease:   "Lançamento previsto:",
  }
};

/* ─── Engine ─── */
const I18n = (() => {
  const STORAGE_KEY = 'presskit_lang';
  let currentLang = localStorage.getItem(STORAGE_KEY) || 'en';

  /** Returns the translation string for a given key in the current language. */
  function t(key) {
    return (translations[currentLang] && translations[currentLang][key])
      ? translations[currentLang][key]
      : (translations['en'][key] || key);
  }

  /** Applies all translations to elements with data-i18n attributes. */
  function apply() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const value = t(key);
      // Use innerHTML so we can embed <strong> tags inside translations
      if (value !== undefined) {
        el.innerHTML = value;
      }
    });

    // Update <html lang> attribute
    document.documentElement.lang = currentLang === 'pt' ? 'pt-BR' : 'en';

    // Update page title
    document.title = t('pageTitle');
  }

  /** Switches the active language and persists the choice. */
  function setLang(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    apply();
    syncButtons();
  }

  /** Highlights the active lang button. */
  function syncButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });
  }

  /** Binds click events on all .lang-btn elements. */
  function init() {
    apply();
    syncButtons();

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => setLang(btn.dataset.lang));
    });
  }

  return { init, setLang, t };
})();

// Boot
document.addEventListener('DOMContentLoaded', I18n.init);
