const element= document.getElementById('toggle')
const btn= document.getElementById('btn-active')
const btn2=document.getElementById('btn-active2')
const btn3=document.getElementById('btn-active3')
const pricing1= document.getElementById('cards-items__pricing1')
const pricing2= document.getElementById('cards-items__pricing2')
const pricing3= document.getElementById('cards-items__pricing3')
const show = () => {
    
    const numeroOriginal1= pricing1.textContent
    const numeroOriginal2= pricing2.textContent
    const numeroOriginal3= pricing3.textContent
    let newvalue1=`$199.99`
    let newvalue2=`$249.99`
    let newvalue3=`$399.99`
    element.addEventListener('click',()=>{
        if(newvalue1!=pricing1.textContent && newvalue2!=pricing2.textContent && newvalue3!=pricing3.textContent){
            pricing1.textContent=newvalue1
            pricing2.textContent=newvalue2
            pricing3.textContent=newvalue3
        }else{
            pricing1.textContent=numeroOriginal1
            pricing2.textContent=numeroOriginal2
            pricing3.textContent=numeroOriginal3
        }
        element.classList.toggle('move')
        btn.classList.toggle('btn-active')
        btn2.classList.toggle('btn-active2')
        btn3.classList.toggle('btn-active2')
    })
}

show()
