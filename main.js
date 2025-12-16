const translations = {
  ja: {
    title: "ランダムピッカー",
    useRoles: "ロールを使う",
    addRole: "ロールを追加する",
    addChar: "キャラを追加",
    importLabel: "一括入力（カンマ / 改行対応）",
    playerNamesLabel: "プレイヤー名（改行区切り）",
    copy: "コピー",
    lineShare: "LINEで送る",
    discordOpen: "Discordを開く",
    shareText: "以下の結果を共有してください:",
    copySuccess: "結果をコピーしました！\nLINEやDiscordに貼り付けてください。",
    copyFailure: "コピーに失敗しました。",
    assignedPlayerLabel: (role) => `${role} 担当プレイヤー名（改行区切り）:`,
    importBtn: "インポート",
    pick: "ピックする！",
    yourPick: (role, char, name) => `${name} の ${role} キャラは: ${char}`,
    pickNoRole: (char, name) => `${name} のキャラは: ${char}`,
    roleNotEnough: (role) => `「${role}」のキャラが足りません！`,
    notEnough: "キャラの数が足りません！",
    bulkImport: "例：りんか,けん,アッシュ",
    playerNames: "プレイヤー名を改行で入力してください。",
    charListLabel: "キャラクターの一覧（改行区切り）",
    mergeRoleChars: "ロールのキャラクターを統合",
    resetCharsBtn: "キャラクターの一覧をリセット",
    enterRoleName: "ロール名を入力してください。",

    // ===== ヘルプ / PWA =====
    helpBtn: "ヘルプ",
    installBtn: "インストール",
    helpTitle: "PickPlay! ヘルプ",
    helpTabHowto: "使い方",
    helpTabPwa: "ホーム画面に追加",
    helpHowtoHtml: `
      <h3>使い方</h3>

  <h4>例）ロールを使う場合</h4>
  <ol>
    <li>「ロールを追加」し、キャラクターやプレイヤー名を候補として入力</li>
    <li>「ピックする！」ボタンを押すと、ロールごとにランダム選出されます</li>
    <li>結果はコピーしてLINEやDiscordで共有可能です</li>
  </ol>

  <h4>例）ロールを使わない場合</h4>
  <ol>
    <li>キャラクターやプレイヤー名を候補として入力</li>
    <li>「ピックする！」ボタンを押すと、ランダム選出されます</li>
    <li>結果はコピーしてLINEやDiscordで共有可能です</li>
  </ol>

  <p><small>※ キャラクター数がプレイヤー数より少ない場合、ピックできずに警告メッセージが表示されます。</small></p>
`,
    helpPwaHtml: `
  <h3>📱ホーム画面に追加（スマホ）</h3>

  <h4>iPhone（Safari）</h4>
  <ol>
    <li>SafariでPickPlay!を開く</li>
    <li>画面下の「共有」アイコン（□↑）を押す</li>
    <li>「ホーム画面に追加」を選ぶ</li>
    <li>名前を確認して「追加」</li>
  </ol>

  <h4>Android（Chrome）</h4>
  <ol>
    <li>ChromeでPickPlay!を開く</li>
    <li>右上の︙（メニュー）を押す</li>
    <li>「ホーム画面に追加」または「アプリをインストール」を選ぶ</li>
    <li>確認して追加</li>
  </ol>

  <h3>💻PC（Chrome / Edge）</h3>
  <ol>
    <li>サイトを開く</li>
    <li>アドレスバーの「インストール」アイコンが出たらクリック</li>
    <li>出ない場合はメニューから「インストール」を選ぶ</li>
  </ol>

  <h3>注意</h3>
  <ul>
    <li>iPhoneは<strong>Safari</strong>で開くのが確実です（LINEなどのアプリ内ブラウザだと出ないことがあります）</li>
    <li>ブラウザやバージョンによって表示や文言が異なる場合があります</li>
  </ul>
`,
  },

  en: {
    title: "Random Picker",
    useRoles: "Use roles",
    addRole: "Add Role",
    addChar: "Add Character",
    importLabel: "Bulk Import (Comma / Newline)",
    playerNamesLabel: "Player Names (one per line)",
    copy: "Copy",
    lineShare: "Send via LINE",
    discordOpen: "Open Discord",
    shareText: "Please share the result below:",
    copySuccess: "Copied the result!\nPaste it into LINE or Discord.",
    copyFailure: "Failed to copy.",
    assignedPlayerLabel: (role) => `Assigned players for ${role} (one per line):`,
    importBtn: "Import",
    pick: "Pick!",
    yourPick: (role, char, name) => `${name}'s ${role} character is: ${char}`,
    pickNoRole: (char, name) => `${name}'s character is: ${char}`,
    roleNotEnough: (role) => `Not enough characters in "${role}"!`,
    notEnough: "Not enough characters!",
    bulkImport: "Example: Rinka,ken,Ash",
    playerNames: "Enter player names, one per line",
    charListLabel: "Character List (one per line)",
    mergeRoleChars: "Merge Role Characters",
    resetCharsBtn: "Reset Character List",
    enterRoleName: "Please enter a role name",

    // ===== Help / PWA =====
    helpBtn: "Help",
    installBtn: "Install",
    helpTitle: "PickPlay! Help",
    helpTabHowto: "How to use",
    helpTabPwa: "PWA",
    helpHowtoHtml: `
  <h3>How to Use</h3>

  <h4>Example: Using roles</h4>
  <ol>
    <li>Add a role, then enter characters and player names as candidates</li>
    <li>Press the “Pick!” button to randomly assign a character for each role</li>
    <li>You can copy the result and share it via LINE or Discord</li>
  </ol>

  <h4>Example: Without roles</h4>
  <ol>
    <li>Enter characters and player names as candidates</li>
    <li>Press the “Pick!” button to randomly assign characters</li>
    <li>You can copy the result and share it via LINE or Discord</li>
  </ol>

  <p><small>* If the number of players exceeds the number of characters, an alert will be shown and picking will not proceed.</small></p>
`,
    helpPwaHtml: `
  <h3>📱Add to Home Screen (Mobile)</h3>

  <h4>iPhone (Safari)</h4>
  <ol>
    <li>Open PickPlay! in Safari</li>
    <li>Tap the Share icon (square with an arrow)</li>
    <li>Select “Add to Home Screen”</li>
    <li>Confirm the name, then tap “Add”</li>
  </ol>

  <h4>Android (Chrome)</h4>
  <ol>
    <li>Open PickPlay! in Chrome</li>
    <li>Tap the ︙ (menu) in the top-right</li>
    <li>Select “Add to Home screen” or “Install app”</li>
    <li>Confirm and add</li>
  </ol>

  <h3>💻PC (Chrome / Edge)</h3>
  <ol>
    <li>Open the site</li>
    <li>If you see an install icon in the address bar, click it</li>
    <li>If not, open the browser menu and choose “Install”</li>
  </ol>

  <h3>Notes</h3>
  <ul>
    <li>On iPhone, using <strong>Safari</strong> is the most reliable (in-app browsers like LINE may not show the option).</li>
    <li>The labels and behavior may vary depending on your browser/version.</li>
  </ul>
`,
  },
};



