// contact map
document.addEventListener("DOMContentLoaded", (event) => {
  setTimeout(() => {
    document.querySelector(
      "#load-iframe-map",
    ).innerHTML =
      ` <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0"
          marginwidth="0" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034.9389553863552!2d-74.0723607326483!3d4.608024670190126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f999f166e8ecd%3A0xaa3f9501cb6ed605!2sCENTRO%20COMERCIAL%2021!5e0!3m2!1ses-419!2sco!4v1691522069799!5m2!1ses-419!2sco"></iframe>`;
  }, 500);
});
