# Moonlit Tarot

静かで神秘的な世界観を意識した、スマホファーストのタロット占いアプリです。

## 要件定義
- React + Vite + TypeScript で実装
- 関数コンポーネントと React Hooks を使用
- CSS Modules で責務ごとにスタイルを分離
- 大アルカナ22枚のダミーデータを別ファイルで管理
- 1枚引き / 3枚引きに対応
- シャッフル演出画面を挟み、結果画面へ遷移
- 結果では正位置 / 逆位置、意味、キーワードを表示

## UI設計
### トップ画面
- アプリタイトルと説明文
- 1枚引き / 3枚引きの選択UI
- 占い開始ボタン

### シャッフル画面
- 裏向きカードの重なり演出
- 数秒後の自動遷移
- 手動で結果表示へ進むボタン

### 結果画面
- 引いたカードのビジュアル表示
- カード名、日本語 / 英語名
- 正位置 / 逆位置表示
- 意味とキーワード表示
- 再占い / トップに戻るボタン

## ディレクトリ構成
```text
src/
  assets/
    images/
      cards/
      ui/
  components/
    common/
      PrimaryButton/
      ScreenContainer/
    tarot/
      ResultCard/
      ShuffleDeck/
      SpreadSelector/
      TarotCardView/
  data/
    tarotCards.ts
  hooks/
    useTarotReading.ts
  pages/
    HomePage/
    ResultPage/
    ShufflePage/
  styles/
    globals.css
    variables.css
  types/
    tarot.ts
  utils/
    drawCards.ts
    shuffleCards.ts
  App.tsx
  main.tsx
```

## 型設計
- `TarotCard`: カードマスターデータ
- `DrawnCard`: 実際に引いたカード情報
- `SpreadType`: `single` / `three`
- `CardOrientation`: `upright` / `reversed`
- `CardPosition`: `single` / `past` / `present` / `future`
- `ReadingState`: 画面状態と占い状態

## 状態設計
- `screen`: `home` / `shuffle` / `result`
- `spreadType`: 1枚引きか3枚引きか
- `drawnCards`: 抽選結果
- `isShuffling`: シャッフル中かどうか

## インストールコマンド
```bash
npm install
```

## 起動コマンド
```bash
npm run dev
```

## ビルドコマンド
```bash
npm run build
```

## 画像差し替え方法
現在は `TarotCardView` 内でプレースホルダー表示をしています。
実画像を使う場合は以下の手順で差し替えできます。

1. `src/assets/images/cards/` に画像を配置
2. `src/data/tarotCards.ts` の `image` パスを実ファイルに合わせて更新
3. `TarotCardView.tsx` を `img` タグ表示に切り替える

## 保存手順
1. このフォルダを `tarot-app` など任意名で保存
2. ターミナルでそのフォルダへ移動
3. `npm install`
4. `npm run dev`

## zip化しやすい保存単位
- プロジェクトルートごとまとめて zip 化してください
- `node_modules` は含めず、ソース一式のみで問題ありません
