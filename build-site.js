const fs = require('fs');
const path = require('path');
const ROOT = __dirname;

/* ============================== SITE CONSTANTS ============================== */
const SITE = {
  name: 'Hadi Installatie',
  domain: 'https://hadi-installatie.nl',
  phoneDisplay: '070 - 123 45 67',
  phoneTel: '+31701234567',
  email: 'info@hadi-installatie.nl',
  postcode: '2518 VP',
  city: 'Den Haag',
  kvk: '68490925',
  ownerName: 'Elhadi',
};

const SERVICES = [
  {
    slug: 'lekkage-opsporen-en-verhelpen',
    icon: 'droplet',
    related: ['afvoer-ontstoppen', 'waterleiding-aanleg-en-renovatie', 'spoedservice-loodgieter-24-uur'],
    nav: 'Lekkage verhelpen',
    h1: 'Lekkage opsporen en verhelpen',
    eyebrow: 'Lekkage · Den Haag',
    metaTitle: 'Lekkage opsporen Den Haag | Hadi Installatie',
    metaDescription: 'Vochtplek, natte muur of hoge waterrekening in Den Haag? Hadi Installatie spoort de lekkage op en verhelpt hem direct, met een vaste prijs vooraf.',
    lead: 'Een vochtplek op het plafond of een onverklaarbaar hoge waterrekening is meestal het eerste teken van een lekkage. Hoe eerder die wordt opgespoord, hoe minder schade. Hadi Installatie spoort het lek gericht op en lost het meteen op.',
    about: {
      title: 'Wat is een lekkage precies?',
      paragraphs: [
        'Een lekkage ontstaat meestal geleidelijk: een verbinding die na jaren is gaan lekken, een leiding die door vorst is gesprongen, of een dakdoorvoer die niet meer waterdicht is. Vaak merkt u het pas als er al schade is, terwijl het probleem zelf soms al weken sluimert achter een muur of onder een vloer.',
        'Hoe langer een lekkage onopgemerkt blijft, hoe groter de kans op schimmel, aangetaste kozijnen en een oplopende waterrekening. Daarom is snel en gericht opsporen belangrijker dan wachten tot het probleem vanzelf zichtbaar wordt.',
      ],
      signals: [
        'Vochtplekken op een muur, plafond of vloer',
        'Muffe geur of beginnende schimmel in een hoek',
        'Een waterrekening die opeens flink hoger uitvalt',
      ],
    },
    deliverables: [
      { t: 'Lekdetectie', d: 'Gericht zoeken naar de bron, zonder onnodig te breken of te boren.' },
      { t: 'Directe reparatie', d: 'Waar mogelijk wordt het lek dezelfde afspraak nog verholpen.' },
      { t: 'Advies bij schade', d: 'Eerlijk advies over vervolgstappen, ook richting de verzekering.' },
      { t: 'Controle achteraf', d: 'We checken of de leiding weer droog en dicht is voor we vertrekken.' },
    ],
    priceText: 'Vanaf €65 per uur exclusief btw, plus voorrijkosten',
    priceNote: 'De exacte prijs hangt af van de locatie van het lek en de bereikbaarheid van de leiding. Bij spoed of avond/weekend geldt een hoger tarief.',
    steps: [
      { t: 'Melding & inschatting', d: 'U belt of appt, wij vragen door en geven een eerlijke inschatting.' },
      { t: 'Lek opsporen', d: 'Ter plekke sporen we de bron van de lekkage op.' },
      { t: 'Herstellen & controleren', d: 'We verhelpen het lek en controleren of alles weer droog blijft.' },
    ],
    images: [
      { src: 'gootsteen-reparatie.jpg', alt: 'Gereedschap bij een lekkende leiding onder de gootsteen' },
      { src: 'leidingwerk-sleutel.jpg', alt: 'Loodgieter dicht een leiding af met een steeksleutel' },
    ],
    faqs: [
      { q: 'Hoe weet ik of ik een lekkage heb?', a: 'Signalen zijn een vochtplek, schimmel, een hogere waterrekening dan normaal, of een tikkende watermeter terwijl alle kranen dicht staan. Twijfelt u? Bel gerust, we denken gratis mee.' },
      { q: 'Breken jullie de muur of vloer open?', a: 'Alleen als het echt niet anders kan. We proberen de schade en overlast zo klein mogelijk te houden en bespreken dit altijd vooraf.' },
    ],
  },
  {
    slug: 'afvoer-ontstoppen',
    icon: 'drain',
    related: ['riolering-en-rioolontstopping', 'lekkage-opsporen-en-verhelpen', 'keukeninstallatie'],
    nav: 'Afvoer ontstoppen',
    h1: 'Afvoer ontstoppen',
    eyebrow: 'Ontstopping · Den Haag',
    metaTitle: 'Afvoer ontstoppen Den Haag | Hadi Installatie',
    metaDescription: 'Verstopte gootsteen, douche of toilet in Den Haag? Hadi Installatie maakt de afvoer weer vrij, snel en zonder de boel open te breken.',
    lead: 'Een verstopte afvoer is vervelend en vaak op het slechtste moment. Hadi Installatie maakt gootsteen, douche, bad of toilet weer vrij, met de juiste techniek voor de verstopping.',
    about: {
      title: 'Hoe ontstaat een verstopping?',
      paragraphs: [
        'De meeste verstoppingen bouwen zich langzaam op. Vet dat afkoelt en aankoekt in de keukenafvoer, haren die zich verzamelen in het douche- of badputje, of wc-papier dat samenklontert in de leiding. Bij oudere aansluitingen op de buitenriolering kan ook worteldoorgroei een rol spelen.',
        'Zelf aan de slag met chemische ontstoppers lost het probleem soms tijdelijk op, maar kan kunststof leidingen op termijn aantasten. Met de juiste veer of hogedrukapparatuur wordt de verstopping verwijderd zonder de leiding te beschadigen.',
      ],
      signals: [
        'Water dat traag wegloopt uit gootsteen, douche of bad',
        'Gorgelende geluiden uit de afvoer of het toilet',
        'Een onaangename geur die uit de afvoer blijft komen',
      ],
    },
    deliverables: [
      { t: 'Ontstoppen op locatie', d: 'Met veer, hogedruk of ontstoppingsmiddel, afhankelijk van de situatie.' },
      { t: 'Oorzaak checken', d: 'We kijken of het een losstaand probleem is of vaker zal terugkomen.' },
      { t: 'Advies ter voorkoming', d: 'Praktische tips om een nieuwe verstopping te voorkomen.' },
      { t: 'Nette afwerking', d: 'We laten de ruimte netjes en droog achter.' },
    ],
    priceText: 'Vanaf €60 per ontstopping, plus voorrijkosten',
    priceNote: 'Eenvoudige verstoppingen zijn vaak binnen een half uur verholpen. Bij hardnekkige of terugkerende verstoppingen bekijken we samen de beste oplossing.',
    steps: [
      { t: 'Probleem beschrijven', d: 'U belt, wij vragen naar het type afvoer en de klachten.' },
      { t: 'Ontstoppen ter plekke', d: 'We kiezen de juiste methode en maken de afvoer weer vrij.' },
      { t: 'Testen', d: 'We spoelen door en controleren of alles weer goed doorloopt.' },
    ],
    images: [
      { src: 'gootsteen-reparatie.jpg', alt: 'Wrench naast een verstopte gootsteen' },
      { src: 'waterleiding-installeren.jpg', alt: 'Leidingwerk onder een aanrecht wordt losgemaakt' },
    ],
    faqs: [
      { q: 'Waarom raakt een afvoer steeds opnieuw verstopt?', a: 'Vaak door vet, haren of een verkeerde afschot in de leiding. Wij zoeken de oorzaak en adviseren of alleen ontstoppen genoeg is, of dat er meer aan de hand is.' },
      { q: 'Kunnen jullie ook een verstopt riool ontstoppen?', a: 'Ja, voor grotere rioolverstoppingen werken we met professionele apparatuur. Bekijk ook onze pagina over riolering.' },
    ],
  },
  {
    slug: 'cv-ketel-installatie-en-onderhoud',
    icon: 'flame',
    related: ['boiler-en-warmwatertoestel', 'gasleiding-en-gasfitter', 'spoedservice-loodgieter-24-uur'],
    nav: 'CV-ketel',
    h1: 'CV-ketel installatie en onderhoud',
    eyebrow: 'CV-ketel · Den Haag',
    metaTitle: 'CV-ketel installatie en onderhoud Den Haag | Hadi Installatie',
    metaDescription: 'Nieuwe CV-ketel, storing of jaarlijks onderhoud in Den Haag. Hadi Installatie installeert en onderhoudt uw CV-ketel vakkundig.',
    lead: 'Een CV-ketel die het laat afweten betekent al snel een koud huis. Hadi Installatie installeert nieuwe ketels en houdt bestaande ketels met jaarlijks onderhoud betrouwbaar en veilig.',
    about: {
      title: 'Waarom onderhoud echt het verschil maakt',
      paragraphs: [
        'Een CV-ketel werkt het grootste deel van het jaar op de achtergrond, tot het moment dat hij ermee stopt, meestal op een koude avond. Jaarlijks onderhoud houdt de verbranding schoon en efficiënt, verkleint de kans op een onverwachte storing en is bovendien belangrijk voor de veiligheid: een slecht afgestelde ketel kan koolmonoxide vormen.',
        'Bij een oudere ketel is niet elke storing de moeite van het repareren waard. Wij geven eerlijk aan wanneer een reparatie nog zin heeft, en wanneer een nieuwe ketel zich op termijn terugverdient in een lagere energierekening.',
      ],
      signals: [
        'De ketel maakt tikkende of brommende geluiden',
        'De waterdruk zakt steeds terug en moet vaak bijgevuld worden',
        'Geen warm water of verwarming meer, of een foutcode op het display',
      ],
    },
    deliverables: [
      { t: 'Nieuwe ketel installeren', d: 'Advies over het juiste vermogen en vakkundige installatie.' },
      { t: 'Storing verhelpen', d: 'Foutcode of geen warm water? We sporen de oorzaak op en lossen het op.' },
      { t: 'Jaarlijks onderhoud', d: 'Een onderhoudsbeurt verlengt de levensduur en houdt de ketel veilig.' },
      { t: 'Advies op maat', d: 'Eerlijk advies: repareren of is vervangen op termijn slimmer?' },
    ],
    priceText: 'Onderhoudsbeurt vanaf €95, nieuwe ketel op offerte',
    priceNote: 'De prijs van een nieuwe ketel hangt af van het merk en vermogen. Na een korte inschatting ontvangt u een vaste prijs.',
    steps: [
      { t: 'Inschatting', d: 'We bespreken de klacht of wens telefonisch en plannen een afspraak.' },
      { t: 'Uitvoering', d: 'Installatie, reparatie of onderhoud wordt vakkundig uitgevoerd.' },
      { t: 'Test & uitleg', d: 'We testen de ketel en leggen kort uit waar u op moet letten.' },
    ],
    images: [
      { src: 'cv-ketel-onderhoud.jpg', alt: 'Onderhoud aan een CV-ketel en pomp' },
      { src: 'radiator-installatie.jpg', alt: 'Installatie van een radiator aangesloten op de CV' },
    ],
    faqs: [
      { q: 'Hoe vaak moet een CV-ketel onderhouden worden?', a: 'Eén keer per jaar is gebruikelijk. Dat houdt de ketel veilig, zuinig en verkleint de kans op een storing in de winter.' },
      { q: 'Mijn ketel geeft een foutcode, wat nu?', a: 'Bel ons gerust met de foutcode erbij, dan kunnen we vaak al iets zeggen over de oorzaak voor we langskomen.' },
    ],
  },
  {
    slug: 'sanitair-en-badkamer-installatie',
    icon: 'sink',
    related: ['kraan-reparatie-en-vervanging', 'waterleiding-aanleg-en-renovatie', 'afvoer-ontstoppen'],
    nav: 'Badkamer & sanitair',
    h1: 'Sanitair en badkamer installatie',
    eyebrow: 'Sanitair · Den Haag',
    metaTitle: 'Badkamer en sanitair installatie Den Haag | Hadi Installatie',
    metaDescription: 'Nieuwe badkamer of sanitair laten installeren in Den Haag? Hadi Installatie sluit toilet, douche, bad en wastafel vakkundig aan.',
    lead: 'Van een enkele wastafel tot een complete badkamer: Hadi Installatie sluit sanitair vakkundig aan, met oog voor een net, lekvrij eindresultaat.',
    about: {
      title: 'Waar het op aankomt bij een nieuwe badkamer',
      paragraphs: [
        'Een badkamer of los stuk sanitair staat of valt met wat er achter de tegels gebeurt. Water- en afvoerleidingen moeten op de juiste plek zitten, met voldoende afschot, voordat er ook maar één tegel wordt gezet. Fouten in deze fase zijn later nauwelijks meer te herstellen zonder alles open te breken.',
        'Werkt u al met een tegelzetter of aannemer? Dan stemmen we de planning en het leidingwerk graag met hen af, zodat de klus in de juiste volgorde en zonder vertraging verloopt.',
      ],
      signals: [
        'Denk vooraf na over de gewenste indeling en aansluitpunten',
        'Kies het sanitair (toilet, douche, bad, wastafel) liefst voor de start',
        'Bepaal een realistisch budget, inclusief eventueel leidingwerk',
      ],
    },
    deliverables: [
      { t: 'Toilet, douche & bad', d: 'Aansluiten of vervangen van sanitair naar wens.' },
      { t: 'Wastafels & kranen', d: 'Nieuwe wastafel of meubel waterdicht en stevig aangesloten.' },
      { t: 'Afvoer & leidingwerk', d: 'Leidingen op de juiste plek en afschot voor een probleemloze afvoer.' },
      { t: 'Samenwerking met uw tegelzetter', d: 'We stemmen leidingwerk graag af met de rest van de verbouwing.' },
    ],
    priceText: 'Op offerte, na een korte inschatting vooraf',
    priceNote: 'Elke badkamer is anders. Na een kort gesprek over uw wensen ontvangt u een vaste prijsopgave voor het installatiewerk.',
    steps: [
      { t: 'Wensen bespreken', d: 'We bespreken de indeling en welk sanitair u wilt laten plaatsen.' },
      { t: 'Leidingwerk & aansluiting', d: 'Water- en afvoerleidingen worden vakkundig aangelegd of aangepast.' },
      { t: 'Sanitair plaatsen & testen', d: 'Toilet, douche, bad en kranen worden aangesloten en getest op lekkage.' },
    ],
    images: [
      { src: 'badkamer-dubbele-wastafel.jpg', alt: 'Nieuwe badkamer met dubbele wastafel' },
      { src: 'kraan-badkamer-closeup.jpg', alt: 'Close-up van een nieuwe badkamerkraan' },
    ],
    faqs: [
      { q: 'Kunnen jullie ook samenwerken met mijn aannemer of tegelzetter?', a: 'Ja, dat doen we regelmatig. We stemmen de planning en het leidingwerk graag af met de andere vakmensen in uw verbouwing.' },
      { q: 'Hoe lang duurt het installeren van een badkamer?', a: 'Dat hangt af van de omvang. Losse aansluitingen zijn vaak in een dag klaar, een complete badkamer plannen we in overleg.' },
    ],
  },
  {
    slug: 'kraan-reparatie-en-vervanging',
    icon: 'wrench',
    related: ['sanitair-en-badkamer-installatie', 'keukeninstallatie', 'lekkage-opsporen-en-verhelpen'],
    nav: 'Kraan reparatie',
    h1: 'Kraan reparatie en vervanging',
    eyebrow: 'Kranen · Den Haag',
    metaTitle: 'Kraan reparatie en vervanging Den Haag | Hadi Installatie',
    metaDescription: 'Druppende of lekkende kraan in Den Haag? Hadi Installatie repareert of vervangt uw kraan snel en vakkundig.',
    lead: 'Een druppende kraan is niet alleen vervelend, het kost ook onnodig water. Hadi Installatie repareert of vervangt keuken- en badkamerkranen snel en netjes.',
    about: {
      title: 'Waarom een kraan gaat druppelen',
      paragraphs: [
        'Meestal zit de oorzaak in een versleten kraanleertje of cartridge, onderdelen die simpelweg slijten door dagelijks gebruik. Kalkaanslag versnelt dat proces, zeker in gebieden met hard water. Een druppende kraan lijkt onschuldig, maar kan over een jaar al snel voor honderden liters verspild water zorgen.',
        'Niet elke kraan is de moeite van het repareren waard. Bij een kraan ouder dan tien tot vijftien jaar is vervangen vaak voordeliger dan telkens nieuwe onderdelen laten plaatsen, wij adviseren daar eerlijk over.',
      ],
      signals: [
        'De kraan blijft druppelen, ook als hij goed dicht is gedraaid',
        'De kraan is zwaar of moeilijk dicht te draaien',
        'Zichtbare kalkaanslag rond de uitloop of hendel',
      ],
    },
    deliverables: [
      { t: 'Kraan repareren', d: 'Vaak volstaat een nieuwe kraanleertje of cartridge.' },
      { t: 'Kraan vervangen', d: 'Advies en montage van een nieuwe kraan naar keuze.' },
      { t: 'Mengkraan & thermostaatkraan', d: 'Ook installatie en reparatie van douche-thermostaatkranen.' },
      { t: 'Buitenkraan', d: 'Plaatsing of reparatie van buitenkranen, inclusief vorstvrije uitvoering.' },
    ],
    priceText: 'Reparatie vanaf €55, vervanging op offerte',
    priceNote: 'De prijs hangt af van het type kraan en of er onderdelen nodig zijn. Bij vervanging bespreken we vooraf een vaste prijs.',
    steps: [
      { t: 'Klacht doorgeven', d: 'Druppelt, lekt of klemt de kraan? Vertel ons kort wat er speelt.' },
      { t: 'Reparatie of vervanging', d: 'We repareren waar mogelijk, en vervangen waar nodig.' },
      { t: 'Testen op lekkage', d: 'We testen de kraan grondig voor we de klus afronden.' },
    ],
    images: [
      { src: 'kraan-badkamer-closeup.jpg', alt: 'Nieuwe kraan op een badkamermeubel' },
      { src: 'gootsteen-reparatie.jpg', alt: 'Reparatie van een kraan boven de gootsteen' },
    ],
    faqs: [
      { q: 'Is repareren of vervangen van een kraan goedkoper?', a: 'Een reparatie is meestal goedkoper, maar bij een oudere kraan is vervangen soms slimmer. We geven altijd eerlijk advies.' },
      { q: 'Kunnen jullie ook een specifiek merk kraan plaatsen?', a: 'Ja, we plaatsen kranen van vrijwel elk merk. Heeft u er al een gekocht, dan installeren we die graag voor u.' },
    ],
  },
  {
    slug: 'waterleiding-aanleg-en-renovatie',
    icon: 'pipe',
    related: ['lekkage-opsporen-en-verhelpen', 'sanitair-en-badkamer-installatie', 'keukeninstallatie'],
    nav: 'Waterleiding',
    h1: 'Waterleiding aanleg en renovatie',
    eyebrow: 'Waterleiding · Den Haag',
    metaTitle: 'Waterleiding aanleggen of vernieuwen Den Haag | Hadi Installatie',
    metaDescription: 'Nieuwe waterleiding of oude leidingen vervangen in Den Haag. Hadi Installatie legt waterleidingen vakkundig aan, ook bij renovatie.',
    lead: 'Bij een verbouwing of oude leidingen die aan vervanging toe zijn, legt Hadi Installatie nieuwe waterleidingen aan of vernieuwt bestaande leidingen.',
    about: {
      title: 'Wanneer leidingen aan vervanging toe zijn',
      paragraphs: [
        'Woningen van voor de jaren 60 hebben soms nog (deels) loden of verouderde stalen leidingen. Die zijn niet alleen gevoelig voor lekkage, maar bij loden leidingen speelt ook een gezondheidsrisico. Corrosie aan de binnenkant van oude leidingen zorgt bovendien voor een geleidelijk afnemende waterdruk.',
        'Bij nieuwe aanleg, bijvoorbeeld voor een aanbouw of verbouwing, testen we elke leiding met een drukproef voor de wanden weer dicht gaan. Zo weet u zeker dat alles dicht is voordat het onzichtbaar wordt weggewerkt.',
      ],
      signals: [
        'Bruin of troebel water bij het opendraaien van de kraan',
        'Merkbaar lagere waterdruk dan voorheen',
        'Zichtbare roest of groene aanslag op zichtbaar leidingwerk',
      ],
    },
    deliverables: [
      { t: 'Nieuwe aanleg', d: 'Waterleidingen voor een verbouwing, aanbouw of nieuwe aansluiting.' },
      { t: 'Oude leidingen vervangen', d: 'Vervangen van verouderd of lekgevoelig leidingwerk.' },
      { t: 'Leidingen wegwerken', d: 'Netjes wegwerken van leidingen in wand of vloer waar gewenst.' },
      { t: 'Drukproef', d: 'We testen nieuwe leidingen op druk voor de wanden dicht gaan.' },
    ],
    priceText: 'Op offerte, afhankelijk van lengte en situatie',
    priceNote: 'Na een inschatting van de situatie ontvangt u een vaste prijs, inclusief materiaal en montage.',
    steps: [
      { t: 'Situatie opnemen', d: 'We bekijken het tracé en bespreken de gewenste aansluitpunten.' },
      { t: 'Leidingen aanleggen', d: 'Vakkundige montage, waar nodig weggewerkt in wand of vloer.' },
      { t: 'Testen & opleveren', d: 'Drukproef en controle op lekkage voor oplevering.' },
    ],
    images: [
      { src: 'waterleiding-installeren.jpg', alt: 'Nieuwe waterleiding wordt aangesloten' },
      { src: 'leidingwerk-sleutel.jpg', alt: 'Leidingwerk wordt vastgezet met een steeksleutel' },
    ],
    faqs: [
      { q: 'Werken jullie ook samen met de aannemer bij een verbouwing?', a: 'Ja, we stemmen de planning van het leidingwerk graag af met de rest van de verbouwing.' },
      { q: 'Hoe weet ik of mijn leidingen aan vervanging toe zijn?', a: 'Regelmatige lekkages, lage waterdruk of zichtbare corrosie zijn signalen. We denken graag vrijblijvend mee.' },
    ],
  },
  {
    slug: 'riolering-en-rioolontstopping',
    icon: 'sewer',
    related: ['afvoer-ontstoppen', 'spoedservice-loodgieter-24-uur', 'lekkage-opsporen-en-verhelpen'],
    nav: 'Riolering',
    h1: 'Riolering en rioolontstopping',
    eyebrow: 'Riolering · Den Haag',
    metaTitle: 'Riolering en rioolontstopping Den Haag | Hadi Installatie',
    metaDescription: 'Verstopt riool of rioolproblemen in Den Haag? Hadi Installatie lost rioolverstoppingen op en repareert of vervangt rioolleidingen.',
    lead: 'Een verstopt riool of stinkende afvoer wijst vaak op een probleem dieper in de leiding. Hadi Installatie spoort het op en lost het vakkundig op.',
    about: {
      title: 'Wat er achter een rioolprobleem schuilgaat',
      paragraphs: [
        'Waar een verstopte afvoer meestal een lokaal probleem is, ligt de oorzaak bij rioolklachten vaak dieper: een verzakte leiding, doorgroeiende boomwortels bij oudere aansluitingen, of een opeenstapeling van vet en vuil over jaren tijd. Dat merkt u meestal pas als meerdere afvoerpunten in huis tegelijk traag worden.',
        'Bij hardnekkige of terugkerende problemen zetten we een camera in om precies te zien wat er aan de hand is, in plaats van te gokken. Zo repareren we wat er daadwerkelijk kapot is, niet meer en niet minder.',
      ],
      signals: [
        'Aanhoudende stankoverlast, ook na het schoonmaken van de afvoer',
        'Water dat terugstroomt in het laagst gelegen putje of toilet',
        'Meerdere afvoerpunten in huis die tegelijk traag worden',
      ],
    },
    deliverables: [
      { t: 'Rioolontstopping', d: 'Met professionele apparatuur maken we het riool weer vrij.' },
      { t: 'Camera-inspectie', d: 'Waar nodig bekijken we de leiding van binnen om de oorzaak te vinden.' },
      { t: 'Reparatie & vervanging', d: 'Beschadigde rioolleidingen repareren of vervangen we vakkundig.' },
      { t: 'Preventief advies', d: 'Tips om herhaling van de verstopping te voorkomen.' },
    ],
    priceText: 'Vanaf €85 per ontstopping, plus voorrijkosten',
    priceNote: 'Bij hardnekkige verstoppingen of noodzaak tot camera-inspectie bespreken we vooraf een vaste prijs.',
    steps: [
      { t: 'Klacht in kaart brengen', d: 'We vragen naar de klachten: stankoverlast, terugstroom of trage afvoer.' },
      { t: 'Riool ontstoppen', d: 'Met de juiste apparatuur maken we de leiding weer vrij.' },
      { t: 'Controleren', d: 'We testen of het riool weer goed doorstroomt.' },
    ],
    images: [
      { src: 'gootsteen-reparatie.jpg', alt: 'Gereedschap voor het ontstoppen van leidingwerk' },
      { src: 'leidingwerk-sleutel.jpg', alt: 'Leidingwerk wordt losgedraaid met een steeksleutel' },
    ],
    faqs: [
      { q: 'Waarom stinkt mijn afvoer of riool?', a: 'Vaak door achtergebleven vuil of een droogstaande sifon. Soms wijst het op een dieper probleem in het riool, dat sporen we graag voor u op.' },
      { q: 'Kunnen jullie ook het riool van de hele straat of het pand doen?', a: 'Voor grotere of gedeelde rioolsystemen komen we graag kijken en geven we een passend advies.' },
    ],
  },
  {
    slug: 'spoedservice-loodgieter-24-uur',
    icon: 'bolt',
    related: ['lekkage-opsporen-en-verhelpen', 'cv-ketel-installatie-en-onderhoud', 'afvoer-ontstoppen'],
    nav: 'Spoedservice',
    h1: 'Spoedservice loodgieter',
    eyebrow: 'Spoed · Den Haag',
    metaTitle: 'Spoed loodgieter Den Haag | Hadi Installatie',
    metaDescription: 'Grote lekkage, verstopping of geen warm water in Den Haag? Bel Hadi Installatie voor spoedservice, vaak binnen twee uur ter plekke.',
    lead: 'Een grote lekkage of een kapotte CV-ketel in de winter wacht niet tot morgen. Bel direct: bij spoed staat Hadi Installatie vaak binnen twee uur voor de deur in Den Haag en omgeving.',
    about: {
      title: 'Wat telt echt als spoed?',
      paragraphs: [
        'Niet elk probleem is spoed, en dat is maar goed ook: spoedtarieven zijn hoger dan een regulier bezoek. Een grote lekkage die water blijft verliezen, een CV-ketel die er in de winter mee stopt, of een verstopt toilet als dat de enige toiletruimte in huis is, dat zijn situaties die niet tot morgen kunnen wachten.',
        'Twijfelt u of het spoed is? Bel gewoon. Aan de telefoon schatten we samen met u in hoe dringend het is, en geven we praktisch advies voor de eerste minuten, ook als we nog onderweg zijn.',
      ],
      signals: [
        'Een lekkage die actief water blijft verliezen',
        'Geen verwarming of warm water tijdens koud weer',
        'De enige toiletruimte in huis is volledig verstopt',
      ],
    },
    deliverables: [
      { t: 'Snelle respons', d: 'Bij spoed schakelen we zo snel mogelijk, vaak binnen twee uur.' },
      { t: 'Lekkages stoppen', d: 'Eerst de schade beperken, daarna een structurele oplossing.' },
      { t: 'CV-storingen', d: 'Geen verwarming of warm water? We sporen de storing direct op.' },
      { t: 'Eerlijke spoedtarieven', d: 'Ook bij spoed krijgt u vooraf te horen waar u aan toe bent.' },
    ],
    priceText: 'Spoedtarief vanaf €100 per uur, afhankelijk van tijdstip',
    priceNote: 'Buiten kantooruren, in het weekend of \'s avonds geldt een hoger tarief. We melden dit altijd vooraf, ook bij spoed.',
    steps: [
      { t: 'Bel direct', d: 'Beschrijf kort het probleem, wij schatten de urgentie in.' },
      { t: 'Zo snel mogelijk ter plekke', d: 'In Den Haag staan we bij spoed vaak binnen twee uur voor de deur.' },
      { t: 'Probleem stoppen & oplossen', d: 'Eerst de schade beperken, dan een duurzame oplossing.' },
    ],
    images: [
      { src: 'leidingwerk-sleutel.jpg', alt: 'Loodgieter grijpt direct in bij een leidingprobleem' },
      { src: 'cv-ketel-onderhoud.jpg', alt: 'Storing aan een CV-ketel wordt verholpen' },
    ],
    faqs: [
      { q: 'Zijn jullie ook \'s avonds of in het weekend bereikbaar?', a: 'Bij spoed wel, bel gewoon het spoednummer. Voor spoed buiten kantooruren geldt een hoger tarief, dat melden we altijd vooraf.' },
      { q: 'Wat moet ik doen terwijl ik wacht op de loodgieter?', a: 'Bij een lekkage: draai zo mogelijk de hoofdkraan dicht en zet emmers neer. Aan de telefoon geven we altijd eerste hulp-advies.' },
    ],
  },
  {
    slug: 'boiler-en-warmwatertoestel',
    icon: 'boiler',
    related: ['cv-ketel-installatie-en-onderhoud', 'gasleiding-en-gasfitter', 'kraan-reparatie-en-vervanging'],
    nav: 'Boiler & warmwater',
    h1: 'Boiler en warmwatertoestel',
    eyebrow: 'Warm water · Den Haag',
    metaTitle: 'Boiler en warmwatertoestel Den Haag | Hadi Installatie',
    metaDescription: 'Geen warm water in Den Haag? Hadi Installatie installeert en repareert boilers en warmwatertoestellen.',
    lead: 'Geen warm water is al snel een dagelijks ongemak. Hadi Installatie installeert nieuwe boilers en warmwatertoestellen en repareert bestaande toestellen.',
    about: {
      title: 'Boiler, geiser of warm water via de CV?',
      paragraphs: [
        'Er zijn meerdere manieren om aan warm water te komen: een losse boiler, een geiser, of warm water via de CV-ketel. Welke optie het voordeligst is, hangt af van uw verbruik, het aantal badkamers en hoe uw woning is aangesloten. Een verkeerde keuze merkt u meestal pas terug in een hoge energierekening of te weinig capaciteit op drukke momenten.',
        'Bij een toestel dat lang stilstaat, bijvoorbeeld in een vakantiewoning, is periodiek doorspoelen ook een aandachtspunt vanwege het risico op legionella. Bij onderhoud nemen we dat gelijk mee.',
      ],
      signals: [
        'Water dat lauw blijft in plaats van goed warm te worden',
        'Vreemde geluiden uit het toestel tijdens het opwarmen',
        'Zichtbare lekkage bij of onder de boiler',
      ],
    },
    deliverables: [
      { t: 'Nieuwe boiler plaatsen', d: 'Advies over het juiste type en vakkundige installatie.' },
      { t: 'Reparatie', d: 'Geen of te weinig warm water? We sporen de oorzaak op.' },
      { t: 'Onderhoud', d: 'Periodiek onderhoud houdt het toestel veilig en zuinig.' },
      { t: 'Advies op maat', d: 'Boiler, geiser of via de CV: we adviseren wat past bij uw situatie.' },
    ],
    priceText: 'Reparatie vanaf €75, nieuw toestel op offerte',
    priceNote: 'De prijs van een nieuw toestel hangt af van het type en de capaciteit. Na inschatting ontvangt u een vaste prijs.',
    steps: [
      { t: 'Klacht bespreken', d: 'Geen, te weinig of te heet water? We vragen door aan de telefoon.' },
      { t: 'Reparatie of installatie', d: 'We voeren de klus vakkundig uit, met het juiste materiaal.' },
      { t: 'Testen', d: 'We testen het toestel voor we de klus afronden.' },
    ],
    images: [
      { src: 'cv-ketel-onderhoud.jpg', alt: 'Onderhoud aan een warmwatertoestel' },
      { src: 'radiator-installatie.jpg', alt: 'Aansluiting van leidingwerk bij een warmwatertoestel' },
    ],
    faqs: [
      { q: 'Boiler of warm water via de CV-ketel, wat is beter?', a: 'Dat hangt af van uw verbruik en woning. We geven graag eerlijk advies over wat in uw situatie het meest voordelig is.' },
      { q: 'Mijn boiler lekt, is dat gevaarlijk?', a: 'Zet indien mogelijk de watertoevoer dicht en bel ons. We komen bij spoed vaak binnen twee uur langs.' },
    ],
  },
  {
    slug: 'keukeninstallatie',
    icon: 'kitchen',
    related: ['kraan-reparatie-en-vervanging', 'waterleiding-aanleg-en-renovatie', 'afvoer-ontstoppen'],
    nav: 'Keukeninstallatie',
    h1: 'Keukeninstallatie',
    eyebrow: 'Keuken · Den Haag',
    metaTitle: 'Keuken aansluiten Den Haag | Hadi Installatie',
    metaDescription: 'Nieuwe keuken laten aansluiten in Den Haag? Hadi Installatie sluit kraan, vaatwasser en wasmachine vakkundig aan.',
    lead: 'Een nieuwe keuken is pas compleet als alles goed is aangesloten. Hadi Installatie sluit keukenkraan, vaatwasser, wasmachine en afvoer vakkundig aan.',
    about: {
      title: 'Waar u vooraf op kunt letten',
      paragraphs: [
        'Een nieuwe keuken staat er vaak snel, maar de aansluiting bepaalt of alles ook goed blijft functioneren. De afvoer moet op de juiste plek en met voldoende afschot liggen, de kraanaansluiting moet waterdicht zijn, en apparatuur zoals een vaatwasser heeft specifieke eisen aan water en afvoer.',
        'Werkt u met een keukenzaak? Dan stemmen we de planning graag met hen af, zodat de installatie aansluit op het moment dat de keuken wordt geplaatst.',
      ],
      signals: [
        'Check vooraf of aansluitpunten op de juiste plek zitten',
        'Controleer of er voldoende stopcontacten in de buurt zijn',
        'Bepaal of de bestaande afvoer geschikt is voor de nieuwe apparatuur',
      ],
    },
    deliverables: [
      { t: 'Keukenkraan aansluiten', d: 'Waterdicht en stevig gemonteerd, inclusief eventuele filterkraan.' },
      { t: 'Vaatwasser & wasmachine', d: 'Aansluiten op water en afvoer volgens de eisen van het toestel.' },
      { t: 'Afvoer aanpassen', d: 'De keukenafvoer op de juiste plek en met voldoende afschot.' },
      { t: 'Kookplaat op gas', d: 'Aansluiten van een gasfornuis of kookplaat, veilig en volgens norm.' },
    ],
    priceText: 'Vanaf €150 voor een complete keukenaansluiting',
    priceNote: 'De prijs hangt af van het aantal aansluitpunten en de bestaande situatie. Na een korte check ontvangt u een vaste prijs.',
    steps: [
      { t: 'Situatie bekijken', d: 'We bespreken de indeling van de nieuwe keuken en de aansluitpunten.' },
      { t: 'Aansluiten', d: 'Kraan, apparatuur en afvoer worden vakkundig aangesloten.' },
      { t: 'Testen', d: 'We testen alle aansluitingen op lekkage voor oplevering.' },
    ],
    images: [
      { src: 'waterleiding-installeren.jpg', alt: 'Leidingwerk onder het keukenaanrecht wordt aangesloten' },
      { src: 'kraan-badkamer-closeup.jpg', alt: 'Nieuwe kraan close-up' },
    ],
    faqs: [
      { q: 'Sluiten jullie ook een nieuwe keuken van de keukenzaak aan?', a: 'Ja, dat doen we regelmatig. We stemmen graag af met de keukenleverancier over de planning.' },
      { q: 'Kunnen jullie ook gasleidingen voor een kookplaat aanleggen?', a: 'Ja, bekijk ook onze pagina over gasleidingen en gasfitterswerk voor meer informatie.' },
    ],
  },
  {
    slug: 'gasleiding-en-gasfitter',
    icon: 'gas',
    related: ['cv-ketel-installatie-en-onderhoud', 'boiler-en-warmwatertoestel', 'keukeninstallatie'],
    nav: 'Gasleiding',
    h1: 'Gasleiding en gasfitterswerk',
    eyebrow: 'Gasfitter · Den Haag',
    metaTitle: 'Gasfitter en gasleiding Den Haag | Hadi Installatie',
    metaDescription: 'Gasleiding aanleggen, verplaatsen of keuren in Den Haag. Hadi Installatie voert gasfitterswerk veilig en volgens de norm uit.',
    lead: 'Gaswerkzaamheden vragen om precisie en veiligheid. Hadi Installatie legt gasleidingen aan, verplaatst aansluitpunten en controleert bestaande leidingen.',
    about: {
      title: 'Waarom gaswerk geen doe-het-zelfklus is',
      paragraphs: [
        'Bij gasleidingen is de marge voor fouten klein. Een niet volledig dichte koppeling is vaak niet direct merkbaar, maar wel gevaarlijk. Daarom werken we volgens de geldende veiligheidsnormen en controleren we elke aansluiting met een dichtheidscontrole voor we een leiding als klaar beschouwen.',
        'Bij een verbouwing of nieuwe keuken verplaatsen we het gasaansluitpunt mee, altijd in overleg over waar het toestel uiteindelijk komt te staan.',
      ],
      signals: [
        'Een (zwakke) gaslucht, ook als u twijfelt of het inbeelding is',
        'Een gasfornuis dat ongelijkmatig of met een gele vlam brandt',
        'Zichtbaar oude of roestige gasleidingen',
      ],
    },
    deliverables: [
      { t: 'Gasleiding aanleggen', d: 'Voor een kookplaat, gasfornuis of ander gastoestel.' },
      { t: 'Aansluitpunt verplaatsen', d: 'Bij een verbouwing verplaatsen we het gasaansluitpunt mee.' },
      { t: 'Dichtheidscontrole', d: 'We controleren gasleidingen op lekdichtheid.' },
      { t: 'Veilig volgens norm', d: 'Al het werk wordt uitgevoerd volgens de geldende veiligheidsnormen.' },
    ],
    priceText: 'Op offerte, na een korte inschatting',
    priceNote: 'De prijs hangt af van de lengte van de leiding en de situatie. Veiligheid staat voorop, nooit een haastklus.',
    steps: [
      { t: 'Situatie bespreken', d: 'We bespreken waar de gasleiding moet komen of aangepast worden.' },
      { t: 'Leiding aanleggen', d: 'Vakkundige aanleg volgens de veiligheidsnorm.' },
      { t: 'Dichtheidscontrole', d: 'We controleren de leiding grondig voor oplevering.' },
    ],
    images: [
      { src: 'cv-ketel-onderhoud.jpg', alt: 'Werkzaamheden aan gasgerelateerde installatie' },
      { src: 'leidingwerk-sleutel.jpg', alt: 'Leidingwerk wordt vastgezet' },
    ],
    faqs: [
      { q: 'Is het aanleggen van een gasleiding gevaarlijk om zelf te doen?', a: 'Gaswerkzaamheden laat u het beste over aan een vakman. Wij werken volgens de geldende veiligheidsnormen en controleren altijd op dichtheid.' },
      { q: 'Kunnen jullie ook een gasaansluiting verplaatsen bij een verbouwing?', a: 'Ja, we verplaatsen aansluitpunten regelmatig mee met een verbouwing of nieuwe keuken.' },
    ],
  },
];

