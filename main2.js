class Model {
        constructor(){
            this.controller = null;
            this.turn = 0;
            this.gameStatus = 'on'
            this.idArr = []
        }

        Alert1(){
            alert("Winner: Player 1");
            this.gameStatus = 'off'
        }

        Alert2(){
            alert("Winner: Player 2");
            this.gameStatus = 'off'
                }
        Alert3(){
            alert("Tie");
            this.gameStatus = 'off'
        }

        idFunc(){this.idArr = [parseInt(TL.childNodes[0].id), parseInt(TM.childNodes[0].id), parseInt(TR.childNodes[0].id), parseInt(CL.childNodes[0].id), parseInt(CM.childNodes[0].id), parseInt(CR.childNodes[0].id), parseInt(BL.childNodes[0].id), parseInt(BM.childNodes[0].id), parseInt(BR.childNodes[0].id)]}

        winCond(){
                //Side to Side wins
                 if((this.idArr[0] + (this.idArr[1]) + (this.idArr[2])) == 3){this.Alert1()}
                 else if((this.idArr[0] + (this.idArr[1]) + (this.idArr[2])) == 15){this.Alert2()}
                 else if((this.idArr[3] + (this.idArr[4]) + (this.idArr[5])) == 3){this.Alert1()}
                 else if((this.idArr[3] + (this.idArr[4]) + (this.idArr[5])) == 15){this.Alert2()}
                 else if((this.idArr[6] + (this.idArr[7]) + (this.idArr[8])) == 3){this.Alert1()}
                 else if((this.idArr[6] + (this.idArr[7]) + (this.idArr[8])) == 15){this.Alert2()}
                 //Up-Down wins
                 else if((this.idArr[0] + (this.idArr[3]) + (this.idArr[6])) == 3){this.Alert1()}
                 else if((this.idArr[0] + (this.idArr[3]) + (this.idArr[6])) == 15){this.Alert2()}
                 else if((this.idArr[1] + (this.idArr[4]) + (this.idArr[7])) == 3){this.Alert1()}
                 else if((this.idArr[1] + (this.idArr[4]) + (this.idArr[7])) == 15){this.Alert2()}
                 else if((this.idArr[2] + (this.idArr[5]) + (this.idArr[8])) == 3){this.Alert1()}
                 else if((this.idArr[2] + (this.idArr[5]) + (this.idArr[8])) == 15){this.Alert2()}
                 //Diagonal Wins
                 else if((this.idArr[0] + (this.idArr[4]) + (this.idArr[8])) == 3){this.Alert1()}
                 else if((this.idArr[0] + (this.idArr[4]) + (this.idArr[8])) == 15){this.Alert2()}
                 else if((this.idArr[2] + (this.idArr[4]) + (this.idArr[6])) == 3){this.Alert1()}
                 else if((this.idArr[6] + (this.idArr[4]) + (this.idArr[2])) == 15){this.Alert2()}
                 else if(this.turn ==8){
                 this.Alert3()
                 }
        }

        setView(view){let v= view}

        init(){this.v.genTileBoard;}

        setState(s){this.turn = s}

        getState(){return this.turn}

        setController(c){this.controller = c;}

        onSetState(){this.controller.updateView;}
}

class Controller{
        constructor(model, view){
            this.v = view;
            this.m = model;
            this.turn = this.m.turn;
        }

        handleClick(e){e.addEventListener('click', this.updateView.bind(this, e.id));}

        resetClick(e){e.addEventListener('click', out.bind(this))}

