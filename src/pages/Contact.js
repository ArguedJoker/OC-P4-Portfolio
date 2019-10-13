import React, { Component } from 'react';
import Box from '../components/Box/Box';
import Input from '../components/Input/Input';
import Textarea from '../components/Textarea/Textarea';

export default class Contact extends Component {
    render() {
        return (
            <div>
                <section className="section section-content contact-page">
                    <form autocmoplete="off" action="https://formspree.io/rpscdevelopments@gmail.com" method="post">
                        <Box>
                            <h1>Contact</h1>
                            <Input title="Name" name="name" required />
                            <Input title="Budget" name="_budget" />
                            <Input title="E-mail" name="_replyto"  required/>
                            <Textarea title="Content" name="content"  required/>
                            <button className="btn">Submit</button>
                        </Box>
                    </form>
                </section>
            </div>

        );
    }
}