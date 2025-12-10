// global-search.js

// 画面ごとのキーワード → パスの対応表
const GLOBAL_SEARCH_ROUTES = [
  {
    href: "dashboard.html",
    keywords: ["dashboard", "ダッシュボード", "home", "ホーム", "トップ"],
  },
  {
    href: "operators.html",
    keywords: ["operator", "オペレーター", "有人op", "有人", "オペ"],
  },
  {
    href: "ai-operators.html",
    keywords: ["aiオペ", "aiオペレーター", "ai operator", "ai対応"],
  },
  {
    href: "numbers.html",
    keywords: ["番号管理", "番号", "phone", "電話番号"],
  },
  {
    href: "queues.html",
    keywords: ["キュー", "コールキュー", "queue"],
  },
  {
    href: "monitoring.html",
    keywords: ["モニタリング", "monitor", "モニター"],
  },
  {
    href: "logs.html",
    keywords: ["ログ", "logs", "履歴"],
  },
  {
    href: "scenarios.html",
    keywords: ["シナリオ", "シナリオ管理", "scenario"],
  },
  {
    href: "scenario-editor.html",
    keywords: ["シナリオ編集", "ノード編集", "editor"],
  },
  {
    href: "ai-voices.html",
    keywords: ["ai音声", "音声モデル", "voice"],
  },
  {
    href: "knowledge.html",
    keywords: ["ナレッジ", "knowledge", "faq"],
  },
  {
    href: "users.html",
    keywords: ["ユーザー", "ユーザー一覧", "user"],
  },
  {
    href: "groups.html",
    keywords: ["グループ", "group"],
  },
  {
    href: "roles.html",
    keywords: ["権限", "ロール", "role"],
  },
  {
    href: "crm-integrations.html",
    keywords: ["外部crm", "crm連携", "integration"],
  },
  {
    href: "crm.html",
    keywords: ["crm", "顧客", "顧客情報"],
  },
];

// 入力文字列から飛び先パスを決める
function resolveGlobalSearchTarget(query) {
  const q = (query || "").trim().toLowerCase();
  if (!q) return null;

  for (const route of GLOBAL_SEARCH_ROUTES) {
    for (const key of route.keywords) {
      const k = key.toLowerCase();
      if (q === k || q.includes(k) || k.includes(q)) {
        return route.href;
      }
    }
  }
  return null;
}

// 各ページ共通：DOM準備ができたらフォームにイベントを付与
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("global-search-form");
  const input = document.getElementById("global-search-input");
  if (!form || !input) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const target = resolveGlobalSearchTarget(input.value);
    if (target) {
      window.location.href = target;
    } else {
      alert("該当する画面が見つかりませんでした。\nキーワードを変えてみてください。");
    }
  });
});

