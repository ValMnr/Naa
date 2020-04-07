import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Liste from "../components/test.json";
import '../screens/Controle.css';
import naa from './images/naa.png';
import axios from 'axios';

class Discussion extends Component {
    state1 = {


    }
    constructor(props) {

        super(props);

        this.state = {
            q1: "",
            q2: "",
            q3: "",
            rep1: "",
            rep2: "",
            rep3: "",
            questionsId: [],
            answerids: [],
            score: 0
        }

        this.rep1Change = this.rep1Change.bind(this);
        this.rep2Change = this.rep2Change.bind(this);
        this.rep3Change = this.rep3Change.bind(this);
        this.postQuestion = this.postQuestion.bind(this);
        this.addSessionHumor = this.addSessionHumor.bind(this)
        this.fonctionfetch = this.fonctionfetch.bind(this)
    }

    rep1Change(event) {
        this.setState({ rep1: event.target.value });
    }
    rep2Change(event) {
        this.setState({ rep2: event.target.value });
    }

    rep3Change(event) {
        this.setState({ rep3: event.target.value });
    }

    postQuestion = async (typeQ, contentQ) => {
        var self = this
        return new Promise(function (resolve, reject) {
            fetch('http://127.0.0.1:3000/api/humor/addAnswer',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        userId: "5e88dec1cf7202b3d1b66d00",
                        questionType: typeQ,
                        content: contentQ
                    })
                })
                .then((response) => response.json())
                .then(function (response) {
                    console.log("Answser returned")
                    // console.log(response) 
                    var newScore = self.state.score + response.score
                    var answerids = self.state.answerids
                    answerids.push(response._id)
                    self.setState({ answerids: answerids, score: newScore }, () => {
                        console.log(self.state)
                        resolve()
                    })
                })
                .catch((error) => {
                    console.log(error);
                    return reject(error)
                });
        })
    }

    addSessionHumor = async () => {
        var self = this
        console.log("adding session")
        console.log(self.state)
        console.log("***********")
        fetch('http://127.0.0.1:3000/api/humor/session',
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: "5e88dec1cf7202b3d1b66d00",
                    questions: self.state.questionsId,
                    answersId:  this.state.answerids,
                    score: self.state.score
                })
            })
            .then((response) => response.json())
            .then(function (response) {
                console.log("Req2 done")
                console.log(response)

            })
            .catch((e) => { return e; })
    }

    sendAnswers = async () => {
        var self = this;

        new Promise(function (resolve, reject) {
            setTimeout(() => resolve(1), 10); // (*)
        }).then(function (result) { // (**)

            result =  self.postQuestion('type1', self.state.rep1)
            return result;
        }).then(function (result) { // (**)
            result = self.postQuestion('type2', self.state.rep2)
            return result * 2;
        }).then(function (result) { // (***)
            result = self.postQuestion('type3', self.state.rep3)
            return result ;
        }).then(function (result) { 
          console.log('testtest')
            self.addSessionHumor()   
        })




    }


    handleSubmit = async () => {    
        this.sendAnswers()
    }

    fonctionfetch() {
        fetch('http://127.0.0.1:3000/api/humor/getQuestions')
            .then((response) => response.json())
            .then((response) => {
                if (response[0] !== undefined && response[1] !== undefined && response[2] !== undefined) {
                    this.setState({ q1: response[0].content, q2: response[1].content, q3: response[2].content })
                    var questionsId = this.state.questionsId
                    questionsId.push(response[0]._id)
                    questionsId.push(response[1]._id)
                    questionsId.push(response[2]._id)


                    this.setState({ questionsId: questionsId }, () => { console.log(this.state.questionsId) })

                }
                else {
                    this.fonctionfetch()
                }

            })
            .catch(function (error) {
                console.log(error);
            })
    }

    componentDidMount() {
        this.fonctionfetch()
    }


    render() {
        return (
            <div className="discussion">
                <div className="bar">
                    <h2> Discussion </h2>
                </div>


                <form >
                    <label>
                        <div className="rep">{this.state.q1}</div>
                        <Input type="text" onChange={this.rep1Change}></Input>
                    </label>




                    <label>
                        <div className="rep">{this.state.q2}</div>
                        <Input type="text" onChange={this.rep2Change}></Input>
                    </label>



                    <label>
                        <div className="rep">{this.state.q3}</div>
                        <Input type="text" onChange={this.rep3Change}></Input>
                    </label>


                </form>


                <button onClick={this.handleSubmit.bind(this)}> Submit</button>

            </div>

        )

    }
}

export default Discussion;