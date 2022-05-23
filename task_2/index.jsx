import { useState, Fragment, memo, useCallback } from 'react';

const MainComponent = () => {
    const [ _, updateComponent ] = useState(); // change state for force component updating

    // функция, передаваемая в пропсы, мемоизируется
    const makeLog = useCallback(
        () => console.log('hi from MainComponent'),
        []
    ); // function to make a log from MainComponent

    return (
        <Fragment>
            <button onClick={updateComponent}>update MainComponent</button>
            <ChildComponent makeLog={makeLog} />
        </Fragment>
    );
};

// memoized component
const ChildComponent = memo(({ makeLog }) => (
    <button onClick={makeLog}>say Hi from MainComponent</button>
));
