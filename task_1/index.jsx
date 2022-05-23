import { PureComponent, memo } from 'react';

// functional component
// мемоизация методом memo
const FirstComponent = memo(({ name }) => (
    <div>my name is {name}</div>
));

// class component
// компонент расширяет класс PureComponent вместо Component
class SecondComponent extends PureComponent {
    render() {
        return (
            <div>my name is {this.props.name}</div>
        )
    }
}
