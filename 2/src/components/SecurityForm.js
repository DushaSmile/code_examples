import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { change } from 'redux-form';
import { setSettings } from '../actions/setSettingsActions';

import { api } from '../index';

// css
import './SecurityForm.css';

const SecurityForm = props => {
    const { handleSubmit, change, setSettings, loadingState } = props;
    const onSettingsChange = async (event, newValue, previousValue, name) => {
        event.preventDefault();
        event.target.disabled = true;
        console.log('request started');
        await setSettings(api, {
            name: name,
            value: newValue
        });
        console.log('request ended');
        event.target.disabled = false;
        change(name, newValue);
        console.log('formstate changed')
        handleSubmit()
    }

    return (
        <div className={ `${loadingState ? 'formLoaded' : 'formLoading'}` }>
            <div className="emailConfirmations">
                <h3>Подтверждение действий по E-mail</h3>
                <div className="inputs">
                    <div>
                        <Field
                            name="email_confirm_authorization"
                            component="input"
                            type="checkbox" />
                        <label>Вход</label>
                        <Field
                            name="email_confirm_withdraw"
                            component="input"
                            type="checkbox" />
                        <label>Вывод</label>
                    </div>
                </div>
            </div>
            <div className="emailNotifications">
                <h3>Оповещение о действиях по E-mail</h3>
                <div className="inputs">
                    <div>
                        <Field
                            name="email_notif_authorization"
                            component="input"
                            type="checkbox" />
                        <label>Вход</label>
                        <Field
                            name="email_notif_deposit"
                            component="input"
                            type="checkbox" />
                        <label>Депозит</label>
                    </div>
                    <div>
                        <Field
                            name="email_notif_withdraw"
                            component="input"
                            type="checkbox" />
                        <label>Выплата</label>
                        <Field
                            name="email_notif_payout"
                            component="input"
                            type="checkbox" />
                        <label>Вывод</label>
                    </div>
                    <div>
                        <Field 
                            name="email_notif_bonus"
                            component="input"
                            type="checkbox" />
                        <label>Бонус</label>
                        <Field 
                            name="email_notif_referral"
                            component="input"
                            type="checkbox" />
                        <label>Реф.начисление</label>
                    </div>
                    <div>
                        <Field
                            name="email_notif_penalty"
                            component="input"
                            type="checkbox" />
                        <label>Пенальти</label>
                        <Field
                            name="email_notif_ticket"
                            component="input"
                            type="checkbox" />
                        <label>Ответ по тикету</label>
                    </div>
                    <div>
                        <Field
                            name="email_notif_verification"
                            component="input"
                            type="checkbox" />
                        <label>Верификация</label>
                        <Field
                            name="email_notif_sms"
                            component="input"
                            type="checkbox" />
                        <label>СМС</label>
                    </div>
                </div>
            </div>
            <div className="smsNotifications">
                <h3>Оповещения о действиях по СМС</h3>
                <div className="inputs">
                    <div>
                        <Field
                            name="sms_notif_authorization"
                            component="input"
                            type="checkbox" />
                        <label>Вход</label>
                        <Field
                            name="sms_notif_deposit"
                            component="input"
                            type="checkbox" />
                        <label>Депозит</label>
                    </div>
                    <div>
                        <Field
                            name="sms_notif_withdraw"
                            component="input"
                            type="checkbox" />
                        <label>Выплата</label>
                        <Field
                            name="sms_notif_payout"
                            component="input"
                            type="checkbox" />
                        <label>Вывод</label>
                    </div>
                    <div>
                        <Field 
                            name="sms_notif_bonus"
                            component="input"
                            type="checkbox" />
                        <label>Бонус</label>
                        <Field 
                            name="sms_notif_referral"
                            component="input"
                            type="checkbox" />
                        <label>Реф.начисление</label>
                    </div>
                    <div>
                        <Field
                            name="sms_notif_penalty"
                            component="input"
                            type="checkbox" />
                        <label>Пенальти</label>
                        <Field
                            name="sms_notif_ticket"
                            component="input"
                            type="checkbox" />
                        <label>Ответ по тикету</label>
                    </div>
                    <div>
                        <Field
                            name="sms_notif_verification"
                            component="input"
                            type="checkbox" />
                        <label>Верификация</label>
                        <Field
                            name="sms_notif_sms"
                            component="input"
                            type="checkbox" />
                        <label>СМС</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

const connectedReduxForm = reduxForm({
    form: 'SecurityForm',
    enableReinitialize: true
})(SecurityForm);

export default connect(
    state => ({
        initialValues: state.settings.values
    }),
    dispatch => {
        return {
            change: (fieldName, newValue) => {
                dispatch(
                    change('SecurityForm', fieldName, newValue)
                )
            },
            setSettings: (url, value) => {
                dispatch(
                    setSettings(url, value)
                )
            }
        }
    }
)(connectedReduxForm);