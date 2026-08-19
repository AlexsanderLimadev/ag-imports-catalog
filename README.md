# AG Imports Catalog

# PROJETO — AG IMPORTS | CATÁLOGO PREMIUM

Crie um site/catalogo completo, moderno, minimalista e premium para a **AG Imports**, uma loja de produtos importados.

O objetivo principal do projeto é criar uma experiência visual sofisticada para apresentar os produtos da loja e transformar visitantes vindos principalmente do Instagram em potenciais clientes através do WhatsApp.

O site NÃO deve parecer um e-commerce genérico. Ele deve parecer uma marca premium, moderna e cuidadosamente construída.

---

# 1. REFERÊNCIAS DA MARCA

Instagram oficial:

https://www.instagram.com/agimports.co/

Catálogo/arquivos da loja:

https://drive.google.com/drive/u/1/folders/1kYT7rl6HrYUSotsXQ0qE2bSO_0SPqDYf

Use essas referências para entender a identidade da marca, produtos, categorias, fotografia e posicionamento.

IMPORTANTE:

* Não invente produtos.
* Não invente preços.
* Não invente imagens.
* Não invente informações que não estejam disponíveis.
* Se algum dado do catálogo não estiver disponível, utilize um placeholder claramente identificado para posterior preenchimento.
* O conteúdo real dos produtos deverá ser utilizado quando os arquivos do catálogo forem disponibilizados.
* Não utilizar produtos genéricos de banco de imagens como se fossem produtos reais da AG Imports.

---

# 2. OBJETIVO DO SITE

O site deve funcionar inicialmente como um:

**CATÁLOGO DIGITAL PREMIUM**

O fluxo principal deve ser:

Instagram
↓
Site
↓
Catálogo
↓
Produto
↓
WhatsApp
↓
Venda

Não implementar checkout completo nesta primeira versão.

Não criar:

* carrinho complexo;
* pagamento online;
* cadastro obrigatório;
* checkout;
* sistema de pedidos.

O botão principal de conversão será:

**COMPRAR PELO WHATSAPP**

Cada produto deve gerar uma mensagem de WhatsApp contextualizada com o nome do produto.

Exemplo:

"Olá! Tenho interesse no produto Body Mist Pure Seduction. Gostaria de saber mais informações."

O número do WhatsApp deve ficar centralizado em uma configuração para ser alterado facilmente depois.

---

# 3. DIREÇÃO VISUAL

A identidade visual deve ser:

* minimalista;
* moderna;
* sofisticada;
* premium;
* limpa;
* editorial;
* elegante;
* tecnológica sem parecer excessivamente tecnológica;
* inspirada em marcas de luxo;
* inspirada em Apple, Vercel, Linear, Stripe e lojas premium de moda/beleza.

Evitar completamente:

* excesso de gradientes;
* sombras pesadas;
* cards exageradamente arredondados;
* excesso de ícones;
* cores muito fortes;
* layouts poluídos;
* excesso de texto;
* banners promocionais exagerados;
* estética de marketplace;
* visual genérico de loja virtual.

A fotografia dos produtos deve ser protagonista.

---

# 4. PALETA DE CORES

Usar uma paleta predominantemente monocromática.

Background principal:

#0A0A0A

Background secundário:

#111111

Superfícies:

#151515

Texto principal:

#F5F5F5

Texto secundário:

#A1A1A1

Bordas:

#242424

Branco:

#FFFFFF

Caso seja necessário um detalhe de luxo, utilizar um tom champagne/off-white muito discreto.

Não transformar o champagne em uma cor dominante.

A interface deve permanecer predominantemente preta, branca e neutra.

---

# 5. TIPOGRAFIA

Usar:

**Inter**

como fonte principal da interface.

Para títulos editoriais e alguns destaques de marca, utilizar:

**Cormorant Garamond**

ou outra serif elegante semelhante.

A serif deve ser utilizada com moderação.

Exemplo:

AG IMPORTS

Produtos selecionados
para quem valoriza o extraordinário.

A interface, botões, preços, filtros e informações devem utilizar principalmente Inter.

