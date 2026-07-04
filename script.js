const DEFAULT_CARDS = [
  {
    "question": "Beschreiben Sie kurz und allgemein das klassische Klassifikationsproblem beim Data Mining bzw. beim maschinellen Lernen.",
    "answer": "Aus Beispieldaten mit bekannten Klassen wird ein Modell gelernt, das neue, unbekannte Objekte einer von mehreren diskreten Klassen zuordnet.",
    "alternativeAnswer": "Man bringt dem Modell mit alten Beispielen bei, welche Klasse zu welchem Objekt gehört. Danach soll es neue Fälle richtig einsortieren.",
    "occurrenceCount": 9,
    "exams": [
      "DM_SS11",
      "DM_SS12",
      "DM_SS18",
      "DM_SS21",
      "DM_SS22",
      "DM_SS25",
      "DM_WS1112",
      "DM_WS2223",
      "DM_WS2526_Bachelor"
    ],
    "variants": []
  },
  {
    "question": "Wie unterscheidet sich das klassische Regressionsproblem vom Klassifikationsproblem beim Data Mining bzw. beim maschinellen Lernen?",
    "answer": "Regression sagt kontinuierliche Zahlenwerte voraus, Klassifikation sagt diskrete Klassenlabels voraus. Beispiel: Preis vorhersagen vs. Spam/Nicht-Spam entscheiden.",
    "alternativeAnswer": "Bei Regression kommt eine Zahl raus, bei Klassifikation eine Kategorie. Also eher 'wie viel?' statt 'welche Klasse?'.",
    "occurrenceCount": 5,
    "exams": [
      "DM_SS11",
      "DM_SS21",
      "DM_SS22",
      "DM_WS1112",
      "DM_WS2223"
    ],
    "variants": []
  },
  {
    "question": "Wodurch zeichnen sich Lernprobleme auf Zeitreihen (Time Series) besonders aus?",
    "answer": "Die Reihenfolge der Datenpunkte ist wichtig. Werte hängen oft von früheren Werten ab, deshalb müssen Trends, Saisonalität und zeitliche Abhängigkeiten beachtet werden.",
    "alternativeAnswer": "Hier darf man die Reihenfolge nicht ignorieren. Frühere Werte können spätere beeinflussen, deshalb schaut man auf Verlauf, Trend und Muster über die Zeit.",
    "occurrenceCount": 1,
    "exams": [
      "DM_SS11"
    ],
    "variants": []
  },
  {
    "question": "Nennen Sie drei sogenannte überwachte Lernverfahren, und nennen Sie kurz die mathematischen bzw. informatischen Theorien, auf denen Sie basieren.",
    "answer": "kNN: Distanzmaße und Ähnlichkeit. SVM: Optimierung und lineare Algebra. Naive Bayes: Wahrscheinlichkeitstheorie und Satz von Bayes.",
    "alternativeAnswer": "kNN nutzt Nähe über Distanzen. SVM trennt Klassen über Optimierung. Naive Bayes rechnet mit Wahrscheinlichkeiten und Bayes.",
    "occurrenceCount": 4,
    "exams": [
      "DM_SS11",
      "DM_SS18",
      "DM_WS1112",
      "DM_WS1819"
    ],
    "variants": []
  },
  {
    "question": "Nennen Sie zwei sogenannte unüberwachte Lernverfahren, und nennen Sie kurz die Ziele und die Ansätze, auf denen Sie basieren.",
    "answer": "k-Means: ähnliche Datenpunkte zu Clustern gruppieren, indem Zentren iterativ angepasst werden. PCA: Dimensionen reduzieren, indem Richtungen maximaler Varianz gesucht werden.",
    "alternativeAnswer": "k-Means sucht Gruppen ähnlicher Punkte. PCA fasst Daten in weniger Dimensionen zusammen, ohne möglichst viel Information zu verlieren.",
    "occurrenceCount": 2,
    "exams": [
      "DM_SS12",
      "DM_SS19"
    ],
    "variants": [
      "Nennen Sie drei sogenannte unüberwachte Lernverfahren (!), und nennen Sie kurz die mathematischen bzw. informatischen Theorien, auf denen Sie basieren."
    ]
  },
  {
    "question": "Nennen Sie die drei wichtigsten Phasen beim Data Mining-Prozess, und beschreiben Sie ihre Funktion.",
    "answer": "Vorbereitung: Daten sammeln, bereinigen, transformieren. Modellierung: Verfahren trainieren. Bewertung/Nutzung: Modell prüfen, interpretieren und anwenden.",
    "alternativeAnswer": "Erst Daten brauchbar machen, dann Modell trainieren, danach Ergebnis testen und einsetzen. Ohne saubere Daten bringt das beste Modell wenig.",
    "occurrenceCount": 17,
    "exams": [
      "DM_SS11",
      "DM_SS12",
      "DM_SS18",
      "DM_SS19",
      "DM_SS20",
      "DM_SS21",
      "DM_SS22",
      "DM_SS23",
      "DM_SS25",
      "DM_WS1112",
      "DM_WS1819",
      "DM_WS1920",
      "DM_WS2021",
      "DM_WS2223",
      "DM_WS2324",
      "DM_WS2425",
      "DM_WS2526_Bachelor"
    ],
    "variants": [
      "Nennen Sie die drei wichtigsten Phasen beim Data Mining-Prozess, und beschreiben Sie kurz ihre Funktion."
    ]
  },
  {
    "question": "Was sind die beiden Hauptnachteile während der Nutzungsphase eines kNN-Klassifikators, wenn man kNN in naiver Form praktisch einsetzt?",
    "answer": "Er ist langsam, weil viele Distanzen zu Trainingsdaten berechnet werden müssen. Außerdem braucht er viel Speicher, weil die Trainingsdaten behalten werden.",
    "alternativeAnswer": "kNN muss beim Vorhersagen viele Abstände rechnen und die Trainingsdaten behalten. Dadurch wird es bei großen Daten langsam und speicherlastig.",
    "occurrenceCount": 4,
    "exams": [
      "DM_SS11",
      "DM_SS12",
      "DM_SS21",
      "DM_WS2021"
    ],
    "variants": []
  },
  {
    "question": "Nennen Sie kurz zwei Maßnahmen, die es ermöglichen, Support Vektor Maschinen auch bei nicht linear separierbaren binären Klassifikationsproblemen einzusetzen.",
    "answer": "Soft Margin erlaubt einige Fehlklassifikationen. Der Kernel-Trick bildet Daten implizit in einen höherdimensionalen Raum ab, wo eine Trennung möglich sein kann.",
    "alternativeAnswer": "Man erlaubt Fehler mit Soft Margin und nutzt Kernel, damit eine nichtlineare Trennung möglich wird. So bleibt die SVM flexibel.",
    "occurrenceCount": 3,
    "exams": [
      "DM_SS11",
      "DM_SS18",
      "DM_WS1112"
    ],
    "variants": []
  },
  {
    "question": "Support Vektor Maschinen eignen sich zunächst nur für binäre Klassifikationsprobleme. Beschreiben Sie kurz einen Ansatz, wie SVMs auch für den Fall von n Klassen genutzt werden können.",
    "answer": "Man kombiniert mehrere binäre SVMs, z. B. One-vs-Rest oder One-vs-One. Die Klasse wird dann über die stärkste Entscheidung bzw. Mehrheitsabstimmung gewählt.",
    "alternativeAnswer": "Man baut mehrere binäre SVMs, zum Beispiel jede Klasse gegen den Rest. Am Ende gewinnt die Klasse mit dem stärksten Ergebnis.",
    "occurrenceCount": 5,
    "exams": [
      "DM_SS11",
      "DM_SS12",
      "DM_SS18",
      "DM_SS19",
      "DM_WS1112"
    ],
    "variants": [
      "Support Vektor Maschinen eignen sich zunächst nur für binäre Klassifikationsprobleme (also Probleme mit nur zwei Klassen). Beschreiben kurz einen Ansatz, wie SVMs auch für den Fall von n Klassen genutzt werden können."
    ]
  },
  {
    "question": "Was ist die wichtigste Grundregel, die bei der Auswahl von Test- und Trainingsdaten im Rahmen der Validierung beachtet werden sollte?",
    "answer": "Testdaten dürfen nicht zum Training oder zur Modellauswahl verwendet werden. Sonst misst man nicht mehr sauber die Leistung auf unbekannten Daten.",
    "alternativeAnswer": "Testdaten müssen wirklich unbekannt bleiben. Wenn sie schon ins Training einfließen, bewertet man sich selbst zu gut.",
    "occurrenceCount": 9,
    "exams": [
      "DM_SS11",
      "DM_SS12",
      "DM_SS18",
      "DM_SS23",
      "DM_WS1112",
      "DM_WS2021",
      "DM_WS2223",
      "DM_WS2324",
      "DM_WS2425"
    ],
    "variants": []
  },
  {
    "question": "Beschreiben Sie kurz, wie die sogenannte n-fache Kreuzvalidierung funktioniert.",
    "answer": "Die Daten werden in n Teile geteilt. Jedes Teil ist einmal Testmenge, die übrigen Teile sind Trainingsmenge. Am Ende mittelt man die n Ergebnisse.",
    "alternativeAnswer": "Man teilt die Daten in n Teile. Jeder Teil ist einmal Testset, der Rest Training. Danach nimmt man den Durchschnitt der Ergebnisse.",
    "occurrenceCount": 8,
    "exams": [
      "DM_SS11",
      "DM_SS12",
      "DM_SS23",
      "DM_SS25",
      "DM_WS2021",
      "DM_WS2223",
      "DM_WS2324",
      "DM_WS2425"
    ],
    "variants": []
  },
  {
    "question": "Was versteht man unter Stratifikation im Zusammenhang mit der Validierung?",
    "answer": "Die Klassenverteilung bleibt in Trainings- und Testteilen ungefähr gleich wie im Gesamtdatensatz. Das ist besonders bei unausgeglichenen Klassen wichtig.",
    "alternativeAnswer": "Die Klassenanteile sollen in den Splits ungefähr gleich bleiben. Sonst testet man vielleicht auf einer verzerrten Datenmenge.",
    "occurrenceCount": 5,
    "exams": [
      "DM_SS11",
      "DM_SS12",
      "DM_SS18",
      "DM_WS1112",
      "DM_WS2223"
    ],
    "variants": []
  },
  {
    "question": "Erklären Sie, wie prinzipiell das erwartete Größenverhältnis der Test- und Trainingsdatenmenge von ca. 37% zu ca. 63% bei der Bootstrap-Validierung entsteht.",
    "answer": "Es wird mit Zurücklegen gezogen. Dadurch landen einige Objekte mehrfach in der Trainingsmenge und einige gar nicht. Erwartet sind ca. 63,2% einzigartige Trainingsobjekte und ca. 36,8% Out-of-Bag-Testobjekte.",
    "alternativeAnswer": "Beim Ziehen mit Zurücklegen werden manche Beispiele mehrfach gezogen und manche gar nicht. Die nicht gezogenen nutzt man als Testfälle.",
    "occurrenceCount": 6,
    "exams": [
      "DM_SS11",
      "DM_SS18",
      "DM_SS20",
      "DM_WS1112",
      "DM_WS1819",
      "DM_WS1920"
    ],
    "variants": [
      "Erklären Sie, wie prinzipiell das erwartete Größenverhältnis der Test- und Trainingsdatenmenge von ca. 37% zu ca. 63% bei der Bootstrap-Validierung entsteht. Hinweis: Die mathematische Formel für das erwartete Verhältnis von Test- und Trainingsdatengröße brauchen Sie dabei nicht herzuleiten.",
      "Erklären Sie, wie prinzipiell das erwartete Größenverhältnis der Test- und Trainingsdatenmenge von ca. 27% zu ca. 63% bei der Bootstrap-Validierung entsteht. Hinweis: Die mathematische Formel für das erwartete Verhältnis von Test- und Trainingsdatengröße brauchen Sie dabei nicht herzuleiten."
    ]
  },
  {
    "question": "Geben Sie die Definition von Precision und Recall auf Basis der Kenngrößen TP, FP, TN und FN entsprechend dem Aufbau einer Vertauschungsmatrix an.",
    "answer": "Precision = TP / (TP + FP): Anteil korrekter positiver Vorhersagen. Recall = TP / (TP + FN): Anteil gefundener tatsächlich positiver Fälle.",
    "alternativeAnswer": "Precision sagt: Von meinen positiven Vorhersagen, wie viele stimmen? Recall sagt: Von allen echten Positiven, wie viele habe ich gefunden?",
    "occurrenceCount": 2,
    "exams": [
      "DM_SS11",
      "DM_SS12"
    ],
    "variants": [
      "Geben Sie die Definition von Precision (Präzision) und Recall (Rücklauf) auf Basis der Kenngrößen TP (true positive), FP (false positive), TN (true negative) und FN (false negative) entsprechend dem unten dargestellten Aufbau einer Vertauschungsmatrix an. Tatsächlicher Wert vorher- ja nein gesagter ja TP FP Wert nein FN TN",
      "Geben Sie die Definition von Precision (Präzision) und Recall (Recall) auf Basis der Kenngrößen TP (true positive), FP (false positive), TN (true negative) und FN (false negative) entsprechend dem unten dargestellten Aufbau einer Vertauschungsmatrix an. Tatsächlicher Wert vorher- ja nein gesagter ja TP FP Wert nein FN TN"
    ]
  },
  {
    "question": "Angenommen Sie haben aus einem Lehrbuch heraus verstanden, wie ein populäres aber kompliziertes maschinelles Lernverfahren funktioniert, und wollen es schnell mit SQL-Forschungsdaten ausprobieren. Welche prinzipiellen Vorgehensweisen bieten sich an?",
    "answer": "Eine vorhandene Implementierung in Tools wie Python, R, Weka oder scikit-learn nutzen, Daten aus SQL exportieren oder anbinden und zuerst einen kleinen Prototyp bauen.",
    "alternativeAnswer": "Ich würde nicht selbst alles neu programmieren, sondern eine fertige Library nehmen, SQL-Daten exportieren oder anbinden und schnell einen Prototyp testen.",
    "occurrenceCount": 5,
    "exams": [
      "DM_SS12",
      "DM_SS22",
      "DM_SS23",
      "DM_WS2223",
      "DM_WS2324"
    ],
    "variants": [
      "Angenommen Sie haben gestern aus einem Lehrbuch heraus verstanden, wie ein populäres aber kompliziertes maschinelles Lernverfahren funktioniert. Das Lehrbuch beschreibt auch grob den Algorithmus des Verfahrens. Sie wollen das Verfahren nun möglichst schnell und kostengünstig ausprobieren und dabei mit ihren Forschungsdaten aus einer SQL-Datenbank experimentieren. Welche prinzipielle(n) Vorgehensweise(n) bietet/bieten sich an?"
    ]
  },
  {
    "question": "Nennen Sie drei Beispiele für die Anwendbarkeit des Page Rank-Verfahrens in der Praxis. Geben Sie für jedes Beispiel kurz an, wie sich der gerichtete Graph ergibt.",
    "answer": "Webseiten: Links zwischen Seiten. Zitationsanalyse: Paper zitieren andere Paper. Social Media: Nutzer folgen oder verweisen auf andere Nutzer.",
    "alternativeAnswer": "Web: Seite linkt auf Seite. Paper: Paper zitiert Paper. Social: Nutzer folgt Nutzer. Daraus entsteht jeweils ein gerichteter Graph.",
    "occurrenceCount": 1,
    "exams": [
      "DM_SS12"
    ],
    "variants": [
      "Nennen Sie drei Beispiele für die Anwendbarkeit des Page Rank-Verfahrens in der Praxis. Geben Sie für jedes Beispiel kurz an, wie sich dabei der gerichtete Graph ergibt, auf dem das Page Rank-Verfahren aufsetzt."
    ]
  },
  {
    "question": "Beschreiben Sie kurz und prägnant, wie das Meta-Lernverfahren Bootstrap-Aggregation (Bagging) funktioniert.",
    "answer": "Man zieht mehrere Bootstrap-Stichproben, trainiert darauf mehrere Modelle und aggregiert ihre Vorhersagen, z. B. per Mehrheitsvote oder Mittelwert.",
    "alternativeAnswer": "Man trainiert viele Modelle auf leicht anderen Stichproben und lässt sie zusammen entscheiden. Dadurch wird das Ergebnis stabiler.",
    "occurrenceCount": 4,
    "exams": [
      "DM_SS12",
      "DM_SS20",
      "DM_WS1819",
      "DM_WS1920"
    ],
    "variants": [
      "Beschreiben Sie kurz: Wie funktioniert Bootstrap-Aggregation (auch Bagging genannt) als klassifizierendes Lernverfahren?"
    ]
  },
  {
    "question": "Ein Naiver Bayes-Klassifikator arbeitet üblicherweise über nominellen Quellattributen. Nennen Sie zwei Maßnahmen, wie man ihn indirekt dennoch auf reellwertigen Quellattributen trainieren kann.",
    "answer": "Entweder reelle Werte diskretisieren und Klassenintervalle bilden oder eine Verteilung annehmen, z. B. Gaußverteilung, und deren Parameter je Klasse schätzen.",
    "alternativeAnswer": "Entweder macht man aus Zahlen Klassenbereiche oder man nimmt eine Verteilung wie Normalverteilung an. Dann kann Bayes trotzdem rechnen.",
    "occurrenceCount": 3,
    "exams": [
      "DM_SS18",
      "DM_SS19",
      "DM_WS1112"
    ],
    "variants": [
      "Ein Naiver Bayes-Klassifikator arbeitet üblicher Weise über nominellen Quellattributen. Nennen Sie zwei verschiedene Maßnahmen, wie man einen Naiven Bayes-Klassifikator indirekt dennoch auf reellwertigen Quellattributen trainieren kann. Beschreiben Sie diese Maßnahmen."
    ]
  },
  {
    "question": "Beschreiben Sie über eine mathematische Formel, wie das Gütemaß Sum of Squared Error (SSE) zur Bewertung der Qualität einer Clusterung allgemein berechnet wird.",
    "answer": "SSE = Summe über alle Cluster und Punkte der quadrierten Distanz zum jeweiligen Clusterzentrum: Σ_i Σ_x in C_i ||x - μ_i||².",
    "alternativeAnswer": "Man misst für jeden Punkt, wie weit er vom eigenen Clusterzentrum weg ist, quadriert das und summiert alles auf. Weniger ist besser.",
    "occurrenceCount": 10,
    "exams": [
      "DM_SS18",
      "DM_SS19",
      "DM_SS20",
      "DM_SS21",
      "DM_SS22",
      "DM_WS1112",
      "DM_WS1819",
      "DM_WS1920",
      "DM_WS2021",
      "DM_WS2223"
    ],
    "variants": []
  },
  {
    "question": "Beim k-Means-Clustering ist die Struktur der entstehenden Cluster abhängig von der Wahl der initialen Cluster-Zentren. Wie kann man trotzdem optimale Cluster-Zentren hinsichtlich SSE finden?",
    "answer": "k-Means mehrfach mit verschiedenen zufälligen Initialisierungen starten und die Lösung mit der kleinsten SSE wählen. Garantiert optimal ist nur exhaustive Suche, praktisch nutzt man Restarts.",
    "alternativeAnswer": "Man startet k-Means oft mit verschiedenen Startzentren und nimmt die Variante mit kleinster SSE. Praktisch ist das der normale Weg.",
    "occurrenceCount": 8,
    "exams": [
      "DM_SS18",
      "DM_SS21",
      "DM_SS22",
      "DM_SS23",
      "DM_WS1112",
      "DM_WS2021",
      "DM_WS2223",
      "DM_WS2324"
    ],
    "variants": [
      "Beim k-Means-Clustering ist die Struktur der entstehenden Cluster abhängig von der Wahl der initialen Cluster-Zentren. Für eine gute Wahl der initialen Cluster-Zentren gibt es aber oft keine brauchbare Heuristik. Wie kann man sicherstellen, dass trotz dieser Tatsache optimale Cluster-Zentren hinsichtlich des Gütemaßes SSE gefunden werden?"
    ]
  },
  {
    "question": "Beim k-Means-Clustering ist eine gute Wahl für die Anzahl der Cluster k oft nicht bekannt. Beschreiben Sie ein Verfahren, mit dem man geeignete Kandidaten für k finden kann.",
    "answer": "Man berechnet k-Means für verschiedene k und betrachtet die SSE. Beim Elbow-Verfahren wählt man ein k, ab dem die Verbesserung nur noch gering ist.",
    "alternativeAnswer": "Man probiert mehrere k aus und schaut auf die SSE-Kurve. Beim Knick bringt mehr k kaum noch Verbesserung.",
    "occurrenceCount": 1,
    "exams": [
      "DM_WS1112"
    ],
    "variants": [
      "Beim k-Means-Clustering ist eine gute Wahl für die Anzahl der Cluster k im Vorhinein oft nicht bekannt. Beschreiben Sie ein Verfahren, mit dem man geeignete Kandidaten für k finden kann (ohne auf hierarchische Clustering zurückzugreifen)."
    ]
  },
  {
    "question": "Was ist der mögliche Wertebereich für ein Feature einer SVM?",
    "answer": "Ein Feature kann grundsätzlich reellwertig sein. Praktisch werden Features oft skaliert oder normalisiert, damit kein Merkmal die Optimierung dominiert.",
    "alternativeAnswer": "Ein SVM-Feature kann ein normaler Zahlenwert sein. Wichtig ist eher, dass die Werte sinnvoll skaliert sind.",
    "occurrenceCount": 3,
    "exams": [
      "DM_SS19",
      "DM_SS20",
      "DM_WS1920"
    ],
    "variants": []
  },
  {
    "question": "Wie lautet die Testfunktion für eine SVM ohne Kernel, d.h. wie stellt man fest, ob ein Testdatensatz beim binären Klassifikationsproblem zur Positiv- oder Negativklasse gehört?",
    "answer": "Man berechnet f(x) = w^T x + b. Ist das Vorzeichen positiv, wird die positive Klasse gewählt, sonst die negative Klasse.",
    "alternativeAnswer": "Man setzt den Punkt in w^T x + b ein. Das Vorzeichen entscheidet dann, ob er zur positiven oder negativen Klasse gehört.",
    "occurrenceCount": 3,
    "exams": [
      "DM_SS19",
      "DM_SS20",
      "DM_WS1920"
    ],
    "variants": []
  },
  {
    "question": "Wie zeigt sich das Problem der Überanpassung im Rahmen einer Validierung?",
    "answer": "Das Modell ist auf Trainingsdaten sehr gut, auf Validierungs- oder Testdaten aber deutlich schlechter. Es hat Details oder Rauschen der Trainingsdaten gelernt.",
    "alternativeAnswer": "Training sieht super aus, Validierung aber deutlich schlechter. Dann hat das Modell zu viel auswendig gelernt.",
    "occurrenceCount": 4,
    "exams": [
      "DM_SS20",
      "DM_WS1819",
      "DM_WS1920",
      "DM_WS2021"
    ],
    "variants": []
  },
  {
    "question": "Mit welchen Maßnahmen kann man der Unteranpassung (Underfitting) entgegenwirken?",
    "answer": "Ein komplexeres Modell wählen, mehr oder bessere Features nutzen, länger trainieren oder Regularisierung reduzieren. Ziel: Das Modell muss genug Muster lernen können.",
    "alternativeAnswer": "Das Modell ist zu simpel oder lernt zu wenig. Also komplexer machen, bessere Features nutzen oder weniger stark regularisieren.",
    "occurrenceCount": 1,
    "exams": [
      "DM_SS21"
    ],
    "variants": [
      "Mit welchen Maßnahmen kann man der sog. Unteranpassung (Underfitting) entgegenwirken?"
    ]
  },
  {
    "question": "Mit welchen Maßnahmen kann man der Überanpassung (Overfitting) entgegenwirken?",
    "answer": "Regularisierung erhöhen, Modell vereinfachen, mehr Daten nutzen, Data Augmentation, Dropout, Early Stopping oder bessere Validierung einsetzen.",
    "alternativeAnswer": "Das Modell muss weniger auswendig lernen: mehr Daten, einfacheres Modell, Regularisierung, Dropout oder Early Stopping.",
    "occurrenceCount": 5,
    "exams": [
      "DM_SS22",
      "DM_SS23",
      "DM_WS2223",
      "DM_WS2324",
      "DM_WS2425"
    ],
    "variants": [
      "Mit welchen Maßnahmen kann man der sog. Überanpassung (Overfitting) entgegenwirken?"
    ]
  },
  {
    "question": "Wozu dient die Aktivierungsfunktion bei Neuronalen Netzen?",
    "answer": "Die Aktivierungsfunktion bringt Nichtlinearität ins neuronale Netz und entscheidet, wie stark ein Neuron auf seine gewichtete Eingabe reagiert.",
    "alternativeAnswer": "Kurz gesagt: Die Aktivierungsfunktion bringt Nichtlinearität ins neuronale Netz und entscheidet, wie stark ein Neuron auf seine gewichtete Eingabe reagiert.",
    "occurrenceCount": 8,
    "exams": [
      "DM_SS20",
      "DM_SS21",
      "DM_SS22",
      "DM_SS25",
      "DM_WS1819",
      "DM_WS1920",
      "DM_WS2021",
      "DM_WS2526_Bachelor"
    ],
    "variants": []
  },
  {
    "question": "Wozu dient die sogenannte Backward-Propagation für Neuronale Netze?",
    "answer": "Backward Propagation berechnet die Gradienten des Fehlers rückwärts durch das Netz. Damit können Gewichte per Gradientenverfahren angepasst werden.",
    "alternativeAnswer": "Kurz gesagt: Backward Propagation berechnet die Gradienten des Fehlers rückwärts durch das Netz. Damit können Gewichte per Gradientenverfahren angepasst werden.",
    "occurrenceCount": 3,
    "exams": [
      "DM_SS20",
      "DM_WS1819",
      "DM_WS1920"
    ],
    "variants": []
  },
  {
    "question": "Beschreiben Sie den Aufbau eines Perzeptrons. Geben Sie dazu die mögliche Ein- und Ausgabe an und beschreiben Sie, wie die Ausgabe mathematisch aus der Eingabe berechnet wird.",
    "answer": "Ein Perzeptron erhält Eingaben x, Gewichte w und Bias b. Es berechnet z = w^T x + b und gibt nach einer Aktivierungsfunktion, z. B. Schwellenfunktion, einen Wert aus.",
    "alternativeAnswer": "Ein Perzeptron nimmt Eingaben, gewichtet sie, addiert Bias und schickt das Ergebnis durch eine Aktivierung. Daraus entsteht die Ausgabe.",
    "occurrenceCount": 5,
    "exams": [
      "DM_SS23",
      "DM_SS25",
      "DM_WS2324",
      "DM_WS2425",
      "DM_WS2526_Bachelor"
    ],
    "variants": []
  },
  {
    "question": "Zeichnen Sie den schematischen Aufbau eines Neuronalen Netzes zur Abbildung der Funktion XOR mit einer minimalen Anzahl von Perzeptronen.",
    "answer": "Mit zwei Hidden-Perzeptronen für OR und NAND und einem Output-Perzeptron für AND. Aktivierung ist eine Schwellenfunktion; passende Gewichte/Bias realisieren die logischen Gatter.",
    "alternativeAnswer": "XOR geht mit einer kleinen versteckten Schicht: erst logische Teilfunktionen wie OR und NAND bauen, dann mit AND kombinieren.",
    "occurrenceCount": 5,
    "exams": [
      "DM_SS23",
      "DM_WS1819",
      "DM_WS2324",
      "DM_WS2425",
      "DM_WS2526_Bachelor"
    ],
    "variants": [
      "Zeichnen Sie den schematischen Aufbau eines Neuronalen Netzes zur Abbildung der Funktion XOR mit einer minimalen Anzahl von Perzeptronen. Geben Sie jeweils den Bias, die Kantengewichte und die Aktivierungsfunktion für die Perzeptronen an.",
      "Zeichnen Sie ein neuronales Netz, welches das XOR-Problem löst. Genauer soll das Netz für die Eingaben A, B entspr. der folgenden Tabelle jeweils die Ausgabe C liefern. Das Netz soll aus so wenig Neuronen wie möglich bestehen. Geben Sie im Netz die passenden Kantengewichte, die Biases der Neuronen sowie deren Aktivierungsfunktion(en) an. A B C 0 0 0 0 1 1 1 0 1 1 1 0",
      "Geben Sie grafisch ein Neuronales Netz an, welches die Funktion XOR abbildet. Das Netz soll aus 2 Eingangsneuronen (x, y entspr. Tabelle unten) und einem Ausgangsneuron (z entspr. Tabelle unten) bestehen. Geben Sie die dazu die Gewichte der Verbindungen zwischen den Neuronen und bei den Neuronen die Biases sowie die Aktivierungsfunktionen an. Die Funktion XOR ist über folgende Tabelle definiert: x y z 1 1 0 1 0 1 0 1 1 0 0 0"
    ]
  },
  {
    "question": "Was versteht man unter Early Stopping im Zusammenhang mit dem Training von Neuronalen Netzen?",
    "answer": "Das Training wird beendet, sobald sich die Leistung auf Validierungsdaten nicht mehr verbessert oder schlechter wird. So reduziert man Overfitting.",
    "alternativeAnswer": "Man hört auf zu trainieren, wenn die Validierungsleistung nicht mehr besser wird. So stoppt man, bevor das Netz überlernt.",
    "occurrenceCount": 4,
    "exams": [
      "DM_SS23",
      "DM_WS2223",
      "DM_WS2324",
      "DM_WS2425"
    ],
    "variants": [
      "Was versteht man unter „Early Stopping“ (frühes Beenden) im Zusammenhang mit dem Training von Neuronalen Netzen?"
    ]
  },
  {
    "question": "Geben Sie als Formel an: Wie viele Trainingsparameter hat ein Feed-Forward-Netz bestehend aus drei voll verknüpften Schichten mit n_i Perzeptronen?",
    "answer": "Bei n1 als Eingabeschicht: n1*n2 + n2 Biases plus n2*n3 + n3 Biases. Also n1n2 + n2 + n2n3 + n3.",
    "alternativeAnswer": "Zwischen n1 und n2 gibt es n1*n2 Gewichte plus n2 Biases, zwischen n2 und n3 nochmal n2*n3 plus n3 Biases.",
    "occurrenceCount": 3,
    "exams": [
      "DM_SS23",
      "DM_WS2324",
      "DM_WS2425"
    ],
    "variants": [
      "Geben Sie als Formel an: Wie viele Trainingsparameter hat ein Feed-Forward-Netz bestehend aus drei Schichten mit n Perzeptronen pro Schicht i für i = 1, 2, 3, wenn i die Neuronen zwischen aufeinanderfolgenden Schichten jeweils voll verknüpft sind? Begründen Sie Ihre Antwort kurz.",
      "Geben Sie als Formel an: Wie viele Trainingsparameter hat ein Feed-Forward-Netz bestehend aus drei Schichten mit n Perzeptronen pro Schicht i für i = 1, 2, 3, wenn i die Neuronen zwischen aufeinanderfolgenden Schichten jeweils voll verknüpft sind? Dabei sei n die Eingabeschicht. Begründen Sie Ihre Antwort kurz. 4 P 1"
    ]
  },
  {
    "question": "Wozu dient die Unterteilung von Validierungs- und Testdaten beim Data Mining?",
    "answer": "Validierungsdaten dienen zur Modellauswahl und Parameterabstimmung. Testdaten dienen erst am Ende zur unabhängigen Bewertung des finalen Modells.",
    "alternativeAnswer": "Kurz gesagt: Validierungsdaten dienen zur Modellauswahl und Parameterabstimmung. Testdaten dienen erst am Ende zur unabhängigen Bewertung des finalen Modells.",
    "occurrenceCount": 5,
    "exams": [
      "DM_SS23",
      "DM_SS25",
      "DM_WS2324",
      "DM_WS2425",
      "DM_WS2526_Bachelor"
    ],
    "variants": []
  },
  {
    "question": "Wie erstellt man Lernkurven im Rahmen von Validierung und Test? Wozu dienen sie hauptsächlich?",
    "answer": "Man trainiert mit unterschiedlich großen Trainingsmengen und misst Trainings- sowie Validierungsfehler. Lernkurven zeigen Underfitting, Overfitting und ob mehr Daten helfen.",
    "alternativeAnswer": "Man trainiert mit immer mehr Daten und plottet Trainings- und Validierungsfehler. Daraus sieht man, ob mehr Daten oder ein anderes Modell helfen.",
    "occurrenceCount": 4,
    "exams": [
      "DM_SS23",
      "DM_SS25",
      "DM_WS2324",
      "DM_WS2425"
    ],
    "variants": []
  },
  {
    "question": "Geben Sie den Aufbau einer Vertauschungsmatrix (Confusion Matrix) für die binäre Klassifikation an. Wie heißen die vier Felder der Matrix jeweils?",
    "answer": "Felder: TP, FP, TN, FN. Sensitivity bzw. Recall = TP / (TP + FN), also Anteil korrekt erkannter positiver Fälle.",
    "alternativeAnswer": "Die Matrix zählt TP, FP, TN und FN. Sensitivity ist TP geteilt durch alle echten Positiven, also TP/(TP+FN).",
    "occurrenceCount": 3,
    "exams": [
      "DM_SS25",
      "DM_WS2425",
      "DM_WS2526_Bachelor"
    ],
    "variants": [
      "Geben Sie den Aufbau einer Vertauschungsmatrix (Confusion Matrix) für die binäre Klassifikation an. Wie heißen die vier Felder der Matrix jeweils? Geben Sie auf Basis der Felder die Berechnungsformel für die Genauigkeit (Accuracy) an.",
      "Geben Sie den Aufbau einer Vertauschungsmatrix (Confusion Matrix) für die binäre Klassifikation an. Wie heißen die vier Felder der Matrix jeweils? Geben Sie auf Basis der Felder die Berechnungsformel für die Fehlerrate (Error Rate) an.",
      "Geben Sie den Aufbau einer Vertauschungsmatrix (Confusion Matrix) für die binäre Klassifikation an. Wie heißen die vier Felder der Matrix jeweils? Geben Sie auf Basis der Felder die Berechnungsformel für die Sensitivität (Sensitivity) an."
    ]
  },
  {
    "question": "Wozu dient die Loss-Funktion (oder Verlust-Funktion) bei Neuronalen Netzen?",
    "answer": "Sie misst den Fehler zwischen Vorhersage und Zielwert. Beim Training werden die Gewichte so angepasst, dass dieser Fehler möglichst klein wird.",
    "alternativeAnswer": "Die Loss-Funktion ist der Fehlerwert fürs Netz. Backpropagation versucht genau diesen Wert kleiner zu machen.",
    "occurrenceCount": 2,
    "exams": [
      "DM_SS25",
      "DM_WS2526_Bachelor"
    ],
    "variants": []
  },
  {
    "question": "Was versteht man unter Batch Size im Zusammenhang mit dem Training von Neuronalen Netzen?",
    "answer": "Batch Size ist die Anzahl der Trainingsbeispiele, nach denen ein Update der Gewichte berechnet wird. Kleine Batches rauschen mehr, große sind stabiler aber teurer.",
    "alternativeAnswer": "Kurz gesagt: Batch Size ist die Anzahl der Trainingsbeispiele, nach denen ein Update der Gewichte berechnet wird. Kleine Batches rauschen mehr, große sind stabiler aber teurer.",
    "occurrenceCount": 3,
    "exams": [
      "DM_SS25",
      "DM_WS2425",
      "DM_WS2526_Bachelor"
    ],
    "variants": []
  },
  {
    "question": "Beschreiben Sie kurz, wie der sogenannte Bootstrap funktioniert.",
    "answer": "Aus einem Datensatz mit n Objekten werden n-mal Objekte mit Zurücklegen gezogen. Dadurch entstehen neue Stichproben mit Wiederholungen und ausgelassenen Objekten.",
    "alternativeAnswer": "Bootstrap heißt: Aus n Datenpunkten n-mal mit Zurücklegen ziehen. Dadurch entstehen Trainingssets mit Dopplungen und Lücken.",
    "occurrenceCount": 1,
    "exams": [
      "DM_WS2526_Bachelor"
    ],
    "variants": []
  },
  {
    "question": "Wie erstellt man sogenannte ROC-Kurven im Rahmen von Validierung und Test?",
    "answer": "ROC-Kurven entstehen, indem man für verschiedene Schwellenwerte True-Positive-Rate gegen False-Positive-Rate plottet. Sie zeigen den Trade-off eines binären Klassifikators.",
    "alternativeAnswer": "Kurz gesagt: ROC-Kurven entstehen, indem man für verschiedene Schwellenwerte True-Positive-Rate gegen False-Positive-Rate plottet. Sie zeigen den Trade-off eines binären Klassifikators.",
    "occurrenceCount": 1,
    "exams": [
      "DM_WS2526_Bachelor"
    ],
    "variants": []
  },
  {
    "question": "Erklären Sie die Funktionsweise der Maximum Likelihood Methode für das Maschinelle Lernen anhand der Formel Theta* = argmax_Theta P(D|Theta).",
    "answer": "Gesucht sind Parameter Θ, unter denen die beobachteten Daten D am wahrscheinlichsten sind. Man wählt also das Θ mit maximaler Likelihood P(D|Θ).",
    "alternativeAnswer": "Man sucht die Parameter, bei denen die gesehenen Daten am plausibelsten sind. Genau das meint argmax über P(D|Θ).",
    "occurrenceCount": 1,
    "exams": [
      "DM_WS1819"
    ],
    "variants": [
      "Erklären Sie die Funktionsweise der Maximum Likelihood Methode für das Maschinelle Lernen anhand der entsprechenden Formel aus der Vorlesung: Θ∗ = argmax P (D|Θ) Θ"
    ]
  },
  {
    "question": "Wodurch zeichnet sich das Verfahren Random Forest als spezielles Bagging-Verfahren aus?",
    "answer": "Viele Entscheidungsbäume werden auf Bootstrap-Stichproben trainiert. Zusätzlich betrachtet jeder Split nur eine zufällige Feature-Auswahl. Das senkt Korrelation und Overfitting.",
    "alternativeAnswer": "Random Forest ist Bagging mit vielen Entscheidungsbäumen. Bei jedem Split wird nur ein zufälliger Teil der Features betrachtet.",
    "occurrenceCount": 1,
    "exams": [
      "DM_WS1819"
    ],
    "variants": [
      "Beantworten Sie kurz: Wodurch zeichnet sich das Verfahren Random Forest als spezielles Bagging-Verfahren aus?"
    ]
  }
];

