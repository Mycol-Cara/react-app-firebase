import React, {Component} from 'react';
import firebase from "../Firebase"; // firebase setting file
import {Link} from "react-router-dom";
import ReactDom from 'react-dom';

class Create extends Component {
    constructor() {
        super();
        this.ref=firebase.firestone().collection('boards');
        this.state = {
            title:'',
            description: '',
            author: '',
        }
    };

    onChange = (e)=>{
        const state = this.state;
        state[e.target.name] = e.target.value;
    this.setState(state);
    };

    onSubmit = (e) => {
        e.preventDefault();
        const {title, description, author} =this.state;
        this.ref.add({
            title,
            description,
            author
        }).then( (docRef) => {
            this.setState({
                title:'',
                description:'',
                author:''
            });
            this.props.history.push("/");
        });
    };


    render (){
        const {title, description, author} = this.state;
        return (
            <div className="container">
                <h4>
                    <Link to="/"> Book List </Link>
                </h4>

                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="title"> Title:</label>
                        <input type="text"
                               className="form-control"
                               name="title"
                               value={title}
                               onChange={this.onChange}
                               placeholder="Title"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description"> Description </label>
                        <input type="text"
                               className="form-control"
                               name"description"
                               value={description}
                               onChange={this.onChange}
                               placeholder="Description" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="author"> Author </label>
                        <input type="text"
                               className="form-control"
                               name"author"
                               value={author}
                               onChange={this.onChange}
                               placeholder="Author"/>

                    </div>

                </form>

            </div>
        );
    };


}

export default Create;