import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js';
import {
  child,
  get,
  getDatabase,
  ref,
  update,
} from 'https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js';

// ponytail: keep legacy public Firebase web config for Blogger compatibility; migrate by defining
// `globalThis.APMODY_FIREBASE_CONFIG` before this module loads, then remove this fallback.
const legacyFirebaseConfig = {
  apiKey: 'AIzaSyBcXhv-UL1Bhp_KjvvkRVFTTPNmYp5ytI0',
  authDomain: 'shortlink-ebf23.firebaseapp.com',
  databaseURL: 'https://shortlink-ebf23-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'shortlink-ebf23',
  storageBucket: 'shortlink-ebf23.appspot.com',
  messagingSenderId: '1073112615716',
  appId: '1:1073112615716:web:8f1c3032847c33613e01b1',
};

const firebaseConfig = globalThis.APMODY_FIREBASE_CONFIG || legacyFirebaseConfig;
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function readShortLinkSession() {
  try {
    const shortLinkSession = sessionStorage.getItem('_shortL');
    return shortLinkSession ? JSON.parse(shortLinkSession) : null;
  } catch {
    return null;
  }
}

async function getValue(path, fallback) {
  try {
    const snapshot = await get(child(ref(db), path));
    return snapshot.exists() ? snapshot.val() : fallback;
  } catch {
    return fallback;
  }
}

function buildDateKeys(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return {
    monthKey: [year, month].join('-'),
    todayKey: day,
  };
}

async function resolveCpc(ownerId) {
  let levelCpc = false;
  const level = await getValue(`userLevel/${ownerId}/level`, false);

  if (level) {
    levelCpc = await getValue(`config/stu/level/${level}/cpc`, 1);
  }

  const defaultCpc = await getValue('config/stu/cpc', 1);
  return levelCpc || defaultCpc;
}

async function buildReportUpdate(ownerId, monthKey, todayKey, cpc) {
  try {
    const report = await getValue(`/reports/${ownerId}/${monthKey}/${todayKey}`, null);

    return {
      click: report.click + 1,
      cpc: (report.click * report.cpc + cpc) / (report.click + 1),
    };
  } catch {
    return {
      click: 1,
      cpc,
    };
  }
}

async function trackClick(button, context) {
  if (!stVC() || !button.classList.contains('a')) return;

  const { shortLink, shortLinkPath, monthKey, todayKey, cpc } = context;
  const clickCount = await getValue(`${shortLinkPath}click`, 0) + 1;
  const report = await buildReportUpdate(shortLink.by, monthKey, todayKey, cpc);
  const balance = await getValue(`/balance/${shortLink.by}/current`, 0) + cpc;

  const updates = {
    [`/${shortLinkPath}click`]: clickCount,
    [`/reports/${shortLink.by}/${monthKey}/${todayKey}/click`]: report.click,
    [`/reports/${shortLink.by}/${monthKey}/${todayKey}/cpc`]: report.cpc,
    [`/balance/${shortLink.by}/current`]: balance,
  };

  update(ref(db), updates).then(() => inVC()).catch(error => error.message);
}

async function initRealtimeTracking() {
  const shortLink = readShortLinkSession();
  if (!shortLink) return;

  const shortLinkPath = `stu/${shortLink.by}/${shortLink.id}/`;
  const originalUrl = await getValue(`${shortLinkPath}ori`, false);
  if (originalUrl !== shortLink.ori) return;

  const { monthKey, todayKey } = buildDateKeys(new Date());
  const cpc = await resolveCpc(shortLink.by);
  const context = { shortLink, shortLinkPath, monthKey, todayKey, cpc };

  document.querySelectorAll('.icdbx').forEach(button => {
    button.addEventListener('click', () => trackClick(button, context));
  });
}

initRealtimeTracking();