---

# 6. PRINCÍPIOS DE DESIGN

Utilizar:

* muito espaço em branco;
* grid consistente;
* alinhamentos precisos;
* hierarquia visual clara;
* tipografia refinada;
* imagens grandes;
* bordas sutis;
* animações suaves;
* microinterações;
* transições rápidas;
* layout respirado.

Utilizar border-radius moderado.

Preferência:

rounded-xl

Evitar deixar tudo excessivamente arredondado.

Sombras devem ser mínimas.

---

# 7. RESPONSIVIDADE

O projeto deve ser:

**MOBILE FIRST**

O site deve funcionar perfeitamente em:

* celulares pequenos;
* celulares grandes;
* tablets;
* notebooks;
* desktops;
* monitores grandes.

A maior parte dos visitantes provavelmente chegará pelo Instagram.

Por isso, a experiência mobile deve ser tratada como prioridade.

---

# 8. ESTRUTURA DE ROTAS

Criar as seguintes páginas:

/

Home

/catalogo

Catálogo completo

/produto/[slug]

Página individual do produto

/sobre

Sobre a AG Imports

/contato

Contato

Criar também:

/404

Página personalizada para páginas inexistentes.

---

# 9. NAVBAR

Criar uma navbar minimalista.

Desktop:

AG IMPORTS

```
                Catálogo
                Sobre
                Contato
                Instagram
                WhatsApp
```

Mobile:

AG IMPORTS                                      ☰

Ao abrir o menu mobile, utilizar uma animação suave.

O menu mobile deve apresentar:

* Catálogo
* Sobre
* Contato
* Instagram
* WhatsApp

A navbar deve:

* ser responsiva;
* possuir background/transparência adequada;
* ter backdrop blur discreto quando fizer sentido;
* permanecer elegante durante o scroll;
* não ocupar espaço excessivo.

---

# 10. HOME — HERO

Criar um hero extremamente sofisticado.

Estrutura:

AG IMPORTS

IMPORTADOS SELECIONADOS
PARA QUEM VALORIZA O EXTRAORDINÁRIO.

Botão:

VER CATÁLOGO

O hero deve possuir uma grande imagem de produto ou composição visual utilizando produtos reais da loja quando disponíveis.

Não utilizar imagens falsas como se fossem produtos reais.

Pode utilizar:

* imagem lateral;
* imagem central;
* composição editorial;
* produto em destaque;
* carrossel extremamente discreto.

O hero deve ocupar aproximadamente a primeira tela do usuário sem parecer exagerado.

Adicionar uma pequena indicação de scroll.

Exemplo:

EXPLORE A COLEÇÃO
↓

---

# 11. HOME — CATEGORIAS

Criar uma seção:

EXPLORE POR CATEGORIA

Mostrar categorias reais existentes no catálogo.

Exemplos, caso estejam presentes no catálogo:

* Perfumes
* Body Care
* Skincare
* Maquiagem
* Bolsas
* Acessórios
* Outros

Não criar categorias que não existam nos produtos.

As categorias devem ser apresentadas de maneira visual.

Cada categoria pode utilizar uma imagem real relacionada aos produtos.

Ao clicar:

/catalogo?categoria=nome-da-categoria

---

# 12. HOME — PRODUTOS EM DESTAQUE

Criar:

SELEÇÃO AG IMPORTS

Subtítulo:

Os favoritos da nossa coleção.

Mostrar produtos marcados como:

featured: true

Criar um grid premium.

Desktop:

4 produtos por linha.

Tablet:

3 produtos por linha.

Mobile:

2 produtos por linha.

Cada produto deve possuir:

* imagem;
* marca;
* nome;
* preço;
* disponibilidade;
* indicação visual quando necessário.

Exemplo:

Victoria's Secret

Body Mist Pure Seduction

R$ 189,90

Ao passar o mouse:

* pequeno zoom da imagem;
* transição suave;
* overlay discreto;
* botão:

VER PRODUTO →

No mobile, o card deve permanecer simples.

---

