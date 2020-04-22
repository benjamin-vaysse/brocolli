import React from "react"
import styled from "styled-components"
import Colors from "../rules/colors"


const Footer = ({themeContext}) => {
  const themeIcon = themeContext.isDark ? "☀️" : "🌙️" ;
  const themeText = themeContext.isDark ? "light" : "dark";
  return (
    <FooterContainer>
      <Text>© {new Date().getFullYear()}</Text>
      <DayNightToggle
        darkMode={themeContext.isDark}
        onClick={() => {
          themeContext.toggleDark();
        }
        }
        title={"toggle dark mode"}
      >
        {themeIcon} Switch to {themeText} mode
      </DayNightToggle>
    </FooterContainer>
  )
}
const FooterContainer = styled("footer")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Text = styled("div")``

const DayNightToggle = styled("button")`
  cursor: pointer;
  color: ${props => props.theme.isDark ? Colors.utility.white.default : Colors.utility.paragraph.default};
  border: 1px solid ${props => props.theme.isDark ? Colors.primary.orange.darker : Colors.utility.paragraph.default};
  padding: .625rem;
  border-radius: 5px;
  font-size: 1rem;
  background-color: inherit;
`

export default Footer
