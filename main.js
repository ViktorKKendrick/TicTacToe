//HTML
const app = document.getElementById('app');
function generateHTML({ type, classes, text = '', href = '', parent = null, id = '', style = '', src = '', value='0'}) {
    let element = document.createElement(type)
    element.className = classes
    element.innerText = text
    element.style = style
    element.id = id
    element.src = src
    if (href.length > 0) {
        element.href = href
    }

    if (parent) {
        parent.appendChild(element)
    }

    return element
}
//Container, Columns, and Row
container = generateHTML({ type: 'div', classes: 'container-sm', parent: app })
row = generateHTML({ type: 'div', classes: 'row text-center', parent: container })
col = generateHTML({ type: 'div', classes: 'col-lg-2 col-sm-12 offset-sm-5 w-189', parent: row, style: 'max-height: 48px;  min-width: 189px' })
col2 = generateHTML({ type: 'div', classes: 'col-lg-2 col-sm-12 offset-sm-5 h-48', parent: row, style: 'max-height: 48px;  min-width: 189px'  })
col3 = generateHTML({ type: 'div', classes: 'col-lg-2 col-sm-12 offset-sm-5 h-48', parent: row, style: 'max-height: 48px;  min-width: 189px'  })
//Button Layout
TL = generateHTML({ type: 'a', style: 'max-width: 36px', classes: 'btn btn-outline-dark btn-lg', parent: col, id: 'TL'})
TM = generateHTML({ type: 'a', style: 'max-width: 36px', classes: 'btn btn-outline-dark btn-lg', parent: col, id: 'TM' })
TR = generateHTML({ type: 'a', style: 'max-width: 36px', classes: 'btn btn-outline-dark btn-lg', parent: col, id: 'TR' })
CL = generateHTML({ type: 'a', style: 'max-width: 36px', classes: 'btn btn-outline-dark btn-lg', parent: col2, id: 'CL' })
CM = generateHTML({ type: 'a', style: 'max-width: 36px', classes: 'btn btn-outline-dark btn-lg', parent: col2, id: 'CM' })
CR = generateHTML({ type: 'a', style: 'max-width: 36px', classes: 'btn btn-outline-dark btn-lg', parent: col2, id: 'CR' })
BM = generateHTML({ type: 'a', style: 'max-width: 36px', classes: 'btn btn-outline-dark btn-lg', parent: col3, id: 'BM' })
BL = generateHTML({ type: 'a', style: 'max-width: 36px', classes: 'btn btn-outline-dark btn-lg', parent: col3, id: 'BL' })
BR = generateHTML({ type: 'a', style: 'max-width: 36px', classes: 'btn btn-outline-dark btn-lg', parent: col3, id: 'BR' })
//Img for Buttons36mag1 = generateHTML({ type: 'img', src: 'img/blank.png', style: 'max-width: 36px; min-width: 36px', parent: TL, id: 0})
Imag2 = generateHTML({ type: 'img', src: 'img/blank.png', style: 'max-width: 36px; min-width: 36px', parent: TM, id: 0})
Imag3 = generateHTML({ type: 'img', src: 'img/blank.png', style: 'max-width: 36px; min-width: 36px', parent: TR, id: 0})
Imag4 = generateHTML({ type: 'img', src: 'img/blank.png', style: 'max-width: 36px; min-width: 36px', parent: CL, id: 0})
Imag5 = generateHTML({ type: 'img', src: 'img/blank.png', style: 'max-width: 36px; min-width: 36px', parent: CM, id: 0})
Imag6 = generateHTML({ type: 'img', src: 'img/blank.png', style: 'max-width: 36px; min-width: 36px', parent: CR, id: 0})
Imag7 = generateHTML({ type: 'img', src: 'img/blank.png', style: 'max-width: 36px; min-width: 36px', parent: BL, id: 0})
Imag8 = generateHTML({ type: 'img', src: 'img/blank.png', style: 'max-width: 36px; min-width: 36px', parent: BM, id: 0})
Imag9 = generateHTML({ type: 'img', src: 'img/blank.png', style: 'max-width: 36px; min-width: 36px', parent: BR, id: 0})

