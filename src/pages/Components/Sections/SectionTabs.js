import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
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
                    tabName: "First encounter",
                    tabIcon: Face,
                    tabContent: (
                      <p className={classes.textCenter}>
                        My first real encounter with JavaScript was during my internship in
                        the last semester at university. Within 4 month, me and two of my classmates
                        were supposed to develop an hybrid mobile application with Ionic 2. So it's
                        fair to say I started to learn JavaScript through Angular 2 (... yeah I know).
                        We got the hang of it pretty and the usage of interpolation blew our minds.
                        <i>"This is so much better than that jQuery course"</i>
                      </p>
                    )
                  },
                  {
                    tabName: "Messages",
                    tabIcon: Chat,
                    tabContent: (
                      <p className={classes.textCenter}>
                        I've always had an interest of programming, so of course I continued coding
                        Ionic applications on my free time. Writing code in Typescript and Angular felt natural
                        coming from my pretty C#-focused education, structruring the code
                        in a some what MVC fashion made sence even here.
                      </p>
                    )
                  },
                  {
                    tabName: "Settings",
                    tabIcon: Build,
                    tabContent: (
                      <p className={classes.textCenter}>
                        think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. So when you get something that has
                        the name Kanye West on it, it’s supposed to be pushing
                        the furthest possibilities. I will be the leader of a
                        company that ends up being worth billions of dollars,
                        because I got the answers. I understand culture. I am
                        the nucleus.
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
                    tabName: "First encounter",
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
                    tabName: "Updates",
                    tabContent: (
                      <p className={classes.textCenter}>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. I will be the leader of a company
                        that ends up being worth billions of dollars, because I
                        got the answers. I understand culture. I am the nucleus.
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at.
                      </p>
                    )
                  },
                  {
                    tabName: "History",
                    tabContent: (
                      <p className={classes.textCenter}>
                        
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