        updateView(e) {

            if(this.m.turn % 2 == 0 && this.m.gameStatus == 'on'){

                switch(e){
                            case 'TL':
                                if((TL.childNodes[0]).id != '0'){
                                    return
                                }

                                TL.removeChild(TL.childNodes[0])

                                this.v.Imag1 = this.v.generateHTML({ type: 'img', src: 'img/x.png', style: 'max-width: 12px; min-width: 12px', parent: TL, id: 1})
                            break;
                            case 'TM':
                            if((TM.childNodes[0]).id != '0'){
                                return
                            }
                                TM.removeChild(TM.childNodes[0])
                                this.v.Imag2 = this.v.generateHTML({ type: 'img', src: 'img/x.png', style: 'max-width: 12px; min-width: 12px', parent: TM, id: 1})
                            break;
                            case 'TR':
                            if((TR.childNodes[0]).id != '0'){
                                return
                            }
                                TR.removeChild(TR.childNodes[0])
                                this.v.Imag3 = this.v.generateHTML({ type: 'img', src: 'img/x.png', style: 'max-width: 12px; min-width: 12px', parent: TR, id: 1})
                            break;
                            case 'CL':
                            if((CL.childNodes[0]).id != '0'){
                                return
                            }
                                CL.removeChild(CL.childNodes[0])
                                this.v.Imag4 = this.v.generateHTML({ type: 'img', src: 'img/x.png', style: 'max-width: 12px; min-width: 12px', parent: CL, id: 1})
                            break;
                            case 'CM':
                            if((CM.childNodes[0]).id != '0'){
                                return
                            }
                                CM.removeChild(CM.childNodes[0])
                                this.v.Imag5 = this.v.generateHTML({ type: 'img', src: 'img/x.png', style: 'max-width: 12px; min-width: 12px', parent: CM, id: 1})
                            break;
                            case 'CR':
                            if((CR.childNodes[0]).id != '0'){
                                return
                            }
                                CR.removeChild(CR.childNodes[0])
                                this.v.Imag6 = this.v.generateHTML({ type: 'img', src: 'img/x.png', style: 'max-width: 12px; min-width: 12px', parent: CR, id: 1})
                            break;
                            case 'BL':
                            if((BL.childNodes[0]).id != '0'){
                                return
                            }
                                BL.removeChild(BL.childNodes[0])
                                this.v.Imag7 = this.v.generateHTML({ type: 'img', src: 'img/x.png', style: 'max-width: 12px; min-width: 12px', parent: BL, id: 1})
                            break;
                            case 'BM':
                            if((BM.childNodes[0]).id != '0'){
                                return
                            }
                                BM.removeChild(BM.childNodes[0])
                                this.v.Imag8 = this.v.generateHTML({ type: 'img', src: 'img/x.png', style: 'max-width: 12px; min-width: 12px', parent: BM, id: 1})
                            break;
                            case 'BR':
                            if((BR.childNodes[0]).id != '0'){
                                return
                            }
                                BR.removeChild(BR.childNodes[0])
                                this.v.Imag9 = this.v.generateHTML({ type: 'img', src: 'img/x.png', style: 'max-width: 12px; min-width: 12px', parent: BR, id: 1})
                            break;
                        }
            }
            else if(this.m.turn % 2 == 1 && this.m.gameStatus == 'on'){
                switch(e){
                    case 'TL':
                        if((TL.childNodes[0]).id != '0'){
                            return
                        }
                        TL.removeChild(TL.childNodes[0])

                        this.v.Imag1 = this.v.generateHTML({ type: 'img', src: 'img/o.png', style: 'max-width: 12px; min-width: 12px', parent: TL, id: '5'})
                    break;
                    case 'TM':
                    if((TM.childNodes[0]).id != '0'){
                        return
                    }
                        TM.removeChild(TM.childNodes[0])
                        this.v.Imag2 = this.v.generateHTML({ type: 'img', src: 'img/o.png', style: 'max-width: 12px; min-width: 12px', parent: TM, id: '5'})
                    break;
                    case 'TR':
                    if((TR.childNodes[0]).id != '0'){
                        return
                    }
                        TR.removeChild(TR.childNodes[0])
                        this.v.Imag3 = this.v.generateHTML({ type: 'img', src: 'img/o.png', style: 'max-width: 12px; min-width: 12px', parent: TR, id: '5'})
                    break;
                    case 'CL':
                    if((CL.childNodes[0]).id != '0'){
                        return
                    }
                        CL.removeChild(CL.childNodes[0])
                        this.v.Imag4 = this.v.generateHTML({ type: 'img', src: 'img/o.png', style: 'max-width: 12px; min-width: 12px', parent: CL, id: '5'})
                    break;
                    case 'CM':
                    if((CM.childNodes[0]).id != '0'){
                        return
                    }
                        CM.removeChild(CM.childNodes[0])
                        this.v.Imag5 = this.v.generateHTML({ type: 'img', src: 'img/o.png', style: 'max-width: 12px; min-width: 12px', parent: CM, id: '5'})
                    break;
                    case 'CR':
                    if((CR.childNodes[0]).id != '0'){
                        return
                    }
                        CR.removeChild(CR.childNodes[0])
                        this.v.Imag6 = this.v.generateHTML({ type: 'img', src: 'img/o.png', style: 'max-width: 12px; min-width: 12px', parent: CR, id: '5'})
                    break;
                    case 'BL':
                    if((BL.childNodes[0]).id != '0'){
                        return
                    }
                        BL.removeChild(BL.childNodes[0])
                        this.v.Imag7 = this.v.generateHTML({ type: 'img', src: 'img/o.png', style: 'max-width: 12px; min-width: 12px', parent: BL, id: '5'})
                    break;
                    case 'BM':
                    if((BM.childNodes[0]).id != '0'){
                        return
                    }
                        BM.removeChild(BM.childNodes[0])
                        this.v.Imag8 = this.v.generateHTML({ type: 'img', src: 'img/o.png', style: 'max-width: 12px; min-width: 12px', parent: BM, id: '5'})
                    break;
                    case 'BR':
                    if((BR.childNodes[0]).id != '0'){
                        return
                    }
                        BR.removeChild(BR.childNodes[0])
                        this.v.Imag9 = this.v.generateHTML({ type: 'img', src: 'img/o.png', style: 'max-width: 12px; min-width: 12px', parent: BR, id: '5'})
                    break;
                }
            }
            if(this.m.gameStatus == 'on' ){
                if(this.m.turn>=4){
                this.m.idFunc();
                    this.m.winCond();
                }
                this.m.setState(this.m.turn+1)
            }

        }

}

