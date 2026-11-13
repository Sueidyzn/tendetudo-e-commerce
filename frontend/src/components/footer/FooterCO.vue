<!-- <template>
<section>
  <div class="footer-container">
    <div class="row">
      <div class="col-md-6 col-sm-6">
        <h2>Contato </h2>
        <p>Shopping Salvador, Salvador,BA</p>
        <p>Email: <span>autobot@hotmail.com</span></p>
        <p>Phone: <span> 3398-2812 / (71)994560578</span></p>
      </div>
      <div class="col-md-6 col-sm-6">
        <h2>Redes Sociais</h2>
        <ul class="social-icons">
          <li><a href="#" class="fa fa-facebook"></a></li>
          <li><a href="#" class="fa fa-twitter"></a></li>
          <li><a href="#" class="fa fa-dribbble"></a></li>
        </ul>
      </div>
    </div>
  </div>
</section>
</template>
<script setup></script> -->


<template>
  <footer class="footer">
    <div class="footer-container">

      <!-- COLUNA DE CONTATO -->
      <div class="footer-column">
        <h2>Contato</h2>
        <div class="footer-line"></div>

        <div class="contact-info">
          <p>Valeria, Salvador, BA</p>

          <p>
            Email:
            <strong>tendetudo@hotmail.com</strong>
          </p>

          <p>
            Phone:
            <strong>3398-2469 / (71)999999999</strong>
          </p>
        </div>
      </div>

      <!-- COLUNA DE REDES SOCIAIS -->
      <div class="footer-column">
        <h2>Redes Sociais</h2>
        <div class="footer-line"></div>

        <div class="social-icons">

          <!-- FACEBOOK -->
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <svg viewBox="0 0 24 24">
              <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8
              c0-.9.3-1.5 1.6-1.5h1.7V3.7
              C16.5 3.5 15.5 3.5 14.5 3.5
              c-2.7 0-4.5 1.7-4.5 4.7v1.7H7.3V13H10v8z"/>
            </svg>
          </a>

          <!-- TWITTER / X -->
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <svg viewBox="0 0 24 24">
              <path d="M22 5.9a8 8 0 0 1-2.4.7
              4 4 0 0 0 1.8-2.3
              8.4 8.4 0 0 1-2.7 1
              4.2 4.2 0 0 0-7.2 3.8
              12 12 0 0 1-8.7-4.4
              4.2 4.2 0 0 0 1.3 5.6
              4.2 4.2 0 0 1-1.9-.5
              v.1a4.2 4.2 0 0 0 3.4 4.1
              4.2 4.2 0 0 1-1.9.1
              4.2 4.2 0 0 0 3.9 2.9
              A8.5 8.5 0 0 1 2 18.7
              a12 12 0 0 0 6.5 1.9
              c7.8 0 12-6.5 12-12v-.5
              A8.6 8.6 0 0 0 22 5.9z"/>
            </svg>
          </a>

          <!-- DRIBBBLE -->
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dribbble"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
            >
              <circle cx="12" cy="12" r="9"/>
              <path d="M7 4.5c4 4 7 9 9 15"/>
              <path d="M3.5 9.5c5 0 11-1.5 15-4"/>
              <path d="M5 18c3-4 8-6 15.5-5"/>
            </svg>
          </a>

        </div>
      </div>

    </div>
  </footer>
</template>

<style>
/* CONFIGURAÇÃO GERAL DA PÁGINA */

.footer {
  width: 100vw;
  min-height: 350px;

  /* Faz o footer ocupar a tela inteira,
     mesmo dentro de um container centralizado */
  position: relative;
  left: 50%;
  margin-left: -50vw;

  background-color: #26342A;
  padding: 100px 12.2%;
  box-sizing: border-box;

  font-family: Arial, Helvetica, sans-serif;
  color: #ffffff;
}

.footer-container {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 35px;
}

.footer-column h2 {
  font-size: 36px;
  font-weight: 300;
  margin: 0 0 25px;
}

.footer-line {
  width: 100%;
  height: 2px;
  background-color: #222;
  margin-bottom: 50px;
}

.contact-info p {
  font-size: 16px;
  margin: 0 0 16px;
}

.contact-info strong {
  font-weight: bold;
  margin-left: 25px;
}

.social-icons {
  display: flex;
  gap: 17px;
}

.social-icons a {
  width: 75px;
  height: 75px;
  background-color: #222;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-decoration: none;
  transition: 0.3s;
  flex-shrink: 0;
}

.social-icons a:hover {
  background-color: #555;
  transform: translateY(-4px);
}

.social-icons svg {
  width: 35px;
  height: 35px;
  fill: white;
}

@media (max-width: 768px) {
  .footer {
    padding: 50px 7%;
  }

  .footer-container {
    grid-template-columns: 1fr;
    gap: 45px;
  }

  .footer-column h2 {
    font-size: 30px;
  }

  .footer-line {
    margin-bottom: 30px;
  }

  .social-icons a {
    width: 60px;
    height: 60px;
  }
}
</style>