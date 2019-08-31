import React from 'react';
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// core components
import Header from '../components/Header/Header.js';
import Footer from '../components/Footer/Footer.js';
import Button from '../components/CustomButtons/Button.js';
import GridContainer from '../components/Grid/GridContainer.js';
import GridItem from '../components/Grid/GridItem.js';
import HeaderLinks from '../components/Header/HeaderLinks.js';
import Parallax from '../components/Parallax/Parallax.js';

import profile from '../assets/img/faces/me_cafe.jpg';
import styles from '../assets/jss/material-kit-react/views/profilePage.js';
import SectionPills from './Components/Sections/SectionPills';
import SectionTabs from "./Components/Sections/SectionTabs";

const useStyles = makeStyles(styles);

const ProfilePage = (props) => {
    const classes = useStyles();
    const { ...rest } = props;
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
        <div>
            <Header
                color='transparent'
                brand='Christopher Erik Bengtsson'
                rightLinks={<HeaderLinks />}
                fixed
                changeColorOnScroll={{
                    height: 330,
                    color: 'white'
                }}
                {...rest}
            />
            <Parallax small filter image={require('../assets/img/coding_bg.jpg')} />
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div>
                    <div className={classes.container}>
                        <GridContainer justify='center'>
                            <GridItem xs={12} sm={12} md={6}>
                                <div className={classes.profile}>
                                    <div>
                                        <img src={profile} alt='...' className={imageClasses} />
                                    </div>
                                    <div className={classes.name}>
                                        <h3 className={classes.title}>Christopher Bengtsson</h3>
                                        <h4>⚡ Frontend Developer ⚡</h4>
                                        <Button
                                            justIcon
                                            link
                                            className={classes.margin5}
                                            href='https://www.github.com/chbe'
                                            target='_blank'>
                                            <i className={'fab fa-github'} />
                                        </Button>
                                        <Button
                                            justIcon
                                            link
                                            className={classes.margin5}
                                            href='https://www.linkedin.com/in/christopher-bengtsson-406a9479'
                                            target='_blank'>
                                            <i className={'fab fa-linkedin'} />
                                        </Button>
                                        <Button
                                            justIcon
                                            link
                                            className={classes.margin5}
                                            href='https://www.facebook.com/bengtsson.christopher'
                                            target='_blank'>
                                            <i className={'fab fa-facebook'} />
                                        </Button>
                                    </div>
                                </div>
                            </GridItem>
                        </GridContainer>
                        <div className={classes.description}>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. {' '}
                            </p>
                        </div>
                        {/* <GridContainer justify='center'>
                            <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                                <SectionPills />
                            </GridItem>
                        </GridContainer> */}
                    </div>
                </div>
                <SectionTabs />
                <SectionPills />
            </div>
            <Footer />
        </div>
    )
}

export default ProfilePage