# 13. HOME — NOVIDADES

Criar seção:

NOVIDADES

Mostrar produtos mais recentes.

Os produtos devem possuir um campo:

isNew: true

Mostrar uma pequena etiqueta:

NOVO

A etiqueta deve ser extremamente discreta.

---

# 14. HOME — SOBRE A MARCA

Criar uma seção institucional.

Título:

MAIS QUE IMPORTADOS.

Texto conceitual:

A AG Imports seleciona produtos importados para quem busca qualidade, autenticidade e uma experiência diferenciada.

O texto deve ser refinado e curto.

Não criar textos exagerados ou afirmações que não possam ser comprovadas.

Utilizar os valores reais da marca quando disponíveis.

---

# 15. HOME — CONFIANÇA

Criar uma seção:

POR QUE AG IMPORTS?

Três ou quatro pilares no máximo.

Exemplo:

PRODUTOS SELECIONADOS

Produtos cuidadosamente escolhidos para nossa coleção.

AUTENTICIDADE

Trabalhar apenas com informações de autenticidade que estejam confirmadas pela loja.

ATENDIMENTO

Atendimento próximo através dos nossos canais oficiais.

ENVIO

Informações sobre envio somente quando confirmadas pela loja.

Não inventar políticas de entrega.

---

# 16. HOME — INSTAGRAM

Criar uma seção dedicada ao Instagram.

Título:

SIGA A AG IMPORTS

Subtítulo:

@agimports.co

Texto:

Acompanhe novidades, produtos e lançamentos no nosso Instagram.

Botão:

VER INSTAGRAM →

Link:

https://www.instagram.com/agimports.co/

Se houver integração disponível, mostrar posts reais.

Caso não seja possível utilizar API do Instagram, criar uma galeria preparada para receber as imagens posteriormente.

Não inventar publicações.

---

# 17. HOME — CTA FINAL

Criar uma seção de conversão antes do footer.

Exemplo:

ENCONTRE O SEU PRÓXIMO FAVORITO.

Explore nossa seleção de produtos importados.

Botão:

VER CATÁLOGO →

Segundo botão:

FALAR NO WHATSAPP

Design extremamente minimalista.

---

# 18. CATÁLOGO

Criar uma página completa:

CATÁLOGO

Explore nossa seleção de produtos importados.

Adicionar filtros.

Filtros:

* Todos
* Categorias
* Marca
* Disponibilidade
* Novidades
* Destaques

Caso o catálogo possua preços:

ordenar por:

* Menor preço
* Maior preço
* Mais recentes
* Destaques

Criar busca:

"Buscar produto..."

A busca deve funcionar por:

* nome;
* marca;
* categoria.

---

# 19. GRID DO CATÁLOGO

Desktop:

4 colunas.

Tablet:

3 colunas.

Mobile:

2 colunas.

Cada produto:

imagem grande;
marca;
nome;
preço.

Imagem deve manter proporção consistente.

Não deformar imagens.

Utilizar:

object-fit: cover

ou

object-contain

dependendo do tipo de fotografia.

Para produtos com fundo limpo, preferir contain.

---

# 20. CARD DE PRODUTO

Criar componente:

ProductCard

Estrutura:

Imagem

Badge opcional

Marca

Nome

Preço

Status

Hover

O card inteiro deve ser clicável.

Link:

/produto/[slug]

Não utilizar botão "Comprar" diretamente no grid.

O botão de compra deve ficar principalmente na página individual do produto.

---

# 21. PRODUTO INDIVIDUAL

Criar página:

/produto/[slug]

Layout desktop:

lado esquerdo:

galeria grande do produto.

lado direito:

marca;
nome;
preço;
descrição;
disponibilidade;
informações adicionais;
botão WhatsApp.

Exemplo:

Victoria's Secret

BODY MIST
Pure Seduction

R$ 189,90

Descrição do produto.

Disponível

[ COMPRAR PELO WHATSAPP ]

---

# 22. GALERIA DO PRODUTO

Permitir:

* imagem principal;
* miniaturas;
* troca de imagem;
* zoom discreto;
* swipe no mobile.

