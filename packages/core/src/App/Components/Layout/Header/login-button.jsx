import PropTypes from 'prop-types';
import React from 'react';
import { Button } from '@deriv/components';
// import { redirectToLogin } from '@deriv/shared';
import { /*getLanguage,*/ localize } from '@deriv/translations';

function handleClick() {
    const url = 'https://oauth.deriv.com/oauth2/authorize?app_id=35934&l=PT&brand=proxus';
    window.parent.location.href = url;
}

const LoginButton = ({ className }) => (
    <Button
        id='dt_login_button'
        className={className}
        has_effect
        text={localize('Log in')}
        onClick={handleClick}
        // onClick={() => redirectToLogin(false, getLanguage())}
        tertiary
    />
);

LoginButton.propTypes = {
    className: PropTypes.string,
};

export { LoginButton };
