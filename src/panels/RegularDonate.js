import React, {useState} from 'react';
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

const osName = platform();

const RegularDonate = props => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [target, setTarget] = useState('');
    const [description, setDescription] = useState('');

    return (<Panel id={props.id}>
        <PanelHeader
            left={<PanelHeaderButton onClick={props.go} data-to="type">
                {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
            </PanelHeaderButton>}
        >
            Регулярный сбор
        </PanelHeader>
        <FormLayout>
            <File before={<Icon28PictureOutline/>} controlSize="xl" mode="secondary">Загрузить обложку</File>
            <Input top="Название сбора" placeholder="Название сбора" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <Input type="number" top="Сумма в месяц, ₽" placeholder="Сколько нужно в месяц?" value={amount} onChange={(e) => setAmount(e.target.value)}/>
            <Input top="Цель" placeholder="Например, поддержка приюта" value={target} onChange={(e) => setTarget(e.target.value)}/>
            <Textarea top="Описание" placeholder="На что пойдут деньги и как они кому-то помогут?" value={description} onChange={(e) => setDescription(e.target.value)}/>
            <Select
                top="Куда получать деньги"
            >
                <option value="0">Счёт VK Pay 1234</option>
                <option value="1">Счёт VK Pay 51234</option>
                <option value="2">Счёт VK Pay 1232</option>
            </Select>
            <Select
                top="Автор"
            >
                <option value="0">Матвей Правосудов</option>
                <option value="1">Группа Матвея Правосудова</option>
            </Select>
            <Button size="xl" onClick={props.go} data-to="target-donate-step2">Далее</Button>
        </FormLayout>

    </Panel>);
};

RegularDonate.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default RegularDonate;
