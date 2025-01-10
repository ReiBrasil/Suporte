function handleOptionChange(select) {
    const value = select.value;
    if (value === 'informacoes') {
        window.location.href = "file:///c%3A/Users/rti/Desktop/Okay/Informa%C3%A7%C3%B5es/Biosphera%20Informa%C3%A7%C3%B5es.html";
        window.location.href = "file:///c%3A/Users/rei-b/OneDrive/Área%20de%20Trabalho/Desenvolvimento/Okay/pages/Biosphera%20Informações.html";
    } if (value === 'inicial') {
        window.location.href = "file:///c%3A/Users/rti/Desktop/Okay/Inicial/Biosphera%20Inicial.html";
        window.location.href = "file:///c%3A/Users/rei-b/OneDrive/Área%20de%20Trabalho/Desenvolvimento/Okay/pages/Biosphera%20Inicial.html";
    } else if (value === 'downloads') {
        window.location.href = "file:///c%3A/Users/rti/Desktop/Okay/Download/Biosphera%20Download.html";
        window.location.href = "file:///c%3A/Users/rei-b/OneDrive/Área%20de%20Trabalho/Desenvolvimento/Okay/pages/Biosphera%20Download.html";
    } else if (value === 'integraçoes') {
    window.location.href = "file:///c%3A/Users/rti/Desktop/Okay/Integra%C3%A7%C3%B5es/Biosphera%20Integra%C3%A7%C3%B5es.html";
    window.location.href = "file:///c%3A/Users/rei-b/OneDrive/Área%20de%20Trabalho/Desenvolvimento/Okay/pages/Biosphera%20Integrações.html";
    } else if (value === 'desenvolvedores') {
    window.location.href = "file:///c%3A/Users/rti/Desktop/Okay/Desenvolvedores/Biosphera%20Desenvolvedores.html";
    window.location.href = "file:///c%3A/Users/rei-b/OneDrive/Área%20de%20Trabalho/Desenvolvimento/Okay/pages/Biosphera%20Desenvolvedores.html";
    } else if (value === 'suporte') {
    window.location.href = "file:///c%3A/Users/rti/Desktop/Okay/Suporte/Biosphera%20Suporte.html";
    window.location.href = "file:///c%3A/Users/rei-b/OneDrive/Área%20de%20Trabalho/Desenvolvimento/Okay/pages/Biosphera%20Suporte.html";
}
}

let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    const slider = document.getElementById('slider');
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}