const AREAS = [
  { slug: 'den-haag-centrum', name: 'Den Haag Centrum', region: 'Den Haag', blurb: 'Van het Zeeheldenkwartier tot de Grote Markt: in Den Haag Centrum wonen en werken mensen in een mix van historische panden en moderne appartementen. Smalle straten en oudere leidingen vragen soms om extra vakmanschap.', nearby: ['segbroek', 'haagse-hout', 'laak'] },
  { slug: 'scheveningen', name: 'Scheveningen', region: 'Den Haag', blurb: 'Scheveningen is de kustplaats van Den Haag, met veel woningen die dicht bij zee staan. Zilte lucht is niet altijd vriendelijk voor leidingwerk en kranen, waardoor onderhoud en tijdige reparatie extra belangrijk zijn.', nearby: ['segbroek', 'den-haag-centrum', 'wassenaar'] },
  { slug: 'segbroek', name: 'Segbroek', region: 'Den Haag', blurb: 'Segbroek, met wijken als het Regentessekwartier en Vogelwijk, kent veel jaren 30-woningen. Daar zit het leidingwerk vaak anders in elkaar dan in nieuwbouw, en dat vraagt om ervaring.', nearby: ['den-haag-centrum', 'scheveningen', 'loosduinen'] },
  { slug: 'escamp', name: 'Escamp', region: 'Den Haag', blurb: 'Escamp omvat wijken als Moerwijk, Bouwlust en Vrederust, met veel naoorlogse woningbouw. Van rijtjeshuis tot flat: Hadi Installatie kent de veelvoorkomende leidingopbouw in deze wijken.', nearby: ['laak', 'rijswijk', 'zoetermeer'] },
  { slug: 'laak', name: 'Laak', region: 'Den Haag', blurb: 'Laak, met het Laakkwartier en Spoorwijk, is een van de meer industriële stadsdelen van Den Haag, inmiddels volop in ontwikkeling met nieuwbouw naast bestaande woningen.', nearby: ['den-haag-centrum', 'escamp', 'rijswijk'] },
  { slug: 'haagse-hout', name: 'Haagse Hout', region: 'Den Haag', blurb: 'Haagse Hout, met Benoordenhout en Mariahoeve, kent zowel statige villa\'s als jaren 60-flats. De variatie in bouwjaar betekent ook variatie in het type installatiewerk dat nodig is.', nearby: ['den-haag-centrum', 'voorburg', 'wassenaar'] },
  { slug: 'loosduinen', name: 'Loosduinen', region: 'Den Haag', blurb: 'Loosduinen heeft een dorps karakter, met de duinen dichtbij. Van het oude dorpscentrum tot nieuwere uitbreidingswijken: Hadi Installatie is snel ter plekke.', nearby: ['segbroek', 'westland', 'escamp'] },
  { slug: 'voorburg', name: 'Voorburg', region: 'regio Den Haag', blurb: 'Voorburg, met zijn historische lint langs de Vliet, combineert oude panden met nieuwere woonwijken. Hadi Installatie rukt ook hier snel uit vanuit Den Haag.', nearby: ['haagse-hout', 'leidschendam', 'rijswijk'] },
  { slug: 'rijswijk', name: 'Rijswijk', region: 'regio Den Haag', blurb: 'Van In de Bogaard tot Te Werve: Rijswijk grenst direct aan Den Haag en wordt vanuit Hadi Installatie snel bereikt voor lekkages, installaties en onderhoud.', nearby: ['den-haag-centrum', 'delft', 'escamp'] },
  { slug: 'leidschendam', name: 'Leidschendam', region: 'regio Den Haag', blurb: 'Leidschendam, met het karakteristieke Damcentrum, kent een mix van historische en moderne woningen. Hadi Installatie is ook hier snel ter plekke.', nearby: ['voorburg', 'wassenaar', 'zoetermeer'] },
  { slug: 'wassenaar', name: 'Wassenaar', region: 'regio Den Haag', blurb: 'Wassenaar staat bekend om ruime villa\'s en woningen dicht bij de duinen. Groter leidingwerk en meer sanitair vragen om een vakman die overzicht houdt, ook bij grotere klussen.', nearby: ['scheveningen', 'haagse-hout', 'leidschendam'] },
  { slug: 'zoetermeer', name: 'Zoetermeer', region: 'regio Den Haag', blurb: 'Zoetermeer groeide in de jaren 70 en 80 snel uit tot een stad met veel gelijksoortige woningbouw. Dat maakt veelvoorkomende storingen vaak herkenbaar en snel op te lossen.', nearby: ['pijnacker-nootdorp', 'leidschendam', 'escamp'] },
  { slug: 'delft', name: 'Delft', region: 'regio Den Haag', blurb: 'Delft combineert een historische binnenstad met studentenwoningen rond de TU. Van grachtenpand tot studio: Hadi Installatie kent de uiteenlopende bouwstijlen.', nearby: ['rijswijk', 'pijnacker-nootdorp', 'westland'] },
  { slug: 'pijnacker-nootdorp', name: 'Pijnacker-Nootdorp', region: 'regio Den Haag', blurb: 'Pijnacker-Nootdorp is grotendeels een Vinex-gemeente met relatief jonge woningen. Nieuwbouw kent andere aandachtspunten dan oudere leidingen, en daar spelen we op in.', nearby: ['delft', 'zoetermeer', 'rijswijk'] },
  { slug: 'westland', name: 'Westland', region: 'regio Den Haag', blurb: 'Het Westland staat bekend om de glastuinbouw, met woningen die vaak direct grenzen aan bedrijfsruimte of kassen. Hadi Installatie helpt zowel bij particuliere als kleinzakelijke installaties.', nearby: ['loosduinen', 'delft', 'escamp'] },
];

