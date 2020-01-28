import React, { Component } from "react";
import "../css/app.less";

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {poster: "system"};
    }

    render() {
        return (
            <section className="a">
                <form className="form-horizontal">
                    <div className="form-group">
                        <div className="main_cont  d-flex">
                            <button type="button" className="btn btn-default">
                                <i className="uiIconQuestion uiIconDarkGray"></i>
                            </button>
                            <input className="tt_inp"   placeholder="Tip text ..."/>
                            <input className="oth_inp"  placeholder="via $USER"/>
                            <input className="oth_inp"  placeholder="$DATETIME"/>
                            <button type="button" className="btn btn-default">
                                <span className="uiIconNew uiIconDarkGray"></span>
                            </button>
                            <button type="button" className="btn btn-default">
                                <span className="uiIconSimplePlusMini uiIconDarkGray"></span>
                            </button>
                            <button type="button" className="btn btn-default">
                                <span className="uiIconClose uiIconDarkGray"></span>
                            </button>
                        </div>
                    </div>
                </form>
            </section>
        );
    }
}


// return (
// const main_1     =  150;
// const ic_1       =   10;
// const bt_1       =   10;
// let   user_txt_1 =   20;
// if (this.state.poster === "system")  user_txt_1 = 0;
// const dt_txt_1   =   40;
// const tip_txt_1  =  main_1 - ic_1 - user_txt_1 - dt_txt_1 - 3 * bt_1;
//     <section className="a">
//         <form className="form-horizontal">
//             <div className="form-group">
//                 <div className="main_cont" width = {main_1}>
//                     <span className="glyphicon glyphicon-question-sign" width = {ic_1}></span>
//                     <input className="inp" width = {tip_txt_1}    placeholder="Tip text ..." />
//                     <input className="inp" width = {user_txt_1}   placeholder="via $USER"/>
//                     <input className="inp" width = {dt_txt_1}     placeholder="$DATETIME"/>
//                     <button type="button" class="btn btn-default" width = {bt_1}>
//                         <i className="glyphicon glyphicon-chevron-right"></i>
//                     </button>
//                     <button type="button" class="btn btn-default" width = {bt_1}>
//                         <i className="glyphicon glyphicon-asterisk"></i>
//                     </button>
//                     <button type="button" class="btn btn-default" width = {bt_1}>
//                         <i className="glyphicon glyphicon-remove"></i>
//                     </button>
//                 </div>
//             </div>
//         </form>
//     </section>
// );

// return (
//     <section className="a">
//         <form className="form-horizontal">
//             <div className="form-group">
//                 <div className="col-xs-2">
//                     <span className="glyphicon glyphicon-question-sign"/>
//                 </div>
//                 <div className="col-xs-12">
//                     <input type="text" className="inp" placeholder="Tip text"/>
//                 </div>
//                 <div className="col-xs-6">
//                     <input type="text" className="inp" placeholder="via $USER"/>
//                 </div>
//                 <div className="col-xs-6">
//                     <input type="text" className="inp" placeholder="$DATETIME"/>
//                 </div>
//                 <div className="col-xs-2">
//                     <button type="button" class="btn btn-default" >
//                         <i className="glyphicon glyphicon-chevron-right"/>
//                     </button>
//                 </div>
//                 <div className="col-xs-2">
//                     <button type="button" class="btn btn-default" >
//                         <i className="glyphicon glyphicon-asterisk"/>
//                     </button>
//                 </div>
//                 <div className="col-xs-2">
//                     <button type="button" class="btn btn-default">
//                         <i className="glyphicon glyphicon-remove"/>
//                     </button>
//                 </div>
//             </div>
//         </form>
//     </section>
// );