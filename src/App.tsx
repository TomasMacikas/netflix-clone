import React from 'react';
import {
  Jumbotron,
  JumbotronContainer,
  JumbotronImage,
  JumbotronPane,
  JumbotronSubTitle,
  JumbotronTitle,
} from './components/jumbotron';
import jumboData from './fixtures/jumbo.json';

export const App = () => {
  return (
    <JumbotronContainer>
      {jumboData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <JumbotronPane>
            <JumbotronTitle>{item.title}</JumbotronTitle>
            <JumbotronSubTitle>{item.subTitle}</JumbotronSubTitle>
          </JumbotronPane>
          <JumbotronPane>
            <JumbotronImage src={item.image} alt={item.alt} />
          </JumbotronPane>
        </Jumbotron>
      ))}
    </JumbotronContainer>
  );
};
