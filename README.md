# library_backend

## Projektbeschreibung

Dies ist ein Backend-Projekt, das mit Node.js und Express entwickelt wurde. Es verbindet sich mit einer MongoDB-Datenbank und bietet eine API für die Verwaltung von Büchern.

### 29.01.2025

- Einrichtung des Express-Servers in `server.js`.
- Implementierung der Datenbankverbindung in `connectToDB.js`.
- Verwendung von Umgebungsvariablen zur Konfiguration.

### 30.01.2025

- Implementierung des book Schemas in `models/book.js`.
- Hinzufügen von Controller-Logik zur Verarbeitung von Anfragen in `controllers/bookController.js`.
  - `createBook` erstellt ein neues Buch.
  - `getAllBooks` gibt alle Bücher zurück.

## nächste Schritte

- Implementierung von Routen in `routes/bookRoutes.js`.
- Implementierung von der restlichen Controller-Logik.

## Ordnerstruktur

```
- Controllers/
- Data/
- Models/
- Public/
- Routes/
- server.js
- connect.js
- package.json
- README.md
```

## Verwendete Module

- express
- faker
- mongoose
- dotenv
- node
