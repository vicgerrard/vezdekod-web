import React from 'react';
import PropTypes from 'prop-types';
import {platform, IOS, usePlatform} from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon28TargetOutline from '@vkontakte/icons/dist/28/target_outline';
import Icon28CalendarOutline from '@vkontakte/icons/dist/28/calendar_outline';

import List from "@vkontakte/vkui/dist/components/List/List";
import Cell from "@vkontakte/vkui/dist/components/Cell/Cell";
import Banner from "@vkontakte/vkui/dist/components/Banner/Banner";
import './DonateType.css';

const osName = platform();

const DonateType = props => (
    <Panel id={props.id}>
        <PanelHeader
            left={<PanelHeaderButton onClick={props.go} data-to="home">
                {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
            </PanelHeaderButton>}
        >
            Тип сбора
        </PanelHeader>
        <div className="types-container">
            <Banner
                before={<Icon28TargetOutline width={24} height={24} fill="#3F8AE0"/>}
                header="Целевой сбор"
                subheader="Когда есть определенная цель!"
                asideMode="expand"
                size="s"
                mode="tint"
                onClick={props.go}
                data-to="target-donate-step1"
            />
            <Banner
                before={<Icon28CalendarOutline width={24} height={24} fill="#3F8AE0"/>}
                header="Регулярный сбор"
                subheader="Если помощь нужна ежемесячно"
                asideMode="expand"
                size="s"
                mode="tint"
                onClick={props.go}
                data-to="regular-donate"
            />
        </div>

    </Panel>
);

DonateType.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default DonateType;
