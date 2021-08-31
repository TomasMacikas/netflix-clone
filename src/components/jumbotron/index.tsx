import React from 'react';
import {
  Container,
  Inner,
  Pane,
  Title,
  SubTitle,
  Image,
  Item,
} from './styles/Jumbotron';
import 'normalize.css';

export interface JumbotronProps {
  direction: string;
}

export const Jumbotron: React.FC<JumbotronProps> = ({
  children,
  direction,
}) => {
  return (
    <Item>
      <Inner direction={direction}>{children}</Inner>;
    </Item>
  );
};

export const JumbotronContainer: React.FC<unknown> = ({ children }) => {
  return <Container>{children}</Container>;
};

export const JumbotronPane: React.FC<unknown> = ({ children }) => {
  return <Pane>{children}</Pane>;
};

export const JumbotronTitle: React.FC<unknown> = ({ children }) => {
  return <Title>{children}</Title>;
};

export const JumbotronSubTitle: React.FC<unknown> = ({ children }) => {
  return <SubTitle>{children}</SubTitle>;
};

interface JumbotronImageProps {
  src: string;
  alt: string;
}

export const JumbotronImage: React.FC<JumbotronImageProps> = ({ src, alt }) => {
  return <Image src={src} alt={alt} />;
};
