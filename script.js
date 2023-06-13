function przeliczOkrążeniaNaKilometry() {
      
    var iloscOkrążeń = document.getElementById("iloscOkrążeń").value;

    
    var dlugoscToru = 13.6; 
    var przejechaneKilometry = iloscOkrążeń * dlugoscToru;

    
    document.getElementById("wynik").innerHTML = "Przejechane kilometry: " + przejechaneKilometry + " km";
}

function showDateTime() {
    var currentDate = new Date();
    var dateTimeString = currentDate.toLocaleString();
    document.getElementById("datetime").textContent = dateTimeString;
  }
  
  setInterval(showDateTime, 1000);

  function submitNewsletterForm(event) {
    event.preventDefault();
  
    
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
  
    emailInput.value = '';
    alert('Dziękujemy za zapisanie się na nasz newsletter!');
  }