(function ($) {
    // Función que muestra el banner de cookies si no hay ninguna preferencia guardada
    function checkCookieConsent() {
        const cookieConsent = localStorage.getItem('cookieConsent');

        if (!cookieConsent) {
            $('#cookie-banner').css('display', 'flex');
        }
    }

    // Función para manejar la aceptación de cookies
    function acceptCookies() {
        localStorage.setItem('cookieConsent', 'accepted');
        $('#cookie-banner').css('display', 'none');
        // Aquí puedes añadir el código para habilitar cookies de seguimiento si es necesario
    }

    // Función para manejar la denegación de cookies
    function denyCookies() {
        localStorage.setItem('cookieConsent', 'denied');
        $('#cookie-banner').css('display', 'none');
        // Aquí puedes añadir el código para desactivar cookies si es necesario
    }

    // Escuchar eventos en los botones del banner
    $('#accept-cookies').on('click', acceptCookies);
    $('#deny-cookies').on('click', denyCookies);

    // Ejecutar la función que verifica el consentimiento al cargar la página
    checkCookieConsent();
})(window.jQuery);