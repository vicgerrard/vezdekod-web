import React from 'react';
import PropTypes from 'prop-types';
import {platform, IOS, usePlatform, FormLayout, Textarea} from '@vkontakte/vkui';
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
import File from "@vkontakte/vkui/dist/components/File/File";
import Icon28PictureOutline from "@vkontakte/icons/dist/28/picture_outline";
import Input from "@vkontakte/vkui/dist/components/Input/Input";
import Select from "@vkontakte/vkui/dist/components/Select/Select";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import FormLayoutGroup from "@vkontakte/vkui/dist/components/FormLayoutGroup/FormLayoutGroup";
import Radio from "@vkontakte/vkui/dist/components/Radio/Radio";

const osName = platform();

const TargetDonateStep2 = props => (
    <Panel id={props.id}>
        <PanelHeader
            left={<PanelHeaderButton onClick={props.go} data-to="target-donate-step1">
                {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
            </PanelHeaderButton>}
        >
            Дополнительно
        </PanelHeader>
        <FormLayout>
            <Select
                top="Автор"
                name="purpose"
            >
                <option value="0">Матвей Правосудов</option>
                <option value="1">Счёт VK Pay 51234</option>
                <option value="2">Счёт VK Pay 1232</option>
            </Select>
            <FormLayoutGroup top="Сбор завершится">
                <Radio name="radio" value="1" defaultChecked>Когда соберём сумму</Radio>
                <Radio name="radio" value="2">В определённую дату</Radio>
            </FormLayoutGroup>
            <Input type="date" top="Дата окончания" placeholder="Выберите дату" />
            <Button size="xl">Создать сбор</Button>
        </FormLayout>

    </Panel>
);

TargetDonateStep2.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default TargetDonateStep2;
