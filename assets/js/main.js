// const element= document.getElementById('toggle')
// const btn= document.getElementById('btn-active')
// const btn2=document.getElementById('btn-active2')
// const btn3=document.getElementById('btn-active3')
// const pricing1= document.getElementById('cards-items__pricing1')
// const pricing2= document.getElementById('cards-items__pricing2')
// const pricing3= document.getElementById('cards-items__pricing3')
// const show = () => {
    
//     const numeroOriginal1= pricing1.textContent
//     const numeroOriginal2= pricing2.textContent
//     const numeroOriginal3= pricing3.textContent
//     let newvalue1=`$199.99`
//     let newvalue2=`$249.99`
//     let newvalue3=`$399.99`
//     element.addEventListener('click',()=>{
//         if(newvalue1!=pricing1.textContent && newvalue2!=pricing2.textContent && newvalue3!=pricing3.textContent){
//             pricing1.textContent=newvalue1
//             pricing2.textContent=newvalue2
//             pricing3.textContent=newvalue3
//         }else{
//             pricing1.textContent=numeroOriginal1
//             pricing2.textContent=numeroOriginal2
//             pricing3.textContent=numeroOriginal3
//         }
//         element.classList.toggle('move')
//         btn.classList.toggle('btn-active')
//         btn2.classList.toggle('btn-active2')
//         btn3.classList.toggle('btn-active2')
//     })
// }

// show()


const element = document.getElementById('toggle')
const elementos= document.querySelectorAll('#btn')
const precios= document.querySelectorAll('#cards-items__pricing')
const originalPrecios=Array.from(precios)
let arrayPrecios=Array.from(precios)
let arrayNodos= Array.from(elementos)
let arrayNuePrecios= ['$199.99','$249.99','$399.99']
// arrayNodos[1].classList.toggle('btn-active')

// console.log(precios.textContent);


const show = () => {
    element.addEventListener('click',()=>{

        // arrayPrecios.map(function(arrayPrecios,index) {
        //     // console.log(arrayPrecios.textContent);
        //     arrayNuePrecios.map(function(nuevosprecios){
        //         console.log(arraysPrecios);
        //         arrayPrecios.textContent=nuevosprecios
        //     })
        // })

        if (arrayNuePrecios!=arrayPrecios.textContent) {
            for (let i=0; i<arrayPrecios.length;i++) {
            // console.log(arrayPrecios[i].textContent);
             for (let i = 0; i < arrayNuePrecios.length; i++) {
             if(arrayNuePrecios[i]!=arrayPrecios[i].textContent){ 
                //  console.log('Entramos');
                arrayPrecios[i].textContent = arrayNuePrecios[i];
             }
             }
        }
        }else if(arrayNuePre===originalPrecios.textContent){
            console.log('Falso')
        }
        
        // for (let i=0; i<arrayPrecios.length;i++) {
        //     // console.log(arrayPrecios[i].textContent);
        //      for (let i = 0; i < arrayNuePrecios.length; i++) {
        //      if(arrayNuePrecios[i]!=arrayPrecios[i].textContent){ 
        //         //  console.log('Entramos');
        //         arrayPrecios[i].textContent = arrayNuePrecios[i];
        //      }else{
        //         // for (let i = 0; i < originalPrecios.length; i++) {
                    
                    
        //         // }
        //      }
        //      }
        // }
        console.log(originalPrecios);

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