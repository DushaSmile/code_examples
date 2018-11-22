// Redux Saga
import { call, put, takeEvery } from 'redux-saga/effects';

// Actions
import { setSettingsSuccess, setSettingsFailure } from '../actions/setSettingsActions';
import { SET_SETTINGS_REQUEST } from '../actions/types';

// AJAX POST request to API
const setSettingsAjax = async (url, data) => {
    let body = {};
    switch(data.name) {
        case 'email_confirm_authorization':
            body = {
                emailСonfirmations: {
                    authorization: data.value
                }
            }
            break;
        case 'email_confirm_withdraw':
            body = {
                emailСonfirmations: {
                    withdraw: data.value
                }
            }
            break;
        case 'email_notif_authorization':
            body = {
                emailNotifications: {
                    authorization: data.value
                }
            }
            break;
        case 'email_notif_deposit':
            body = {
                emailNotifications: {
                    deposit: data.value
                }
            }
            break;
        case 'email_notif_withdraw':
            body = {
                emailNotifications: {
                    withdraw: data.value
                }
            }
            break;
        case 'email_notif_payout':
            body = {
                emailNotifications: {
                    payout: data.value
                }
            }
            break;
        case 'email_notif_bonus':
            body = {
                emailNotifications: {
                    bonus: data.value
                }
            }
            break;
        case 'email_notif_referral':
            body = {
                emailNotifications: {
                    referral: data.value
                }
            }
            break;
        case 'email_notif_penalty':
            body = {
                emailNotifications: {
                    penalty: data.value
                }
            }
            break;
        case 'email_notif_ticket':
            body = {
                emailNotifications: {
                    ticket: data.value
                }
            }
            break;
        case 'email_notif_verification':
            body = {
                emailNotifications: {
                    verification: data.value
                }
            }
            break;
        case 'email_notif_sms':
            body = {
                emailNotifications: {
                    sms: data.value
                }
            }
            break;
        case 'sms_notif_authorization':
            body = {
                smsNotifications: {
                    authorization: data.value
                }
            }
            break;
        case 'sms_notif_deposit':
            body = {
                smsNotifications: {
                    deposit: data.value
                }
            }
            break;
        case 'sms_notif_withdraw':
            body = {
                smsNotifications: {
                    withdraw: data.value
                }
            }
            break;
        case 'sms_notif_payout':
            body = {
                smsNotifications: {
                    payout: data.value
                }
            }
            break;
        case 'sms_notif_bonus':
            body = {
                smsNotifications: {
                    bonus: data.value
                }
            }
            break;
        case 'sms_notif_referral':
            body = {
                smsNotifications: {
                    referral: data.value
                }
            }
            break;
        case 'sms_notif_penalty':
            body = {
                smsNotifications: {
                    penalty: data.value
                }
            }
            break;
        case 'sms_notif_ticket':
            body = {
                smsNotifications: {
                    ticket: data.value
                }
            }
            break;
        case 'sms_notif_verification':
            body = {
                smsNotifications: {
                    verification: data.value
                }
            }
            break;
        case 'sms_notif_sms':
            body = {
                smsNotifications: {
                    sms: data.value
                }
            }
            break;
        default:
    }
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    return response.json();
};

// Worker
function* setSettingsWorker(action) {
    try {
        const data = yield call(setSettingsAjax, action.url, action.payload);
        console.log('request finished');
        if (data.success) {
            const newState = {
                name: action.payload.name,
                value: action.payload.value
            };
            yield put(setSettingsSuccess(newState));
        } else {
            yield put(setSettingsFailure('not success'));
            console.log(data);
        }
    } catch (e) {
        yield put(setSettingsFailure(e));
        console.log(e);
    }
}

// Watcher
export default function* setSettingsWatcher() {
    yield takeEvery(SET_SETTINGS_REQUEST, setSettingsWorker);
}