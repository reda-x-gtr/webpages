function toggleMode() {
    const body = document.body;
    const currentMode = localStorage.getItem('mode');
    if (currentMode === 'light') {
      body.style.backgroundColor = 'black';
    document.getElementById('text').innerHTML='dark';

      body.style.color = 'white';
      localStorage.setItem('mode', 'dark');
    } else {
      body.style.backgroundColor = 'white';
    document.getElementById('text').innerHTML='light';

      body.style.color = 'black';
      localStorage.setItem('mode', 'light');
    }
  }


 