/* ============================== SHARED SHELL ============================== */

const FONT_LINK = `<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500..700&display=swap" rel="stylesheet">`;

const CSS = fs.readFileSync(path.join(ROOT, 'shared.css.txt'), 'utf8');

function breadcrumbLd(items) {
  return `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    ${items.map((it, i) => `{"@type":"ListItem","position":${i + 1},"name":${JSON.stringify(it.label)}${it.url ? `,"item":${JSON.stringify(it.url)}` : ''}}`).join(',\n    ')}
  ]
}
</script>`;
}

function breadcrumbNav(items) {
  return `<div class="breadcrumb reveal" role="navigation" aria-label="Kruimelpad">
  ${items.map((it, i) => it.href
      ? `<a href="${it.href}">${it.label}</a><span class="crumb-sep">/</span>`
      : `<span aria-current="page">${it.label}</span>`
    ).join('\n  ')}
</div>`;
}

function truncate(text, max) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(' ');
  return cut.slice(0, lastSpace > 0 ? lastSpace : max).trim() + '…';
}

function svgCheck() {
  return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>`;
}

const ICONS = {
  droplet: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.5s7 7.6 7 12.5a7 7 0 11-14 0c0-4.9 7-12.5 7-12.5z"/></svg>`,
  wrench: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a4 4 0 00-5.6 5l-6.1 6a2 2 0 002.7 2.7l6-6.1a4 4 0 005-5.6l-2.5 2.5-2.6-.6-.6-2.6 2.5-2.5z"/></svg>`,
  flame: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22c4 0 6.5-2.7 6.5-6.2 0-3-1.9-4.9-3.1-6.7-.3 1.6-1.2 2.6-2 2.6-1 0-1-1.6-1-2.7 0-2-1-3.6-2.4-4.9-.2 2.1-1 3.4-2.3 4.9C6.3 10.5 5.5 12.4 5.5 14.8 5.5 18.7 8 22 12 22z"/></svg>`,
  bolt: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z"/></svg>`,
  clock: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>`,
  checkCircle: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M8.5 12.5l2.3 2.3L16 10"/></svg>`,
  badge: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l2.6 1.5L18 3l.6 3.4L21 9l-1.5 2.6L21 15l-2.4 2.6L18 21l-3.4-.5L12 22l-2.6-1.5L6 21l-.6-3.4L3 15l1.5-2.6L3 9l2.4-2.6L6 3l3.4.5L12 2z"/><path d="M9 12l2 2 4-4"/></svg>`,
  mapPin: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s7-6.6 7-12a7 7 0 10-14 0c0 5.4 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>`,
  pipe: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h9a4 4 0 014 4v4"/><circle cx="19" cy="18" r="2.2"/><circle cx="5" cy="6" r="2.2"/></svg>`,
  sink: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18M5 12V6a1 1 0 011-1h2M12 5v3M3 12a9 6 0 0018 0"/><path d="M8 18a4 4 0 008 0"/></svg>`,
  fireExtinguish: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 2h4M11 2v3M8 8h7l1 12a2 2 0 01-2 2H9a2 2 0 01-2-2L8 8z"/><path d="M14 5l3-1"/></svg>`,
  boiler: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="3" width="12" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h3"/></svg>`,
  kitchen: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16M6 4v16M18 4v16M4 14h6M14 14h6"/></svg>`,
  gas: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9 9l6 6M15 9l-6 6"/></svg>`,
  drain: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M8 9l8 6M16 9l-8 6"/></svg>`,
  sewer: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h10"/></svg>`,
  users: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><path d="M16 4.2a3 3 0 010 5.6M20 20c0-2.6-1.7-4.8-4-5.6"/></svg>`,
  phoneCall: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 3h3l2 5-2.5 1.5a11 11 0 005 5L14 12l5 2v3a2 2 0 01-2.2 2A17 17 0 013 5.2 2 2 0 015 3z"/></svg>`,
};

