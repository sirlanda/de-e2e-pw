# de-e2e-pw
E2E tesztelési tananyag - PlayWright 

## Előkészületek
1. Környezet kialakítása
    - [Visual Studio Code](https://code.visualstudio.com/) beszerzése
    - [Node.js](https://nodejs.org/en) telepítése
    - [Playwright](https://playwright.dev/docs/intro#installing-playwright) telepítése

2. Ismerkedés az alapokkal
    - Parancsok
        - npm init playwright@latest
        - npx playwright --version  
        - npx playwright test       
        - npx playwright show-report
        - npx playwright test --ui  
        - npx playwright codegen

## Feladatok
1. Keressük meg a világ legjobb főnökét
    - Lépések
        - Google megnyitása
        - A kereső mezőben adjuk meg a 'the office' értéket
        - Kattintsunk a keresés gombra
        - Ellenőrizük, hogy a karakterek között szerepel, Michael Scott

2. Módosítsuk az alap scriptünket
    - hogyan lehet jobb? mit változtassunk?
    - függvények használata