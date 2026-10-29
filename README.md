# ✦ Grimório

Leitor de PDF com caneta, feito pra iPad/Safari (e qualquer navegador). Tudo roda no aparelho: o PDF nunca sai dele.

**Use em:** https://grimorio.magenifica.dev

## Ferramentas
- **Caneta** e **lápis** sensíveis à pressão (Apple Pencil, S Pen, mesa digitalizadora)
- **Marca-texto** livre e **grifo** que gruda no texto selecionável
- **Borracha** (apaga a marcação inteira), desfazer/refazer
- Dedo rola e dá zoom com pinça; botão pra alternar pro "dedo desenha"

Atalhos: `P` caneta · `L` lápis · `H` marca-texto · `G` grifo · `E` borracha · `⌘Z` / `⇧⌘Z` · `⌘S` salvar

## Como as anotações são salvas
Viram anotações nativas do PDF (`/Ink` e `/Highlight`), que aparecem em qualquer leitor
(Acrobat, Preview, navegadores). Ao reabrir no Grimório, continuam editáveis, com a pressão preservada.

## Privacidade
É um único `index.html` com as bibliotecas embutidas. Uma Content-Security-Policy bloqueia
qualquer conexão de rede: sem analytics, sem CDN, sem upload.

## Créditos
- [PDF.js](https://github.com/mozilla/pdf.js) (Apache-2.0), da Mozilla
- [pdf-lib](https://github.com/Hopding/pdf-lib) (MIT)
