import {
    initializeApp
} from 'https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js';
import {
    getDatabase,
    ref,
    child,
    get,
    update
} from 'https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js';
const firebaseConfig = {
    apiKey: "AIzaSyBcXhv-UL1Bhp_KjvvkRVFTTPNmYp5ytI0",
    authDomain: "shortlink-ebf23.firebaseapp.com",
    databaseURL: "https://shortlink-ebf23-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "shortlink-ebf23",
    storageBucket: "shortlink-ebf23.appspot.com",
    messagingSenderId: "1073112615716",
    appId: "1:1073112615716:web:8f1c3032847c33613e01b1"
}, app = initializeApp(firebaseConfig),
    db = getDatabase();
const fRtdb = async () => {
    const _0x33476d = sessionStorage.getItem("_shortL");
    if (_0x33476d) {
        const _0x8bdd09 = JSON.parse(_0x33476d);
        const _0x2f2dfb = "stu/" + _0x8bdd09.by + '/' + _0x8bdd09.id + '/';
        if (await get(child(ref(db), _0x2f2dfb + "ori")).then(_0x35a896 => !!_0x35a896.exists() && _0x35a896.val() == _0x8bdd09.ori)["catch"](() => false)) {
            const _0x1c6885 = new Date();
            const _0x481fc7 = _0x1c6885.getFullYear();
            const _0x39f0ec = String(_0x1c6885.getMonth() + 0x1).padStart(0x2, '0');
            const _0x50a938 = String(_0x1c6885.getDate()).padStart(0x2, '0');
            const _0x52fda5 = [_0x481fc7, _0x39f0ec].join('-');
            let _0xad9dec = await get(child(ref(db), "userLevel/" + _0x8bdd09.by + "/level")).then(_0x35ba08 => _0x35ba08.exists() && _0x35ba08.val())["catch"](() => false);
            if (_0xad9dec) {
                _0xad9dec = await get(child(ref(db), "config/stu/level/" + _0xad9dec + "/cpc")).then(_0x21aaa3 => _0x21aaa3.exists() ? _0x21aaa3.val() : 0x1);
            }
            const _0x36b654 = await get(child(ref(db), "config/stu/cpc")).then(_0x4b3ea1 => _0x4b3ea1.exists() ? _0x4b3ea1.val() : 0x1);
            const _0x21e903 = _0xad9dec || _0x36b654;
            document.querySelectorAll(".icdbx").forEach(_0x3db456 => {
                _0x3db456.addEventListener("click", async () => {
                    if (stVC() && _0x3db456.classList.contains('a')) {
                        const _0x2d929c = await get(child(ref(db), _0x2f2dfb + "click")).then(_0x9815aa => _0x9815aa.exists() ? _0x9815aa.val() + 0x1 : 0x1)["catch"](() => 0x1);
                        const _0x1893c0 = await get(child(ref(db), "/reports/" + _0x8bdd09.by + '/' + _0x52fda5 + '/' + _0x50a938)).then(_0x2cdbec => {
                            let _0x1b0442 = _0x2cdbec.val();
                            return {
                                'click': _0x1b0442.click + 0x1,
                                'cpc': (_0x1b0442.click * _0x1b0442.cpc + _0x21e903) / (_0x1b0442.click + 0x1)
                            };
                        })["catch"](() => ({
                            'click': 0x1,
                            'cpc': _0x21e903
                        }));
                        const _0x1ed745 = await get(child(ref(db), "/balance/" + _0x8bdd09.by + "/current")).then(_0x36fe55 => _0x36fe55.val() + _0x21e903)["catch"](() => _0x21e903);
                        const _0x4c2e94 = {
                            ['/' + _0x2f2dfb + "click"]: _0x2d929c,
                            ["/reports/" + _0x8bdd09.by + '/' + _0x52fda5 + '/' + _0x50a938 + "/click"]: _0x1893c0.click,
                            ["/reports/" + _0x8bdd09.by + '/' + _0x52fda5 + '/' + _0x50a938 + "/cpc"]: _0x1893c0.cpc,
                            ["/balance/" + _0x8bdd09.by + "/current"]: _0x1ed745
                        };
                        update(ref(db), _0x4c2e94).then(() => inVC())["catch"](_0x360ecd => _0x360ecd.message);
                    }
                });
            });
        }
    }
};
fRtdb();
