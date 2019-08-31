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

export default function SectionBasics() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState([24, 22]);
    const handleToggle = value => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    };
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
                            <span>Javascript</span>
                            <CustomLinearProgress
                                variant="determinate"
                                color="javascript"
                                value={80}
                            />
                            <span>Typescript</span>
                            <CustomLinearProgress
                                variant="determinate"
                                color="typescript"
                                value={70}
                            />
                            <span>React</span>
                            <CustomLinearProgress
                                variant="determinate"
                                color="react"
                                value={70}
                            />
                            <span>Angular</span>
                            <CustomLinearProgress
                                variant="determinate"
                                color="angular"
                                value={70}
                            />
                        </GridItem>
                        <GridItem xs={12} sm={6} md={4} lg={3}>
                            <div className={classes.title}>
                                <h3>TODO</h3>
                            </div>
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
                                            onClick={() => handleToggle(21)}
                                            checkedIcon={<Check className={classes.checkedIcon} />}
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                                checked: classes.checked,
                                                root: classes.checkRoot
                                            }}
                                        />
                                    }
                                    classes={{ label: classes.label, root: classes.labelRoot }}
                                    label="UX certificate"
                                />
                            </div>
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
                                            onClick={() => handleToggle(22)}
                                            checked={checked.indexOf(22) !== -1 ? true : false}
                                            checkedIcon={<Check className={classes.checkedIcon} />}
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                                checked: classes.checked,
                                                root: classes.checkRoot
                                            }}
                                        />
                                    }
                                    classes={{ label: classes.label, root: classes.labelRoot }}
                                    label="Learn the Cyrillic alphabet"
                                />
                            </div>
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
                                            onClick={() => handleToggle(23)}
                                            checked={checked.indexOf(23) !== -1 ? true : false}
                                            checkedIcon={<Check className={classes.checkedIcon} />}
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                                checked: classes.checked,
                                                root: classes.checkRoot
                                            }}
                                        />
                                    }
                                    classes={{ label: classes.label, root: classes.labelRoot }}
                                    label="Checkout Vue.js"
                                />
                            </div>
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
                                            onClick={() => handleToggle(24)}
                                            checked={checked.indexOf(24) !== -1 ? true : false}
                                            checkedIcon={<Check className={classes.checkedIcon} />}
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                                checked: classes.checked,
                                                root: classes.checkRoot
                                            }}
                                        />
                                    }
                                    classes={{ label: classes.label, root: classes.labelRoot }}
                                    label="Learn to appreciate React"
                                />
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
            </div>
        </div>
    );
}
