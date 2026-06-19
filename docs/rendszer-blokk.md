<div class="grid cards frostwood-header-cards" markdown>

-   <span class="fw-block-icon-main-rendszer" aria-hidden="true"></span>

    # Rendszer blokk { #rendszer-blokk }

    > Ez a blokk a Frostwood működési, technikai és karbantartási rétegeit írja le.

</div>

<div class="grid cards frostwood-toc-cards" markdown>

-   ## Tartalomkártyák

    * [:material-infinity: Rendszer blokk összefoglaló](#rendszer-blokk-osszefoglalo)
    * [:material-infinity: Rendszer blokk moduljai](#rendszer-blokk-moduljai)
        * [:material-infinity: 11. Munka asztal](#11-munka-asztal)
        * [:material-infinity: 12. AutoDarkMode technikai működés](#12-autodarkmode-technikai-mukodes)
        * [:material-infinity: 13. SoftLock rendszer](#13-softlock-rendszer)
        * [:material-infinity: 14. Travel mód (opcionális)](#14-travel-mod-opcionalis)
        * [:material-infinity: 15. Záróképernyő / Képernyőkimélő](#15-zarokepernyo-kepernyokimelo)
        * [:material-infinity: 16. Installer specifikáció](#16-installer-specifikacio)
        * [:material-infinity: 17. Eltávolítás / Visszaállítás](#17-eltavolitas-visszaallitas)
        * [:material-infinity: 18. Akadálymentesített Batch Keretrendszer](#18-akadalymentesitett-batch-keretrendszer)
        * [:material-infinity: 19. Rendszer blokk architektúra (DEV)](#19-rendszer-blokk-architektura-dev)
    * [:material-infinity: Rendszer blokk státusz](#rendszer-blokk-statusz)

</div>

## Rendszer blokk összefoglaló

A rendszer működését támogató modulok logikai összessége:

<div class="grid cards frostwood-section-cards frostwood-numbered-card" markdown>

-   ### Állapotmodell

    :material-hexagon-slice-6: **11, 14. Modul**

-   ### Trigger / integráció

    :material-database-sync: **12. Modul**

-   ### Stabilizáló logika

    :material-shield-check-outline: **13. Modul**

-   ### Inaktív réteg

    :material-lock-outline: **15. Modul**

-   ### Telepítés / restore

    :material-backup-restore: **16, 17. Modul**

-   ### Végrehajtási keret

    :material-cog-play-outline: **18. Modul**

-   ### Architektúra

    :material-sitemap: **19. Modul**

</div>

---

## Rendszer blokk moduljai

<div class="grid cards frostwood-section-cards frostwood-numbered-card" markdown>

-   <a class="fw-module-card-icon fw-module-11"
       href="11-munka-asztal-modell.md#11-munka-asztal-modell"
       aria-hidden="true"
       tabindex="-1"></a>

    ### [11. Munka asztal](11-munka-asztal-modell.md#11-munka-asztal-modell)

    A dedikált fókuszterek működési modellje.

    **Működési mechanizmus:**

    * Munka asztal definíciója
    * kötelező működési feltételek
    * kapcsolat a WCAG és Travel móddal

    > Állapotalapú működés (nem UI vagy vizuális preset).

    [:material-cube-send: Munka asztal megnyitása](11-munka-asztal-modell.md#11-munka-asztal-modell){ .md-button }

-   <a class="fw-module-card-icon fw-module-12"
       href="12-autodarkmode-technikai-mukodesi-integracio.md#12-autodarkmode-technikai-es-mukodesi-integracio"
       aria-hidden="true"
       tabindex="-1"></a>

    ### [12. AutoDarkMode technikai működés](12-autodarkmode-technikai-mukodesi-integracio.md#12-autodarkmode-technikai-es-mukodesi-integracio)

    Az automatikus témaváltási rendszer.

    **Működési mechanizmus:**

    * időalapú váltás
    * háttérfrissítés
    * külső eseményvezérelt működés (OS trigger)
    * registry-kulcsok
    * Travel és WCAG kapcsolat

    [:material-cube-send: AutoDarkMode technikai működés megnyitása](12-autodarkmode-technikai-mukodesi-integracio.md#12-autodarkmode-technikai-es-mukodesi-integracio){ .md-button }

-   <a class="fw-module-card-icon fw-module-13"
       href="13-softlock-rendszer.md#13-softlock-rendszer"
       aria-hidden="true"
       tabindex="-1"></a>

    ### [13. SoftLock rendszer](13-softlock-rendszer.md#13-softlock-rendszer)

    Virtuális asztalok stabilizálására szolgáló logikai réteg.

    **Működési mechanizmus:**

    * mit figyel és mit nem figyel
    * hogyan állítja helyre a struktúrát
    * kapcsolat a Munka asztallal
    * hibakezelés

    Alapelv:

    > Nem tiltó,<br>
    > hanem helyreállító.

    > (self-healing) logika.

    [:material-cube-send: SoftLock rendszer megnyitása](13-softlock-rendszer.md#13-softlock-rendszer){ .md-button }

-   <a class="fw-module-card-icon fw-module-14"
       href="14-travel-mod-opcionalis-modul.md#14-travel-mod-opcionalis-modul"
       aria-hidden="true"
       tabindex="-1"></a>

    ### [14. Travel mód (opcionális)](14-travel-mod-opcionalis-modul.md#14-travel-mod-opcionalis-modul)

    Mobil és ideiglenes működési ág.

    **Működési mechanizmus:**

    * hordozható működés
    * ideiglenes profil
    * minimalizált zaj
    * gyors helyreállás

    > Ez a dokumentum segít megérteni a fókusz- és mobil működés közötti átmenetet.

    [:material-cube-send: Travel mód (opcionális) megnyitása](14-travel-mod-opcionalis-modul.md#14-travel-mod-opcionalis-modul){ .md-button }

-   <a class="fw-module-card-icon fw-module-15"
       href="15-zarokepernyo-es-kepernyokimelo.md#15-zarokepernyo-es-kepernyokimelo"
       aria-hidden="true"
       tabindex="-1"></a>

    ### [15. Záróképernyő / Képernyőkimélő](15-zarokepernyo-es-kepernyokimelo.md#15-zarokepernyo-es-kepernyokimelo)

    Bejelentkezési és zárolási akadálymentesség.

    **Specifikációs paraméterek:**

    * Lock Screen képek és kézi beállítás
    * Screensaver filozófia
    * jelszókezelési elv
    * login-akadálymentesség
    * képernyőolvasó-viselkedés
    * inaktív állapot kezelése (idle layer)
    * biztonsági szabályok

    [:material-cube-send: Záróképernyő / Képernyőkimélő megnyitása](15-zarokepernyo-es-kepernyokimelo.md#15-zarokepernyo-es-kepernyokimelo){ .md-button }

-   <a class="fw-module-card-icon fw-module-16"
       href="16-installer-specifikacio.md#16-frostwood-installer-specifikacio-no-admin"
       aria-hidden="true"
       tabindex="-1"></a>

    ### [16. Installer specifikáció](16-installer-specifikacio.md#16-frostwood-installer-specifikacio-no-admin)

    A Frostwood telepítési architektúrája.

    **Specifikációs paraméterek:**

    * telepítő célja és alapelvei
    * Batch és PowerShell kapcsolat
    * menürendszer
    * telepítési lépések
    * hang- és színlogika
    * logolás
    * ellenőrző lista

    [:material-cube-send: Installer specifikáció megnyitása](16-installer-specifikacio.md#16-frostwood-installer-specifikacio-no-admin){ .md-button }

-   <a class="fw-module-card-icon fw-module-17"
       href="17-eltavolitas-visszaallitas.md#17-frostwood-eltavolitas-visszaallitas-no-admin"
       aria-hidden="true"
       tabindex="-1"></a>

    ### [17. Eltávolítás / Visszaállítás](17-eltavolitas-visszaallitas.md#17-frostwood-eltavolitas-visszaallitas-no-admin)

    Determinisztikus eltávolítás és restore.

    **Specifikációs paraméterek:**

    * az uninstall célja és alapelvei
    * megerősítés és hangjelzés
    * engine és fallback működés
    * törölt elemek listája
    * parancsikon-takarítás
    * hibakezelés
    * ellenőrző lista
    * determinista visszaállítás (eredeti állapot)

    [:material-cube-send: Eltávolítás / Visszaállítás megnyitása](17-eltavolitas-visszaallitas.md#17-frostwood-eltavolitas-visszaallitas-no-admin){ .md-button }

-   <a class="fw-module-card-icon fw-module-18"
       href="18-akadalymentesitett-batch-keretrendszer.md#18-akadalymentesitett-batch-keretrendszer"
       aria-hidden="true"
       tabindex="-1"></a>

    ### [18. Akadálymentesített Batch Keretrendszer](18-akadalymentesitett-batch-keretrendszer.md#18-akadalymentesitett-batch-keretrendszer)

    Képernyőolvasó-barát script architektúra.

    **Architekturális alapok:**

    * Batch + PowerShell architektúra
    * determinisztikus működés
    * progress bar kerülése
    * soralapú kommunikáció
    * színhasználat és WCAG
    * hangjelzések szerepe
    * képernyőolvasó-viselkedés
    * diagnosztika és logok
    * UI helyett kommunikációs végrehajtási modell

    [:material-cube-send: Akadálymentesített Batch Keretrendszer megnyitása](18-akadalymentesitett-batch-keretrendszer.md#18-akadalymentesitett-batch-keretrendszer){ .md-button }

-   <a class="fw-module-card-icon fw-module-19"
       href="19-rendszer-blokk-architektura-terkep--dev-audit.md#19-rendszer-blokk-architektura-terkep-dev-audit"
       aria-hidden="true"
       tabindex="-1"></a>

    ### [19. Rendszer blokk architektúra (DEV)](19-rendszer-blokk-architektura-terkep--dev-audit.md#19-rendszer-blokk-architektura-terkep-dev-audit)

    Fejlesztői háttérarchitektúra és audit.

    **Architekturális alapok:**

    * kapcsolati térkép
    * kockázati pontok
    * fejlesztői szabályok
    * bővíthetőség

    [:material-cube-send: Rendszer blokk architektúra (DEV) megnyitása](19-rendszer-blokk-architektura-terkep--dev-audit.md#19-rendszer-blokk-architektura-terkep-dev-audit){ .md-button }

</div>

??? info "Vizuális leírás az akadálymentes használathoz"
    A Rendszer blokk a Frostwood működési infrastruktúráját írja le.

    Az Alapok blokk után ez mutatja meg:

    * hogyan valósul meg a rendszer a gyakorlatban
    * hogyan működnek a modulok együtt
    * hogyan történik a telepítés, eltávolítás és állapotkezelés

    A modulok a telepítéstől a stabilizálásig követik végig a rendszer működését.

    A kapcsolatok technikai és logikai összefüggéseket jelölnek.


---

## Rendszer blokk státusz

> A Rendszer blokk a Frostwood működési infrastruktúráját definiálja.

> Ez a réteg biztosítja:
>  
> * az állapotkezelést,
> * a stabil működést,
> * a helyreállítást,
> * valamint a determinisztikus végrehajtást.

> A Frostwood működése nem preset-alapú,<br>
> hanem logikai rendszerállapotokra épül.