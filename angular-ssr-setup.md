# Angular SSR Setup Guide (Angular 17+)

## 🧩 Schritt 1: Universal hinzufügen

Im Projektordner ausführen:

```bash
ng add @angular/ssr
```

Das Kommando installiert `@angular/ssr` und `express`, generiert `main.server.ts` und `server.ts`, ergänzt dein `angular.json` und fügt neue NPM-Scripts hinzu.

---

## ⚙️ Schritt 2: Neue Scripts nutzen

Nach der Installation findest du in deiner `package.json`:

```json
"scripts": {
  "build:ssr": "ng build && ng run your-app-name:server",
  "serve:ssr": "node dist/your-app-name/server/main.js"
}
```

👉 Ersetze `your-app-name` ggf. durch den tatsächlichen Projektnamen.

---

## 🚀 Schritt 3: Testlauf

Bauen und starten:

```bash
npm run build:ssr
npm run serve:ssr
```

Dann öffne:

[http://localhost:4000](http://localhost:4000)

Die Seite wird jetzt vom Node.js-Server gerendert und als HTML ausgeliefert.

---

## ✅ Überprüfung

Im Browser: Rechtsklick → *Seitenquelltext anzeigen*  
→ Du siehst echtes HTML mit Inhalten statt eines leeren `<app-root>`.

Das bestätigt: **SSR läuft erfolgreich!**
