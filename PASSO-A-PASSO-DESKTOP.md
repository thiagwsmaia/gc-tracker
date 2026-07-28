# GC Tracker como app de desktop

## Procedimento

1. Instalar as dependências uma vez:

```powershell
npm install
```

2. Testar o app em janela própria:

```powershell
npm start
```

3. Criar o atalho na área de trabalho:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\criar-atalho-desktop.ps1
```

4. Gerar um executável/versão de desktop:

```powershell
npm run dist
```

Se o Windows bloquear a etapa portátil por permissão de link simbólico, o app ainda fica gerado aqui:

```text
dist\win-unpacked\GC Tracker.exe
```

Esse é o caminho mais estável para uso local. O `.exe` portátil único, quando o empacotador conseguir finalizar, sai em:

```text
dist\GC Tracker.exe
```

## Uso diário

Depois da instalação, dê dois cliques no atalho `GC Tracker` da área de trabalho. Ele abre em uma janela própria, sem precisar abrir uma aba do Chrome.