//Javascript
var topLeft = document.getElementById("TL");
var topMid = document.getElementById("TM");
var topRight = document.getElementById("TR");
var centLeft = document.getElementById("CL");
var centMid = document.getElementById("CM");
var centRight = document.getElementById("CR");
var botLeft = document.getElementById("BL");
var botMid = document.getElementById("BM");
var botRight = document.getElementById("BR");
var turn = 0;

TL.addEventListener('click', Selected);
TM.addEventListener('click', Selected);
TR.addEventListener('click', Selected);
CL.addEventListener('click', Selected);
CM.addEventListener('click', Selected);
CR.addEventListener('click', Selected);
BL.addEventListener('click', Selected);
BM.addEventListener('click', Selected);
BR.addEventListener('click', Selected);


function Selected() {
    if(turn%2==0){
        switch(this.id){
                    case 'TL':
                        if((TL.childNodes[0]).id != '0'){
                            return
                        }
                        TL.removeChild(TL.childNodes[0])

                        Imag1 = generateHTML({ type: 'img', src: 'img/x.png', style: 'max-width: 36px; min-width: 36px', parent: TL, id: 1})
                    break;
                    case 'TM':
                    if((TM.childNodes[0]).id != '0'){
                        return
                    }
                        TM.removeChild(TM.childNodes[0])
                        Imag2 = generateHTML({ type: 'img', src: 'img/x.png', style: 'max-width: 36px; min-width: 36px', parent: TM, id: 1})
                    break;
                    case 'TR':
                    if((TR.childNodes[0]).id != '0'){
                        return
                    }
                        TR.removeChild(TR.childNodes[0])
                        Imag3 = generateHTML({ type: 'img', src: 'img/x.png', style: 'max-width: 36px; min-width: 36px', parent: TR, id: 1})
                    break;
                    case 'CL':
                    if((CL.childNodes[0]).id != '0'){
                        return
                    }
                        CL.removeChild(CL.childNodes[0])
                        Imag4 = generateHTML({ type: 'img', src: 'img/x.png', style: 'max-width: 36px; min-width: 36px', parent: CL, id: 1})
                    break;
                    case 'CM':
                    if((CM.childNodes[0]).id != '0'){
                        return
                    }
                        CM.removeChild(CM.childNodes[0])
                        Imag5 = generateHTML({ type: 'img', src: 'img/x.png', style: 'max-width: 36px; min-width: 36px', parent: CM, id: 1})
                    break;
                    case 'CR':
                    if((CR.childNodes[0]).id != '0'){
                        return
                    }
                        CR.removeChild(CR.childNodes[0])
                        Imag6 = generateHTML({ type: 'img', src: 'img/x.png', style: 'max-width: 36px; min-width: 36px', parent: CR, id: 1})
                    break;
                    case 'BL':
                    if((BL.childNodes[0]).id != '0'){
                        return
                    }
                        BL.removeChild(BL.childNodes[0])
                        Imag7 = generateHTML({ type: 'img', src: 'img/x.png', style: 'max-width: 36px; min-width: 36px', parent: BL, id: 1})
                    break;
                    case 'BM':
                    if((BM.childNodes[0]).id != '0'){
                        return
                    }
                        BM.removeChild(BM.childNodes[0])
                        Imag8 = generateHTML({ type: 'img', src: 'img/x.png', style: 'max-width: 36px; min-width: 36px', parent: BM, id: 1})
                    break;
                    case 'BR':
                    if((BR.childNodes[0]).id != '0'){
                        return
                    }
                        BR.removeChild(BR.childNodes[0])
                        Imag9 = generateHTML({ type: 'img', src: 'img/x.png', style: 'max-width: 36px; min-width: 36px', parent: BR, id: 1})
                    break;
                }
    }
    else{
        switch(this.id){
            case 'TL':
                if((TL.childNodes[0]).id != '0'){
                    return
                }
                TL.removeChild(TL.childNodes[0])
                console.log('seven')
                Imag1 = generateHTML({ type: 'img', src: 'img/o.png', style: 'max-width: 36px; min-width: 36px', parent: TL, id: '2'})
            break;
            case 'TM':
            if((TM.childNodes[0]).id != '0'){
                return
            }
                TM.removeChild(TM.childNodes[0])
                Imag2 = generateHTML({ type: 'img', src: 'img/o.png', style: 'max-width: 36px; min-width: 36px', parent: TM, id: '2'})
            break;
            case 'TR':
            if((TR.childNodes[0]).id != '0'){
                return
            }
                TR.removeChild(TR.childNodes[0])
                Imag3 = generateHTML({ type: 'img', src: 'img/o.png', style: 'max-width: 36px; min-width: 36px', parent: TR, id: '2'})
            break;
            case 'CL':
            if((CL.childNodes[0]).id != '0'){
                return
            }
                CL.removeChild(CL.childNodes[0])
                Imag4 = generateHTML({ type: 'img', src: 'img/o.png', style: 'max-width: 36px; min-width: 36px', parent: CL, id: '2'})
            break;
            case 'CM':
            if((CM.childNodes[0]).id != '0'){
                return
            }
                CM.removeChild(CM.childNodes[0])
                Imag5 = generateHTML({ type: 'img', src: 'img/o.png', style: 'max-width: 36px; min-width: 36px', parent: CM, id: '2'})
            break;
            case 'CR':
            if((CR.childNodes[0]).id != '0'){
                return
            }
                CR.removeChild(CR.childNodes[0])
                Imag6 = generateHTML({ type: 'img', src: 'img/o.png', style: 'max-width: 36px; min-width: 36px', parent: CR, id: '2'})
            break;
            case 'BL':
            if((BL.childNodes[0]).id != '0'){
                return
            }
                BL.removeChild(BL.childNodes[0])
                Imag7 = generateHTML({ type: 'img', src: 'img/o.png', style: 'max-width: 36px; min-width: 36px', parent: BL, id: '2'})
            break;
            case 'BM':
            if((BM.childNodes[0]).id != '0'){
                return
            }
                BM.removeChild(BM.childNodes[0])
                Imag8 = generateHTML({ type: 'img', src: 'img/o.png', style: 'max-width: 36px; min-width: 36px', parent: BM, id: '2'})
            break;
            case 'BR':
            if((BR.childNodes[0]).id != '0'){
                return
            }
                BR.removeChild(BR.childNodes[0])
                Imag9 = generateHTML({ type: 'img', src: 'img/o.png', style: 'max-width: 36px; min-width: 36px', parent: BR, id: '2'})
            break;
        }
    }
    console.log(turn)
    if(turn>=4){
    winCond();
    }
    turn++

}

