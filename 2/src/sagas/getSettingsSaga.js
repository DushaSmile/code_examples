// Redux Saga
import { call, put, takeLatest } from 'redux-saga/effects';

// Actions
import { getSettingsSuccess, getSettingsFailure } from '../actions/getSettingsActions';
import { GET_SETTINGS_REQUEST } from '../actions/types';

// AJAX GET request to API
const getSettingsAjax = async url => {
    const response = await fetch(url);
    return response.json();
};

// Worker
function* getSettingsWorker(action) {
    try {
        const data = yield call(getSettingsAjax, action.url);
        // values mapping to inputs name
        const mappedValues = {
            email_confirm_authorization: data.emailСonfirmations.authorization,
            email_confirm_withdraw: data.emailСonfirmations.withdraw,
            email_notif_authorization: data.emailNotifications.authorization,
            email_notif_deposit: data.emailNotifications.deposit,
            email_notif_withdraw: data.emailNotifications.withdraw,
            email_notif_payout: data.emailNotifications.payout,
            email_notif_bonus: data.emailNotifications.bonus,
            email_notif_referral: data.emailNotifications.referral,
            email_notif_penalty: data.emailNotifications.penalty,
            email_notif_ticket: data.emailNotifications.ticket,
            email_notif_verification: data.emailNotifications.verification,
            email_notif_sms: data.emailNotifications.sms,
            sms_notif_authorization: data.smsNotifications.authorization,
            sms_notif_deposit: data.smsNotifications.deposit,
            sms_notif_withdraw: data.smsNotifications.withdraw,
            sms_notif_payout: data.smsNotifications.payout,
            sms_notif_bonus: data.smsNotifications.bonus,
            sms_notif_referral: data.smsNotifications.referral,
            sms_notif_penalty: data.smsNotifications.penalty,
            sms_notif_ticket: data.smsNotifications.ticket,
            sms_notif_verification: data.smsNotifications.verification,
            sms_notif_sms: data.smsNotifications.sms
        };
        yield put(getSettingsSuccess(mappedValues));

    } catch (e) {
        yield put(getSettingsFailure(e));
        console.log(e);
    }
};

// Watcher
export default function* getSettingsWatcher() {
    yield takeLatest(GET_SETTINGS_REQUEST, getSettingsWorker);
}