# Hopee - Projeto de Proficiência de Fundamentos Web - CEFET/RJ

Oi!

## Subtítulo

Existe um erro de segurança no formulário da primeira tela. Como se trata de informações sensíveis (senha), o ideal seria utilizar o <code>method='post'</code>, porém seria necessário um lado servidor para receber os dados. Pelo tamanho deste projeto, e por ser apenas um MVP, não vi necessidade de utilizar o <code>method='post'</code> nesse momento. Ao invés disso, utilizei o <code>method='get'</code>, e o problema é que a URL recebe as informações colocadas no formulário.
