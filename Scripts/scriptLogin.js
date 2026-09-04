const footerHTML = `<footer>
                        <nav class="footer-links">
                            <ul>
                                <li><a href="Prensa.html">Prensa</a></li>
                                <li><a href="seguridad.html">Seguridad</a></li>
                                <li><a href="privacidad.html">Aviso de privacidad</a></li>
                                <li><a href="terminos.html">Términos de servicio</a></li>
                                <li><a href="asistencia.html">Asistencia al jugador</a></li>                
                                <li><a href="verificar.html">Verificar en línea</a></li>
                            </ul>
                        </nav>
                        <a href="#" class="btn-inicio">IR AL INICIO ▲</a>
                        <p class="footer-social">
                            <a href="https://discord.com" target="Dis">Discord</a> | 
                            <a href="https://twitch.tv" target="Tw">Twitch</a> | 
                            <a href="https://instagram.com" target="Ig">Instagram</a>
                        </p>
                    </footer>`;
document.getElementById('footer-placeholder').innerHTML = footerHTML;


function inicializarBurger() {
  const burgers = document.querySelectorAll('.navbar-burger');

  burgers.forEach(burger => {
    burger.addEventListener('click', () => {
      const targetId = burger.dataset.target;
      const target = document.getElementById(targetId);

      burger.classList.toggle('is-active');
      target.classList.toggle('is-active');
    });
  });
}