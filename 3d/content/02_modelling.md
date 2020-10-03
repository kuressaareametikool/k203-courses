
| chapter: 3D Modelleerimise alused
| section: Primitiivid
| cols: 2fr 3fr
| 1 1
| 2 3
| 4 4

## Primitiivid 🟠🟥🔺

-

Primitiivid ehk lihtsad geomeetrilised kujundid on 3D-maailmas objektid, millest saavad kõik ülejäänud alguse. Selles videos uurime, kuidas neid tekitada, paigutada ja renderdada.

Kõige tähtsam kiirklahv on <kbd>SHIFT + A</kbd> (uute objektide tekitamiseks)
Veel: 
- <kbd>X</kbd> - objektide kustutamiseks (töötab ka <kbd>Delete</kbd>)
- <kbd>F12</kbd> - renderdab pildi
- <kbd>,</kbd> (punkt numbristiku juures) - fokusseerib valitud objekti
- <kbd>Shift</kbd> + <kbd>D</kbd> - kopeerib valitud objekti

<blockquote>

ISESEISVALT: Pane primitiividest kokku kompositsioon, näiteks majake või linnamaastik! 
(Selleks, et harjutada objektide kiiret liigutamist, pööramist ja skaleerimist (kiirklahvidega))
(ja ka kompositsioonitaju arendamiseks)

</blockquote>

<blockquote>
Võrdluseks - <a href="./files/primitiivid.blend">lae alla valmis primitiivid .blend</a>
</blockquote>

-

<f-video src="https://www.youtube.com/watch?v=-z2tYnKYEdk" />

-

<div class="right">
    <f-next-button title="3D tekst" />
</div>

---

| section: 3D tekst
| cols: 2fr 3fr
| 1 1
| 2 3
| 4 4

## 3D tekst

-

Kuidas 3d-maailmas kirjutada? Renderdame taaskord pildi välja ja muudame esmakordselt objekti värvust!

Tähtis kiirklahv: 
- <kbd>TAB</kbd> - **object** ja **edit mode** vahel vahetamiseks
- <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>0</kbd> - muudab vaate kaameravaateks / viib kaamera vaate positsioonile

Nagu lubatud, <f-link to="https://fonts.google.com/specimen/IBM+Plex+Sans">IBM Plex Sans</f-link>

<blockquote>
Võrdluseks - <a href="./files/3d_tekst.blend">lae alla valmis 3d tekst .blend</a>
</blockquote>

-

<f-video src="https://www.youtube.com/watch?v=BuOUpSvLfAA" />

-

<div class="right">
    <f-next-button title="Praktiline töö 🍧" />
</div>


---

| section: 🍧 Praktiline töö - pulgajäätis
| cols: 2fr 3fr
| 1 1
| 2 3
| 4 4

## Praktiline töö 🍧

-

Mis on jäätis? Milline ta välja näeb? Millest ta koosneb? Proovime nendele keerulistele küsimustele vastuseid leida.

Näidispildid:

<div class="grid" style="--cols: 1fr 1fr 1fr 1fr 1fr; --gap: 1em; --rows: 9em">
    <a href="./img/j22tis (1).png" class="cover" style="background-image: url('./img/j22tis (1).png')"></a>
    <a href="./img/j22tis (2).png" class="cover" style="background-image: url('./img/j22tis (2).png')"></a>
    <a href="./img/j22tis (3).png" class="cover" style="background-image: url('./img/j22tis (3).png')"></a>
    <a href="./img/j22tis (4).png" class="cover" style="background-image: url('./img/j22tis (4).png')"></a>
    <a href="./img/j22tis (5).png" class="cover" style="background-image: url('./img/j22tis (5).png')"></a>
</div>

-

<f-video src="https://www.youtube.com/watch?v=Kalg0N6qjjg" />

-

<div class="right">
    <f-next-button title="Modelleerima!" />
</div>


---

| section: Modelleerimine - object & edit mode
| cols: 2fr 3fr
| 1 1
| 2 3
| 4 4

## Modelleerimine

-

Valmistame virtuaalse pulgajäätise! Ühtlasi teeme algust **päris** 3D-modelleerimisega.
Vaatame, mis on **object mode** ja **edit mode**, 

OLULINE:
- <kbd>TAB</kbd> - object / edit mode
- <kbd>Alt</kbd> - valib külje/serva/punkti ringina ümber objekti
- <kbd>Ctrl</kbd> + <kbd>B</kbd> - Bevel (servade lihvimine)
- <kbd>Shift</kbd> + <kbd>E</kbd> - Edge crease (sirge serv **subsurf** modifieriga)

Kui pulgajäätisele värvi andmisega ei malda oodata, võib siit kohe edasi materjalide juurde minna. Kui kannatust on, siis võib jätkata modelleerimisega.

**NB:** Modelleerimine 2 on siiski väga tähtis ja rangelt kohustuslik osa kursusest, mine sinna hiljem siiski tagasi! 🍦

-

<f-video src="https://www.youtube.com/watch?v=AwGLqXabV8c" />

-

<div class="right">
   <f-link to="materials"><button class="secondary">Materialid ja tekstuurid</button></f-link>
   <f-next-button title="Veel modelleerimist 🍦" />
</div>


---

| section: 🍦 Modelleerimine 2 - kurvid ja sculpting
| id: mod2
| cols: 2fr 3fr
| 1 1
| 2 3
| 4 4

## Modelleerimine 2

-

Aga nüüd teeme virtuaalse vahvlitopsi! Vaatame ka kaht uut modelleerimisvõtet - kurvide kasutamist ja digitaalset voolimist, ehk tutvume digiskulptori tööriistadega.
Olulised klahvid (*scultping* vaates):
- <kbd>F</kbd> - pintsli suurus
- <kbd>Shift + F</kbd> - pintsli tugevus
- <kbd>Ctrl</kbd> + <kbd>R</kbd> - Loop cut (tekitab ühe serva objekti sisse juurde)
- <i class="lmb"></i> - tekitab materjali juurde
- <i class="lmb"></i> + <kbd>Ctrl</kbd> - võtab materjali ära
- <i class="lmb"></i> + <kbd>Shift</kbd> - silub materjali

Näidispildid:

<div class="grid" style="--cols: 1fr 1fr 1fr 1fr 1fr; --gap: 1em; --rows: 9em">
    <a href="./img/tops (1).png" class="cover" style="background-image: url('./img/tops (1).png')"></a>
    <a href="./img/tops (2).png" class="cover" style="background-image: url('./img/tops (2).png')"></a>
    <a href="./img/tops (3).png" class="cover" style="background-image: url('./img/tops (3).png')"></a>
    <a href="./img/tops (4).png" class="cover" style="background-image: url('./img/tops (4).png')"></a>
</div>
<br>
<blockquote>
Võrdluseks - <a href="./files/vahvlitops.blend">lae alla valmis vahvlitops .blend</a>
</blockquote>

-

<f-video src="https://www.youtube.com/watch?v=O-vTG0-jpG4" />

-

<div class="right">
    <f-next-button title="Lisaülesanne" />
</div>

---

| section: ▩ Lisaülesanne 1
| theme: dark
| rows: 1fr auto
| 1
| 2

<center>

<span class="icon-big">🍨</span>
## <var>Lisaülesanne 1<var>

Mis kujuga jäätiseid veel olemas on? Mis geomeetrilisi kujundeid need meenutavad? Kas neid oleks lihtne modelleerida? Proovi modelleerida veel mõnda jäätist!
(või muud objekti)

</center>

-

<div class="right">
    <f-next-button title="Materjalid ja tekstuurid" />
</div>







