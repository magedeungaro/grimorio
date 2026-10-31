# ✦ Grimório

Leitor de PDF com caneta, feito pra iPad/Safari (e qualquer navegador). Tudo roda no aparelho; o PDF só sai dele se você mandar salvar no seu Google Drive.

**Use em:** https://grimorio.magenifica.dev

## Ferramentas
- **Pena** e **lápis** sensíveis à pressão (Apple Pencil, S Pen, mesa digitalizadora)
- **Marca-texto** livre e **grifo** que gruda no texto selecionável
- **Texto**: caixa de texto direto na página · **Nota**: marcador com balão de comentário
- **Laço**: contorna desenhos pra selecionar, mover, redimensionar pelos cantos, girar ou apagar de uma vez
- **Carimbos**: grimório com símbolos místicos, céu, runas nórdicas e os 12 signos (alguns coloridos, outros na cor do caldeirão)
- **Borracha** (apaga traço por traço), desfazer/refazer
- **Marca-páginas**: fita colorida no canto de cada página, com nome; painel **Marcadores** com as fitas e o sumário do PDF
- Dedo rola e dá zoom com pinça; botão pra alternar pro "dedo desenha"

Atalhos: `P` pena · `L` lápis · `H` marca-texto · `G` grifo · `T` texto · `N` nota · `K` carimbo · `V` laço · `E` borracha · `B` marcadores · `Espaço` gaveta · `C` caldeirão de cores · `⌘Z` / `⇧⌘Z` · `⌘S` salvar

## Sessões
Cada traço é guardado na hora, no próprio aparelho (IndexedDB), junto com o PDF. Fechou o app? Na tela inicial aparece "Continuar de onde parou". Abrir de novo o mesmo arquivo original também traz as anotações de volta.

## Como as anotações são salvas
Traços da mesma ferramenta que se encostam viram um objeto só: o laço pega o desenho inteiro e,
no PDF, cada objeto (por cor) vira uma única anotação.

Viram anotações nativas do PDF (`/Ink`, `/Highlight`, `/FreeText` e `/Text`), e as fitas viram marcadores do sumário com a cor da fita, que aparecem em qualquer leitor
(Acrobat, Preview, navegadores). Ao reabrir no Grimório, continuam editáveis, com a pressão preservada.

## Bola de cristal: Google Drive
Pela bola de cristal da barra dá pra abrir um PDF do seu Drive e salvar de volta no mesmo arquivo
(com aviso se ele mudou em outro aparelho). PDFs do aparelho podem ser enviados pra pasta **Grimório**
no Drive. Arquivos que você só pode ver viram uma cópia anotada nessa pasta.

O login é o oficial do Google e o acesso é só `drive.file`: o Grimório enxerga apenas os arquivos
que você escolher ou que ele mesmo criou. O token fica só na memória.

## Privacidade
É um único `index.html` com as bibliotecas embutidas. Uma Content-Security-Policy bloqueia
qualquer conexão de rede, exceto com o Google, que só acontece quando você usa a bola de cristal.
Sem analytics, sem CDN, sem servidor próprio.

## Créditos
- [PDF.js](https://github.com/mozilla/pdf.js) (Apache-2.0), da Mozilla
- [pdf-lib](https://github.com/Hopding/pdf-lib) (MIT)
