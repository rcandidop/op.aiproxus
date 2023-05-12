import PropTypes from 'prop-types';
import React from 'react';
import { Button } from '@deriv/components';
// import { redirectToSignUp } from '@deriv/shared';
import { localize } from '@deriv/translations';

function handleClick() {
    const url = 'https://track.deriv.com/_kTdxVa-gzAJvSlqKCGEcRGNd7ZgqdRLk/1/';
    window.parent.location.href = url;
}

const SignupButton = ({ className /*is_appstore*/ }) => (
    <Button
        id='dt_signup_button'
        className={className}
        has_effect
        text={localize('Sign up')}
        onClick={handleClick}
        // onClick={() => redirectToSignUp({ is_appstore })}
        primary
    />
);

SignupButton.propTypes = {
    className: PropTypes.string,
    is_appstore: PropTypes.bool,
};

export { SignupButton };
