# de-e2e-pw
E2E tesztelési tananyag - PlayWright 

## Előfeltételek
- a2 branch-en található előkészületek, feladatok végrehajtása.

## **`playwright.config.ts` beállítása**

Az alapkonfigurációt módosítsd az igényeidnek megfelelően:

### a. **Browserek konfigurálása**

Győződj meg róla, hogy a megfelelő böngészők (Chromium, Firefox, WebKit) engedélyezve vannak:

```typescript
import { defineConfig } from '@playwright/test';

export default defineConfig({
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
    { name: 'firefox', use: { browserName: 'firefox' } },
    { name: 'webkit', use: { browserName: 'webkit' } },
  ],
});
```

### b. **Alapértelmezett beállítások**

Például:

```json
use: {
  headless: true,  // Látható böngésző nélküli futtatás
  viewport: { width: 1280, height: 720 }, // Képernyőméret
  ignoreHTTPSErrors: true,  // HTTPS hibák figyelmen kívül hagyása
  screenshot: 'only-on-failure', // Képernyőkép hiba esetén
  video: 'retain-on-failure',  // Videók mentése hiba esetén
  baseURL: 'https://example.com', // Alap URL a tesztekhez
},
```

## védett értékek kiszervezése `.env` fájlba

```typescript
require('dotenv').config();
...
  baseURL: process.env.BASE_URL ?? 'http://efr-fe.local',
...
```

## Feladatok
1. Felesleges böngészők eltávolítása a projektből
2. baseURL beállítása a konfigurációban
3. felhasználó belépési adatai környezeti változóként (`.env`)