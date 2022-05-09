## Database

---

## Types

### State Conservation

```ts

enum Conservation {
    // Extinct
    EX = 'extinct'
    EW = 'extinct in wild'
    // Treatened
    CR = 'critically endangered'
    EN = 'endangered'
    VU = 'vunerable'
    // Lower Risk
    NT = 'near threatened'
    CD = 'conservation dependent'
    LC = 'least concern'
    // Other
    DD = 'data deficient' // default value
    NE = 'not evaluated'
}

```

### StateValidate

```ts

enum StateValidable {
    INPESCTED = 'inspected' // default value
    VALIDATED = 'validated'
    DISMISSED = 'dismissed'
}

```

### StateUser

```ts

enum StateUser {
    NORMAL = 'normal' // default value
    BANNED = 'banned'
    SHADOW = 'shadow'
    HIDDEN = 'hidden'
}

```

### StateActivity

```ts

enum StateActivity {
    NORNAL = 'normal' // default value
    REMOVE = 'remove'
    HIDDEN = 'hidden'
}

```

### State and Type

```ts

enum Poblationtype {
    NA = 'native'
    IN = 'introducided and naturalized'
    NE = 'not evalued'
}

type StateAndType = [string, PoblationType]

```

---

## Bases

### Trees

-   **Type:** _Entity_ and _Validable_
-   **Need Validation**

|       Column       |   Type   |    Content     | editable |   Key   | Auto | Nesesary |
| :----------------: | :------: | :------------: | :------: | :-----: | :--: | :------: |
|       **Id**       | _String_ |       Id       |    No    | Primary | Yes  | Required |
| **User Recorder**  | _String_ |   User.Email   |    No    | Foreing | Yes  | Required |
| **User Validator** | _String_ |   User.Email   |    No    | Foreing | Yes  | Required |
|     **State**      | _String_ | StateValidable |   Auto   |   No    | Yes  | Required |
|      **Age**       | _Number_ |      Age       |   Yes    |   No    |  No  | Validate |
|     **Width**      | _Number_ |     Meters     |   Yes    |   No    |  No  | Validate |
|    **Diameter**    | _Number_ |     Meters     |   Yes    |   No    |  No  | Validate |
|      **Name**      | _String_ |    Letters     |   Yes    |   No    |  No  | Validate |
|    **Location**    | _String_ |    Lat&Lng     |   Yes    |   No    |  No  | Register |
|     **Specie**     | _String_ |  Specie.Name   |   Yes    | Foreing | Yes  | Register |
|  **Description**   | _String_ |      N/A       |   Yes    |   No    |  No  | Optional |

### Species

-   **Type:** _Taxonomy_ and _Validable_
-   **Need Validarion**

|       Column       |   Type   |    Content     | editable |   Key   | Auto | Nesesary |
| :----------------: | :------: | :------------: | :------: | :-----: | :--: | :------: |
| **Cientific Name** | _String_ |    Letters     |    No    | Primary |  No  | Required |
|      **Name**      | _String_ |    Letters     |    No    |   No    |  No  | Required |
|     **State**      | _String_ | StateValidable |   Auto   |   No    | Yes  | Required |
|  **Conservation**  | _String_ |  Conservation  |   Yes    |   No    |  No  | Validate |
|     **Gener**      | _String_ |     Gener      |   Auto   | Foreing |  No  | Validate |
|  **Description**   | _String_ |      N/A       |   Yes    |   No    |  No  | Validate |
|    **SubGener**    | _String_ |    SubGener    |   Auto   | Foreing |  No  | Optional |
|  **Distribution**  | _Array_  |  StateAndType  |   Yes    |   No    |  No  | Optional |

### Gener

-   **Type:** _Taxonomy_ and _Validable_
-   **Need Validarion**

|   Column   |   Type   | Content | editable |   Key   | Auto | Nesesary |
| :--------: | :------: | :-----: | :------: | :-----: | :--: | :------: |
|  **Name**  | _String_ | Letters |    No    | Primary |  No  | Required |
| **Family** | _String_ | Family  |    No    | Foreing |  No  | Required |

### Family

-   **Type:** _Taxonomy_ and _Validable_
-   **Need Validarion**

|  Column   |   Type   | Content | editable |   Key   | Auto | Nesesary |
| :-------: | :------: | :-----: | :------: | :-----: | :--: | :------: |
| **Name**  | _String_ | Letters |    No    | Primary |  No  | Required |
| **Order** | _String_ |  Order  |    No    | Foreing |  No  | Required |

### Users

-   **Type:** _Entity_

