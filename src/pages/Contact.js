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
                            <div className="call2action">
                                <p>
                                    Even if you're not ready to go all in, lets at the least have a chat. If you don't need me now, you may do later. Lets connect and then you can make the right choice for you and your idea.Talk soon!
                                </p>
                            </div>
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