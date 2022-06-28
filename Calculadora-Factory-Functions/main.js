function criaCalculadora() {

  return {
  display: document.querySelector('.display'),

      start() {
         this.cliqueBotoes(); 
         this.ENTER(); 
      }, 

      ENTER() {
       this.display.addEventListener('keyup', e => {
         if(e.keyCode === 13) {
          this.igual();
         }
       }); 
      },

      clearDisplay() {
       this.display.value =''; 
      },


      dell() {
       this.display.value =  this.display.value.slice(0, -1); 
       },
 
       igual() {
        let conta = this.display.value;

        try {
          conta = eval(conta);
  
          if(!conta) {
            alert('Conta inválida');
            return;
          }
  
          this.display.value = String(conta);
        } catch(e) {
          alert('Conta inválida');
          return;
        }
        },


    cliqueBotoes() {
      document.addEventListener('click',e =>{
          const el = e.target; 

          if(el.classList.contains('btn-num')) {
            this.btnParaDisplay(el.innerText); 
          }

             if(el.classList.contains('btn-clear')) {
        this.clearDisplay(); 
       }

       if(el.classList.contains('btn-dell')) {
        this.dell(); 
       }

       if(el.classList.contains('btn-igual')) {
        this.igual(); 
       }

      });   

  
    },

    btnParaDisplay(valor){
      this.display.value += valor; 
     } 
  }; 

}

const calculadora = criaCalculadora(); 
calculadora.start();