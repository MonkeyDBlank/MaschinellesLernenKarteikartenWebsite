const DEFAULT_CARDS = [
  {
    question: "Beschreiben Sie kurz und allgemein das klassische Klassifikationsproblem beim Data Mining bzw. maschinellen Lernen.",
    answer: "Aus Beispieldaten mit bekannten Klassen wird ein Modell gelernt, das neue, unbekannte Objekte einer von mehreren diskreten Klassen zuordnet."
  },
  {
    question: "Wie unterscheidet sich das klassische Regressionsproblem vom Klassifikationsproblem?",
    answer: "Regression sagt kontinuierliche Zahlenwerte voraus, Klassifikation sagt diskrete Klassenlabels voraus. Beispiel: Preis vorhersagen vs. Spam/Nicht-Spam entscheiden."
  },
  {
    question: "Wodurch zeichnen sich Lernprobleme auf Zeitreihen besonders aus?",
    answer: "Die Reihenfolge der Datenpunkte ist wichtig. Werte hängen oft von früheren Werten ab, deshalb müssen Trends, Saisonalität und zeitliche Abhängigkeiten beachtet werden."
  },
  {
    question: "Nennen Sie drei überwachte Lernverfahren und ihre mathematischen bzw. informatischen Grundlagen.",
    answer: "kNN: Distanzmaße und Ähnlichkeit. SVM: Optimierung und lineare Algebra. Naive Bayes: Wahrscheinlichkeitstheorie und Satz von Bayes."
  },
  {
    question: "Nennen Sie die drei wichtigsten Phasen beim Data-Mining-Prozess und ihre Funktion.",
    answer: "Vorbereitung: Daten sammeln, bereinigen, transformieren. Modellierung: Verfahren trainieren. Bewertung/Nutzung: Modell prüfen, interpretieren und anwenden."
  },
  {
    question: "Was sind zwei Hauptnachteile eines naiven kNN-Klassifikators in der Nutzungsphase?",
    answer: "Er ist langsam, weil viele Distanzen zu Trainingsdaten berechnet werden müssen. Außerdem braucht er viel Speicher, weil die Trainingsdaten behalten werden."
  },
  {
    question: "Welche zwei Maßnahmen ermöglichen SVMs bei nicht linear separierbaren binären Klassifikationsproblemen?",
    answer: "Soft Margin erlaubt einige Fehlklassifikationen. Der Kernel-Trick bildet Daten implizit in einen höherdimensionalen Raum ab, wo eine Trennung möglich sein kann."
  },
  {
    question: "Wie können SVMs für Probleme mit n Klassen genutzt werden?",
    answer: "Man kombiniert mehrere binäre SVMs, z. B. One-vs-Rest oder One-vs-One. Die Klasse wird dann über die stärkste Entscheidung bzw. Mehrheitsabstimmung gewählt."
  },
  {
    question: "Was ist die wichtigste Grundregel bei der Auswahl von Test- und Trainingsdaten?",
    answer: "Testdaten dürfen nicht zum Training oder zur Modellauswahl verwendet werden. Sonst misst man nicht mehr sauber die Leistung auf unbekannten Daten."
  },
  {
    question: "Wie funktioniert n-fache Kreuzvalidierung?",
    answer: "Die Daten werden in n Teile geteilt. Jedes Teil ist einmal Testmenge, die übrigen Teile sind Trainingsmenge. Am Ende mittelt man die n Ergebnisse."
  },
  {
    question: "Was versteht man unter Stratifikation bei der Validierung?",
    answer: "Die Klassenverteilung bleibt in Trainings- und Testteilen ungefähr gleich wie im Gesamtdatensatz. Das ist besonders bei unausgeglichenen Klassen wichtig."
  },
  {
    question: "Wie entsteht bei der Bootstrap-Validierung das erwartete Größenverhältnis von Trainings- und Testdaten?",
    answer: "Es wird mit Zurücklegen gezogen. Dadurch landen einige Objekte mehrfach in der Trainingsmenge und einige gar nicht. Erwartet sind ca. 63,2% einzigartige Trainingsobjekte und ca. 36,8% Out-of-Bag-Testobjekte."
  },
  {
    question: "Definieren Sie Precision und Recall mit TP, FP, TN und FN.",
    answer: "Precision = TP / (TP + FP): Anteil korrekter positiver Vorhersagen. Recall = TP / (TP + FN): Anteil gefundener tatsächlich positiver Fälle."
  },
  {
    question: "Sie wollen ein kompliziertes ML-Verfahren schnell und günstig mit SQL-Forschungsdaten ausprobieren. Welche Vorgehensweisen bieten sich an?",
    answer: "Eine vorhandene Implementierung in Tools wie Python, R, Weka oder scikit-learn nutzen, Daten aus SQL exportieren oder anbinden und zuerst einen kleinen Prototyp bauen."
  },
  {
    question: "Nennen Sie zwei unüberwachte Lernverfahren mit Ziel und Ansatz.",
    answer: "k-Means: ähnliche Datenpunkte zu Clustern gruppieren, indem Zentren iterativ angepasst werden. PCA: Dimensionen reduzieren, indem Richtungen maximaler Varianz gesucht werden."
  },
  {
    question: "Nennen Sie drei praktische Anwendungen von PageRank und wie der gerichtete Graph entsteht.",
    answer: "Webseiten: Links zwischen Seiten. Zitationsanalyse: Paper zitieren andere Paper. Social Media: Nutzer folgen oder verweisen auf andere Nutzer."
  },
  {
    question: "Wie funktioniert Bootstrap-Aggregation (Bagging) kurz und prägnant?",
    answer: "Man zieht mehrere Bootstrap-Stichproben, trainiert darauf mehrere Modelle und aggregiert ihre Vorhersagen, z. B. per Mehrheitsvote oder Mittelwert."
  },
  {
    question: "Wie kann ein Naiver Bayes-Klassifikator mit reellwertigen Quellattributen umgehen?",
    answer: "Entweder reelle Werte diskretisieren und Klassenintervalle bilden oder eine Verteilung annehmen, z. B. Gaußverteilung, und deren Parameter je Klasse schätzen."
  },
  {
    question: "Wie wird das Gütemaß Sum of Squared Error (SSE) für Cluster berechnet?",
    answer: "SSE = Summe über alle Cluster und Punkte der quadrierten Distanz zum jeweiligen Clusterzentrum: Σ_i Σ_x in C_i ||x - μ_i||²."
  },
  {
    question: "Wie findet man bei k-Means trotz schlechter Initialzentren gute Zentren bezüglich SSE?",
    answer: "k-Means mehrfach mit verschiedenen zufälligen Initialisierungen starten und die Lösung mit der kleinsten SSE wählen. Garantiert optimal ist nur exhaustive Suche, praktisch nutzt man Restarts."
  },
  {
    question: "Was ist der mögliche Wertebereich für ein Feature einer SVM?",
    answer: "Ein Feature kann grundsätzlich reellwertig sein. Praktisch werden Features oft skaliert oder normalisiert, damit kein Merkmal die Optimierung dominiert."
  },
  {
    question: "Wie lautet die Testfunktion einer linearen SVM ohne Kernel?",
    answer: "Man berechnet f(x) = w^T x + b. Ist das Vorzeichen positiv, wird die positive Klasse gewählt, sonst die negative Klasse."
  },
  {
    question: "Wie zeigt sich Überanpassung im Rahmen einer Validierung?",
    answer: "Das Modell ist auf Trainingsdaten sehr gut, auf Validierungs- oder Testdaten aber deutlich schlechter. Es hat Details oder Rauschen der Trainingsdaten gelernt."
  },
  {
    question: "Wozu dient die Loss-Funktion bei neuronalen Netzen?",
    answer: "Sie misst den Fehler zwischen Vorhersage und Zielwert. Beim Training werden die Gewichte so angepasst, dass dieser Fehler möglichst klein wird."
  },
  {
    question: "Wie funktioniert Bagging als klassifizierendes Lernverfahren?",
    answer: "Mehrere Klassifikatoren werden auf Bootstrap-Stichproben trainiert. Für neue Daten stimmen sie ab, und die Klasse mit den meisten Stimmen wird ausgegeben."
  },
  {
    question: "Mit welchen Maßnahmen kann man Underfitting entgegenwirken?",
    answer: "Ein komplexeres Modell wählen, mehr oder bessere Features nutzen, länger trainieren oder Regularisierung reduzieren. Ziel: Das Modell muss genug Muster lernen können."
  },
  {
    question: "Mit welchen Maßnahmen kann man Overfitting entgegenwirken?",
    answer: "Regularisierung erhöhen, Modell vereinfachen, mehr Daten nutzen, Data Augmentation, Dropout, Early Stopping oder bessere Validierung einsetzen."
  },
  {
    question: "Beschreiben Sie den Aufbau eines Perzeptrons mit Ein- und Ausgabe und mathematischer Berechnung.",
    answer: "Ein Perzeptron erhält Eingaben x, Gewichte w und Bias b. Es berechnet z = w^T x + b und gibt nach einer Aktivierungsfunktion, z. B. Schwellenfunktion, einen Wert aus."
  },
  {
    question: "Wie kann ein minimales neuronales Netz die XOR-Funktion mit Perzeptronen abbilden?",
    answer: "Mit zwei Hidden-Perzeptronen für OR und NAND und einem Output-Perzeptron für AND. Aktivierung ist eine Schwellenfunktion; passende Gewichte/Bias realisieren die logischen Gatter."
  },
  {
    question: "Was versteht man unter Early Stopping beim Training neuronaler Netze?",
    answer: "Das Training wird beendet, sobald sich die Leistung auf Validierungsdaten nicht mehr verbessert oder schlechter wird. So reduziert man Overfitting."
  },
  {
    question: "Wie viele Trainingsparameter hat ein voll verknüpftes Feed-Forward-Netz mit drei Schichten n1, n2, n3?",
    answer: "Bei n1 als Eingabeschicht: n1*n2 + n2 Biases plus n2*n3 + n3 Biases. Also n1n2 + n2 + n2n3 + n3."
  },
  {
    question: "Wie erstellt man Lernkurven und wozu dienen sie?",
    answer: "Man trainiert mit unterschiedlich großen Trainingsmengen und misst Trainings- sowie Validierungsfehler. Lernkurven zeigen Underfitting, Overfitting und ob mehr Daten helfen."
  },
  {
    question: "Geben Sie die Confusion Matrix für binäre Klassifikation und die Formel für Sensitivity an.",
    answer: "Felder: TP, FP, TN, FN. Sensitivity bzw. Recall = TP / (TP + FN), also Anteil korrekt erkannter positiver Fälle."
  },
  {
    question: "Wie findet man geeignete Kandidaten für k beim k-Means-Clustering?",
    answer: "Man berechnet k-Means für verschiedene k und betrachtet die SSE. Beim Elbow-Verfahren wählt man ein k, ab dem die Verbesserung nur noch gering ist."
  },
  {
    question: "Erklären Sie Maximum Likelihood anhand Θ* = argmaxΘ P(D|Θ).",
    answer: "Gesucht sind Parameter Θ, unter denen die beobachteten Daten D am wahrscheinlichsten sind. Man wählt also das Θ mit maximaler Likelihood P(D|Θ)."
  },
  {
    question: "Wodurch zeichnet sich Random Forest als spezielles Bagging-Verfahren aus?",
    answer: "Viele Entscheidungsbäume werden auf Bootstrap-Stichproben trainiert. Zusätzlich betrachtet jeder Split nur eine zufällige Feature-Auswahl. Das senkt Korrelation und Overfitting."
  },
  {
    question: "Beschreiben Sie kurz, wie Bootstrap funktioniert.",
    answer: "Aus einem Datensatz mit n Objekten werden n-mal Objekte mit Zurücklegen gezogen. Dadurch entstehen neue Stichproben mit Wiederholungen und ausgelassenen Objekten."
  }
];

