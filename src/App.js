import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import DayTable from './components/DayTable';
import Plenary from './components/Plenary';
import DayRow from './components/DayRow';
import LunchBreak from './components/LunchBreak';
import Section from './components/Section';
import TimeCell from './components/TimeCell';
import CofeeBreak from './components/CofeeBreak';
import SemiPlenary from './components/SemiPlenary';
import SocialEvent from './components/SocialEvent';
import RoundTable from './components/RoundTable';
import OtherEvent from './components/OtherEvent';

function App() {
  return (
    <div className="App">
      <Container fluid className="text-left">
        <h1>Programma UMI Pisa 2023</h1>
        <div className="text-muted h5 text-center">Aggiornato al 30 agosto 2023</div>
        <div className="day">
        <h2>Lunedì 4 settembre</h2>
        <DayTable>
            <DayRow>
                <TimeCell start="08:00" end="09:30"></TimeCell>
                <SocialEvent name="Registrazione (Teatro Verdi)"></SocialEvent>
            </DayRow>
            <DayRow>
                <TimeCell start="09:30" end="11:30"></TimeCell>
                <SocialEvent name="Apertura del congresso e consegna dei premi (Teatro Verdi)"></SocialEvent>
            </DayRow>
            <DayRow>
                <TimeCell start="11:50" end="12:40"></TimeCell>
                <Plenary speaker="G. Saccomandi" title="TBA"></Plenary>                
            </DayRow>
            <DayRow>
                <TimeCell start="12:40" end="13:30"></TimeCell>
                <Plenary speaker="A. Celletti" title="TBA"></Plenary>
            </DayRow>
            <DayRow>
                <TimeCell start="13:30" end="15:00"></TimeCell>
                <LunchBreak></LunchBreak>
            </DayRow>
            <DayRow>
                <TimeCell start="15:00" end="17:00"></TimeCell>
                <Section number="1"></Section>
                <Section number="3"></Section>
                <Section number="4"></Section>
                <Section number="S6"></Section>
                <Section number="14"></Section>
                <Section number="15"></Section>
                <Section number="17"></Section>
                <Section number="16"></Section>
                <Section number="21"></Section>
                <Section number="5"></Section>
                <Section number="6"></Section>
                <Section number="18"></Section>
            </DayRow>
            <DayRow>
                <TimeCell start="17:00" end="17:30"></TimeCell>
                <CofeeBreak></CofeeBreak>
            </DayRow>
            <DayRow>
                <TimeCell start="17:30" end="18:20"></TimeCell>
                <SemiPlenary speaker="V. Agostiniani" title=""></SemiPlenary><td></td><td></td>
                <SemiPlenary speaker="P. Antonelli" title=""></SemiPlenary>
                <SemiPlenary speaker="F. Di Plinio" title=""></SemiPlenary>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </DayRow>
            <DayRow>
                <TimeCell start="18:30" end="20:30"></TimeCell>
                <SocialEvent name="Cocktail di benvenuto (La Sapienza)"></SocialEvent>
            </DayRow>
            <DayRow>
                <TimeCell start="21:00" end="22:30"></TimeCell>
                <SocialEvent name="Rappresentazione teatrale &quot;Verba manent. Canto per Ennio De Giorgi&quot; (Teatro Verdi)"></SocialEvent>
            </DayRow>
        </DayTable></div>

        <div className="day">
        <h2>Martedì 5 settembre</h2>
        <DayTable>
            <DayRow>
                <TimeCell start="08:50" end="09:40"></TimeCell>
                <Plenary speaker="N. Gigli" title="TBA"></Plenary>
            </DayRow>
            <DayRow>
                <TimeCell start="09:40" end="10:30"></TimeCell>
                <Plenary speaker="G. P. Pirola" title="TBA"></Plenary>
            </DayRow>
            <DayRow>
                <TimeCell start="10:30" end="11:00"></TimeCell>
                <CofeeBreak></CofeeBreak>
            </DayRow>
            <DayRow>
                <TimeCell start="11:00" end="13:00"></TimeCell>
                <Section number="1"></Section>
                <Section number="3"></Section>
                <Section number="4"></Section>
                
                <Section number="S6"></Section>
                <Section number="14"></Section>
                <Section number="15"></Section>
                <Section number="17"></Section>
                <td></td>
                <Section number="21"></Section>
                <Section number="5"></Section>
                <Section number="6"></Section>
                <Section number="S4"></Section>
            </DayRow>
            <DayRow>
                <TimeCell start="13:00" end="14:30"></TimeCell>
                <LunchBreak></LunchBreak>
            </DayRow>
            <DayRow>
                <TimeCell start="14:30" end="15:10"></TimeCell>
                <SemiPlenary speaker="A. Giacobbe" title="TBA"></SemiPlenary><td></td><td></td>
                <SemiPlenary speaker="D. Lombardo" title="TBA"></SemiPlenary>
                <SemiPlenary speaker="M. Radeschi" title="TBA"></SemiPlenary>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </DayRow>
            <DayRow>
                <TimeCell start="15:25" end="16:15"></TimeCell>
                <Plenary speaker="R. Schoof" title="TBA"></Plenary>
            </DayRow>
            <DayRow>
                <TimeCell start="16:15" end="16:45"></TimeCell>
                <CofeeBreak></CofeeBreak>
            </DayRow>
            <DayRow>
                <TimeCell start="16:45" end="18:45"></TimeCell>
                <Section number="S6"></Section>
                <Section number="9"></Section>
                <Section number="4"></Section>
                <Section number="19"></Section>
                <Section number="14"></Section>
                <Section number="15"></Section>
                <Section number="17"></Section>
                <Section number="16"></Section>
                <Section number="21"></Section>
                <Section number="5"></Section>
                <Section number="18"></Section>
                <Section number="S4"></Section>
            </DayRow>
            <DayRow>
                <TimeCell start="19:00" end="20:00"></TimeCell>
                <RoundTable name="Domande e risposte sul clima: il contributo della matematica"></RoundTable>
            </DayRow>
            <DayRow>
                <TimeCell start="20:30" end="22:00"></TimeCell>
                <SocialEvent name="Cena sociale"></SocialEvent>
            </DayRow>
        </DayTable></div>

        <div className="day">
        <h2>Mercoledì 6 settembre</h2>
        <DayTable>
            <DayRow>
                <TimeCell start="08:50" end="09:40"></TimeCell>
                <Plenary speaker="A. Fino" title="TBA"></Plenary>
            </DayRow>
            <DayRow>
                <TimeCell start="09:40" end="10:30"></TimeCell>
                <Plenary speaker="P. Spiga" title="TBA"></Plenary>
            </DayRow>
            <DayRow>
                <TimeCell start="10:30" end="11:00"></TimeCell>
                <CofeeBreak></CofeeBreak>
            </DayRow>
            <DayRow>
                <TimeCell start="11:00" end="13:00"></TimeCell>
                <Section number="2"></Section>
                <Section number="7"></Section>
                <Section number="S3"></Section>
                <Section number="19"></Section>
                <Section number="14"></Section>
                <Section number="20"></Section>
                <Section number="S1"></Section>
                <Section number="16"></Section>
                <td></td>
                <Section number="S2"></Section>
                <Section number="18"></Section>
                <td></td>
            </DayRow>
            <DayRow>
                <TimeCell start="13:00" end="14:30"></TimeCell>
                <LunchBreak></LunchBreak>
            </DayRow>
            <DayRow>
                <TimeCell start="14:30" end="17:30"></TimeCell>
                <SocialEvent name="Visite guidate"></SocialEvent>
            </DayRow>
            <DayRow>
                <TimeCell start="18:30" end="20:30"></TimeCell>
                <SocialEvent name="Assemblea dei soci"></SocialEvent>
            </DayRow>
        </DayTable>
        </div>

        <div className="day">
        <h2>Giovedì 7 settembre</h2>
        <DayTable>
            <DayRow>
                <TimeCell start="08:50" end="09:40"></TimeCell>
                <Plenary speaker="A. Montanari"></Plenary>
            </DayRow>
            <DayRow>
                <TimeCell start="09:40" end="10:30"></TimeCell>
                <Plenary speaker="R. Camerlo"></Plenary>
            </DayRow>
            <DayRow>
                <TimeCell start="10:30" end="11:00"></TimeCell>
                <CofeeBreak></CofeeBreak>
            </DayRow>
            <DayRow>
                <TimeCell start="11:00" end="13:00"></TimeCell>
                <Section number="2"></Section>
                <Section number="7"></Section>
                <Section number="S3"></Section>
                
                <Section number="19"></Section>
                <Section number="23"></Section>
                <Section number="20"></Section>
                <Section number="13"></Section>
                <Section number="S1"></Section>
                <Section number="8"></Section>
                <Section number="9"></Section>
                <Section number="12"></Section>
                <td></td>
            </DayRow>
            <DayRow>
                <TimeCell start="13:00" end="14:30"></TimeCell>
                <LunchBreak></LunchBreak>
            </DayRow>
            <DayRow>
                <TimeCell start="14:30" end="15:10"></TimeCell>
                <SemiPlenary speaker="S. Mosconi"></SemiPlenary><td></td><td></td>
                <SemiPlenary speaker="J. Vitória"></SemiPlenary>
                <SemiPlenary speaker="L. Arosio"></SemiPlenary>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </DayRow>
            <DayRow>
                <TimeCell start="15:25" end="16:05"></TimeCell>
                <SemiPlenary speaker="M. Di Nasso"></SemiPlenary><td></td><td></td>
                <SemiPlenary speaker="B. Velichkov"></SemiPlenary>
                <SemiPlenary speaker="P. Stellari"></SemiPlenary>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </DayRow>
            <DayRow>
                <TimeCell start="16:05" end="16:35"></TimeCell>
                <CofeeBreak></CofeeBreak>
            </DayRow>
            <DayRow>
                <TimeCell start="16:35" end="17:05"></TimeCell>
                <OtherEvent name="Gruppo Critt &amp; Cod"></OtherEvent>
                <OtherEvent name="Gruppo PRISMA"></OtherEvent>
                <OtherEvent name="Gruppo TAA"></OtherEvent>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>                        
                <OtherEvent name="Gruppo DIGIMATH"></OtherEvent>      
                <OtherEvent rowSpan="3" name="SNS e UMI: i primi 40 anni delle Olimpiadi della Matematica in Italia"></OtherEvent>                
                <td></td>  
            </DayRow>
            <DayRow>
                <TimeCell start="17:10" end="17:40"></TimeCell>
                <OtherEvent name="Gruppo Licei Mat.">Gruppi UMI 1</OtherEvent>
                <OtherEvent name="Gruppo DinAmici"></OtherEvent>
                <OtherEvent name="Gruppo MIVA"></OtherEvent>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>                        
                <OtherEvent name="Gruppo MSE-UMI"></OtherEvent>      
                <td></td>  
            </DayRow>
            <DayRow>
                <TimeCell start="17:45" end="18:20"></TimeCell>
                <OtherEvent name="Riunione generale Gruppi UMI"></OtherEvent>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>                        
                <td></td>
                <td></td>  
            </DayRow>
            <DayRow>
                <TimeCell start="18:30" end="19:30"></TimeCell>
                <SocialEvent name="Conferenza aperta al pubblico: La matematica che salva la vita (A. Quarteroni &ndash; Polo Carmignani)"></SocialEvent>
            </DayRow>
        </DayTable></div>

        <div className="day">
        <h2>Venerdì 8 settembre</h2>
        <DayTable>
            <DayRow>
                <TimeCell start="08:50" end="09:40"></TimeCell>
                <Plenary speaker="F. Gazzola"></Plenary>
            </DayRow>
            <DayRow>
                <TimeCell start="09:40" end="10:30"></TimeCell>
                <Plenary speaker="N. Guglielmi"></Plenary>
            </DayRow>
            <DayRow>
                <TimeCell start="10:30" end="11:00"></TimeCell>
                <CofeeBreak></CofeeBreak>
            </DayRow>
            <DayRow>
                <TimeCell start="11:00" end="13:00"></TimeCell>
                <Section number="24"></Section>
                <Section number="23"></Section>
                <Section number="7"></Section>
                <Section number="22"></Section>
                <Section number="11"></Section>
                <Section number="20"></Section>
                <Section number="13"></Section>
                <Section number="10"></Section>
                <Section number="S5"></Section>
                <Section number="S1"></Section>
                <Section number="8"></Section>
                <Section number="S2"></Section>
            </DayRow>
            <DayRow>
                <TimeCell start="13:00" end="14:30"></TimeCell>
                <LunchBreak></LunchBreak>
            </DayRow>
            <DayRow>
                <TimeCell start="14:30" end="16:30"></TimeCell>
                <Section number="24"></Section>
                <Section number="23"></Section>
                <Section number="2"></Section>
                <Section number="22"></Section>
                <Section number="11"></Section>
                <Section number="S3"></Section>
                <Section number="13"></Section>
                <Section number="10"></Section>
                <Section number="S5"></Section>
                <Section number="9"></Section>
                <Section number="8"></Section>
                <Section number="12"></Section>
            </DayRow>
            <DayRow>
                <TimeCell start="16:30" end="17:00"></TimeCell>
                <CofeeBreak></CofeeBreak>
            </DayRow>
            <DayRow>
                <TimeCell start="17:00" end="17:40"></TimeCell>
                <SemiPlenary speaker="F. Rapetti"></SemiPlenary><td></td><td></td>
                <SemiPlenary speaker="D. Trevisan"></SemiPlenary>
                <SemiPlenary speaker="B. Langella"></SemiPlenary>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </DayRow>
            <DayRow>
                <TimeCell start="18:00" end="19:30"></TimeCell>
                <SocialEvent name="Conferenza speciale (E. S. de Cabezón &ndash; Polo Carmignani)"></SocialEvent>
            </DayRow>
            <DayRow>
                <TimeCell start="19:30" end="20:30"></TimeCell>
                <RoundTable name="La matematica incontra l'industria"></RoundTable>
            </DayRow>
        </DayTable>
        </div>

        <div className="day">
        <h2>Sabato 9 settembre</h2>
        <DayTable>
            <DayRow>
                <TimeCell start="08:50" end="10:50"></TimeCell>
                <Section number="24"></Section>
                <Section number="23"></Section>
                <td></td>
                <Section number="22"></Section>
                <Section number="11"></Section>
                <td></td>
                <td></td>
                <Section number="10"></Section>
                <Section number="S5"></Section>
                <Section number="S2"></Section>
                <Section number="12"></Section>
                <td></td>
            </DayRow>
            <DayRow>
                <TimeCell start="10:50" end="11:20"></TimeCell>
                <CofeeBreak></CofeeBreak>
            </DayRow>
            <DayRow>
                <TimeCell start="11:20" end="12:00"></TimeCell>
                <SemiPlenary speaker="A. Fiocca"></SemiPlenary><td></td><td></td>
                <SemiPlenary speaker="B. Meini"></SemiPlenary>
                <SemiPlenary speaker="A. Baccaglini-Frank"></SemiPlenary>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </DayRow>
            <DayRow>
                <TimeCell start="12:15" end="13:05"></TimeCell>
                <Plenary speaker="G. Staffilani"></Plenary>
            </DayRow>
            <DayRow>
                <TimeCell start="13:05" end="13:30"></TimeCell>
                <SocialEvent name="Chiusura"></SocialEvent>
            </DayRow>
        </DayTable>
        </div>
      </Container>
    </div>
  );
}

export default App;
