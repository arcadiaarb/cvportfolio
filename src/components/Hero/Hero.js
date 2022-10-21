import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        My name is Arcadia_kid i am a full stack Web developer having 1+ year of experience in my field and a passionate Software Engineering student, who's always dedicated to his work.
         I can help you with all the sides of your project, verifying good UI/UX design and back-end. I am also a Proffessional community manager with community relationship skills
        I can help you grow/manage your business and ideas. </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;