const ALTERNATIVE_ANSWERS = [
  "Man bringt dem Modell mit alten Beispielen bei, welche Klasse zu welchem Objekt gehört. Danach soll es neue Fälle richtig einsortieren.",
  "Bei Regression kommt eine Zahl raus, bei Klassifikation eine Kategorie. Also eher 'wie viel?' statt 'welche Klasse?'.",
  "Hier darf man die Reihenfolge nicht ignorieren. Frühere Werte können spätere beeinflussen, deshalb schaut man auf Verlauf, Trend und Muster über die Zeit.",
  "kNN nutzt Nähe über Distanzen. SVM trennt Klassen über Optimierung. Naive Bayes rechnet mit Wahrscheinlichkeiten und Bayes.",
  "Erst Daten brauchbar machen, dann Modell trainieren, danach Ergebnis testen und einsetzen. Ohne saubere Daten bringt das beste Modell wenig.",
  "kNN muss beim Vorhersagen viele Abstände rechnen und die Trainingsdaten behalten. Dadurch wird es bei großen Daten langsam und speicherlastig.",
  "Man erlaubt Fehler mit Soft Margin und nutzt Kernel, damit eine nichtlineare Trennung möglich wird. So bleibt die SVM flexibel.",
  "Man baut mehrere binäre SVMs, zum Beispiel jede Klasse gegen den Rest. Am Ende gewinnt die Klasse mit dem stärksten Ergebnis.",
  "Testdaten müssen wirklich unbekannt bleiben. Wenn sie schon ins Training einfließen, bewertet man sich selbst zu gut.",
  "Man teilt die Daten in n Teile. Jeder Teil ist einmal Testset, der Rest Training. Danach nimmt man den Durchschnitt der Ergebnisse.",
  "Die Klassenanteile sollen in den Splits ungefähr gleich bleiben. Sonst testet man vielleicht auf einer verzerrten Datenmenge.",
  "Beim Ziehen mit Zurücklegen werden manche Beispiele mehrfach gezogen und manche gar nicht. Die nicht gezogenen nutzt man als Testfälle.",
  "Precision sagt: Von meinen positiven Vorhersagen, wie viele stimmen? Recall sagt: Von allen echten Positiven, wie viele habe ich gefunden?",
  "Ich würde nicht selbst alles neu programmieren, sondern eine fertige Library nehmen, SQL-Daten exportieren oder anbinden und schnell einen Prototyp testen.",
  "k-Means sucht Gruppen ähnlicher Punkte. PCA fasst Daten in weniger Dimensionen zusammen, ohne möglichst viel Information zu verlieren.",
  "Web: Seite linkt auf Seite. Paper: Paper zitiert Paper. Social: Nutzer folgt Nutzer. Daraus entsteht jeweils ein gerichteter Graph.",
  "Man trainiert viele Modelle auf leicht anderen Stichproben und lässt sie zusammen entscheiden. Dadurch wird das Ergebnis stabiler.",
  "Entweder macht man aus Zahlen Klassenbereiche oder man nimmt eine Verteilung wie Normalverteilung an. Dann kann Bayes trotzdem rechnen.",
  "Man misst für jeden Punkt, wie weit er vom eigenen Clusterzentrum weg ist, quadriert das und summiert alles auf. Weniger ist besser.",
  "Man startet k-Means oft mit verschiedenen Startzentren und nimmt die Variante mit kleinster SSE. Praktisch ist das der normale Weg.",
  "Ein SVM-Feature kann ein normaler Zahlenwert sein. Wichtig ist eher, dass die Werte sinnvoll skaliert sind.",
  "Man setzt den Punkt in w^T x + b ein. Das Vorzeichen entscheidet dann, ob er zur positiven oder negativen Klasse gehört.",
  "Training sieht super aus, Validierung aber deutlich schlechter. Dann hat das Modell zu viel auswendig gelernt.",
  "Die Loss-Funktion ist der Fehlerwert fürs Netz. Backpropagation versucht genau diesen Wert kleiner zu machen.",
  "Mehrere Klassifikatoren lernen auf Bootstrap-Daten. Bei einer neuen Eingabe wird abgestimmt, welche Klasse rauskommt.",
  "Das Modell ist zu simpel oder lernt zu wenig. Also komplexer machen, bessere Features nutzen oder weniger stark regularisieren.",
  "Das Modell muss weniger auswendig lernen: mehr Daten, einfacheres Modell, Regularisierung, Dropout oder Early Stopping.",
  "Ein Perzeptron nimmt Eingaben, gewichtet sie, addiert Bias und schickt das Ergebnis durch eine Aktivierung. Daraus entsteht die Ausgabe.",
  "XOR geht mit einer kleinen versteckten Schicht: erst logische Teilfunktionen wie OR und NAND bauen, dann mit AND kombinieren.",
  "Man hört auf zu trainieren, wenn die Validierungsleistung nicht mehr besser wird. So stoppt man, bevor das Netz überlernt.",
  "Zwischen n1 und n2 gibt es n1*n2 Gewichte plus n2 Biases, zwischen n2 und n3 nochmal n2*n3 plus n3 Biases.",
  "Man trainiert mit immer mehr Daten und plottet Trainings- und Validierungsfehler. Daraus sieht man, ob mehr Daten oder ein anderes Modell helfen.",
  "Die Matrix zählt TP, FP, TN und FN. Sensitivity ist TP geteilt durch alle echten Positiven, also TP/(TP+FN).",
  "Man probiert mehrere k aus und schaut auf die SSE-Kurve. Beim Knick bringt mehr k kaum noch Verbesserung.",
  "Man sucht die Parameter, bei denen die gesehenen Daten am plausibelsten sind. Genau das meint argmax über P(D|Θ).",
  "Random Forest ist Bagging mit vielen Entscheidungsbäumen. Bei jedem Split wird nur ein zufälliger Teil der Features betrachtet.",
  "Bootstrap heißt: Aus n Datenpunkten n-mal mit Zurücklegen ziehen. Dadurch entstehen Trainingssets mit Dopplungen und Lücken."
];

