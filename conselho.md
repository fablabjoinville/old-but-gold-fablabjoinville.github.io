---
id: 3042
title: Conselho
date: 2016-10-03T23:10:12+00:00
author: Alan Fachini
layout: page
conselho:
  - pic: /wp-content/uploads/2016/10/alan-150x150.jpg
    nome: Alan Rafael Fachini
  - pic: /wp-content/uploads/2016/10/bruno-150x150.jpg
    nome: Bruno Fuentes
  - pic: /wp-content/uploads/2016/10/cedric-150x150.png
    nome: Cédric Craze
  - pic: /wp-content/uploads/2016/10/daniel-150x150.jpg
    nome: Daniel Camargo
  - pic: /wp-content/uploads/2016/10/diogo-150x150.jpg
    nome: Diogo Trentini
  - pic: /wp-content/uploads/2016/10/felipe-150x150.jpg
    nome: Felipe Silveira Nunes
  - pic: /wp-content/uploads/2016/10/guilherme-150x150.jpg
    nome: Guilherme Defreitas Juraszek
  - pic: /wp-content/uploads/2016/10/jeferson-150x150.jpg
    nome: Jeferson Batista
  - pic: /wp-content/uploads/2016/10/rogers-150x150.jpg
    nome: Rogers Pereira
  - pic: /wp-content/uploads/2016/10/romulo-150x150.png
    nome: Romulo Bahiense
  - pic: /wp-content/uploads/2016/10/13227599_10153645786953225_429195537479665797_o-150x150.jpg
    nome: Wyllian H. Kohn
---

## CONSELHO

O **Fab Lab Joinville** é administrado por um conselho voluntário de diretores. O
conselho é responsável por alcançar a missão da associação e pela saúde
financeira da organização. Qualquer membro do Fab Lab Joinville pode concorrer
ao conselho. Membros são convidados a comparecer às reuniões do conselho.
Verifique nosso calendário de eventos para saber as datas e horários das nossas
reuniões. Caso queria enviar sugestões ou tirar dúvidas com o conselho, nos
envie um email para <contato@fablabjoinville.com.br>.

<a href="//bit.ly/fablabjoinville-atas" class="btn btn-primary">Arquivo de Atas</a>
<a href="mailto:contato@fablabjoinville" class="btn btn-primary">Seja um Voluntário!</a>

<div class="conselho-membros" style="display: flex; flex-wrap: wrap; max-width: 800px">
{% for membro in page.conselho %}
    <div style="flex: 1">
        <img style="border-radius: 50%" src="{{site.baseurl}}{{membro.pic}}"><br>
        {{membro.nome}}
    </div>
{% endfor %}
</div>
