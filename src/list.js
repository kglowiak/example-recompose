import React from 'react';
import randomString from 'randomstring';
import { compose, withHandlers, withProps, withState } from 'recompose';
import { ListLayout } from './layout/list-layout'

const withListHandlers = withHandlers({
  addRandomElement: ({ setItems, listItems }) => () => {
    setItems([...listItems, randomString.generate()])
  },
}) 

const withListProps = withProps(props => ({
  exampleProp: 'example ' + 1,
})); 


const List = compose(
  withState('listItems', 'setItems', []),
  withListHandlers,
  withListProps,
)(ListLayout);

export { List }