const OCCURRENCE_COUNTS = [
  9, 5, 1, 4, 17, 4, 3, 5, 9, 8, 5, 6, 2, 5, 2, 1, 1, 3, 10,
  8, 3, 3, 4, 2, 1, 1, 5, 5, 5, 4, 3, 4, 3, 1, 1, 1, 1
];

const EXAM_COUNT = 17;

const STORAGE_KEY = "ml-flashcards-v1";

const elements = {
  card: document.querySelector("#card"),
  alternativeBtn: document.querySelector("#alternativeBtn"),
  sideLabel: document.querySelector("#sideLabel"),
  frequencyBadge: document.querySelector("#frequencyBadge"),
  cardText: document.querySelector("#cardText"),
  cardCounter: document.querySelector("#cardCounter"),
  prevBtn: document.querySelector("#prevBtn"),
  nextBtn: document.querySelector("#nextBtn"),
  orderedBtn: document.querySelector("#orderedBtn"),
  shuffleBtn: document.querySelector("#shuffleBtn"),
  ratingButtons: document.querySelector("#ratingButtons"),
  questionInput: document.querySelector("#questionInput"),
  answerInput: document.querySelector("#answerInput"),
  saveState: document.querySelector("#saveState"),
  resetBtn: document.querySelector("#resetBtn")
};