function winCond(){
    //Side wins
    if((TL.childNodes[0]).id != '0' && (TM.childNodes[0]).id != '0' && (TR.childNodes[0]).id != '0'){
        if((TL.childNodes[0]).id === (((TM.childNodes[0]).id) && ((TR.childNodes[0]).id))){
               alert = generateHTML({type: 'div', classes: 'alert', parent: app})
               alertT = generateHTML({type: 'h4', classes:'alert-heading; text-center', text:"Winner: Player " + (TL.childNodes[0]).id, parent: alert})
               TL.removeEventListener('click', Selected);
               TM.removeEventListener('click', Selected);
               TR.removeEventListener('click', Selected);
               CL.removeEventListener('click', Selected);
               CM.removeEventListener('click', Selected);
               CR.removeEventListener('click', Selected);
               BL.removeEventListener('click', Selected);
               BM.removeEventListener('click', Selected);
               BR.removeEventListener('click', Selected);
        }
    }
    else if((CL.childNodes[0]).id != '0' && (CM.childNodes[0]).id != '0' && (CR.childNodes[0]).id != '0'){
        if((CL.childNodes[0]).id === ((CM.childNodes[0]).id && (CR.childNodes[0]).id)){
               alert = generateHTML({type: 'div', classes: 'alert', parent: app})
               alertT = generateHTML({type: 'h4', classes:'alert-heading; text-center', text:"Winner: Player " + (CL.childNodes[0]).id, parent: alert})
               TL.removeEventListener('click', Selected);
               TM.removeEventListener('click', Selected);
               TR.removeEventListener('click', Selected);
               CL.removeEventListener('click', Selected);
               CM.removeEventListener('click', Selected);
               CR.removeEventListener('click', Selected);
               BL.removeEventListener('click', Selected);
               BM.removeEventListener('click', Selected);
               BR.removeEventListener('click', Selected);
        }
    }
    else if((BL.childNodes[0]).id != '0' && (BM.childNodes[0]).id != '0' && (BR.childNodes[0]).id != '0'){
    if((BL.childNodes[0]).id === ((BM.childNodes[0]).id && (BR.childNodes[0]).id)){
                   alert = generateHTML({type: 'div', classes: 'alert', parent: app})
                   alertT = generateHTML({type: 'h4', classes:'alert-heading; text-center', text:"Winner: Player " + (BL.childNodes[0]).id, parent: alert})
                   TL.removeEventListener('click', Selected);
                   TM.removeEventListener('click', Selected);
                   TR.removeEventListener('click', Selected);
                   CL.removeEventListener('click', Selected);
                   CM.removeEventListener('click', Selected);
                   CR.removeEventListener('click', Selected);
                   BL.removeEventListener('click', Selected);
                   BM.removeEventListener('click', Selected);
                   BR.removeEventListener('click', Selected);
            }

    }
    //Top wins
    else if((TL.childNodes[0]).id != '0' && (CL.childNodes[0]).id != '0' && (BL.childNodes[0]).id != '0'){
    if((TL.childNodes[0]).id === ((CL.childNodes[0]).id && (BL.childNodes[0]).id)){
                   alert = generateHTML({type: 'div', classes: 'alert', parent: app})
                   alertT = generateHTML({type: 'h4', classes:'alert-heading; text-center', text:"Winner: Player " + (TL.childNodes[0]).id, parent: alert})
                   TL.removeEventListener('click', Selected);
                   TM.removeEventListener('click', Selected);
                   TR.removeEventListener('click', Selected);
                   CL.removeEventListener('click', Selected);
                   CM.removeEventListener('click', Selected);
                   CR.removeEventListener('click', Selected);
                   BL.removeEventListener('click', Selected);
                   BM.removeEventListener('click', Selected);
                   BR.removeEventListener('click', Selected);
            }

    }
    else if((TM.childNodes[0]).id != '0' && (CM.childNodes[0]).id != '0' && (BM.childNodes[0]).id != '0'){
    if((TM.childNodes[0]).id === ((CM.childNodes[0]).id && (BM.childNodes[0]).id)){
                   alert = generateHTML({type: 'div', classes: 'alert', parent: app})
                   if (TM.childNodes[0].id === 1){
                   alertT = generateHTML({type: 'h4', classes:'alert-heading; text-center', text:"Winner: Player 1"})
                   }
                   else if(TM.childNodes[0].id == 2){alertT = generateHTML({type: 'h4', classes:'alert-heading; text-center', text:"Winner: Player 2"})}

                   TL.removeEventListener('click', Selected);
                   TM.removeEventListener('click', Selected);
                   TR.removeEventListener('click', Selected);
                   CL.removeEventListener('click', Selected);
                   CM.removeEventListener('click', Selected);
                   CR.removeEventListener('click', Selected);
                   BL.removeEventListener('click', Selected);
                   BM.removeEventListener('click', Selected);
                   BR.removeEventListener('click', Selected);
            }

    }

}