Não distorcer imagens.

Se houver somente uma imagem, não mostrar thumbnails desnecessárias.

---

# 23. INFORMAÇÕES DO PRODUTO

Estruturar os dados:

* Nome
* Marca
* Categoria
* Preço
* Descrição
* Volume
* Tamanho
* Disponibilidade
* SKU, se existir
* Imagens
* Destaque
* Novidade

Não mostrar campos vazios.

---

# 24. WHATSAPP

Criar função central:

generateWhatsAppLink(product)

A mensagem deve ser automaticamente construída.

Exemplo:

"Olá! Tenho interesse no produto *Body Mist Pure Seduction*. Gostaria de saber mais informações."

O link deve abrir o WhatsApp.

O número deve ficar em uma configuração central.

Exemplo:

WHATSAPP_NUMBER

Não espalhar o número pelo código.

---

# 25. BOTÃO FLUTUANTE

No mobile, adicionar botão flutuante de WhatsApp.

Ele deve:

* ficar discreto;
* não cobrir conteúdo importante;
* possuir animação muito suave;
* abrir WhatsApp.

Não utilizar animação chamativa.

---

# 26. FOOTER

Criar footer minimalista.

Conteúdo:

AG IMPORTS

Produtos selecionados.
Experiências que vão além.

Links:

Catálogo
Sobre
Contato
Instagram
WhatsApp

Rodapé:

© 2026 AG Imports

Não adicionar informações jurídicas inventadas.

---

# 27. DADOS DOS PRODUTOS

Criar uma estrutura de dados separada da interface.

Exemplo:

{
id: "001",
slug: "body-mist-pure-seduction",
name: "Body Mist Pure Seduction",
brand: "Victoria's Secret",
category: "body-care",
price: 189.90,
description: "...",
images: [
"/products/pure-seduction-1.webp",
"/products/pure-seduction-2.webp"
],
volume: "250ml",
available: true,
featured: true,
isNew: false
}

Criar:

src/data/products.ts

ou

src/data/products.json

O catálogo deve ser facilmente editável.

---

# 28. CATEGORIAS

Criar:

src/data/categories.ts

Cada categoria deve possuir:

* id;
* slug;
* name;
* description;
* image.

Exemplo:

{
id: "01",
slug: "body-care",
name: "Body Care",
description: "...",
image: "/categories/body-care.webp"
}

---

# 29. ARQUITETURA DE COMPONENTES

Organizar os componentes:

src/components/

navbar/
Navbar.tsx
MobileMenu.tsx

hero/
Hero.tsx

categories/
CategoryGrid.tsx
CategoryCard.tsx

products/
ProductCard.tsx
ProductGrid.tsx
ProductFilters.tsx
ProductSearch.tsx
ProductBadge.tsx

product/
ProductGallery.tsx
ProductInfo.tsx
ProductDetails.tsx
WhatsAppButton.tsx

sections/
FeaturedProducts.tsx
NewProducts.tsx
AboutSection.tsx
TrustSection.tsx
InstagramSection.tsx
FinalCTA.tsx

layout/
Footer.tsx

ui/
Button.tsx
Container.tsx
SectionHeading.tsx

---

# 30. TECNOLOGIA

Se o projeto existente já utiliza uma stack, respeitar a stack atual.

Caso seja necessário iniciar do zero, utilizar:

* React
* TypeScript
* Vite ou Next.js
* Tailwind CSS
* shadcn/ui quando fizer sentido
* Lucide React para ícones
* Framer Motion para animações

Se o projeto já utiliza TanStack Start, manter TanStack Start.

Não trocar a stack existente sem necessidade.

---

# 31. TAILWIND

Usar Tailwind CSS.

Evitar CSS gigantesco e repetitivo.

Criar tokens para:

* background;
* foreground;
* muted;
* border;
* accent;
* radius.

Utilizar classes consistentes.

---

# 32. ÍCONES

Utilizar Lucide React.

Ícones permitidos:

