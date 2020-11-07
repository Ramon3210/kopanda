import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import ReactPlayer from 'react-player'
    
                class VideosView extends Component {
                    state = {};
                    render() {
                      return (
                        <div className="css-video">
                          <Link to="/">
                            <Button
                              variant="contained"
                              color="default"
                              size="small"
                              startIcon={<HomeIcon />}
                            >
                              Regresar
                            </Button>
                          </Link>
                          <div>
                                <ReactPlayer
                                      url='https://youtu.be/979i74348yY'
                                      className='react-player'
                                      playing
                                      width='100%'
                                      height='100%'
                                      
                                    />
                                </div>
                              
                              <ReactPlayer
                                      url=' https://youtu.be/979i74348yY'
                                      className='react-player'
                                      playing
                                      width='100%'
                                      height='100%'
                                      
                                    />
                                </div>
                              
                            
                              
                        </div>

                      );
                    }
                  }




export default VideosView;
