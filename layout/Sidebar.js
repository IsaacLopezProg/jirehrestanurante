import React, { useState } from 'react';
import {
    Checkbox,
    Grid,
    Header,
    Icon,
    Menu,
    Segment,
    Sidebar,
} from 'semantic-ui-react';

import Nav from './Nav'

export default function Sidebars(props) {

    const [visible, setVisible] = useState(false);

    function prueba() {
        setVisible(true);

    }
    return (
        <>
            <Sidebar.Pushable as={Segment} style={{ border: "0", borderRadius: "0" }}>
                <Sidebar
                    as={Menu}
                    animation='overlay'
                    icon='labeled'
                    inverted
                    onHide={() => setVisible(false)}
                    vertical
                    visible={visible}
                    width='thin'
                >
                    <Menu.Item as='a'>
                        <Icon name='home' />
                        Home
                    </Menu.Item>
                    <Menu.Item as='a'>
                        <Icon name='gamepad' />
                        Games
                    </Menu.Item>
                    <Menu.Item as='a'>
                        <Icon name='camera' />
                        Channels
                    </Menu.Item>
                </Sidebar>

                <Sidebar.Pusher dimmed={visible}>
                    {props.children}
                    <Nav props={visible}></Nav>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        </>
    )
}
