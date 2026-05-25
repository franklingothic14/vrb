// coding: utf-8
const verben = [
    { infinitiv: 'bleiben', praeteritum: 'blieb', perfekt: 'ist geblieben', gruppe: 'ei/ie', uk: 'залишатися', en: 'to stay', hu: 'maradni' },
    { infinitiv: 'scheinen', praeteritum: 'schien', perfekt: 'hat geschienen', gruppe: 'ei/ie', uk: 'світити', en: 'to shine', hu: 'fényleni' },
    { infinitiv: 'schreiben', praeteritum: 'schrieb', perfekt: 'hat geschrieben', gruppe: 'ei/ie', uk: 'писати', en: 'to write', hu: 'írni' },
    { infinitiv: 'schweigen', praeteritum: 'schwieg', perfekt: 'hat geschwiegen', gruppe: 'ei/ie', uk: 'мовчати', en: 'to be silent', hu: 'hallgatni' },
    { infinitiv: 'steigen', praeteritum: 'stieg', perfekt: 'ist gestiegen', gruppe: 'ei/ie', uk: 'підніматися', en: 'to climb', hu: 'felmászni' },
    { infinitiv: 'streichen', praeteritum: 'strich', perfekt: 'hat gestrichen', gruppe: 'ei/ie', uk: 'фарбувати', en: 'to paint/strike', hu: 'festeni/húzni' },
    { infinitiv: 'streiten', praeteritum: 'stritt', perfekt: 'hat gestritten', gruppe: 'ei/ie', uk: 'сваритися', en: 'to argue', hu: 'vitatkozni' },
    { infinitiv: 'treiben', praeteritum: 'trieb', perfekt: 'hat getrieben', gruppe: 'ei/ie', uk: 'ганяти', en: 'to drive/do', hu: 'hajtani/űzni' },
    { infinitiv: 'weisen', praeteritum: 'wies', perfekt: 'hat gewiesen', gruppe: 'ei/ie', uk: 'показувати', en: 'to point', hu: 'mutatni' },
    { infinitiv: 'beißen', praeteritum: 'biss', perfekt: 'hat gebissen', gruppe: 'ei/ie', uk: 'кусати', en: 'to bite', hu: 'harapni' },
    { infinitiv: 'reiten', praeteritum: 'ritt', perfekt: 'ist geritten', gruppe: 'ei/ie', uk: 'їздити верхи', en: 'to ride', hu: 'lovagolni' },
    { infinitiv: 'schneiden', praeteritum: 'schnitt', perfekt: 'hat geschnitten', gruppe: 'ei/ie', uk: 'різати', en: 'to cut', hu: 'vágni' },
    { infinitiv: 'schreien', praeteritum: 'schrie', perfekt: 'hat geschrien', gruppe: 'ei/ie', uk: 'кричати', en: 'to scream', hu: 'kiabálni' },
    { infinitiv: 'leiden', praeteritum: 'litt', perfekt: 'hat gelitten', gruppe: 'ei/ie', uk: 'страждати', en: 'to suffer', hu: 'szenvedni' },
    { infinitiv: 'gleichen', praeteritum: 'glich', perfekt: 'hat geglichen', gruppe: 'ei/ie', uk: 'бути схожим', en: 'to resemble', hu: 'hasonlítani' },
    { infinitiv: 'greifen', praeteritum: 'griff', perfekt: 'hat gegriffen', gruppe: 'ei/ie', uk: 'хапати', en: 'to grab', hu: 'megragadni' },
    { infinitiv: 'leihen', praeteritum: 'lieh', perfekt: 'hat geliehen', gruppe: 'ei/ie', uk: 'позичати', en: 'to lend', hu: 'kölcsönözni' },
    { infinitiv: 'verleihen', praeteritum: 'verlieh', perfekt: 'hat verliehen', gruppe: 'ei/ie', uk: 'вручати', en: 'to lend/award', hu: 'kölcsönadni/odaítélni' },

    { infinitiv: 'beginnen', praeteritum: 'begann', perfekt: 'hat begonnen', gruppe: 'i/a', uk: 'починати', en: 'to begin', hu: 'kezdeni' },
    { infinitiv: 'finden', praeteritum: 'fand', perfekt: 'hat gefunden', gruppe: 'i/a', uk: 'знаходити', en: 'to find', hu: 'találni' },
    { infinitiv: 'gewinnen', praeteritum: 'gewann', perfekt: 'hat gewonnen', gruppe: 'i/a', uk: 'вигравати', en: 'to win', hu: 'nyerni' },
    { infinitiv: 'klingen', praeteritum: 'klang', perfekt: 'hat geklungen', gruppe: 'i/a', uk: 'звучати', en: 'to sound', hu: 'hangzani' },
    { infinitiv: 'ringen', praeteritum: 'rang', perfekt: 'hat gerungen', gruppe: 'i/a', uk: 'боротися', en: 'to wrestle', hu: 'birkózni' },
    { infinitiv: 'singen', praeteritum: 'sang', perfekt: 'hat gesungen', gruppe: 'i/a', uk: 'співати', en: 'to sing', hu: 'énekelni' },
    { infinitiv: 'sinken', praeteritum: 'sank', perfekt: 'ist gesunken', gruppe: 'i/a', uk: 'тонути', en: 'to sink', hu: 'süllyedni' },
    { infinitiv: 'springen', praeteritum: 'sprang', perfekt: 'ist gesprungen', gruppe: 'i/a', uk: 'стрибати', en: 'to jump', hu: 'ugrani' },
    { infinitiv: 'stinken', praeteritum: 'stank', perfekt: 'hat gestunken', gruppe: 'i/a', uk: 'смердіти', en: 'to stink', hu: 'bűzleni' },
    { infinitiv: 'trinken', praeteritum: 'trank', perfekt: 'hat getrunken', gruppe: 'i/a', uk: 'пити', en: 'to drink', hu: 'inni' },
    { infinitiv: 'zwingen', praeteritum: 'zwang', perfekt: 'hat gezwungen', gruppe: 'i/a', uk: 'змушувати', en: 'to force', hu: 'kényszeríteni' },
    { infinitiv: 'gelingen', praeteritum: 'gelang', perfekt: 'ist gelungen', gruppe: 'i/a', uk: 'вдаватися', en: 'to succeed', hu: 'sikerülni' },
    { infinitiv: 'verschwinden', praeteritum: 'verschwand', perfekt: 'ist verschwunden', gruppe: 'i/a', uk: 'зникати', en: 'to disappear', hu: 'eltűnni' },

    { infinitiv: 'fliegen', praeteritum: 'flog', perfekt: 'ist geflogen', gruppe: 'ie/o', uk: 'літати', en: 'to fly', hu: 'repkedni' },
    { infinitiv: 'fließen', praeteritum: 'floss', perfekt: 'ist geflossen', gruppe: 'ie/o', uk: 'текти', en: 'to flow', hu: 'folyni' },
    { infinitiv: 'frieren', praeteritum: 'fror', perfekt: 'ist gefroren', gruppe: 'ie/o', uk: 'мерзнути', en: 'to freeze', hu: 'fagyni' },
    { infinitiv: 'genießen', praeteritum: 'genoss', perfekt: 'hat genossen', gruppe: 'ie/o', uk: 'насолоджуватися', en: 'to enjoy', hu: 'élvezni' },
    { infinitiv: 'gießen', praeteritum: 'goss', perfekt: 'hat gegossen', gruppe: 'ie/o', uk: 'лити/поливати', en: 'to pour', hu: 'önteni' },
    { infinitiv: 'riechen', praeteritum: 'roch', perfekt: 'hat gerochen', gruppe: 'ie/o', uk: 'нюхати', en: 'to smell', hu: 'szagolni' },
    { infinitiv: 'schießen', praeteritum: 'schoss', perfekt: 'hat geschossen', gruppe: 'ie/o', uk: 'стріляти', en: 'to shoot', hu: 'lőni' },
    { infinitiv: 'schließen', praeteritum: 'schloss', perfekt: 'hat geschlossen', gruppe: 'ie/o', uk: 'закривати', en: 'to close', hu: 'zárni' },
    { infinitiv: 'verlieren', praeteritum: 'verlor', perfekt: 'hat verloren', gruppe: 'ie/o', uk: 'втрачати', en: 'to lose', hu: 'elveszteni' },
    { infinitiv: 'ziehen', praeteritum: 'zog', perfekt: 'hat gezogen', gruppe: 'ie/o', uk: 'тягнути', en: 'to pull/move', hu: 'húzni/költözni' },
    { infinitiv: 'wiegen', praeteritum: 'wog', perfekt: 'hat gewogen', gruppe: 'ie/o', uk: 'важити', en: 'to weigh', hu: 'mérni' },
    { infinitiv: 'biegen', praeteritum: 'bog', perfekt: 'hat gebogen', gruppe: 'ie/o', uk: 'гнути', en: 'to bend', hu: 'hajlítani' },
    { infinitiv: 'bieten', praeteritum: 'bot', perfekt: 'hat geboten', gruppe: 'ie/o', uk: 'пропонувати', en: 'to offer', hu: 'kínálni' },

    { infinitiv: 'brechen', praeteritum: 'brach', perfekt: 'hat gebrochen', gruppe: 'e/a', uk: 'ламати', en: 'to break', hu: 'törni' },
    { infinitiv: 'empfehlen', praeteritum: 'empfahl', perfekt: 'hat empfohlen', gruppe: 'e/a', uk: 'рекомендувати', en: 'to recommend', hu: 'ajánlani' },
    { infinitiv: 'erschrecken', praeteritum: 'erschrak', perfekt: 'ist erschrocken', gruppe: 'e/a', uk: 'лякатися', en: 'to be frightened', hu: 'megijedni' },
    { infinitiv: 'essen', praeteritum: 'aß', perfekt: 'hat gegessen', gruppe: 'e/a', uk: 'їсти', en: 'to eat', hu: 'enni' },
    { infinitiv: 'fressen', praeteritum: 'fraß', perfekt: 'hat gefressen', gruppe: 'e/a', uk: 'поїдати', en: 'to devour', hu: 'falni' },
    { infinitiv: 'geben', praeteritum: 'gab', perfekt: 'hat gegeben', gruppe: 'e/a', uk: 'давати', en: 'to give', hu: 'adni' },
    { infinitiv: 'gelten', praeteritum: 'galt', perfekt: 'hat gegolten', gruppe: 'e/a', uk: 'діяти, бути чинним', en: 'to be valid', hu: 'érvényes lenni' },
    { infinitiv: 'geschehen', praeteritum: 'geschah', perfekt: 'ist geschehen', gruppe: 'e/a', uk: 'траплятися', en: 'to happen', hu: 'történni' },
    { infinitiv: 'lesen', praeteritum: 'las', perfekt: 'hat gelesen', gruppe: 'e/a', uk: 'читати', en: 'to read', hu: 'olvasni' },
    { infinitiv: 'messen', praeteritum: 'maß', perfekt: 'hat gemessen', gruppe: 'e/a', uk: 'вимірювати', en: 'to measure', hu: 'mérni' },
    { infinitiv: 'nehmen', praeteritum: 'nahm', perfekt: 'hat genommen', gruppe: 'e/a', uk: 'брати', en: 'to take', hu: 'venni' },
    { infinitiv: 'sehen', praeteritum: 'sah', perfekt: 'hat gesehen', gruppe: 'e/a', uk: 'бачити', en: 'to see', hu: 'látni' },
    { infinitiv: 'sprechen', praeteritum: 'sprach', perfekt: 'hat gesprochen', gruppe: 'e/a', uk: 'говорити', en: 'to speak', hu: 'beszélni' },
    { infinitiv: 'stehlen', praeteritum: 'stahl', perfekt: 'hat gestohlen', gruppe: 'e/a', uk: 'красти', en: 'to steal', hu: 'lopni' },
    { infinitiv: 'treffen', praeteritum: 'traf', perfekt: 'hat getroffen', gruppe: 'e/a', uk: 'зустрічати', en: 'to meet', hu: 'találkozni' },
    { infinitiv: 'vergessen', praeteritum: 'vergaß', perfekt: 'hat vergessen', gruppe: 'e/a', uk: 'забувати', en: 'to forget', hu: 'elfelejteni' },
    { infinitiv: 'empfangen', praeteritum: 'empfing', perfekt: 'hat empfangen', gruppe: 'e/a', uk: 'отримувати', en: 'to receive', hu: 'kapni' },

    { infinitiv: 'backen', praeteritum: 'buk', perfekt: 'hat gebacken', gruppe: 'a/u', uk: 'пекти', en: 'to bake', hu: 'sütni' },
    { infinitiv: 'einladen', praeteritum: 'lud ein', perfekt: 'hat eingeladen', gruppe: 'a/u', uk: 'запрошувати', en: 'to invite', hu: 'meghívni' },
    { infinitiv: 'erfahren', praeteritum: 'erfuhr', perfekt: 'hat erfahren', gruppe: 'a/u', uk: 'дізнаватися', en: 'to find out', hu: 'megtudni' },
    { infinitiv: 'fahren', praeteritum: 'fuhr', perfekt: 'ist gefahren', gruppe: 'a/u', uk: 'їхати', en: 'to drive', hu: 'utazni' },
    { infinitiv: 'laden', praeteritum: 'lud', perfekt: 'hat geladen', gruppe: 'a/u', uk: 'завантажувати', en: 'to load', hu: 'betölteni' },
    { infinitiv: 'schlagen', praeteritum: 'schlug', perfekt: 'hat geschlagen', gruppe: 'a/u', uk: 'бити', en: 'to hit', hu: 'ütni' },
    { infinitiv: 'tragen', praeteritum: 'trug', perfekt: 'hat getragen', gruppe: 'a/u', uk: 'нести', en: 'to carry', hu: 'hordani' },
    { infinitiv: 'wachsen', praeteritum: 'wuchs', perfekt: 'ist gewachsen', gruppe: 'a/u', uk: 'рости', en: 'to grow', hu: 'nőni' },
    { infinitiv: 'waschen', praeteritum: 'wusch', perfekt: 'hat gewaschen', gruppe: 'a/u', uk: 'мити', en: 'to wash', hu: 'mosni' },
    { infinitiv: 'graben', praeteritum: 'grub', perfekt: 'hat gegraben', gruppe: 'a/u', uk: 'копати', en: 'to dig', hu: 'ásni' },
    { infinitiv: 'erschaffen', praeteritum: 'erschuf', perfekt: 'hat erschaffen', gruppe: 'a/u', uk: 'створювати', en: 'to create', hu: 'teremteni' },

    { infinitiv: 'fallen', praeteritum: 'fiel', perfekt: 'ist gefallen', gruppe: 'a/ie', uk: 'падати', en: 'to fall', hu: 'esni' },
    { infinitiv: 'gefallen', praeteritum: 'gefiel', perfekt: 'hat gefallen', gruppe: 'a/ie', uk: 'подобатися', en: 'to please', hu: 'tetszeni' },
    { infinitiv: 'halten', praeteritum: 'hielt', perfekt: 'hat gehalten', gruppe: 'a/ie', uk: 'тримати', en: 'to hold', hu: 'tartani' },
    { infinitiv: 'hängen', praeteritum: 'hing', perfekt: 'hat gehangen', gruppe: 'a/ie', uk: 'висіти', en: 'to hang', hu: 'lógni' },
    { infinitiv: 'lassen', praeteritum: 'ließ', perfekt: 'hat gelassen', gruppe: 'a/ie', uk: 'дозволяти', en: 'to let/leave', hu: 'hagyni/engedni' },
    { infinitiv: 'laufen', praeteritum: 'lief', perfekt: 'ist gelaufen', gruppe: 'a/ie', uk: 'бігти', en: 'to run', hu: 'futni' },
    { infinitiv: 'raten', praeteritum: 'riet', perfekt: 'hat geraten', gruppe: 'a/ie', uk: 'радити', en: 'to advise/guess', hu: 'tanácsolni/kitalálni' },
    { infinitiv: 'rufen', praeteritum: 'rief', perfekt: 'hat gerufen', gruppe: 'a/ie', uk: 'кликати', en: 'to call', hu: 'hívni' },
    { infinitiv: 'schlafen', praeteritum: 'schlief', perfekt: 'hat geschlafen', gruppe: 'a/ie', uk: 'спати', en: 'to sleep', hu: 'aludni' },
    { infinitiv: 'stoßen', praeteritum: 'stieß', perfekt: 'hat gestoßen', gruppe: 'a/ie', uk: 'штовхати', en: 'to push', hu: 'lökni' },

    { infinitiv: 'helfen', praeteritum: 'half', perfekt: 'hat geholfen', gruppe: 'e/o', uk: 'допомагати', en: 'to help', hu: 'segíteni' },
    { infinitiv: 'sterben', praeteritum: 'starb', perfekt: 'ist gestorben', gruppe: 'e/o', uk: 'вмирати', en: 'to die', hu: 'meghalni' },
    { infinitiv: 'verderben', praeteritum: 'verdarb', perfekt: 'hat verdorben', gruppe: 'e/o', uk: 'псувати', en: 'to spoil', hu: 'elrontani' },
    { infinitiv: 'werfen', praeteritum: 'warf', perfekt: 'hat geworfen', gruppe: 'e/o', uk: 'кидати', en: 'to throw', hu: 'dobni' },
    { infinitiv: 'erwerben', praeteritum: 'erwarb', perfekt: 'hat erworben', gruppe: 'e/o', uk: 'набувати', en: 'to acquire', hu: 'szerezni' },

    { infinitiv: 'bringen', praeteritum: 'brachte', perfekt: 'hat gebracht', gruppe: 'Mischverben', uk: 'приносити', en: 'to bring', hu: 'hozni' },
    { infinitiv: 'denken', praeteritum: 'dachte', perfekt: 'hat gedacht', gruppe: 'Mischverben', uk: 'думати', en: 'to think', hu: 'gondolni' },
    { infinitiv: 'kennen', praeteritum: 'kannte', perfekt: 'hat gekannt', gruppe: 'Mischverben', uk: 'знати', en: 'to know', hu: 'ismerni' },
    { infinitiv: 'nennen', praeteritum: 'nannte', perfekt: 'hat genannt', gruppe: 'Mischverben', uk: 'називати', en: 'to name', hu: 'nevezni' },
    { infinitiv: 'rennen', praeteritum: 'rannte', perfekt: 'ist gerannt', gruppe: 'Mischverben', uk: 'бігти', en: 'to run', hu: 'futni' },
    { infinitiv: 'verbringen', praeteritum: 'verbrachte', perfekt: 'hat verbracht', gruppe: 'Mischverben', uk: 'проводити час', en: 'to spend time', hu: 'tölteni időt' },
    { infinitiv: 'wissen', praeteritum: 'wusste', perfekt: 'hat gewusst', gruppe: 'Mischverben', uk: 'знати факт', en: 'to know', hu: 'tudni' },
    { infinitiv: 'brennen', praeteritum: 'brannte', perfekt: 'hat gebrannt', gruppe: 'Mischverben', uk: 'горіти', en: 'to burn', hu: 'égni' },
    { infinitiv: 'senden', praeteritum: 'sandte', perfekt: 'hat gesandt', gruppe: 'Mischverben', uk: 'надсилати', en: 'to send', hu: 'küldeni' },

    { infinitiv: 'gehen', praeteritum: 'ging', perfekt: 'ist gegangen', gruppe: 'Besondere', uk: 'йти', en: 'to go', hu: 'menni' },
    { infinitiv: 'haben', praeteritum: 'hatte', perfekt: 'hat gehabt', gruppe: 'Besondere', uk: 'мати', en: 'to have', hu: 'bírni' },
    { infinitiv: 'kommen', praeteritum: 'kam', perfekt: 'ist gekommen', gruppe: 'Besondere', uk: 'приходити', en: 'to come', hu: 'jönni' },
    { infinitiv: 'liegen', praeteritum: 'lag', perfekt: 'hat gelegen', gruppe: 'Besondere', uk: 'лежати', en: 'to lie', hu: 'feküdni' },
    { infinitiv: 'sein', praeteritum: 'war', perfekt: 'ist gewesen', gruppe: 'Besondere', uk: 'бути', en: 'to be', hu: 'lenni' },
    { infinitiv: 'sitzen', praeteritum: 'saß', perfekt: 'hat gesessen', gruppe: 'Besondere', uk: 'сидіти', en: 'to sit', hu: 'ülni' },
    { infinitiv: 'stehen', praeteritum: 'stand', perfekt: 'hat gestanden', gruppe: 'Besondere', uk: 'стояти', en: 'to stand', hu: 'állni' },
    { infinitiv: 'tun', praeteritum: 'tat', perfekt: 'hat getan', gruppe: 'Besondere', uk: 'робити', en: 'to do', hu: 'tenni' },
    { infinitiv: 'werden', praeteritum: 'wurde', perfekt: 'ist geworden', gruppe: 'Besondere', uk: 'ставати', en: 'to become', hu: 'válni' },
    { infinitiv: 'lügen', praeteritum: 'log', perfekt: 'hat gelogen', gruppe: 'Besondere', uk: 'брехати', en: 'to lie', hu: 'hazudni' },
    { infinitiv: 'gebären', praeteritum: 'gebar', perfekt: 'hat geboren', gruppe: 'Besondere', uk: 'народжувати', en: 'to give birth', hu: 'szülni' },

    { infinitiv: 'dürfen', praeteritum: 'durfte', perfekt: 'hat gedurft', gruppe: 'Modalverben', uk: 'могти, мати дозвіл', en: 'may/to be allowed', hu: 'szabad/engedélyezett' },
    { infinitiv: 'können', praeteritum: 'konnte', perfekt: 'hat gekonnt', gruppe: 'Modalverben', uk: 'вміти, могти', en: 'can/to be able', hu: 'tudni/képes' },
    { infinitiv: 'mögen', praeteritum: 'mochte', perfekt: 'hat gemocht', gruppe: 'Modalverben', uk: 'подобатися', en: 'to like', hu: 'szeretni' },
    { infinitiv: 'möchten', praeteritum: 'mochte', perfekt: 'hat gemocht', gruppe: 'Modalverben', uk: 'хотіти (ввічливо)', en: 'would like', hu: 'szeretne' },
    { infinitiv: 'müssen', praeteritum: 'musste', perfekt: 'hat gemusst', gruppe: 'Modalverben', uk: 'мусити', en: 'must/to have to', hu: 'kell/muszáj' },
    { infinitiv: 'sollen', praeteritum: 'sollte', perfekt: 'hat gesollt', gruppe: 'Modalverben', uk: 'мав би', en: 'should/to be supposed to', hu: 'kellene/köteles' },
    { infinitiv: 'wollen', praeteritum: 'wollte', perfekt: 'hat gewollt', gruppe: 'Modalverben', uk: 'хотіти', en: 'to want', hu: 'akarni' }
];