const EXAM_COUNT = 17;

const EXAM_STATS = [
  { exam: "DM_SS11", questions: 59.1, tasks: 40.9 },
  { exam: "DM_SS12", questions: 74.7, tasks: 25.3 },
  { exam: "DM_SS18", questions: 62.8, tasks: 37.2 },
  { exam: "DM_SS19", questions: 48.3, tasks: 51.7 },
  { exam: "DM_SS20", questions: 42.2, tasks: 57.8 },
  { exam: "DM_SS21", questions: 47.5, tasks: 52.5 },
  { exam: "DM_SS22", questions: 51.7, tasks: 48.3 },
  { exam: "DM_SS23", questions: 65.0, tasks: 35.0 },
  { exam: "DM_SS25", questions: 63.3, tasks: 36.7 },
  { exam: "DM_WS1112", questions: 77.5, tasks: 22.5 },
  { exam: "DM_WS1819", questions: 54.7, tasks: 45.3 },
  { exam: "DM_WS1920", questions: 42.2, tasks: 57.8 },
  { exam: "DM_WS2021", questions: 46.7, tasks: 53.3 },
  { exam: "DM_WS2223", questions: 63.9, tasks: 36.1 },
  { exam: "DM_WS2324", questions: 65.0, tasks: 35.0 },
  { exam: "DM_WS2425", questions: 65.0, tasks: 35.0 },
  { exam: "DM_WS2526_Bachelor", questions: 63.3, tasks: 36.7 }
];