function head({ title, description, canonicalPath, prefix, extraLd }) {
  return `<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title}</title>
<meta name="description" content="${description}">
<link rel="canonical" href="${SITE.domain}/${canonicalPath}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:type" content="website">
<meta property="og:locale" content="nl_NL">
<link rel="icon" type="image/png" sizes="32x32" href="${prefix}img/favicon-32.png">
<link rel="icon" type="image/png" sizes="96x96" href="${prefix}img/favicon-96.png">
<link rel="apple-touch-icon" href="${prefix}img/favicon-192.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
${FONT_LINK}
<!-- GTM: paste container snippet here -->
${extraLd || ''}
<style>
${CSS}
</style>
</head>`;
}

function nav(prefix) {
  return `<nav id="nav">
  <div class="wrap nav-inner">
    <a href="${prefix}index.html" class="logo"><img src="${prefix}img/logo-nav.png" alt="Hadi Installatie"></a>
    <ul class="nav-links">
      <li><a href="${prefix}index.html#diensten">Diensten</a></li>
      <li><a href="${prefix}diensten/spoedservice-loodgieter-24-uur.html" class="nav-spoed"><span class="nav-spoed-dot"></span>Spoed</a></li>
      <li><a href="${prefix}index.html#werkgebied">Werkgebied</a></li>
      <li><a href="${prefix}over-ons.html">Over ons</a></li>
      <li><a href="${prefix}index.html#faq">FAQ</a></li>
      <li><a href="tel:${SITE.phoneTel}" class="btn btn-nav">Bel direct</a></li>
    </ul>
    <button class="hamburger" id="hamburger" aria-label="Menu openen" aria-expanded="false">☰</button>
  </div>
</nav>

<div class="mobile-menu" id="mobileMenu" role="dialog" aria-label="Navigatiemenu">
  <button class="mobile-close" id="mobileClose" aria-label="Menu sluiten">✕</button>
  <a href="${prefix}index.html#diensten">Diensten</a>
  <a href="${prefix}diensten/spoedservice-loodgieter-24-uur.html" class="nav-spoed"><span class="nav-spoed-dot"></span>Spoed</a>
  <a href="${prefix}index.html#werkgebied">Werkgebied</a>
  <a href="${prefix}over-ons.html">Over ons</a>
  <a href="${prefix}index.html#faq">FAQ</a>
  <a href="tel:${SITE.phoneTel}" class="btn">Bel direct</a>
</div>`;
}

function footer(prefix) {
  const serviceLinks = SERVICES.map(s => `<li><a href="${prefix}diensten/${s.slug}.html">${s.nav}</a></li>`).join('\n          ');
  const areaLinks = AREAS.map(a => `<li><a href="${prefix}locaties/${a.slug}.html">${a.name}</a></li>`).join('\n          ');
  return `<footer>
  <div class="wrap">
    <div class="foot-grid">
      <div>
        <img class="foot-logo" src="${prefix}img/logo-nav.png" alt="Hadi Installatie">
        <p>Allround loodgieter en installatietechniek voor Den Haag en de regio. Lekkages, verstoppingen, CV en sanitair, snel en eerlijk opgelost.</p>
      </div>
      <div>
        <h4>Diensten</h4>
        <ul>
          ${serviceLinks}
        </ul>
      </div>
      <div>
        <h4>Werkgebied</h4>
        <ul class="foot-areas">
          ${areaLinks}
        </ul>
      </div>
      <div>
        <h4>Contact</h4>
        <ul>
          <li>${SITE.postcode} ${SITE.city}</li>
          <li><a href="tel:${SITE.phoneTel}">${SITE.phoneDisplay}</a></li>
          <li><a href="mailto:${SITE.email}">${SITE.email}</a></li>
          <li>KVK ${SITE.kvk}</li>
          <li style="margin-top:10px"><a href="${prefix}over-ons.html">Over ons</a></li>
          <li><a href="${prefix}afspraak.html">Afspraak maken</a></li>
          <li><a href="${prefix}privacy.html">Privacyverklaring</a></li>
        </ul>
      </div>
    </div>
    <div class="foot-bottom">
      <span>© 2026 Hadi Installatie</span>
      <span>Website door <a href="https://s5onlinemarketing.com" style="color:var(--accent)">S5Online Marketing</a></span>
    </div>
  </div>
</footer>`;
}

