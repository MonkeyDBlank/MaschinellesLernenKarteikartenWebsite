# ML Karteikarten

Einfache statische Karteikarten-Website für die Theoriefragen aus `theoriefragen.pdf`.

## Features

- Frage per Klick umdrehen und Antwort anzeigen
- Alternative Kurzantwort auf der Antwortseite einblendbar
- Häufigkeit der Frage in den 17 Altklausuren direkt auf der Karte
- Vor/Zurück-Navigation
- Normale Reihenfolge oder Random-Modus, bei dem die Pfeile zufällige Karten wählen
- Frage und Antwort direkt im Browser bearbeiten
- Bewertung von 1 bis 5
- Speicherung ohne externe Datenbank über `localStorage`
- Läuft als statische Website auf Vercel

## Lokal öffnen

Die Seite kann direkt über `index.html` geöffnet werden. Für einen kleinen lokalen Server:

```bash
python3 -m http.server 5173
```

Dann im Browser `http://localhost:5173` öffnen.