let currentLang = "ja";
function setLanguage(lang) {
  currentLang = lang;
  // 必要なら画面のテキストも切り替え
  render();
} // 言語設定関数の追加

let data = {
  useRoles: true,
  roles: {
    "Role A": ["Character1", "Character2"],
    "Role B": ["Character3", "Character4"],
    "Role C": ["Character5", "Character6"]
  },
  roleCounts: {}
};

const STORAGE_KEY = "characterPickerData";
const NAME_STORAGE_KEY = "characterPickerNamesByRole";

const CHAR_LIST_KEY = "characterPickerCharList"; // 一貫したキー名

function saveCharList(text) {
  localStorage.setItem(CHAR_LIST_KEY, text);
}

function loadCharList() {
  return localStorage.getItem(CHAR_LIST_KEY) || "";
}

function exportAllCharsToSingleList() {
  const allChars = Object.values(data.roles)
    .flat()
    .map(c => c.trim())
    .filter(c => c);

  const listText = allChars.join("\n");

  const charListArea = document.getElementById("charList");
  if (charListArea) {
    charListArea.value = listText;
  }

  saveCharList(listText);
  alert(currentLang === "ja" ? "キャラクターを統合しました！" : "Characters exported!");
}

// ロールのキャラクターを統合するボタンのイベントハンドラ
function resetNonRoleCharacters() {
  saveCharList("");  // ローカルストレージを空に
  const charListArea = document.getElementById("charList");
  if (charListArea) charListArea.value = "";  // テキストエリアを空に

  alert(currentLang === "ja" ? "キャラクター一覧をリセットしました。" : "Character list reset!");
  render();
}

