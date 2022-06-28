function Calculadora() {


   this.display = document.querySelector('.display'); 

   this.inicia = () =>{
    this.capturaCliques();
    this.capturaEnter(); 
   }; 

   this.capturaEnter = () =>{
    this.display.addEventListener('keypress', e => {
       if(e.keyCode !== 13) return;
          this.igual(); 
     }); 
   };
 
      this.capturaCliques = () =>{
         document.addEventListener('click', event =>{
          const el = event.target; 
          if(el.classList.contains('btn-num')) this.addNum(el); 
          if(el.classList.contains('btn-clear')) this.clear(); 
          if(el.classList.contains('btn-igual')) this.igual(); 
          if(el.classList.contains('btn-dell')) this.dell(); 
         });
      }
       
      this.addNum =( el) => {
        this.display.value  += el.innerText;
        this.display.focus(); 
       }
  

      this.clear = () => this.display.value  =''; 
     

     this.igual= ()=> {
      try {
        const conta = eval(this.display.value);  

         if(!conta) {
          alert('conta invalida') 
          return; 
         }

        this.display.value = conta;
      } catch(e) { 
        
        return;
      }
   }; 

   this.dell= () => this.display.value  = this.display.value.slice(0, -1);


}

const calculadora = new Calculadora(); 
calculadora.inicia(); 