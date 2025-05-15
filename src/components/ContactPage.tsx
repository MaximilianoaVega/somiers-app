import * as React from 'react';

function ContactPage() {

    const styles = {
        container:{
            backgroundColor: "#8acc97",
        },
        contacto:{
            maxWidth: "600px", 
            margin: "auto", 
            padding: "2rem",
            backgroundColor: "#8acc97",
        },
        form: {
            div :{
                marginBottom: "1rem",
            },
            inputs:{
                width: "100%",
                padding: "8px",
            },
            button: {
                padding: "10px 20px",
            }

        }

    }


    return (
        <div className={"container-fluid"} style={styles.container}>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" rel="stylesheet"/>

            <section id="contacto" class="container py-5">
                <div class="text-center mb-4">
                    <h2>Contacto</h2>
                    <p class="text-muted">¿Tienes alguna pregunta? Envíame un mensaje:</p>
                </div>

                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <form action="https://formsubmit.co/tu-email@ejemplo.com" method="POST">
                            <div class="mb-3">
                                <label for="nombre" class="form-label">Nombre</label>
                                <input type="text" class="form-control" id="nombre" name="nombre" required/>
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Correo electrónico</label>
                                <input type="email" class="form-control" id="email" name="email" required/>
                            </div>
                            <div class="mb-3">
                                <label for="mensaje" class="form-label">Mensaje</label>
                                <textarea class="form-control" id="mensaje" name="mensaje" rows="5" required></textarea>
                            </div>

                            <input type="hidden" name="_captcha" value="false"/>

                                <button type="submit" class="btn btn-primary">Enviar mensaje</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
                )
}

export default ContactPage;