document.getElementById("resetCharsBtn").onclick = resetNonRoleCharacters;




function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function loadData() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    data = JSON.parse(saved);
  }
}

function saveNamesByRole(role, namesText) {
  const saved = JSON.parse(localStorage.getItem(NAME_STORAGE_KEY) || "{}");
  saved[role] = namesText;
  localStorage.setItem(NAME_STORAGE_KEY, JSON.stringify(saved));
}

function loadNamesByRole() {
  return JSON.parse(localStorage.getItem(NAME_STORAGE_KEY) || "{}");
}

// 結果をコピー
function copyResult() {
  const t = translations[currentLang]; // 現在の言語に対応
  const resultText = document.getElementById("result").innerText;
  const fullText = t.shareText + "\n\n" + resultText; // 共有テキストを追加

   console.log("コピーするテキスト:", fullText);

  navigator.clipboard.writeText(fullText)
    .then(() => alert(t.copySuccess))
    .catch(() => alert(t.copyFailure));
}

// LINEを開く（空のメッセージ用URL）
function openLine() {
  const t = translations[currentLang];
  const resultText = document.getElementById("result").innerText.trim();

  if (!resultText) {
    alert(currentLang === "ja" ? "結果がありません！" : "No result to share!");
    return;
  }

  const message = encodeURIComponent(t.shareText + "\n\n" + resultText);
  const lineUrl = `https://line.me/R/msg/text/?${message}`;
  window.location.href = lineUrl;
}

// Discordを開く（ブラウザ版）
function openDiscord() {
  window.open("https://discord.com/app", "_blank");
}

function addRole() {
  const t = translations[currentLang];
  const role = prompt(t.enterRoleName);
  if (role && !(role in data.roles)) {
    data.roles[role] = [];
    saveData();
    render();
  }
}

// 重複除去関数（非ロールキャラクター用）
function removeDuplicateChars(textArea) {
  const chars = textArea.value
    .split(/\r?\n/)
    .map(c => c.trim())
    .filter(c => c);

  const uniqueChars = [...new Set(chars)];

  if (uniqueChars.length !== chars.length) {
    alert(currentLang === "ja" ? "キャラクター名に重複があります。重複を削除しました。" : "Duplicate characters found and removed.");
    textArea.value = uniqueChars.join("\n");
  }
  saveCharList(textArea.value);
}

