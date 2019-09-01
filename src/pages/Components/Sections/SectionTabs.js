import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Timeline from "@material-ui/icons/Timeline";
import Build from "@material-ui/icons/Build";
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import CustomTabs from "../../../components/CustomTabs/CustomTabs.js";

import styles from "../../../assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionTabs() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="nav-tabs">
          <h3>Javascript by heart</h3>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h3>
                <small>❤️ Angular ❤️</small>
              </h3>
              <CustomTabs
                headerColor="angular"
                tabs={[
                  {
                    tabIcon: Face,
                    tabContent: (
                      <p className={classes.textCenter}>
                        My first real encounter with JavaScript was during my internship in
                        the last semester at university. Within 4 month, me and two of my classmates
                        were supposed to develop an hybrid mobile application with Ionic 2. So it's
                        fair to say I started to learn JavaScript through Angular 2 (... yeah I know).
                        We got the hang of it pretty and the usage of interpolation blew our minds.
                        <i>"This is so much better than that jQuery course" </i>
                      </p>
                    )
                  },
                  {
                    tabIcon: Timeline,
                    tabContent: (
                      <p className={classes.textCenter}>
                        I've always had an interest of programming, so of course I continued coding
                        Ionic applications on my free time. Writing code in Typescript and Angular felt natural
                        coming from my pretty C# focused education, structruring the code
                        in a some what MVC fashion made sence even here.
                      </p>
                    )
                  },
                  {
                    tabIcon: Build,
                    tabContent: (
                      <p className={classes.textCenter}>
                        The lazy part of me really like Angular since it has more functionality
                        out of the box, I don't have to think about what routing library to use and
                        all these short terminal commands just makes life a little bit easier.
                        <i>ng add @angular/pwa </i>. Boom, now you have a PWA, kinda. Having large
                        projects that will scale, Angular will be there for me.
                      </p>
                    )
                  }
                ]}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <h3>
                <small>💙 React 💙</small>
              </h3>
              <CustomTabs
                headerColor="react"
                tabs={[
                  {
                    tabIcon: Face,
                    tabContent: (
                      <p className={classes.textCenter}>
                        While I was falling in love with Angular there was this fuzz about Facebooks own
                        framework, called React. I remember taking a 1s look into it and throught
                        <i>What is this hipster s***, writing HTML, CSS and JavaScript in one file?? </i>
                        I was even coding in StencilJS before gicing React a real chance. Haven't
                         heard of it? Exactly. But after playing around with StencilJS
                        and getting the idea of states and props, it turned out that JSX wasn't
                        that bad after all...
                      </p>
                    )
                  },
                  {
                    tabIcon: Timeline,
                    tabContent: (
                      <p className={classes.textCenter}>
                        I think fair to say that Angular have a steeper learning
                        curve than React. But, I also believe you have to be a more
                        experienced developer before you can code more complex React
                        applications. Here you kinda have to figure out the "M" and the "C"
                        in MVC by yourself. React doesn't offer as strong opinions about
                        how the projects should be structured.
                      </p>
                    )
                  },
                  {
                    tabIcon: Build,
                    tabContent: (
                      <p className={classes.textCenter}>
                        Maybe I wasn't so wrong about calling React a
                        hipster framework after all... <br />
                        But here everything just works. No struggling with modules, you make
                        a component and then you use it, dead simple. Somehow, maybe because
                        of this, it makes more sence creating reusable components in React.
                        <i>Yes I know, Angular is component based, shhh. </i>
                        I'm even turned, JSX is awesome. Styled components are awesome. React. Is. Awesome.
                      </p>
                    )
                  }
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
