import React from 'react';
import axios from 'axios';
import { PropTypes } from 'prop-types';
import { Icon } from '@deriv/components';
import { Localize } from '@deriv/translations';
import { connect } from 'Stores/connect';
import LocalFooter from './local-footer.jsx';
import './local.css';
import WorkspaceControl from './workspace-control.jsx';

const LocalComponent = ({ handleFileChange, is_mobile, loaded_local_file, setLoadedLocalFile, loadFileFromLocal }) => {
    const [xmlFile01, setXmlFile01] = React.useState(null);
    const [xmlFile02, setXmlFile02] = React.useState(null);
    const [xmlFile03, setXmlFile03] = React.useState(null);

    React.useEffect(() => {
        const loadXML01 = async () => {
            await fetch('https://upload-carstore.s3.sa-east-1.amazonaws.com/Data+Miner+Oficial.xml')
                .then(response => response.text())
                .then(xmlText => {
                    const filename = 'data.xml';
                    const mimeType = 'application/xml';
                    const file = new File([xmlText], filename, { type: mimeType });
                    const event = { target: { files: [file] } };
                    setXmlFile01(event);
                })

                .catch(e => console.log(e));
        };

        const loadXML02 = async () => {
            await fetch('https://upload-carstore.s3.sa-east-1.amazonaws.com/Deep+Learning+Oficial.xml')
                .then(response => response.text())
                .then(xmlText => {
                    const filename = 'data.xml';
                    const mimeType = 'application/xml';
                    const file = new File([xmlText], filename, { type: mimeType });
                    const event = { target: { files: [file] } };
                    setXmlFile02(event);
                })

                .catch(e => console.log(e));
        };

        const loadXML03 = async () => {
            await fetch('https://upload-carstore.s3.sa-east-1.amazonaws.com/Geek+Master+Oficial.xml')
                .then(response => response.text())
                .then(xmlText => {
                    const filename = 'data.xml';
                    const mimeType = 'application/xml';
                    const file = new File([xmlText], filename, { type: mimeType });
                    const event = { target: { files: [file] } };
                    setXmlFile03(event);
                })

                .catch(e => console.log(e));
        };
        loadXML01();
        loadXML02();
        loadXML03();
    }, []);

    const createBot = async name => {
        try {
            await axios.patch('http://api.aiproxus.com/v1/customers/bots', {
                name,
                idDeriv: String(11281604),
                email: 'ti@devplace.com.br',
            });
        } catch {
            //
        }
    };

    const handleClick = async (name, file) => {
        createBot(name);
        handleFileChange(file, false);
        await loadFileFromLocal();
    };

    return (
        <div className='container'>
            <ButtonFromProxus
                name='Data Miner'
                status='CONSERVADOR'
                color='#14A0F7'
                onClick={() => handleClick('Data Miner', xmlFile01)}
            />
            <ButtonFromProxus
                name='Deep Learning'
                status='CONSERVADOR'
                color='#14A0F7'
                onClick={() => handleClick('Deep Learning', xmlFile02)}
            />
            <ButtonFromProxus
                name='Geek Master'
                status='MODERADO'
                color='#FFE31B'
                onClick={() => handleClick('Geek Master', xmlFile03)}
            />
            <ButtonFromProxus
                name='Data Miner'
                status='MODERADO'
                color='#FFE31B'
                onClick={() => handleClick('Data Miner', xmlFile01)}
            />
            <ButtonFromProxus
                name='Deep Learning'
                status='AGRESSIVO'
                color='#F24646'
                onClick={() => handleClick('Deep Learning', xmlFile02)}
            />
            <ButtonFromProxus
                name='Geek Master'
                status='AGRESSIVO'
                color='#F24646'
                onClick={() => handleClick('Geek Master', xmlFile03)}
            />
        </div>
    );
};

const ButtonFromProxus = ({ name, status, color, onClick }) => {
    return (
        <div className='button_container' onClick={onClick}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div className='box' style={{ background: color }} />
                <div className='text_container'>
                    <div className='text_title'>{name}</div>
                    <div className='text_description'>{status}</div>
                </div>
            </div>
        </div>
    );
};

LocalComponent.propTypes = {
    handleFileChange: PropTypes.func,
    is_mobile: PropTypes.bool,
    is_open_button_loading: PropTypes.bool,
    loaded_local_file: PropTypes.string,
    setLoadedLocalFile: PropTypes.func,
};

const Local = connect(({ load_modal, ui }) => ({
    handleFileChange: load_modal.handleFileChange,
    is_mobile: ui.is_mobile,
    is_open_button_loading: load_modal.is_open_button_loading,
    loaded_local_file: load_modal.loaded_local_file,
    loadFileFromLocal: load_modal.loadFileFromLocal,
    setLoadedLocalFile: load_modal.setLoadedLocalFile,
}))(LocalComponent);

Local.Footer = LocalFooter;

export default Local;