let state = loadState();

function loadState() {
  const fallback = {
    cards: DEFAULT_CARDS.map((card, index) => ({
      ...card,
      alternativeAnswer: ALTERNATIVE_ANSWERS[index],
      occurrenceCount: OCCURRENCE_COUNTS[index],
      rating: 0
    })),
    order: DEFAULT_CARDS.map((_, index) => index),
    current: 0,
    flipped: false,
    alternative: false,
    mode: "ordered"
  };

  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved || !Array.isArray(saved.cards)) return fallback;

    const cards = DEFAULT_CARDS.map((defaultCard, index) => ({
      ...defaultCard,
      ...(saved.cards[index] || {}),
      alternativeAnswer: ALTERNATIVE_ANSWERS[index],
      occurrenceCount: OCCURRENCE_COUNTS[index],
      rating: Number(saved.cards[index]?.rating || 0)
    }));

    const current = Math.min(Math.max(Number(saved.current || 0), 0), cards.length - 1);

    return {
      ...fallback,
      ...saved,
      cards,
      current,
      order: Array.isArray(saved.order) && saved.order.length === cards.length
        ? saved.order
        : fallback.order
    };
  } catch {
    return fallback;
  }
}

function saveState(message = "Gespeichert im Browser-Cache.") {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  elements.saveState.textContent = message;
}