function stickyCta(label) {
  return `<div class="sticky-cta" id="stickyCta" aria-hidden="true">
  <a href="tel:${SITE.phoneTel}" class="btn">${label || `Bel direct: ${SITE.phoneDisplay}`}</a>
</div>`;
}

function scripts({ skipSticky, skipFaq, useScrollThreshold } = {}) {
  return `<script>
// nav scroll state
const nav = document.getElementById('nav');
addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', scrollY > 40);
}, {passive:true});

// mobile menu
const menu = document.getElementById('mobileMenu');
const burger = document.getElementById('hamburger');
const closeBtn = document.getElementById('mobileClose');
const toggleMenu = open => {
  menu.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', open);
  document.body.style.overflow = open ? 'hidden' : '';
  menuOpen = open;
  if (typeof updateSticky === 'function') updateSticky();
};
burger.addEventListener('click', () => toggleMenu(true));
closeBtn.addEventListener('click', () => toggleMenu(false));
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => toggleMenu(false)));
let menuOpen = false;
${skipFaq ? '' : `
// faq accordion
document.querySelectorAll('.faq-item').forEach(item => {
  const q = item.querySelector('.faq-q');
  const a = item.querySelector('.faq-a');
  q.addEventListener('click', () => {
    const open = item.classList.toggle('open');
    q.setAttribute('aria-expanded', open);
    a.style.maxHeight = open ? a.scrollHeight + 'px' : '0';
  });
});`}
${skipSticky ? '' : useScrollThreshold ? `
// sticky mobile cta (subpage): show after 600px scroll, hide near final CTA
const stickyCta = document.getElementById('stickyCta');
const ctaSection = document.getElementById('contact');
let nearEnd = false;
const updateSticky = () => {
  const show = scrollY > 300 && !nearEnd && !menuOpen;
  stickyCta.classList.toggle('show', show);
  stickyCta.setAttribute('aria-hidden', !show);
};
addEventListener('scroll', updateSticky, {passive:true});
if (ctaSection) new IntersectionObserver(([e]) => { nearEnd = e.isIntersecting; updateSticky(); }, {threshold:.1}).observe(ctaSection);
` : `
// sticky mobile cta (home): show once the hero is scrolled past
const stickyCta = document.getElementById('stickyCta');
const heroEl = document.querySelector('.hero');
const ctaSection = document.getElementById('contact');
let pastHero = false, nearEnd = false;
const updateSticky = () => {
  const show = pastHero && !nearEnd && !menuOpen;
  stickyCta.classList.toggle('show', show);
  stickyCta.setAttribute('aria-hidden', !show);
};
if (heroEl) new IntersectionObserver(([e]) => { pastHero = !e.isIntersecting; updateSticky(); }, {threshold:0}).observe(heroEl);
if (ctaSection) new IntersectionObserver(([e]) => { nearEnd = e.isIntersecting; updateSticky(); }, {threshold:.1}).observe(ctaSection);
`}
// scroll reveals
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
},{threshold:.15});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// water droplet particles (dark sections)
if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('canvas.particles').forEach(canvas => {
    const ctx = canvas.getContext('2d');
    const section = canvas.closest('section,header');
    let w, h, drops, running = false, raf;
    const DENSITY = 9000;
    function resize() {
      w = canvas.width = section.offsetWidth;
      h = canvas.height = section.offsetHeight;
      const count = Math.max(14, Math.min(46, Math.round((w * h) / DENSITY)));
      drops = Array.from({ length: count }, makeDrop);
    }
    function makeDrop(existing) {
      return {
        x: Math.random() * w,
        y: existing ? h + Math.random() * 40 : Math.random() * h,
        r: 1 + Math.random() * 2.2,
        speed: 0.25 + Math.random() * 0.55,
        drift: (Math.random() - 0.5) * 0.3,
        alpha: 0.12 + Math.random() * 0.22,
      };
    }
    function tick() {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = '#bcd4ff';
      for (const d of drops) {
        d.y -= d.speed;
        d.x += d.drift;
        if (d.y < -10) Object.assign(d, makeDrop(true), { y: h + 10 });
        ctx.globalAlpha = d.alpha;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      if (running) raf = requestAnimationFrame(tick);
    }
    function start() { if (running) return; running = true; raf = requestAnimationFrame(tick); }
    function stop() { running = false; if (raf) cancelAnimationFrame(raf); }
    resize();
    addEventListener('resize', resize, { passive: true });
    new IntersectionObserver(([e]) => { e.isIntersecting ? start() : stop(); }, { threshold: 0 }).observe(section);
  });
}
</script>`;
}

function page({ title, description, canonicalPath, prefix, extraLd, bodyHtml, skipSticky, skipFaq, stickyLabel, useScrollThreshold }) {
  return `<!DOCTYPE html>
<html lang="nl">
${head({ title, description, canonicalPath, prefix, extraLd })}
<body>

${nav(prefix)}

${bodyHtml}

${footer(prefix)}

${skipSticky ? '' : stickyCta(stickyLabel)}

${scripts({ skipSticky, skipFaq, useScrollThreshold })}
</body>
</html>
`;
}

/* ============================== SERVICE PAGE BODY ============================== */

function serviceLd(svc) {
  return `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "${svc.h1}",
  "provider": { "@type": "Plumber", "name": "Hadi Installatie", "telephone": "${SITE.phoneTel}" },
  "areaServed": "Den Haag",
  "url": "${SITE.domain}/diensten/${svc.slug}.html"
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    ${svc.faqs.map(f => `{"@type":"Question","name":${JSON.stringify(f.q)},"acceptedAnswer":{"@type":"Answer","text":${JSON.stringify(f.a)}}}`).join(',\n    ')}
  ]
}
</script>
${breadcrumbLd([
  { label: 'Home', url: `${SITE.domain}/` },
  { label: 'Diensten', url: `${SITE.domain}/index.html#diensten` },
  { label: svc.nav },
])}`;
}

function buildServiceBody(svc) {
  const p = '../';
  return `<!-- PAGE HERO -->
<header class="page-hero">
  <div class="hero-bg"></div>
  <div class="wrap">
    ${breadcrumbNav([{ label: 'Home', href: `${p}index.html` }, { label: 'Diensten', href: `${p}index.html#diensten` }, { label: svc.nav }])}
    <span class="eyebrow reveal">${svc.eyebrow}</span>
    <h1 class="reveal reveal-d1">${svc.h1}</h1>
    <p class="lead reveal reveal-d2">${svc.lead}</p>
    <div class="hero-cta reveal reveal-d3">
      <a href="tel:${SITE.phoneTel}" class="btn">Bel direct: ${SITE.phoneDisplay}</a>
      <a href="${p}afspraak.html" class="btn btn-ghost">Of plan een afspraak</a>
    </div>
  </div>
</header>

<!-- OVER DEZE DIENST -->
<section class="band-2">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="eyebrow">Achtergrond</span>
      <h2>${svc.about.title}</h2>
    </div>
    <div class="about-info-grid">
      <div class="reveal reveal-d1">
        ${svc.about.paragraphs.map(par => `<p>${par}</p>`).join('\n        ')}
      </div>
      <div class="signals-card reveal reveal-d2">
        <h4>Herkent u dit?</h4>
        <ul class="signals-list">
          ${svc.about.signals.map(s => `<li>${s}</li>`).join('\n          ')}
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- WAT U KRIJGT -->
<section>
  <div class="wrap">
    <div class="section-head reveal">
      <span class="eyebrow">Wat u krijgt</span>
      <h2>Duidelijk <span class="serif-i">geregeld</span></h2>
    </div>
    <div class="grid-4">
      ${svc.deliverables.map((d, i) => `<div class="card reveal reveal-d${i % 4}">
        <span class="num">0${i + 1}</span>
        <h3>${d.t}</h3>
        <p>${d.d}</p>
      </div>`).join('\n      ')}
    </div>
  </div>
</section>

<!-- PRIJS -->
<section class="band-2" style="padding:64px 0">
  <div class="wrap">
    <div class="price-box reveal">
      <div>
        <span class="eyebrow">Prijsindicatie</span>
        <h3>${svc.priceText}</h3>
      </div>
      <p>${svc.priceNote}</p>
    </div>
  </div>
</section>

<!-- WERKWIJZE -->
<section>
  <div class="wrap">
    <div class="section-head reveal">
      <span class="eyebrow">Werkwijze</span>
      <h2>Zo pakken we <span class="serif-i">het aan</span></h2>
    </div>
    <div class="steps">
      ${svc.steps.map((s, i) => `<div class="step reveal reveal-d${i}">
        <div class="big">${i + 1}.</div>
        <h3>${s.t}</h3>
        <p>${s.d}</p>
      </div>`).join('\n      ')}
    </div>
  </div>
</section>

<!-- FOTO'S -->
<section style="padding-top:0">
  <div class="wrap">
    <div class="projects" style="grid-template-columns:repeat(2,1fr)">
      ${svc.images.map(img => `<div class="project" style="pointer-events:none">
        <img class="ph-img" src="${p}img/${img.src}" alt="${img.alt}" loading="lazy" width="1000" height="667">
      </div>`).join('\n      ')}
    </div>
  </div>
</section>

<!-- GERELATEERDE DIENSTEN -->
<section class="band-2">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="eyebrow">Ook interessant</span>
      <h2>Gerelateerde <span class="serif-i">diensten</span></h2>
    </div>
    <div class="related-grid">
      ${svc.related.map(slug => {
        const rel = SERVICES.find(s => s.slug === slug);
        return `<a href="${p}diensten/${rel.slug}.html" class="related-card reveal">
        <span>${rel.nav}</span><span class="arrow">→</span>
      </a>`;
      }).join('\n      ')}
    </div>
  </div>
</section>

<!-- FAQ -->
<section id="faq">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="eyebrow">Veelgestelde vragen</span>
      <h2>Goed om te <span class="serif-i">weten</span></h2>
    </div>
    <div class="faq-list">
      ${svc.faqs.map(f => `<div class="faq-item reveal">
        <button class="faq-q" aria-expanded="false">${f.q}</button>
        <div class="faq-a"><p>${f.a}</p></div>
      </div>`).join('\n      ')}
    </div>
  </div>
</section>

<!-- CTA -->
<section id="contact" class="cta-final night">
  <canvas class="particles" data-particles="droplet"></canvas>
  <div class="wrap">
    <span class="eyebrow reveal">Direct geholpen worden</span>
    <h2 class="reveal reveal-d1">${svc.h1}? <span class="serif-i">Bel gerust.</span></h2>
    <p class="reveal reveal-d2">Bel direct voor spoed, of plan online een afspraak voor regulier werk.</p>
    <div class="reveal reveal-d3">
      <a href="tel:${SITE.phoneTel}" class="btn">Bel ${SITE.phoneDisplay}</a>
    </div>
    <p class="cta-sub reveal reveal-d3">Of <a href="${p}afspraak.html" style="color:var(--accent)">plan online een afspraak</a> · reactie op mail binnen 24 uur</p>
  </div>
</section>`;
}

/* ============================== LOCATION PAGE BODY ============================== */

function locationLd(area) {
  return `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Plumber",
  "name": "Hadi Installatie",
  "telephone": "${SITE.phoneTel}",
  "areaServed": "${area.name}",
  "address": { "@type": "PostalAddress", "postalCode": "${SITE.postcode}", "addressLocality": "${SITE.city}", "addressCountry": "NL" },
  "url": "${SITE.domain}/locaties/${area.slug}.html"
}
</script>
${breadcrumbLd([
  { label: 'Home', url: `${SITE.domain}/` },
  { label: 'Werkgebied', url: `${SITE.domain}/index.html#werkgebied` },
  { label: area.name },
])}`;
}

function buildLocationBody(area) {
  const p = '../';
  const featured = SERVICES;
  return `<!-- PAGE HERO -->
<header class="page-hero">
  <div class="hero-bg"></div>
  <div class="wrap">
    ${breadcrumbNav([{ label: 'Home', href: `${p}index.html` }, { label: 'Werkgebied', href: `${p}index.html#werkgebied` }, { label: area.name }])}
    <span class="eyebrow reveal">Loodgieter · ${area.name}</span>
    <h1 class="reveal reveal-d1">Loodgieter in <span class="serif-i">${area.name}</span></h1>
    <p class="lead reveal reveal-d2">${area.blurb}</p>
    <div class="hero-cta reveal reveal-d3">
      <a href="tel:${SITE.phoneTel}" class="btn">Bel direct: ${SITE.phoneDisplay}</a>
      <a href="${p}afspraak.html" class="btn btn-ghost">Of plan een afspraak</a>
    </div>
    <div class="trust reveal reveal-d3">
      <span class="trust-item">${svgCheck()}<b>KVK-geregistreerd</b> vakbedrijf</span>
      <span class="trust-item">${svgCheck()}Vaak binnen <b>2 uur</b> ter plekke</span>
      <span class="trust-item">${svgCheck()}<b>Vaste prijs</b> vooraf</span>
    </div>
  </div>
