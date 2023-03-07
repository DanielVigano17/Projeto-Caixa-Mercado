const lista_pedido = document.querySelector('.lista-pedido')
const item_pedido = document.querySelector('.template')
const btn_finalizar = document.querySelector('.btn_finalizar')
const modal = document.querySelector('.modal')
const span_final= document.querySelector('#final')
const span_final2= document.querySelector('#final2')
const layout = document.querySelector('.layout')
const btn = document.querySelectorAll('.item > img')
var btn_remove = document.getElementsByClassName('.remove')
var item_remove = document.querySelectorAll('.item-pedido')
let input1 = document.querySelector('.template')
let span_value = document.querySelector('.template')
let input2 = document.querySelector('.template')
let span_value2 = document.querySelector('.template')
let input3 = document.querySelector('.template')
let span_value3 = document.querySelector('.template')
let precos = [0,0,0]



btn_finalizar.addEventListener('click', ()=>{

    modal.classList.remove('invisi')
    span_final2.textContent=String(precos[0]+precos[1]+precos[2])
    layout.classList.add('invisi')

})

btn[0].addEventListener('click', (event)=>{
    let content = item_pedido.content.cloneNode(true)
    
    content.querySelector('.info-left > h4').textContent='Coca-Cola 3L'
    content.querySelector('.info-left > input').setAttribute('id','i1')
    content.querySelector('.info-right > span').setAttribute('id','a1')
    content.querySelector('.info-right > span').textContent='R$ 12'
    lista_pedido.appendChild(content)

    input1= document.querySelector('#i1')
    span_value= document.querySelector('#a1')
    console.log(input1)
    let valor = 12
    precos[0]+=valor
    span_final.textContent=String(precos[0]+precos[1]+precos[2])
    input1.addEventListener('change', ()=>{
       
       span_value.textContent= String('R$ '+ valor*input1.value)
       precos[0]=valor*input1.value
       span_final.textContent=String(precos[0]+precos[1]+precos[2])
    })
  
})
   

btn[1].addEventListener('click', (event)=>{
    let content = item_pedido.content.cloneNode(true)
    
    content.querySelector('.info-left > h4').textContent='Pão'
    content.querySelector('.info-left > input').setAttribute('id','i2')
    content.querySelector('.info-right > span').setAttribute('id','a2')
    content.querySelector('.info-right > span').textContent='R$ 7'
    lista_pedido.appendChild(content)

    input2= document.querySelector('#i2')
    span_value2= document.querySelector('#a2')
    console.log(input1)
    let valor = 7
    precos[1]+=valor
    span_final.textContent=String(precos[0]+precos[1]+precos[2])
    input2.addEventListener('change', ()=>{
       
       span_value2.textContent= String('R$ '+ valor*input2.value)
       precos[1]=valor*input2.value
       span_final.textContent=String(precos[0]+precos[1]+precos[2])
    })
   
    
})
btn[2].addEventListener('click', (event)=>{
    let content = item_pedido.content.cloneNode(true)
    
    content.querySelector('.info-left > h4').textContent='Macarrão'
    content.querySelector('.info-left > input').setAttribute('id','i3')
    content.querySelector('.info-right > span').setAttribute('id','a3')
    content.querySelector('.info-right > span').textContent='R$ 7'
    lista_pedido.appendChild(content)

    input3= document.querySelector('#i3')
    span_value3= document.querySelector('#a3')
    console.log(input1)
    let valor = 7
    precos[2]+=valor
    span_final.textContent=String(precos[0]+precos[1]+precos[2])
    input3.addEventListener('change', ()=>{
       
       span_value3.textContent= String('R$ '+ valor*input3.value)
       precos[2]=valor*input3.value
       span_final.textContent=String(precos[0]+precos[1]+precos[2])
    })


    
    
})




