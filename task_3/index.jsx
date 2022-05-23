import { useState, useMemo, Fragment, memo } from 'react';

const MainComponent = ({
    user = { name: 'unknown', age: null } // default value for `props.user`
}) => {
    const [_, updateComponent] = useState(); // change state for force component updating
    // данные пользователя мемоизируются на основании примитивных значений полей
    const memoizedUser = useMemo(() => ({ ...user }), [user.name, user.age]);

    return (
        <Fragment>
            <button onClick={updateComponent}>update MainComponent</button>
            {/* в пропсы передается мемоизированное значение */}
            <ChildComponent user={memoizedUser} />
        </Fragment>
    );
};

// memoized component
const ChildComponent = memo(({ user: { name, age } }) => {
    return (
        <div>user name: {name}, user age: {age}</div>
    );
});