// render関数内の該当部分
function render() {
  const t = translations[currentLang];
  const useRolesChecked = document.getElementById("useRoles").checked;

  const charInputSection = document.getElementById("charInputSection");
  if (charInputSection) {
    charInputSection.style.display = useRolesChecked ? "none" : "block";

    if (!useRolesChecked) {
      const charListArea = document.getElementById("charList");
      if (charListArea) {
        charListArea.value = loadCharList();

        // ここで重複除去を先に実行
        removeDuplicateChars(charListArea);

        // ユーザーが編集したときにも重複除去
        charListArea.onchange = () => removeDuplicateChars(charListArea);
      }
    }
  }


// ロールの追加表示
const addRoleBtn = document.getElementById("addRoleBtn");
  if (addRoleBtn) {
    addRoleBtn.style.display = useRolesChecked ? "inline-block" : "none";
  }



  // インポートセクションの表示制御
  const importSection = document.getElementById("bulkImportSection");
  if (importSection) {
    importSection.style.display = useRolesChecked ? "none" : "block";
  }

  // 結果操作ボタンの翻訳
  document.getElementById("title").textContent = t.title;
  document.getElementById("useRolesLabel").textContent = t.useRoles;
  document.getElementById("addRoleBtn").textContent = t.addRole;

  document.getElementById("pickBtn").innerHTML = `<i class="fas fa-random"></i> ${t.pick}`;

  document.getElementById("importLabel").textContent = t.importLabel;
  document.getElementById("importBtn").textContent = t.importBtn;
  document.getElementById("playerNamesLabel").textContent = t.playerNamesLabel;
  document.getElementById("bulkImport").placeholder = t.bulkImport;
  document.getElementById("playerNames").placeholder = t.playerNames;
  document.getElementById("copyBtn").textContent = t.copy;
  document.getElementById("lineShareBtn").textContent = t.lineShare;
  document.getElementById("discordOpenBtn").textContent = t.discordOpen;
  document.getElementById("charListLabel").textContent = t.charListLabel;
  document.getElementById("mergeRoleCharsBtn").textContent = t.mergeRoleChars;
  document.getElementById("resetCharsBtn").textContent = t.resetCharsBtn;

    // ヘルプ/PWA文言
  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value ?? "";
  };
  const setHtml = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = value ?? "";
  };

setText("helpBtnText", t.helpBtn ?? (currentLang === "ja" ? "ヘルプ" : "Help"));
setText("installBtnText", t.installBtn ?? (currentLang === "ja" ? "インストール" : "Install"));
setText("helpTitle", t.helpTitle ?? "PickPlay! Help");
setText("helpTabHowto", t.helpTabHowto ?? (currentLang === "ja" ? "使い方" : "How to use"));
setText("helpTabPwa", t.helpTabPwa ?? "PWA");

setHtml("helpPanelHowto", t.helpHowtoHtml ?? "");
setHtml("helpPanelPwa", t.helpPwaHtml ?? "");


  // ここでプレイヤー入力欄の表示制御
  const playerNamesArea = document.getElementById("playerNames");
  if (playerNamesArea) {
    playerNamesArea.style.display = useRolesChecked ? "none" : "block";
  }

  // ロールの描画
  const container = document.getElementById("rolesContainer");
  container.innerHTML = "";

  const savedNames = loadNamesByRole();

  if (!useRolesChecked) return;

  for (const role in data.roles) {
    const block = document.createElement("div");
    block.className = "role-block";

    const title = document.createElement("strong");
    title.textContent = role + " ";

    const delBtn = document.createElement("button");
    delBtn.textContent = "×";
    delBtn.onclick = () => {
      delete data.roles[role];
      saveData();
      render();
    };
    title.appendChild(delBtn);
    block.appendChild(title);

    const list = document.createElement("ul");
    data.roles[role].forEach((char, i) => {
      const li = document.createElement("li");
      li.textContent = char + " ";
      const del = document.createElement("button");
      del.textContent = "×";
      del.onclick = () => {
        data.roles[role].splice(i, 1);
        saveData();
        render();
      };
      li.appendChild(del);
      list.appendChild(li);
    });
    block.appendChild(list);

    const input = document.createElement("input");
    input.placeholder = t.addChar;
    const addBtn = document.createElement("button");
    addBtn.textContent = "+";
    addBtn.onclick = () => {
      const charName = input.value.trim();
      if (!charName) return;

       // 全ロールのキャラを取得
        const allChars = Object.values(data.roles).flat();

        // 重複チェック
        if (allChars.includes(charName)) {
          alert(currentLang === "ja" ? "そのキャラクターは既に存在します！" : "That character already exists!");
          return;
        }

        data.roles[role].push(charName);
        input.value = "";
        saveData();
        render();
    };
    block.appendChild(input);
    block.appendChild(addBtn);
    container.appendChild(block); 

    // 担当プレイヤー名ラベルを翻訳文でセット
    const nameLabel = document.createElement("div");
    nameLabel.textContent = t.assignedPlayerLabel(role);

    const nameArea = document.createElement("textarea");
    nameArea.rows = 3;
    nameArea.style.width = "100%";
    nameArea.value = savedNames[role] || "";
    nameArea.onchange = () => saveNamesByRole(role, nameArea.value);
    block.appendChild(nameLabel);
    block.appendChild(nameArea);

    container.appendChild(block);
  }
}


