import React, {Component} from 'react';


class App extends Component{

    constructor(){

        super();
        this.state={
            title:'',
            description: ''
        };
        this.addtask=this.addtask.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }

    addtask(e){
       fetch('/api/tasks', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json'
            }
        })
        .then(res=>res.json()).then(data=>{
            console.log(data)
            M.toast({html: 'Task Saved'})
            this.setState({title:'', description:''})
        })
        .catch(err=>console.error(err))
        e.preventDefault();
    }

    handleChange(e){
         const {name ,value} =e.target;
        this.setState({
            [name]: value
        })
         //this.handleChange=this.handleChange.bind(this);
    }

    render(){
        return(
            <div>
                <nav className="light-blue darken-4">
                    <div className="container">
                        <a className="brand-logo" href="/">Mern</a>
                    </div>
                </nav>
            
            <div className="container m4 l3" >
                <div className="row">
                    <div className="col s5">
                        <div className="card">
                            <div className="card-conten">
                                <form onSubmit={this.addtask}>
                                    <div className="row" >
                                        <div className="input-field col s12">
                                            <input type="text" name='title' onChange={this.handleChange} value={this.state.title} placeholder="Task Title"></input>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <textarea placeholder="Task Description" onChange={this.handleChange} value={this.state.description} name="description"className="materialize-textarea"></textarea>
                                        </div>
                                    </div>
                                    <button className="btn light-blue darken-4" type="submit">Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col s7">

                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default App;