* Menu
* X
* Search
* Instagram
* ArrowRight
* ArrowLeft
* ChevronDown
* MessageCircle
* ShoppingBag, apenas se realmente necessário.

Não exagerar na utilização de ícones.

---

# 33. ANIMAÇÕES

Usar Framer Motion quando disponível.

Animações:

* fade;
* slide;
* scale mínimo;
* hover;
* page transition;
* menu transition;
* image reveal.

As animações devem durar aproximadamente:

150ms – 500ms

Evitar animações longas.

Respeitar:

prefers-reduced-motion

Usuários que desativarem animações devem receber uma experiência sem movimentos desnecessários.

---

# 34. MICROINTERAÇÕES

Adicionar:

Hover nos produtos.

Hover nos botões.

Underline animado nos links.

Imagem com pequeno zoom.

Navbar mudando levemente durante scroll.

Menu mobile com transição.

Botão WhatsApp com feedback visual.

Nenhuma microinteração deve prejudicar performance.

---

# 35. LOADING

Criar estados de loading elegantes.

Utilizar skeletons discretos.

Não utilizar spinner gigante.

No catálogo:

mostrar skeletons dos cards.

---

# 36. ESTADOS VAZIOS

Criar estado quando nenhum produto for encontrado.

Exemplo:

NENHUM PRODUTO ENCONTRADO

Tente alterar sua busca ou categoria.

Botão:

LIMPAR FILTROS

---

# 37. ERROS

Criar tratamento para:

* produto inexistente;
* categoria inexistente;
* imagem quebrada;
* erro de carregamento;
* página inexistente.

Criar página 404 personalizada.

---

# 38. SEO

Implementar SEO básico completo.

Home:

Title:

AG Imports | Produtos Importados

Description:

Explore a seleção de produtos importados da AG Imports.

Catálogo:

Title:

Catálogo | AG Imports

Produto:

Title:

Nome do Produto | AG Imports

Utilizar:

* title;
* meta description;
* Open Graph;
* Twitter Card;
* canonical;
* favicon.

Criar sitemap quando a stack permitir.

Criar robots.txt.

---

# 39. PERFORMANCE

O site precisa ser extremamente rápido.

Priorizar:

* imagens WebP/AVIF;
* lazy loading;
* compressão;
* code splitting;
* carregamento otimizado;
* fontes otimizadas;
* evitar bibliotecas desnecessárias;
* evitar JS pesado;
* evitar vídeos grandes;
* otimização de imagens.

As imagens abaixo da dobra devem carregar de forma lazy.

A imagem principal do hero deve ser otimizada para carregamento rápido.

---

# 40. ACESSIBILIDADE

Implementar:

* alt text nas imagens;
* navegação por teclado;
* foco visível;
* contraste adequado;
* aria-label quando necessário;
* botões semanticamente corretos;
* links semanticamente corretos;
* headings organizados.

Não usar div como botão.

---

# 41. MOBILE UX

No mobile:

* navbar compacta;
* menu fullscreen ou drawer elegante;
* grid de 2 produtos;
* botões grandes o suficiente para toque;
* imagens bem dimensionadas;
* WhatsApp facilmente acessível;
* filtros fáceis de usar;
* busca fácil de usar.

O usuário deve conseguir chegar a um produto e abrir o WhatsApp em poucos toques.

---

# 42. DESKTOP UX

No desktop:

* conteúdo centralizado;
* largura máxima aproximada de 1280–1440px;
* bastante espaço;
* grid organizado;
* imagens grandes;
* hover elegante;
* navegação simples.

Não ocupar 100% da tela com conteúdo.

---

# 43. CONTAINER

Usar um container global.

Exemplo:

max-width:

1280px ou 1400px

Padding:

mobile:
20px

tablet:
32px

desktop:
48px

---

# 44. ESPAÇAMENTO

Usar um sistema de espaçamento consistente.

Seções devem possuir bastante respiro.

Preferir:

80px – 140px

entre grandes seções no desktop.

No mobile:

56px – 88px.

Não deixar tudo colado.

---

# 45. IMAGENS

As imagens são uma das partes mais importantes do projeto.

