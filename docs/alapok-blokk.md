<div class="grid cards frostwood-header-cards" markdown>

-   <span class="fw-block-icon-main-alapok" aria-hidden="true"></span>

    # Alapok blokk { #alapok-blokk }

    > A Frostwood működési alapjai, vizuális rendszere és akadálymentesítési filozófiája.

</div>

<div class="grid cards frostwood-toc-cards" markdown>

-   ## Tartalomkártyák

    * [:material-infinity: Alapok blokk összefoglaló](#alapok-blokk-osszefoglalo)
    * [:material-infinity: Alapok blokk moduljai](#alapok-blokk-moduljai)
        * [:material-infinity: 01. Áttekintés](#01-attekintes)
        * [:material-infinity: 02. Rendszerleírás](#02-rendszerleiras)
        * [:material-infinity: 03. Szín rendszer](#03-szin-rendszer)
        * [:material-infinity: 04. WCAG fókusz](#04-wcag-fokusz)
        * [:material-infinity: 05. Jelzésmechanika](#05-jelzesmechanika)
        * [:material-infinity: 06. Akadálymentességi alapelvek](#06-akadalymentessegi-alapelvek)
        * [:material-infinity: 07. Ikonrendszer / JAWS vezérlés](#07-ikonrendszer-jaws-vezerles)
        * [:material-infinity: 08. Rendszer ikonok](#08-rendszer-ikonok)
        * [:material-infinity: 09. Otthon / Munka ikonok](#09-otthon-munka-ikonok)
    * [:material-infinity: Alapok blokk státusz](#alapok-blokk-statusz)

</div>

## Alapok blokk összefoglaló

A rendszer alapjait képező modulok logikai rendszere az alábbiak szerint épül fel:

<div class="grid cards frostwood-section-cards frostwood-numbered-card" markdown>

-   ### Bevezetés

    :material-information-outline: **01. Modul**

-   ### Központi modell

    :material-sitemap: **02. Modul**

-   ### Jelentésrendszer

    :material-bell-ring-outline: **03, 05. Modul**

-   ### Fókuszréteg

    :material-focus-field: **04. Modul**

-   ### Kötelező alapelv

    :material-gavel: **06. Modul**

-   ### Interfész / input

    :material-keyboard-outline: **07. Modul**

-   ### Vizuális szabvány

    :material-palette-outline: **08, 09. Modul**

</div>

---

## Alapok blokk moduljai

<div class="grid cards frostwood-section-cards frostwood-numbered-card" markdown>

-   <a class="fw-module-card-icon fw-module-01"
       href="01-attekintes.md#01-attekintes"
       aria-hidden="true"
       tabindex="-1"></a>

    ### [01. Áttekintés](01-attekintes.md#01-attekintes)

    A Frostwood rendszer alapvető célja és működési modellje.

    **Részletek:**

    * mi a Frostwood
    * miben különbözik témától / skin-től
    * állapotalapú működés
    * fókusz és zajcsökkentés
    * a rendszer alapelvei
    * magas szintű bevezetés (nem technikai vagy konfigurációs dokumentum)

    [:material-cube-send: Áttekintés megnyitása](01-attekintes.md#01-attekintes){ .md-button }

-   <a class="fw-module-card-icon fw-module-02"
       href="02-rendszerleiras.md#02-rendszerleiras"
       aria-hidden="true"
       tabindex="-1"></a>

    ### [02. Rendszerleírás](02-rendszerleiras.md#02-rendszerleiras)

    A működési rétegek és kapcsolatok leírása.

    **Részletek:**

    * állapotalapú működés
    * mód- és téma-szétválasztás
    * rendszerkomponensek kapcsolata
    * központi működési modell (a rendszer „magja”)

    [:material-cube-send: Rendszerleírás megnyitása](02-rendszerleiras.md#02-rendszerleiras){ .md-button }

-   <a class="fw-module-card-icon fw-module-03"
       href="03-szin-rendszer.md#03-szin-rendszer"
       aria-hidden="true"
       tabindex="-1"></a>

    ### [03. Szín rendszer](03-szin-rendszer.md#03-szin-rendszer)

    A Frostwood globális szín- és jelentésrendszere.

    **Működési elemek:**

    * Frostwood Accent
    * WCAG színek
    * jelentés-alapú színrendszer (nem dekoratív paletta)
    * hover és fókusz
    * SignalColors működés

    [:material-cube-send: Szín rendszer megnyitása](03-szin-rendszer.md#03-szin-rendszer){ .md-button }

-   <a class="fw-module-card-icon fw-module-04"
       href="04-wcag-fokusz-reteg.md#04-wcag-fokusz-reteg"
       aria-hidden="true"
       tabindex="-1"></a>

    ### [04. WCAG fókusz](04-wcag-fokusz-reteg.md#04-wcag-fokusz-reteg)

    A halkabb, fókuszált működési réteg.

    **Vizuális szempontok:**

    * kontrasztlogika
    * fókuszréteg
    * hosszú használati komfort
    * zajcsökkentés

    [:material-cube-send: WCAG fókusz megnyitása](04-wcag-fokusz-reteg.md#04-wcag-fokusz-reteg){ .md-button }

-   <a class="fw-module-card-icon fw-module-05"
       href="05-jelzesmechanika.md#05-jelzesmechanika"
       aria-hidden="true"
       tabindex="-1"></a>

    ### [05. Jelzésmechanika](05-jelzesmechanika.md#05-jelzesmechanika)

    A rendszer vizuális és logikai jelzésmodellje.

    **Technikai fókusz:**

    * domináns jelzéselv
    * multi-signal tiltás
    * intenzitási hierarchia
    * időbeli jelzések

    [:material-cube-send: Jelzésmechanika megnyitása](05-jelzesmechanika.md#05-jelzesmechanika){ .md-button }

-   <a class="fw-module-card-icon fw-module-06"
       href="06-rendszerszintu-akadalymentessegi-alapelvek.md#06-rendszerszintu-akadalymentessegi-alapelvek"
       aria-hidden="true"
       tabindex="-1"></a>

    ### [06. Akadálymentességi alapelvek](06-rendszerszintu-akadalymentessegi-alapelvek.md#06-rendszerszintu-akadalymentessegi-alapelvek)

    A Frostwood akadálymentes működési alapjai.

    **Főbb témák:**

    * WCAG alapelvek
    * visszafordíthatóság
    * konzisztens működés
    * képernyőolvasó-kompatibilitás

    [:material-cube-send: Akadálymentességi alapelvek megnyitása](06-rendszerszintu-akadalymentessegi-alapelvek.md#06-rendszerszintu-akadalymentessegi-alapelvek){ .md-button }

-   <a class="fw-module-card-icon fw-module-07"
       href="07-ikonrendszer-es-jaws-vezerles.md#07-ikonrendszer-es-jaws-vezerles"
       aria-hidden="true"
       tabindex="-1"></a>

    ### [07. Ikonrendszer / JAWS vezérlés](07-ikonrendszer-es-jaws-vezerles.md#07-ikonrendszer-es-jaws-vezerles)

    Az ikonlogika és képernyőolvasó-integráció.

    **Technikai fókusz:**

    * egy ikon = egy funkció
    * rendszerikonok
    * vizuális + auditív vezérlési réteg (input layer)
    * JAWS tempókezelés
    * ikonhierarchia

    [:material-cube-send: Ikonrendszer / JAWS vezérlés megnyitása](07-ikonrendszer-es-jaws-vezerles.md#07-ikonrendszer-es-jaws-vezerles){ .md-button }

-   <a class="fw-module-card-icon fw-module-08"
       href="08-rendszer-ikonok.md#08-rendszer-ikonok"
       aria-hidden="true"
       tabindex="-1"></a>

    ### [08. Rendszer ikonok](08-rendszer-ikonok.md#08-rendszer-ikonok)

    A Frostwood rendszerikonok technikai és vizuális szabályai.

    **Vizuális szempontok:**

    * panelrendszer
    * watermark
    * állapotjelzés (`BE / KI`)
    * méret- és árnyékszabályok
    * A) függelék (rendszerfunkciókat vezérlő ikonok ("figurák") geometriai felépítését és állapotjelzéseit részletezi)

    [:material-cube-send: Rendszer ikonok megnyitása](08-rendszer-ikonok.md#08-rendszer-ikonok){ .md-button }

-   <a class="fw-module-card-icon fw-module-09"
       href="09-otthon-munka-ikonok.md#09-otthon-es-munka-ikonok"
       aria-hidden="true"
       tabindex="-1"></a>

    ### [09. Otthon / Munka ikonok](09-otthon-munka-ikonok.md#09-otthon-es-munka-ikonok)

    Kontextus-alapú Home és Work ikonrendszer.

    **Tartalmi elemek:**

    * badge rendszer
    * kategória-színcsíkok
    * Home/Work logika
    * állapotjelölés vizuális rendszere (context encoding)
    * A) és B) függelék (ikonminták, szabályok, implementációs példák)

    [:material-cube-send: Otthon / Munka ikonok megnyitása](09-otthon-munka-ikonok.md#09-otthon-es-munka-ikonok){ .md-button }

</div>

??? info "Vizuális leírás az akadálymentes használathoz"
    Az Alapok blokk a Frostwood rendszer alaprétege.

    A modulok egymásra épülnek:

    * először a rendszerlogika,
    * majd a vizuális szabályok,
    * végül az akadálymentes működés jelenik meg.

    Ez a blokk adja a teljes rendszer közös nyelvét.


---

## Alapok blokk státusz

> Az Alapok blokk a Frostwood teljes rendszerének közös jelentésrétege.

> Minden további blokk erre épül.