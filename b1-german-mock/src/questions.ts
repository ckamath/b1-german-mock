// Types for Reading Section
export type ReadingQuestionType =
  | 'text-matching'
  | 'multiple-choice'
  | 'situation-matching'
  | 'writing'
  | 'speaking';

export interface ReadingQuestion {
  id: number;
  type: ReadingQuestionType;
  prompt: string | string[]; // Now allows multiple paragraphs
  options?: string[];
  answer: string | string[];
  extra?: any;
}

// Reading Section Data
export const readingQuestions: ReadingQuestion[] = [
  // Part 1: Text Matching
  {
    id: 1,
    type: 'text-matching',
    prompt: [
      'Lesen Sie die 5 kurzen Texte und ordnen Sie sie den Überschriften a-h zu. Es gibt 3 Überschriften zu viel.',
      'Text 1: Immer mehr Deutsche achten beim Einkaufen auf die Umwelt. Bio-Produkte und regionale Lebensmittel werden beliebter. Viele Supermärkte bieten jetzt mehr umweltfreundliche Alternativen an. Auch Verpackungen aus Plastik werden durch nachhaltige Materialien ersetzt.'
    ],
    options: [
      'a) Probleme mit öffentlichen Verkehrsmitteln',
      'b) Umweltfreundlich einkaufen wird populärer',
      'c) Neue Technologie verändert den Arbeitsplatz',
      'd) Gesunde Ernährung für Berufstätige',
      'e) Deutschkurse für Migranten',
      'f) Wohnungsmarkt in deutschen Städten',
      'g) Freizeitaktivitäten für Familien',
      'h) Sport im Alter',
    ],
    answer: 'b',
    extra: { part: 1, textNumber: 1 },
  },
  {
    id: 2,
    type: 'text-matching',
    prompt: [
      'Lesen Sie die 5 kurzen Texte und ordnen Sie sie den Überschriften a-h zu. Es gibt 3 Überschriften zu viel.',
      'Text 2: Durch die Digitalisierung arbeiten heute viele Menschen von zu Hause. Videokonferenzen ersetzen persönliche Meetings. Diese Entwicklung hat Vor- und Nachteile für Arbeitnehmer und Firmen. Die Work-Life-Balance wird neu definiert.'
    ],
    options: [
      'a) Probleme mit öffentlichen Verkehrsmitteln',
      'b) Umweltfreundlich einkaufen wird populärer',
      'c) Neue Technologie verändert den Arbeitsplatz',
      'd) Gesunde Ernährung für Berufstätige',
      'e) Deutschkurse für Migranten',
      'f) Wohnungsmarkt in deutschen Städten',
      'g) Freizeitaktivitäten für Familien',
      'h) Sport im Alter',
    ],
    answer: 'c',
    extra: { part: 1, textNumber: 2 },
  },
  {
    id: 3,
    type: 'text-matching',
    prompt: [
      'Lesen Sie die 5 kurzen Texte und ordnen Sie sie den Überschriften a-h zu. Es gibt 3 Überschriften zu viel.',
      'Text 3: In München, Berlin und Hamburg steigen die Mietpreise weiter stark an. Besonders junge Familien finden kaum noch bezahlbare Wohnungen. Die Politik diskutiert über neue Lösungen für dieses Problem.'
    ],
    options: [
      'a) Probleme mit öffentlichen Verkehrsmitteln',
      'b) Umweltfreundlich einkaufen wird populärer',
      'c) Neue Technologie verändert den Arbeitsplatz',
      'd) Gesunde Ernährung für Berufstätige',
      'e) Deutschkurse für Migranten',
      'f) Wohnungsmarkt in deutschen Städten',
      'g) Freizeitaktivitäten für Familien',
      'h) Sport im Alter',
    ],
    answer: 'f',
    extra: { part: 1, textNumber: 3 },
  },
  {
    id: 4,
    type: 'text-matching',
    prompt: [
      'Lesen Sie die 5 kurzen Texte und ordnen Sie sie den Überschriften a-h zu. Es gibt 3 Überschriften zu viel.',
      'Text 4: Für Menschen über 60 ist Sport besonders wichtig. Schwimmen, Wandern und Gymnastik halten fit und gesund. Viele Vereine bieten spezielle Programme für Senioren an. Die Krankenkassen unterstützen diese Aktivitäten.'
    ],
    options: [
      'a) Probleme mit öffentlichen Verkehrsmitteln',
      'b) Umweltfreundlich einkaufen wird populärer',
      'c) Neue Technologie verändert den Arbeitsplatz',
      'd) Gesunde Ernährung für Berufstätige',
      'e) Deutschkurse für Migranten',
      'f) Wohnungsmarkt in deutschen Städten',
      'g) Freizeitaktivitäten für Familien',
      'h) Sport im Alter',
    ],
    answer: 'h',
    extra: { part: 1, textNumber: 4 },
  },
  {
    id: 5,
    type: 'text-matching',
    prompt: [
      'Lesen Sie die 5 kurzen Texte und ordnen Sie sie den Überschriften a-h zu. Es gibt 3 Überschriften zu viel.',
      'Text 5: Berufstätige haben oft wenig Zeit zum Kochen. Fast Food ist ungesund, aber praktisch. Ernährungsexperten empfehlen einfache, schnelle Rezepte mit frischen Zutaten. Meal Prep wird immer beliebter.'
    ],
    options: [
      'a) Probleme mit öffentlichen Verkehrsmitteln',
      'b) Umweltfreundlich einkaufen wird populärer',
      'c) Neue Technologie verändert den Arbeitsplatz',
      'd) Gesunde Ernährung für Berufstätige',
      'e) Deutschkurse für Migranten',
      'f) Wohnungsmarkt in deutschen Städten',
      'g) Freizeitaktivitäten für Familien',
      'h) Sport im Alter',
    ],
    answer: 'd',
    extra: { part: 1, textNumber: 5 },
  },
  // Reading Part 2: Detailed Comprehension
  {
    id: 6,
    type: 'multiple-choice',
    prompt: [
      'Lesen Sie den Text und beantworten Sie die Fragen 6-10. Wählen Sie a, b oder c.',
      'Text: Homeoffice - Arbeiten von zu Hause',
      'Die Corona-Pandemie hat das Arbeitsleben in Deutschland stark verändert. Millionen von Menschen arbeiten jetzt regelmäßig von zu Hause. Vor der Pandemie war Homeoffice nur in wenigen Firmen möglich. Heute bieten fast alle großen Unternehmen diese Möglichkeit an.',
      'Für viele Arbeitnehmer bringt das Homeoffice große Vorteile. Sie sparen Zeit und Geld, weil sie nicht jeden Tag ins Büro fahren müssen. Die Work-Life-Balance wird besser, da man Familie und Beruf leichter kombinieren kann. Besonders Eltern schätzen diese Flexibilität.',
      'Aber das Arbeiten von zu Hause hat auch Nachteile. Viele Menschen fühlen sich isoliert und vermissen den direkten Kontakt zu den Kollegen. Die Kommunikation funktioniert oft schlechter als im Büro. Außerdem ist es schwer, Beruf und Privatleben zu trennen, wenn beides zu Hause stattfindet.',
      'Experten glauben, dass eine Mischung aus Homeoffice und Büroarbeit die beste Lösung ist. So können Arbeitnehmer die Vorteile beider Arbeitsformen nutzen. Viele Firmen planen für die Zukunft ein hybrides Arbeitsmodell.',
      'Frage 6: Wie hat sich die Situation beim Homeoffice durch Corona verändert?'
    ],
    options: [
      'a) Es gibt jetzt weniger Homeoffice als früher.',
      'b) Viel mehr Menschen arbeiten jetzt von zu Hause.',
      'c) Nur kleine Firmen bieten Homeoffice an.'
    ],
    answer: 'b',
    extra: { part: 2, questionNumber: 6 },
  },
  {
    id: 7,
    type: 'multiple-choice',
    prompt: [
      'Lesen Sie den Text und beantworten Sie die Fragen 6-10. Wählen Sie a, b oder c.',
      'Text: Homeoffice - Arbeiten von zu Hause',
      'Die Corona-Pandemie hat das Arbeitsleben in Deutschland stark verändert. Millionen von Menschen arbeiten jetzt regelmäßig von zu Hause. Vor der Pandemie war Homeoffice nur in wenigen Firmen möglich. Heute bieten fast alle großen Unternehmen diese Möglichkeit an.',
      'Für viele Arbeitnehmer bringt das Homeoffice große Vorteile. Sie sparen Zeit und Geld, weil sie nicht jeden Tag ins Büro fahren müssen. Die Work-Life-Balance wird besser, da man Familie und Beruf leichter kombinieren kann. Besonders Eltern schätzen diese Flexibilität.',
      'Aber das Arbeiten von zu Hause hat auch Nachteile. Viele Menschen fühlen sich isoliert und vermissen den direkten Kontakt zu den Kollegen. Die Kommunikation funktioniert oft schlechter als im Büro. Außerdem ist es schwer, Beruf und Privatleben zu trennen, wenn beides zu Hause stattfindet.',
      'Experten glauben, dass eine Mischung aus Homeoffice und Büroarbeit die beste Lösung ist. So können Arbeitnehmer die Vorteile beider Arbeitsformen nutzen. Viele Firmen planen für die Zukunft ein hybrides Arbeitsmodell.',
      'Frage 7: Welcher Vorteil von Homeoffice wird im Text erwähnt?'
    ],
    options: [
      'a) Man verdient mehr Geld.',
      'b) Die Arbeit ist weniger stressig.',
      'c) Man spart Zeit beim Fahren ins Büro.'
    ],
    answer: 'c',
    extra: { part: 2, questionNumber: 7 },
  },
  {
    id: 8,
    type: 'multiple-choice',
    prompt: [
      'Lesen Sie den Text und beantworten Sie die Fragen 6-10. Wählen Sie a, b oder c.',
      'Text: Homeoffice - Arbeiten von zu Hause',
      'Die Corona-Pandemie hat das Arbeitsleben in Deutschland stark verändert. Millionen von Menschen arbeiten jetzt regelmäßig von zu Hause. Vor der Pandemie war Homeoffice nur in wenigen Firmen möglich. Heute bieten fast alle großen Unternehmen diese Möglichkeit an.',
      'Für viele Arbeitnehmer bringt das Homeoffice große Vorteile. Sie sparen Zeit und Geld, weil sie nicht jeden Tag ins Büro fahren müssen. Die Work-Life-Balance wird besser, da man Familie und Beruf leichter kombinieren kann. Besonders Eltern schätzen diese Flexibilität.',
      'Aber das Arbeiten von zu Hause hat auch Nachteile. Viele Menschen fühlen sich isoliert und vermissen den direkten Kontakt zu den Kollegen. Die Kommunikation funktioniert oft schlechter als im Büro. Außerdem ist es schwer, Beruf und Privatleben zu trennen, wenn beides zu Hause stattfindet.',
      'Experten glauben, dass eine Mischung aus Homeoffice und Büroarbeit die beste Lösung ist. So können Arbeitnehmer die Vorteile beider Arbeitsformen nutzen. Viele Firmen planen für die Zukunft ein hybrides Arbeitsmodell.',
      'Frage 8: Was ist ein Problem beim Homeoffice?'
    ],
    options: [
      'a) Es kostet mehr Geld.',
      'b) Man hat weniger Kontakt zu Kollegen.',
      'c) Man muss länger arbeiten.'
    ],
    answer: 'b',
    extra: { part: 2, questionNumber: 8 },
  },
  {
    id: 9,
    type: 'multiple-choice',
    prompt: [
      'Lesen Sie den Text und beantworten Sie die Fragen 6-10. Wählen Sie a, b oder c.',
      'Text: Homeoffice - Arbeiten von zu Hause',
      'Die Corona-Pandemie hat das Arbeitsleben in Deutschland stark verändert. Millionen von Menschen arbeiten jetzt regelmäßig von zu Hause. Vor der Pandemie war Homeoffice nur in wenigen Firmen möglich. Heute bieten fast alle großen Unternehmen diese Möglichkeit an.',
      'Für viele Arbeitnehmer bringt das Homeoffice große Vorteile. Sie sparen Zeit und Geld, weil sie nicht jeden Tag ins Büro fahren müssen. Die Work-Life-Balance wird besser, da man Familie und Beruf leichter kombinieren kann. Besonders Eltern schätzen diese Flexibilität.',
      'Aber das Arbeiten von zu Hause hat auch Nachteile. Viele Menschen fühlen sich isoliert und vermissen den direkten Kontakt zu den Kollegen. Die Kommunikation funktioniert oft schlechter als im Büro. Außerdem ist es schwer, Beruf und Privatleben zu trennen, wenn beides zu Hause stattfindet.',
      'Experten glauben, dass eine Mischung aus Homeoffice und Büroarbeit die beste Lösung ist. So können Arbeitnehmer die Vorteile beider Arbeitsformen nutzen. Viele Firmen planen für die Zukunft ein hybrides Arbeitsmodell.',
      'Frage 9: Für wen ist Homeoffice besonders vorteilhaft?'
    ],
    options: [
      'a) Für junge Leute ohne Familie',
      'b) Für ältere Arbeitnehmer',
      'c) Für Eltern mit Kindern'
    ],
    answer: 'c',
    extra: { part: 2, questionNumber: 9 },
  },
  {
    id: 10,
    type: 'multiple-choice',
    prompt: [
      'Lesen Sie den Text und beantworten Sie die Fragen 6-10. Wählen Sie a, b oder c.',
      'Text: Homeoffice - Arbeiten von zu Hause',
      'Die Corona-Pandemie hat das Arbeitsleben in Deutschland stark verändert. Millionen von Menschen arbeiten jetzt regelmäßig von zu Hause. Vor der Pandemie war Homeoffice nur in wenigen Firmen möglich. Heute bieten fast alle großen Unternehmen diese Möglichkeit an.',
      'Für viele Arbeitnehmer bringt das Homeoffice große Vorteile. Sie sparen Zeit und Geld, weil sie nicht jeden Tag ins Büro fahren müssen. Die Work-Life-Balance wird besser, da man Familie und Beruf leichter kombinieren kann. Besonders Eltern schätzen diese Flexibilität.',
      'Aber das Arbeiten von zu Hause hat auch Nachteile. Viele Menschen fühlen sich isoliert und vermissen den direkten Kontakt zu den Kollegen. Die Kommunikation funktioniert oft schlechter als im Büro. Außerdem ist es schwer, Beruf und Privatleben zu trennen, wenn beides zu Hause stattfindet.',
      'Experten glauben, dass eine Mischung aus Homeoffice und Büroarbeit die beste Lösung ist. So können Arbeitnehmer die Vorteile beider Arbeitsformen nutzen. Viele Firmen planen für die Zukunft ein hybrides Arbeitsmodell.',
      'Frage 10: Was empfehlen Experten für die Zukunft?'
    ],
    options: [
      'a) Nur noch Homeoffice',
      'b) Eine Kombination aus Homeoffice und Büro',
      'c) Zurück zur alten Arbeitsweise im Büro'
    ],
    answer: 'b',
    extra: { part: 2, questionNumber: 10 },
  },
  // Reading Part 3: Selective Comprehension (Situation Matching)
  {
    id: 11,
    type: 'situation-matching',
    prompt: [
      'Lesen Sie die Situationen 11-15 und die Anzeigen a-h. Ordnen Sie jede Situation der passenden Anzeige zu. Es gibt 3 Anzeigen zu viel.',
      'Situation 11: Anna ist 25 Jahre alt und möchte abnehmen. Sie sucht einen Sportkurs am Abend, weil sie tagsüber arbeitet.'
    ],
    options: [
      'a) Yoga für den Rücken - Spezielle Übungen gegen Rückenschmerzen. Montag und Mittwoch 18:00-19:00 Uhr. Anfänger willkommen.',
      'b) Seniorenwandergruppe - Gemeinsam wandern und Natur erleben. Jeden Samstag. Neue Mitglieder herzlich willkommen! Info: 089-123456',
      'c) Deutschkurs Intensiv - 4 Wochen, täglich 4 Stunden. Für Studenten mit Vorkenntnissen. Beginn: 15. März. Anmeldung ab sofort.',
      'd) Fitness für Frauen - Abnehmen und fit werden! Dienstag und Donnerstag 19:00-20:00 Uhr. Probestunde kostenlos.',
      'e) Stadtführung für Familien - Entdecken Sie Münchens Geschichte! Spezielle Touren für Kinder. Samstag und Sonntag 14:00 Uhr.',
      'f) Computerkurs für Senioren - Lernen Sie Internet und E-Mail! Kleine Gruppen, viel Zeit zum Üben. Info: www.computerhilfe.de',
      'g) Kochkurs italienisch - Echte italienische Küche lernen. Freitag abends 18:30-21:30 Uhr. Alle Zutaten inklusive.',
      'h) Sprachcafé Deutsch - Deutsch sprechen in entspannter Atmosphäre. Jeden Mittwoch 19:00 Uhr im Café Central.'
    ],
    answer: 'd',
    extra: { part: 3, situationNumber: 11 },
  },
  {
    id: 12,
    type: 'situation-matching',
    prompt: [
      'Lesen Sie die Situationen 11-15 und die Anzeigen a-h. Ordnen Sie jede Situation der passenden Anzeige zu. Es gibt 3 Anzeigen zu viel.',
      'Situation 12: Familie Müller will am Wochenende etwas mit ihren zwei Kindern (8 und 12 Jahre) unternehmen. Sie interessieren sich für Geschichte.'
    ],
    options: [
      'a) Yoga für den Rücken - Spezielle Übungen gegen Rückenschmerzen. Montag und Mittwoch 18:00-19:00 Uhr. Anfänger willkommen.',
      'b) Seniorenwandergruppe - Gemeinsam wandern und Natur erleben. Jeden Samstag. Neue Mitglieder herzlich willkommen! Info: 089-123456',
      'c) Deutschkurs Intensiv - 4 Wochen, täglich 4 Stunden. Für Studenten mit Vorkenntnissen. Beginn: 15. März. Anmeldung ab sofort.',
      'd) Fitness für Frauen - Abnehmen und fit werden! Dienstag und Donnerstag 19:00-20:00 Uhr. Probestunde kostenlos.',
      'e) Stadtführung für Familien - Entdecken Sie Münchens Geschichte! Spezielle Touren für Kinder. Samstag und Sonntag 14:00 Uhr.',
      'f) Computerkurs für Senioren - Lernen Sie Internet und E-Mail! Kleine Gruppen, viel Zeit zum Üben. Info: www.computerhilfe.de',
      'g) Kochkurs italienisch - Echte italienische Küche lernen. Freitag abends 18:30-21:30 Uhr. Alle Zutaten inklusive.',
      'h) Sprachcafé Deutsch - Deutsch sprechen in entspannter Atmosphäre. Jeden Mittwoch 19:00 Uhr im Café Central.'
    ],
    answer: 'e',
    extra: { part: 3, situationNumber: 12 },
  },
  {
    id: 13,
    type: 'situation-matching',
    prompt: [
      'Lesen Sie die Situationen 11-15 und die Anzeigen a-h. Ordnen Sie jede Situation der passenden Anzeige zu. Es gibt 3 Anzeigen zu viel.',
      'Situation 13: Peter ist 65 Jahre alt und seit zwei Jahren Rentner. Er möchte neue Leute kennenlernen und gemeinsam wandern gehen.'
    ],
    options: [
      'a) Yoga für den Rücken - Spezielle Übungen gegen Rückenschmerzen. Montag und Mittwoch 18:00-19:00 Uhr. Anfänger willkommen.',
      'b) Seniorenwandergruppe - Gemeinsam wandern und Natur erleben. Jeden Samstag. Neue Mitglieder herzlich willkommen! Info: 089-123456',
      'c) Deutschkurs Intensiv - 4 Wochen, täglich 4 Stunden. Für Studenten mit Vorkenntnissen. Beginn: 15. März. Anmeldung ab sofort.',
      'd) Fitness für Frauen - Abnehmen und fit werden! Dienstag und Donnerstag 19:00-20:00 Uhr. Probestunde kostenlos.',
      'e) Stadtführung für Familien - Entdecken Sie Münchens Geschichte! Spezielle Touren für Kinder. Samstag und Sonntag 14:00 Uhr.',
      'f) Computerkurs für Senioren - Lernen Sie Internet und E-Mail! Kleine Gruppen, viel Zeit zum Üben. Info: www.computerhilfe.de',
      'g) Kochkurs italienisch - Echte italienische Küche lernen. Freitag abends 18:30-21:30 Uhr. Alle Zutaten inklusive.',
      'h) Sprachcafé Deutsch - Deutsch sprechen in entspannter Atmosphäre. Jeden Mittwoch 19:00 Uhr im Café Central.'
    ],
    answer: 'b',
    extra: { part: 3, situationNumber: 13 },
  },
  {
    id: 14,
    type: 'situation-matching',
    prompt: [
      'Lesen Sie die Situationen 11-15 und die Anzeigen a-h. Ordnen Sie jede Situation der passenden Anzeige zu. Es gibt 3 Anzeigen zu viel.',
      'Situation 14: Maria studiert Deutsch als Fremdsprache. Sie braucht einen Intensivkurs in den Semesterferien.'
    ],
    options: [
      'a) Yoga für den Rücken - Spezielle Übungen gegen Rückenschmerzen. Montag und Mittwoch 18:00-19:00 Uhr. Anfänger willkommen.',
      'b) Seniorenwandergruppe - Gemeinsam wandern und Natur erleben. Jeden Samstag. Neue Mitglieder herzlich willkommen! Info: 089-123456',
      'c) Deutschkurs Intensiv - 4 Wochen, täglich 4 Stunden. Für Studenten mit Vorkenntnissen. Beginn: 15. März. Anmeldung ab sofort.',
      'd) Fitness für Frauen - Abnehmen und fit werden! Dienstag und Donnerstag 19:00-20:00 Uhr. Probestunde kostenlos.',
      'e) Stadtführung für Familien - Entdecken Sie Münchens Geschichte! Spezielle Touren für Kinder. Samstag und Sonntag 14:00 Uhr.',
      'f) Computerkurs für Senioren - Lernen Sie Internet und E-Mail! Kleine Gruppen, viel Zeit zum Üben. Info: www.computerhilfe.de',
      'g) Kochkurs italienisch - Echte italienische Küche lernen. Freitag abends 18:30-21:30 Uhr. Alle Zutaten inklusive.',
      'h) Sprachcafé Deutsch - Deutsch sprechen in entspannter Atmosphäre. Jeden Mittwoch 19:00 Uhr im Café Central.'
    ],
    answer: 'c',
    extra: { part: 3, situationNumber: 14 },
  },
  {
    id: 15,
    type: 'situation-matching',
    prompt: [
      'Lesen Sie die Situationen 11-15 und die Anzeigen a-h. Ordnen Sie jede Situation der passenden Anzeige zu. Es gibt 3 Anzeigen zu viel.',
      'Situation 15: Tom arbeitet im Büro und hat oft Rückenschmerzen. Er sucht einen Kurs, der ihm bei diesem Problem helfen kann.'
    ],
    options: [
      'a) Yoga für den Rücken - Spezielle Übungen gegen Rückenschmerzen. Montag und Mittwoch 18:00-19:00 Uhr. Anfänger willkommen.',
      'b) Seniorenwandergruppe - Gemeinsam wandern und Natur erleben. Jeden Samstag. Neue Mitglieder herzlich willkommen! Info: 089-123456',
      'c) Deutschkurs Intensiv - 4 Wochen, täglich 4 Stunden. Für Studenten mit Vorkenntnissen. Beginn: 15. März. Anmeldung ab sofort.',
      'd) Fitness für Frauen - Abnehmen und fit werden! Dienstag und Donnerstag 19:00-20:00 Uhr. Probestunde kostenlos.',
      'e) Stadtführung für Familien - Entdecken Sie Münchens Geschichte! Spezielle Touren für Kinder. Samstag und Sonntag 14:00 Uhr.',
      'f) Computerkurs für Senioren - Lernen Sie Internet und E-Mail! Kleine Gruppen, viel Zeit zum Üben. Info: www.computerhilfe.de',
      'g) Kochkurs italienisch - Echte italienische Küche lernen. Freitag abends 18:30-21:30 Uhr. Alle Zutaten inklusive.',
      'h) Sprachcafé Deutsch - Deutsch sprechen in entspannter Atmosphäre. Jeden Mittwoch 19:00 Uhr im Café Central.'
    ],
    answer: 'a',
    extra: { part: 3, situationNumber: 15 },
  },
  // Language Elements Part 1: Grammar and Vocabulary
  {
    id: 16,
    type: 'multiple-choice',
    prompt: [
      'Sprachelemente Teil 1: Grammatik und Wortschatz',
      'Wählen Sie die richtige Antwort (a, b oder c).',
      '16. Maria _____ gestern nicht zur Arbeit gekommen, weil sie krank war.'
    ],
    options: [
      'a) hat',
      'b) ist',
      'c) wird'
    ],
    answer: 'b',
    extra: { part: 'language-1', questionNumber: 16 },
  },
  {
    id: 17,
    type: 'multiple-choice',
    prompt: [
      'Sprachelemente Teil 1: Grammatik und Wortschatz',
      'Wählen Sie die richtige Antwort (a, b oder c).',
      '17. Der Mann, _____ Auto vor der Tür steht, ist mein Nachbar.'
    ],
    options: [
      'a) der',
      'b) den',
      'c) dessen'
    ],
    answer: 'c',
    extra: { part: 'language-1', questionNumber: 17 },
  },
  {
    id: 18,
    type: 'multiple-choice',
    prompt: [
      'Sprachelemente Teil 1: Grammatik und Wortschatz',
      'Wählen Sie die richtige Antwort (a, b oder c).',
      '18. Wenn ich mehr Zeit _____, würde ich öfter Sport machen.'
    ],
    options: [
      'a) hätte',
      'b) habe',
      'c) haben'
    ],
    answer: 'a',
    extra: { part: 'language-1', questionNumber: 18 },
  },
  {
    id: 19,
    type: 'multiple-choice',
    prompt: [
      'Sprachelemente Teil 1: Grammatik und Wortschatz',
      'Wählen Sie die richtige Antwort (a, b oder c).',
      '19. Ich interessiere mich sehr _____ moderne Kunst.'
    ],
    options: [
      'a) an',
      'b) für',
      'c) über'
    ],
    answer: 'b',
    extra: { part: 'language-1', questionNumber: 19 },
  },
  {
    id: 20,
    type: 'multiple-choice',
    prompt: [
      'Sprachelemente Teil 1: Grammatik und Wortschatz',
      'Wählen Sie die richtige Antwort (a, b oder c).',
      '20. Das Buch _____ von einem bekannten deutschen Autor geschrieben.'
    ],
    options: [
      'a) wird',
      'b) wurde',
      'c) worden'
    ],
    answer: 'b',
    extra: { part: 'language-1', questionNumber: 20 },
  },
  {
    id: 21,
    type: 'multiple-choice',
    prompt: [
      'Sprachelemente Teil 1: Grammatik und Wortschatz',
      'Wählen Sie die richtige Antwort (a, b oder c).',
      '21. _____ dem schlechten Wetter sind wir spazieren gegangen.'
    ],
    options: [
      'a) Wegen',
      'b) Trotz',
      'c) Durch'
    ],
    answer: 'b',
    extra: { part: 'language-1', questionNumber: 21 },
  },
  {
    id: 22,
    type: 'multiple-choice',
    prompt: [
      'Sprachelemente Teil 1: Grammatik und Wortschatz',
      'Wählen Sie die richtige Antwort (a, b oder c).',
      '22. Könnten Sie mir bitte _____, wo der Bahnhof ist?'
    ],
    options: [
      'a) sagen',
      'b) sprechen',
      'c) erzählen'
    ],
    answer: 'a',
    extra: { part: 'language-1', questionNumber: 22 },
  },
  {
    id: 23,
    type: 'multiple-choice',
    prompt: [
      'Sprachelemente Teil 1: Grammatik und Wortschatz',
      'Wählen Sie die richtige Antwort (a, b oder c).',
      '23. Die Prüfung war viel _____, als ich gedacht hatte.'
    ],
    options: [
      'a) schwerer',
      'b) schwer',
      'c) am schwersten'
    ],
    answer: 'a',
    extra: { part: 'language-1', questionNumber: 23 },
  },
  {
    id: 24,
    type: 'multiple-choice',
    prompt: [
      'Sprachelemente Teil 1: Grammatik und Wortschatz',
      'Wählen Sie die richtige Antwort (a, b oder c).',
      '24. Ich habe vergessen, die Tür _____.'
    ],
    options: [
      'a) schließen',
      'b) zu schließen',
      'c) geschlossen'
    ],
    answer: 'b',
    extra: { part: 'language-1', questionNumber: 24 },
  },
  {
    id: 25,
    type: 'multiple-choice',
    prompt: [
      'Sprachelemente Teil 1: Grammatik und Wortschatz',
      'Wählen Sie die richtige Antwort (a, b oder c).',
      '25. _____ Sie mir das bitte erklären?'
    ],
    options: [
      'a) Können',
      'b) Müssen',
      'c) Sollen'
    ],
    answer: 'a',
    extra: { part: 'language-1', questionNumber: 25 },
  },
  // Language Elements Part 2: Vocabulary in Context
  {
    id: 26,
    type: 'multiple-choice',
    prompt: [
      'Sprachelemente Teil 2: Wortschatz im Kontext',
      'Wählen Sie die richtige Antwort (a, b oder c).',
      '26. In diesem Restaurant ist das Essen ausgezeichnet, aber der _____ ist sehr schlecht.'
    ],
    options: [
      'a) Service',
      'b) Preis',
      'c) Platz'
    ],
    answer: 'a',
    extra: { part: 'language-2', questionNumber: 26 },
  },
  {
    id: 27,
    type: 'multiple-choice',
    prompt: [
      'Sprachelemente Teil 2: Wortschatz im Kontext',
      'Wählen Sie die richtige Antwort (a, b oder c).',
      '27. Meine Großmutter ist 85 Jahre alt, aber sie ist noch sehr _____.'
    ],
    options: [
      'a) jung',
      'b) fit',
      'c) klein'
    ],
    answer: 'b',
    extra: { part: 'language-2', questionNumber: 27 },
  },
  {
    id: 28,
    type: 'multiple-choice',
    prompt: [
      'Sprachelemente Teil 2: Wortschatz im Kontext',
      'Wählen Sie die richtige Antwort (a, b oder c).',
      '28. Der Zug hat 20 Minuten _____. Wir müssen warten.'
    ],
    options: [
      'a) Verspätung',
      'b) Wartezeit',
      'c) Pause'
    ],
    answer: 'a',
    extra: { part: 'language-2', questionNumber: 28 },
  },
  {
    id: 29,
    type: 'multiple-choice',
    prompt: [
      'Sprachelemente Teil 2: Wortschatz im Kontext',
      'Wählen Sie die richtige Antwort (a, b oder c).',
      '29. In Deutschland muss man eine _____ haben, um Auto zu fahren.'
    ],
    options: [
      'a) Erlaubnis',
      'b) Fahrerlaubnis',
      'c) Berechtigung'
    ],
    answer: 'b',
    extra: { part: 'language-2', questionNumber: 29 },
  },
  {
    id: 30,
    type: 'multiple-choice',
    prompt: [
      'Sprachelemente Teil 2: Wortschatz im Kontext',
      'Wählen Sie die richtige Antwort (a, b oder c).',
      '30. Das Wetter ist heute sehr _____. Es regnet und ist kalt.'
    ],
    options: [
      'a) schön',
      'b) warm',
      'c) unfreundlich'
    ],
    answer: 'c',
    extra: { part: 'language-2', questionNumber: 30 },
  },
  // Listening Part 1: Short Announcements
  {
    id: 31,
    type: 'multiple-choice',
    prompt: [
      'Hörverstehen Teil 1: Kurze Durchsagen',
      'Sie hören 5 kurze Durchsagen. Wählen Sie die richtige Antwort (a, b oder c).',
      'Durchsage 31 (Bahnhof): "Achtung, liebe Fahrgäste! Der ICE 1247 nach Hamburg hat 15 Minuten Verspätung. Grund ist ein technisches Problem. Wir bitten um Ihr Verständnis."',
      'Welche Information wird gegeben?'
    ],
    options: [
      'a) Der Zug nach Hamburg ist abgesagt',
      'b) Der Zug nach Hamburg hat 15 Minuten Verspätung',
      'c) Der Zug nach Hamburg fährt von einem anderen Gleis ab'
    ],
    answer: 'b',
    extra: { part: 'listening-1', announcementNumber: 31 },
  },
  {
    id: 32,
    type: 'multiple-choice',
    prompt: [
      'Hörverstehen Teil 1: Kurze Durchsagen',
      'Sie hören 5 kurze Durchsagen. Wählen Sie die richtige Antwort (a, b oder c).',
      'Durchsage 32 (Wetterbericht): "Das Wetter morgen: Am Vormittag noch bewölkt, am Nachmittag dann sonnig bei 18 Grad. Ideal für Aktivitäten im Freien!"',
      'Wie wird das Wetter morgen Nachmittag sein?'
    ],
    options: [
      'a) Bewölkt',
      'b) Regnerisch',
      'c) Sonnig'
    ],
    answer: 'c',
    extra: { part: 'listening-1', announcementNumber: 32 },
  },
  {
    id: 33,
    type: 'multiple-choice',
    prompt: [
      'Hörverstehen Teil 1: Kurze Durchsagen',
      'Sie hören 5 kurze Durchsagen. Wählen Sie die richtige Antwort (a, b oder c).',
      'Durchsage 33 (Supermarkt): "Liebe Kunden, unser Geschäft schließt in 15 Minuten. Bitte begeben Sie sich zur Kasse. Vielen Dank für Ihren Besuch."',
      'Was sagt die Durchsage?'
    ],
    options: [
      'a) Das Geschäft schließt in 15 Minuten',
      'b) Es gibt ein Sonderangebot für 15 Minuten',
      'c) Die Kassen sind für 15 Minuten geschlossen'
    ],
    answer: 'a',
    extra: { part: 'listening-1', announcementNumber: 33 },
  },
  {
    id: 34,
    type: 'multiple-choice',
    prompt: [
      'Hörverstehen Teil 1: Kurze Durchsagen',
      'Sie hören 5 kurze Durchsagen. Wählen Sie die richtige Antwort (a, b oder c).',
      'Durchsage 34 (Telefonnachricht): "Hallo Anna, hier ist Tom. Ich kann heute leider nicht zum Kino kommen. Bin krank geworden. Können wir das auf morgen verschieben? Ruf mich zurück!"',
      'Warum kann Tom nicht ins Kino kommen?'
    ],
    options: [
      'a) Er muss arbeiten',
      'b) Er ist krank',
      'c) Er hat kein Geld'
    ],
    answer: 'b',
    extra: { part: 'listening-1', announcementNumber: 34 },
  },
  {
    id: 35,
    type: 'multiple-choice',
    prompt: [
      'Hörverstehen Teil 1: Kurze Durchsagen',
      'Sie hören 5 kurze Durchsagen. Wählen Sie die richtige Antwort (a, b oder c).',
      'Durchsage 35 (Flughafen): "Passagiere des Fluges LH 441 nach London werden gebeten, sich zum Gate B12 zu begeben. Das Boarding beginnt in Kürze."',
      'Was sollen die Passagiere tun?'
    ],
    options: [
      'a) Zum Gate B12 gehen',
      'b) In der Abflughalle warten',
      'c) Ihr Gepäck aufgeben'
    ],
    answer: 'a',
    extra: { part: 'listening-1', announcementNumber: 35 },
  },
  // Listening Part 2: Interview/Conversation
  {
    id: 36,
    type: 'multiple-choice',
    prompt: [
      'Hörverstehen Teil 2: Interview/Gespräch',
      'Hören Sie das Interview mit Maria Schulz über das Arbeiten von zu Hause.',
      'Frage 36: Seit wann arbeitet Maria von zu Hause?'
    ],
    options: [
      'a) Seit einem Jahr',
      'b) Seit zwei Jahren',
      'c) Seit März 2020'
    ],
    answer: 'c',
    extra: { part: 'listening-2', questionNumber: 36 },
  },
  {
    id: 37,
    type: 'multiple-choice',
    prompt: [
      'Hörverstehen Teil 2: Interview/Gespräch',
      'Hören Sie das Interview mit Maria Schulz über das Arbeiten von zu Hause.',
      'Frage 37: Was gefällt Maria am Homeoffice am besten?'
    ],
    options: [
      'a) Sie kann länger schlafen',
      'b) Sie spart Fahrtzeit',
      'c) Sie verdient mehr Geld'
    ],
    answer: 'b',
    extra: { part: 'listening-2', questionNumber: 37 },
  },
  {
    id: 38,
    type: 'multiple-choice',
    prompt: [
      'Hörverstehen Teil 2: Interview/Gespräch',
      'Hören Sie das Interview mit Maria Schulz über das Arbeiten von zu Hause.',
      'Frage 38: Welches Problem hat Maria beim Homeoffice?'
    ],
    options: [
      'a) Schlechte Internetverbindung',
      'b) Zu wenig Platz',
      'c) Schwierige Trennung von Beruf und Privatleben'
    ],
    answer: 'c',
    extra: { part: 'listening-2', questionNumber: 38 },
  },
  {
    id: 39,
    type: 'multiple-choice',
    prompt: [
      'Hörverstehen Teil 2: Interview/Gespräch',
      'Hören Sie das Interview mit Maria Schulz über das Arbeiten von zu Hause.',
      'Frage 39: Wie oft möchte Maria in Zukunft ins Büro?'
    ],
    options: [
      'a) Jeden Tag',
      'b) Zweimal pro Woche',
      'c) Nur einmal pro Monat'
    ],
    answer: 'b',
    extra: { part: 'listening-2', questionNumber: 39 },
  },
  {
    id: 40,
    type: 'multiple-choice',
    prompt: [
      'Hörverstehen Teil 2: Interview/Gespräch',
      'Hören Sie das Interview mit Maria Schulz über das Arbeiten von zu Hause.',
      'Frage 40: Was empfiehlt Maria anderen Homeoffice-Arbeitern?'
    ],
    options: [
      'a) Einen festen Arbeitsplatz einrichten',
      'b) Viele Pausen machen',
      'c) Früh am Morgen anfangen'
    ],
    answer: 'a',
    extra: { part: 'listening-2', questionNumber: 40 },
  },
  // Listening Part 3: Longer Text
  {
    id: 41,
    type: 'multiple-choice',
    prompt: [
      'Hörverstehen Teil 3: Längerer Text',
      'Hören Sie einen Radiobeitrag über das Fahrradfahren in deutschen Städten.',
      'Frage 41: Wie viele Deutsche fahren regelmäßig Fahrrad?'
    ],
    options: [
      'a) 20 Millionen',
      'b) 40 Millionen',
      'c) 60 Millionen'
    ],
    answer: 'b',
    extra: { part: 'listening-3', questionNumber: 41 },
  },
  {
    id: 42,
    type: 'multiple-choice',
    prompt: [
      'Hörverstehen Teil 3: Längerer Text',
      'Hören Sie einen Radiobeitrag über das Fahrradfahren in deutschen Städten.',
      'Frage 42: In welcher Stadt gibt es die meisten Fahrradwege?'
    ],
    options: [
      'a) Berlin',
      'b) München',
      'c) Hamburg'
    ],
    answer: 'a',
    extra: { part: 'listening-3', questionNumber: 42 },
  },
  {
    id: 43,
    type: 'multiple-choice',
    prompt: [
      'Hörverstehen Teil 3: Längerer Text',
      'Hören Sie einen Radiobeitrag über das Fahrradfahren in deutschen Städten.',
      'Frage 43: Warum fahren mehr Menschen Fahrrad?'
    ],
    options: [
      'a) Benzin ist zu teuer',
      'b) Es ist gut für die Umwelt',
      'c) Autos sind in der Stadt verboten'
    ],
    answer: 'b',
    extra: { part: 'listening-3', questionNumber: 43 },
  },
  {
    id: 44,
    type: 'multiple-choice',
    prompt: [
      'Hörverstehen Teil 3: Längerer Text',
      'Hören Sie einen Radiobeitrag über das Fahrradfahren in deutschen Städten.',
      'Frage 44: Was plant die Regierung?'
    ],
    options: [
      'a) Mehr Parkplätze für Autos',
      'b) Neue Fahrradwege bauen',
      'c) Fahrräder billiger machen'
    ],
    answer: 'b',
    extra: { part: 'listening-3', questionNumber: 44 },
  },
  {
    id: 45,
    type: 'multiple-choice',
    prompt: [
      'Hörverstehen Teil 3: Längerer Text',
      'Hören Sie einen Radiobeitrag über das Fahrradfahren in deutschen Städten.',
      'Frage 45: Was ist das größte Problem für Radfahrer?'
    ],
    options: [
      'a) Schlechtes Wetter',
      'b) Gefährlicher Verkehr',
      'c) Diebstahl von Fahrrädern'
    ],
    answer: 'b',
    extra: { part: 'listening-3', questionNumber: 45 },
  },
  // Writing Section
  {
    id: 46,
    type: 'writing',
    prompt: [
      'Schreiben (30 Minuten)',
      'Schreiben Sie eine halbformelle E-Mail (etwa 120 Wörter) basierend auf dieser Situation:',
      'Sie arbeiten in einem Büro. Ihre Kollegin Anna verlässt das Unternehmen nächsten Monat. Ihr Team möchte eine Abschiedsfeier für sie organisieren. Schreiben Sie eine E-Mail an Ihren Vorgesetzten, in der Sie um Erlaubnis bitten und Details vorschlagen.',
      'Beachten Sie diese Punkte:',
      '- Bitten Sie um Erlaubnis, die Feier zu organisieren',
      '- Schlagen Sie vor, wann und wo (Zeit, Ort)',
      '- Erklären Sie, wie lange die Feier dauern wird',
      '- Fragen Sie, ob das Unternehmen Geld für Essen/Getränke beisteuern kann',
      'Beginnen Sie Ihre E-Mail mit: Sehr geehrte Frau/Sehr geehrter Herr...'
    ],
    options: [],
    answer: 'self-assessment',
    extra: { part: 'writing', timeLimit: 30 },
  },
  // Speaking Section
  {
    id: 47,
    type: 'speaking',
    prompt: [
      'Sprechen (15 Minuten + 20 Minuten Vorbereitungszeit)',
      'Sprechen Teil 1: Sich kennenlernen (3 Minuten)',
      'Sprechen Sie mit Ihrem Partner über:',
      '- Ihren Namen und woher Sie kommen',
      '- Ihren Beruf oder was Sie studieren',
      '- Ihre Hobbys und Freizeitaktivitäten',
      '- Warum Sie Deutsch lernen',
      '- Ihre Pläne für die Zukunft'
    ],
    options: [],
    answer: 'self-assessment',
    extra: { part: 'speaking-1', timeLimit: 3 },
  },
  {
    id: 48,
    type: 'speaking',
    prompt: [
      'Sprechen Teil 2: Ein Thema diskutieren (6 Minuten)',
      'Thema: "Homeoffice - Arbeiten von zu Hause"',
      'Lesen Sie diesen Text während der Vorbereitungszeit:',
      '"Immer mehr Menschen in Deutschland arbeiten von zu Hause. Das hat Vorteile: Man spart Zeit und Geld und kann Familie und Beruf besser kombinieren. Aber es gibt auch Nachteile: weniger Kontakt zu Kollegen und Probleme bei der Trennung von Beruf und Privatleben."',
      'Diskutieren Sie mit Ihrem Partner:',
      '- Was ist Ihre Meinung zum Arbeiten von zu Hause?',
      '- Was sind die Vor- und Nachteile?',
      '- Würden Sie gerne von zu Hause arbeiten? Warum/Warum nicht?',
      '- Wie denken Sie, wird sich die Arbeit in der Zukunft verändern?'
    ],
    options: [],
    answer: 'self-assessment',
    extra: { part: 'speaking-2', timeLimit: 6 },
  },
  {
    id: 49,
    type: 'speaking',
    prompt: [
      'Sprechen Teil 3: Gemeinsam planen (6 Minuten)',
      'Planen Sie eine Wochenendreise mit Ihrem Partner:',
      'Situation: Sie und Ihr Freund möchten eine Wochenendreise in eine deutsche Stadt machen. Planen Sie die Reise gemeinsam.',
      'Diskutieren Sie:',
      '- Welche Stadt zu besuchen und warum',
      '- Wie dorthin zu reisen (Zug, Auto, Flugzeug)',
      '- Wo zu übernachten (Hotel, Jugendherberge, Airbnb)',
      '- Was zu sehen und zu tun',
      '- Wie viel Geld auszugeben',
      '- Wann zu fahren',
      'Treffen Sie Entscheidungen gemeinsam und einigen Sie sich auf einen Plan.'
    ],
    options: [],
    answer: 'self-assessment',
    extra: { part: 'speaking-3', timeLimit: 6 },
  },
]; 