</header>

<!-- DIENSTEN -->
<section class="band-2">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="eyebrow">Diensten in ${area.name}</span>
      <h2>Waar wij in <span class="serif-i">${area.name}</span> mee helpen</h2>
    </div>
    <div class="grid-4">
      ${featured.map((s, i) => `<a href="${p}diensten/${s.slug}.html" class="card reveal reveal-d${i}">
        <span class="icon-badge">${ICONS[s.icon]}</span>
        <h3>${s.nav}</h3>
      </a>`).join('\n      ')}
    </div>
  </div>
</section>

<!-- WAAROM WIJ -->
<section>
  <div class="wrap">
    <div class="section-head reveal">
      <span class="eyebrow">Waarom wij</span>
      <h2>Waarom ${area.name} voor <span class="serif-i">${SITE.ownerName}</span> kiest</h2>
    </div>
    <div class="stat-row reveal" style="margin-top:48px;border:1px solid var(--line);border-radius:var(--radius);background:var(--card);box-shadow:var(--shadow)">
      <div class="stat-col"><div class="num">&lt;2u</div><h3>Reactietijd bij spoed</h3><p>Ook in ${area.name} vaak binnen twee uur voor de deur.</p></div>
      <div class="stat-col"><div class="num">100%</div><h3>Vaste prijs vooraf</h3><p>Geen verrassingen achteraf, ook niet bij grotere klussen.</p></div>
      <div class="stat-col"><div class="num">KVK</div><h3>Geregistreerd vakbedrijf</h3><p>Officieel ingeschreven onder KVK ${SITE.kvk}.</p></div>
      <div class="stat-col"><div class="num">15+</div><h3>Wijken &amp; gemeenten</h3><p>Actief in heel Den Haag en de regio.</p></div>
    </div>
  </div>
</section>

<!-- NABIJGELEGEN PLAATSEN -->
<section class="band-2">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="eyebrow">Ook in de buurt</span>
      <h2>Nabij <span class="serif-i">${area.name}</span></h2>
    </div>
    <div class="nearby-list reveal">
      ${area.nearby.map(slug => {
        const n = AREAS.find(a => a.slug === slug);
        return `<a href="${p}locaties/${n.slug}.html" class="related-card" style="padding:14px 22px"><span>${n.name}</span></a>`;
      }).join('\n      ')}
    </div>
  </div>
</section>

<!-- FAQ -->
<section id="faq">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="eyebrow">Veelgestelde vragen</span>
      <h2>Goed om te <span class="serif-i">weten</span></h2>
    </div>
    <div class="faq-list">
      <div class="faq-item reveal">
        <button class="faq-q" aria-expanded="false">Komt Hadi Installatie ook in ${area.name}?</button>
        <div class="faq-a"><p>Ja, ${area.name} valt binnen het werkgebied van Hadi Installatie. Bij spoed staan we vaak binnen twee uur voor de deur.</p></div>
      </div>
      <div class="faq-item reveal">
        <button class="faq-q" aria-expanded="false">Wat kost een loodgieter in ${area.name}?</button>
        <div class="faq-a"><p>Reguliere werkzaamheden kosten gemiddeld €65 tot €90 per uur exclusief btw, plus voorrijkosten. Bij grotere klussen ontvangt u vooraf een vaste prijs.</p></div>
      </div>
      <div class="faq-item reveal">
        <button class="faq-q" aria-expanded="false">Is de eerste inschatting vrijblijvend?</button>
        <div class="faq-a"><p>Ja. Aan de telefoon denken we gratis met u mee en geven we een eerlijke inschatting, voor we een afspraak inplannen.</p></div>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section id="contact" class="cta-final night">
  <canvas class="particles" data-particles="droplet"></canvas>
  <div class="wrap">
    <span class="eyebrow reveal">Direct geholpen worden</span>
    <h2 class="reveal reveal-d1">Loodgieter nodig in <span class="serif-i">${area.name}</span>?</h2>
    <p class="reveal reveal-d2">Bel direct voor spoed, of plan online een afspraak voor regulier werk.</p>
    <div class="reveal reveal-d3">
      <a href="tel:${SITE.phoneTel}" class="btn">Bel ${SITE.phoneDisplay}</a>
    </div>
    <p class="cta-sub reveal reveal-d3">Of <a href="${p}afspraak.html" style="color:var(--accent)">plan online een afspraak</a> · reactie op mail binnen 24 uur</p>
  </div>
</section>`;
}

/* ============================== HOME PAGE BODY ============================== */

function homeLd() {
  return `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Plumber",
  "name": "Hadi Installatie",
  "description": "Allround loodgieter en installatietechniek bedrijf in Den Haag voor lekkages, verstoppingen, CV-ketels, sanitair en leidingwerk.",
  "url": "${SITE.domain}/",
  "telephone": "${SITE.phoneTel}",
  "email": "${SITE.email}",
  "priceRange": "€€",
  "address": {
    "@type": "PostalAddress",
    "postalCode": "${SITE.postcode}",
    "addressLocality": "${SITE.city}",
    "addressCountry": "NL"
  },
  "areaServed": ${JSON.stringify(AREAS.map(a => a.name))}
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type":"Question","name":"Wat kost een loodgieter in Den Haag?","acceptedAnswer":{"@type":"Answer","text":"Reguliere werkzaamheden kosten gemiddeld €65 tot €90 per uur exclusief btw, plus voorrijkosten. Bij spoed, in de avond of het weekend ligt dat hoger. U ontvangt bij grotere klussen altijd vooraf een vaste prijs, geen verrassingen achteraf."}},
    {"@type":"Question","name":"Hoe snel kan Hadi Installatie langskomen?","acceptedAnswer":{"@type":"Answer","text":"Bij spoedgevallen zoals een lekkage staan we vaak binnen twee uur voor de deur in Den Haag en omgeving. Voor reguliere afspraken plannen we meestal binnen één tot twee werkdagen in."}},
    {"@type":"Question","name":"In welke plaatsen is Hadi Installatie actief?","acceptedAnswer":{"@type":"Answer","text":"We werken in heel Den Haag en de regio: Scheveningen, Segbroek, Escamp, Laak, Haagse Hout, Loosduinen, Voorburg, Rijswijk, Leidschendam, Wassenaar, Zoetermeer, Delft, Pijnacker-Nootdorp en Westland."}},
    {"@type":"Question","name":"Is de eerste inschatting vrijblijvend?","acceptedAnswer":{"@type":"Answer","text":"Ja. Aan de telefoon denken we gratis met u mee en geven we een eerlijke inschatting. Voor grotere klussen ontvangt u vooraf een vaste prijsopgave, zodat u weet waar u aan toe bent voor we beginnen."}}
  ]
}
</script>`;
}

function buildHomeBody() {
  const top4 = SERVICES.slice(0, 4);
  return `<!-- HERO -->
<header class="hero night">
  <div class="hero-bg"></div>
  <canvas class="particles" data-particles="droplet"></canvas>
  <div class="wrap hero-grid">
    <div>
      <span class="eyebrow reveal">Loodgieter · Den Haag e.o.</span>
      <h1 class="reveal reveal-d1">Een lekkage wacht niet. <span class="serif-i">Wij ook niet.</span></h1>
      <p class="lead reveal reveal-d2">Hadi Installatie is uw allround loodgieter in Den Haag: lekkages, verstoppingen, CV-storingen en badkamerinstallaties. Eén vakman, rechtstreeks aan de lijn, met een vaste prijs voordat we beginnen.</p>
      <div class="hero-cta reveal reveal-d3">
        <a href="tel:${SITE.phoneTel}" class="btn">Bel direct: ${SITE.phoneDisplay}</a>
        <a href="afspraak.html" class="btn btn-ghost">Of plan een afspraak</a>
      </div>
      <div class="trust reveal reveal-d3">
        <span class="trust-item">${svgCheck()}<b>KVK-geregistreerd</b> vakbedrijf</span>
        <span class="trust-item">${svgCheck()}Vaak binnen <b>2 uur</b> ter plekke</span>
        <span class="trust-item">${svgCheck()}<b>Vaste prijs</b> vooraf</span>
      </div>
    </div>
    <div class="hero-photo reveal reveal-d2">
      <img src="img/leidingwerk-sleutel.jpg" alt="Loodgieter zet leidingwerk vast met een steeksleutel" width="1000" height="662" loading="eager">
    </div>
  </div>
</header>

<!-- STAT BAND -->
<section class="stat-band" style="padding:0">
  <div class="wrap" style="padding:0">
    <div class="stat-row reveal">
      <div class="stat-col"><div class="num">&lt;2u</div><h3>Reactietijd bij spoed</h3><p>Vaak binnen twee uur voor de deur in Den Haag.</p></div>
      <div class="stat-col"><div class="num">100%</div><h3>Vaste prijs vooraf</h3><p>Geen meerwerk-verrassingen achteraf.</p></div>
      <div class="stat-col"><div class="num">KVK</div><h3>Geregistreerd vakbedrijf</h3><p>Ingeschreven onder KVK ${SITE.kvk}.</p></div>
      <div class="stat-col"><div class="num">15+</div><h3>Wijken &amp; gemeenten</h3><p>Actief in heel Den Haag en de regio.</p></div>
    </div>
  </div>
</section>

<!-- MARQUEE -->
<div class="marquee" aria-hidden="true">
  <div class="marquee-track">
    <span>Lekkage verhelpen</span><span>Afvoer ontstoppen</span><span>CV-ketel onderhoud</span><span>Sanitair installatie</span><span>Spoedservice</span><span>Kraan reparatie</span><span>Leidingwerk</span><span>Riolering</span>
    <span>Lekkage verhelpen</span><span>Afvoer ontstoppen</span><span>CV-ketel onderhoud</span><span>Sanitair installatie</span><span>Spoedservice</span><span>Kraan reparatie</span><span>Leidingwerk</span><span>Riolering</span>
  </div>
</div>

<!-- HERKENBAAR (pain points) -->
<section>
  <div class="wrap">
    <div class="section-head reveal">
      <span class="eyebrow">Herkenbaar?</span>
      <h2>U wilt gewoon dat het <span class="serif-i">opgelost</span> wordt</h2>
    </div>
    <div class="pain-list">
      <div class="pain-item reveal">
        <div class="pain-emoji">😰</div>
        <div><h3>Een lekkage, en u weet niet wie te bellen</h3><p>De eerste loodgieter die u belt neemt niet op, of kan pas over drie dagen. Ondertussen loopt het water door.</p></div>
      </div>
      <div class="pain-item reveal reveal-d1">
        <div class="pain-emoji">💸</div>
        <div><h3>Onduidelijke prijzen, verrassing achteraf</h3><p>Voorrijkosten, meerwerk, een factuur die anders uitpakt dan verwacht. U wilt vooraf weten waar u aan toe bent.</p></div>
      </div>
      <div class="pain-item reveal reveal-d2">
        <div class="pain-emoji">⏳</div>
        <div><h3>"We bellen u nog terug"</h3><p>En dan hoort u dagenlang niets, terwijl het probleem gewoon blijft doorwerken.</p></div>
      </div>
      <div class="pain-item reveal reveal-d3">
        <div class="pain-emoji">🔧</div>
        <div><h3>Provisorisch gerepareerd door een vorige loodgieter</h3><p>Een paar maanden later is het probleem terug, en betaalt u twee keer voor hetzelfde werk.</p></div>
      </div>
    </div>
  </div>
</section>

<!-- STATEMENT BAND -->
<section class="statement night band-line">
  <div class="wrap">
    <p class="big reveal">De meeste loodgieters laten u wachten en verrassen u achteraf. <span class="serif-i">Wij bellen terug, en houden ons aan de prijs die we afspraken.</span></p>
  </div>
</section>

<!-- DIENSTEN -->
<section id="diensten" class="band-2">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="eyebrow">Diensten</span>
      <h2>Alles rond water en verwarming, <span class="serif-i">onder één dak</span></h2>
      <p>Van een druppende kraan tot een complete badkamer: Hadi Installatie regelt het zelf, zonder onderaannemers.</p>
    </div>
    <div class="grid-4">
      ${top4.map((s, i) => `<a href="diensten/${s.slug}.html" class="card reveal reveal-d${i}">
        <span class="icon-badge">${ICONS[s.icon]}</span>
        <h3>${s.h1}</h3>
        <p>${truncate(s.lead, 90)}</p>
      </a>`).join('\n      ')}
    </div>
  </div>
</section>

