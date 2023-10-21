import {
    initializeApp as t
} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import {
    getDatabase as e,
    ref as a,
    child as c,
    get as s,
    update as i
} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";
const firebaseConfig = {
    apiKey: "AIzaSyBcXhv-UL1Bhp_KjvvkRVFTTPNmYp5ytI0",
    authDomain: "shortlink-ebf23.firebaseapp.com",
    databaseURL: "https://shortlink-ebf23-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "shortlink-ebf23",
    storageBucket: "shortlink-ebf23.appspot.com",
    messagingSenderId: "1073112615716",
    appId: "1:1073112615716:web:8f1c3032847c33613e01b1"
}, app = t(firebaseConfig), db = e(), fRtdbs = async () => {
    const t = sessionStorage.getItem("_shortL");
    if (t) {
        const c = JSON.parse(t),
            e = "stu/" + c.by + "/" + c.id + "/";
        if (await get(child(ref(db), e + "ori")).then((t => !!t.exists() && t.val() == c.ori)).catch((() => !1))) {
            const t = new Date,
                a = t.getFullYear(),
                i = String(t.getMonth() + 1).padStart(2, "0"),
                s = String(t.getDate()).padStart(2, "0"),
                l = [a, i].join("-");
            let n = await get(child(ref(db), "userLevel/" + c.by + "/level")).then((t => t.exists() && t.val())).catch((() => !1));
            n && (n = await get(child(ref(db), "config/stu/level/" + n + "/cpc")).then((t => t.exists() ? t.val() : 1)));
            const r = await get(child(ref(db), "config/stu/cpc")).then((t => t.exists() ? t.val() : 1)),
                d = n || r;
            document.querySelectorAll(".icdbx").forEach((t => {
                t.addEventListener("click", (async () => {
                    if (stVC() && t.classList.contains("a")) {
                        const t = await get(child(ref(db), e + "click")).then((t => t.exists() ? t.val() + 1 : 1)).catch((() => 1)),
                            a = await get(child(ref(db), "/reports/" + c.by + "/" + l + "/" + s)).then((t => {
                                let c = t.val();
                                return {
                                    click: c.click + 1,
                                    cpc: (c.click * c.cpc + d) / (c.click + 1)
                                }
                            })).catch((() => ({
                                click: 1,
                                cpc: d
                            }))),
                            i = await get(child(ref(db), "/balance/" + c.by + "/current")).then((t => t.val() + d)).catch((() => d)),
                            n = {
                                ["/" + e + "click"]: t,
                                ["/reports/" + c.by + "/" + l + "/" + s + "/click"]: a.click,
                                ["/reports/" + c.by + "/" + l + "/" + s + "/cpc"]: a.cpc,
                                ["/balance/" + c.by + "/current"]: i
                            };
                        update(ref(db), n).then((() => inVC())).catch((t => t.message))
                    }
                }))
            }))
        }
    }
};
fRtdbs();