|       Column        |   Type   |   Content   | editable |   Key   | Auto | Nesesary |
| :-----------------: | :------: | :---------: | :------: | :-----: | :--: | :------: |
|      **Email**      | _String_ | Auth0.Email |    No    | Primary | Yes  | Required |
|      **Grade**      | _String_ |  UserGrade  |   Auto   |   No    | Yes  | Required |
|      **State**      | _String_ |  StateUser  |   Auto   |   No    | Yes  | Required |
| **Trees Following** | _Array_  |   Tree.Id   |   Yes    |   No    |  No  | Optional |
| **Users Following** | _Array_  | User.Email  |   Yes    |   No    |  No  | Optional |
|   **Social Webs**   | _Array_  |    Links    |   Yes    |   No    |  No  | Optional |
|   **Description**   | _String_ |     N/A     |   Yes    |   No    |  No  | Optional |

### Photos

|  Column  |   Type   |   Content   | editable |   Key   | Auto | Nesesary |
| :------: | :------: | :---------: | :------: | :-----: | :--: | :------: |
|  **Id**  | _String_ |     Id      |    No    | Primary | Yes  | Required |
| **Name** | _String_ |     N/A     |    No    |   No    |  No  | Required |
| **Blob** | _Binary_ | Binary Data |    No    |   No    |  No  | Required |

### Moments

-   **Type:** _Activity_ and _Answerable_

|     Column      |   Type   |    Content    | editable |   Key   | Auto | Nesesary |
| :-------------: | :------: | :-----------: | :------: | :-----: | :--: | :------: |
|     **Id**      | _String_ |      Id       |    No    | Primary | Yes  | Required |
|    **State**    | _String_ | StateActivity |   Auto   |   No    | Yes  | Required |
|    **Date**     | _String_ |     Date      |   Yes    |   No    | Yes  | Required |
|   **Photos**    | _Array_  |    Photos     |   Yes    | Foreing |  No  | Required |
|    **Tree**     | _String_ |    Tree.Id    |    No    | Foreing |  No  | Required |
|    **User**     | _String_ |  User.Email   |    No    | Foreing |  No  | Required |
| **Description** | _String_ |      N/A      |   Yes    |   No    |  No  | Required |

### Comments

-   **Type:** _Activity_, _Interaction_ and _Answerable_

|   Column    |   Type   |    Content    | editable |   Key   | Auto | Nesesary |
| :---------: | :------: | :-----------: | :------: | :-----: | :--: | :------: |
|   **Id**    | _String_ |      Id       |    No    | Primary | Yes  | Required |
|  **State**  | _String_ | StateActivity |   Auto   |   No    | Yes  | Required |
|  **User**   | _String_ |  User.Email   |    No    | Foreing |  No  | Required |
|   **To**    | _String_ | Answerable.Id |    No    | Foreing |  No  | Required |
| **Content** | _String_ |      N/A      |   Yes    |   No    |  No  | Required |

### Reactions

-   **Type:** _Activity_ and _Interaction_

|   Column    |   Type   |    Content    | editable |   Key   | Auto | Nesesary |
| :---------: | :------: | :-----------: | :------: | :-----: | :--: | :------: |
|   **Id**    | _String_ |      Id       |    No    | Primary | Yes  | Required |
|  **State**  | _String_ | Statectivity  |   Auto   |   No    | Yes  | Required |
|  **User**   | _String_ |  User.Email   |    No    | Foreing |  No  | Required |
|   **To**    | _String_ | Answerable.Id |    No    | Foreing |  No  | Required |
| **Content** | _String_ |   Reaction    |   Yes    |   No    |  No  | Required |

---

## Data

### Taxonomuy

```js
// gener
[
	{
		name: 'Ficus',
		family: 'Moraceae',
	},
	{
		name: 'Platanus',
		family: 'Planaceae',
	},
	{
		name: 'Plumeria',
		family: '',
	},
][
	// family
	({
		name: 'Moraceae',
		order: 'Rosales',
	},
	{
		name: 'Planaceae',
		order: 'proteales',
	})
];
```

### Speciess

