import React from "react";
import propType from "prop-types";
import styled from "styled-components";

const Container = styled.View`
  margin-vertical: 20px;
`;

const Title = styled.Text`
  color: white;
  font-weight: 600;
  padding-left: 20px;
  margin-bottom: 15px;
`;

const ScrollView = styled.ScrollView`
  padding-left: 20px;
`;

const Section = ({ title, children,horizontal=true }) => (
  //children을 렌더링하는 컴포넌트가 있고
  //React는 기본적으로 chilren에 뭘주든 <Section>컴포넌트내용 = children

  <Container>
    <Title>{title}</Title>
    <ScrollView horizontal={horizontal}>{children}</ScrollView>
  </Container>
);

Section.propType = {
  children: propType.oneOfType([
    propType.arrayOf(propType.node),
    propType.node
  ]),
  title: propType.string.isRequired,
  horizontal :propType.bool
};

export default Section;
