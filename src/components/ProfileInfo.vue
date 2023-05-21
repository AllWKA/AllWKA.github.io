<template>
  <div class="main-info-container">
    <div style="height: 100%; display: flex; align-items: flex-start; justify-content: center; flex-direction: column">
      <img class="profile-img" src="../assets/punpun.png" alt="profile-picture">

      <div class="contact-section-container">
        <img class="contact-icon" src="../assets/icons/email-newsletter.svg" alt="email-icon">

        <a href="mailto:bryanjaramillobaldeon@gmail.com">
          bryanjaramillobaldeon@gmail.com
        </a>
      </div>

      <div class="contact-section-container">
        <img class="contact-icon" src="../assets/icons/github.svg" alt="github-icon">

        <a href="https://github.com/AllWKA">
          github.com/AllWKA
        </a>
      </div>

      <div class="contact-section-container">
        <img class="contact-icon" src="../assets/icons/linkedin.svg" alt="linkedin-icon">

        <a href="https://www.linkedin.com/in/bryan-jaramillo-baldeón/">
          linkedin.com/in/bryan-jaramillo-baldeón
        </a>
      </div>

      <div class="contact-section-container">
        <img class="contact-icon" src="../assets/icons/itchio-textless-black.svg" alt="itchio-icon">

        <a href="https://allwka.itch.io">
          allwka.itch.io
        </a>
      </div>
    </div>

    <div class="description-container">
      <h1 style="font-size: 70px">Bryan Jaramillo Baldeón</h1>

      <h2 style="font-size: 30px">JavaScript FullStack Developer</h2>

      <p>
        Tengo 3 años de experiencia trabajando con Vuejs y Nodejs principalmente.
        <br> <br>
        También he trabajado con librerías de componentes como Boostrap, Vuetify y Quasar. He sido responsable del
        mantenimiento de servidores con Kotlin y Quarkus
      </p>

      <p>
        Me gusta el desarrollo de herramientas utilizando tecnologías basadas en JavaScript como ElectronJS e IonicJs.
      </p>

      <p>
        Mi principal motivación es proporcionar a amigos y a mí mismo herramientas que nos faciliten cualquier problema,
        ya sea una aplicación para el control de presupuesto y ahorro como una pequeña aplicación para llevar la cuenta
        de los puntos de una partida de un juego de mesa.
      </p>

      <p>
        También me interesa el desarrollo de videojuegos, he podido participar en un par de GameJams haciendo juegos
        pequeños en 48h (18-20 realmente) y por mi cuenta intento centrarme en desarrollar mecánicas concretas.
        Principalmente he usado Unity3d con C# para desarrollarlos
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileInfo'
}
</script>

<style scoped>
h1, h2 {
  margin: 0 0 20px 0;
}

a {
  text-decoration: underline;
  color: #a4add2;
  font-size: 15px;
}

.main-info-container {
  display: flex;
  width: 90%;
  margin-top: 3%;
  background-color: #0F1F2E;
  border: 2px solid #3f3724;
  border-radius: 15px;
  padding: 1%;
}

.main-info-container p {
  font-size: 21px;
  color: #b8c3ec;
}

.contact-section-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 19px;
  margin: 0 0 15px 0;
}

.contact-icon {
  width: 25px;
  height: 25px;
  margin-right: 10px;
}

.description-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: #a4add2;
}

.profile-img {
  height: 100%;
  border-radius: 56px 0 39px 0;
  margin-bottom: 3%
}
</style>