```js
[
	{
		cientificName: 'Ficus sycomorus',
		name: 'Sicómoro',
		state: 'validated',
		conservation: 'least Concern',
		distribution: [],
		gener: 'Ficus',
		subGener: 'Sycomorus',
		description:
			'Puede medir hasta 20 m de altura y 6 metros de anchura con una copa bastante espesa. La corteza es verde amarillenta y se exfolia en tiras que dejan aparecen en su interior otra corteza amarillenta. Como todas las higueras, el sicómoro contiene látex. Las hojas cordiformes (con forma acorazonada) tienen un color verde oscuro, son ásperas y miden unos 14 cm de largo y unos 10 cm de ancho y están dispuestas en espiral alrededor de la rama. Sobre su envés verde claro se ven los nervios prominentes. El peciolo pubescente mide de 0,5 a 3 cm de longitud.',
	},
	{
		cientificName: 'Platanus mexicana',
		name: 'Álamo Blanco',
		state: 'validated',
		conservation: 'least concern',
		distribution: [
            ['Mexico' [
                ['Tamaulipas', 'native'],
                ['San Lius Potosí', 'native'],
                ['Guanajuato', 'native'],
                ['Querétaro', 'native'],
                ['Hidalgo', 'native'],
                ['Puebla', 'native'],
                ['Nuevo León', 'native'],
                ['Oaxaca', 'native'],
                ['Veracruz', 'native'],
                ['Chiapas', 'native'],
            ]]
			['Guatemala', 'native'],
		],
		gener: 'Platanus',
		description:
			'Se trata de un árbol caducifolio que alcanza entre 15 y 40 m de alto, con un diámetro de hasta 2 m, tronco derecho con manchas irregulares blancas originadas por la exfoliación de la corteza, de color pardo amarillenta con manchas blancuzcas a pardo rojizas; ramificación irregular, pelos dendríticos formando un indumento flocoso ferrugíneo en las ramas jóvenes. Hojas, yemas de 5 mm de largo orientadas al interior cubiertas por estípulas foliáceas.',
	},
	{
		cientificName: 'Ficus Pertusa',
		name: 'Amatillo',
		state: 'validated',
		conservation: 'least concern',
		distribution: [
			['Mexíco', 'native'],
			['El Salvador', 'native'],
			['Guatemala', 'native'],
			['Jamaica', 'native'],
			['Brasil', 'native'],
			['Belice', 'native'],
            ['Ecuador', 'native'],
			['Perú', 'native'],
		],
		gener: 'Ficus',
		description:
			'Son árboles o arbustos, que alcanzan un tamaño de hasta 30 m de alto, iniciándose como epífitos pero tornándose independientes; ramas jóvenes glabras, grises a café-amarillentas. Hojas elípticas a muy angostamente elípticas o lanceoladas, 5–12.5 cm de largo y 2–5.5 cm de ancho, acuminadas a atenuadas en el ápice, obtusas a agudas en la base, glabras, lisas, cartáceas y verdes a café claras cuando secas, 10–20 pares de nervios secundarios, muy débiles y difíciles de distinguir de los nervios intermedios, nervio submarginal débil, nervios terciarios inconspicuos; pecíolos 0.8–2.5 (–4) cm de largo, glabros, café claros, estípulas 0.5–1.3 cm de largo, glabras.',
	},
	{
		cientificName: 'Cojoba arborea',
		name: 'Frijolillo',
		state: 'validated',
		conservation: 'least concern',
		distribution: [
			['Mexíco', 'native'],
			['Ecuador', 'native'],
			['El Salvador', 'native'],
			['Guatemala', 'native'],
			['Honduras', 'native'],
			['Nicaragua', 'native'],
			['Costa Rica', 'native'],
			['Panamá', 'native'],
			['Cuba', 'native'],
			['República Dominicana', 'native'],
			['Belice', 'native'],
		],
		gener: 'Cojoba',
		description:
			'Árbol de hasta 35 m de altura y 1 m de DAP, fuste recto y cilíndrico que presenta ramas en la base. La copa es rala y dispersa, con follaje verde claro. La corteza es café oscuro a café verdoso. Las hojas son alternas y bipinnadas, y se caracterizan por tener una glandulita entre cada par de pinnas. Las hojas se encuentran compuestas por 10 a 15 pares de hojas secundarias o foliolos primarios, estas a su vez están compuestas por 20 a 40 pares de foliolos secundarios.',
	},
	{
		cientificName: 'Plumeria Rubra',
		name: 'franchipán',
		state: 'validated',
		conservation: 'least concern',
		distribution: [
			['Mexíco', 'native'],
			['El Salvador', 'native'],
			['Guatemala', 'native'],
			['Nicaragua', 'native'],
			['Costa Rica', 'native'],
			['Panamá', 'native'],
			['Cuba', 'native'],
			['República Dominicana', 'native'],
			['Belice', 'native'],
			['Perú', 'native'],
		],
		gener: 'Plumeria',
		description:
			'Es un arbusto grande o arbolillo de 5 a 8 m (puede alcanzar hasta 25) de hoja caduca con tronco recto, escasa ramificación y copa abierta e irregular. Las hojas, de haz verde brillante y más pálido en el envés, se disponen en espiral en los ápices de las ramas. Son simples, de 15 a 30 cm de largo por entre 4 a 8 cm de ancho, lanceoladas o elípticas y de margen entero. Las flores hermafroditas surgen en panículas en las axilas de las hojas nuevas. Miden entre 15 a 30 cm, con sépalos verdosos y pétalos blancos con el centro amarillo pálido.',
	},
];
```
