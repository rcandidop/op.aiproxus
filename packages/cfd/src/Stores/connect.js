import { useObserver } from 'mobx-react';
import React from 'react';

const isClassComponent = Component =>
    !!(typeof Component === 'function' && Component.prototype && Component.prototype.isReactComponent);

export const MobxContent = React.createContext(null);

function injectStorePropsToComponent(propsToSelectFn, BaseComponent) {
    const Component = own_props => {
        const store = React.useContext(MobxContent);

        let ObservedComponent = BaseComponent;

        if (isClassComponent(BaseComponent)) {
            const FunctionalWrapperComponent = props => <BaseComponent {...props} />;
            ObservedComponent = FunctionalWrapperComponent;
        }

        //  This is a temporary approach to pass stores from different packages
        const context = own_props.context || store;
        return useObserver(() => ObservedComponent({ ...own_props, ...propsToSelectFn(context, own_props) }));
    };

    Component.displayName = BaseComponent.name;
    return Component;
}

export const MobxContentProvider = ({ store, children }) => {
    return <MobxContent.Provider value={{ ...store, mobxStores: store }}>{children}</MobxContent.Provider>;
};

export const connect = propsToSelectFn => Component => injectStorePropsToComponent(propsToSelectFn, Component);