// розбити по рівнях
window.WORDS_A1 = verben.filter(w => ['ei/ie', 'i/a', 'ie/o', 'e/a', 'a/u'].includes(w.gruppe));
window.WORDS_A2 = verben.filter(w => ['a/ie', 'e/o', 'Mischverben', 'Besondere'].includes(w.gruppe));
window.WORDS_B1 = verben.filter(w => w.gruppe === 'Modalverben');
window.WORDS_ALL = verben;

// додати де/переклад для гри
window.WORDS_A1.forEach(w => { w.de = w.infinitiv; w.uk = w.uk; w.en = w.en; w.hu = w.hu; });
window.WORDS_A2.forEach(w => { w.de = w.infinitiv; w.uk = w.uk; w.en = w.en; w.hu = w.hu; });
window.WORDS_B1.forEach(w => { w.de = w.infinitiv; w.uk = w.uk; w.en = w.en; w.hu = w.hu; });
window.WORDS_ALL.forEach(w => { w.de = w.infinitiv; w.uk = w.uk; w.en = w.en; w.hu = w.hu; });

// мови
window.SUPPORTED_LANGUAGES = ['uk', 'en', 'hu'];
window.LANG_LABELS = {
    uk: 'UKR',
    en: 'EN',
    hu: 'HU'
};