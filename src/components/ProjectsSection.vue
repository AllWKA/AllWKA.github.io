<template>
  <div style="display: flex; flex-direction: column; justify-content: flex-start; align-items: center">
    <h2 style="font-size: 50px; color: #a4add2; margin-bottom: 3%">Proyectos</h2>

    <div class="project-container">
      <h3>Skull King Counter</h3>

      <div class="app-description-section">
        <img style="width: 20%; margin-right: 3%" src="../assets/SkullKingCounter/HarryElGigante.png" alt="app-img">

        <div class="app-description-container">
          <p>
            Esta aplicación automatiza el cálculo de los puntos de una partida del juego de cartas Skull King.
          </p>

          <p>
            Por si no lo conocen, consiste en un juego de cartas donde tienes que apostar cuantas veces por ronda crees
            que vas a ganar, si aciertas ganas puntos, si te pasas o no llegas, los pierdes.
          </p>

          <p>
            Solo tendrás que introducir la apuesta de cada jugador en cada ronda y automáticamente se calcularán los
            puntos, al final de la ronda 10 mostrará al ganador.
          </p>

          <div style="width: 100%; display: flex; align-items: center">
            <p>
              Avatares estan hechos por Andrea Sedano:
            </p>

            <img class="contact-icon" src="../assets/icons/linkedin.svg" alt="linkedin-icon">

            <a href="https://www.linkedin.com/in/andrea-sedano-yáñez-a58401112/">
              /in/andrea-sedano-yáñez-a58401112
            </a>
          </div>

          <a href="https://play.google.com/store/apps/details?id=github.com.AllWKA&hl=es&gl=US">Puedes descargarlo en Google Play pinchando aquí.</a>

          <div class="tech-container">
            <img class="tech-icon" src="../assets/icons/Ionic.svg" alt="ionic-icon">

            <img class="tech-icon" src="../assets/icons/angular-icon.png" alt="angular-icon">

            <img class="tech-icon" src="../assets/icons/Typescript.svg" alt="typescript-icon">
          </div>
        </div>
      </div>
    </div>

    <div class="project-container">
      <h3>We3znhaWallet</h3>

      <div class="app-description-section">
        <img class="app-icon" src="../assets/weeznahWallet/we3znahwallet.png" alt="app-img">

        <div class="app-description-container">
          <p>Es una aplicación pensada para gestionar ahorros y presupuestos de una cuenta bancaria.</p>

          <p>
            La aplicación utiliza un XML exportado desde la página web del banco, procesa e identifica los distintos
            movimientos bancarios para calcular los gastos de cada presupuesto.
          </p>

          <p>
            El próximo paso de la aplicación es la creación de subcuentas virtuales donde puedes apartar porciones
            del dinero de la cuenta para simular cuentas de ahorro.
          </p>

          <a href="https://github.com/AllWKA/we3znhawallet">
            <img class="contact-icon" src="../assets/icons/github.svg" alt="github-icon">
            Link
          </a>

          <div class="tech-container">
            <img class="tech-icon" src="../assets/icons/ElectronJS.svg" alt="electron-icon">

            <img class="tech-icon" src="../assets/icons/VueJS.svg" alt="vue-icon">
          </div>
        </div>
      </div>
    </div>

    <div class="project-container">
      <h3>BideoPureya</h3>

      <div class="app-description-section">
        <img class="app-icon" src="../assets/BideoPureya/BideoPureya.png" alt="app-img">

        <div class="app-description-container">
          <p>
            BideoPureya es un pequeño experimento de reproductor de video hecho, puedes añadir una carpeta y
            automáticamente. También recordará en que punto del video te has quedado para retomarlo cuando quieras.
          </p>

          <p>
            Una de las funcionalidades que me gustaría terminar para el futuro es la sincronización entre varios amigos
            para crear parties para ver videos juntos.
          </p>

          <a href="https://github.com/AllWKA/BideoPureya">
            <img class="contact-icon" src="../assets/icons/github.svg" alt="github-icon">
            Link
          </a>

          <div class="tech-container">
            <img class="tech-icon" src="../assets/icons/ElectronJS.svg" alt="electron-icon">

            <img class="tech-icon" src="../assets/icons/VueJS.svg" alt="vue-icon">

            <img class="tech-icon" src="../assets/icons/NodeJS.svg" alt="node-icon">
          </div>
        </div>
      </div>
    </div>

    <div class="project-container">
      <h3>Tagoror Farming</h3>

      <div class="app-description-section">
        <img class="app-icon" src="../assets/TagororFarming/tagororfarming.png" alt="app-img">

        <div class="app-description-container">
          <p>
            Tagoror Farming es un juego hecho en la pasada Game Island Jam, donde tuvimos cerca de 18-20 horas para
            desarrollar un juego con la temática "Identida".
          </p>

          <p>
            Mi equipo eligió representar la idaentidad canarias en un pequeño juego de granja donde tienes que plantar,
            recolectar y vender para poder ganar la mayor cantidad de dinero en 10 días.
          </p>

          <a href="https://allwka.itch.io/tagoror-farming">
            <img class="contact-icon" src="../assets/icons/itchio-textless-black.svg" alt="github-icon">
            Link
          </a>

          <div class="tech-container">
            <img class="tech-icon" src="../assets/icons/ElectronJS.svg" alt="electron-icon">

            <img class="tech-icon" src="../assets/icons/VueJS.svg" alt="vue-icon">

            <img class="tech-icon" src="../assets/icons/NodeJS.svg" alt="node-icon">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsSection'
}
</script>

<style scoped>
a {
  text-decoration: underline;
  font-size: 21px;
  color: #a4add2;
}

.app-icon {
  width: 45%;
  margin-right: 3%;
}

.project-container {
  width: 75%;
  margin-bottom: 3%;
  padding: 3%;
  font-size: 21px;
  color: #a4add2;
  background-color: rgba(40, 42, 51, 0.76);
  border-radius: 10px;
}

.project-container h3 {
  font-size: 30px;
  margin-top: 0;
}

.contact-icon {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

.tech-container {
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 5%;
}

.tech-icon {
  width: 60px;
  height: 60px;
  margin-right: 10px;
  margin-left: 10px;
}

.app-description-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
}

.app-description-section {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
}
</style>