// Fisher-Yatesのシャッフル関数
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// importNames関数の修正
function importNames() {
  const importText = document.getElementById("bulkImport").value;
  const players = importText
    .split(/[\n,]+/) // 改行またはカンマで分割
    .map(name => name.trim())
    .filter(name => name !== "");

  document.getElementById("playerNames").value = players.join("\n");

  // キャラ一覧の重複除去
  const charListArea = document.getElementById("charList");
  if (charListArea) {
    removeDuplicateChars(charListArea);
  }
}

function pickCharacter() {
  const t = translations[currentLang];
  const useRoles = document.getElementById("useRoles").checked;
  const results = [];

  if (useRoles) {
    const savedNames = loadNamesByRole();

    for (const role in data.roles) {
      const charList = [...data.roles[role]];
      const nameList = (savedNames[role] || "")
        .split(/\r?\n/)
        .map(n => n.trim())
        .filter(n => n);

      if (nameList.length === 0) continue;

      if (nameList.length > charList.length) {
        alert(t.roleNotEnough(role));
        return;
      }

      const shuffledChars = shuffleArray(charList);

      for (let i = 0; i < nameList.length; i++) {
        results.push(t.yourPick(role, shuffledChars[i], nameList[i]));
      }
    }

  } else {
    const charListText = loadCharList();
    const allChars = charListText
      .split(/\r?\n/)
      .map(c => c.trim())
      .filter(c => c);

    const playerInput = document.getElementById("playerNames").value;
    const players = playerInput
      .split(/\r?\n/)
      .map(n => n.trim())
      .filter(n => n);

    if (players.length > allChars.length) {
      alert(t.notEnough);
      return;
    }

    const shuffledChars = shuffleArray(allChars);
    for (let i = 0; i < players.length; i++) {
      results.push(t.pickNoRole(shuffledChars[i], players[i]));
    }
  }

  document.getElementById("result").innerHTML =
    results.map(r => `<div>${r}</div>`).join("");
}


function toggleLanguage() {
  currentLang = currentLang === "ja" ? "en" : "ja";
  render();
  // pickCharacter();
}
function isIOS() {
  const ua = navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test(ua);
}

let deferredPrompt = null;

function initHelpUI() {
  const helpDialog = document.getElementById("helpDialog");

  document.getElementById("helpBtn")?.addEventListener("click", () => {
  if (!helpDialog) return;
  if (typeof helpDialog.showModal === "function") helpDialog.showModal();
  else helpDialog.setAttribute("open", "");
});

document.getElementById("helpCloseBtn")?.addEventListener("click", () => {
  if (!helpDialog) return;
  if (typeof helpDialog.close === "function") helpDialog.close();
  helpDialog.removeAttribute("open");
});


  const dialog = document.getElementById("helpDialog");
const tabs = dialog?.querySelector(".helpTabs");

function setHelpTab(tab) {
  // タブの見た目
  dialog.querySelectorAll(".helpTab").forEach(b => {
    b.classList.toggle("is-active", b.dataset.tab === tab);
  });

  dialog.querySelectorAll("[data-panel]").forEach(p => {
    p.hidden = (p.dataset.panel !== tab);
  });
}

tabs?.addEventListener("click", (e) => {
  const btn = e.target.closest(".helpTab");
  if (!btn) return;
  setHelpTab(btn.dataset.tab);
});

// 初期表示
setHelpTab("howto");


  // Chrome/Edge/Android向けのインストール
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    const installBtn = document.getElementById("installBtn");
    if (installBtn && !isIOS()) installBtn.hidden = false;
  });

  document.getElementById("installBtn")?.addEventListener("click", async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    deferredPrompt = null;
    document.getElementById("installBtn").hidden = true;
  });
}


window.onload = () => {
  loadData();
  initHelpUI();
  render();
};