class View {
        constructor(){
            this.m = null;
            this.c = null;
        }

        setModel(model){this.m = model;}

        setController(controller){this.c = controller}

        generateHTML({ type, classes, text = '', href = '', parent = null, id = '', style = '', src = '', value='0'}) {
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

        genTileBoard() {
        //Container, Columns, and Row
        let container = this.generateHTML({ type: 'div', classes: 'container-sm', parent: app })
        let row = this.generateHTML({ type: 'div', classes: 'row text-center', parent: container })
        let col = this.generateHTML({ type: 'div', classes: 'col-lg-2 col-sm-12 offset-sm-5 w-189', parent: row, style: 'max-height: 48px;  min-width: 189px' })
        let col2 = this.generateHTML({ type: 'div', classes: 'col-lg-2 col-sm-12 offset-sm-5 h-48', parent: row, style: 'max-height: 48px;  min-width: 189px'  })
        let col3 = this.generateHTML({ type: 'div', classes: 'col-lg-2 col-sm-12 offset-sm-5 h-48', parent: row, style: 'max-height: 48px;  min-width: 189px'  })
        //Button Layout
        let TL = this.c.handleClick(this.generateHTML({ type: 'a', classes: 'btn btn-outline-dark btn-lg', parent: col, id: 'TL'}))
        let TM = this.c.handleClick(this.generateHTML({ type: 'a', classes: 'btn btn-outline-dark btn-lg', parent: col, id: 'TM' }))
        let TR = this.c.handleClick(this.generateHTML({ type: 'a', classes: 'btn btn-outline-dark btn-lg', parent: col, id: 'TR' }))
        let CL = this.c.handleClick(this.generateHTML({ type: 'a', classes: 'btn btn-outline-dark btn-lg', parent: col2, id: 'CL' }))
        let CM = this.c.handleClick(this.generateHTML({ type: 'a', classes: 'btn btn-outline-dark btn-lg', parent: col2, id: 'CM' }))
        let CR = this.c.handleClick(this.generateHTML({ type: 'a', classes: 'btn btn-outline-dark btn-lg', parent: col2, id: 'CR' }))
        let BM = this.c.handleClick(this.generateHTML({ type: 'a', classes: 'btn btn-outline-dark btn-lg', parent: col3, id: 'BL' }))
        let BL = this.c.handleClick(this.generateHTML({ type: 'a', classes: 'btn btn-outline-dark btn-lg', parent: col3, id: 'BM' }))
        let BR = this.c.handleClick(this.generateHTML({ type: 'a', classes: 'btn btn-outline-dark btn-lg', parent: col3, id: 'BR' }))
        let div = this.generateHTML({type: 'div', classes: 'text-center', parent: container})
        let res = this.c.resetClick(this.generateHTML({type: 'button', classes: 'btn btn-outline-primary btn-lg mt-2',text:'Reset', id: 'Reset', parent: div, style: 'max-height: 48px;  min-width: 189px'}))

        }

        genImgBoard(){
        //Img for Buttons
        let Imag1 = this.generateHTML({ type: 'img', src: 'img/blank.png', style: 'max-width: 12px; min-width: 12px', parent: TL, id: 0})
        let Imag2 = this.generateHTML({ type: 'img', src: 'img/blank.png', style: 'max-width: 12px; min-width: 12px', parent: TM, id: 0})
        let Imag3 = this.generateHTML({ type: 'img', src: 'img/blank.png', style: 'max-width: 12px; min-width: 12px', parent: TR, id: 0})
        let Imag4 = this.generateHTML({ type: 'img', src: 'img/blank.png', style: 'max-width: 12px; min-width: 12px', parent: CL, id: 0})
        let Imag5 = this.generateHTML({ type: 'img', src: 'img/blank.png', style: 'max-width: 12px; min-width: 12px', parent: CM, id: 0})
        let Imag6 = this.generateHTML({ type: 'img', src: 'img/blank.png', style: 'max-width: 12px; min-width: 12px', parent: CR, id: 0})
        let Imag7 = this.generateHTML({ type: 'img', src: 'img/blank.png', style: 'max-width: 12px; min-width: 12px', parent: BL, id: 0})
        let Imag8 = this.generateHTML({ type: 'img', src: 'img/blank.png', style: 'max-width: 12px; min-width: 12px', parent: BM, id: 0})
        let Imag9 = this.generateHTML({ type: 'img', src: 'img/blank.png', style: 'max-width: 12px; min-width: 12px', parent: BR, id: 0})

        }

}

class App {
       constructor(){
        this.m = new Model();
        this.v = new View();
        this.v.setModel(this.m);
        this.c = new Controller(this.m, this.v);
        this.v.setController(this.c);
        this.m.setController(this.c);
       }

       init(){
       console.log('App Starting');
       this.v.genTileBoard();
       this.v.genImgBoard();
       }

}

function init(){

        let a = new App();
        a.init();
}
function out(){
        app.removeChild(app.childNodes[0]);
        init();
}