export default function Funktionen() {
    return (
        <div id="funktionen" className="row">
            <div
                style={{
                backgroundColor: "#f6f6f6",
                minHeight: 700,
                padding: "5%",
                alignItems: 'center', // Centers children horizontally in the container
                textAlign: 'center',
                }}
                className="col-md-4"
            >
                <div className="icon-box effect medium border center">
                <div className="icon">
                    <a href="#">
                    <i className="fa fa-desktop" />
                    </a>
                </div>
                <h2 className="text-uppercase">Escape Game Management</h2>
                <h5>
                    Was wurde telefonisch oder per E-Mail mit welchem Kunden vereinbart?
                    Muss ein Kunde in einer Woche zurückgerufen werden? Wann kommt welche
                    Gruppe? Welches Team-Foto wurde schon verschickt?
                </h5>
                <div style={{ textAlign: "left" }}>
                    <b>Behalte den Überblick:</b>
                </div>
                <ul style={{ textAlign: "left" }}>
                    <li>Jahrelange Erfahrung als Escape Game Betreiber</li>
                    <li>Webbasierte Nutzung auf PC/Mac, Tablet und Smartphone</li>{" "}
                    <li>Tages-/Wochen-/Monatsübersicht mit allen Räumen</li>{" "}
                    <li>Teamfoto per Mail verschicken</li>{" "}
                    <li>Kunden- und Lieferantenverwaltung</li>{" "}
                    <li>Aufgaben- und Erinnerungsfunktion</li>{" "}
                    <li>Slotbemerkung und Notizverwaltung</li>{" "}
                    <li>Auflistung zuletzt erstellter Notizen</li>
                    <li>
                    Eigener E-Mailversand mit Zustellinformationen und deiner Domain
                    </li>{" "}
                    <li>Tagesberichte mit allen Umsatzdaten (nach GOBD-Richtlinien)</li>
                    <li>
                    Export von Finanzdaten (z.B. nach DATEV) mit Buchungskonten und
                    Kostenstellen
                    </li>
                    <li>Digitale Produkte mit Kauflandbesteuerung</li>
                </ul>
                </div>
            </div>
            <div
                style={{
                backgroundColor: "#d7d7d7",
                minHeight: 700,
                padding: "5%"
                }}
                className="col-md-4"
            >
                <div className="icon-box effect medium border center">
                <div className="icon">
                    <a href="#">
                    <i className="fa fa-ticket" />
                    </a>
                </div>
                <h1 className="text-uppercase">Ticketing</h1>
                <h5>
                    Nutze ein perfekt abgestimmtes System für die Verwaltung von einem oder
                    mehreren Räumen/Standorten und profitiere von allen Funktionen für dich
                    und deine Kunden.
                </h5>
                <div style={{ textAlign: "left" }}>
                    <b>Bleibe flexibel:</b>
                </div>
                <ul style={{ textAlign: "left" }}>
                    <li>
                    TicketShop mit Anzeige aller Räume und Buchungsmöglichkeiten für einen
                    Tag
                    </li>
                    <li>
                    TicketShop mit der Möglichkeit, Termine nur auf Anfrage zu ermöglichen
                    </li>{" "}
                    <li>
                    Alle Räume/Spiele werden in einer Darstellung übersichtlich angezeigt
                    </li>{" "}
                    <li>
                    Nicht nur feste Buchungen, sondern auch Reservierungen mit
                    "Ablaufdatum“ möglich
                    </li>{" "}
                    <li>Räume stornieren, umbuchen und blockieren</li>
                    <li>Exklusive und Public Slots</li>
                    <li>Preisfindung für Staffel- oder Festpreise mit Zeiträumen</li>{" "}
                    <li>Bestellübersicht und -statistik</li>{" "}
                    <li>
                    Integrierter Webshop mit Warenkorbfunktion und gleichzeitiger Ansicht
                    aller Räume
                    </li>{" "}
                    <li>
                    Geldauszahlungen erfolgen direkt und schnell durch den externen
                    Zahlungsanbieter
                    </li>{" "}
                    <li>Kampagnenverwaltung und Affiliate-Programm</li>{" "}
                    <li>Gutscheinverwaltung und -verkauf</li>
                    <li>
                    Individuelle Erinnerungen per E-Mail durch einen Regelassistenten
                    </li>
                    <li>Steuergruppen für Dienstleistungen und digitale Produkte</li>
                    <li>Integration von Google-Analytics 4</li>
                </ul>
                </div>
            </div>
            <div
                style={{
                backgroundColor: "#f6f6f6",
                minHeight: 700,
                padding: "5%"
                }}
                className="col-md-4"
            >
                <div className="icon-box effect medium border center">
                <div className="icon">
                    <a href="#">
                    <i className="fa fa-user" />
                    </a>
                </div>
                <h2 className="text-uppercase">Personal-Management</h2>
                <h5>
                    Externe Schichtplaner, E-Mail-Verteiler oder Excel-Tabellen brauchst du
                    nicht mehr. Deine Mitarbeiter (z.B. Schichtleiter und Game-Master)
                    tragen bei QuinBook ihre Verfügbarkeiten ein und sehen einfach und
                    schnell welche Schichten sie wann haben.
                </h5>
                <div style={{ textAlign: "left" }}>
                    <b>Koordiniere einfach deine Mitarbeiter:</b>
                </div>
                <ul style={{ textAlign: "left" }}>
                    <li>Mitarbeiterverwaltung mit detaillierten Berechtigungen</li>{" "}
                    <li>Schichtplanung mit Urlaub- und Krankmeldungen</li>
                    <li>Schicht-Absagefunktion</li>
                    <li>Verfügbarkeitsverwaltung von Mitarbeitern</li>{" "}
                    <li>Digitale Zeiterfassung mit Abgleich zu Schichten</li>
                    <li>Personalakte</li>
                    <li>
                    Synchronisation mit externen Kalendern per iCal: Schichten, Slots und
                    Buchungen
                    </li>
                    <li>Neuigkeiten-Blog, um Mitarbeiter zu informieren</li>
                </ul>
                </div>
            </div>
        </div>
    )

}