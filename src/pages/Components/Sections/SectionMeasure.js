import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
// @material-ui/icons
import Check from "@material-ui/icons/Check";
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import CustomLinearProgress from "../../../components/CustomLinearProgress/CustomLinearProgress.js";

import styles from "../../../assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

const skillsArr = [
    {
        name: 'Javascript',
        lvl: 80
    },
    {
        name: 'Typescript',
        lvl: 70
    },
    {
        name: 'React',
        lvl: 70
    },
    {
        name: 'Angular',
        lvl: 65
    }
];
const todosArr = [
    {
        name: 'UX Certificate',
        checked: false
    },
    {
        name: 'Check out Vue.js',
        checked: false
    },
    {
        name: 'Learn the Cyrillic alphabet',
        checked: true
    },
    {
        name: 'Understand the React fanboys',
        checked: true
    }
];
export default function SectionBasics() {
    const classes = useStyles();

    return (
        <div className={classes.sections}>
            <div className={classes.container}>
                <div className={classes.title}>
                    <h2>Knowledge</h2>
                </div>
                <div className={classes.space70} />
                <div id="progress">
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={6}>
                            <div className={classes.title}>
                                <h3>Skills</h3>
                            </div>
                            {skillsArr.map(skill => {
                                return <>
                                    <span>{skill.name}</span>
                                    <CustomLinearProgress
                                        variant="determinate"
                                        color={skill.name.toLocaleLowerCase()}
                                        value={skill.lvl}
                                    />
                                </>
                            })}
                        </GridItem>
                        <GridItem xs={12} sm={6} md={4} lg={3}>
                            <div className={classes.title}>
                                <h3>TODO</h3>
                            </div>
                            {todosArr.map((todo, index) => {
                                return <>
                                    <div
                                        className={
                                            classes.checkboxAndRadio +
                                            " " +
                                            classes.checkboxAndRadioHorizontal
                                        }
                                    >
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    tabIndex={-1}
                                                    checkedIcon={<Check className={classes.checkedIcon} />}
                                                    icon={<Check className={classes.uncheckedIcon} />}
                                                    classes={{
                                                        checked: classes.checked,
                                                        root: classes.checkRoot
                                                    }}
                                                    checked={todo.checked}
                                                />
                                            }
                                            classes={{ label: classes.label, root: classes.labelRoot }}
                                            label={todo.name}
                                        />
                                    </div>
                                </>
                            })}
                        </GridItem>
                    </GridContainer>
                </div>
            </div>
        </div>
    );
}