Priorizar as imagens reais do catálogo.

Normalizar:

* proporção;
* qualidade;
* resolução;
* fundo;
* carregamento.

Criar estrutura:

public/
products/
categories/
brand/

Não colocar todas as imagens diretamente dentro dos componentes.

---

# 46. ESTRUTURA DE PASTAS

Organizar aproximadamente assim:

src/
│
├── routes/
│   ├── index.tsx
│   ├── catalogo.tsx
│   ├── sobre.tsx
│   ├── contato.tsx
│   └── produto/
│       └── $slug.tsx
│
├── components/
│   ├── navbar/
│   ├── hero/
│   ├── categories/
│   ├── products/
│   ├── product/
│   ├── sections/
│   ├── layout/
│   └── ui/
│
├── data/
│   ├── products.ts
│   └── categories.ts
│
├── lib/
│   ├── whatsapp.ts
│   ├── utils.ts
│   └── constants.ts
│
└── styles/
└── globals.css

public/
│
├── products/
├── categories/
├── brand/
└── favicon/

---

# 47. CONFIGURAÇÃO CENTRAL

Criar:

src/lib/constants.ts

Centralizar:

* nome da loja;
* Instagram;
* WhatsApp;
* URL do site;
* descrição;
* redes sociais.

Exemplo:

STORE_NAME
INSTAGRAM_URL
WHATSAPP_NUMBER
SITE_URL

Não duplicar essas informações no código.

---

# 48. ADMIN FUTURO

A arquitetura deve ser preparada para posteriormente receber um painel administrativo.

Não implementar o painel agora, mas estruturar o projeto para permitir:

* adicionar produto;
* editar produto;
* excluir produto;
* alterar preço;
* alterar imagem;
* ativar/desativar produto;
* marcar como destaque;
* marcar como novidade;
* alterar categorias.

No futuro, os dados poderão sair de:

products.ts

e passar para:

Supabase/PostgreSQL.

Não criar uma dependência de banco de dados se não for necessária nesta primeira versão.

---

# 49. FUTURA INTEGRAÇÃO COM SUPABASE

Preparar arquitetura para que posteriormente seja possível utilizar:

Supabase Database
Supabase Storage

Produtos:

products

Categorias:

categories

Imagens:

Supabase Storage

Não implementar isso se o projeto atual ainda não precisar.

---

# 50. INSTAGRAM

Manter integração simples inicialmente.

Link oficial:

https://www.instagram.com/agimports.co/

O botão Instagram deve abrir o perfil oficial.

Não inventar posts.

Se posteriormente houver uma API ou ferramenta de integração, substituir a galeria estática pela integração real.

---

# 51. WHATSAPP

Centralizar o número em configuração.

Criar helper:

getWhatsAppUrl(message)

Criar:

getProductWhatsAppUrl(product)

Todos os botões devem utilizar essa função.

Não duplicar URLs do WhatsApp em dezenas de componentes.

---

# 52. DESIGN DOS BOTÕES

Botão primário:

fundo branco;
texto preto.

Exemplo:

[ VER CATÁLOGO → ]

Hover:

fundo ligeiramente alterado;
pequeno deslocamento da seta.

Botão secundário:

background transparente;
border sutil;
texto branco.

Evitar botões com gradiente.

---

# 53. DESIGN DOS FILTROS

Os filtros devem parecer chips minimalistas.

Exemplo:

[ Todos ] [ Perfumes ] [ Body Care ] [ Skincare ]

Estado ativo:

fundo claro;
texto escuro.

Estado inativo:

transparente;
border;
texto cinza.

No mobile, permitir scroll horizontal dos filtros.

---

# 54. DESIGN DO PREÇO

O preço deve ter bastante destaque.

Exemplo:

R$ 189,90

Mas não deve parecer agressivo.

Utilizar tipografia elegante.

Caso não exista preço definido:

mostrar:

CONSULTE

e direcionar para WhatsApp.

Não inventar preço.

---

# 55. PRODUTO ESGOTADO

Se:

available: false

mostrar:

