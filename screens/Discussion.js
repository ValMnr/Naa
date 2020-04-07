import React, { Component } from 'react';
import { Button, Badge, Input } from 'reactstrap';
import '../screens/Controle.css';
import naa from './images/naa.png';

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
            score: 0,
            show_rep1: false,
            show_rep2: false,
            show_rep3: false,
            show_button1: true, 
            show_button2: false,
            show_button3: false,
            show_button4: false,
            show_question2 : false, 
            show_question3: false,
            show_question4: false,
            answerString: '',
        }

        this.rep1Change = this.rep1Change.bind(this);
        this.rep2Change = this.rep2Change.bind(this);
        this.rep3Change = this.rep3Change.bind(this);

        this.handleshowrep1 = this.handleshowrep1.bind(this);
        this.handleshowrep2  = this.handleshowrep2.bind(this);

        this.postQuestion = this.postQuestion.bind(this);
        this.addSessionHumor = this.addSessionHumor.bind(this)
        this.fonctionfetch = this.fonctionfetch.bind(this)
    }

    handleshowrep1 (){
        this.setState({show_rep1 : true})
        this.setState({show_button1 : false})
        this.setState({show_button2: true})
        this.setState({show_question2: true })
    }
    handleshowrep2(){
        this.setState({show_rep2 : true})
        this.setState({show_button2 : false})
        this.setState({show_button3: true})
        this.setState({show_question3: true })

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
                    answersId: this.state.answerids,
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

            result = self.postQuestion('type1', self.state.rep1)
            return result;
        }).then(function (result) { // (**)
            result = self.postQuestion('type2', self.state.rep2)
            return result * 2;
        }).then(function (result) { // (***)
            result = self.postQuestion('type3', self.state.rep3)
            return result;
        }).then(function (result) {
            console.log('testtest')
            self.addSessionHumor()
        })




    }

    getAdvice() {
        const answer = this.state.rep1 + ',' +this.state.rep2 + ',' +this.state.rep3
        console.log(answer)
        fetch('http://127.0.0.1:3000/api/humor/getAdvice',
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              answerString: answer,        
            })
        })
        .then(function (response) {
            console.log("boubou" + response);
            })
        .catch((error) => {
            console.log(error);
        });
    }


    handleSubmit = async () => {

        
        this.sendAnswers()
        this.setState({show_rep3 : true})
        this.setState({show_button3 : false})
        this.setState({show_question4: true})
        this.setState({show_button4 : true})
       
        this.getAdvice()

    
     
    }

    fonctionfetch() {
        fetch('http://127.0.0.1:3000/api/humor/getQuestions')
            .then((response) => response.json())
            .then((response) => {
                if (response[0] !== undefined && response[1] !== undefined && response[2] !== undefined) {
                    var i=0;
                    for(i=0;i<response.length;i++){
                   

                        if (response[i].type === "type1"){
                            var qId1= response[i]._id
                            var qCnt1= response[i].content
                        }
                        else if (response[i].type === "type2"){
                            var qId2= response[i]._id
                            var qCnt2= response[i].content
                        }
                        else if (response[i].type === "type3"){
                            var qId3= response[i]._id
                            var qCnt3= response[i].content
                        }
                    }

                    this.setState({ q1: qCnt1, q2: qCnt2, q3: qCnt3 })
                    var questionsId = this.state.questionsId
                    questionsId.push(qId1)
                    questionsId.push(qId2)
                    questionsId.push(qId3)
                  
                    this.setState({ questionsId: questionsId }, () => { console.log(this.state) })
                    
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
            <div className="discussion baba">
                <div className="bar">
                    <h2> Discussion </h2>
                </div>


                <div className="naa"> 
                        <img className="avatar" src={naa} alt=""></img>
                        </div>
                
                <form >
                    <label>
            
                       <h2 className="bulle">{this.state.q1}</h2>                   
                        { this.state.show_button1? 
                        <Input type="text" onChange={this.rep1Change}></Input>: null }
                         { this.state.show_button1? 
                        <Button className= "chat_user" onClick= {this.handleshowrep1}> Envoyer</Button> 
                        : null }
                        { this.state.show_rep1? 
                        <h2 className="balle">{this.state.rep1}</h2>
                        : null }

                    </label>

                    <label>
                  
                    { this.state.show_question2 ? 
                            <h2 className="bulle ">{this.state.q2}</h2>: null }
                        
                        { this.state.show_button2? 
                        <Input type="text" onChange={this.rep2Change} ></Input>: null }
                        { this.state.show_button2? 
                        <Button className= "chat_user" onClick= {this.handleshowrep2}> Envoyer</Button> : null }
                        { this.state.show_rep2? 
                        <h2 className="balle">{this.state.rep2}</h2>
                        : null }
                    </label>

                    <label>
                    { this.state.show_question3 ? 
                         <h2 className="bulle">{this.state.q3}</h2>: null }
             
                        { this.state.show_button3? 
                        <Input type="text" onChange={this.rep3Change} ></Input>: null }
                        { this.state.show_button3? 
                        <Button className= "chat_user" onClick={this.handleSubmit.bind(this)}> Envoyer</Button> : null }
                         { this.state.show_rep3? 
                        <h2 className="balle">{this.state.rep3}</h2>
                        : null }
                    </label>

                    <label>
                    { this.state.show_question4? 
                         <h2 className="bulle"> blablabla </h2>: null }
             
                        { this.state.show_button4? 
                        <Input type="text"  ></Input>: null }
                        { this.state.show_button4? 
                        <Button className= "chat_user" > Envoyer</Button> : null }
                        
                    </label>



                </form>

           

            </div>

        )

    }
}

export default Discussion;