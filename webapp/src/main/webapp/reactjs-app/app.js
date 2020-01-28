import React, { Component } from "react";
import "../css/app.less";

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {poster: "system"};
    }

    render() {
        return (
            <section>
                <form id="f1" className="form-horizontal">
                    <div className="form-group">
                        <div className="main_cont1  d-flex">
                            <button type="button" className="btn btn-default">
                                <i className="uiIconQuestion uiIconDarkGray"/>
                            </button>
                            <input className="tt_inp"   placeholder="Tip text ..."/>
                            <input className="oth_inp"  placeholder="via $USER"/>
                            <input className="oth_inp"  placeholder="$DATETIME"/>
                            <button type="button" className="btn btn-default">
                                <span className="uiIconNew uiIconDarkGray"/>
                            </button>
                            <button type="button" className="btn btn-default">
                                <span className="uiIconSimplePlusMini uiIconDarkGray"/>
                            </button>
                            <button type="button" className="btn btn-default">
                                <span className="uiIconClose uiIconDarkGray"/>
                            </button>
                        </div>
                    </div>
                </form>
                <form id="f2" className="form-horizontal">
                    <div className="form-group">
                        <div className="main_cont2  d-flex">
                            <button type="button" className="btn btn-default">
                                <i className="uiIconQuestion uiIconDarkGray"/>
                            </button>
                            <textarea className="t_a" rows="3" placeholder="Tip text..."/>
                            <button type="submit" id="s_b" className="btn btn-default">Save</button>
                            <button type="button" className="btn btn-default">
                                <span className="uiIconClose uiIconDarkGray"/>
                            </button>
                        </div>
                    </div>
                </form>
            </section>
        );
    }
}