ESGOTADO

O botão:

COMPRAR PELO WHATSAPP

pode ser substituído por:

CONSULTAR DISPONIBILIDADE

A mensagem deve perguntar se o produto estará disponível novamente.

---

# 56. ACESSO DIRETO AO PRODUTO

Cada produto deve possuir uma URL própria.

Exemplo:

/produto/body-mist-pure-seduction

O slug deve ser:

* lowercase;
* sem caracteres especiais;
* amigável para SEO.

---

# 57. URL DO CATÁLOGO

Permitir:

/catalogo

/catalogo?categoria=perfumes

/catalogo?categoria=body-care

/catalogo?marca=victorias-secret

/catalogo?busca=body

Os filtros devem refletir a URL quando possível.

Isso permite compartilhar links específicos.

---

# 58. BREADCRUMB

Na página do produto:

Início / Catálogo / Body Care / Produto

O breadcrumb deve ser discreto.

No mobile, simplificar se necessário.

---

# 59. ACESSIBILIDADE DAS IMAGENS

Cada produto deve possuir alt text.

Exemplo:

"Body Mist Pure Seduction Victoria's Secret"

Não utilizar:

"imagem1"
"produto"
"foto"

---

# 60. FONTE E ÍCONES

Evitar carregar dezenas de fontes.

Carregar apenas as fontes realmente utilizadas.

Utilizar SVG para ícones.

Não utilizar emojis como ícones da interface.

---

# 61. NÃO FAZER

NÃO criar:

* carrinho nesta versão;
* checkout;
* login;
* cadastro;
* painel administrativo agora;
* avaliações falsas;
* depoimentos falsos;
* números falsos;
* quantidade de vendas falsa;
* desconto falso;
* preço riscado falso;
* contadores falsos;
* estoque falso;
* seguidores falsos;
* informações inventadas;
* logos de marcas que não estejam no catálogo;
* produtos que não pertencem à loja.

---

# 62. CONTEÚDO

O texto deve ser curto.

Evitar parágrafos enormes.

A comunicação deve ser:

* sofisticada;
* direta;
* elegante;
* humana;
* premium.

Não usar linguagem exageradamente publicitária.

---

# 63. EXPERIÊNCIA GERAL

A sensação ao entrar no site deve ser:

"Essa loja é sofisticada."

Não:

"Esse é mais um site de produtos."

O produto deve ser o protagonista.

O site deve parecer uma mistura de:

* editorial de moda;
* catálogo de luxo;
* e-commerce moderno.

---

# 64. ESTRUTURA FINAL DA HOME

A Home deve seguir aproximadamente:

1. Navbar

2. Hero

3. Categorias

4. Produtos em destaque

5. Novidades

6. Sobre a AG Imports

7. Por que AG Imports

8. Instagram

9. CTA final

10. Footer

Não adicionar seções desnecessárias.

---

# 65. ORDEM DE DESENVOLVIMENTO

Desenvolver nesta ordem:

FASE 1

Criar estrutura base.

FASE 2

Criar identidade visual.

FASE 3

Criar Navbar.

FASE 4

Criar Hero.

FASE 5

Criar categorias.

FASE 6

Criar ProductCard.

FASE 7

Criar catálogo.

FASE 8

Criar página individual do produto.

FASE 9

Criar WhatsApp.

FASE 10

Criar seção Instagram.

FASE 11

Criar Sobre.

FASE 12

Criar Contato.

FASE 13

Criar Footer.

FASE 14

Implementar animações.

FASE 15

Implementar responsividade.

FASE 16

Implementar SEO.

FASE 17

Otimizar performance.

FASE 18

Revisar acessibilidade.

FASE 19

Testar todas as rotas.

FASE 20

Fazer revisão visual completa.

---

# 66. TESTES OBRIGATÓRIOS

Antes de finalizar:

Testar:

* Home;
* Catálogo;
* filtros;
* busca;
* produto;
* produto inexistente;
* categoria;
* links;
* WhatsApp;
* Instagram;
* menu mobile;
* responsividade;
* 404;
* imagens;
* loading;
* estados vazios.

