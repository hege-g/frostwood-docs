<div class="grid cards frostwood-header-cards" markdown>

-   <span class="fw-module-header-icon fw-module-96" aria-hidden="true"></span>

    # 96. Telepítőcsomag struktúra { #96-telepitocsomag-struktura }

    > Szerző: Hegedüs Gábor (@hege-g)<br>
    > Licenc: [MIT (Kód) / CC BY-NC-ND 4.0 (Docs)]<br>
    > Frostwood Docs: v1.0.0<br>
    > Rendszerverzió / Állapot: v1.0.5 / Stabil<br>
    > Blokk: <span class="fw-block-icon-main-referenciak" aria-hidden="true"></span> Referenciák

</div>

<div class="grid cards frostwood-toc-cards" markdown>

-   ## Tartalomkártyák

    * [:material-infinity: 1. Rendszerkontextus](#1-rendszerkontextus)
    * [:material-infinity: 2. Interaktív mappatérkép](#2-interaktiv-mappaterkep)

</div>

## 1. Rendszerkontextus

Ez a modul a `frostwood-installer` tároló aktuális, fizikai fájlhierarchiáját mutatja be. Segítségével a fejlesztők és az auditorok ellenőrizhetik a csomag integritását, a komponensek verzióit és a fájlok pontos helyét a telepítés előtti állapotban.

A dokumentum szoros kapcsolatban áll a [95. Változásnapló](95-valtozasnaplo.md#95-valtozasnaplo) modul 4. fejezetével, amely külön kezeli a globális rendszerverziót és a telepítő-specifikus komponensverziókat.

---

## 2. Interaktív mappatérkép

Ez az interaktív térkép közvetlenül a fizikai tároló struktúrájából generálódik.

<div class="fw-embed-frame">

<iframe src="../96-mappaterkep.html" width="100%" height="500px" title="Frostwood installer mappastruktúra térkép"></iframe>

</div>
<div class="fw-embed-caption">Ábra 96.1: A frostwood-installer tároló valós idejű fa-struktúrája.</div>

??? info "Akadálymentes navigáció"
    A fenti keretben a mappák címsorokként (H1-H6) szerepelnek a képernyőolvasók (JAWS, NVDA) támogatásához.

    * **Címsorok:** A `H` betű megnyomásával ugrálhatsz a mappák között. A főmappa gyökere a `H1`.
    * **Mappák kezelése:** A kiválasztott mappanéven (címsoron) állva az **Enter** vagy a **Szóköz** billentyűvel nyithatod ki vagy csukhatod össze az adott szintet.
    * **Fájlok megnyitása:** A fájlnevek szabványos linkként funkcionálnak. Navigálj rájuk a **Tab** billentyűvel, és nyomj **Entert** a megnyitáshoz.
    * **Vizuális jelzés:** A fókuszban lévő elemet vastag sárgás-narancs keret jelzi az érintőképernyős és a gyengénlátó használat segítésére (Frostwood Horgony szabály).


??? info "Vizuális leírás az akadálymentes használathoz"
    A **96. modul** felülete egy szabványos Frostwood fejléccel és egy kételemű tartalomjegyzékkel indul.

    A fő tartalmi részt egy letisztult, beágyazott alkalmazáskeret (`iframe`) alkotja, amely a `frostwood-embed.css` szabályai szerint Default (világos) módban finom szürke hátteret és lágy árnyékot kap, Slate (sötét) módban pedig mélyszürke tónusba simul. A keretben generált fastruktúra mappái előtt mappa-ikonok, a fájlok előtt lap-ikonok láthatók.

    A billentyűzetes vagy érintőképernyős navigáció során az éppen kiválasztott mappa vagy fájl körül azonnal megjelenik egy 3 pixel vastagságú, izzó **Frostwood Narancs** (`#B05A2A`) fókuszkeret, amely radikálisan elkülönül a háttértől, egyértelmű tájékozódási pontot biztosítva.

    A beágyazás alatt egy kisméretű, halk szürke felirat azonosítja az ábrát, amelyet egy lenyitható, részletes akadálymentességi gyorsútmutató követ.
