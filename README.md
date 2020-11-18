# Teste Estabelecimentos

Teste para vaga de front-end


# Como executar

Clonar o repositório

``` git clone https://github.com/luacks/establishment-editor ```

Entrar dentro da pasta do projeto

``` cd establishment-editor ```

Instalar as dependências do projeto

``` npm i ```

**Obs.: é necessário ter o angular-cli instalado**

## Desenvolvimento

Para iniciar o servidor de desenvolvimento

``` ng serve ```

## Produção 

 Gerar os arquivos

``` ng build ```

Levantar um servidor HTTP e colocar os arquivos da pasta dist na raíz do site.


### Apache
Adicionar um arquivo .htaccess junto dos arquivos com o seguinte conteúdo.

```
<IfModule mod_rewrite.c>
	RewriteEngine On
	RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -f [OR]
	RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -d
	RewriteRule ^.*$ - [NC,L]
	RewriteRule ^(.*) index.html [NC,L]
</IfModule>
```
### LiteServer

Dentro da pasta do projeto execute

``` lite-server --baseDir=.\dist\teste-establishment\ ```

# Tomada de Decisões

- A estrutura foi definida dessa forma para colocar os componentes compartilhados em um módulo separado da aplicação (shared), e a home não tem nada porque queria seguir um padrão nas URLS /establishments e /establishments/2/edit
- A API dos estabelecimentos retorna algo bem base para o primeiro preenchimento, então coloquei um formatador para deixar mais organizado e pra trabalhar melhor no código
- Para preencher os campos selects criei arquivos de dados na assets/data, como Cidades e Bancos, um service faz uma requisição local para puxar essas informações. Não queria deixar estático isso dentro do componente, embora as opções de Saque Automatico e Tipo de Conta sejam. (são poucas opções)
- Dentro da pasta shared/components tem uma pasta chamada forms, gosto de criar um "UI KIT" pra não depender somente do CSS para fazer alterações gerais, e dar caracteristicas novas aos componentes.
- Utilizei o INDEX do retorno da API como identificador do produto, embora tivesse o ID, queria que ficasse bonito na listagem e o index era a propriedade mais bonita, e um hash não ia ficar legal.
- Alguns componentes simples foram criado no formato flat, pra não ficar vários arquivos com pouca escrita, somente os que tem algum HTML mais complexo foi separado, e os componentes compartilhados.
- Utilizei a biblioteca de CSS (FlexboxGrid) que disponibiliza um sistema de grid semelhante ao do bootstrap.
- Dentro da UI KIT tentei fazer um select, gastei 40% do tempo só fazendo ele, pra deixar ele quase identico a um select nativo (não deu muito certo mas ficou parecido) 
- Outras duas bibliotecas que utilizei foi o ngx-content-loading para colocar um loading enquanto é feito o primeiro fetch da API e o ngx mask para mascara do CNPJ e CPF
- Deixei o componente establishment-card dentro da pasta shared porque imaginei que seria utilizado em outra parte da aplicação, mas caso não fosse colocaria dentro da pasta **pages/establishments/components**