Testar em:

* mobile;
* tablet;
* desktop.

Verificar também:

* console sem erros;
* links funcionando;
* imagens carregando;
* sem overflow horizontal;
* sem elementos cortados;
* sem texto sobreposto;
* sem layout quebrado.

---

# 67. QUALIDADE DO CÓDIGO

Código deve ser:

* TypeScript;
* organizado;
* reutilizável;
* componentizado;
* sem duplicação desnecessária;
* fácil de manter;
* fácil de escalar.

Evitar:

* componentes gigantes;
* lógica duplicada;
* valores hardcoded espalhados;
* estilos inline desnecessários;
* código morto;
* dependências sem necessidade.

---

# 68. RESULTADO ESPERADO

O resultado final deve ser um catálogo digital premium para a AG Imports.

O usuário deve conseguir:

1. Entrar no site.
2. Entender rapidamente a marca.
3. Explorar categorias.
4. Visualizar produtos.
5. Filtrar produtos.
6. Pesquisar produtos.
7. Abrir um produto.
8. Ver fotos e informações.
9. Clicar em "Comprar pelo WhatsApp".
10. Ser direcionado para atendimento.

Tudo isso com o mínimo de fricção possível.

---

# 69. REGRA MAIS IMPORTANTE

Não tente colocar todas as informações possíveis na tela.

O design deve respirar.

Prioridade visual:

1. Produto
2. Imagem
3. Nome
4. Preço
5. CTA
6. Informações complementares

Sempre preferir:

**menos elementos + melhor execução**

em vez de:

**mais elementos + interface poluída.**

---

# 70. DIREÇÃO FINAL DE DESIGN

Imagine o resultado como:

Uma marca premium de produtos importados.

Fundo preto quase absoluto.

Fotografias grandes e elegantes.

Tipografia Inter.

Títulos editoriais pontuais em serif.

Muito espaço negativo.

Produtos organizados em grids.

Animações extremamente suaves.

Botões minimalistas.

WhatsApp como principal conversão.

Instagram como principal canal social.

Nada de aparência de marketplace.

Nada de excesso de informação.

Nada de elementos desnecessários.

O resultado precisa parecer uma marca real, profissional e premium.

---

# 71. IMPORTANTE SOBRE O CATÁLOGO

Quando os arquivos do catálogo forem disponibilizados, analisar os arquivos e extrair:

* nome dos produtos;
* marcas;
* categorias;
* preços;
* descrições;
* tamanhos;
* volumes;
* imagens;
* disponibilidade;
* produtos em destaque;
* novidades.

Criar os produtos reais dentro da estrutura de dados.

Caso existam múltiplas fotos do mesmo produto, agrupá-las corretamente.

Não duplicar produtos.

Não alterar informações do catálogo sem autorização.

---

# 72. ENTREGA

Ao terminar, apresentar:

1. Estrutura final do projeto.
2. Rotas criadas.
3. Componentes criados.
4. Sistema de produtos.
5. Sistema de categorias.
6. Sistema de filtros.
7. Sistema de busca.
8. Integração do WhatsApp.
9. Integração/link do Instagram.
10. SEO.
11. Responsividade.
12. Performance.
13. Acessibilidade.
14. Instruções para adicionar novos produtos.
15. Instruções para alterar WhatsApp.
16. Instruções para alterar Instagram.
17. Instruções para futuramente conectar Supabase.

Antes de considerar o projeto concluído, faça uma revisão visual completa procurando:

* espaçamentos inconsistentes;
* fontes incorretas;
* elementos desalinhados;
* problemas de responsividade;
* excesso de elementos;
* contraste ruim;
* animações exageradas;
* imagens deformadas;
* botões inconsistentes;
* problemas de navegação.

Corrija tudo que encontrar.

O resultado final deve ser um site/catalogo **minimalista, moderno, sofisticado, rápido, responsivo e preparado para crescer futuramente para um e-commerce completo.**

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/2ddffdb0-48c5-4fb2-b9b8-b36441242f6f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
