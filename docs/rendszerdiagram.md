<div class="grid cards frostwood-header-cards" markdown>

-   <span class="fw-block-icon-main-rendszerdiagram" aria-hidden="true"></span>

    # Rendszerdiagram (gyors áttekintés) { #rendszerdiagram-gyors-attekintes }

    > Szerző: Hegedüs Gábor (@hege-g)<br>
    > Licenc: [MIT (Kód) / CC BY-NC-ND 4.0 (Docs)]<br>
    > Frostwood Docs: v1.0.0<br>
    > Rendszerverzió / Állapot: v1.0.5 / Stabil<br>

</div>

<div class="grid cards frostwood-toc-cards" markdown>

-   ## Tartalomkártyák

    * [:material-infinity: Rendszerdiagram](#rendszerdiagram)
        * [:material-infinity: Alapok blokk](#alapok-blokk-cel)
        * [:material-infinity: Rendszer blokk](#rendszer-blokk-cel)
        * [:material-infinity: Alkalmazások blokk](#alkalmazasok-blokk-cel)
        * [:material-infinity: Referenciák blokk](#referenciak-blokk-cel)

</div>

## Rendszerdiagram

Ez az ábra a Frostwood dokumentáció belépési térképe. Segít gyorsan eldönteni, hogy melyik blokkban érdemes kezdeni az olvasást.

<a id="alapok-blokk-cel"></a>
<a id="rendszer-blokk-cel"></a>
<a id="alkalmazasok-blokk-cel"></a>
<a id="referenciak-blokk-cel"></a>

```mermaid
flowchart TD

    A["Frostwood rendszer"]

    A --> B["Alapok blokk"]
    A --> C["Rendszer blokk"]
    A --> D["Alkalmazások blokk"]
    A --> E["Referenciák blokk"]

    B --> B1["fogalmak és belépés"]
    C --> C1["működés és állapotok"]
    D --> D1["konkrét használat"]
    E --> E1["szabályok és jelentések"]

    classDef root fill:#252525,stroke:#707070,stroke-width:2px,color:#E0E0E0;
    classDef basics fill:#2A2A2A,stroke:#4A6D93,stroke-width:1.5px,color:#E0E0E0;
    classDef system fill:#2A2A2A,stroke:#757575,stroke-width:1.5px,color:#E0E0E0;
    classDef apps fill:#2A2A2A,stroke:#E0E0E0,stroke-width:1.5px,color:#E0E0E0;
    classDef refs fill:#2A2A2A,stroke:#B05A2A,stroke-width:1.5px,color:#E0E0E0;

    class A root;
    class B,B1 basics;
    class C,C1 system;
    class D,D1 apps;
    class E,E1 refs;
```

??? info "Vizuális leírás akadálymentesítéshez"
    Az ábra a Frostwood dokumentáció fő belépési struktúráját mutatja.

    A középpontban a „Frostwood rendszer” található. Ebből négy fő blokk ágazik ki:

    1. Az Alapok blokk, amely a fogalmi bevezetést és az alapvető megértést szolgálja.  
    2. A Rendszer blokk, amely a működési logikát és az állapotmodelleket írja le.  
    3. Az Alkalmazások blokk, amely a konkrét használati eseteket és programokat mutatja be.  
    4. A Referenciák blokk, amely a szabályokat, definíciókat és közös jelentéseket tartalmazza.  

    Az ábra célja, hogy segítse a felhasználót a dokumentáció gyors és zavartalan bejárásában.