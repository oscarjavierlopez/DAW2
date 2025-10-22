/* Programa que genere 100 años y nos muestre el siglo al que pertenecen */

let verSiglo = (anio) => {
    let Siglo = Math.ceil(anio / 100);
    switch (Siglo) {
        case 1:
            return "I";
            break;
        case 2:
            return "II";
            break;
        case 3:
            return "III";
            break;
        case 4:
            return "IV";
            break;
        case 5:
            return "V";
            break;
        case 6:
            return "VI";
            break;
        case 7:
            return "VII";
            break;
        case 8:
            return "VIII";
            break;
        case 9:
            return "IX";
            break;
        case 10:
            return "X";
            break;
        case 11:
            return "XI";
            break;
        case 12:
            return "XII";
            break;
        case 13:
            return "XIII";
            break;
        case 14:
            return "XIV";
            break;
        case 15:
            return "XV";
            break;
        case 16:
            return "XVI";
            break;
        case 17:
            return "XVII";
            break;
        case 18:
            return "XVIII";
            break;
        case 19:
            return "XIX";
            break;
        case 20:
            return "XX";
            break;
        case 21:
            return "XXI";
            break;
    }
}


for (let i = 0; i <= 100; i++) {
    anio = Math.round(Math.random() * 2023);
    console.log("Año: " + anio + " siglo: " + verSiglo(anio));
}
