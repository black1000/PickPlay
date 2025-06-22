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
    "タンク": ["D.Va", "ラインハルト"],
    "ダメージ": ["ゲンジ", "ソルジャー76"],
    "サポート": ["マーシー", "アナ"]
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


function importNames() {
  const importText = document.getElementById("bulkImport").value;
  const players = importText
    .split(/[\n,]+/) // 改行またはカンマで分割
    .map(name => name.trim())
    .filter(name => name !== "");

  document.getElementById("playerNames").value = players.join("\n");
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
  pickCharacter();
}

window.onload = () => {
  loadData();
  render();
};
