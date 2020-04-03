import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, CustomInput } from 'reactstrap';
import cine from "../components/cine.json"; 
import '../screens/Controle.css';



class Ego extends Component {
    constructor(props) {
        super(props);
        this.state={};
      }


    render(){
        return (cine.Ego.map((c) => {
            if (c.id==1){
                if (c.q6){
                return <div className="baba">
                    <div className="bar">
                        <h2> Égo </h2>
                    </div>

                    <div className="forme">
                    <div className="sujet">
                        <h5> {c.sujet} </h5>
                    </div>
                    <form>
                        <label> 
                            <div className="qcine">
                            {"1)"+c.q1}
                            </div>
                            <CustomInput type="checkbox" id="Tpositif" label="Oui" inline />
                            <CustomInput type="checkbox" id="Tnegatif" label="Non" inline />
                        </label>
                        <label> 
                            <div className="qcine">
                            {"2)"+c.q2}
                            </div>
                            <CustomInput type="checkbox" id="Tpositif" label="Oui" inline />
                            <CustomInput type="checkbox" id="Tnegatif" label="Non" inline />
                        </label>
                        <label> 
                            <div className="qcine">
                            {"3)"+c.q3}
                            </div>
                            <CustomInput type="checkbox" id="Tpositif" label="Oui" inline />
                            <CustomInput type="checkbox" id="Tnegatif" label="Non" inline />
                        </label>
                        <label> 
                            <div className="qcine">
                            {"4)"+c.q4}
                            </div>
                            <CustomInput type="checkbox" id="Tpositif" label="Oui" inline />
                            <CustomInput type="checkbox" id="Tnegatif" label="Non" inline />
                        </label>
                        <label> 
                            <div className="qcine">
                            {"5)"+c.q5}
                            </div>
                            <CustomInput type="checkbox" id="Tpositif" label="Oui" inline />
                            <CustomInput type="checkbox" id="Tnegatif" label="Non" inline />
                        </label>
                        <label> 
                            <div className="qcine">
                            {"6)"+c.q6}
                            </div>
                            <CustomInput type="checkbox" id="Tpositif" label="Oui" inline />
                            <CustomInput type="checkbox" id="Tnegatif" label="Non" inline />
                        </label>

                    </form>
                    
                    </div>

                </div>
            }
            else {
                return <div className="baba">
                <div className="bar">
                    <h2> Égo </h2>
                </div>

                <div className="forme">
                <div className="sujet">
                    <h5> {c.sujet} </h5>
                </div>
                <form>
                    <label> 
                        <div className="qcine">
                        {"1)"+c.q1}
                        </div>
                        <CustomInput type="checkbox" id="Tpositif" label="Oui" inline />
                        <CustomInput type="checkbox" id="Tnegatif" label="Non" inline />
                    </label>
                    <label> 
                        <div className="qcine">
                        {"2)"+c.q2}
                        </div>
                        <CustomInput type="checkbox" id="Tpositif" label="Oui" inline />
                        <CustomInput type="checkbox" id="Tnegatif" label="Non" inline />
                    </label>
                    <label> 
                        <div className="qcine">
                        {"3)"+c.q3}
                        </div>
                        <CustomInput type="checkbox" id="Tpositif" label="Oui" inline />
                            <CustomInput type="checkbox" id="Tnegatif" label="Non" inline />
                    </label>
                    <label> 
                        <div className="qcine">
                        {"4)"+c.q4}
                        </div>
                        <CustomInput type="checkbox" id="Tpositif" label="Oui" inline />
                            <CustomInput type="checkbox" id="Tnegatif" label="Non" inline />
                    </label>
                    <label> 
                        <div className="qcine">
                        {"5)"+c.q5}
                        </div>
                        <CustomInput type="checkbox" id="Tpositif" label="Oui" inline />
                            <CustomInput type="checkbox" id="Tnegatif" label="Non" inline />
                    </label>

                </form>
                
                </div>

            </div> 
            }
        }
        })
        )
    }
}

export default Ego;