function currentCardIndex() {
  return state.order[state.current] ?? 0;
}

function currentCard() {
  return state.cards[currentCardIndex()];
}

function render() {
  const card = currentCard();
  const visibleText = state.flipped
    ? state.alternative ? card.alternativeAnswer : card.answer
    : card.question;

  elements.card.classList.toggle("answer", state.flipped);
  elements.sideLabel.textContent = state.flipped ? "Antwort" : "Frage";
  elements.frequencyBadge.textContent = `Klausuren: ${card.occurrenceCount}/${EXAM_COUNT}`;
  elements.alternativeBtn.textContent = state.alternative ? "Normale Antwort" : "Alternative Antwort";
  elements.cardText.textContent = visibleText;
  elements.cardCounter.textContent = `${state.current + 1} / ${state.cards.length}`;
  elements.questionInput.value = card.question;
  elements.answerInput.value = card.answer;
  elements.orderedBtn.classList.toggle("active", state.mode === "ordered");
  elements.shuffleBtn.classList.toggle("active", state.mode === "shuffle");

  renderRating(card.rating);
}

function renderRating(activeRating) {
  elements.ratingButtons.innerHTML = "";
  for (let value = 1; value <= 5; value += 1) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = value;
    button.className = value === activeRating ? "active" : "";
    button.setAttribute("aria-label", `Bewertung ${value}`);
    button.addEventListener("click", () => {
      currentCard().rating = value;
      saveState();
      render();
    });
    elements.ratingButtons.append(button);
  }
}

