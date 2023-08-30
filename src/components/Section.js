function Section({ number }) {
    var name = "";

    switch (number) {
        case "1":
            name = "Analisi non lineare e sistemi hamiltoniani";
            break;
        case "2":
            name = "Equazioni differenziali alle derivate parziali";
            break;
        case "3":
            name = "Equazioni differenziali ordinarie e sistemi dinamici";
            break;
        case "4":
            name = "Calcolo delle variazioni e controllo";
            break;
        case "5":
            name = "Analisi reale e disuguaglianze funzionali";
            break;
        case "6":
            name = "Analisi armonica";
            break;
        case "7":
            name = "Probabilità e statistica matematica";
            break;
        case "8":
            name = "Fisica Matematica";
            break;
        case "9":
            name = "Modelli e Applicazioni";
            break;
        case "10":
            name = "Sistemi dinamici e metodi numerici per le equazioni differenziali";
            break;
        case "11":
            name = "Teoria dell’approssimazione ed applicazioni";
            break;
        case "12":
            name = "Algebra lineare numerica ed applicazioni";
            break;
        case "13":
            name = "Metodi numerici per le equazioni alle derivate parziali";
            break;
        case "14":
            name = "Algebra";
            break;
        case "15":
            name = "Teoria di Lie";
            break;
        case "16":
            name = "Combinatoria";
            break;
        case "17":
            name = "Topologia e Geometria differenziale";
            break;
        case "18":
            name = "Geometria Complessa";
            break;
        case "19":
            name = "Geometria Algebrica";
            break;
        case "20":
            name = "Logica Matematica";
            break;
        case "21":
            name = "Teoria dei numeri";
            break;
        case "22":
            name = "Storia della matematica";
            break;
        case "23":
            name = "Didattica della matematica";
            break;
        case "24":
            name = "Laboratorio pratico di comunicazione della matematica";
            break;
        case "S1":
            name = "La Matematica, tra Scienza e Umanesimo";
            break;
        case "S2":
            name = "Matematica per le scienze della vita";
            break;
        case "S3":
            name = "Matematica per l’Intelligenza Artificiale e il Machine Learning";
            break;
        case "S4":
            name = "Multi-agent models and mean field games";
            break;
        case "S5":
            name = "Ottimizzazione numerica e matematica delle immagini";
            break;
        case "S6":
            name = "Problemi diretti e inversi in scienza dei materiali, biomedicina e climatologia";
            break;            
        default:
            // NOOP
    }


    return <td>
        <span className="text-nowrap px-2 small">Sezione { number }</span><br />
        <span className="text-muted small">{ name }</span>
    </td>;
}

export default Section;