const STORAGE_KEY = "ml-flashcards-v2";

const elements = {
  card: document.querySelector("#card"),
  alternativeBtn: document.querySelector("#alternativeBtn"),
  sideLabel: document.querySelector("#sideLabel"),
  frequencyBadge: document.querySelector("#frequencyBadge"),
  cardText: document.querySelector("#cardText"),
  examList: document.querySelector("#examList"),
  variantBlock: document.querySelector("#variantBlock"),
  variantList: document.querySelector("#variantList"),
  cardCounter: document.querySelector("#cardCounter"),
  statsBtn: document.querySelector("#statsBtn"),
  statsModal: document.querySelector("#statsModal"),
  closeStatsBtn: document.querySelector("#closeStatsBtn"),
  statsTableBody: document.querySelector("#statsTableBody"),
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
    cards: DEFAULT_CARDS.map((card) => ({
      ...card,
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
      exams: defaultCard.exams,
      variants: defaultCard.variants,
      occurrenceCount: defaultCard.occurrenceCount,
      alternativeAnswer: defaultCard.alternativeAnswer,
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
  elements.examList.textContent = card.exams.join(", ");
  elements.variantList.textContent = card.variants.length ? card.variants.join(" | ") : "Keine relevante Variante erfasst.";
  elements.variantBlock.classList.toggle("empty", card.variants.length === 0);
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

function renderStatsTable() {
  elements.statsTableBody.innerHTML = "";
  EXAM_STATS.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.exam}</td>
      <td>${item.questions.toFixed(1)}%</td>
      <td>${item.tasks.toFixed(1)}%</td>
    `;
    elements.statsTableBody.append(row);
  });
}

function openStatsModal() {
  elements.statsModal.classList.add("open");
  elements.statsModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  elements.closeStatsBtn.focus();
}

function closeStatsModal() {
  elements.statsModal.classList.remove("open");
  elements.statsModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  elements.statsBtn.focus();
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
elements.statsBtn.addEventListener("click", openStatsModal);
elements.closeStatsBtn.addEventListener("click", closeStatsModal);
elements.statsModal.addEventListener("click", (event) => {
  if (event.target.hasAttribute("data-close-modal")) closeStatsModal();
});

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
  if (event.key === "Escape" && elements.statsModal.classList.contains("open")) {
    closeStatsModal();
    return;
  }
  if (event.target instanceof HTMLTextAreaElement || event.target instanceof HTMLInputElement) return;
  if (event.key === "ArrowLeft") moveBy(-1);
  if (event.key === "ArrowRight") moveBy(1);
  if (event.key === " ") {
    event.preventDefault();
    flipCard();
  }
});

renderStatsTable();
render();
