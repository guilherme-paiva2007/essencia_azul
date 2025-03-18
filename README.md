# Projeto: <span style="color: #1535B5; text-decoration: underline">Portal Essencia Azul</span>

## Instalação e Configuração

O arquivo de inicialização do projeto é `index.js` do diretório raíz.
Ele inicia um servidor HTTP, buscando suas configurações de hostname e porta no arquivo `config.json`:
```json
{
    "hostname": "0.0.0.0",
    "port": 8080
}
```

## Diretórios

O projeto está organizado nos seguintes diretórios e arquivos:
```
index.js
pages.js 
pages_list.js
config.json
.gitignore
pages/ (Conteúdo de páginas configuradas)
src/
    tools/
    
assets/ (Recursos para páginas no client-side)
    css/
    imgs/
    js/
    src/ (Recursos de src/ em forma de web modules)
    scripts.js (compilação web dos recursos web de src/)
```

## Utilização

### Cliente

### Servidor