function moveBy(step) {
  if (state.mode === "shuffle") {
    const activeCard = currentCardIndex();
    let nextCard = activeCard;
    while (nextCard === activeCard && state.cards.length > 1) {
      nextCard = Math.floor(Math.random() * state.cards.length);
    }
    state.order = DEFAULT_CARDS.map((_, index) => index);
    state.current = nextCard;
  } else {
    state.current = (state.current + step + state.order.length) % state.order.length;
  }
  state.flipped = false;
  state.alternative = false;
  saveState();
  render();
}

function setShuffleMode() {
  const activeCard = currentCardIndex();
  state.order = DEFAULT_CARDS.map((_, index) => index);
  state.current = activeCard;
  state.mode = "shuffle";
  state.flipped = false;
  state.alternative = false;
  saveState("Random-Modus gespeichert.");
  render();
}

function setOrderedMode() {
  const activeCard = currentCardIndex();
  state.order = DEFAULT_CARDS.map((_, index) => index);
  state.current = Math.max(0, activeCard);
  state.mode = "ordered";
  state.flipped = false;
  state.alternative = false;
  saveState("Normale Reihenfolge gespeichert.");
  render();
}

function updateCardField(field, value) {
  currentCard()[field] = value;
  saveState();
  if ((field === "question" && !state.flipped) || (field === "answer" && state.flipped && !state.alternative)) {
    elements.cardText.textContent = value;
  }
}

function flipCard() {
  state.flipped = !state.flipped;
  state.alternative = false;
  saveState();
  render();
}

elements.card.addEventListener("click", flipCard);

elements.card.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  event.preventDefault();
  event.stopPropagation();
  flipCard();
});

elements.alternativeBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  state.alternative = !state.alternative;
  saveState();
  render();
});

elements.prevBtn.addEventListener("click", () => moveBy(-1));
elements.nextBtn.addEventListener("click", () => moveBy(1));
elements.shuffleBtn.addEventListener("click", setShuffleMode);
elements.orderedBtn.addEventListener("click", setOrderedMode);

elements.questionInput.addEventListener("input", (event) => {
  updateCardField("question", event.target.value);
});

elements.answerInput.addEventListener("input", (event) => {
  updateCardField("answer", event.target.value);
});

elements.resetBtn.addEventListener("click", () => {
  const confirmed = window.confirm("Alle Bearbeitungen und Bewertungen lokal zurücksetzen?");
  if (!confirmed) return;
  localStorage.removeItem(STORAGE_KEY);
  state = loadState();
  render();
});

document.addEventListener("keydown", (event) => {
  if (event.target instanceof HTMLTextAreaElement || event.target instanceof HTMLInputElement) return;
  if (event.key === "ArrowLeft") moveBy(-1);
  if (event.key === "ArrowRight") moveBy(1);
  if (event.key === " ") {
    event.preventDefault();
    flipCard();
  }
});

render();
