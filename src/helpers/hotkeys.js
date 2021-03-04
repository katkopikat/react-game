export default function hotKeys() {
   
    document.addEventListener('keydown', (e) => {
    
          if (e.code === 'KeyQ') {
            e.preventDefault();
                console.log(e.code === 'KeyQ')
          }
    
  
        }
    
    );

  }