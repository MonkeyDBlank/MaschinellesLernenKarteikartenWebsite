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

const STORAGE_KEY = "ml-flashcards-v1";

const elements = {
  card: document.querySelector("#card"),
  sideLabel: document.querySelector("#sideLabel"),
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
    cards: DEFAULT_CARDS.map((card) => ({ ...card, rating: 0 })),
    order: DEFAULT_CARDS.map((_, index) => index),
    current: 0,
    flipped: false,
    mode: "ordered"
  };

  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved || !Array.isArray(saved.cards)) return fallback;

    const cards = DEFAULT_CARDS.map((defaultCard, index) => ({
      ...defaultCard,
      ...(saved.cards[index] || {}),
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
  const visibleText = state.flipped ? card.answer : card.question;

  elements.card.classList.toggle("answer", state.flipped);
  elements.sideLabel.textContent = state.flipped ? "Antwort" : "Frage";
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
  saveState();
  render();
}

function setShuffleMode() {
  const activeCard = currentCardIndex();
  state.order = DEFAULT_CARDS.map((_, index) => index);
  state.current = activeCard;
  state.mode = "shuffle";
  state.flipped = false;
  saveState("Random-Modus gespeichert.");
  render();
}

function setOrderedMode() {
  const activeCard = currentCardIndex();
  state.order = DEFAULT_CARDS.map((_, index) => index);
  state.current = Math.max(0, activeCard);
  state.mode = "ordered";
  state.flipped = false;
  saveState("Normale Reihenfolge gespeichert.");
  render();
}

function updateCardField(field, value) {
  currentCard()[field] = value;
  saveState();
  if ((field === "question" && !state.flipped) || (field === "answer" && state.flipped)) {
    elements.cardText.textContent = value;
  }
}

elements.card.addEventListener("click", () => {
  state.flipped = !state.flipped;
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
  const confirmed = window.confirm("Alle Bearbeitungen, Haken und Bewertungen lokal zurücksetzen?");
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
    state.flipped = !state.flipped;
    saveState();
    render();
  }
});

render();
