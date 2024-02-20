
export default function About() {
    return (

    <section id="about" style={{ paddingBottom: 0, paddingTop: 40 }}>
        <div className="container" id="aboutscroll">
            <div className="heading heading-center" style={{ marginBottom: 0 }}>
            <div className="row">
                <div className="col-md-6">
                <h2>Was ist QuinBook?</h2>
                <p>
                    QuinBook ist dein neuer Begleiter durch den Escape Game Alltag. Kaum
                    eine Branche ist so vielfältig und individuell, wie die stark
                    wachsende Escape Game Branche. Wir haben das, was dir andere
                    Management- und Buchungssysteme nicht bieten können: mehr als 8
                    Jahre Know-How im Escape Game Business.
                </p>{" "}
                <p>
                    Nur wer sich als Software-Entwickler mit einer Branche wirklich
                    beschäftigt, kann begreifen, welche Herausforderungen täglich zu
                    bewältigen sind. Vertraue auf unsere über zwanzigjährige
                    IT-Erfahrung und das gebündelte Know-How von Escape Game Anbietern,
                    welches in unsere Software eingeflossen ist.
                </p>{" "}
                <p>
                    Die Wahl eines Management- und Buchungssystems ist eine maßgebliche
                    Entscheidung für dein Unternehmen. Hol’ dir mit QuinBook einen
                    professionellen Partner an deine Seite, der deine Anforderungen
                    versteht und deine Probleme löst.
                </p>
                </div>
                <div className="col-md-6">
                <h3 className="text-uppercase">Kontaktiere uns</h3>
                <div style={{ backgroundColor: "rgba(0,0,0,0.1)", padding: 20 }}>
                    <form
                    id="contact_form_1"
                    action="/Contact"
                    role="form"
                    method="post"
                    >
                    <input type="hidden" id="captcha_1" name="captcha" />
                    <div className="row">
                        <div className="form-group col-sm-6">
                        <label htmlFor="name">Name *</label>
                        <input
                            type="text"
                            aria-required="true"
                            id="contact_name"
                            name="contact_name"
                            className="form-control required name"
                            placeholder="Name"
                        />
                        </div>
                        <div className="form-group col-sm-6">
                        <label htmlFor="email">E-Mail *</label>
                        <input
                            type="email"
                            aria-required="true"
                            id="contact_email"
                            name="contact_email"
                            className="form-control required email"
                            placeholder="E-Mail"
                        />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-sm-6">
                        <label htmlFor="name">Anbietername</label>
                        <input
                            type="text"
                            aria-required="true"
                            id="contact_company"
                            name="contact_company"
                            className="form-control required name"
                            placeholder="Firmenname"
                        />
                        </div>
                        <div className="form-group col-sm-6">
                        <label htmlFor="email">Telefonnummer</label>
                        <input
                            type="email"
                            aria-required="true"
                            id="contact_phone"
                            name="contact_phone"
                            className="form-control required email"
                            placeholder="Telefon (bevorzugt Handynummer)"
                        />
                        </div>
                    </div>
                    <div className="row form-group">
                        <label htmlFor="message">Nachricht *</label>
                        <textarea
                            id="contact_msg"
                            name="contact_msg"
                            rows={5}
                            className="form-control required"
                            placeholder=""
                            defaultValue={""}
                        />
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                        <label htmlFor="captcha">Sicherheitscode *</label>
                        </div>
                    </div>
                    <input type="hidden" name="captcha_id" defaultValue={1} />
                    <div className="row form-group" id="contact_captcha">
                        <div className="col-sm-6">
                        <img
                            id="capt_1"
                            src="../public/captcha.png"
                        />
                        </div>
                        <div className="col-sm-6">
                        <input
                            style={{ float: "left", width: "90%" }}
                            type="text"
                            aria-required="true"
                            id="captcha1"
                            name="captcha"
                            className="form-control required email"
                            placeholder="Sicherheitscode"
                        />
                        <a
                            //href="javascript:void(0)"
                            //onClick="RefreshCaptcha('1')"
                            style={{ float: "left", paddingTop: 10, paddingLeft: 4 }}
                        >
                            <i className="fa fa-refresh" />
                        </a>
                        </div>
                    </div>
                    <button
                        className="btn btn-primary"
                        type="button"
                        //onClick=""
                    >
                        &nbsp;Versenden
                    </button>
                    </form>
                    <div
                    id="contact_result_1"
                    className="hidden"
                    style={{ textAlign: "center" }}
                    />
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>

    )

}
//background-image:url('/ContentQuin/images/slider/pattern.png'); background-size: cover;