<!-- WAAROM WIJ -->
<section id="waarom-wij">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="eyebrow">Waarom wij</span>
      <h2>Waarom Den Haag voor <span class="serif-i">${SITE.ownerName}</span> kiest</h2>
      <p>Mooie beloftes maakt iedereen. Dit is wat wij anders doen.</p>
    </div>
    <div class="icon-list">
      <div class="icon-list-item reveal">
        <span class="icon-badge-solid">${ICONS.phoneCall}</span>
        <div><h3>Rechtstreeks contact met ${SITE.ownerName}</h3><p>Geen callcenter, geen keuzemenu. U spreekt direct de vakman die ook langskomt.</p></div>
      </div>
      <div class="icon-list-item reveal reveal-d1">
        <span class="icon-badge-solid">${ICONS.checkCircle}</span>
        <div><h3>Vaste prijs, zwart op wit</h3><p>Voor we beginnen weet u exact wat het kost. Geen kleine lettertjes.</p></div>
      </div>
      <div class="icon-list-item reveal reveal-d2">
        <span class="icon-badge-solid">${ICONS.clock}</span>
        <div><h3>Snel ter plekke bij spoed</h3><p>Lekkage of geen warm water? Vaak binnen twee uur staat ${SITE.ownerName} voor de deur.</p></div>
      </div>
      <div class="icon-list-item reveal reveal-d3">
        <span class="icon-badge-solid">${ICONS.mapPin}</span>
        <div><h3>Lokaal geworteld in Den Haag</h3><p>Actief in 15+ wijken en gemeenten, van Scheveningen tot Zoetermeer.</p></div>
      </div>
    </div>
  </div>
</section>

<!-- WERKWIJZE -->
<section id="werkwijze" class="band-2">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="eyebrow">Werkwijze</span>
      <h2>Van melding tot opgelost, <span class="serif-i">in drie stappen</span></h2>
    </div>
    <div class="steps-stack">
      <div class="step-row reveal">
        <div class="big">01</div>
        <div><h3>Bel of app ons</h3><p>Beschrijf het probleem, we denken direct mee en geven een eerlijke inschatting.</p></div>
      </div>
      <div class="step-row reveal reveal-d1">
        <div class="big">02</div>
        <div><h3>Afspraak &amp; vaste prijs</h3><p>Bij spoed vaak dezelfde dag. Voor grotere klussen ontvangt u vooraf een vaste prijsopgave.</p></div>
      </div>
      <div class="step-row reveal reveal-d2">
        <div class="big">03</div>
        <div><h3>Opgelost, netjes achtergelaten</h3><p>We werken het probleem af en ruimen op alsof we er nooit zijn geweest.</p></div>
      </div>
    </div>
  </div>
</section>

<!-- PROJECTEN -->
<section id="projecten" style="padding-top:0">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="eyebrow">Recent werk</span>
      <h2>Zo pakken wij het <span class="serif-i">aan</span></h2>
    </div>
    <div class="projects">
      <a href="diensten/sanitair-en-badkamer-installatie.html" class="project p1 reveal">
        <img class="ph-img" src="img/badkamer-dubbele-wastafel.jpg" alt="Nieuwe badkamerinstallatie met dubbele wastafel" loading="lazy" width="1000" height="1250">
        <div class="project-info">
          <span class="tag">Badkamer · Segbroek</span>
          <h3>Sanitair volledig vernieuwd</h3>
        </div>
      </a>
      <a href="diensten/cv-ketel-installatie-en-onderhoud.html" class="project p2 reveal reveal-d1">
        <img class="ph-img" src="img/radiator-installatie.jpg" alt="Installatie van een nieuwe radiator" loading="lazy" width="1000" height="667">
        <div class="project-info">
          <span class="tag">CV &amp; verwarming · Scheveningen</span>
          <h3>Radiator en CV-groep vervangen</h3>
        </div>
      </a>
      <a href="diensten/keukeninstallatie.html" class="project p3 reveal reveal-d2">
        <img class="ph-img" src="img/waterleiding-installeren.jpg" alt="Waterleiding aangesloten onder het aanrecht" loading="lazy" width="1000" height="667">
        <div class="project-info">
          <span class="tag">Keuken · Voorburg</span>
          <h3>Keukenkraan en aansluiting hersteld</h3>
        </div>
      </a>
    </div>
  </div>
</section>

<!-- WERKGEBIED -->
<section id="werkgebied">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="eyebrow">Werkgebied</span>
      <h2>Actief in <span class="serif-i">heel Den Haag</span> en de regio</h2>
      <p>Van Scheveningen tot Zoetermeer: Hadi Installatie is lokaal en snel ter plekke.</p>
    </div>
    <div class="area-list reveal">
      ${AREAS.map(a => `<a href="locaties/${a.slug}.html">${a.name}</a>`).join('\n      ')}
    </div>
  </div>
</section>

<!-- OVER ONS -->
<section id="over-ons">
  <div class="wrap">
    <div class="about-grid">
      <div class="about-photo reveal">
        <span>Hier komt een echte foto van ${SITE.ownerName} aan het werk</span>
      </div>
      <div class="about-copy">
        <span class="eyebrow reveal">Wie is ${SITE.ownerName}</span>
        <h2 class="reveal reveal-d1">Eén vakman, <span class="serif-i">rechtstreeks</span> aan de lijn</h2>
        <p class="reveal reveal-d2">Hadi Installatie is het eigen bedrijf van ${SITE.ownerName}, opgericht in Den Haag. Geen callcenter, geen wisselende monteurs: als u belt, spreekt u degene die ook daadwerkelijk langskomt en het werk uitvoert.</p>
        <p class="reveal reveal-d2">Van een druppende kraan tot een complete CV-installatie: elke klus wordt met dezelfde aandacht en dezelfde eerlijke prijsafspraak aangepakt.</p>
        <ul class="usp-list reveal reveal-d3">
          <li><div><b>Eigen vakman, geen onderaannemers</b><span>U heeft altijd met ${SITE.ownerName} zelf te maken, van intake tot oplevering.</span></div></li>
          <li><div><b>Rechtstreeks nummer</b><span>Geen wachtrij of keuzemenu, gewoon direct contact.</span></div></li>
          <li><div><b>Lokaal in Den Haag</b><span>Kent de wijken en is daardoor snel ter plekke.</span></div></li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- REVIEWS / VERTROUWEN -->
<section id="reviews" class="band-2">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="eyebrow">Eerlijk verhaal</span>
      <h2>Nieuw in Den Haag, <span class="serif-i">niet nieuw in het vak</span></h2>
      <p>Hadi Installatie is een jong bedrijf. In plaats van geleende sterren geven we u liever dit.</p>
    </div>
    <div class="review-grid">
      <div class="review reveal">
        <span class="icon">${ICONS.checkCircle}</span>
        <h3>Referentie op aanvraag</h3>
        <p>Liever eerst iemand spreken die eerder geholpen is? Vraag er gerust naar tijdens het intakegesprek.</p>
      </div>
      <div class="review reveal reveal-d1">
        <span class="icon">${ICONS.wrench}</span>
        <h3>Niet goed? Kosteloos terug</h3>
        <p>Is een klus niet naar wens opgelost? Dan komen we terug tot het klopt, zonder dat u dat betaalt.</p>
      </div>
      <div class="review reveal reveal-d2">
        <span class="icon">${ICONS.badge}</span>
        <h3>Vaste prijs, zwart op wit</h3>
        <p>Voor u akkoord geeft weet u exact wat het kost. Geen kleine lettertjes, geen meerwerk achteraf.</p>
      </div>
    </div>
  </div>
</section>

<!-- FAQ -->
<section id="faq">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="eyebrow">Veelgestelde vragen</span>
      <h2>Goed om te <span class="serif-i">weten</span></h2>
    </div>
    <div class="faq-list">
      <div class="faq-item reveal">
        <button class="faq-q" aria-expanded="false">Wat kost een loodgieter in Den Haag?</button>
        <div class="faq-a"><p>Reguliere werkzaamheden kosten gemiddeld €65 tot €90 per uur exclusief btw, plus voorrijkosten. Bij spoed, in de avond of het weekend ligt dat hoger. Bij grotere klussen ontvangt u altijd vooraf een vaste prijs.</p></div>
      </div>
      <div class="faq-item reveal">
        <button class="faq-q" aria-expanded="false">Hoe snel kan Hadi Installatie langskomen?</button>
        <div class="faq-a"><p>Bij spoedgevallen zoals een lekkage staan we vaak binnen twee uur voor de deur in Den Haag en omgeving. Voor reguliere afspraken plannen we meestal binnen één tot twee werkdagen in.</p></div>
      </div>
      <div class="faq-item reveal">
        <button class="faq-q" aria-expanded="false">In welke plaatsen is Hadi Installatie actief?</button>
        <div class="faq-a"><p>We werken in heel Den Haag en de regio: Scheveningen, Segbroek, Escamp, Laak, Haagse Hout, Loosduinen, Voorburg, Rijswijk, Leidschendam, Wassenaar, Zoetermeer, Delft, Pijnacker-Nootdorp en Westland. Twijfelt u? Bel gerust even.</p></div>
      </div>
      <div class="faq-item reveal">
        <button class="faq-q" aria-expanded="false">Is de eerste inschatting vrijblijvend?</button>
        <div class="faq-a"><p>Ja. Aan de telefoon denken we gratis met u mee en geven we een eerlijke inschatting. Voor grotere klussen ontvangt u vooraf een vaste prijsopgave, zodat u weet waar u aan toe bent voor we beginnen.</p></div>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section id="contact" class="cta-final night">
  <canvas class="particles" data-particles="droplet"></canvas>
  <div class="wrap">
    <span class="eyebrow reveal">Direct geholpen worden</span>
    <h2 class="reveal reveal-d1">Lekkage, storing of <span class="serif-i">verstopping</span>?</h2>
    <p class="reveal reveal-d2">Bel direct voor spoed, of plan online een afspraak voor regulier werk. U weet vooraf waar u aan toe bent.</p>
    <div class="reveal reveal-d3">
      <a href="tel:${SITE.phoneTel}" class="btn">Bel ${SITE.phoneDisplay}</a>
    </div>
    <p class="cta-sub reveal reveal-d3">Of <a href="afspraak.html" style="color:var(--accent-2)">plan online een afspraak</a> · reactie op mail binnen 24 uur</p>
  </div>
</section>`;
}

/* ============================== AFSPRAAK (booking) PAGE ============================== */

function afspraakLd() {
  return `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Plumber",
  "name": "Hadi Installatie",
  "telephone": "${SITE.phoneTel}",
  "address": { "@type": "PostalAddress", "postalCode": "${SITE.postcode}", "addressLocality": "${SITE.city}", "addressCountry": "NL" }
}
</script>`;
}

function buildAfspraakBody() {
  return `<!-- PAGE HERO -->
<header class="page-hero" style="padding-bottom:40px">
  <div class="wrap">
    ${breadcrumbNav([{ label: 'Home', href: 'index.html' }, { label: 'Afspraak maken' }])}
    <span class="eyebrow reveal">Gratis &amp; vrijblijvend</span>
    <h1 class="reveal reveal-d1">Plan uw <span class="serif-i">afspraak</span></h1>
    <p class="lead reveal reveal-d2">Vertel ons kort wat er speelt. Bij spoed belt u ons liever direct, voor regulier werk plannen we via dit formulier binnen 24 uur een moment in.</p>
  </div>
</header>

<!-- BOOKING -->
<section class="booking" id="formulier">
  <div class="wrap">
    <div class="booking-grid">

      <!-- FORM -->
      <div class="form-card reveal">
        <form id="bookingForm" action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="access_key" value="VUL-HIER-UW-WEB3FORMS-ACCESS-KEY-IN">
          <input type="hidden" name="subject" value="Nieuwe afspraakaanvraag via hadi-installatie.nl">
          <input type="hidden" name="redirect" value="https://hadi-installatie.nl/bedankt.html">
          <input type="checkbox" name="botcheck" class="honeypot" tabindex="-1" autocomplete="off">
          <div class="form-row">
            <div class="field">
              <label for="naam">Naam</label>
              <input type="text" id="naam" name="naam" placeholder="Uw naam" required autocomplete="name">
            </div>
            <div class="field">
              <label for="telefoon">Telefoonnummer</label>
              <input type="tel" id="telefoon" name="telefoon" placeholder="06 12345678" required autocomplete="tel">
            </div>
          </div>
          <div class="form-row">
            <div class="field">
              <label for="email">E-mailadres <span class="opt">(optioneel)</span></label>
              <input type="email" id="email" name="email" placeholder="naam@voorbeeld.nl" autocomplete="email">
            </div>
            <div class="field">
              <label for="plaats">Plaats</label>
              <input type="text" id="plaats" name="plaats" placeholder="Den Haag" required autocomplete="address-level2">
            </div>
          </div>
          <div class="field">
            <label for="type">Waar kunnen we mee helpen?</label>
            <select id="type" name="type" required>
              <option value="" disabled selected>Maak een keuze</option>
              ${SERVICES.map(s => `<option>${s.nav}</option>`).join('\n              ')}
              <option>Iets anders</option>
            </select>
          </div>
          <div class="field">
            <label for="bericht">Vertel kort wat er speelt <span class="opt">(optioneel)</span></label>
            <textarea id="bericht" name="bericht" placeholder="Bijv. de afvoer van de keuken loopt niet meer door."></textarea>
          </div>
          <button type="submit" class="btn btn-full">Aanvraag versturen</button>
          <p class="form-note">Wij reageren binnen 24 uur. Uw gegevens gebruiken we alleen om contact op te nemen, nooit voor iets anders.</p>
        </form>
      </div>

      <!-- SIDEBAR -->
      <aside>
        <div class="aside-card reveal reveal-d1">
          <h3>Hoe het <span class="serif-i">werkt</span></h3>
          <ul class="mini-steps">
            <li><span class="n">1.</span><div><b>U vult het formulier in</b><span>Duurt nog geen minuut.</span></div></li>
            <li><span class="n">2.</span><div><b>Wij reageren binnen 24 uur</b><span>We plannen een moment dat u uitkomt.</span></div></li>
            <li><span class="n">3.</span><div><b>Klus opgelost</b><span>Met een vaste prijs, vooraf afgesproken.</span></div></li>
          </ul>
        </div>
        <div class="aside-card reveal reveal-d2">
          <p class="aside-alt">Spoed? Bel liever direct:<br><a href="tel:${SITE.phoneTel}">${SITE.phoneDisplay}</a><br>Vaak binnen 2 uur ter plekke in Den Haag e.o.</p>
        </div>
      </aside>

    </div>
  </div>
