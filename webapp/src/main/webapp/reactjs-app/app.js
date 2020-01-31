import React, { Component } from "react";
import "../css/app.less";

export default class App extends Component {

    constructor(props) {
        super(props);
        const currDate = new Date().toISOString().slice(0, 10);
        this.state = {
            w_tt_inp: '44%',
            w_oth_inp: '12%',
            w_oth_mrg: '0.3%',
            vis_oth: "visible",
            vis_f1: "visible",
            vis_f2: "hidden",
            currDate : currDate
        };
        this.oth_inpChange = (e) => {
            (e.target.value === "system") ?
                this.setState({
                    w_tt_inp: '72%',
                    w_oth_inp: '0%',
                    w_oth_mrg: '0%',
                    vis_oth: "hidden"
                }) :
                this.setState({
                    w_tt_inp: '44%',
                    w_oth_inp: '12%',
                    w_oth_mrg: '0.3%',
                    vis_oth: "visible"
                });
        }
        this.b_plusClick = (e) => {
            this.setState({vis_f2: "visible"});
        }
        this.b_f1xClick = (e) => {
            this.setState({vis_f1: "hidden", vis_f2: "hidden", vis_oth : "hidden"});
        }
        this.b_f2xClick = (e) => {
            this.setState({vis_f2: "hidden"});
        }
        this.tooltipShow = () => {
            var copiedText = document.getElementById("tt_inp");
            copiedText.select();
            document.execCommand("copy");
            var tooltiptext = document.getElementById("tooltiptext");
            tooltiptext.innerHTML = copiedText.value;
        }
    }

    render()
    {
        return (
            <section>
                <form id="f1" className="form-horizontal"  style={{visibility: this.state.vis_f1}}>
                    <div className="form-group">
                        <div className="main_cont1  d-flex">
                            <button type="button" className="btn btn-default">
                                <i className="uiIconQuestion uiIconDarkGray"/>
                            </button>
                            <div className="div_toolpit"  style={{width: this.state.w_tt_inp}}
                            onMouseOver={this.tooltipShow}>
                                <input id="tt_inp"  placeholder="Tip text ..." />
                            <span id="tooltiptext" />
                            </div>
                            <input id="oth_inp" placeholder="via $USER"
                                   style={{
                                       width: this.state.w_oth_inp,
                                       margin: this.state.w_oth_mrg,
                                       visibility: this.state.vis_oth
                                   }}
                                   onChange={(e) => this.oth_inpChange(e)}/>
                            <input  className="oth_inp"  placeholder="$DATETIME"  defaultValue={this.state.currDate}
                                    style={{
                                        width: this.state.w_oth_inp,
                                        margin: this.state.w_oth_mrg,
                                        visibility: this.state.vis_oth
                                    }}/>
                            <button type="button" className="btn btn-default">
                                <span className="uiIconNew uiIconDarkGray"/>
                            </button>
                            <button type="button" className="btn btn-default"
                                    onClick={(e) => this.b_plusClick(e)}>
                                <span className="uiIconSimplePlusMini uiIconDarkGray"/>
                            </button>
                            <button type="button" className="btn btn-default"
                                    onClick={(e) => this.b_f1xClick(e)}>
                                <span className="uiIconClose uiIconDarkGray"/>
                            </button>
                        </div>
                    </div>
                </form>
                <form id="f2" className="form-horizontal" style={{visibility: this.state.vis_f2}}>
                    <div className="form-group">
                        <div className="main_cont2  d-flex">
                            <button type="button" className="btn btn-default">
                                <i className="uiIconQuestion uiIconDarkGray"/>
                            </button>
                            <textarea className="t_a" rows="3" placeholder="Tip text..."/>
                            <button type="submit" id="s_b" className="btn btn-default">Save</button>
                            <button type="button" className="btn btn-default"
                                    onClick={(e) => this.b_f2xClick(e)}>
                                <span className="uiIconClose uiIconDarkGray"/>
                            </button>
                        </div>
                    </div>
                </form>
            </section>
        );
    }
}
