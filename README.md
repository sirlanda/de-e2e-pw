# de-e2e-pw
E2E tesztelési tananyag - PlayWright 

- \#PlayWright e2e tesztek Redmine ticketing rendszerre

  - Projekt inicializálás

  - ```bash
    # Node verzió beállítása
    nvm use
    # Lib-ek talapítése
    npm i
    # PlayWright függőségek telepítése
    npx playwright install
    # Ha az előző nem megy, akkor előtte:
    npx playwright install-deps
    ```

  - Puska

  - ```bash
    npx playwright test          # fusson mind
    npx playwright test login    # csak aminek a nevében login van
    npx playwright test login --headed --project=firefox    # de lássam is ff-ban
    npx playwright test login --debug    # mit cseszek már el?
    npx playwright codegen https://ptell.tigra.hu/ptell/    # a csuda fogja kézzel megírni
    npx playwright test login --trace on --project firefox  # demán csak visszanézném később
    npx playwright show-report   # muti
    npx playwright test --ui     # felületes szemlélődés
    ```

  - 

- [de-e2e-pw](https://github.com/sirlanda/de-e2e-pw) repó

  - `main` branch
  - feladatonként 2 branch: kezdeti és végállapot
    - pl. `a1`, `a1-solution`
    - A feladatokon ABC sorrendben kell végigmenni, mert így épülnek egymásra.
    - Minden feladat branch-en a [README.md] tartalmazza az aktuális tananyagot és a hozzá tartozó feladatok leírását.
    - Ugyanitt látható az is, ha a végrehajtásnak előfeltétele van. Ez tipikusan az előző feladat végrehajtása. Ha valaki a feladat branch-ből indul ki, akkor ezek az előfeltételek már teljesülnek, csak azok számára releváns ez, aki folyamatában végzi el a feladatokat, és a saját munkaterületén dolgozik az első feladatból kiindulva.
    - a feladatok elkezdésekor érdemes lehet inicializálni a playwright-ot
    - ```bash
      nvm use
      npm i
      npx playwright install
      ```
  - Miről lesz szó?
    - Fenntartható fejlesztés
      - ismétlődések kerülése
        - beállítások
        - adatok
        - kódok
        - futtatások
      - átlátható teszthalmaz
        - tesztek struktúrálása és dokumentálása
        - jól navigálható projekt felépítés
      - biztonságos tesztelés
        - védett adatok kiszervezése
  - Miről lehetne még szó?
    - Lokátorok optimalizálása (css alapú lokátorok használata, xpath kerülése)
    - Adminisztráció - TestLink

- Feladatok (branch-ek)

  - [b1 - alapvető beállítások](https://github.com/sirlanda/de-e2e-pw/tree/b1)
    - baseURL beállítás
    - védett értékek kiszervezése `.env` fájlba
  - [b2 - DRY](https://github.com/sirlanda/de-e2e-pw/tree/b2)
    - felesleges tesztek törlése!
    - tesztadatok
      - fix
      - lényegtelen
        - generált
          - azonosításra alkalmas
    - login
  - [b3 - POM](https://github.com/sirlanda/de-e2e-pw/tree/b3)
    - OOP deduplikáció
    - login -> LoginPage
    - MainPage / BasePage
      - topLane
      - searchBar
      - goto
      - at?
  - [b4 - tesztek szerkezete](https://github.com/sirlanda/de-e2e-pw/tree/b4)
    - GHERKIN
    - step-by-step
  - [b5 - projekt szerkezet](https://github.com/sirlanda/de-e2e-pw/tree/b5)
    - TestLink kapcsolat