const element = document.getElementById('toggle')
const elementos= document.querySelectorAll('#btn')
const precios= document.querySelectorAll('#cards-items__pricing')
let arrayNodos= Array.from(elementos)
const toggle = document.querySelector('#plansToggle')


const plans = {
    monthly:{
        basic: '$19.99',
        pro:   '$24.99',
        master:'$39.99'
    },
    annually:{
        basic: '$199.99',
        pro: '$249.99',
        master: '$399.99',
    }
};

const handlePlanChange = e => {
    const checked = toggle.checked;
    console.log(checked);
    const priceElements = document.querySelectorAll(`[data-plan]`);
  
    for (const p of priceElements) {
      const type = checked ? 'monthly' : 'annually';
      const plan = p.getAttribute('data-plan');
      p.innerHTML = plans[type][plan];
    }
  };

  
  
  const show = () => {
      toggle.addEventListener('click',()=>{
          
        arrayNodos.map(function(arrayNodos,index){
            //Comprobamos que el index sea el botón que será diferente 
            if (index===1) {
                arrayNodos.classList.toggle('btn-active')
            }else{//Los botones restantes se les añade la otra clase
                arrayNodos.classList.toggle('btn-active2')
            }
        })
        element.classList.toggle('move')
       
    })
}

show()
window.addEventListener('load', handlePlanChange);
toggle.addEventListener('change', handlePlanChange);