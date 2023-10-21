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
let firebaseConfig = {
    apiKey: "AIzaSyBcXhv-UL1Bhp_KjvvkRVFTTPNmYp5ytI0",
    authDomain: "shortlink-ebf23.firebaseapp.com",
    databaseURL: "https://shortlink-ebf23-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "shortlink-ebf23",
    storageBucket: "shortlink-ebf23.appspot.com",
    messagingSenderId: "1073112615716",
    appId: "1:1073112615716:web:8f1c3032847c33613e01b1"
}, app = t(firebaseConfig), db = e(), fRtdb = async () => {
    let t = sessionStorage.getItem("_shortL");
    if (t) {
        let e = JSON.parse(t),
            r = "stu/" + e.by + "/" + e.id + "/";
        if (await s(c(a(db), r + "ori")).then(t => !!t.exists() && t.val() == e.ori).catch(() => !1)) {
            let l = new Date,
                b = l.getFullYear(),
                p = String(l.getMonth() + 1).padStart(2, "0"),
                n = String(l.getDate()).padStart(2, "0"),
                o = [b, p].join("-"),
                _ = await s(c(a(db), "userLevel/" + e.by + "/level")).then(t => t.exists() && t.val()).catch(() => !1);
            _ && (_ = await s(c(a(db), "config/stu/level/" + _ + "/cpc")).then(t => t.exists() ? t.val() : 1));
            let h = await s(c(a(db), "config/stu/cpc")).then(t => t.exists() ? t.val() : 1),
                d = _ || h;
            document.querySelectorAll(".icdbx").forEach(t => {
                t.addEventListener("click", async () => {
                    if (stVC() && t.classList.contains("a")) {
                        let l = await s(c(a(db), r + "click")).then(t => t.exists() ? t.val() + 1 : 1).catch(() => 1),
                            b = await s(c(a(db), "/reports/" + e.by + "/" + o + "/" + n)).then(t => {
                                let e = t.val();
                                return {
                                    click: e.click + 1,
                                    cpc: (e.click * e.cpc + d) / (e.click + 1)
                                }
                            }).catch(() => ({
                                click: 1,
                                cpc: d
                            })),
                            p = await s(c(a(db), "/balance/" + e.by + "/current")).then(t => t.val() + d).catch(() => d),
                            _ = {
                                ["/" + r + "click"]: l,
                                ["/reports/" + e.by + "/" + o + "/" + n + "/click"]: b.click,
                                ["/reports/" + e.by + "/" + o + "/" + n + "/cpc"]: b.cpc,
                                ["/balance/" + e.by + "/current"]: p
                            };
                        i(a(db), _).then(() => inVC()).catch(t => t.message)
                    }
                })
            })
        }
    }
};
fRtdb();