</section>`;
}

/* ============================== OVER ONS PAGE ============================== */

function buildOverOnsBody() {
  return `<!-- PAGE HERO -->
<header class="page-hero">
  <div class="wrap">
    ${breadcrumbNav([{ label: 'Home', href: 'index.html' }, { label: 'Over ons' }])}
    <span class="eyebrow reveal">Over ons</span>
    <h1 class="reveal reveal-d1">Wie is <span class="serif-i">${SITE.ownerName}</span></h1>
    <p class="lead reveal reveal-d2">Eén vakman, rechtstreeks aan de lijn. Geen callcenter, geen wisselende monteurs.</p>
  </div>
</header>

<section style="padding-top:20px">
  <div class="wrap">
    <div class="about-grid">
      <div class="about-photo reveal">
        <span>Hier komt een echte foto van ${SITE.ownerName} aan het werk</span>
      </div>
      <div class="about-copy">
        <span class="eyebrow reveal">Het verhaal</span>
        <h2 class="reveal reveal-d1">Vakwerk, <span class="serif-i">geen omwegen</span></h2>
        <p class="reveal reveal-d2">Hadi Installatie is het eigen bedrijf van ${SITE.ownerName}, opgericht in Den Haag en geregistreerd onder KVK ${SITE.kvk}. Geen callcenter, geen wisselende monteurs: als u belt, spreekt u degene die ook daadwerkelijk langskomt en het werk uitvoert.</p>
        <p class="reveal reveal-d2">Van een druppende kraan tot een complete CV-installatie: elke klus wordt met dezelfde aandacht en dezelfde eerlijke prijsafspraak aangepakt. Hadi Installatie is een jong bedrijf, dat betekent scherp op prijs, flexibel in planning en gemotiveerd om het bij elke klus goed te doen.</p>
        <ul class="usp-list reveal reveal-d3">
          <li><div><b>Eigen vakman, geen onderaannemers</b><span>U heeft altijd met ${SITE.ownerName} zelf te maken, van intake tot oplevering.</span></div></li>
          <li><div><b>Rechtstreeks nummer</b><span>Geen wachtrij of keuzemenu, gewoon direct contact.</span></div></li>
          <li><div><b>Lokaal in Den Haag</b><span>Kent de wijken en is daardoor snel ter plekke.</span></div></li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="band-2">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="eyebrow">Werkgebied</span>
      <h2>Actief in <span class="serif-i">heel Den Haag</span> en de regio</h2>
    </div>
    <div class="area-list reveal">
      ${AREAS.map(a => `<a href="locaties/${a.slug}.html">${a.name}</a>`).join('\n      ')}
    </div>
  </div>
</section>

<!-- CTA -->
<section id="contact" class="cta-final night">
  <canvas class="particles" data-particles="droplet"></canvas>
  <div class="wrap">
    <span class="eyebrow reveal">Maak kennis</span>
    <h2 class="reveal reveal-d1">Even <span class="serif-i">bellen</span>?</h2>
    <p class="reveal reveal-d2">Bel direct voor spoed, of plan online een afspraak voor regulier werk.</p>
    <div class="reveal reveal-d3">
      <a href="tel:${SITE.phoneTel}" class="btn">Bel ${SITE.phoneDisplay}</a>
    </div>
    <p class="cta-sub reveal reveal-d3">Of <a href="afspraak.html" style="color:var(--accent)">plan online een afspraak</a></p>
  </div>
</section>`;
}

/* ============================== PRIVACY PAGE ============================== */

function buildPrivacyBody() {
  return `<!-- PAGE HERO -->
<header class="page-hero" style="padding-bottom:20px">
  <div class="wrap">
    ${breadcrumbNav([{ label: 'Home', href: 'index.html' }, { label: 'Privacyverklaring' }])}
    <span class="eyebrow reveal">Juridisch</span>
    <h1 class="reveal reveal-d1">Privacy<span class="serif-i">verklaring</span></h1>
    <p class="lead reveal reveal-d2">Laatst bijgewerkt: 2026. Hadi Installatie gaat zorgvuldig om met uw persoonsgegevens.</p>
  </div>
</header>

<section style="padding-top:20px">
  <div class="wrap prose reveal">
    <h2>Wie zijn wij</h2>
    <p>Hadi Installatie, gevestigd in Den Haag (KVK ${SITE.kvk}), is verantwoordelijk voor de verwerking van persoonsgegevens zoals beschreven in deze privacyverklaring. Vragen? Neem contact op via <a href="mailto:${SITE.email}" style="color:var(--accent)">${SITE.email}</a>.</p>

    <h2>Welke gegevens verwerken wij</h2>
    <ul>
      <li>Naam, telefoonnummer en (indien opgegeven) e-mailadres</li>
      <li>Adresgegevens die nodig zijn om een afspraak in te plannen</li>
      <li>Berichten die u ons stuurt via het contactformulier</li>
    </ul>

    <h2>Waarom verwerken wij deze gegevens</h2>
    <p>Wij gebruiken uw gegevens uitsluitend om contact met u op te nemen over uw aanvraag, een afspraak in te plannen en de overeengekomen werkzaamheden uit te voeren en te factureren. Wij verkopen uw gegevens nooit aan derden.</p>

    <h2>Bewaartermijn</h2>
    <p>Wij bewaren uw gegevens niet langer dan noodzakelijk voor de doelen waarvoor ze zijn verzameld, tenzij een langere bewaartermijn wettelijk verplicht is, bijvoorbeeld voor de fiscale bewaarplicht.</p>

    <h2>Delen met derden</h2>
    <p>Wij delen uw gegevens alleen met derden als dat nodig is voor de uitvoering van onze dienstverlening, zoals de partij die ons contactformulier technisch verwerkt, of wanneer dit wettelijk verplicht is.</p>

    <h2>Uw rechten</h2>
    <p>U heeft het recht om uw gegevens in te zien, te corrigeren of te laten verwijderen. Neem hiervoor contact op via <a href="mailto:${SITE.email}" style="color:var(--accent)">${SITE.email}</a>.</p>

    <h2>Cookies</h2>
    <p>Deze website gebruikt alleen technisch noodzakelijke functionaliteit. Zodra er analytische of marketingcookies worden toegevoegd, wordt deze verklaring aangevuld en vragen wij waar nodig om uw toestemming.</p>
  </div>
</section>`;
}

/* ============================== BEDANKT PAGE ============================== */

function buildBedanktBody() {
  return `<header class="page-hero" style="min-height:60vh;display:flex;align-items:center">
  <div class="wrap" style="text-align:center;max-width:640px">
    <span class="eyebrow reveal">Aanvraag ontvangen</span>
    <h1 class="reveal reveal-d1">Bedankt, <span class="serif-i">we nemen contact op</span></h1>
    <p class="lead reveal reveal-d2" style="margin-left:auto;margin-right:auto">We reageren binnen 24 uur om een moment in te plannen dat u uitkomt. Heeft u haast? Bel gerust direct.</p>
    <div class="hero-cta reveal reveal-d3" style="justify-content:center">
      <a href="tel:${SITE.phoneTel}" class="btn">Bel ${SITE.phoneDisplay}</a>
      <a href="index.html" class="btn btn-ghost">Terug naar de homepage</a>
    </div>
  </div>
</header>`;
}

/* ============================== WRITE FILES ============================== */

fs.mkdirSync(path.join(ROOT, 'diensten'), { recursive: true });
fs.mkdirSync(path.join(ROOT, 'locaties'), { recursive: true });

const homeHtml = page({
  title: 'Loodgieter Den Haag | Hadi Installatie — Snel, Eerlijk, Vakwerk',
  description: 'Loodgieter in Den Haag nodig? Hadi Installatie lost lekkages, verstoppingen en CV-storingen op met een vaste prijs vooraf. Bel direct of plan een afspraak.',
  canonicalPath: '',
  prefix: '',
  extraLd: homeLd(),
  bodyHtml: buildHomeBody(),
});
fs.writeFileSync(path.join(ROOT, 'index.html'), homeHtml);

for (const svc of SERVICES) {
  const html = page({
    title: svc.metaTitle,
    description: svc.metaDescription,
    canonicalPath: `diensten/${svc.slug}.html`,
    prefix: '../',
    extraLd: serviceLd(svc),
    bodyHtml: buildServiceBody(svc),
    useScrollThreshold: true,
  });
  fs.writeFileSync(path.join(ROOT, 'diensten', `${svc.slug}.html`), html);
}

for (const area of AREAS) {
  const html = page({
    title: `Loodgieter ${area.name} | Hadi Installatie`,
    description: `Loodgieter in ${area.name} nodig? Hadi Installatie lost lekkages, verstoppingen en CV-storingen op, met een vaste prijs vooraf.`,
    canonicalPath: `locaties/${area.slug}.html`,
    prefix: '../',
    extraLd: locationLd(area),
    bodyHtml: buildLocationBody(area),
    useScrollThreshold: true,
  });
  fs.writeFileSync(path.join(ROOT, 'locaties', `${area.slug}.html`), html);
}

fs.writeFileSync(path.join(ROOT, 'afspraak.html'), page({
  title: 'Plan een afspraak | Hadi Installatie — Loodgieter Den Haag',
  description: 'Plan online een afspraak met Hadi Installatie in Den Haag. Wij reageren binnen 24 uur. Bij spoed kunt u ons direct bellen.',
  canonicalPath: 'afspraak.html',
  prefix: '',
  extraLd: afspraakLd(),
  bodyHtml: buildAfspraakBody(),
  skipSticky: true,
  skipFaq: true,
}));

fs.writeFileSync(path.join(ROOT, 'over-ons.html'), page({
  title: 'Over ons | Hadi Installatie — Loodgieter Den Haag',
  description: 'Maak kennis met Hadi Installatie: allround loodgieter in Den Haag. Eén vakman, rechtstreeks aan de lijn, geen callcenter.',
  canonicalPath: 'over-ons.html',
  prefix: '',
  extraLd: '',
  bodyHtml: buildOverOnsBody(),
  useScrollThreshold: true,
  skipFaq: true,
}));

fs.writeFileSync(path.join(ROOT, 'privacy.html'), page({
  title: 'Privacyverklaring | Hadi Installatie',
  description: 'Lees hoe Hadi Installatie omgaat met uw persoonsgegevens.',
  canonicalPath: 'privacy.html',
  prefix: '',
  extraLd: '',
  bodyHtml: buildPrivacyBody(),
  skipFaq: true,
}));

fs.writeFileSync(path.join(ROOT, 'bedankt.html'), page({
  title: 'Bedankt voor uw aanvraag | Hadi Installatie',
  description: 'Uw aanvraag is ontvangen. Hadi Installatie neemt binnen 24 uur contact met u op.',
  canonicalPath: 'bedankt.html',
  prefix: '',
  extraLd: '',
  bodyHtml: buildBedanktBody(),
  skipSticky: true,
  skipFaq: true,
}));

/* ============================== SITEMAP & ROBOTS ============================== */

const staticPages = ['', 'over-ons.html', 'afspraak.html', 'privacy.html'];
const urls = [
  ...staticPages.map(p => `${SITE.domain}/${p}`),
  ...SERVICES.map(s => `${SITE.domain}/diensten/${s.slug}.html`),
  ...AREAS.map(a => `${SITE.domain}/locaties/${a.slug}.html`),
];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url><loc>${u}</loc></url>`).join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), sitemap);

const robots = `User-agent: *
Allow: /

Sitemap: ${SITE.domain}/sitemap.xml
`;
fs.writeFileSync(path.join(ROOT, 'robots.txt'), robots);

const totalPages = 1 + staticPages.length - 1 + 1 /* bedankt */ + SERVICES.length + AREAS.length;
console.log(`Generated ${SERVICES.length} service pages and ${AREAS.length} location pages.`);
console.log(`Total HTML pages: ${totalPages} (home, over-ons, afspraak, privacy, bedankt, ${SERVICES.length} diensten, ${AREAS.length} locaties)`);
console.log(`sitemap.xml: ${urls.length} URLs (bedankt.html excluded on purpose)`);

module.exports = { SITE, SERVICES, AREAS, page, head, nav, footer, stickyCta, scripts, svgCheck };
