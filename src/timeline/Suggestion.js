import React from 'react';
import './Suggestion.css';
import { Avatar } from '@mui/material';

function Suggestion() {
    return  <div className='suggetions'>
            <div className='suggestions__title'>Suggestions for you</div>
             <div className='suggestions__usernames'>
                <div className='suggestions__username'>
                    <div className='username__left'>
                        <span className='avatar'>
                            <Avatar>R</Avatar>
                        </span>
                        <div className='username__info'>
                            <span className='username'>tnqlsdld__</span>
                            <span className='relation'>New to instagram</span>
                        </div>
                        <button className='follow__button'> Follow </button>
                    </div>
                </div>
                     <div className='suggestions__username'>
                        <div className='username__left'>
                            <span className='avatar'>
                                <Avatar>R</Avatar>
                            </span>
                            <div className='username__info'>
                                <span className='username'>tnqlsdld__</span>
                                <span className='relation'>New to instagram</span>
                            </div>
                                <button className='follow__button'> Follow </button>
                            </div>
                        </div>
                        <div className='suggestions__username'>
                        <div className='username__left'>
                            <span className='avatar'>
                                <Avatar>R</Avatar>
                            </span>
                            <div className='username__info'>
                                <span className='username'>tnqlsdld__</span>
                                <span className='relation'>New to instagram</span>
                            </div>
                        <button className='follow__button'> Follow </button>
                    </div>
                </div>
                        <div className='suggestions__username'>
                        <div className='username__left'>
                            <span className='avatar'>
                                <Avatar>R</Avatar>
                            </span>
                            <div className='username__info'>
                                <span className='username'>tnqlsdld__</span>
                                <span className='relation'>New to instagram</span>
                            </div>
                            <button className='follow__button'> Follow </button>
                            </div>
                        </div>
                    </div>
                </div>
};

export default Suggestion;